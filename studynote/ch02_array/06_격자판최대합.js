/*
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
▣ 출력설명 최대합을 출력합니다.
*/

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  // for (let x of arr) { // 가로
  //     let sum = x.reduce((acc,val) => acc+val)
  //     if (sum > answer) answer = sum
  // }
  for (let i = 0; i < arr.length; i++) {
    let sum1 = 0; // 세로
    let sum2 = 0; // 가로
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[j][i];
      sum2 += arr[i][j];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  let sum3 = 0; // 대각선 왼오
  let sum4 = 0; // 대각선 오왼
  for (let i = 0; i < arr.length; i++) {
    sum3 += arr[i][i];
    sum4 += arr[i][arr.length - 1 - i];
  }
  answer = Math.max(answer, sum3, sum4);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
