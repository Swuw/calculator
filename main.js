// document.getElementsByClassName('one').onclick = function () {
//     console.log("Click")
// }
// console.dir(document.getElementsByClassName('one'))
// one.onclick = function push() {
//     console.log("Click")
//
// }

// let buttonNumb = document.querySelectorAll(".number");
// console.dir(buttonNumb)
// for (let i = 0; i < buttonNumb.length; i++) { buttonNumb.onclick = function () {
//     console.log('Click')
// } }
// let mem ='';
//
//
// function write(numb) {
//     console.dir('hi');
//     mem = numb + mem;
//     console.dir(mem);
//     console.dir(numb);
//     return mem;
// }
//
// // function getAtr() {
// //     let getAtr = document.querySelector('.numeric').value;
// //     return getAtr;
// //     console.dir(getAtr);
// //     console.dir('атрибут');
// // }
//
//
// let push = function () {
//
//     // let getAtr = numeric.value;
//     // write(getAtr);
//     console.dir('клик');
//     // console.dir(x);
//     // console.dir(write(x));
// }
//
// let buttonNumb = document.querySelectorAll('.numeric');
// for ( let numeric of buttonNumb) {
//     numeric.onclick = push;
// }
//
//

function display(a) {
    let display = document.getElementsByClassName('txt')[0];
    display.innerHTML = a;
    return display
}

function infoDisplay() {
    let infoDisplay = document.getElementsByClassName('txt')[0].innerHTML;
    return infoDisplay
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
    let a = document.querySelector('.numeric').value= this.value;
    return push(a);
}



