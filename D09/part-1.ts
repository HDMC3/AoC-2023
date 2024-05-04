const content = await Deno.readTextFile("data.txt");

const lines = content.split("\n")
    .map((l) => l.trim());

const histories = lines
    .map((line) => line.split(" ").map((v) => Number(v)));

function predictValue(sequence: number[]) {
    const sequences: number[][] = [[...sequence]];

    while (true) {
        const lastSequence = sequences.at(-1)!;

        const newSequence: number[] = [];
        for (let i = 1; i < lastSequence.length; i++) {
            const diff = lastSequence[i] - lastSequence[i - 1];
            newSequence.push(diff);
        }
        sequences.push(newSequence);

        if (sequences.at(-1)?.every((v) => v == 0)) break;
    }

    const secondToLastIdx = sequences.length - 2;

    for (let i = secondToLastIdx; i >= 0; i--) {
        const aSequence = sequences[i];
        const bSequence = sequences[i + 1];
        const newSequenceValue = bSequence.at(-1)! + aSequence.at(-1)!;
        sequences[i].push(newSequenceValue);
    }

    return sequences[0].at(-1)!;
}

const result = histories
    .map(predictValue)
    .reduce((sum, curr) => sum + curr, 0);

// Solution: 1637452029
console.log(result);
