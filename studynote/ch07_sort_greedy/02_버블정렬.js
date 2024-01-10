/*
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 버블정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
 */

function solution(arr) {
  //   let isChanged = true;
  //   while (isChanged) {
  //     isChanged = false;
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] > arr[i + 1]) {
  //         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  //         isChanged = true;
  //       }
  //     }
  //   }
  //   return arr;

  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
}

let a = [13, 5, 11, 7, 23, 15];
console.log(solution(a));
