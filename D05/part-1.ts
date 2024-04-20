const content = await Deno.readTextFile("data.txt");

interface ConversionRange {
    init: number;
    end: number;
    offset: number;
}

const lines = content.split("\n").map((v) => v.trim());
const seeds = lines[0].replace("seeds: ", "").split(" ").map(Number);

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

const locations = [];
for (const seed of seeds) {
    const soil = convert(seed, "seed-to-soil");
    const fertilizer = convert(soil, "soil-to-fertilizer");
    const water = convert(fertilizer, "fertilizer-to-water");
    const light = convert(water, "water-to-light");
    const temperature = convert(light, "light-to-temperature");
    const humidity = convert(temperature, "temperature-to-humidity");
    const location = convert(humidity, "humidity-to-location");

    locations.push(location);
}

const minLocation = Math.min(...locations);

// Solution: 51580674
console.log(minLocation);
