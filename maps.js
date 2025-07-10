

const myMap = new Map();
myMap.set(1,'one')
myMap.set(2, 'two')
myMap.set(3,'three')

console.log(myMap.size)
for(const [kwy, value] of myMap){
    console.log(kwy, value)
}

const numbers = [1,2,3,4]
const doubled = numbers.map((num)=> num *2)
console.log(doubled)

const users = [
    {name: 'anu', age:25},
    {name:'sitara', age :30}
]
const names = users.map((user)=>user.name)
console.log(names)