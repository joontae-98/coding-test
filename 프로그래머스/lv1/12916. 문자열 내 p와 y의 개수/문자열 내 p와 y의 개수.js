function solution(s){
    let count = 0;
    const arr = s.split("");
    for (let alpha of arr){
        if (alpha === "p" || alpha === "P") {
            count++;
        } else if (alpha === "y" || alpha === "Y") {
            count--;
        }
    }
    return !count;
}