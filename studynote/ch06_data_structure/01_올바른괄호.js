/*
괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
▣ 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
▣ 출력설명
첫 번째 줄에 YES, NO를 출력한다.
*/

/*
< 주의할 점 >
stack 에 "(" 가 없는데 ")"가 들어오는 경우  도 생각해야한다!!!
*/

function solution(s) {
  let answer = "YES",
    stack = [];
  for (let x of s) {
    if (x === "(") stack.push("(");
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) answer = "NO";
  return answer;
}

let a = "(()(()))(()";
let b = "(())()";
console.log(solution(a));
