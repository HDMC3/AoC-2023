const content = await Deno.readTextFile("data.txt");

function getCardCopies(
    cardId: number,
    winningNumbers: Set<number>,
    playerNumbers: Set<number>,
) {
    const cards: number[] = [];
    let tempCardId = cardId;
    winningNumbers.forEach((num) => {
        if (playerNumbers.has(num)) {
            tempCardId++;
            cards.push(tempCardId);
        }
    });

    return cards;
}

const COPIES_BY_CARD = content.split("\n")
    .reduce<Map<number, number[]>>((acc, v) => {
        const str = v.trim();
        const [cardInfo, numbers] = str.split(/:\s+/);
        const [, cardId] = cardInfo.split(/\s+/);
        const [winningNumbersStr, playerNumbersStr] = numbers.split(/\s+\|\s+/);
        const winningNumbers = winningNumbersStr.split(/\s+/).map(Number);
        const playerNumbers = playerNumbersStr.split(/\s+/).map(Number);

        const copies = getCardCopies(
            Number(cardId),
            new Set(winningNumbers),
            new Set(playerNumbers),
        );

        acc.set(Number(cardId), copies);

        return acc;
    }, new Map());

function countCopyCards(cardIds: number[]) {
    let sum = cardIds.length;
    for (const id of cardIds) {
        const copies = COPIES_BY_CARD.get(id);
        if (!copies) continue;
        sum += countCopyCards(copies);
    }

    return sum;
}

let sum = COPIES_BY_CARD.size;
COPIES_BY_CARD.forEach((copies) => {
    sum += countCopyCards(copies);
});

// Solution: 9236992
console.log(sum);
