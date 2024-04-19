/*
- 백준 10816
https://www.acmicpc.net/problem/10816

- 문제
숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const hasCards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const checkCards = input[3].split(" ").map(Number);

function solution(n, hasCards, m, checkCards) {
  let answer = Array.from({ length: m });
  hasCards.sort((a, b) => a - b);
  for (let idx = 0; idx < m; idx++) {
    const val = checkCards[idx];
    // for (let val of checkCards) {
    let left = 0,
      right = n - 1;
    let start = -1,
      end = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (hasCards[mid] === val) {
        start = mid;
        right = mid - 1;
      } else if (hasCards[mid] > val) right = mid - 1;
      else left = mid + 1;
    }
    if (start < 0) {
      answer[idx] = 0;
      continue;
    }
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (hasCards[mid] === val) {
        end = mid;
        left = mid + 1;
      } else if (hasCards[mid] > val) right = mid - 1;
      else left = mid + 1;
    }
    answer[idx] = end - start + 1;
  }
  console.log(answer.join(" "));
}
solution(
  10,
  [6, 3, 2, 10, 10, 10, -10, -10, 7, 3],
  8,
  [10, 9, -5, 2, 3, 4, 5, -10]
);

solution(N, hasCards, M, checkCards);
