PDF Data Extraction Tool

Overview
This script is designed to automate the process of extracting specific data from PDF files downloaded from the DIBBS (DLA Internet Bid Board System) website. The purpose is to save time when pulling relevant information from procurement-related PDFs for sourcing or contracting purposes.

Features
Automated Text Extraction: The tool uses the pdf-parse library to parse the content of PDF files and extract text programmatically.
Targeted Data Retrieval: Employs regular expressions (regex) to find and extract specific information (e.g., "PKGING DATA" and associated details).
Scalability: Can be adapted to handle multiple PDFs or different data extraction needs with minor modifications.
Requirements
Node.js: A JavaScript runtime for executing the script.
Dependencies:
fs: Built-in Node.js module for file operations.
pdf-parse: A library for parsing PDF files and extracting their content.
Usage Instructions
Download the Required PDF:

Log in to the DIBBS platform.
Download the desired PDF file containing procurement data (e.g., "SPE4A624T21NW.PDF").
Set Up the Environment:

Install Node.js from the official website.
Install required packages using npm:
bash
Copy code
npm install pdf-parse
Run the Script:

Save the downloaded PDF in the same directory as the script or provide its correct file path.
Execute the script with Node.js:
bash
Copy code
node script.js
Extracted Data:

The script will parse the PDF, extract the relevant information based on the regex pattern, and display the result in the console.
Extraction Details
Input Source: PDF file downloaded from the DIBBS website.
Methodology:
Text Parsing: The pdf-parse library extracts raw text from the PDF.
Regex Matching: Specific patterns in the text are targeted using regular expressions, focusing on "PKGING DATA" and the next two lines of data.
Example Target Data:

vbnet
Copy code
PKGING DATA - MIL-STD-2073-1E 
QUP:001  PRES MTHD:31  CLNG/DRY:1  PRESV MAT:00
Purpose
This tool was inspired by methods described in the DIBBS Tool Saving Time When Pulling the Info From the PDFs - MeND Sourcing - Government Contracting Expert. It aims to streamline the extraction of procurement details for professionals involved in government contracting and sourcing.

Notes
Ensure that the PDF file format and content structure are consistent with those downloaded from the DIBBS platform to ensure proper extraction.
If no match is found, verify that the regex pattern aligns with the expected text structure in the PDF.
Future Enhancements
Add support for batch processing of multiple PDFs.
Implement a graphical interface for easier user interaction.
Expand regex patterns for extracting other types of procurement data.