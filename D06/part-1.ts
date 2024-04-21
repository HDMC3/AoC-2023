interface Race {
    time: number;
    distance: number;
}

function getWinningTimes(raceTime: number, recordDistance: number) {
    const A = Math.pow(raceTime, 2);
    const B = 4 * recordDistance;
    const t1 = (-raceTime + Math.sqrt(A - B)) / -2;
    const t2 = (-raceTime - Math.sqrt(A - B)) / -2;

    const startRange = Number.isInteger(t1) ? t1 + 1 : Math.ceil(t1);
    const endRange = Number.isInteger(t2) ? t2 - 1 : Math.floor(t2);

    const times: number[] = [];

    for (let t = startRange; t <= endRange; t++) {
        times.push(t);
    }

    return times;
}

const races: Race[] = [
    { time: 40, distance: 215 },
    { time: 92, distance: 1064 },
    { time: 97, distance: 1505 },
    { time: 90, distance: 1100 },
];

const winningTimes = races.map((race) => {
    return getWinningTimes(race.time, race.distance);
});

const result = winningTimes
    .reduce((acc, times) => acc * times.length, 1);

// Solution: 6209190
console.log(result);
