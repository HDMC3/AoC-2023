const content = await Deno.readTextFile("data.txt");

class Scratchcard {
    constructor(
        private id: number,
        private winningNumbers: Set<number>,
        private playerNumbers: Set<number>,
    ) {}

    getPoints() {
        let points = 0;
        this.winningNumbers.forEach((num) => {
            if (this.playerNumbers.has(num)) {
                points = points == 0 ? 1 : points * 2;
            }
        });

        return points;
    }
}

const scratchcards = content.split("\n")
    .map((v) => {
        const str = v.trim();
        const [cardInfo, numbers] = str.split(/:\s+/);
        const [, cardId] = cardInfo.split(/\s+/);
        const [winningNumbersStr, playerNumbersStr] = numbers.split(/\s+\|\s+/);
        const winningNumbers = winningNumbersStr.split(/\s+/).map(Number);
        const playerNumbers = playerNumbersStr.split(/\s+/).map(Number);

        const scratchcard = new Scratchcard(
            Number(cardId),
            new Set(winningNumbers),
            new Set(playerNumbers),
        );

        return scratchcard;
    });

const sum = scratchcards.reduce((acc, card) => acc + card.getPoints(), 0);

// Solution: 23028
console.log(sum);
