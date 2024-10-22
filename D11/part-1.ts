interface Galaxy {
    row: number;
    col: number;
}

const content = await Deno.readTextFile("data.txt");

const originalImage = content.split("\n").map((line) => line.trim().split(""));

// ========== EXPAND IMAGE ==========
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

const expandedImage: string[][] = [];
originalImage.forEach((row, rowId) => {
    const expandedRow: string[] = [];
    row.forEach((col, colId) => {
        expandedRow.push(col);

        if (columnsWithoutGalaxies.includes(colId)) {
            expandedRow.push(".");
        }
    });

    if (rowsWithoutGalaxies.includes(rowId)) {
        expandedImage.push(expandedRow);
    }
    expandedImage.push(expandedRow);
});
// ========== EXPAND IMAGE ==========

// ========== SET GALAXY OBJECTS ==========
const galaxies: Galaxy[] = [];
expandedImage.forEach((line, row) => {
    line.forEach((char, col) => {
        if (char == "#") {
            galaxies.push({ row, col });
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
const solution = Object.values(distances).reduce(
    (sum, distance) => sum + distance,
    0,
);

// Solution: 9742154
console.log(solution);
// ========== CALCULATE SOLUTION ==========
