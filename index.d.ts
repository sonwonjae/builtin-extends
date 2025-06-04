
declare interface Object {
    /**
     * @description 해당 object가 string인지 검증해주는 타입가드입니다.
     */
    isString(): this is string;
    /**
     * @description 해당 object가 number인지 검증해주는 타입가드입니다.
     */
    isNumber(): this is number;
    /**
     * @description 해당 object가 boolean인지 검증해주는 타입가드입니다.
     */
    isBoolean(): this is boolean;
}

declare interface Array<T>{
    /**
     * @description 배열 순서를 무작위로 섞어줍니다.
     */
    shuffle(): T[];
    /**
     * @description 배열에서 무작위 인자 하나를 뽑아줍니다.
     */
    draw(): T;
}

declare interface String{
    /**
     * @description 케밥/스네이크/파스칼 케이스를 카멜 케이스로 변환해줍니다.
     */
    toCamelCase(): string;
    /**
     * @description 케밥/스네이크/카멜 케이스를 파스칼 케이스로 변환해줍니다.
     */
    toPascalCase(): string;
    /**
     * @description 케밥/카멜/파스칼 케이스를 스네이크 케이스로 변환해줍니다.
     */
    toSnakeCase(): string;
    /**
     * @description 스네이크/카멜/파스칼 케이스를 케밥 케이스로 변환해줍니다.
     */
    toKebabCase(): string;
}

declare interface Number{
    /**
     * @description 짝수인지 판별해줍니다.
     */
    isEven(): boolean;
    /**
     * @description 홀수인지 판별해줍니다.
     */
    isOdd(): boolean;
}
