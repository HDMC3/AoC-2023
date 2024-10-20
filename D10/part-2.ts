import { getExpandedTerrain } from "./helpers.ts";

interface Tile {
    tileSymbol: string;
    row: number;
    col: number;
    close: boolean;
}

const content = await Deno.readTextFile("data.txt");

const START_PIPE_SYMBOL = "-";

const rawTerrain = content.split("\n").map((l) => l.trim().split(""));

// ========== SET TILE OBJECTS ==========
let START_PIPE: Tile = {
    tileSymbol: "F",
    row: 0,
    col: 0,
    close: false,
};

const terrain: Tile[][] = rawTerrain.map((row, rowId) => {
    return row.map<Tile>((col, colId) => {
        const terrainSymbol = col == "S" ? START_PIPE_SYMBOL : col;

        const tile: Tile = {
            tileSymbol: terrainSymbol,
            row: rowId,
            col: colId,
            close: false,
        };

        if (col == "S") {
            START_PIPE = tile;
        }

        return tile;
    });
});
// ========== SET TILE OBJECTS ==========

// ========== GET PIPES LOOP ==========
function getPipeConnections(pipe: Tile, terrain: Tile[][]) {
    if (pipe.tileSymbol == "F") {
        return [
            terrain[pipe.row][pipe.col + 1],
            terrain[pipe.row + 1][pipe.col],
        ];
    } else if (pipe.tileSymbol == "7") {
        return [
            terrain[pipe.row][pipe.col - 1],
            terrain[pipe.row + 1][pipe.col],
        ];
    } else if (pipe.tileSymbol == "J") {
        return [
            terrain[pipe.row][pipe.col - 1],
            terrain[pipe.row - 1][pipe.col],
        ];
    } else if (pipe.tileSymbol == "L") {
        return [
            terrain[pipe.row][pipe.col + 1],
            terrain[pipe.row - 1][pipe.col],
        ];
    } else if (pipe.tileSymbol == "-") {
        return [
            terrain[pipe.row][pipe.col + 1],
            terrain[pipe.row][pipe.col - 1],
        ];
    } else { // pipe.tileSymbol == '|'
        return [
            terrain[pipe.row + 1][pipe.col],
            terrain[pipe.row - 1][pipe.col],
        ];
    }
}

const pipesLoop: Tile[] = [START_PIPE];
const startPipeConnections = getPipeConnections(START_PIPE, terrain);
let currentPipe = startPipeConnections[0];
let previousPipe = START_PIPE;
while (true) {
    const connections = getPipeConnections(currentPipe, terrain);

    const nextPipe = connections[0] == previousPipe
        ? connections[1]
        : connections[0];

    previousPipe = currentPipe;

    pipesLoop.push(currentPipe);

    if (nextPipe == START_PIPE) break;

    currentPipe = nextPipe;
}
// ========== GET PIPES LOOP ==========

// ========== CLEAN TERRAIN ==========
terrain.forEach((row) => {
    row.forEach((tile) => {
        if (!pipesLoop.includes(tile)) {
            tile.tileSymbol = ".";
        }
    });
});
// ========== CLEAN TERRAIN ==========

// ========== EXPAND RAW TERRAIN ==========
const expandedRawTerrain = getExpandedTerrain(
    terrain.map((row) => row.map((t) => t.tileSymbol).join("")),
    START_PIPE_SYMBOL,
);
// ========== EXPAND RAW TERRAIN ==========

// ========== SET TILES OF THE EXTENDED TERRAIN MAP ==========
const expandedTerrain = expandedRawTerrain.map((row, rowId) => {
    return row.map<Tile>((col, colId) => {
        return {
            tileSymbol: col,
            col: colId,
            row: rowId,
            close: false,
        };
    });
});
// ========== SET TILES OF THE EXTENDED TERRAIN MAP ==========

// ========== SWEEP ALGORITHM ==========
function getAdjacentTiles(tile: Tile, terrain: Tile[][]) {
    const tiles = [];

    if (tile.row - 1 >= 0) {
        const topTile = terrain[tile.row - 1][tile.col];
        topTile.close || tiles.push(topTile);
    }
    if (tile.col + 1 <= terrain[0].length - 1) {
        const rightTile = terrain[tile.row][tile.col + 1];
        rightTile.close || tiles.push(rightTile);
    }
    if (tile.row + 1 <= terrain.length - 1) {
        const bottomTile = terrain[tile.row + 1][tile.col];
        bottomTile.close || tiles.push(bottomTile);
    }
    if (tile.col - 1 >= 0) {
        const leftTile = terrain[tile.row][tile.col - 1];
        leftTile.close || tiles.push(leftTile);
    }

    return tiles.filter((t) =>
        !["F", "7", "J", "L", "-", "|"].includes(t.tileSymbol)
    );
}

const openTiles: Tile[] = [];
let currentTile = expandedTerrain[0][0];
while (true) {
    const adjacentTiles = getAdjacentTiles(currentTile, expandedTerrain);

    if (adjacentTiles.length > 0) {
        currentTile.close = true;
        currentTile.tileSymbol = "░";
        currentTile = adjacentTiles.shift()!;
        openTiles.push(...adjacentTiles);
        continue;
    }

    currentTile.close = true;
    currentTile.tileSymbol = "░";
    const next = openTiles.find((t) => !t.close);
    if (next == undefined) break;
    currentTile = next;
}
// ========== SWEEP ALGORITHM ==========

// ========== CALCULATE SOLUTION ==========
let solution = 0;
expandedTerrain.forEach((row) => {
    row.forEach((col) => {
        solution += col.tileSymbol == "." ? 1 : 0;
    });
});

// Solution: 395
console.log(solution);
// ========== CALCULATE SOLUTION ==========
