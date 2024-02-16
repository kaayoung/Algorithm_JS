function solution(rows, columns, queries) {
  const dx_arr = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let answer = [];
  const arr = Array.from({ length: rows + 1 }, () =>
    Array.from({ length: columns + 1 }, () => 0)
  );
  let tmp_value = 1;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      arr[i][j] = tmp_value++;
    }
  }

  for (let [sx, sy, ex, ey] of queries) {
    // 스택 활용!
    const stack = [];
    for (let i = sy; i < ey; i++) stack.push(arr[sx][i]);
    for (let i = sx; i < ex; i++) stack.push(arr[i][ey]);
    for (let i = ey; i > sy; i--) stack.push(arr[ex][i]);
    for (let i = ex; i > sx; i--) stack.push(arr[i][sy]);
    answer.push(Math.min(...stack));
    for (let i = sx; i < ex; i++) arr[i][sy] = stack.pop();
    for (let i = sy; i < ey; i++) arr[ex][i] = stack.pop();
    for (let i = ex; i > sx; i--) arr[i][ey] = stack.pop();
    for (let i = ey; i > sy; i--) arr[sx][i] = stack.pop();
  }
  return answer;
}
