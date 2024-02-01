function solution(maps) {
  let answer = [],
    cnt = 0;
  let n = maps.length,
    m = maps[0].length; // n:세로 m:가로
  const move = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  maps.forEach((v, i) => {
    v = v.split("");
    maps[i] = v;
  });

  function dfs(a, b) {
    cnt += Number(maps[a][b]);
    maps[a][b] = "X";
    for (let [dx, dy] of move) {
      let x = a + dx,
        y = b + dy;
      if (x < 0 || x >= n || y < 0 || y >= m || maps[x][y] === "X") continue;
      // maps[x][y] = 'X'
      dfs(x, y);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "X") continue;
      // maps[i][j] = 'X'
      dfs(i, j);
      answer.push(cnt);
      cnt = 0;
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

let arr = ["X591X", "X1X5X", "X231X", "1XXX1"];
console.log(solution(arr));
