interface Array<T> {
  shuffle(): T[];
}

Array.prototype.shuffle = function shuffle<T>(): T[] {
    const result = [...this];

    /**
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     */
    for (let i = result.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
};