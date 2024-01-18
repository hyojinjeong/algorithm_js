// function solution(participant, completion) {
//   let answer = '';
//   let partMap = new Map();
//   let compMap = new Map();
//   for (let i = 0; i < participant.length; i++) {
//     if (partMap.get(participant[i])) {
//       let val = partMap.get(participant[i]);
//       val += 1;
//       partMap.set(participant[i], val)
//     } else {
//       partMap.set(participant[i], 1)
//     }
//   }
//   for (let q = 0; q < completion.length; q++) {
//     if (compMap.get(completion[q])) {
//       let val = compMap.get(completion[q]);
//       val += 1;
//       compMap.set(completion[q], val)
//     } else {
//       compMap.set(completion[q], 1)
//     }
//   }
//   for (let p = 0; p < participant.length; p++) {
//     if (compMap.get(participant[p])) {
//       if (compMap.get(participant[p]) !== partMap.get(participant[p])) {
//         answer = participant[p]
//       }
//     } else {
//       answer = participant[p];
//     }
//   }
//   return answer;
// }

// function solution(participant, completion) {
//   let map = new Map();

//   for (let i = 0; i < participant.length; i++) {
//     let p = participant[i];
//     let c = completion[i];

//     map.set(p, ((map.get(p) || 0) + 1));
//     map.set(c, ((map.get(c) || 0) - 1));
//   }
//   for (let [k, v] of map) {
//     if (v > 0) {
//       return k
//     }
//   }
// }
// function solution(phone_book) {
//   phone_book.sort();
//   return !phone_book.some((v, i) => phone_book[i + 1]?.indexOf(v) === 0)
//   return result;
// }
// console.log(solution(['a', 'b', 'a', 'a'], ['a', 'a', 'a']));

// function solution(clothes) {
//   let result = 1;
//   let map = new Map();

//   clothes.forEach(e => map.set(e[1], (map.get(e[1]) || 0) + 1));
//   for (const [key, value] of map) {
//     result *= (value + 1);
//   }
//   result = result - 1;
//   return result;
// }

// console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))
function solution(arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i])
    }
  }
  return answer;
}