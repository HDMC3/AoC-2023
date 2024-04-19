const content = await Deno.readTextFile("data.txt");

class PartNumber {
    private _value: string;
    private _row: number;
    private _col: number;

    constructor(value: string, row: number, col: number) {
        this._row = row;
        this._col = col;
        this._value = value;
    }

    get value() {
        return this._value;
    }

    get row() {
        return this._row;
    }

    get col() {
        return this._col;
    }
}

function isDigit(n: string) {
    const code = n.charCodeAt(0);
    return code >= 48 && code <= 57;
}

function getBorderValues(num: PartNumber) {
    let values: string[] = [];
    const row = num.row;
    const col = num.col;
    const numSize = num.value.toString().length;
    // Top side (no corners)
    if (row - 1 >= 0) {
        const topSideValues = ENGINE_SCHEMA[row - 1].slice(col, col + numSize)
            .split("");
        values = values.concat(topSideValues);
    }

    // Bottom side (no corners)
    if (row + 1 <= LAST_ROW_IDX) {
        const bottomSideValues = ENGINE_SCHEMA[row + 1].slice(
            col,
            col + numSize,
        ).split("");
        values = values.concat(bottomSideValues);
    }

    // Left side
    if (col - 1 >= 0) {
        values.push(ENGINE_SCHEMA[row][col - 1]);
    }

    // Right side
    if (col + numSize <= LAST_COL_IDX) {
        values.push(ENGINE_SCHEMA[row][col + numSize]);
    }

    // Corners
    if (row - 1 >= 0 && col - 1 >= 0) {
        values.push(ENGINE_SCHEMA[row - 1][col - 1]);
    }
    if (row - 1 >= 0 && col + numSize <= LAST_COL_IDX) {
        values.push(ENGINE_SCHEMA[row - 1][col + numSize]);
    }
    if (row + 1 <= LAST_ROW_IDX && col + numSize <= LAST_COL_IDX) {
        values.push(ENGINE_SCHEMA[row + 1][col + numSize]);
    }
    if (row + 1 <= LAST_ROW_IDX && col - 1 >= 0) {
        values.push(ENGINE_SCHEMA[row + 1][col - 1]);
    }

    return values;
}

function isAdyacentNumber(borderValues: string[]) {
    return borderValues.some((v) => !isDigit(v) && v !== ".");
}

const ENGINE_SCHEMA = content.split("\n").map((v) => v.trim());

const LAST_ROW_IDX = ENGINE_SCHEMA.length - 1;
const LAST_COL_IDX = ENGINE_SCHEMA[0].length - 1;

const possiblePartNumbers: PartNumber[] = [];

for (let row = 0; row <= LAST_ROW_IDX; row++) {
    const rowEngine = ENGINE_SCHEMA[row];
    const reg = /[0-9]+/g;
    let match = reg.exec(rowEngine);
    while (match != null) {
        const value = match[0];
        const col = match["index"];
        const partNumber = new PartNumber(value, row, col);
        possiblePartNumbers.push(partNumber);
        match = reg.exec(rowEngine);
    }
}

const partNumbers = possiblePartNumbers.filter((n) => {
    const nBorderValues = getBorderValues(n);
    return isAdyacentNumber(nBorderValues);
});

const sum = partNumbers.reduce(
    (sum, partNumber) => sum + Number(partNumber.value),
    0,
);

// Solution: 544664
console.log(sum);
