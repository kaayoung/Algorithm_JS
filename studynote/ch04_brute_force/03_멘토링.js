/*
현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니 다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.
▣ 출력설명
첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.

*/

/* 내가 풀었던 풀이

function solution(test) {
  let a = test.length,
    b = test[0].length;
  let result = Array.from({ length: b + 1 }, () => []); // [[], [], [], [], []]
  let answer = 0;
  for (let x of test) {
    // [3,4,1,2]
    for (let i = 0; i < b; i++) {
      result[x[i]].push(i + 1);
    }
  }

  for (let i = 1; i < b + 1; i++) {
    // 0~4
    for (let j = 1; j < b + 1; j++) {
      // result[i] 랑 result[j] 비교
      if (i === j) continue;
      let isMento = true;
      for (let n = 0; n < a; n++) {
        if (result[i][n] <= result[j][n]) {
          isMento = false;
          break;
        }
      }
      isMento && answer++;
    }
  }
  return answer;
}
 */

function solution(test) {
  let m = test.length,
    n = test[0].length; // 3 , 4
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 여기까지는 학생들의 조합 ex) 1번학생과 2번학생 비교 -> (1,2)
      let pi = (pj = 0);
      let cnt = 0;
      for (let x = 0; x < m; x++) {
        // 여기는 테스트 하나하나 ex) [3,4,1,2]
        for (let y = 0; y < n; y++) {
          // 여기는 test 내에 하나 ex) 3 / 4 / 1 / 2
          if (test[x][y] === i) pi = y;
          if (test[x][y] === j) pj = y;
          // 요 for 문 에서는 하나의 테스트 안에서 i,j 의 등수를 찾음
        }
        if (pi > pj) cnt++; // cnt 같이 test 의 개수와 같다는 뜻은 멘토 멘티가 성립된다는 뜻!!
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
