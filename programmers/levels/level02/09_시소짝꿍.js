function solution(weights) {
  let answer = 0;
  let ans = {};
  let ratio = [1, 3 / 2, 4 / 3, 2];

  weights.sort((a, b) => b - a); // 내림차순

  weights.forEach((w, idx) => {
    ratio.forEach((r, i) => {
      if (ans[r * w]) {
        answer += ans[r * w];
      }
    });
    if (ans[w]) ans[w]++;
    else ans[w] = 1;
  });

  return answer;
}
