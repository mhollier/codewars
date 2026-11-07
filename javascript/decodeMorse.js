var MORSE_CODE = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

decodeMorse = function(morseCode) {
  let words = [];
  const wordCodes = morseCode.trim().split('   ');
  wordCodes.forEach(wordCode => {
    const letterCodes = wordCode.split(' ');
    let letters = [];
    letterCodes.forEach(letterCode => {
      letters.push(MORSE_CODE[letterCode]);
    });
    words.push(letters.join(''));
  });
  return words.join(' ').toUpperCase();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));