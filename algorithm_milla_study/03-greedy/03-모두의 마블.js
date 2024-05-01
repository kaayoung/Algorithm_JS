/*
백준 12845
https://www.acmicpc.net/problem/12845
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function solution(n, arr) {
  let maxValue = Math.max(...arr);
  let total = arr.reduce((a, b) => a + b) - maxValue;
  console.log(total + maxValue * (n - 1));
}
// solution(3, [40, 30, 30]);
solution(n, arr);
