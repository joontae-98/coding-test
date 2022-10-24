function solution(num) {
    let count = 0;
    if (num === 1) return 0;
    do {
        if (count > 500) return -1;
        switch(num % 2) {
            case 0: 
                num /= 2;
                count++;
                break;
            case 1:
                num = num * 3 + 1
                count++;
                break;
            default:
                break;
        }
    }while(num !== 1) 
        return count;       
}