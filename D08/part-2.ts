type Instruction = "L" | "R";

const content = await Deno.readTextFile("data.txt");

const lines = content.split("\n").map((l) => l.trim());

const INSTRUCTIONS = lines[0].split("");

const nodeDict = new Map<string, Record<Instruction, string>>();
const initialNodes: string[] = [];

for (const line of lines.slice(2)) {
    const [nodeName, nextNodes] = line.split(" = ");
    const [leftNodeName, rightNodeName] = nextNodes.slice(
        1,
        nextNodes.length - 1,
    ).split(", ");

    nodeDict.set(nodeName, {
        L: leftNodeName,
        R: rightNodeName,
    });

    if (nodeName[nodeName.length - 1] === "A") {
        initialNodes.push(nodeName);
    }
}

const periodicStepsToZ: number[] = [];
for (const node of initialNodes) {
    let currentNode = node;
    let instructionIdx = 0;
    let steps = 0;

    while (true) {
        const instruction = INSTRUCTIONS[instructionIdx] as Instruction;

        const possibleNextNodes = nodeDict.get(currentNode)!;

        currentNode = possibleNextNodes[instruction];

        steps++;
        instructionIdx++;

        if (instructionIdx === INSTRUCTIONS.length) {
            instructionIdx = 0;
        }

        if (currentNode.slice(-1) === "Z") {
            periodicStepsToZ.push(steps);
            break;
        }
    }
}

const primeNumbers: number[] = [];
const maxPeriodicSteps = Math.max(...periodicStepsToZ);
for (let i = 2; i <= maxPeriodicSteps; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) primeNumbers.push(i);
}

const factors = [];
let primerNumberIdx = 0;
while (true) {
    let divisionCount = 0;
    const prime = primeNumbers[primerNumberIdx];

    for (let i = 0; i < periodicStepsToZ.length; i++) {
        if (periodicStepsToZ[i] % prime === 0) {
            periodicStepsToZ[i] /= prime;
            divisionCount++;
        }
    }

    if (divisionCount == 0) {
        primerNumberIdx++;
    } else {
        factors.push(prime);
        divisionCount = 0;
    }

    if (periodicStepsToZ.every((n) => n === 1)) break;
}

const mcm = factors.reduce((acc, factor) => {
    return acc * factor;
}, 1);

// Solution: 10241191004509
console.log(mcm);
