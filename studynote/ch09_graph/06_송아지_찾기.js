/*
현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 현수의 위치와 송아 지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음 과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다.
현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다. 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성 하세요.
▣ 입력설명
첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다. 직선의 좌표 점은 1부터 10,000 까지이다.
▣ 출력설명
점프의 최소횟수를 구한다. 답은 1이상입니다. */

function solution(s, e) {
  let answer = 0;
  let dx = [1, -1, 5];
  let check = Array.from({ length: 10001 }, () => null);
  check[s] = 0;
  let queue = [];
  queue.push(s);

  while (queue.length) {
    let v = queue.shift();
    if (v === e) {
      answer = check[v];
      break;
    }
    for (let a of dx) {
      let x = a + v;
      if (check[x] !== null || x < 1 || x > 10000) continue;
      check[x] = check[v] + 1;
      queue.push(x);
    }
  }
  return answer;
}

console.log(solution(5, 14));
