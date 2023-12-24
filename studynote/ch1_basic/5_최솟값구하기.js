/*
    7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 7개의 수가 주어진다.
▣ 출력설명
첫 번째 줄에 가장 작은 값을 출력한다.
▣ 입력예제 1
5 3 7 11 2 15 17
▣ 출력예제 1 2
*/

function solution(arr) {
  //   let answer = arr[0];

  //   for (let i = 1; i < arr.length; i++) {
  //     if (answer > arr[i]) answer = arr[i];
  //   }

  let answer = Math.min(...arr); // 배열을 spread operation으로 펼쳐줘야함!

  return answer;
}

let arr = [5, 7, 3, 2, 9, 11];
console.log(solution(arr));

/*
    Number.MAX_SAFE_INTEGER : 안정적으로 큰 숫자 (미리 세팅할때)
*/
