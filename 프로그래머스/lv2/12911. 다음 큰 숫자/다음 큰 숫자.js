function solution(n) {
    let answer = n;
    let num1 = answer.toString(2).split("").reduce((prev, curr) => prev + parseInt(curr), 0);
    let num2 = 0;
    while(true) {
        answer++;
        num2 = answer.toString(2).split("").reduce((prev, curr) => prev + parseInt(curr), 0);
        if(num1 === num2) {
            break;
        }
    }
    return answer;
}