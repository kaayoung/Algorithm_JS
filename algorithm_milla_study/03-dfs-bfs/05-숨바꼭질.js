/*
- 백준 1697
https://www.acmicpc.net/problem/1697
*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);

function solution(n, m) {
  const visited = Array.from({ length: 10 ** 5 + 1 }, () => false);
  let answer = 0;
  const queue = []; // [현재 몇번째 , 값]
  queue.push([0, n]);
  visited[n] = true;

  while (queue.length) {
    const [depth, value] = queue.shift();
    if (value === m) {
      answer = depth;
      break;
    }
    for (let x of [value - 1, value + 1, value * 2]) {
      if (x < 0 || x > 10 ** 5 || visited[x]) continue;
      visited[x] = true;
      queue.push([depth + 1, x]);
    }
  }
  console.log(answer);
}

// solution(5, 17);

solution(N, M);
