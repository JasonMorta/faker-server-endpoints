// Import the XLSX library
const XLSX = require('xlsx');

// Function to fetch and convert Excel to JSON
async function fetchExcelToJson(url) {
    try {
        // Fetch the file
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the binary data
        const arrayBuffer = await response.arrayBuffer();

        // Convert the binary data to a workbook
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });

        // Get the first worksheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert the worksheet to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });

        return jsonData;
    } catch (error) {
        console.error('Error fetching or processing the Excel file:', error);
    }
}

// Example usage:
const url = 'https://1drv.ms/x/c/487f7d5d7e05eedb/EVlnpZwqmapMoR9HkmvyimIBrDhVOqzRyp1HOo19MRA8EA?e=h5p8le';
fetchExcelToJson(url).then(jsonData => {
    console.log(JSON.stringify(jsonData, null, 2));
});
