function solution(arr, divisor) {
    let answer = arr.filter((value) => (value % divisor) === 0 ? value : false);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}