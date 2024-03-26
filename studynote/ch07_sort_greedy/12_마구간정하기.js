/*N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마 구간간에 좌표가 중복되는 일은 없습니다.
현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.
 */

function count(arr, target) {
  let cnt = 1,
    gap = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (gap - arr[i] >= target) {
      cnt++;
      gap = arr[i];
    }
  }
  return cnt;
}

function solution(horse, stables) {
  stables.sort((a, b) => b - a);
  let answer = 0;
  let lt = 1,
    rt = stables[0] - stables[stables.length - 1];
  while (lt <= rt) {
    let mt = parseInt((lt + rt) / 2);
    if (count(stables, mt) >= horse) {
      answer = mt;
      lt = mt + 1;
    } else rt = mt - 1;
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
