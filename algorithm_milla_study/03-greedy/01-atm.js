/*
백준 11399
https://www.acmicpc.net/problem/11399
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

function solution(n, arr) {
  let answer = 0,
    total = 0;
  arr.sort((a, b) => a - b);

  for (let x of arr) {
    total += x;
    answer += total;
  }
  console.log(answer);
}

// const aa = [3, 1, 4, 3, 2];
// solution(5, aa);

solution(n, arr);
