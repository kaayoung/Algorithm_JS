// https://school.programmers.co.kr/learn/courses/30/lessons/135807#

/**

function solution(arrayA, arrayB) {
    let answer = 0;
    
    arrayA.sort((a,b) => a-b)
    arrayB.sort((a,b) => a-b)
    
    function getAns(arr1 , arr2) {
        let min = arr1[0] ;
        if (min === 1) return
        if (compare(arr1, arr2, min)) answer = min
        else {
            for (let i = parseInt(min/2) ; i>1 ; i--) {
                if (compare(arr1,arr2,i)) {
                    answer = i
                    break
                }
            }
        }
    }
    
    if (arrayA[0] >= arrayB[0]) {
        getAns(arrayA, arrayB)
        if (answer < (arrayB[0] / 2)) getAns(arrayB, arrayA)
    }
    else {
        getAns(arrayB, arrayA)  
        if (answer < (arrayA[0] / 2)) getAns(arrayA, arrayB)
    }
    
    return answer;
    
}

function compare(arr1, arr2, val) {
//     arr1 : 다 나눌수 있는   arr2 : 다 나눌 수 없느
    for (let x of arr1) {
        if (x % val !==0 ) return false
    }
    for (let x of arr2) {
        if (x % val === 0) return false
    }
    
    return true
}

 */

function solution(arrayA, arrayB) {
  let answer = 0;

  // 생각보다 이 부분이 시간을 많이 잡아먹음!!!
  // arrayA = [...new Set(arrayA)].sort((a,b) => a-b)
  // arrayB = [...new Set(arrayB)].sort((a,b) => a-b)

  let [gcdA, gcdB] = [arrayA[0], arrayB[0]];

  for (let i = 1; i < arrayA.length; i++) {
    gcdA = getGCD(arrayA[i], gcdA);
    gcdB = getGCD(arrayB[i], gcdB);
  }

  if (arrayA.every((x) => x % gcdB !== 0)) answer = gcdB;
  if (arrayB.every((x) => x % gcdA !== 0)) answer = Math.max(gcdA, gcdB);

  return answer;
}

function getGCD(big, small) {
  if (big % small === 0) return small;
  else {
    return getGCD(small, big % small);
  }
}
