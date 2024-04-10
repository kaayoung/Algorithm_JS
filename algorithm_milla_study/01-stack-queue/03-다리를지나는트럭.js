/*
프로그래머스 42583
(https://school.programmers.co.kr/learn/courses/30/lessons/42583)

- 문제 
트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 
모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 
단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

*/

function solution(bridge_length, weight, truck_weights) {
  // queue -> 빈값넣어주기
  let answer = 0;
  let cnt = 0;
  const queue = Array.from({ length: bridge_length }, () => 0);

  while (queue.length) {
    queue.shift();
    answer++;
    if (truck_weights.length === 0 || queue.length === 0) continue;
    let current_weight = queue.reduce((a, b) => a + b);
    if (current_weight + truck_weights[0] > weight) queue.push(0);
    else queue.push(truck_weights.shift());
  }

  return answer;
}
