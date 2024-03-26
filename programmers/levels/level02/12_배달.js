function solution(N, road, K) {
  let answer = 1;
  let arr = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => 0)
  );

  for (let [a, b, c] of road) {
    arr[a][b] = c;
    arr[b][a] = c;
  }

  function dfs(town, time) {
    if (time > K) return;
    answer++;
    for (let i = 1; i <= N; i++) {
      if (arr[town][i] === 0 || arr[town][i] > K) continue;
      let tmp = arr[town][i];
      time += tmp;
      arr[town][i] = 0;
      arr[i][town] = 0;
      dfs(i, time);
      // arr[town][i] = tmp
      // arr[i][town] = tmp
    }
  }

  dfs(1, 0);

  return answer;
}
