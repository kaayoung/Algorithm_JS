/*
- 백준 1260
https://www.acmicpc.net/problem/1260

- 문제
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 
정점 번호는 1번부터 N번까지이다.
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= M; i++) arr.push(input[i].split(" ").map(Number));

function solution(N, M, V, arr) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const dfsArr = [];
  const bfsArr = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
    graph[b].push(a);
  }
  for (let i = 1; i < N + 1; i++) {
    graph[i].sort((a, b) => a - b);
  }

  function dfs(nxt, visited) {
    visited[nxt] = true;
    dfsArr.push(nxt);
    for (let val of graph[nxt]) {
      if (visited[val]) continue;
      dfs(val, visited);
    }
  }

  function bfs(start, visited) {
    const queue = [];
    queue.push(start);
    visited[start] = true;
    while (queue.length !== 0) {
      const q = queue.shift();
      bfsArr.push(q);
      for (let val of graph[q]) {
        if (visited[val]) continue;
        visited[val] = true; //
        queue.push(val);
      }
    }
  }

  dfs(
    V,
    Array.from({ length: N + 1 }, () => false)
  );
  bfs(
    V,
    Array.from({ length: N + 1 }, () => false)
  );

  console.log(dfsArr.join(" "));
  console.log(bfsArr.join(" "));
}

solution(N, M, V, arr);

solution(4, 5, 1, [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
]);
solution(1000, 1, 1000, [[999, 1000]]);
solution(5, 5, 3, [
  [5, 4],
  [5, 2],
  [1, 2],
  [3, 4],
  [3, 1],
]);
