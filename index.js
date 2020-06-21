const fs = require('fs')
const data = require('./eggs')


let eggs, whites, yolks = 0

let eggRegex = /eggs?/i;
let yolkRegex = /yolks?/i;
let whiteRegex = /whites?/i;

let wholeNumber = /\d+/;

let num = 0

for (item of data.recipes) {
    // console.log(item.recipe)
    for (ingredient of item.recipe){
        num = 0
        if (eggRegex.test(ingredient) && !(yolkRegex.test(ingredient) || whiteRegex.test(ingredient))){
            num = parseInt(ingredient.match(wholeNumber))
            num = ingredient.match(wholeNumber)[0]

            console.log(num)
            item.eggs = num
            // console.log(num[0])
            // console.log(ingredient)
        }
        if (yolkRegex.test(ingredient)) {
            num = parseInt(ingredient.match(wholeNumber))
            num = ingredient.match(wholeNumber)[0]
            item.yolks = num
            // console.log(num)
            // console.log(ingredient)   
        }
        if (whiteRegex.test(ingredient) && eggRegex.test(ingredient)){
            num = parseInt(ingredient.match(wholeNumber))
            num = ingredient.match(wholeNumber)[0]
            item.whites = num
            // console.log(num)
            // console.log(ingredient)
        }
        
    }
    // console.log(item)
}

console.log(data)
console.log('dsfdsdf')

fs.writeFile('fix.json', JSON.stringify(data), function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    console.log(':?');
  });