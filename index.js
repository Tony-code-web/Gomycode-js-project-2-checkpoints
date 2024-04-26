// # string manupilation
// 1.fuction to reverse a given string

function reverseString(str) {
    return str.split('').reverse().join('');
}
const originalString = 'Hello,world!';
const reversedString = reverseString (originalString);
console.log(reverseString);

// 2.function that counts number of characters in a string

function countCharacters(str) {
    // Use the length property of the string to get the number of characters
    return str.length;
  }
  
  // Example of a string:
  const str = "Goodevening, John!";
  const characterCount = countCharacters(str);
  console.log("Number of characters:", characterCount); 

//  3. function to capitalize the firt laters in a string
function capitalizeFirstlater (sentence) {
    // spliting sentence into array of words
    const words = sentence.split('');
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUppercase() + word.slice(1);

    });
    return capitalizedWords.join('');

}

const sentence = "hello world! this is a test.";
const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log(capitalizedSentence); // Outputs: "Hello World! This Is A Test."
  