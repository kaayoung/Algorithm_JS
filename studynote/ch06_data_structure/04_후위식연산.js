/*
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
▣ 출력설명
연산한 결과를 출력합니다.

*/

function solution(str) {
  let stack = [];
  for (let s of str) {
    if (Number(s)) {
      // if(!isNan(s)) 로도 가능!!
      stack.push(Number(s));
      continue;
    }
    let a = stack.pop(),
      b = stack.pop();
    if (s === "+") stack.push(a + b);
    else if (s === "-") stack.push(b - a);
    else if (s === "*") stack.push(a * b);
    else stack.push(b / a);
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));
