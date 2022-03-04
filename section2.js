// 큰 수 출력하기
// function solution(arr){         
//     let answer=[];
//     arr.forEach((e, i) => {
//         if(i===0){
//             answer.push(arr[0]);
//         } else{
//             if(e < arr[i+1]){
                
//                 answer.push(arr[i+1]);
//             }
//         }
//     });
//     return answer;
// 
//    let answer=[];
//    answer.push(arr[0]);
//    for(let i=1; i<arr.length; i++){
//        if(arr[i] > arr[i-1]) answer.push(arr[i]);
//    }
//    return answer;
// }
// let arr=[7, 3, 9, 5, 6, 12];

// console.log(solution(arr));

// 보이는 학생
// function solution(arr){         
//     let answer=1, max=arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(max < arr[i]){
//             console.log(arr[i]);
//             answer++;
//             max = arr[i];
//         }
//     }
//     return answer;
// }

// let arr=[130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(arr));
// 가위바위보
// function solution(a, b){         
//     let answer="";
//     for(let i=0; i<a.length; i++){
//         if(a[i] === b[i]){
//             answer += 'D';
//         } else if(a[i]===1 && b[i]===3) answer += 'A';
//         else if(a[i]===2 && b[i]===1) answer += 'A';
//         else if(a[i]===3 && b[i]===2) answer += 'A';
//         else answer += 'B';
//     }
//     return answer;
// }

// let a=[2, 3, 3, 1, 3];
// let b=[1, 1, 2, 2, 3];
// console.log(solution(a, b));

// 점수계산
// function solution(arr){         
    // let answer=0, cnt=0;  
    // let score;
    // for(let i=0; i<arr.length; i++){
    //     score = (arr[i] === 1) ? 1 : 0;     
    //     if(score == 1 && arr[i-1] !== 0 && arr[i-1] != undefined){
    //          arr[i] = arr[i-1] + 1;
    //          score = arr[i];
    //         cnt += score;    
    //     } else{
    //         cnt += score;
    //         answer = cnt;
    //     }
    // }
    // return answer;
    // for(let x of arr){
    //     if(x===1){
    //         cnt++;
    //         answer += cnt;
    //     }
    //     else cnt = 0;
    // }
//     return answer;
// }

// let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));

// 등수구하기
// function solution(arr){  
//     let n = arr.length;
//     let answer = Array.from({length:n}, ()=>1); // 모두 1로 초기화 됨
  
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             if(arr[j]>arr[i]) answer[i]++;
//         }
//     }
//     return answer;
// }

// let arr=[87, 89, 92, 100, 76];
// console.log(solution(arr));

// 격자판 최대합
// function solution(arr){  
//     let answer=Number.MIN_SAFE_INTEGER;
//     let n=arr.length;
//     let sum1=sum2=0;

//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             sum1 += arr[i][j];
//             sum2 += arr[j][i];
//         }
//         answer = Math.max(answer, sum1, sum2);
//     }
//     sum1 = sum2 = 0;

//     for(let i=0; i<n; i++){
//         sum1 += arr[i][i];
//         sum2 += arr[i][n-i-1]; // 행의 합 sum1 열의 합 sum2
//     }
//     answer = Math.max(answer, sum1, sum2);
//     return answer;
// }

// let arr=[[10, 13, 10, 12, 15], 
//          [12, 39, 30, 23, 11],
//          [11, 25, 50, 53, 15],
//          [19, 27, 29, 37, 27],
//          [19, 13, 30, 13, 19]];
// console.log(solution(arr));

// 봉우리
// function solution(arr){  
//     let answer=0;
//     let n=arr.length;
//     let dx=[-1, 0, 1, 0];
//     let dy=[0, 1, 0, -1];
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             let flag=1;
//             for(let k=0; k<4; k++){
//                 let nx=i+dx[k];
//                 let ny=j+dy[k];
//                 if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
//                     flag=0;
//                     break;
//                 }
//             }
//             if(flag) answer++;
//         }
//     }  
      
//     return answer;
// }

// let arr=[[5, 3, 7, 2, 3], 
//          [3, 7, 1, 6, 1],
//          [7, 2, 5, 3, 4],
//          [4, 3, 6, 4, 1],
//          [8, 7, 3, 5, 2]];
// console.log(solution(arr));

// var x = 'global';

// function foo(){
//     var x = 'local';
//     console.log(x);
// }
// foo();

// console.log(x);
// function solution(s){
//     let answer="YES";
//     s = s.toLowerCase();
//     let n = Math.floor(s.length);
//     for(var i = 0; i<n; i++){
//         if(s[i] !== s[n-i-1]) return answer = "NO";
//     }
//     return answer;
// }

// let str="gooG";
//console.log(solution(str));
function solution(s){
    let answer="YES";
    s = s.toLowerCase().replace(/[^a-z]/g,''); // 소문자로 변환 한 뒤 정규표현식으로 대체
    if(s !== s.split('').reverse().join('')){
        console.log(s);
        console.log(s.split('').reverse().join(''));
        return "No";
    }
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));