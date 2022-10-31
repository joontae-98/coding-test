function solution(brown, yellow) {
    let answer = [];
    let yellowNum = (brown - 4) / 2;
    for (let i = 1; i < yellowNum; i++) {
        if(yellow === i * (yellowNum - i)) {
            answer = [yellowNum - i + 2, i + 2];
            break;
        }
    }
    return answer;
}