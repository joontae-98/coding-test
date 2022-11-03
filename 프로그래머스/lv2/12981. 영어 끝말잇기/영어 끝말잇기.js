function solution(n, words) {
    let answer = [0, 0];
    const prevWords = [];
    //등차수열 활용
    // n = 4, ex) index = 0,4,8,12 는 첫번째 사람이 말한 word
    // 조건 1: 끝말이 이어져야한다.
    // 조건 2: 중복되는 단어가 없어야한다.
    prevWords.push(words[0])
    for (let i = 1; i < words.length; i++) {
        const prev = prevWords[i - 1];
        if(words[i].indexOf(prev[prev.length - 1]) !== 0) {
            answer = [(i % n) + 1, Math.floor(i / n) + 1];
            break;
        }
        if(prevWords.includes(words[i])) {
            answer = [(i % n) + 1, Math.floor(i / n) + 1];
            break;
        }
        prevWords.push(words[i]);
    }
    
    return answer;
}