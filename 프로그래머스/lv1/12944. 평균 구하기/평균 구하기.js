function solution(arr) {
    const num = arr.length;
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
    return sum / num;
}