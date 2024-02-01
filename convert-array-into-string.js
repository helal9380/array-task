// Use a for...of loop to concatenate all the elements of an array
//  into a single string.

let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let string = ''

for(const number of numbers) {
    string += number
}
console.log(string)

// output: TomTimTinTik