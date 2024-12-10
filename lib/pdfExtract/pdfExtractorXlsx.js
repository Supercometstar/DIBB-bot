const fs = require('fs');
const pdfParse = require('pdf-parse');
const xlsx = require('xlsx');  // Import xlsx library

// Pattern
const patterns = {
    "Contract Number": /REQUEST NO\.\s+([^\n]+)/,
    "PR Number": /REQUISITION\/PURCHASE REQUEST NO\.\s+([^\n]+)/,
    "Date Issued": /DATE ISSUED\s+([^\n]+)/,
    "NSN Number": /NSN\/MATERIAL:(\d{13})/, // Regex for NSN number
    "Part Number": /P\/N\s+([^\n]+)/,
    "Item Description": /ITEM DESCRIPTION\s+([^\n]+)/,
    Type: null, // Info from DIBBS, handled separately
    "Drawing Information": /CRITICAL APPLICATION ITEM\s+([^\n]+)/,
    "Manufacturer Required": null, // Info often not mentioned
    "Procurement History": /Procurement History([\s\S]*?)(?=\n{2,}|$)/, // Capture everything after 'Procurement History'
    "Procurement History1": /SECTION A\nProcurement History([\s\S]*?)(?=\n{2,}|$)/, // Capture everything after 'Procurement History'
    "CLIN 0001 Qty": /CLIN([\s\S]*?)(?=\n{2,}|$)/,
    "Unit of CLIN 0001": null,
    "Unit Count": null,
    "Delievery Date Due": /DELIVERY \(IN DAYS\):\s*(\S+)/,
    "Inspection Point": /INSPECTION POINT:\s+(\S+)/,
    "Government First Article Testing": null, // Info not mentioned in most cases
    "Contractor First Article Testing": null, // Info not mentioned in most cases
    "Government Production Lost Testing": null, // Info not mentioned
    "Contractor Production Lot Testing": null, // Info not mentioned
    "Packaging Requirements": /PKGING\s+([^\n]+)/,
};

// Function to extract text from PDF
async function extractTextFromPDF(filePath) {
    try {
        const pdfBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(pdfBuffer);
        return data.text; // Full document text
    } catch (error) {
        console.error('Error parsing PDF:', error);
        return null;
    }
}

// Reusable function to extract procurement history data
function extractProcurementHistory(text) {
    const procurementHistory = [];
    const procurementHistoryRegex = /([A-Za-z0-9]+)\s+([A-Za-z0-9]+)\s+([0-9.]+)\s+([0-9.]+)\s+(\d{8})\s+([YN])/g;

    let match;
    while ((match = procurementHistoryRegex.exec(text)) !== null) {
        procurementHistory.push({
            cage: match[1],
            contractNumber: match[2],
            quantity: match[3],
            unitCost: match[4],
            awdDate: match[5],
            surplusMaterial: match[6],
        });
    }

    return procurementHistory;
}

// Extract data for each field using regex
function extractFieldData(inputText, patterns) {
    const extractedData = {};
    for (const [key, regex] of Object.entries(patterns)) {
        if (regex) {
            const match = inputText.match(regex);
            extractedData[key] = match ? match[1].trim() : 'Not found';
        } else {
            extractedData[key] = `no`; // Handle special cases where regex is null
        }
    }
    return extractedData;
}

// Extract and combine procurement history data
function extractCombinedProcurementHistory(extractedData) {
    const procurementHistory = [
        ...extractProcurementHistory(extractedData["Procurement History"] || ''),
        ...extractProcurementHistory(extractedData["Procurement History1"] || '')
    ];
    extractedData["Procurement History"] = procurementHistory.length > 0 ? procurementHistory : 'Not found';
    return extractedData;
}

// Process CLIN data
function processClinData(extractedData) {
    const clinQuantity = extractedData["CLIN 0001 Qty"];
    const clinQuantityRegex = /([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([A-Z]+)\s+([0-9.]+)\s/;
    const temp_clin = clinQuantity.split("\n")[1];
    
    let match_clin;
    if ((match_clin = clinQuantityRegex.exec(temp_clin)) !== null) {
        extractedData["CLIN 0001 Qty"] = match_clin[5];
        extractedData["Unit of CLIN 0001"] = match_clin[4];
        extractedData.unitCount = match_clin[6];
    } else {
        extractedData["CLIN 0001 Qty"] = 'Not found';
        extractedData["Unit of CLIN 0001"] = 'Not found';
    }
    
    return extractedData;
}

// Function to write data to an Excel file
function writeToExcel(data, filePath) {
    try {
        // Convert data to an array of rows for the Excel sheet
        const headers = Object.keys(data);
        const values = Object.values(data);

        const ws_data = [
            headers,
            values
        ];

        // Create a new workbook and write the data
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.aoa_to_sheet(ws_data);
        xlsx.utils.book_append_sheet(wb, ws, 'Extracted Data');

        // Write the workbook to file
        xlsx.writeFile(wb, filePath);
        console.log(`Data written to ${filePath}`);
    } catch (error) {
        console.error('Error writing to Excel file:', error);
    }
}

// Main function to interpret data and write to Excel
async function interpretData(inputText, outputPath) {
    try {
        let extractedData = extractFieldData(inputText, patterns);

        // Extract and combine procurement history data
        extractedData = extractCombinedProcurementHistory(extractedData);

        // Handle packaging requirements
        extractedData["Packaging Requirements"] = "PKGING " + extractedData["Packaging Requirements"];

        // Clean up and remove "Procurement History1" field
        extractedData["Procurement History1"] = undefined;

        // Process CLIN data
        extractedData = processClinData(extractedData);

        // Write the extracted data to an Excel file
        writeToExcel(extractedData, outputPath);

    } catch (error) {
        console.error('Error interpreting data:', error);
    }
}

// Example usage
const inputText = await extractTextFromPDF('your-pdf-file.pdf');
await interpretData(inputText, 'output.xlsx');
