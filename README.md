# Data Scraper for DIBB Site

This project is designed to automate the extraction and processing of data from the DIBB website. It consists of three main stages:

1. **Download PDF Automatically**
2. **Extract Data from PDF**
3. **Save to Excel File**

## Project Overview

The project utilizes Node.js and several npm packages to automate data collection and storage. It leverages `puppeteer` for web scraping, `pdf-parser` combined with regular expressions for parsing PDF content, and `xlsx` for exporting data to an Excel file.

## Features

- Automatically navigates and interacts with the DIBB website to download PDF documents.
- Extracts relevant data from PDFs using custom parsing logic.
- Saves extracted data into a structured Excel file for further use.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version ^18.20.0)

### Installation

1. **Install Node.js** if not already installed. You can download it from [Node.js official site](https://nodejs.org/).
2. **Install Yarn globally**:
   ```bash
   npm install -g yarn
   ```

3. **Install project dependencies**:
   ```bash
   yarn install
   ```

### Running the Project

To run the project, execute the following command:

```bash
node index.js
```

## Customizing Options

The project includes a configuration file where you can adjust certain settings:

- **File Path**: `utils/constants.js`
- **Options you can customize**:
  - **`lastDay`**: Adjusts the cutoff date for stopping PDF downloads (e.g., set to 7 days to only download PDFs from the last 7 days).
  - **`searchValues`**: List of product ID numbers to filter data.
  - **`showOnly`**: Specifies the types of data to show.

## Detailed Workflow

### Step 1: Download PDF Automatically
- **Set query**: Configure the search criteria on the DIBB site.
- **Navigate and click**: The script interacts with the page elements to click the download button and proceed to the next page.
- **Stop condition**: If the PDF's issued date is within the last 7 days, the script stops downloading.

### Step 2: Extract Data from PDF
- **PDF Parsing**: The project uses `pdf-parser` combined with regular expressions to extract text and structured data from the PDF files.

### Step 3: Save to Excel File
- **Data Export**: The extracted data is saved in an Excel format using the `xlsx` package, making it easy to share and analyze.

## Contributing

If you'd like to contribute to this project, please fork the repository, create a branch, and submit a pull request with your changes.

## Acknowledgments

- **Puppeteer** for headless browser automation.
- **pdf-parser** for PDF text extraction.
- **xlsx** for handling Excel file creation and export.

---

Feel free to modify or expand any sections as needed!
