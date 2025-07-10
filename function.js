
function greet(){
    console.log('hello world');
    
}
function greetOn(){
    return 'hell dear'
}
function greettwo(user){
    return `hello ${user}`
}
greet()
let str = greetOn(); //return the value
console.log(str);
let user = 'sitara'
let str1 = greettwo(user)
console.log(str1);


//funciton expression

let add = function(num1, num2){
    return num1+num2
}

let result = add(23, 20)
console.log(result);

//arrow function
let sum = (num1, num2) => num1+num2


let resulta = sum(23, 30)
console.log(resulta)
