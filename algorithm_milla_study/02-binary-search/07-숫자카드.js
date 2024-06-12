// 백준 10815
// https://www.acmicpc.net/problem/10815

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const nArr = input[1].split(" ").map(Number);
const m = Number(input[2]);
const mArr = input[3].split(" ").map(Number);

function solution(n, nArr, m, mArr) {
  let answer = "";

  nArr.sort((a, b) => a - b);

  for (let x of mArr) {
    let state = "0 ";
    let minIdx = 0,
      maxIdx = n - 1;
    while (minIdx <= maxIdx) {
      let midIdx = parseInt((minIdx + maxIdx) / 2);
      if (nArr[midIdx] === x) {
        state = "1 ";
        break;
      } else if (nArr[midIdx] < x) {
        minIdx = midIdx + 1;
      } else maxIdx = midIdx - 1;
    }
    answer += state;
  }

  return answer;
}

console.log(solution(n, nArr, m, mArr));
// const arr1 = [6, 3, 2, 10, -10];
// const arr2 = [10, 9, -5, 2, 3, 4, 5, -10];
// console.log(solution(5, arr1, 8, arr2));
