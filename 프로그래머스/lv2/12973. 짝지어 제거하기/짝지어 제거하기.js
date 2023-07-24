function solution(s)
{
    
    const stack = [];
    for(let i of s) {
        if (stack.length > 0 && stack.at(-1) == i) {
            
            stack.pop();
        }else {
            stack.push(i);
        }
    
    }

    return stack.length == 0 ? 1 : 0;
}