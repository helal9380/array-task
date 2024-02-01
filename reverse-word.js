
// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
let makeArray = statement.split(' ');
let reverseArray = makeArray.reverse();
let makSentense = reverseArray.join();

console.log(makSentense);

// output : person,working,hard,a,am,I