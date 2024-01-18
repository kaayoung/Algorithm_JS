/*
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력합니다.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다. */

function solution(n, m) {
  let answer_arr = [],
    answer_cnt = 0;
  let arr = Array.from({ length: n }, (v, k) => k + 1);
  function dfs(k, str, cnt) {
    if (cnt > m) {
      answer_arr.includes(str) || answer_arr.push(str);
    } else {
      str += k + " ";
      for (let x of arr) dfs(x, str, cnt + 1);
    }
  }

  for (let x of arr) dfs(x, "", 1);

  return answer_arr;
}

console.log(solution(4, 3));
