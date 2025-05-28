String.prototype.toCamelCase = function toCamelCase(): string {
    return (this as string)
        // 공백/스네이크/케밥 케이스 감지 후 다음 문자 대문자 변환
        .replace(/[-_\s]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ''))
        // 첫 글자 소문자 변환
        .replace(/^[A-Z]/, (match) => match.toLowerCase());
}

String.prototype.toPascalCase = function toPascalCase(): string {
    return (this as string)
        // 공백/스네이크/케밥 케이스 감지 후 다음 문자 대문자 변환
        .replace(/[-_\s]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ''))
        // 첫 글자 대문자 변환
        .replace(/^[a-z]/, (match) => match.toUpperCase());
}

String.prototype.toSnakeCase = function toSnakeCase(): string {
    return (this as string)
        // 카멜/파스칼 케이스 감지 후 단어 경계 앞에 '_' 추가
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        // 공백/케밥 케이스 감지 후 '_'로 변환
        .replace(/[\s-]+/g, '_')
        // 모두 소문자로 변환
        .toLowerCase();
}

String.prototype.toKebabCase = function toKebabCase(): string {
    return (this as string)
        // 카멜/파스칼 케이스 감지 후 단어 경계 앞에 '-' 추가
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // 공백/스네이크 케이스 감지 후 '-'로 변환
        .replace(/[\s_]+/g, '-')
        // 모두 소문자로 변환
        .toLowerCase();
}