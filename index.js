// js

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Create a new array containing the names of the tutorials with proper
// title case formatting
// double map

const titleCased = () => {
  return [...tutorials].map((tutorial) => {
    const words = tutorial.split(' ').map((word) => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    });
    return words.toString().replaceAll(',', ' ');
  });
}

// testing
// console.log(tutorials);
// console.log(titleCased());
