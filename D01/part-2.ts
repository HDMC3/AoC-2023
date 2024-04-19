function isDigit(str: string) {
    const code = str.charCodeAt(0);
    return code >= 48 && code <= 57;
}

const content = await Deno.readTextFile("data.txt");
const DIGITS_BY_TEXT: Record<string, string> = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
};

const corruptedValues = content.split("\n").map((v) => v.trim());

const calibrationValues: number[] = [];

for (const value of corruptedValues) {
    const reg = /one|two|three|four|five|six|seven|eight|nine/g;

    let textDigit = "";
    let digits = "";
    for (let i = 0; i < value.length; i++) {
        const chr = value[i];

        if (isDigit(chr)) {
            textDigit = "";
            digits += chr;
            continue;
        }

        textDigit += chr;
        const match = reg.exec(textDigit);
        if (match != null) {
            digits += DIGITS_BY_TEXT[match[0]];
            textDigit = chr;
        }
    }

    calibrationValues.push(Number(`${digits[0]}${digits[digits.length - 1]}`));
}

const calibrationValuesSum = calibrationValues.reduce(
    (sum, value) => sum + value,
    0,
);

// Solution: 54019
console.log(calibrationValuesSum);
