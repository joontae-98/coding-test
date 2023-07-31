function solution(k, tangerine) {

    const freq = new Map();
   
    for(let i = 0; i < tangerine.length; i++) {
        const target = freq.get(tangerine[i]);
        freq.set(tangerine[i], target ? target + 1 : 1);
    }

    const val = Array.from(freq.values()).sort((a, b) => b - a);
    let count = 0;

    for(let i of val) {
        k -= i;
        count++;
        if(k <= 0) {
            return count;
        }
    }
    
    
}