function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((a, b, index) => {return a + b * B[index]}, 0);
}