// 자릿수의 합
// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER, result = {};

//     for(let i=0; i<arr.length; i++){
//         let share = arr[i];
//         let remain = arr[i];
//         let sum = 0;
//         while(share > 0){
//             remain = parseInt(share % 10);
//             share = parseInt(share / 10);
//             sum += remain;
//             result[i] = sum;
//         }     
//     }
//     for(let key of Object.keys(result)){
//         let maxKey;
//         if(max < result[key]){
//             max = result[key];
//             maxKey = key;
//             answer = arr[key];
//         } else if(max == result[key]){
//             answer = (arr[maxKey] > arr[key]) ? arr[maxKey] : arr[key];

//         }
//     }
//     return answer;
// }
// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;

//     for(let x of arr){
//         let sum = 0; tmp = x;
//         while(tmp){
//             sum += (tmp%10);
//             tmp = Math.floor(tmp/10);
//         }
//         if(sum>max){
//             max=sum;
//             answer=x;
//         }
//         else if(sum===max){
//             if(x>answer) answer=x;
//         }
//     }
//     return answer;
// }
// let arr1=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr1));

// 뒤집은 소수
// function isPrime(num){

//     for(let i = 2; i < num; i++){
//         while(num % i === 0){
//             return false;
//         }
//     }
// }
// function solution(arr){
//     let answer = [];
//     let reverseList = [];
//     for(let i = 0; i< arr.length; i++){
//         let reverse=[];
//         let share = arr[i];
//         let remain = arr[i];
//         while(share > 0){
//             remain = parseInt(share % 10);
//             share = parseInt(share / 10);
//             reverse.push(remain);
//         }
//         reverseList.push(reverse.join(''));                
//     }
//     reverseList = reverseList.map(e => parseInt(e));
//     for(let x of reverseList){
//         if(!isPrime(x)){
//             answer.push(x);
//         }
//     }
//     return answer;
// }

// let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

// 멘토링
// function solution(test){
//     let answer=0;
//     m=test.length;
//     n=test[0].length;
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=n; j++){
//             let cnt=0;
//             for(let k=0; k<m; k++){
//                 let pi=pj=0;
//                 for(let s=0; s<n; s++){
//                     if(test[k][s]===i) pi=s;
//                     if(test[k][s]===j) pj=s;    
//                     console.log('i : ' + i, 'j : ' + j);                     
//                     console.log('k : ' + k, 's : ' + s);                                                  
//                     console.log('pi : ' + pi, 'pj : ' + pj);
//                 }
//                 if(pi<pj) cnt++;''
//             }
//             if(cnt===m) answer++;
//         }
//     }
//     return answer;
// }

// let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
// console.log(solution(arr));

// 졸업선물
// function solution(m, product){
//     let answer=0;
//     let n=product.length;
//     product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
//     for(let i=0; i<n; i++){
//         let money=m-(product[i][0]/2+product[i][1]);
//         let cnt=1;
//         for(let j=0; j<n; j++){
//             if(j!==i && (product[j][0]+product[j][1])>money) break;
//             if(j!==i && (product[j][0]+product[j][1])<=money){
//                 money-=(product[j][0]+product[j][1]);
//                 cnt++;
//             }
//         }
//         answer=Math.max(answer, cnt);
//     }  
//     return answer;
// }

// let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
// console.log(solution(28, arr));

// k번째 큰수
// function solution(n, k, card){
//     let answer;
//     let tmp = new Set();
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             for(let k=j+1; k<n; k++){
//                 tmp.add(card[i]+card[j]+card[k]);
//             }
//         }
//     }
//     let a=Array.from(tmp).sort((a, b)=>b-a);
//     answer=a[k-1];
//     return answer;
// }

// let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(10, 3, arr));