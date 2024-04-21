interface Race {
    time: number;
    distance: number;
}

function getWinningTimeLimits(raceTime: number, recordDistance: number) {
    const A = Math.pow(raceTime, 2);
    const B = 4 * recordDistance;
    const t1 = (-raceTime + Math.sqrt(A - B)) / -2;
    const t2 = (-raceTime - Math.sqrt(A - B)) / -2;

    const startRange = Number.isInteger(t1) ? t1 + 1 : Math.ceil(t1);
    const endRange = Number.isInteger(t2) ? t2 - 1 : Math.floor(t2);

    return [startRange, endRange];
}

const race: Race = {
    time: 40929790,
    distance: 215106415051100,
};

const winningTimeLimits = getWinningTimeLimits(race.time, race.distance);

const result = winningTimeLimits[1] - winningTimeLimits[0];

// Solution: 28545089
console.log(result + 1);
