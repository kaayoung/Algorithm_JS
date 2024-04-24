/*
- 백준 1012
https://www.acmicpc.net/problem/1012
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input.shift());

function solution(M, N, arr) {
  const field = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => 0)
  );
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let cnt = 0;

  for (let [a, b] of arr) field[a][b] = 1;

  function dfs(x, y) {
    field[x][y] = 2;
    for (let [dx, dy] of moves) {
      if (x + dx < 0 || x + dx > M - 1 || y + dy < 0 || y + dy > N - 1)
        continue;
      if (field[x + dx][y + dy] === 1) {
        dfs(x + dx, y + dy);
      }
    }
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (field[i][j] === 1) {
        dfs(i, j);
        cnt++;
      }
    }
  }
  console.log(cnt);
}

for (let i = 0; i < T; i++) {
  const [m, n, k] = input.shift().split(" ").map(Number);
  const arr = [];
  for (let j = 0; j < k; j++) {
    arr.push(input.shift().split(" ").map(Number));
  }
  solution(m, n, arr);
}

// solution(10, 10, [[5, 5]]);
// const a = [
//   [0, 0],
//   [1, 0],
//   [1, 1],
//   [4, 2],
//   [4, 3],
//   [4, 5],
//   [2, 4],
//   [3, 4],
//   [7, 4],
//   [8, 4],
//   [9, 4],
//   [7, 5],
//   [8, 5],
//   [9, 5],
//   [7, 6],
//   [8, 6],
//   [9, 6],
// ];
// solution(10, 8, a);
