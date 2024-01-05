/*
학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
▣ 입력설명
첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.
▣ 출력설명
학급 회장으로 선택된 기호를 출력합니다.
 */

/* 첨 풀이
function solution(s) {
  let answer,
    obj = {};
  for (let x of "ABCDE") obj[x] = 0;
  for (let x of s) obj[x]++;
  //   Object.entries(obj).forEach((val, idx) => console.log(val, idx));
  let max = Object.values(obj).reduce((prev, curr) => Math.max(prev, curr));
  answer = Object.entries(obj).find((e) => e[1] === max)[0];
  return answer;
}
 */

function solution(s) {
  let max_cnt = 0,
    max_str,
    map = new Map();
  for (let x of s) {
    if (!map.has(x)) map.set(x, 1);
    else {
      map.set(x, map.get(x) + 1);
    }
  }
  map.forEach((v, k) => {
    if (max_cnt < v) {
      max_cnt = v;
      max_str = k;
    }
  });

  return max_str;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
