/*
백준 11047
https://www.acmicpc.net/problem/11047
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const arr = [];

for (let i = 0; i < n; i++) arr.push(Number(input[i]));

function solution(n, k, arr) {
  let answer = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > k) continue;
    answer += Math.floor(k / arr[i]);
    k = k % arr[i];
    if (k === 0) break;
  }
  console.log(answer);
}

const aa = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];
// solution(10, 4200, aa);

solution(n, k, arr);
