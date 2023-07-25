function solution(arr) {
    
    const lcm = (a, b) => {
        if (a % b !== 0){
            return lcm(b,a % b);
        }
        return b;
    }
    
    return arr.reduce((a, b) => {
        return a * b / lcm(a,b);
    });
    
    
}