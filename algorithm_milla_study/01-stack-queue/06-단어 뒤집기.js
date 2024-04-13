/*
- 백준 9093
(https://www.acmicpc.net/problem/9093)

- 문제
문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const testNum = Number(input.shift());

/*

function solution(T) {
  for (let i = 0; i < T; i++) {
    let answer = "";
    const strArr = input[i].split(" ");
    for (let str of strArr) {
      answer += str.split("").reverse().join("") + " ";
    }
    console.log(answer);
  }
}

solution(testNum);
*/

function solution(T) {
  for (let i = 0; i < T; i++) {
    let answer = "",
      stack;
    const strArr = input[i].split(" ");
    for (let str of strArr) {
      // "today"
      stack = str.split("");
      while (stack.length) answer += stack.pop();
      answer += " ";
    }
    console.log(answer);
  }
}

solution(testNum);
