function getExpandRow(row: string) {
    return [" "].concat(
        row.split("").map((char, i) => {
            if (i == row.length - 1) return char;
            return char + "  ";
        }).join("").split(""),
    ).concat([" "]);
}

export function getExpandedTerrain(
    rawTerrain: string[],
    initialPipeSymbol: string,
) {
    const EXPANDED_COLS_LENGTH = rawTerrain[0].length * 3;

    const expandedTerrain: string[][] = [];
    for (let rowId = 0; rowId < rawTerrain.length; rowId++) {
        if (rowId == rawTerrain.length - 1) {
            expandedTerrain.push(getExpandRow(rawTerrain[rowId]));
            continue;
        }

        expandedTerrain.push(getExpandRow(rawTerrain[rowId]));
        expandedTerrain.push(Array(EXPANDED_COLS_LENGTH).fill(" "));
        expandedTerrain.push(Array(EXPANDED_COLS_LENGTH).fill(" "));
    }
    expandedTerrain.unshift(Array(EXPANDED_COLS_LENGTH).fill(" "));
    expandedTerrain.push(Array(EXPANDED_COLS_LENGTH).fill(" "));

    const expandedMaze: string[][] = expandedTerrain.map((r) =>
        r.map((c) => c)
    );

    for (let row = 0; row < expandedTerrain.length; row++) {
        for (let col = 0; col < expandedTerrain[0].length; col++) {
            const tileSymbol = expandedTerrain[row][col] == "S"
                ? initialPipeSymbol
                : expandedTerrain[row][col];

            if (tileSymbol == "F") {
                expandedMaze[row][col + 1] = "-";
                expandedMaze[row + 1][col] = "|";
            }

            if (tileSymbol == "7") {
                expandedMaze[row][col - 1] = "-";
                expandedMaze[row + 1][col] = "|";
            }

            if (tileSymbol == "J") {
                expandedMaze[row][col - 1] = "-";
                expandedMaze[row - 1][col] = "|";
            }

            if (tileSymbol == "L") {
                expandedMaze[row][col + 1] = "-";
                expandedMaze[row - 1][col] = "|";
            }

            if (tileSymbol == "-") {
                expandedMaze[row][col + 1] = "-";
                expandedMaze[row][col - 1] = "-";
            }

            if (tileSymbol == "|") {
                expandedMaze[row - 1][col] = "|";
                expandedMaze[row + 1][col] = "|";
            }
        }
    }

    return expandedMaze;
}

export function terrainToFile(
    terrain: string[][],
    startPipeRow: number,
    startPipeCol: number,
) {
    const ASCII_PIPES: Record<string, string> = {
        "F": "╔",
        "7": "╗",
        "J": "╝",
        "L": "╚",
        "-": "═",
        "|": "║",
    };
    const text = terrain.map((row, rowIdx) => {
        return row.map((tile, colIdx) => {
            return rowIdx == startPipeRow && colIdx == startPipeCol
                ? "O"
                : ASCII_PIPES[tile] ?? tile;
        }).join("");
    }).join("\n");

    Deno.writeTextFileSync("terrain.txt", text);
}

export function printTerrain(terrain: string[][]) {
    console.clear();
    console.log(
        terrain.map((row) => {
            return row.join("");
        }).join("\n"),
    );
}

export function delay() {
    return new Promise<void>((res) => {
        setTimeout(() => {
            res();
        }, 50);
    });
}
