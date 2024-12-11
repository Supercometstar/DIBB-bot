# Data Scraper for DIBB Site

This project is designed to automate the extraction and processing of data from the DIBB website. It consists of three main stages:

1. **Download PDF Automatically**  
2. **Extract Data from PDF**  
3. **Save to Excel File**

With the new update, the project now includes a user-friendly **Electron-based UI** styled using **TailwindCSS**, and is packaged as an executable for easy distribution.

## Project Overview

The project utilizes Node.js for core functionality and Electron for the graphical user interface (GUI). It automates data collection and storage, leveraging Puppeteer for web scraping, pdf-parser combined with regular expressions for parsing PDF content, and xlsx for exporting data to an Excel file.

## Features

- Intuitive **UI for configuration and operation**, eliminating the need for command-line interaction.  
- Automatically navigates and interacts with the DIBB website to download PDF documents.  
- Extracts relevant data from PDFs using custom parsing logic.  
- Saves extracted data into a structured Excel file for further use.  

## Getting Started

### Prerequisites

No installation is needed! The project is distributed as a standalone executable.

### Running the Application

1. Navigate to `dist/DIBB-Scrapper-win32-x64/`.  
2. Double-click the `DIBB-Scraper.exe` file to launch the application.  

The app will open with a **graphical interface**, guiding you through the three main steps of the workflow.

## Customizing Options

The UI provides input fields and toggle options to customize key settings:

- **Cutoff Date**: Adjust the number of days to determine the cutoff date for PDF downloads (e.g., set to 7 days to only download PDFs from the last 7 days).  
- **Product ID Filter**: Enter product IDs to filter the data.  
- **Data Types to Display**: Choose specific types of data to extract and view.  

## Detailed Workflow

### Step 1: Download PDF Automatically  
- Use the **UI** to configure the search criteria and initiate the process.  
- The application interacts with the DIBB website, downloads the PDFs, and stops based on the cutoff date.  

### Step 2: Extract Data from PDF  
- The app parses the downloaded PDFs using **pdf-parser**, extracting text and structured data with precision.  

### Step 3: Save to Excel File  
- The extracted data is saved in an Excel format, ready for analysis or sharing.  

## UI Features

- **Electron-based GUI**: Ensures a seamless user experience.  
- **TailwindCSS styling**: Delivers a modern, responsive interface.  
- **Real-time status updates**: Displays the progress of PDF downloads and data extraction.  
- **Error notifications**: Alerts users to any issues during the process.  

## Contributing

If you'd like to contribute to this project, please fork the repository, create a branch, and submit a pull request with your changes.

## Acknowledgments

- **Puppeteer** for headless browser automation.  
- **pdf-parser** for PDF text extraction.  
- **xlsx** for handling Excel file creation and export.  
- **Electron** for creating the desktop application.  
- **TailwindCSS** for the beautiful UI styling.  

---

Feel free to let me know if you'd like further refinements!