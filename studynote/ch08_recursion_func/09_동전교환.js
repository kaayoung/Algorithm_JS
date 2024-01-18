/*
다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
▣ 입력설명
첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종 류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
각 동전의 종류는 100원을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다. */

// function solution(n, arr) {
//   let answer = Number.MAX_SAFE_INTEGER;
//   function dfs(k, cnt, sum) {
//     if (sum + k > n) {
//       answer = Math.min(answer, cnt);
//     } else {
//       for (let x of arr) dfs(x, cnt + 1, sum + k);
//     }
//   }
//   for (let x of arr) dfs(x, 0, 0);
//   return answer;
// }

/* 거슬러주는건 무조건 딱 맞아야함! */
function solution(n, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  function dfs(lev, sum) {
    // lev은 동전개수
    if (lev >= answer) return;
    if (sum > n) return;
    if (sum === n) {
      answer = Math.min(answer, lev);
      return;
    }
    for (let x of arr) dfs(lev + 1, sum + x);
  }
  dfs(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
