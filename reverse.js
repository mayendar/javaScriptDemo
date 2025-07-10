let num = 23456
let rev=0;
while(num>0){
rem = num%10
console.log(rem);

rev = rev*10+rem

num=parseInt(num/10)
}
console.log(rev);

