/*
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.
*/

function solution(s) {
  let answer = s[0];
  let cnt = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cnt++;
      continue;
    }
    if (cnt > 1) {
      answer += cnt + s[i];
      cnt = 1;
    } else {
      answer += s[i];
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
