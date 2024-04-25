/*
- 백준 11724
https://www.acmicpc.net/problem/11724
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = [];

for (let i = 0; i < M; i++) arr.push(input[i].split(" ").map(Number));

function solution(n, m, arr) {
  const visit = Array.from({ length: n + 1 }, () => false);
  const graph = Array.from({ length: n + 1 }, () => []);
  let answer = 0;
  for (let [a, b] of arr) {
    graph[a].push(b);
    graph[b].push(a);
  }
  function dfs(node) {
    visit[node] = true;
    for (let x of graph[node]) {
      if (visit[x]) continue;
      dfs(x);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visit[i]) {
      dfs(i);
      answer++;
    }
  }
  console.log(answer);
}

const aa = [
  [1, 2],
  [2, 5],
  [5, 1],
  [3, 4],
  [4, 6],
];

// solution(6, 5, aa);

solution(N, M, arr);
