function solution(sequence, k) {
  let answer = [];
  let lt = 0,
    rt = 0,
    n = sequence.length;
  let total = sequence[0];
  while (lt <= rt) {
    if (total === k) {
      // answer 에 아무것도 없거나 길이가 더 긴거면 바꾸기
      // 아니면 no
      if (answer.length && answer[1] - answer[0] < rt - lt) continue;
      else if (
        answer.length === 0 ||
        (answer.length && answer[1] - answer[0] > rt - lt)
      ) {
        answer = [lt, rt];
      }
      total -= sequence[lt++];
    } else if (total < k) {
      total += sequence[++rt];
    } else {
      total -= sequence[lt++];
    }
  }
  return answer;
}
