function solution(m, musicinfos) {
  let answer = "(None)",
    playtime = 0;
  m = changeNotes(m);
  musicinfos = musicinfos.map((v, i) => v.split(","));

  for (let [startTime, endTime, title, music] of musicinfos) {
    music = changeNotes(music);
    let time = changeToMin(endTime) - changeToMin(startTime); // 실제 재생시간

    if (time <= music.length) music = music.slice(0, time);
    else music = music.repeat(Math.ceil(time / music.length)).slice(0, time);

    if (music.includes(m)) {
      if (playtime < time) {
        playtime = time;
        answer = title;
      }
    }
  }
  return answer;
}

function changeToMin(str) {
  return Number(str.slice(0, 2)) * 60 + Number(str.slice(3, 5));
}

function changeNotes(str) {
  const notes = { "C#": "c", "D#": "d", "F#": "f", "G#": "g", "A#": "a" };
  for (let [key, value] of Object.entries(notes)) {
    str = str.replaceAll(key, value);
  }
  return str;
}

let m1 = "ABCDEFG",
  m2 = "CC#BCC#BCC#BCC#B",
  m3 = "ABC";
let arr1 = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"],
  arr2 = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"],
  arr3 = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];

console.log(solution(m1, arr1));
console.log(solution(m2, arr2));
console.log(solution(m3, arr3));
