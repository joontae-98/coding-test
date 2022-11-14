function solution(n,a,b)
{
    let count = 0;
    while (n != 1) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        count++;
        if (a === b) break;
        n /= 2
    }
    return count;
    
}