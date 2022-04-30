const pwEL = document.getElementById('pw')
const lenEL = document.getElementById('len')
const NumberEL = document.getElementById('Number')
const upperEL = document.getElementById('upper')
const lowerEL = document.getElementById('lower')
const symbolEL = document.getElementById('symbol')
const genratorEL = document.getElementById('genrator')
const copy = document.getElementById('copy');


const uppperLatters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLatters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~!@#$%^&*()_+=|';


function getUppercase() {
    return uppperLatters[Math.floor(Math.random() * uppperLatters.length)]
}

function getLowercase() {
    return lowerLatters[Math.floor(Math.random() * lowerLatters.length)]
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function genratorPass() {
    const len = lenEL.value;
    let password = '';

    for (let i = password.length; i < len; i++) {
        const x = genrateX();
        password += x;
    }
    pwEL.innerText = password;
}

genratorEL.addEventListener('click', function () {
    genratorPass()
});

function genrateX() {
    let xs = [];
    if (NumberEL.checked) {
        xs.push(getNumbers());
    }

    if (upperEL.checked) {
        xs.push(getUppercase());
    }

    if (lowerEL.checked) {
        xs.push(getLowercase());
    }

    if (symbolEL.checked) {
        xs.push(getSymbol());
    }

    if (xs.length <= 0) return '';
    return xs[Math.floor(Math.random() * xs.length)];
}

copy.addEventListener('click', function () {
    const textarea = document.createElement('textarea');

    const pass = pw.innerText;
    if (!pass) {
        return;
    };

    textarea.value = pass;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard')
})