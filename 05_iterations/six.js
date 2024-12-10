// const coding  = ["js", "rb", "py", "java"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  const NewNums = myNums.filter((num)=>num>4)
//  console.log(NewNums);

// const NewNums = myNums.filter((num)=>{
//    return num > 4
   
// })
//console.log(NewNums);

const NewNums = []
myNums.forEach((num)=>{
    if(num>4){
        NewNums.push(num)
    }
})
//console.log(NewNums);



const books = [
    {title:'Book One', genre:'Fiction', publish:1981, edition:2004},
    {title:'Book Two', genre:'Non-Fiction', publish:1992, edition:2008},
    {title:'Book Three', genre:'History', publish:2007, edition:2007},
    {title:'Book Four', genre:'Non-Fiction', publish:2010, edition:2010},
    {title:'Book Five', genre:'Science', publish:2009, edition:2014},
    {title:'Book Six', genre:'Fiction', publish:1987, edition:2010},
]

let userBooks = books.filter((bk) => bk.genre==='History')
 userBooks = books.filter((bk) => bk.publish>=2000 && bk.genre==='History')
console.log(userBooks);


