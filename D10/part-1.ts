interface Position {
    row: number;
    col: number;
}

interface Tile {
    tileSymbol: string;
    AConnection?: Position;
    BConnection?: Position;
}

const N_OFFSET: Position = { row: -1, col: 0 };
const E_OFFSET: Position = { row: 0, col: +1 };
const S_OFFSET: Position = { row: +1, col: 0 };
const O_OFFSET: Position = { row: 0, col: -1 };

const PIPE_CONNECTION_OFFSET: Record<string, Position[]> = {
    "|": [N_OFFSET, S_OFFSET],
    "-": [O_OFFSET, E_OFFSET],
    "L": [N_OFFSET, E_OFFSET],
    "J": [N_OFFSET, O_OFFSET],
    "7": [S_OFFSET, O_OFFSET],
    "F": [E_OFFSET, S_OFFSET],
    ".": [],
    "S": [],
};

function isValidPosition(
    row: number,
    col: number,
    rowOffset: number,
    colOffset: number,
) {
    return (row + rowOffset >= 0 &&
        row + rowOffset < rawMaze.length) &&
        (col + colOffset >= 0 &&
            col + colOffset < rawMaze[0].length);
}

/*
INITIAL POSITION ON THE MAZE:

      - - J
      - S -
      - - -

'S' PIPE MUST BE '-'
*/
const INITIAL_PIPE = "-";
let INITIAL_TILE: Tile = {
    tileSymbol: INITIAL_PIPE,
};

const content = await Deno.readTextFile("data.txt");
const rawMaze = content.split("\n").map((l) => l.trim().split(""));
const maze: Tile[][] = [];

for (let rowIdx = 0; rowIdx < rawMaze.length; rowIdx++) {
    maze.push([]);
    for (let colIdx = 0; colIdx < rawMaze[0].length; colIdx++) {
        const symbol = rawMaze[rowIdx][colIdx];
        const offsets =
            PIPE_CONNECTION_OFFSET[symbol == "S" ? INITIAL_PIPE : symbol];

        const AConnectionIsValid = symbol != "." &&
            isValidPosition(rowIdx, colIdx, offsets[0].row, offsets[0].col);

        const BConnectionIsValid = symbol != "." &&
            isValidPosition(rowIdx, colIdx, offsets[1].row, offsets[1].col);

        const tile: Tile = {
            tileSymbol: symbol == "S" ? INITIAL_PIPE : symbol,
            AConnection: !AConnectionIsValid ? undefined : {
                row: rowIdx + offsets[0].row,
                col: colIdx + offsets[0].col,
            },
            BConnection: !BConnectionIsValid ? undefined : {
                row: rowIdx + offsets[1].row,
                col: colIdx + offsets[1].col,
            },
        };

        if (symbol == "S") {
            INITIAL_TILE = tile;
        }

        maze[rowIdx].push(tile);
    }
}

function getNextTile(lastTile: Tile, currentTile: Tile) {
    if (!currentTile.AConnection || !currentTile.BConnection) return;

    const nextATile =
        maze[currentTile.AConnection.row][currentTile.AConnection.col];
    const nextBTile =
        maze[currentTile.BConnection.row][currentTile.BConnection.col];

    if (lastTile == nextATile) {
        return nextBTile;
    }

    return nextATile;
}

let lastTileInPathA = undefined;
let currentTileInPathA = INITIAL_TILE;
let lastTileInPathB = undefined;
let currentTileInPathB = INITIAL_TILE;
let steps = 0;

do {
    if (lastTileInPathA == undefined && lastTileInPathB == undefined) {
        lastTileInPathA = INITIAL_TILE;
        lastTileInPathB = INITIAL_TILE;

        const nextPathAPosition = INITIAL_TILE.AConnection!;
        const nextPathBPosition = INITIAL_TILE.BConnection!;

        currentTileInPathA =
            maze[nextPathAPosition?.row][nextPathAPosition?.col];
        currentTileInPathB =
            maze[nextPathBPosition?.row][nextPathBPosition?.col];
        steps++;
        continue;
    }

    const nextTileInPathA = getNextTile(lastTileInPathA!, currentTileInPathA);
    lastTileInPathA = currentTileInPathA;
    if (nextTileInPathA) {
        currentTileInPathA = nextTileInPathA;
    }

    const nextTileInPathB = getNextTile(lastTileInPathB!, currentTileInPathB);
    lastTileInPathB = currentTileInPathB;
    if (nextTileInPathB) {
        currentTileInPathB = nextTileInPathB;
    }

    steps++;
} while (currentTileInPathA != currentTileInPathB);

// Solution: 7012
console.log(steps);
