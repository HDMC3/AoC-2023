const content = await Deno.readTextFile("data.txt");

type GameTimeGroup = Record<string, number>;

interface GameTime {
    id: number;
    groups: GameTimeGroup[];
}

function getGameTimeGroup(groupsStr: string) {
    const gameTimeGroup: GameTimeGroup = {
        green: 0,
        blue: 0,
        red: 0,
    };
    groupsStr.split(", ").forEach((cubeInfo) => {
        const [quantity, color] = cubeInfo.split(" ");
        gameTimeGroup[color] = Number(quantity);
    });

    return gameTimeGroup;
}

function isPossibleGameTime(gameTime: GameTime) {
    const isPossible = gameTime.groups
        .every((group) =>
            group["green"] <= LIMIT_GREEN_CUBES &&
            group["blue"] <= LIMIT_BLUE_CUBES && group["red"] <= LIMIT_RED_CUBES
        );
    return isPossible;
}

const gameTimes = content.split("\n").map((v) => {
    const str = v.trim();
    const [gameInfoPart, groupsPart] = str.split(": ");
    const [, gameTimeId] = gameInfoPart.split(" ");
    const gameTimeGroups = groupsPart.split("; ").map(getGameTimeGroup);
    const gameTime: GameTime = {
        id: Number(gameTimeId),
        groups: gameTimeGroups,
    };
    return gameTime;
});

const LIMIT_GREEN_CUBES = 13;
const LIMIT_BLUE_CUBES = 14;
const LIMIT_RED_CUBES = 12;

const possibleGameTimesIds: number[] = gameTimes
    .filter(isPossibleGameTime)
    .map((gameTime) => gameTime.id);

const sum = possibleGameTimesIds.reduce((sum, id) => sum + id, 0);

// Solution:
console.log(sum);
