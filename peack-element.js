// write a first element and last element from the array using for loop
let arr = [1, 2, 3, 4, 15, 48, 85];
let last1 = arr.length -1;
let first = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[0]) {
        first = arr[i];
    }
    else if(arr[i] === arr[last1]) {
        last1 = arr[i]
    }
}
// output : 1 85
console.log(first)
console.log(last1)