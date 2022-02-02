'use strict';


let divs = [];

let letters = new Array(5).fill("");


function updateDisplay() {

  for (let i = 0; i < divs.length; i++) {

    const inner = divs[i].querySelector('.inner');
    
    inner.innerHTML = letters[i];

  }

}


function typeStuff(letter) {

  // Fill empty squares.

  //console.log(letter);

  /*  - Use an array
      - Check to see where the first empty string in the array is
      - If there are none, exit/show error
      - Where there is one, put the letter in it and run function to update display
  */

  if (letters.includes("") === true) {

    //console.log('insert letter');

    // arrow function fun: if you include the braces, you have to manually return true :P
    //const testFunc = (element) => { if (element === "") { return true; } }
    //const idx = letters.findIndex(testFunc);
    // findIndex wasn't needed after all, heh

    const idx = letters.indexOf("");

    letters[idx] = letter;

    updateDisplay();
    //console.log(letters);

  } else {

    console.log('letters full');

  }

}


function deleteStuff() {

  //console.log("delete");

  if (letters.join("") !== "") {

    // sadly we can't just pop if we're using the blank string method
    //letters.pop();
    //console.log(letters);

    for (let i = 4; i >= 0; i--) {
      if (letters[i] !== "") { 
        letters[i] = "";
        updateDisplay();
        //console.log(letters);
        break;
      }
    }

  }

}


function enterStuff() {

  console.log("enter");

}


function getPressedKeys(event) {

  // console.log(event.code);

  const code = event.code;

  // event.code that we're interested in have format "KeyX", so a simple regexp should catch these?
  // do all browsers use the same codes?

  const reLetter = new RegExp(/^Key[A-Z]$/);
  const reBackspace = new RegExp(/^Backspace$/);
  const reEnter = new RegExp(/^(Enter|NumpadEnter)$/);

  if (reLetter.test(code) === true) {
    //console.log(code);
    const [_, letter] = code.split('Key');
    typeStuff(letter);
  } else if (reBackspace.test(code) === true) {
    deleteStuff();
  } else if (reEnter.test(code) === true) {
    enterStuff();
  }

}


function windowLoaded() {

  divs = document.getElementsByClassName('outer');

  //const defaultWord = 'WRDLE';

  //for (let i = 0; i < divs.length; i++) {

    //divs[i].innerHTML = `<div class="inner">${defaultWord[i]}</div>`;

  //}

  /*

    - (done) Watch for keyboard input: how?
    - Fill empty squares as A-Z are typed.
    - Stop at the end.
    - Let backspace work.

  */

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

  document.addEventListener('keydown', getPressedKeys);

}