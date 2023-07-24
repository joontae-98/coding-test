function solution(arr) {
    
    const lcm = (a, b) => {
        let i, j;
        
        if (a - b > 0) {
            i = a;
            j = b;
        } else {
            i = b;
            j = a;
        }
    
        if (i % j !== 0){
            return lcm(j,i % j);
        }
        return j;
    }
    
    return arr.reduce((a, b) => {
        return a * b / lcm(a,b);
    });
    
    
}