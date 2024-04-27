/*
백준 2178
https://www.acmicpc.net/problem/2178
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = [];
for (let i = 0; i < N; i++) arr.push(input[i].split("").map(Number));

function solution(n, m, arr) {
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let queue = []; // [depth , [x,y]]
  let answer = 0;

  visited[0][0] = true;
  queue.push([1, [0, 0]]);

  while (queue.length) {
    let [curDepth, [x, y]] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      answer = curDepth;
      break;
    }
    for (let [dx, dy] of moves) {
      if (x + dx < 0 || x + dx >= n || y + dy < 0 || y + dy >= m) continue;
      if (arr[x + dx][y + dy] === 0 || visited[x + dx][y + dy]) continue;
      visited[x + dx][y + dy] = true;
      queue.push([curDepth + 1, [x + dx, y + dy]]);
    }
  }
  console.log(answer);
}
solution(N, M, arr);

const aa = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
];
solution(4, 6, aa);
