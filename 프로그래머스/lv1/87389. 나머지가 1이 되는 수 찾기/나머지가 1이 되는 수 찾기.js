function solution(n) {
    let x = 2;
    for (x; x < n; x++) {
        if((n - 1) % x !== 0) {
            continue;
        }
        return x;
    }
}