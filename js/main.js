let n = 5;
let str="";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    str+=" ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str+="*"
  }
  str+="\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
     str+=" ";
  }
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    str+="*";
  }
  str+="\n";
}
console.log(str);