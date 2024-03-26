/*
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
▣ 입력설명
첫 줄에 문자열이 입력됩니다.
▣ 출력설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.
*/

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (answer.includes(x)) continue;
    answer += x;
  }
  return answer;
}

console.log(solution("ksekkset"));

/*
<다른 풀이>
str 의 인덱스 for 문 돌려서 indexOf 를 이용해서 for문 돌고있는 현재 위치랑 해당 문자의 첫 번째 인덱스 번호를 비교해서 찾아도됨
*/
