/*
아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
넓이 우선 탐색 : 1 2 3 4 5 6 7 */

/*
BFS 는 Queue 를 활용해서 트리의 레벨 순으로 구함
그럼 언제 BFS 쓰는지? 
    >> 상태트리 
    - 출발지점 ~ 도착지점 까지 최단거리 ! 구할때
    - ex : 출발지점으로부터 한번만에 갈수있는곳 / 두번만에 / ... 
*/

function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nxt of [v * 2, v * 2 + 1]) {
      if (nxt > 7) continue;
      queue.push(nxt);
    }
  }
  return answer;
}

console.log(solution());
