// 회문 문자열
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
// 팰린드롬
// function solution(s){
//     let answer="YES";
//     s = s.toLowerCase().replace(/[^a-z]/g,''); // 소문자로 변환 한 뒤 정규표현식으로 대체
//     if(s !== s.split('').reverse().join('')){
//         console.log(s);
//         console.log(s.split('').reverse().join(''));
//         return "No";
//     }
//     return answer;
// }

// let str="found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));

// 숫자만 추출
// function solution(str){
//     let answer="";
//     // str = str.toLowerCase().replace(/[a-z]/g,'');
//     // return Number(str);
//     for(let x of str){
//       if(!isNaN(x)) answer += x;
//     }
//     return parseInt(answer);
// }
// let str="g0en2T0s8eSoft";
// console.log(solution(str));

// 가장 짧은 문자거리
// function solution(s, t){
//     let answer=[];
//     let cnt = 0;

//     for(let i=0; i<s.length; i++){
//         if(s[i] === t){
//             answer.push(0);
//             cnt = 0;
//         } else {
//             cnt++;
//             answer.push(cnt);
//         }
//     }    
//     cnt = 0;
//     for(let j=s.length-1; j>=0; j--){
//         if(answer[j] !== 0){
//             cnt++;
//             answer[j] = Math.min(cnt, answer[j]);
//         }else if(answer[j] === 0){
//             cnt = 0;
//         }
//     }
//     console.log(answer);
//     return answer;
// }
// let str="teachermode";
// console.log(solution(str, 'e'));
// 문자열 압축
function solution(s){
    let answer="";
    let cnt = 1;


    for(let i=0; i<s.length; i++){
        if(s[i] === s[i+1]){
            cnt++;
        }
        else{
            answer += s[i];
            if(cnt !== 1){
                answer += cnt;  
                cnt = 1;
            }
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));