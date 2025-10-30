function bigger(a, b) {
  if (a > b) 
    return a;
  else if (b > a) 
    return b;
  else 
    return " equal: " + a;
}

console.log(bigger(10, 21));  
console.log(bigger(15.9))
