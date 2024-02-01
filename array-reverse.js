// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseArray = [];
for(let i = colors.length -1; i >= 0; i--) {
     reverseArray.push(colors[i]);
}
console.log(reverseArray)
// output: ['orange', 'yellow', 'green', 'blue', 'red']
