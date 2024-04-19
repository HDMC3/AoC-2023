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

class Position {
    constructor(public row: number, public col: number, public value: string) {}
}

function getBorderPositions(num: PartNumber) {
    let positions: Position[] = [];
    const row = num.row;
    const col = num.col;
    const numSize = num.value.toString().length;

    // Top side (no corners)
    if (row - 1 >= 0) {
        const topSidePositions = ENGINE_SCHEMA[row - 1]
            .slice(col, col + numSize)
            .split("")
            .map((v, i) => new Position(row - 1, col + i, v));
        positions = positions.concat(topSidePositions);
    }

    // Bottom side (no corners)
    if (row + 1 <= LAST_ROW_IDX) {
        const bottomSidePositions = ENGINE_SCHEMA[row + 1]
            .slice(col, col + numSize)
            .split("")
            .map((v, i) => new Position(row + 1, col + i, v));
        positions = positions.concat(bottomSidePositions);
    }

    // Left side
    if (col - 1 >= 0) {
        const value = ENGINE_SCHEMA[row][col - 1];
        positions.push(new Position(row, col - 1, value));
    }

    // Right side
    if (col + numSize <= LAST_COL_IDX) {
        const value = ENGINE_SCHEMA[row][col + numSize];
        positions.push(new Position(row, col + numSize, value));
    }

    // Corners
    if (row - 1 >= 0 && col - 1 >= 0) {
        const value = ENGINE_SCHEMA[row - 1][col - 1];
        positions.push(new Position(row - 1, col - 1, value));
    }
    if (row - 1 >= 0 && col + numSize <= LAST_COL_IDX) {
        const value = ENGINE_SCHEMA[row - 1][col + numSize];
        positions.push(new Position(row - 1, col + numSize, value));
    }
    if (row + 1 <= LAST_ROW_IDX && col + numSize <= LAST_COL_IDX) {
        const value = ENGINE_SCHEMA[row + 1][col + numSize];
        positions.push(new Position(row + 1, col + numSize, value));
    }
    if (row + 1 <= LAST_ROW_IDX && col - 1 >= 0) {
        const value = ENGINE_SCHEMA[row + 1][col - 1];
        positions.push(new Position(row + 1, col - 1, value));
    }

    return positions;
}

const ENGINE_SCHEMA = content.split("\n").map((v) => v.trim());

const LAST_ROW_IDX = ENGINE_SCHEMA.length - 1;
const LAST_COL_IDX = ENGINE_SCHEMA[0].length - 1;

const schematicNumbers: PartNumber[] = [];

for (let row = 0; row <= LAST_ROW_IDX; row++) {
    const rowEngine = ENGINE_SCHEMA[row];
    const reg = /[0-9]+/g;
    let match = reg.exec(rowEngine);
    while (match != null) {
        const value = match[0];
        const col = match["index"];
        const partNumber = new PartNumber(value, row, col);
        schematicNumbers.push(partNumber);
        match = reg.exec(rowEngine);
    }
}

const gearsDict: Record<string, PartNumber[]> = {};

for (const num of schematicNumbers) {
    const numBorderPositions = getBorderPositions(num);

    for (const position of numBorderPositions) {
        if (position.value != "*") continue;

        const key = `${position.row}-${position.col}`;
        if (gearsDict[key] == undefined) {
            gearsDict[key] = [num];
        } else {
            gearsDict[key].push(num);
        }
    }
}

let sum = 0;
for (const [, partNumbers] of Object.entries(gearsDict)) {
    if (partNumbers.length !== 2) continue;

    sum += Number(partNumbers[0].value) * Number(partNumbers[1].value);
}

// Solution: 84495585
console.log(sum);
