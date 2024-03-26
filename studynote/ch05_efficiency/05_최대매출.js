/*
현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.
▣ 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.
▣ 출력설명
첫 줄에 최대 매출액을 출력합니다.
*/

function solution(k, arr) {
  let answer = 0,
    p = k - 1; // 사실 굳이 p 안해도 됨
  for (let i = 0; i < k; i++) {
    // 첫번째 매출액 (answer) 초기화
    answer += arr[i];
  }
  let sum = answer;
  for (let i = 1; i < arr.length + 1 - k; i++) {
    if (p >= arr.length) break;
    sum += arr[++p] - arr[i - 1];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
