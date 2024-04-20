/*
- 백준 1920
https://www.acmicpc.net/problem/1920

- 문제
N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const nArr = input[1].split(" ").map(Number);
const M = Number(input[2]);
const checkArr = input[3].split(" ").map(Number);

function solution(N, nArr, M, checkArr) {
  let answer = [];
  nArr.sort((a, b) => a - b);
  for (let val of checkArr) {
    let left = 0,
      right = N - 1;
    let isContained = 0; // 0 - 없음 / 1 - 있음

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nArr[mid] === val) {
        isContained = 1;
        break;
      } else if (nArr[mid] > val) right = mid - 1;
      else left = mid + 1;
    }
    answer.push(isContained);
  }
  console.log(answer.join("\n"));
}
// solution(5,[4 ,1 ,5 ,2 ,-3] , 5 , [1 ,3 ,7 ,9 ,5])

solution(N, nArr, M, checkArr);
