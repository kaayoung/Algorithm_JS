/*자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.
▣ 출력설명
첫째 줄에 출력한다. */

function solution(n) {
  function dfs(k) {
    if (k === 0) return;
    dfs(k - 1);
    console.log(k);
  }
  dfs(n);
}

solution(3);
