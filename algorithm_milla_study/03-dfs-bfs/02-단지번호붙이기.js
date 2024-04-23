/*
- 백준 2667
https://www.acmicpc.net/problem/2667

- 문제
정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다. 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다. 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다. 
지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input.shift());
const maps = [];
for (let i = 0; i < N; i++) maps.push(input[i].split("").map(Number));

function solution(N, maps) {
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let complex = 0,
    houses = 0;
  const housesArr = [];
  function dfs(x, y) {
    maps[x][y] = 2;
    houses++;
    for (let [dx, dy] of moves) {
      if (x + dx > N - 1 || y + dy > N - 1 || x + dx < 0 || y + dy < 0)
        continue;
      if (maps[x + dx][y + dy] === 1) {
        dfs(x + dx, y + dy);
      }
    }
  }

  for (let i = 0; i <= N - 1; i++) {
    for (let j = 0; j <= N - 1; j++) {
      if (maps[i][j] === 1) {
        complex++;
        dfs(i, j);
        housesArr.push(houses); //
        houses = 0;
      }
    }
  }
  housesArr.sort((a, b) => a - b);
  console.log(complex);
  console.log(housesArr.join("\n"));
}

function bfsSolution(N, maps) {
  const answer = [];
  let complex = 0,
    houses = 0;
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(start) {
    const queue = [];
    queue.push(start);
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      houses++;
      maps[x][y] = 2;
      for (let [dx, dy] of moves) {
        if (x + dx < 0 || x + dx > N - 1 || y + dy < 0 || y + dy > N - 1)
          continue;
        if (maps[x + dx][y + dy] === 1) {
          queue.push([x + dx, y + dy]);
          maps[x + dx][y + dy] = 2;
        }
      }
    }
  }

  for (let i = 0; i <= N - 1; i++) {
    for (let j = 0; j <= N - 1; j++) {
      if (maps[i][j] === 1) {
        complex++;
        bfs([i, j]);
        answer.push(houses); //
        houses = 0;
      }
    }
  }

  answer.sort((a, b) => a - b);

  console.log(complex);
  console.log(answer.join("\n"));
}

solution(N, maps);

bfsSolution(7, [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
]);
