function solution(n, computers) {
  let answer = 0;
  let check = Array.from({ length: n }, () => false);
  function dfs(node) {
    if (check[node]) return; // 한번이라도 체크했으면 돌아가라
    else {
      check[node] = true; // 일단 체크 설정해주고~
      for (let i = 0; i < n; i++) {
        if (computers[node][i] === 0 || i === node) continue;
        dfs(i);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      dfs(i);
      answer++; // 컴퓨터 하나라도 일단 네트워크이니까
    }
  }
  return answer;
}
