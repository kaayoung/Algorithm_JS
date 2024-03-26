/*
N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.
둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주 어진 원래의 집합이 되어야 합니다.
예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
두 번째 줄에 집합의 원소 N개가 주어진다. 각 원소는 중복되지 않으며, 그 크기는 1,000,000 이하입니다.
▣ 출력설명
첫 번째 줄에 “YES" 또는 ”NO"를 출력한다. */

// 강의 정답 풀이 방향
// : 일단 배열들 합 다 구한 후에 부분집합 원리 이용

function solution(arr) {
  let answer = "NO",
    flag = 0;
  let sum = arr.reduce((a, b) => a + b);
  function dfs(i, accum) {
    if (flag) return;
    if (i >= arr.length) {
      if (accum === sum - accum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      dfs(i + 1, accum);
      accum += arr[i];
      dfs(i + 1, accum);
    }
  }
  dfs(0, 0);
  return answer;
}

// function solution(arr) {
//   let answer = "NO";
//   let check = Array.from({ length: arr.length }, () => -1);

//   function dfs(i, ch) {
//     // arr의 index
//     if (i >= arr.length) {
//       let a = (b = 0);
//       for (let j = 0; j < ch.length; j++) {
//         if (ch[j] === 0) {
//           a += arr[j];
//         } else b += arr[j];
//       }
//       if (a === b) answer = "YES";
//       return;
//     } else {
//       ch[i] = 0;
//       dfs(i + 1, ch);
//       ch[i] = 1;
//       dfs(i + 1, ch);
//     }
//   }
//   dfs(0, check);
//   return answer;
// }

let arr = [1, 3, 5, 6, 7, 10];
let arr2 = [1, 9, 5, 2, 6, 7];
console.log(solution(arr));
