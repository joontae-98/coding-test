function solution(arr) {
    const num = arr.length;
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / num;
}