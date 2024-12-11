const { extractTextFromPDF, interpretData } = require('./pdfExtractor')
const { writeOrAppendToExcel } = require('./excelWriter.js')
const fs = require('fs')
const xlsx = require('xlsx')


module.exports = async (filePath, fileName, type) => {
    try {
        const pdfText = await extractTextFromPDF(filePath);

        if (pdfText) {
            const data = await interpretData(pdfText);
            data.fileName = fileName
            data.Type = type
            return data
            // writeOrAppendToExcel(data, saveLocation, fileName, type);
        } else {
            console.error('No PDF text extracted.');
        }
    } catch (error) {
        console.error('Error processing PDF:', error);
    }
}