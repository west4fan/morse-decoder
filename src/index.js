const MORSE_TABLE = {
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

function decode(expr) {
    let morse = '';
    for (let i = 0; i < expr.length; i+=2) {
        if ((i !== 0) && (i % 10 == 0)) {
            morse += '/';
        }
        if (expr[i] == '1') {
            if (expr[i + 1] == '1') {
                morse += '-';
            } else if (expr[i + 1] == '0') {
                morse += '.';
            }
        } else if (expr[i] == '*') {
            morse += '+';
        };
    }


    let key = '';
    let result = '';
    key = morse.split('/');


    key.forEach((i) => {
        if (i == '+++++') {result += ' '}
        else if (MORSE_TABLE[i] !== undefined) {result += MORSE_TABLE[i]};
    });
    return result;
}

module.exports = {
    decode
}