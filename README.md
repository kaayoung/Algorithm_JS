# Algorithm_JS

자바스크립트 코딩테스트 공부

## 🔥 자바스크립트 문법

#### 👀 forEach, map, filter, reduce 메서드

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

👉 원본 배열과 새로운 배열의 길이는 똑같다 !!!

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
