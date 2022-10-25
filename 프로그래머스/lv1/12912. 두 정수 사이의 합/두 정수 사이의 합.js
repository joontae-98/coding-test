function solution(a, b) {
    let firstNum = a < b ? a : b;
    let secondNum = a < b ? b : a;
    let result = 0;
    
    for (firstNum; firstNum <= secondNum; firstNum++) {
        result += firstNum;
    }
    
    return a === b ? a : result; 
}