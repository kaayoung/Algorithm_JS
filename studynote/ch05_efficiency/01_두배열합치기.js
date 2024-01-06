/*
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.

*/

/* 내가 처음 풀었던 방법 -> 이렇게 풀지 않기!

// sort() => O(nlogn) 복잡도임!

function solution(arr1, arr2) {
  let answer = [];
  answer = arr1.concat(arr2);
  answer.sort();
  return answer;
}
 */

// 투포인터 알고리즘 사용하기!!  -> O(n+m)
function solution(arr1, arr2) {
  let answer = [];
  // let n = Math.min(arr1.length , arr2.length) , m = Math.max(arr1.length , arr2.length)
  let n = arr1.length,
    m = arr2.length;
  let a = (b = 0);

  while (a < n && b < m) {
    if (arr1[a] < arr2[b]) answer.push(arr1[a++]);
    else answer.push(arr2[b++]);
  }

  if (a < n) answer.push(...arr1.slice(a));
  if (b < n) answer.push(...arr2.slice(b));
  //   while (a < n) answer.push(arr1[a++]);
  //   while (b < m) answer.push(arr2[b++]);

  /*
  for (let i = 0; i < n + m; i++) {
    if (a >= arr1.length) {
      answer.push(...arr2.slice(b));
      break;
    }
    if (b >= arr2.length) {
      answer.push(...arr1.slice(a));
      break;
    }
    if (arr1[a] > arr2[b]) answer.push(arr2[b++]);
    else answer.push(arr1[a++]);
  }
   */
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
