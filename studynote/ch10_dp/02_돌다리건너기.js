/*
철수는 학교에 가는데 개울을 만났습니다. 개울은 N개의 돌로 다리를 만들어 놓았습니다. 철 수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있습니다. 철수가 개울을 건너는 방법은 몇 가지일까요? 
▣ 입력설명
첫째 줄은 돌의 개수인 자연수 N(3≤N≤45)이 주어집니다.
▣ 출력설명
첫 번째 줄에 개울을 건너는 방법의 수를 출력합니다.*/

// 주의 : 돌이 한개 이면 총 두 칸 가야함
function solution(n) {
  let answer = 0;
  let dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 2;
  dp[2] = 3;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  answer = dp[n];
  return answer;
}

console.log(solution(7));
