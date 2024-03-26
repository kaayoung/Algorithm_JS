/*
N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌 우와 대각선으로 연결되어 있으며, 0은 바다입니다. 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다. 두 번째 줄부터 격자판 정보가 주어진다.
▣ 출력설명
첫 번째 줄에 섬의 개수를 출력한다.
 */

let dx = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];

function solutionDFS(arr) {
  // dfs
  // 0 : 바다 / 1 : 섬 / 2 : 갔던곳
  let answer = 0;
  let n = arr.length;

  function dfs(vx, vy) {
    for (let [a, b] of dx) {
      let x = vx + a,
        y = vy + b;
      if (x < 0 || y < 0 || x >= n || y >= n) continue;
      if (arr[x][y] === 0) continue;
      arr[x][y] = 0;
      dfs(x, y);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 0; // check 걸기
        dfs(i, j);
        answer++;
      }
    }
  }
  return answer;
}

function solutionBFS(arr) {
  let answer = 0;
  let n = arr.length;
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        queue.push([i, j]);
        while (queue.length) {
          let q = queue.shift();
          for (let [a, b] of dx) {
            let x = a + q[0],
              y = b + q[1];
            if (x < 0 || y < 0 || x >= n || y >= n) continue;
            if (arr[x][y] !== 1) continue;
            queue.push([x, y]);
            arr[x][y] = 0;
          }
        }
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
];
let arr2 = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
];

console.log("dfs : ", solutionDFS(arr));
console.log("bfs : ", solutionBFS(arr2));
