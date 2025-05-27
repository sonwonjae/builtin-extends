# 💡 builtin-extends

> 유용한 JavaScript 빌트인 객체 확장 메서드들을 모은 유틸리티 라이브러리입니다.
> 
> `shuffle`, `pureSort` 등 자주 사용하는 기능을 프로토타입 메서드로 사용할 수 있도록 도와줍니다.

---

## ✨ 특징

- `[].shuffle()`처럼 간편하게 사용 가능
- 반복되는 유틸리티 코드 제거
- 테스트와 타입 정의 포함

---

## 📦 설치

```bash
npm install builtin-extends
```

```bash
yarn add builtin-extends
```

---

## 🚀 사용법 예시

```js
import "builtin-extends";

// 배열을 셔플
const arr = [1, 2, 3, 4, 5];
arr.shuffle(); // 예: [3, 5, 1, 4, 2]

// 원본 배열은 수정하지 않고 정렬된 새 배열 반환
const unsorted = [3, 1, 4, 2];
const sorted = unsorted.pureSort(); // [1, 2, 3, 4]
console.log(unsorted); // [3, 1, 4, 2]
```

---

## 📝 지원 메서드

### Array

| 메서드 이름           | 설명                                              |
| --------------------- | ------------------------------------------------- |
| `shuffle()`           | 배열을 제장에서 무작위로 설켜줍니다.              |
| `pureSort(compareFn)` | 원본을 건드리지 않고 정렬된 새 배열을 반환합니다. |

---

## 🥮 테스트

```bash
npm run test
```

---

## 📘 라이센스

MIT License
