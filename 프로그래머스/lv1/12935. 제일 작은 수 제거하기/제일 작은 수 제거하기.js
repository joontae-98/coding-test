function solution(arr) {
    let min = 0;
    if (arr.length === 1) {
        return [-1];
    }
    arr.reduce((prev, curr, index) => {
        if (prev < curr) {
            return prev;
        }
        min = index;
        return curr;
    });
    arr.splice(min, 1);
    return arr;
}