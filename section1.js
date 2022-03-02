// a를 #으로
// function solution(s){
//     let answer="";
//     // answer = s.replace(/A/gi, '#');
//     // return answer;
//     for(let x of s){
//         if(x === 'A'){
//             answer += '#';
//         } else{
//             answer += x;
//             }
//         }
//     return answer;
//     }

// 문자 찾기 
// function solution(s, letter){
//     let answer = 0;
//     for(let i=0; i<s.length; i++){
//         if(s[i] === letter){
//             answer += 1;
//         }
//     }
//     return answer;
// }
// function solution(s, letter){
//     let answer = s.split(letter);

//     return answer.length - 1;
// }
// let str="COMPUTERPROGRAMMING";
// console.log(solution(str, 'R'));

// 대문자 찾기
// function solution(s){         
//     let answer=0;
//     let upperCase = s.toUpperCase();
//     for(letter of s){
//         for(lett of upperCase){
//             if(lett === letter){
//                 answer += 1;
//             }
//         }
//     }
//     return answer;
// }
    // function solution(s){
    //     let answer = 0;
    //     for(let x of s){
    //         // if(x === x.toUpperCase()){
    //         //     answer++;
    //         // }
    //         let num = x.charCodeAt(); // 아스키코드 넘겨줌, 대문자는 65 ~ 90 소문자는 97 ~ 122 => 대소문자는 값이 32 차이남
    //         if(num >= 65 && num <= 90) answer++;
    //     }
    //     return answer;
    // }
    // let str="KoreaTIMeGood";
    // console.log(solution(str));

// 대문자로 통일
// function solution(s){         
//     let answer="";
//     answer = s.toUpperCase();
//     return answer;

// }
//    function solution(s){
//        let answer = "";
//        for(let x of s){
//         //    if(x===x.toLowerCase()) answer+=x.toUpperCase();
//         //    else answer += x;
//         let num = x.charCodeAt();
//         if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
//         else answer+=x;
//        }
//        return answer;
//    }
// let str="ItisTimeToStudy";
// console.log(solution(str));

// 소문자는 소문자로 대문자는 대문자로
// function solution(s){  
//     let answer="";
//     for(let x of s){
//         if(x === x.toUpperCase()){
//             answer += x.toLowerCase();
//         } else {
//             answer += x.toUpperCase();
//         }
//     }
//     return answer;
// }

// console.log(solution("StuDY"));

// 가장 긴 문자열
// function solution(s){  
//     let answer="", max=0;

//     s.forEach((e, i) => {
//         let count = 0;

//         for(let i=0; i<e.length; i++){
//             count++;
//         }
//         console.log(count);
//         if(max < count){
//             max = count;
//             answer = s[i];
//         }    
//     });
//     return answer;
// }
//    function solution(s){
//     let answer, max=Number.MIN_SAFE_INTEGER;
//     for(let x of s){
//         if(x.length > max){
//             max = x;
//             answer = x;
//         }
//     }
//     return answer;
//    }
// let str=["teacher", "time", "student", "beautiful", "good"];
// console.log(solution(str));

// 가운데 문자 출력
// function solution(s){  
//     let answer = '';
//     let arr = s.split('');
//     let num = s.length / 2;
//     if(s.length % 2 === 0){
//         arr = arr.slice(num-1,num+1);
//     } else {
//         arr = arr.slice(num,num+1);
//     }
//     arr.forEach(e => {
//         answer += e;
//     });
//     return answer;
// }
//    function solution(s){
//        let answer;
//        let mid = Math.floor(s.length/2); // 내림 한 몫이 정확한 가운데(홀수 일 경우)
//     //    if(s.length%2==1) answer=s.substring(mid, mid+1)
//     //    else answer=s.substring(mid-1, mid+1);
//        if(s.length%2==1) answer=s.substr(mid, 1);
//        else answer=s.substr(mid-1, 2);    
//        return answer;
//    }
//   console.log(solution("teacher"));

// 중복문자 제거
// function solution(s){  
//     let answer;

//     return answer;
// }
// let str=["good", "time", "good", "time", "student"];
//   function solution(s){
       // console.log(s.indexOf('K'));
       // let answer = '';
    //    for(let i=0; i<s.length; i++){
    //     //    console.log(s[i], i, s.indexOf(s[i])); // 위치를 지정해주지 않으면 맨 처음으로 찾게되는 문자열만 리턴하기 때문에
    //        if(s.indexOf(s[i])===i){
    //            answer += s[i];
    //        }
    //    }
    // 'k' 개수찾기
//     let answer = 0;
//     let pos = s.indexOf('k');
//     while(pos !== -1){  // k라는 문자열이 없을 때 까지
//         answer++;
//         pos = s.indexOf('k', pos+1);
        
//     }
//        return answer;
//    }
//    console.log(solution("ksekkset"));
// console.log(solution(str));
// 중복 단어 제거
//    function solution(s){
//     let answer = [];
//     let arr = [];

//     s.forEach((e, i) => {
//         if(s.indexOf(e) === i){
//             arr.push(e);
//         }
//     });
//     answer = arr;
//     return answer;
//    }
//    function solution(s){
    //   let answer;
    //   answer = s.filter(function(v, i){
    //       if(s.indexOf(v)===i) return true;
    //   });  // 특정 조건을 만족하는 원소만 출력(참이 되는 요소만 뽑아서 배열화 시킴)
    //   return answer;
    // 다른 방법
//     let answer;
//     answer = s.filter(function(v, i){
//         return s.indexOf(v)===i;
//     });
//     return answer;
//    }
//    console.log(solution(['good', 'time', 'good', 'time', 'student']));