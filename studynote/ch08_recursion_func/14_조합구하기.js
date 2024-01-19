/*
1부터N까지번호가적힌구슬이있습니다.이중 M개를뽑는방법의수를출력하는프로그 램을 작성하세요.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다. */

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0); // 조합 저장

  function comb(lev, start) {
    if (lev === m) {
      answer.push([...tmp]);
    } else {
      for (let i = start; i <= n; i++) {
        tmp[lev] = i;
        comb(lev + 1, i + 1);
      }
    }
  }

  comb(0, 1);

  return answer;
}

console.log(solution(6, 2));
