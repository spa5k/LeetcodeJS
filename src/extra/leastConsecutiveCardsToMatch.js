function leastConsecutiveCardsToMatch(cards) {
    const set = new Set();
    let left = 0;
    let res = Infinity;
    for (let right = 0; right < cards.length; right++) {
        let cardRight = cards[right];
        while (set.has(cardRight)) {
            res = Math.min(res, right - left + 1);
            set.delete(cards[left]);
            left++;
        }
        set.add(cardRight);
    }
    return res === Infinity ? -1 : res;
}

console.log(leastConsecutiveCardsToMatch([1, 0, 5, 3]));
