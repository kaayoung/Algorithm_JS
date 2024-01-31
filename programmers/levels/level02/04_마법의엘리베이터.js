function solution(s) {
  let answer = 0;

  while (s) {
    let v = s % 10,
      next = parseInt(s / 10) % 10;
    if (v < 5) {
      answer += v;
      s -= v;
    } else if (v > 5) {
      answer += 10 - v;
      s += 10 - v;
    } else {
      // if 5
      answer += v;
      if (next < 5) s -= v;
      else s += v;
    }
    s = parseInt(s / 10);
  }

  return answer;
}
