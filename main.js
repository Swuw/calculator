
function displaySymbol(symb) {
    let display = document.getElementsByClassName('symb')[0];
    display.innerHTML = symb;
    return display
}

function displayMem(mem) {
    let display = document.getElementsByClassName('mem')[0];
    display.innerHTML =mem;
    return display
}

function infoMem() {
    let infoMem = document.getElementsByClassName('mem')[0].innerHTML;
    return infoMem
}

function infoSymbol() {
    let infoSymbol = document.getElementsByClassName('symb')[0].innerHTML;
    return infoSymbol
}
function approvedSymb (symbol) {
    let symbolMark = symbolKey?.[symbol];
    return displaySymbol(symbolMark)
}

function display(a) {
    let display = document.getElementsByClassName('txt')[0];
    display.innerHTML = a;
    return display
}

function infoDisplay() {
    let infoDisplay = document.getElementsByClassName('txt')[0].innerHTML;
    return infoDisplay
}

function memoryA (mem) {
    let a = parseInt(mem);
    console.log(a);
    displayMem(a);
    return a
}

let base = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
    equally: (a, b) => a * b,
}


let symbolKey = {
    plus: '+',
    minus: '-',
    divide: '/',
    multiply: '*',
    equally: '=',
}

function delNumb(){
    let bNum = '0';
    return display(bNum)
}

function push(bNum) {

    if (infoDisplay() === '0') {
        bNum = display(bNum);
        console.log('click 1', bNum)
        return bNum
    } else {
        bNum = infoDisplay() + bNum;
        console.log('click 2', bNum)
        return display(bNum)
    }
}

let button = document.querySelectorAll('.numeric');
    for (let numeric of button) {
        numeric.addEventListener('click', buttonValue);
    }
function buttonValue() {
    let bNum = document.querySelector('.numeric').value= this.value;
    return push(bNum);
}

let buttonAction = document.querySelectorAll('.action');
for (let act of buttonAction) {
    act.addEventListener('click', action);
}

function action() {
    let symbol = document.querySelector('.numeric').value= this.value;
    return [
        approvedSymb (symbol),
        memoryA (infoDisplay()),
        delNumb(),

    ]
}







