function solution(expression) {
  let answer = 0;
  const combinations = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];
  expression = expression.match(/\d+|[-+*/]/g).map((v, i) => {
    if (parseInt(v)) return parseInt(v);
    else return v;
  });

  for (let comb of combinations) {
    let tmp = [...expression];
    for (let x of comb) {
      // + - *
      tmp = cal(tmp, x);
    }
    answer = Math.max(answer, Math.abs(tmp[0]));
  }

  return answer;
}

function cal(exp, oper) {
  // exp : 배열 / oper : -,+,*
  let result = [];
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === oper) {
      let top = result.pop();
      result.push(calculate(parseInt(top), parseInt(exp[++i]), oper));
    } else {
      result.push(exp[i]);
    }
  }
  return result;
}

function calculate(a, b, o) {
  if (o === "+") return a + b;
  else if (o === "*") return a * b;
  else if (o === "-") return a - b;
  return;
}
