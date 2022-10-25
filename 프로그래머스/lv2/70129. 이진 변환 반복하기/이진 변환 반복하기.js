function solution(s) {
    let zeroCount = 0;
    let count = 0;
    let arr = s.split("");
    
    while(arr != 1) {
        count++;
        arr = arr.filter(value => {
            if(value == 1) return true;
            zeroCount++;
        }).length.toString(2).split("");
    }
    return [count, zeroCount];
}