/*
백준 2875
https://www.acmicpc.net/problem/2875
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);

function solution(n, m, k) {
  let answer = 0,
    rest = 0;
  answer = Math.min(Math.floor(n / 2), m);
  rest += n - answer * 2 + (m - answer);
  if (rest < k) {
    let a = k - rest;
    if (a % 3 === 0) answer -= a / 3;
    else answer -= Math.floor(a / 3) + 1;
  }
  console.log(answer);
}

// solution(6, 3, 2);

solution(n, m, k);
