function solution(absolutes, signs) {
    return absolutes.map((value, index) => signs[index] ? value : value / -1).reduce((prev, curr) => {return prev + curr}, 0);
}