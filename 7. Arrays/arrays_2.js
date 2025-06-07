// const marvelHeroes = ["spiderman", "ironman", "thor"];
// const dcHeroes = ["superman", "batman", "thor"];

// to merge both arrays:
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);// [ 'spiderman', 'ironman', 'thor', [ 'superman', 'batman', 'thor' ] ] (array inside array)

// const newHeros = marvelHeroes.concat(dcHeroes);
// console.log(newHeros);// [ 'spiderman', 'ironman', 'thor', 'superman', 'batman', 'thor' ]

// const allHeros = [...marvelHeroes, ...dcHeroes];
// console.log(allHeros);// [ 'spiderman', 'ironman', 'thor', 'superman', 'batman', 'thor' ]

// ------------------------------------------------------------------------------------------------

// const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11], 12], 13, 14];
// console.log(arr);

// const usableArr = arr.flat(Infinity);
// console.log(usableArr);

// -------------------------------------------------------------------------------------------------

console.log(Array.isArray("Shubham"));

const resArr = Array.from("Shubham");
console.log(resArr);

const resArr2 = Array.from({name : "Shubham"}); // interesting case for interview
console.log(resArr2);// [] 


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));// [ 100, 200, 300 ]



