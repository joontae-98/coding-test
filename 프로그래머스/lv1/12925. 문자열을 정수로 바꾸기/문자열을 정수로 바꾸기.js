function solution(s) {
    let arr = s.split("");
    let sign = 0;
    let num = 0;
    switch(arr[0]) {
        case "+":
            sign = 1;
            arr = arr.slice(1);
            break;
        case "-":
            sign = -1;
            arr = arr.slice(1);
            break;
        default:
            sign = 1;
            break;
    }
    num = parseInt(arr.reduce((prev, curr) => {
                return prev + curr;
            },""))
    return sign * num;
}