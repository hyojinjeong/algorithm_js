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
function solution(m, arr){
    let answer=0, sum=0, lt=0;

    for(let rt=0; rt<arr.length; rt++){
        sum += arr[rt];
        while(sum > m){
            sum -= arr[lt++];
        }
        answer += (rt-lt+1);
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
