function isDigit(str: string) {
    const code = str.charCodeAt(0);
    return code >= 48 && code <= 57;
}

const content = await Deno.readTextFile("data.txt");

const corruptedValues = content.split("\n").map((v) => v.trim());
const calibrationValues: number[] = [];

for (const value of corruptedValues) {
    let leftIdx = 0;
    let rightIdx = value.length - 1;

    let firstDigit = null;
    let lastDigit = null;

    while (!firstDigit || !lastDigit) {
        if (!firstDigit && isDigit(value[leftIdx])) {
            firstDigit = value[leftIdx];
        } else {
            leftIdx++;
        }

        if (!lastDigit && isDigit(value[rightIdx])) {
            lastDigit = value[rightIdx];
        } else {
            rightIdx--;
        }
    }

    calibrationValues.push(Number(`${firstDigit}${lastDigit}`));
}

const calibrationValuesSum = calibrationValues.reduce(
    (sum, value) => sum + value,
    0,
);

// Solution: 54632
console.log(calibrationValuesSum);
