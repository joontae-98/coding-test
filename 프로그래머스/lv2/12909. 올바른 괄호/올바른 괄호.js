function solution(s){

    let count = 0;
    const arr = s.split("");
    if(arr[0] === ")" || arr[arr.length - 1] === "(") {
        return false;
    }
    for (value of arr) {
        value === "(" ? count++ : count--;
        if (count < 0) return false
    }
    return count === 0
}