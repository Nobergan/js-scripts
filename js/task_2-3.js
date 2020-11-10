function findLongestWord(string = '') {
  // Write code under this line
  const words = string.split(' ');
  //   console.log(words);

  let theBiggestLength = 0;
  let theBiggestWord = '';

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > theBiggestLength) {
      theBiggestLength = words[i].length;
      theBiggestWord = words[i];
    }
  }

  return theBiggestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
