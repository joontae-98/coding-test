function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answer = arr.map(value => {
        for (let a of numbers) {
            if (a === value) {
                return 0;
            }
        }
        return value;
    });
    return answer.reduce((prev, curr) => prev + curr, 0);
}