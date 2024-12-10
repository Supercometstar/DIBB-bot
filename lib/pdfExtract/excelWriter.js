const xlsx = require('xlsx');

// Function to write or append data to an Excel file
function writeOrAppendToExcel(data, fileName, sheetName, type) {
    data.type = type
    try {
        let wb;

        // Check if the file already exists
        try {
            wb = xlsx.readFile(fileName); // Read the existing workbook
        } catch (error) {
            // If file doesn't exist, create a new workbook
            wb = xlsx.utils.book_new();
        }

        const ws_data = [];

        // Convert the extracted data into key-value format
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                // If value is an object, display each key-value pair in new lines
                ws_data.push([key, '']);
                for (const [nestedKey, nestedValue] of Object.entries(value)) {
                    ws_data.push([`    ${nestedKey}`, nestedValue]);
                }
            } else if (Array.isArray(value)) {
                // If value is an array, display each item in new lines
                ws_data.push([key, '']);
                value.forEach(item => {
                    ws_data.push([
                        '',
                        item.cage || '',
                        item.contractNumber || '',
                        item.quantity || '',
                        item.unitCost || '',
                        item.awdDate || '',
                        item.surplusMaterial || ''
                    ]);
                });
            } else {
                // If it's a simple value, just add the key and value
                ws_data.push([key, value]);
            }
        }

        // Create a new sheet from the data
        const ws = xlsx.utils.aoa_to_sheet(ws_data);

        // Append the new sheet to the workbook
        xlsx.utils.book_append_sheet(wb, ws, sheetName);

        // Write the updated workbook back to the file
        xlsx.writeFile(wb, fileName);
    } catch (error) {
        // console.error('Error writing to Excel file:', error);
    }
}

module.exports = { writeOrAppendToExcel };
