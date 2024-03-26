/*
N개의 자연수로 이루어진 수열이 주어졌을 때, 그 중에서 가장 길게 증가하는(작은 수에서 큰 수로) 원소들의 집합을 찾는 프로그램을 작성하라. 예를 들어, 원소가 2, 7, 5, 8, 6, 4, 7, 12, 3 이면 가장 길게 증가하도록 원소들을 차례대로 뽑아내면 2, 5, 6, 7, 12를 뽑아내어 길 이가 5인 최대 부분 증가수열을 만들 수 있다.
▣ 입력설명
첫째 줄은 입력되는 데이터의 수 N(1≤N≤1,000, 자연수)를 의미하고, 둘째 줄은 N개의 입력데이터들이 주어진다.
▣ 출력설명
첫 번째 줄에 부분증가수열의 최대 길이를 출력한다 */

function solution(arr) {
  let answer = 0,
    n = arr.length;
  let dp = Array.from({ length: n }, () => 1);
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dp[j] > max) max = dp[j];
    }
    dp[i] = max + 1;
  }
  answer = Math.max(...dp);
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
let arr2 = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr2));
