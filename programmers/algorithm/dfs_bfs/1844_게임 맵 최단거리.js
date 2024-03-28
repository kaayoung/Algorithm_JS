function solution(maps) {
  // 최단 거리 -> bfs ?
  const n = maps.length;
  const m = maps[0].length;
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const visit = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  ); // 0:방문X / 해당 지점까지 건넌 칸 수

  const queue = [[0, 0]];
  visit[0][0] = 1;
  while (queue.length) {
    let [x, y] = queue.shift();
    if (x === n - 1 && y === m - 1) return visit[x][y];
    for (let [mx, my] of move) {
      if (
        mx + x < 0 ||
        my + y < 0 ||
        mx + x >= n ||
        my + y >= m ||
        maps[mx + x][my + y] === 0
      )
        continue;
      if (visit[mx + x][my + y]) continue;
      visit[mx + x][my + y] = visit[x][y] + 1;
      queue.push([mx + x, my + y]);
    }
  }

  return -1;
}
