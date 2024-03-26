function solution(p) {
  let answer = "";
  if (checkType(p) === 1) return p;

  function change(str) {
    if (str === "") return "";
    let u = "",
      v = "";
    let l_cnt = 0,
      r_cnt = 0;
    for (let i = 0; i < str.length; i++) {
      u += str[i];
      if (str[i] === "(") l_cnt++;
      else r_cnt++;
      if (l_cnt === r_cnt) {
        // 일단 u가 '균형잡힌' 이면 중단
        v = str.slice(i + 1);
        break;
      }
    }

    if (checkType(u) === 1) {
      // u가 '올바른' 이라면
      return u + change(v);
    } else {
      // u가 '올바른' 이 아니라면
      let result = "";
      result = "(" + change(v) + ")";
      u = u.slice(1, u.length - 1).split("");
      u.forEach((val, i) => {
        if (val === "(") u[i] = ")";
        else u[i] = "(";
      });
      u = u.join("");
      return result + u;
    }
  }
  answer = change(p);
  return answer;
}

function checkType(str) {
  // 0: 균형잡힌 , 1: 올바른
  let answer = 0;
  let stack = [];

  for (let s of str) {
    if (s === "(") stack.push(s);
    else {
      let top = stack.pop();
      if (!top) return 0;
    }
  }

  if (stack.length === 0) answer = 1;
  return answer;
}
