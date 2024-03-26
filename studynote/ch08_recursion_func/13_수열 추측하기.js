/*
가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
3124 436 79 16
N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하 시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
▣ 입력설명
첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의 미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.
▣ 출력설명
첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재 하지 않는 경우는 입력으로 주어지지 않는다. */

function solution(n, end) {
  let mem_arr = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 메모이제이션
  let comb_arr = Array.from({ length: n }, () => 0); // 조합의 배열

  let check = Array.from({ length: n + 1 }, () => false); // for 수열 (중복X)
  let arr = Array.from({ length: n }, () => 0); // 순열 저장

  let flag = false;

  let answer;

  function comb(n, r) {
    if (n === r || r === 0) return (mem_arr[n][r] = 1);
    if (mem_arr > 0) return mem_arr[n][r];
    return (mem_arr[n][r] = comb(n - 1, r - 1) + comb(n - 1, r));
  }

  for (let i = 0; i < n; i++) {
    comb_arr[i] = comb(n - 1, i);
  }
  function dfs(lev, sum) {
    if (flag) return;
    if (lev === n && sum === end) {
      answer = [...arr]; // 어차피 오름차순이니까 답 나오는 순간 그게 답임
      flag = true;
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === true) continue;
        check[i] = true;
        arr[lev] = i;
        dfs(lev + 1, sum + i * comb_arr[lev]);
        check[i] = false;
      }
    }
  }
  dfs(0, 0);

  return answer;
}

// function solution(n, end) {
//   let mem_arr = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 메모이제이션
//   let comb_arr = Array.from({ length: n }, () => 0); // 조합의 배열

//   let check = Array.from({ length: n }, () => false); // for 수열 (중복X)
//   let arr = Array.from({ length: n }, () => 0); // 순열 저장

//   let answer = [];

//   function comb(n, r) {
//     if (n === r || r === 0) return (mem_arr[n][r] = 1);
//     if (mem_arr > 0) return mem_arr[n][r];
//     return (mem_arr[n][r] = comb(n - 1, r - 1) + comb(n - 1, r));
//   }

//   for (let i = 0; i < n; i++) {
//     comb_arr[i] = comb(n - 1, i);
//   }
//   function dfs(lev) {
//     if (lev >= n) {
//       let sum = 0;
//       for (let i = 0; i < n; i++) {
//         sum += comb_arr[i] * (i + 1);
//       }
//       if (sum === end) {
//         answer.push(arr.slice());
//       }
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (check[i] === true) continue;
//         check[i] = true;
//         arr[lev] = i;
//         dfs(lev + 1);
//         check[i] = false;
//       }
//     }
//   }
//   dfs(0);

//   return answer;
// }

console.log(solution(4, 16));
