// Hypothetical function to find the first empty row in a 2D array (spreadsheet)
function firstEmptyRow(spreadsheet) {
    for (let rowIndex = 0; rowIndex < spreadsheet.length; rowIndex++) {
        let row = spreadsheet[rowIndex];
        // Check if all cells in the row are empty
        if (row.every(cell => cell === "")) {
            return rowIndex;
        }
    }
    // Return -1 if no empty row is found
    return -1;
}

// Example usage:
var spreadsheet = [
    ["Name", "Age", "City"],
    ["Alice", "30", "New York"],
    ["Bob", "25", "Los Angeles"],
    ["", "", ""],  // This is the first empty row
    ["Charlie", "35", "Chicago"]
];

var i = firstEmptyRow(spreadsheet);
console.log(i); // Output should be 3, since the fourth row (index 3) is the first empty one
