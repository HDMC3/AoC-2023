interface CamelHand {
    hand: string;
    bid: number;
    type: HandType;
}

enum HandType {
    HighCard,
    OnePair,
    TwoPair,
    ThreeOfKind,
    FullHouse,
    FourOfKind,
    FiveOfKind,
}

function getHandType(hand: string) {
    const dict: Record<string, number> = {};
    for (const c of hand) {
        dict[c] = dict[c] != undefined ? dict[c] + 1 : 1;
    }

    const typeIdentifier = Object.values(dict)
        .sort((a, b) => a - b)
        .join("");

    const TYPE_BY_IDENTIFIER: Record<string, HandType> = {
        "5": HandType.FiveOfKind,
        "14": HandType.FourOfKind,
        "23": HandType.FullHouse,
        "113": HandType.ThreeOfKind,
        "122": HandType.TwoPair,
        "1112": HandType.OnePair,
    };

    const type = TYPE_BY_IDENTIFIER[typeIdentifier] ?? HandType.HighCard;

    return type;
}

function compareHands(camelHandA: CamelHand, camelHandB: CamelHand) {
    if (camelHandA.type !== camelHandB.type) {
        return camelHandA.type - camelHandB.type;
    }

    const CARD_VALUES: Record<string, number> = {
        "A": 13,
        "K": 12,
        "Q": 11,
        "J": 10,
        "T": 9,
        "9": 8,
        "8": 7,
        "7": 6,
        "6": 5,
        "5": 4,
        "4": 3,
        "3": 2,
        "2": 1,
    };

    for (let i = 0; i < 5; i++) {
        const aCard = camelHandA.hand[i];
        const bCard = camelHandB.hand[i];
        const compareResult = CARD_VALUES[aCard] - CARD_VALUES[bCard];
        if (compareResult != 0) {
            return compareResult;
        }
    }

    return 0;
}

const content = await Deno.readTextFile("data.txt");

const camelHands = content.split("\n")
    .map((line) => {
        const [hand, bid] = line.trim().split(" ");
        const camelHand: CamelHand = {
            hand,
            bid: Number(bid),
            type: getHandType(hand),
        };
        return camelHand;
    });

camelHands.sort((a, b) => {
    return compareHands(a, b);
});

const result = camelHands.reduce((acc, hand, i) => {
    return acc + (hand.bid * (i + 1));
}, 0);

// Solution: 249204891
console.log(result);
