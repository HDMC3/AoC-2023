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

const powers = gameTimes.map((gameTime) => {
    let maxGreen = 0;
    let maxBlue = 0;
    let maxRed = 0;
    gameTime.groups.forEach((group) => {
        maxGreen = group["green"] > maxGreen ? group["green"] : maxGreen;
        maxBlue = group["blue"] > maxBlue ? group["blue"] : maxBlue;
        maxRed = group["red"] > maxRed ? group["red"] : maxRed;
    });
    return maxGreen * maxBlue * maxRed;
});

const sum = powers.reduce((sum, power) => sum + power, 0);

// Solution: 64097
console.log(sum);
