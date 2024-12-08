const name = "pooja"
const repoCount = 20

//console.log('Hello my name is ${name} and my repocount is ${repoCount}');
//const gameName = new String('pooja')
const gameName = new String('pooja-pc-ch')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-4,1)
//console.log(anotherString);


// const newStringOne = "  pooja  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://pooja.com/pooja%20chaudhary"
//console.log(url.replace('%20','-'))

//console.log(url.includes('pooja'))

console.log(gameName.split('-'));