function solution(book_time) {
  let answer = 0;
  let rooms = Array.from({ length: book_time.length }, () => -1); //endTime
  for (let tt of book_time) {
    // ["15:00", "17:00"],
    tt[0] = changetToMinutes(tt[0]);
    tt[1] = changetToMinutes(tt[1]);
  }
  book_time.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    return 0;
  });

  for (let tt of book_time) {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= tt[0]) {
        // 청소하고 가능한 상태
        rooms[i] = tt[1] + 10;
        break;
      } else continue;
    }
  }

  rooms.forEach((v) => {
    if (v !== -1) answer++;
  });
  return answer;
}

function changetToMinutes(str) {
  // "15:00"
  const hour = Number(str.slice(0, 2));
  const min = Number(str.slice(3, 5));
  return 60 * hour + min;
}

let arr = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
];
console.log(solution(arr));
