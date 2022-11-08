function solution(people, limit) {
    let count = 0;
    let num = people.length;

    people.sort((a, b) => b - a)
    
    for (let i = 0; i < num; i++) {
        if (i <= num - 1) {
            if (people[i] + people[num - 1] <= limit) {
                num--;
            }
            count++;
        }   
    }
    return count;
}