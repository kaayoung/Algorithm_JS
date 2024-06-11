/*
백준 15663
https://www.acmicpc.net/problem/15663
*/

// 반드시 다시 풀기!!!

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function solution(n, m, arr) {
  arr.sort((a, b) => a - b);
  let answer = [];

  function dfs(lev, idx, numbers) {
    if (lev === m) {
      answer.push([...numbers]);
    } else {
      let past = -1; // point!
      for (let i = idx; i < n; i++) {
        if (idx === i) continue;
        if (past === arr[i]) continue;
        past = arr[i];
        numbers.push(arr[i]);
        dfs(lev + 1, i, numbers);
        numbers.pop();
      }
    }
  }

  for (let i = 0; i < n - 1; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) continue;
    dfs(0, i, [arr[i]]);
  }
  for (let item of answer) console.log(item.join(" "));
}

// solution(3, 1, [4, 4, 2]);
// solution(4, 2, [9, 7, 9, 2]);

solution(n, m, arr);
