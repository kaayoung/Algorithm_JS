/*
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
12131112
합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
▣ 출력설명
첫째 줄에 경우의 수를 출력한다.
*/

/* 내가 첨에 풀었던 풀이 -> 비효율적임!
function solution(m, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let p = i + 1,
      sum = arr[i],
      isCon = false;

    while (sum <= m) {
      if (sum === m) isCon = true;
      sum += arr[p++];
    }
    isCon && answer++;
  }
  if (arr[arr.length - 1] === m) answer++;
  return answer;
}
 */

// left point, right point 해서 투포인트 알고리즘으로 풀기!
// right point 를 for문으로 돌리기!
function solution(m, arr) {
  let answer = 0,
    lp = 0,
    sum = 0;
  for (let rp = 0; rp < arr.length; rp++) {
    sum += arr[rp];
    if (sum === m) answer++;

    while (sum >= m) {
      sum -= arr[lp++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(8, a));
