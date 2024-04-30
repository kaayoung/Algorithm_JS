/*
백준 1931
https://www.acmicpc.net/problem/1931
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input.shift());
const arr = [];

for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));

function solution(n, arr) {
  // 끝나는 시간 일찍인 순으로
  arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let answer = 0,
    endTime = 0;
  for (let [start, end] of arr) {
    if (endTime <= start) {
      answer++;
      endTime = end;
    }
  }
  console.log(answer);
}

const aa = [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11],
  [8, 12],
  [2, 13],
  [12, 14],
];

// solution(11, aa);

solution(n, arr);
