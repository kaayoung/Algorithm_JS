/*
- 백준 18870
(https://www.acmicpc.net/problem/18870)

- 문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function solution(n, arr) {
  let sortedList = Array.from(new Set(arr)).sort((a, b) => a - b);
  const answer = [];

  arr.forEach((val) => {
    let left = 0,
      right = sortedList.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2); // index

      if (sortedList[mid] === val) {
        answer.push(mid);
        break;
      } else if (sortedList[mid] < val) left = mid + 1;
      else {
        right = mid - 1;
      }
    }
  });
  console.log(answer.join(" "));
}

// solution(5, [2, 4, -10, 4, -9]);
// solution(6, [1000, 999, 1000, 999, 1000, 999]);

solution(N, arr);
