function solution(n) {
    
    let count = 0;
    let sum = 0;
    let num = 1;
    
    for(let a = 1; a <= n+1; a++) {
        do {
            sum = num * (a * 2 + num - 1) / 2;
            if (n <= sum) {
                if(n === sum) count++;
                num = 1;
                sum = 0;
                break;
            }
            num++;
        }while(sum < n);
    }
    
    return count;
}