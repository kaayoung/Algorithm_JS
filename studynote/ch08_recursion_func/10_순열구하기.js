/*
10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합 니다.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다. */

function solution(m, arr) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let check = Array.from({ length: arr.length }, () => false);
  function dfs(lev) {
    if (lev >= m) {
      answer.push([...tmp]);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === true) continue;
        check[i] = true;
        tmp[lev] = arr[i];
        dfs(lev + 1);
        check[i] = false;
      }
    }
  }
  dfs(0);
  return answer;
}

let arr = [3, 6, 9, 11];
console.log(solution(3, arr));
