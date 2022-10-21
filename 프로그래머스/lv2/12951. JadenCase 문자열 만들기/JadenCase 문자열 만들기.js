function solution(s) {
    const words = s.split(" ").map((value) => value.toLowerCase().split(""));
    const answer = words.map((value) => {
        return value.map((alpha, index) => {
            return index === 0 ? alpha.toUpperCase() : alpha;
        }).join("");
    });
    return answer.join(" ");
}