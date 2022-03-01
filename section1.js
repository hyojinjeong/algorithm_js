// a를 #으로
function solution(s){
    let answer="";
    // answer = s.replace(/A/gi, '#');
    // return answer;
    for(let x of s){
        if(x === 'A'){
            answer += '#';
        } else{
            answer += x;
            }
        }
    return answer;
    }