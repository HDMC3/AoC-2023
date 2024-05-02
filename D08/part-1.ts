type Instruction = "L" | "R";

const content = await Deno.readTextFile("data.txt");

const lines = content.split("\n").map((l) => l.trim());

const INSTRUCTIONS = lines[0].split("");
const nodeDict = new Map<string, Record<Instruction, string>>();

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
}

let currentNode = "AAA";
let instructionIdx = 0;
let steps = 0;

while (currentNode != "ZZZ") {
    const instruction = INSTRUCTIONS[instructionIdx] as Instruction;

    const nextNodes = nodeDict.get(currentNode);

    if (!nextNodes) break;

    currentNode = nextNodes[instruction];

    steps++;
    instructionIdx++;
    if (instructionIdx === INSTRUCTIONS.length) {
        instructionIdx = 0;
    }
}

// Solution: 14893
console.log(steps);
