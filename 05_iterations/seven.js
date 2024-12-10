const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const NewNums = myNumbers.map((num)=>num + 10)
//console.log(NewNums);

// chaining
const NewNums = myNumbers
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) => num > 40)

//console.log(NewNums);

//Array.reduce

const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} & currval:${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal)


const myTotal = myNums.reduce((acc,curr) => acc + curr,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js.course",
        price:3000
    },
    {
        itemName:"python",
        price:5000
    },
    {
        itemName:"QA",
        price:5000
    },
]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(PriceToPay);
