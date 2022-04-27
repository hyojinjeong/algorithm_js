// 올바른 괄호
// function solution(s){
//   let answer="YES";
//   let stack = [];

//   for(x of s){
//     if(x === '(') stack.push(x);
//     else{
//       if(stack.length === 0) return "NO";
//       stack.pop();
//     }
//   }
//   if(stack.length > 0){
//     return "NO";
//   }
//   return answer;
// }

// let a="(()(()))(()";
// console.log(solution(a));

// 괄호 문자 제거
function solution(s){  
  let answer;
  let stack=[];

  for(let x of s){
    console.log(stack);
    if(x === ')'){
      while(stack.pop() !== '('); // stack 구조는 선입후출임에 유의 할 것
    } else {
      stack.push(x);
    }
  }
  answer = stack.join(''); 
  return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));