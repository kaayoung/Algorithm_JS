/*
   로 계산합니다. 하지만 여러분은 이 공식을 쓰지않고 다음 공식을 사용하여 
재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
  
▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
▣ 출력설명
첫째 줄에 조합수를 출력합니다. */

/* !!! 메모이제이션 사용하기 !!! */

function solution(n, r) {
  let answer;
  let arr = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  function dfs(n, r) {
    if (r === 0 || n === r) return 1;
    if (arr[n][r]) return arr[n][r];
    arr[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r);
    return arr[n][r];
  }
  answer = dfs(n, r);
  return answer;
}

console.log(solution(33, 19));
// console.log(solution(5, 3));
