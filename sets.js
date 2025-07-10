const mySet = new Set()
mySet.add(1)
mySet.add(2)

for(let values of mySet)
{
    console.log(values)
}
console.log(mySet.has(0))
console.log(mySet.size)
