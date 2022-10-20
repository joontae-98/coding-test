function solution(s) {
    const arr = s.split(" ");
    const numArr = arr.map((value) => value*1).sort((a, b) => a - b);
    const answer = numArr.slice(0,1);
    answer.push(numArr.pop());
    return answer.join(" ");
}