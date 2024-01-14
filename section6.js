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
// function solution(s){  
//   let answer;
//   let stack=[];

//   for(let x of s){
//     console.log(stack);
//     if(x === ')'){
//       while(stack.pop() !== '('); // stack 구조는 선입후출임에 유의 할 것
//     } else {
//       stack.push(x);
//     }
//   }
//   answer = stack.join(''); 
//   return answer;
// }

// let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));

// 크레인 인형뽑기
// function solution(board, moves){
//   let answer=0;
//   let stack=[];     

//   moves.forEach(pos => {
//     for(let i=0; i<board.length; i++){
//       if(board[i][pos-1] !== 0){
//         let tmp = board[i][pos-1];
//         board[i][pos-1] = 0;
//         if(tmp === stack[stack.length-1]){
//           stack.pop();
//           answer += 2;
//         } 
//         else stack.push(tmp);
//         break;        
//       }
//     }
//   })

//   return answer;
// }

// let a=[[0,0,0,0,0],
//      [0,0,1,0,3],
//      [0,2,5,0,1],
//      [4,2,4,4,2],
//      [3,5,1,3,1]];

// let b=[1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));

// 후위식 연산
// function solution(str){
//   let answer = 0;
//   let stack = [];

//   for(let x of str){
//     if(!isNaN(Number(x))){
//       stack.push(Number(x));
//     } else {
//       let tmp2 = stack.pop();
//       let tmp1 = stack.pop();      

//       switch(x){
//        case '+': 
//         stack.push((tmp1 + tmp2)); 
//         break;
//         case '-': 
//         stack.push((tmp1 - tmp2)); 
//         break;
//         case '*': 
//         stack.push((tmp1 * tmp2)); 
//         break;
//         case '/': 
//         stack.push((tmp1 / tmp2)); 
//         break;                        
//       }
//     }
//   }
//   answer = stack.pop();
//   return answer;
// }
// let str = '352+*9-'
// console.log(solution(str));

// 후위식 연산
// function solution(s){  
//   let answer;
//   let stack=[];
//   for(let x of s){
//       if(!isNaN(x)) stack.push(Number(x));
//       else{
//           let rt=stack.pop();
//           let lt=stack.pop();
//           if(x==='+') stack.push(lt+rt);
//           else if(x==='-') stack.push(lt-rt);
//           else if(x==='*') stack.push(lt*rt);
//           else if(x==='/') stack.push(lt/rt);
//       }
//   }
//   answer=stack[0];
//   return answer;
// }

// let str="352+*9-";
// console.log(solution(str));

// 쇠막대기
function solution(s){
  let answer=0;
  let stack=[];
                
  return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));