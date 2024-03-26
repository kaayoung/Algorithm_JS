function solution(orders, course) {
  let answer = [];
  let al_arr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  );
  let alphabet = {};
  al_arr.forEach((v, i) => (alphabet[v] = []));
  orders.forEach((v, i) => {
    for (let x of v) alphabet[x].push(i);
  });
  function countOrders(course) {
    // course : (Ex)"ABC" 조합
    let cnt = 0;
    orders.forEach((v, i) => {
      // v : "ABCFG" , "AC" ..
      let hasAll = true;
      for (let x of course) {
        // x : "A""B""C"
        if (!v.includes(x)) {
          hasAll = false;
          break;
        }
      }
      hasAll && cnt++;
    });

    return cnt;
  }

  function comb(lev, menus, n, s, start) {
    // lev: level / arr:조합 담을 배열 / n:course 수 (고정) /
    if (lev === n) {
      let m = countOrders(s);
      if (m < 2) return;
      menus[s] = m;
      return;
    }
    for (let i = start; i < 26; i++) {
      if (alphabet[al_arr[i]].length === 0) continue;
      s += al_arr[i];
      comb(lev + 1, menus, n, s, i + 1);
      s = s.slice(0, -1);
    }
  }

  function getMaxCourse(course) {
    const max = Math.max(...Object.values(course));
    for (let [k, v] of Object.entries(course)) {
      if (v === max) {
        answer.push(k);
      }
    }
  }

  for (let c of course) {
    let menu_comb = {};
    comb(0, menu_comb, c, "", 0);
    getMaxCourse(menu_comb);
  }

  return answer.sort();
}

let order = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2, 3, 4];
console.log(solution(order, course));
