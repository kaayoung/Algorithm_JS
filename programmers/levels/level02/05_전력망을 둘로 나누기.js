function solution(n, wires) {
  let answer = n;
  let arr = Array.from({ length: n + 1 }, () => []);
  for (let [wx, wy] of wires) {
    arr[wx].push(wy);
    arr[wy].push(wx);
  }

  function checkGap(arr, a, b) {
    // a,b 는 끊으려는 전선
    let list = [...arr];
    let check = Array.from({ length: n + 1 }, () => false);

    let queue = [];
    queue.push(a);
    while (queue.length) {
      let top = queue.shift();
      check[top] = true;
      for (let x of list[top]) {
        if (check[x] || x === b) continue;
        check[x] = true;
        queue.push(x);
      }
    }
    let cnt = 0;
    check.forEach((v, i) => v && cnt++);
    let cnt2 = n - cnt;
    return Math.abs(cnt - cnt2);
  }

  for (let [x, y] of wires) {
    let m = checkGap(arr, x, y);
    if (m === 0) return 0;
    if (m > answer) continue;
    answer = m;
  }
  return answer;
}
