/*아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요. */

function solution(k) {
  let answer = [];
  function dfs(n) {
    if (n > k) return;
    else {
      dfs(n * 2); // 왼쪽 자식
      dfs(n * 2 + 1); // 오른쪽 자식
      answer.push(n); // 부모
    }
  }
  dfs(1);
  return answer;
}

console.log(solution(7));
