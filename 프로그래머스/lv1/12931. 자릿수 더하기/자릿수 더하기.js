function solution(n)
{
  return (n+"").split("").reduce((prev, curr) => prev + parseInt(curr), 0);
    
}