/**
 * 프로그래머스 프로세스
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 */

function solution(priorities, location) {
  let answer = 1;
  let queue = [];

  for (let i = 0; i < priorities.length; i++) {
    queue.push([priorities[i], i === location]);
  }

  priorities.sort((a, b) => b - a);
  let maxIdx = 0;

  while (queue.length) {
    let [value, isTarget] = queue.shift();

    if (priorities[maxIdx] <= value) {
      // 우선순위에 통과
      if (isTarget) return answer;

      // target 이 아니면
      answer++;
      maxIdx++;
    } else {
      queue.push([value, isTarget]);
    }
  }

  return answer;
}
