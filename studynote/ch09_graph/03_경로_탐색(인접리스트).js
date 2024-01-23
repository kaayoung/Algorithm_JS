/** 2번과 동일 */

function solution(n, arr) {
  let answer = 0;
  let check = Array.from({ length: n + 1 }, () => false);
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function dfs(node) {
    if (node === n) {
      answer++;
      return;
    }
    for (let x of graph[node]) {
      if (check[x]) continue;
      check[x] = true;
      dfs(x);
      check[x] = false;
    }
  }

  check[1] = true;
  dfs(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
