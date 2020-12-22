function displaySymbol(symb) {
    let displaySymbol = document.getElementsByClassName('symb')[0];
    displaySymbol.innerHTML = symb;
    return displaySymbol
}

function displayMem(mem) {
    let displayMem = document.getElementsByClassName('mem')[0];
    displayMem.innerHTML =mem;
    return displayMem
}
function display(txt) {
    let display = document.getElementsByClassName('txt')[0];
    display.innerHTML = txt;
    return display
}

function infoSymbol() {
    let infoSymbol = document.getElementsByClassName('symb')[0].innerHTML;
    return infoSymbol
}

function infoDisplay() {
    let infoDisplay = document.getElementsByClassName('txt')[0].innerHTML;
    return infoDisplay
}

function infoMem() {
    let infoMem = document.getElementsByClassName('mem')[0].innerHTML;
    return infoMem
}

function castling () {
    memory.a =memory.c;
 return memory.a;
}

function memoryA (mem) {
    memory.b = parseInt(mem);
    console.log(memory.b);
    displayMem(memory.b);
    return [
        memory.b,]
}

function del(){
    let bNum = '0';
    let d= '';
    let memory = { a:0, b:0};
    return [
        display(bNum),
        displayMem(d),
        displaySymbol(d),
        memory,
    ]
}

function equally() {
    let y = infoSymbol();
    let z = base?.[y];
    if (!z) {
        return displaySymbol('')
    } else {
        let a = parseInt(infoMem());
        let b = parseInt(infoDisplay());
        let x = z(a,b);
        console.log(x);
        return [
            display(x),
        ]
    }
}

function calculation (symbol){
    equally();
    let res = base?.[symbol];
    let b = memory.b;
    let a = memory.a;
    console.log('a= ', a);
    console.log('b= ', b);
    return [
        display(res(a,b)),
        displayMem(res(a,b)),
        console.log(res(a,b)),
        memory.c = res(a,b),
    ]
}

function finalAction2 (symbol2) {
    let res2 = baseTwo?.[symbol2]();
    return  res2
}

let base = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    ' ': del(),

}

let baseTwo = {
    del : 'del()',
    "=": equally,
    ' ': del(),
}
let memory = {
 a: 0,
 b: 0,
 c: 0,
 g: 1,
 h: 1,
}

function delNumb(){
    let bNum = '0';
    return display(bNum)
}

function push(bNum) {

    if (infoDisplay() === '0') {
        bNum = display(bNum);
        console.log('click one', bNum)
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
    let symbol = document.querySelector('.action').value= this.value;
    return [
        castling (),
        memoryA (infoDisplay()),
        calculation (symbol),
        displaySymbol(symbol),
        delNumb(),
    ]
}

let buttonAction2 = document.querySelectorAll('.action2');
for (let act2 of buttonAction2) {
    act2.addEventListener('click', action2);
}

function action2() {
    let symbol2 = document.querySelector('.action2').value = this.value;
    return [
        finalAction2 (symbol2),
        displaySymbol(symbol2),
    ]
}