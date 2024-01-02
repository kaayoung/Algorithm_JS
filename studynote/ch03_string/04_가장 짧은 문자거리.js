/*
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
*/

function solution(str, char) {
  /* 내가 처음에 풀었던 풀이

    let answer = Array.from({ length: str.length }, (v, k) => {
      if (str[k] === char) return 0;
      else return 1;
    });

    let arr = str.split(char);
    let t_idx = 0;
    for (let x of arr) {
      let temp = 1;
      for (let i = 0; i < x.length / 2; i++) {
        answer[i + t_idx] = temp;
        answer[x.length - 1 - i + t_idx] = temp;
        temp++;
      }
      t_idx += x.length + 1;
    }
    */

  // 다른 풀이 : -> / <- 두 번 쭉 for문 돌리면서 해당 문자와의 거리 구해서 비교해서 구하기
  let answer = [];
  let value = 1000;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      answer[i] = 0;
      value = 1;
    } else {
      answer[i] = value;
      value++;
    }
  }

  value = Number.MAX_SAFE_INTEGER;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === char) {
      answer[i] = 0;
      value = 1;
    } else {
      answer[i] = Math.min(value, answer[i]);
      value++;
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
