function solution(n) {
    var answer = -1;
    for (let i = 1; i <= n; i++) {
        if (n % i !== 0){
            continue;
        }
        if ( i * i === n) {
         answer = (i + 1) * (i + 1);   
            break;
        }
    }
    return answer;
}