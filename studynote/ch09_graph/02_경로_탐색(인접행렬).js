/*
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프 로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 
총 6 가지입니다.
▣ 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연 결정보가 주어진다.
▣ 출력설명
총 가지수를 출력한다.*/

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => false);
  check[1] = true;

  for (let x of arr) {
    let [a, b] = [x[0], x[1]];
    graph[a][b] = 1;
  }
  function dfs(node) {
    if (node === n) {
      answer++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (check[i] || graph[node][i] === 0) continue;
      check[i] = true;
      dfs(i);
      check[i] = false;
    }
  }
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
