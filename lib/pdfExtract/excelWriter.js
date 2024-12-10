const xlsx = require('xlsx');

// Function to write or append data to an Excel file
function writeOrAppendToExcel(datas, saveLocation) {
    try {
        let wb;

        // Check if the file already exists
        wb = xlsx.utils.book_new();

        for (let data of datas) {
            let sheetName = data.fileName
            delete data.fileName

            let ws_data = [];

            // Convert the extracted data into key-value format
            for (let [key, value] of Object.entries(data)) {
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    // If value is an object, display each key-value pair in new lines
                    ws_data.push([key, '']);
                    for (let [nestedKey, nestedValue] of Object.entries(value)) {
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
            let ws = xlsx.utils.aoa_to_sheet(ws_data);

            // Append the new sheet to the workbook
            try {
                xlsx.utils.book_append_sheet(wb, ws, sheetName);
            }catch (error) {
                // console.log('Error duplicate sheetName:', error)
            }
        }


        // Write the updated workbook back to the file
        xlsx.writeFile(wb, saveLocation);
    } catch (error) {
        // console.error('Error writing to Excel file:', error);
    }
}

module.exports = { writeOrAppendToExcel };
