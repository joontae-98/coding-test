function solution(phone_number) {
    let arr = phone_number.split("");
    const num = arr.slice(-4, arr.length).join("");
    arr = arr.map( () => "*");
    arr.splice(-4, arr.length);
    return arr.join("") + num
}