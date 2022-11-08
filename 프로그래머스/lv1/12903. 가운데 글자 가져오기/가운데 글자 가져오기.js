function solution(s) {
    let answer = "";
    const num = Math.floor(s.length / 2);
    
    return s.length % 2 === 0 ? s[num - 1] + s[num] : s[num];
}