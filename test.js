function solution(array, commands) {
  var answer = [1, 5, 2, 6, 3, 7, 4];
  answer = answer.slice(1, 5);
  answer = answer.sort()
  console.log(answer[2]);
  return answer;
}

solution()