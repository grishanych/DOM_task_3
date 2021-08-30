// Task 3
// Implement a program that displays 
// -  the message "I was pressed!" when you click the button, 
// -  displays the message "Mouse on me!" when you hover the button, 
// -  displays the message "Mouse is not on me!" when you move the mouse cursor.

function funcClick(){
let elems = document.getElementsByClassName('press');
// console.log(elems[0].innerText);
let newLi = document.createElement('li');
// console.log(newDiv);
newLi.innerText = 'I was pressed!';
list.prepend(newLi);
}


function funcOver(){
let elems = document.getElementsByClassName('mouseOver');
let newLi = document.createElement('li');
newLi.innerText = 'Mouse on me!';
list.prepend(newLi);
}


function funcOut(){
let elems = document.getElementsByClassName('mouseOut');
let newLi = document.createElement('li');
newLi.innerText = 'Mouse is not on me!';
list.prepend(newLi);
}



