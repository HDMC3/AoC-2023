const content = await Deno.readTextFile("data.txt");

interface ConversionRange {
    init: number;
    end: number;
    offset: number;
}

const lines = content.split("\n").map((v) => v.trim());
const seeds = lines[0].replace("seeds: ", "")
    .split(" ")
    .map(Number);

const seedRanges = seeds.reduce<number[][]>((acc, seed, i, arr) => {
    if (i % 2 != 0) {
        acc.push([arr[i - 1], arr[i - 1] + (seed - 1)]);
    }
    return acc;
}, []).sort((a, b) => a[0] - b[0]);

const CONVERSION_RANGES: Record<string, ConversionRange[]> = {
    "seed-to-soil": [],
    "soil-to-fertilizer": [],
    "fertilizer-to-water": [],
    "water-to-light": [],
    "light-to-temperature": [],
    "temperature-to-humidity": [],
    "humidity-to-location": [],
};

let currentMapName: string | null = null;
for (let i = 2; i < lines.length; i++) {
    const line = lines[i];

    if (i < 2) continue;

    if (line == "") {
        currentMapName = null;
        continue;
    }

    const [nameMap] = line.split(" ");
    if (CONVERSION_RANGES[nameMap]) {
        currentMapName = nameMap;
        continue;
    }

    if (currentMapName != null) {
        const [destination, source, length] = line.split(" ").map(Number);
        const conversionRange: ConversionRange = {
            init: source,
            end: source + (length - 1),
            offset: destination - source,
        };
        CONVERSION_RANGES[currentMapName].push(conversionRange);
    }
}

function convert(source: number, typeConversion: string) {
    for (const range of CONVERSION_RANGES[typeConversion]) {
        if (source >= range.init && source <= range.end) {
            return source + range.offset;
        }
    }

    return source;
}

let minLocation = Number.MAX_SAFE_INTEGER;

for (const seedRange of seedRanges) {
    for (let i = seedRange[0]; i <= seedRange[1]; i++) {
        const seed = i;
        const soil = convert(seed, "seed-to-soil");
        const fertilizer = convert(soil, "soil-to-fertilizer");
        const water = convert(fertilizer, "fertilizer-to-water");
        const light = convert(water, "water-to-light");
        const temperature = convert(light, "light-to-temperature");
        const humidity = convert(temperature, "temperature-to-humidity");
        const location = convert(humidity, "humidity-to-location");

        minLocation = location < minLocation ? location : minLocation;
    }
}

// Solution: 99751240
console.log(minLocation);
