/*
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
▣ 출력설명
입력된 순서대로 등수를 출력한다.
*/

/* 내가 처음에 풀었던 풀이

function solution(arr) {
  let answer = Array.from({ length: arr.length }, () => 0);
  let rank = 1,
    max = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= arr.length; i++) {
    let idx = arr.findIndex((val) => val === Math.max(...arr));
    if (arr[idx] === max) {
      // 동점자이면
      answer[idx] = rank;
    } else {
      answer[idx] = i;
      rank = i;
    }

    max = arr[idx];
    arr[idx] = -1;
  }
  return answer;
}
*/

function solution(arr) {
  // 일단 다 1등으로 초기화 -> 이중 for 문 돌면서 자기 자신보다 큰 점수가 나오면 +1 하기
  let answer = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i] += 1;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [20, 20, 20, 10, 50, 15];
console.log(solution(arr2));
