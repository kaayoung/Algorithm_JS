# Algorithm_JS

자바스크립트 코딩테스트 공부

## 🔥 자바스크립트 문법

### 👀 forEach, map, filter, reduce 메서드

###### 1. forEach

```js
function forEach(predicate, thisArg?) {
  for (let i = 0; i < arr.length; i++) {
    predicate(a[i], i);
  }
}

arr = [1, 2, 3];
arr.forEach((v, i) => console.log(v, i));
```

###### 2. map

```js

function map(predicate, thisArg?) {
let list = [] ;
for (let i = 0 ; i < arr.length ; i++) {
list.push(predicate(a[i], i));
}
 return list ;
}

arr2 = [1,2,3]
let result = arr2.map((v,i) => v\*v) ;
```

> > 👉 원본 배열과 새로운 배열의 길이는 똑같다 !!!

###### 3. filter

```js
function filter(predicate, thisArg?) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(a[i], i)) list.push(a[i]);
  }
  return list;
}

arr3 = [1, 2, 3];
let result2 = arr3.filter(function (v, i) {
  return v % 2 === 0; // 👉 이게 true 인 것만 반환됨
});
```

###### 4. reduce

```js
function reduce(predicate, val) {
  let result = val;
  for (let i = 0; i < arr.length; i++) {
    result = predicate(result, a[i]);
  }
  return result;
}

arr4 = [1, 2, 3];
let result3 = arr4.reduce(function (acc, v) {
  return acc + v;
}, 0);
```

### 👀 얕은 복사 & 깊은 복사

- `얇은 복사` : 객체를 참조하는 주소 값을 복사
- `깊은 복사` : 객체의 실제 값을 복사

---

> `원시타입 데이터` : number, string, null, undefined, boolean, symbol

> `참조 타입 데이터` : array, object, function

- **원시타입 데이터** : 입력 받은 값을 직접 스택 메모리에 저장하는 방식. -> 재할당의 경우, 바로 데이터의 값이 변한다. 즉, 원시타입 데이터는 **깊은 복사** 만 가능
- **참조 타입 데이터** : 할당한 값의 주소를 스택 메모리에 저장. 그리고 실제 데이터의 값은 힙이라는 메모리 공간에 저장
  - **참조 타입 데이터의 얕은 복사** : 참조 타입 데이터 값을 메서드를 호출하거나 직접적으로 값을 추가 및 수정한다는 것은 주소를 복사하는 것! -> `얕은 복사`
  - **참조 타입 데이터의 깊은 복사** : `JSON.parse` 와 `JSON.stringify` 를 사용하면 깊은 복사 가능

```js
let a = [1, 2, 3];
let b = a;
b.push(5);
console.log(a); // [1,2,3,5]

let aa = "123";
let bb = aa;
bb += "abc";
console.log(aa); // 123
```

### 👀 substring() , substr()

###### 1. substring(시작위치, 종료위치?)

```js
let str = "자바스크립트";

let result = str.substring(0, 2);
// 결과 : "자바"

var result2 = str.substring(2);
// 결과 : "스크립트"
```

###### 2. substr(시작위치, 길이?)

```js
let str = "자바스크립트";

let result = str.substr(0, 2);
// 결과 : "자바"

let result2 = str.substr(2);
// 결과 : "스크립트"
```

### 👀 Array 초기화 (배열 길이 지정)

```js
Array.from({ length: 10 }, () => 0);
```
