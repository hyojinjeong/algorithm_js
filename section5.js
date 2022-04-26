// 두 배열 합치기
// function solution(arr1, arr2){
//     let answer=[];
//     let n=arr1.length;
//     let m=arr2.length;

//     arr1.push(...arr2);
//     answer = arr1.sort((a, b) => a - b);
//     console.log(answer);
//     return answer;
// }

// let a=[1, 3, 5];
// let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));

// two pointers algorithm
// function solution(arr1, arr2){
//     let answer=[];
//     let n=arr1.length;
//     let m=arr2.length;
//     let p1=p2=-0;
//     while(p1<n && p2<m){
//         if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);  // 후치연산
//         else answer.push(arr2[p2++]);
//     }
//     while(p1<n) answer.push(arr1[p1++]);
//     while(p2<m) answer.push(arr2[p2++]);

//     return answer;
// }

// let a=[1, 3, 5];
// let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));

// 공통원소 구하기
// function solution(arr1, arr2){
//     let answer=[];
//     let lp = 0;
//     let rp = 0;

//     answer.push(...arr1);
//     answer.push(...arr2);
//     answer = answer.sort((a, b) => (a - b));
//     answer.filter((e, i) => { 
//         if(answer.indexOf(e) !== i){
//             return true;
//         }
//     });  
//    return answer;
// }

// let a=[1, 3, 9, 5, 2];
// let b=[3, 2, 5, 7, 8];
// console.log(solution(a, b));

// function solution(arr1, arr2){
//     // 두 배열을 오름차순으로 정렬한다.
//     // 각각의 포인트에서 원소가 같을 때 까지 작은 포인트를 증가시킴
//     let answer=[];
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);
//     let p1=p2=0;
//     while(p1<arr1.length && p2<arr2.length){
//         if(arr1[p1]===arr2[p2]){
//             answer.push(arr1[p1++]);
//             p2++;
//         }
//         else if(arr1[p1]<arr2[p2]) p1++
//         else p2++;
//     }
//     // 1 2 3 5 9 
//     // 2 3 5 7 8 10 15 17
//     return answer;
// }

// let a=[1, 3, 9, 5, 2];
// let b=[3, 2, 5, 7, 8];
// console.log(solution(a, b));

// 연속부분수열1
// function solution(m, arr) {
//     let answer = 0,
//         lt = 0,
//         sum = 0;

//     for (let rt = 0; rt < arr.length; rt++) {
//         sum += arr[rt];
//         if (sum === m) answer++;
//         while (sum >= m) {
//             sum -= arr[lt++];
//             if(sum === m) answer++;
//         }
//     }
//     return answer;
// }


// let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a));

// 연속부분수열2
// function solution(m, arr){
//     let answer=0, sum=0, lt=0;

//     for(let rt=0; rt<arr.length; rt++){
//         sum += arr[rt];
//         while(sum > m){
//             sum -= arr[lt++];
//         }
//         answer += (rt-lt+1);
//     }
//     return answer;
// }

// let a=[1, 3, 1, 2, 3];
// console.log(solution(5, a));


// 최대매출
// function solution(k, arr){
//   let answer, rt, lt=0;
//   let sum = 0;
//   let max = 0;
//   for(let i=0; i<k; i++){
//       sum += arr[i];
//       rt = i;
//   }

//   while(rt < arr.length){
//       sum += arr[rt++];
//       sum -= arr[lt++];
//     if(sum > max){
//         max = sum;
//         answer = max;
//     }
//   }
//   return answer;
// }

// let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

// function solution(k, arr){
//   let answer, sum=0;
//   for(let i=0; i<k; i++) sum+=arr[i];
//   answer=sum;
//   for(let i=k; i<arr.length; i++){
//       sum+=(arr[i]-arr[i-k]);
//       answer=Math.max(answer, sum);
//   }                    
//   return answer;
// }

// let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

// 학급회장(해시)
// function solution(s){  
//   let answer;
//   let sH = new Map();

//   for(let x of s){
//     if(sH.has(x)) sH.set(x, sH.get(x)+1);
//       else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for(let [key, value] of sH){
//     console.log(sH);
//     if(value > max){
//       max = value;
//       answer = key;
//     }
//   }
//   return answer;
// }

// let str="BACBACCACCBDEDE";
// console.log(solution(str));

// 아나그램(해쉬)
// function solution(str1, str2){
//   let answer="YES"; 
//   let sH = new Map();
//   for(let x of str1){
//       if(sH.has(x)) sH.set(x, sH.get(x)+1);
//       else sH.set(x, 1);
//   }
//   for(let x of str2){
//       if(!sH.has(x) || sH.get(x)==0) return "NO";
//       sH.set(x, sH.get(x)-1);
//   }
//   return answer;
// }

// let a="AbaAeCe";
// let b="baeeACA";
// console.log(solution(a, b));

// 전체 아나그램
// function isAnagram(a, b){
//   let result = true;
//   let ori = new Map([...a]);
//   for(let x of b){
//     if(!ori.has(x) || ori.get(x)==0) result = false;
//     ori.set(x, ori.get(x)-1);
//   }
//   return result;
// }

// function solution(s, t) {
//   let answer = 0;
//   let sH = new Map();

//   for (let x of t) {
//     if (sH.has(x)) {
//       sH.set(x, sH.get(x) + 1);
//     } else {
//       sH.set(x, 1);
//     }
//   }

//   let lt = 0;
//   for(let rt = t.length-1; rt<s.length; rt++){
//     let comp = a.slice(lt++, rt);
//     if(isAnagram(sH, comp)){
//       answer++;
//     }
//   }
//   return answer;
// }
// let a = "bacaAacba";
// let b = "abc";

// console.log(solution(a, b));

function compareMaps(map1, map2){
  if(map1.size!==map2.size) return false;
  for(let [key, val] of map1){
      if(!map2.has(key) || map2.get(key)!==val) return false;
  }
  return true;
}
function solution(s, t){
  let answer=0;
  let tH = new Map();
  let sH = new Map();
  for(let x of t){
      if(tH.has(x)) tH.set(x, tH.get(x)+1);
      else tH.set(x, 1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
      else sH.set(s[i], 1);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
      else sH.set(s[rt], 1);
      if(compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt])-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));