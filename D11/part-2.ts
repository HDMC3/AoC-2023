interface Galaxy {
    row: number;
    col: number;
}

const content = await Deno.readTextFile("data.txt");

const originalImage = content.split("\n").map((line) => line.trim().split(""));

// ========== GET EMPTY COLUMNS AND ROWS ==========
const WIDTH_IMAGE = originalImage[0].length;
const HEIGHT_IMAGE = originalImage.length;

const rowsWithoutGalaxies = [...Array(HEIGHT_IMAGE).keys()]
    .filter((row) => {
        return originalImage[row].every((v) => v == ".");
    });

const columnsWithoutGalaxies = [...Array(WIDTH_IMAGE).keys()]
    .filter((col) => {
        return originalImage.every((row) => row[col] == ".");
    });
// ========== GET EMPTY COLUMNS AND ROWS ==========

// ========== EXPAND GALAXY COLUMNS ==========
const EXPANDED_COLUMN_BY_COLUMN: Record<number, number> = {};
let expandedColumnCount = 0;
let currentEmptyColumn = columnsWithoutGalaxies.shift()!;
for (let col = 0; col < WIDTH_IMAGE; col++) {
    EXPANDED_COLUMN_BY_COLUMN[col] = expandedColumnCount;
    if (col == currentEmptyColumn) {
        expandedColumnCount += 1_000_000;
        currentEmptyColumn = columnsWithoutGalaxies.shift()!;
    } else {
        expandedColumnCount++;
    }
}
// ========== EXPAND GALAXY COLUMNS ==========

// ========== EXPAND GALAXY ROWS ==========
const EXPANDED_ROW_BY_ROW: Record<number, number> = {};
let expandedRowCount = 0;
let currentEmptyRow = rowsWithoutGalaxies.shift()!;
for (let row = 0; row < HEIGHT_IMAGE; row++) {
    EXPANDED_ROW_BY_ROW[row] = expandedRowCount;
    if (row == currentEmptyRow) {
        expandedRowCount += 1_000_000;
        currentEmptyRow = rowsWithoutGalaxies.shift()!;
    } else {
        expandedRowCount++;
    }
}
// ========== EXPAND GALAXY ROWS ==========

// ========== SET GALAXY OBJECTS ==========
const galaxies: Galaxy[] = [];
originalImage.forEach((row, rowId) => {
    row.forEach((col, colId) => {
        if (col == "#") {
            galaxies.push({
                col: EXPANDED_COLUMN_BY_COLUMN[colId],
                row: EXPANDED_ROW_BY_ROW[rowId],
            });
        }
    });
});
// ========== SET GALAXY OBJECTS ==========

// ========== GET DISTANCES ==========
const distances: number[] = [];
for (let i = 0; i < galaxies.length; i++) {
    const g1 = galaxies[i];
    for (let j = i + 1; j < galaxies.length; j++) {
        const g2 = galaxies[j];
        const distance = Math.abs(g2.row - g1.row) + Math.abs(g2.col - g1.col);
        distances.push(distance);
    }
}
// ========== GET DISTANCES ==========

// ========== CALCULATE SOLUTION ==========
const solution = distances.reduce(
    (sum, distance) => sum + distance,
    0,
);

// Solution: 411142919886
console.log(solution);
// ========== CALCULATE SOLUTION ==========
