Object.prototype.isString = function isString(): this is string {
    return typeof this === 'string'
}
Object.prototype.isNumber = function isNumber(): this is number {
    return typeof this === 'number'
}
Object.prototype.isBoolean = function isBoolean(): this is boolean {
    return typeof this === 'boolean'
}