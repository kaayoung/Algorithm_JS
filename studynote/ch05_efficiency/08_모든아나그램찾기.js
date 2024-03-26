/*
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
 */

/*
 < 강의에서의 풀이 >
 s = 'bacaAacba' / t = 'abc'
 일단 s를 맵 할 땓 두개만 집고 그걸 초기화한다음 ('ba')
 오른쪽 추가하고 -> 비교하고 -> 왼쪽 빼주고 
*/

function compare(sm, tm) {
  if (sm.size !== tm.size) return false;

  for ([key, value] of sm) {
    if (!tm.has(key) || tm.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0,
    len = t.length,
    sm = new Map(),
    tm = new Map();

  for (let x of s.slice(0, len - 1)) {
    sm.has(x) ? sm.set(x, sm.get(x) + 1) : sm.set(x, 1);
  }
  for (let x of t) {
    tm.has(x) ? tm.set(x, tm.get(x) + 1) : tm.set(x, 1);
  }
  // 여기까진 초기화

  for (let i = len - 1; i < s.length; i++) {
    // 추가하고 -> 비교하고 -> 빼기
    sm.has(s[i]) ? sm.set(s[i], sm.get(s[i]) + 1) : sm.set(s[i], 1); // 추가
    compare(sm, tm) && answer++; // 비교
    sm.set(s[i - len + 1], sm.get(s[i - len + 1]) - 1); // 빼기
    sm.get(s[i - len + 1]) === 0 && sm.delete(s[i - len + 1]); // 이때 빼고나서 0이면 아예 지우기
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
