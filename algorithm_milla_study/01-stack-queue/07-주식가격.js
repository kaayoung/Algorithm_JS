/*
프로그래머스 
https://school.programmers.co.kr/learn/courses/30/lessons/42584
*/

function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length; i++) {
    let cnt = 0; // 사실 실제로 개수를 구하는게 아니라 '초'를 구하는거
    for (let j = i + 1; j < prices.length; j++) {
      cnt++; // 그 다음이 떨어진다고 해도 일단 1초 동안은 떨어지지 않은거니까
      if (prices[i] > prices[j]) break;
    }
    answer.push(cnt);
  }
  return answer;
}

console.log(solution([4, 3, 6, 9, 7, 4]));
