/*
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
이 되고,
77 + 41 + 53 + 85 = 256
41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.
▣ 입력설명
첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
▣ 출력설명
첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
▣ 입력예제 1
12 77 38 41 53 92 85
▣ 출력예제 1 256
41

*/

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  //   let odd_arr = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 !== 0) odd_arr.push(arr[i]);
  //   }

  //   const total = odd_arr.reduce((pre, cur) => (pre += cur));

  //   answer.push(total, Math.min(...odd_arr));

  //   return answer;

  for (let x of arr) {
    if (x % 2 === 0) continue;
    sum += x;
    if (min > x) min = x;
  }

  answer.push(sum, min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
