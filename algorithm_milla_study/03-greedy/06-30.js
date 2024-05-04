/*
백준 10610
https://www.acmicpc.net/problem/10610
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const arr = input[0].split("").map(Number);

function solution(arr) {
  // 30은 3과 10의 배수
  arr.sort((a, b) => b - a);
  if (arr[arr.length - 1] !== 0 || arr.reduce((a, b) => a + b) % 3 !== 0) {
    // 30배수가 아예 안됨
    console.log(-1);
  } else {
    // 어차피 얘네들은 어떻게 조합해도 30배수가 됨 -> 그냥 젤 큰 수로 만들면 됨
    console.log(arr.join(""));
  }
}

// solution([1, 0, 2]);
// [8, 0, 8, 7, 5, 5, 4, 2];
// solution([2, 9, 3, 1]);
solution(arr);
