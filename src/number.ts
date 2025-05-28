Number.prototype.isEven = function isEven () {
    return (this as number) % 2 === 0;
};

Number.prototype.isOdd = function isOdd () {
    return (this as number) % 2 !== 0;
};