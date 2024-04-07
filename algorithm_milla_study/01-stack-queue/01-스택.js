/*
- 백준 10828번
(https://www.acmicpc.net/problem/10828)

- 문제
정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

*/

const fs = require("fs");
let inputArr = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(inputArr.shift());
const stack = [];
const answers = [];

for (let i = 0; i < num; i++) {
  const str = inputArr[i];
  if (str.includes("push")) {
    const addNum = Number(str.split(" ")[1]);
    stack.push(addNum);
  } else if (str === "pop") {
    let result = stack.length === 0 ? -1 : stack.pop();
    answers.push(result);
  } else if (str === "size") {
    answers.push(stack.length);
  } else if (str === "empty") {
    answers.push(stack.length === 0 ? 1 : 0);
  } else {
    answers.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}

console.log(answers.join("\n"));
