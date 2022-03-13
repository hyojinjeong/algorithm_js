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

// 뒤집은 소수
function isPrime(num){
    // for(let i = 2 ; i <= num; i++){
    //     if(num === 2){
    //         return true;
    //     } else if(num % i === 0 && i !== num){
    //         console.log('소수x : ' + num);
    //         break;
    //     } else {
    //         console.log('소수 : ' + num);
    //         return true;
    //     }
    // } 
    for(let i = 2; i < num; i++){
        while(num % i === 0){
            return false;
        }
    }
}
function solution(arr){
    let answer = [];
    let reverseList = [];
    for(let i = 0; i< arr.length; i++){
        let reverse=[];
        let share = arr[i];
        let remain = arr[i];
        while(share > 0){
            remain = parseInt(share % 10);
            share = parseInt(share / 10);
            reverse.push(remain);
        }
        reverseList.push(reverse.join(''));                
    }
    reverseList = reverseList.map(e => parseInt(e));
    for(let x of reverseList){
        if(!isPrime(x)){
            answer.push(x);
        }
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));