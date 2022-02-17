'use strict';


let divs = [];

let letters = [];

let statusElement;


function updateDisplay() {

  /*  For each div that can hold a letter, set its HTML contents to the value
      of the letters array at the same index (and change some style classes).
      Check that the array has an element at that index first, so we don't
      add the text "undefined"!
      (If there is no element at that index, clear the div's contents, and also
      change some style classes.)
  */

  for (let i = 0; i < divs.length; i++) {

    const inner = divs[i].querySelector('.inner');

    //console.log(`${i} - ${letters[i]}`);

    if (letters[i]) {
      inner.innerHTML = letters[i];
      inner.parentElement.classList.add('filled');
      inner.parentElement.classList.add('pop');
    } else {
      inner.innerHTML = '';
      inner.parentElement.classList.remove('filled');
      inner.parentElement.classList.remove('pop');
    }

  }

}


function updateStatus(message) {

  statusElement.innerHTML = message;

  statusElement.classList.remove('hidden');
  statusElement.classList.add('fade');

}


function typeStuff(letter) {

  // Fill empty squares.

  /*  - Check the length of the letters array
      - If it's less than 5, do something
      - (If it's 5 or longer, do nothing)
      - Add a new element to the array (whose contents is the typed letter)
      - Update the display
  */

  if (letters.length < 5) {

    //console.log('insert letter');

    letters.push(letter);

    updateDisplay();

  } //else {

    //console.log('letters full');

  //}

}


function deleteStuff() {

  //console.log("delete");

  /*  If the letters array has any elements (i.e. length is greater than zero),
      pop the last element off the array, and update the display.

      If the length of the letters array is 5, i.e. if the fifth letter is
      about to be deleted, then change some style classes on the status element
      (to hide it, basically).

      (The status element won't necessarily have these classes if the user deletes
      the fifth letter without having already "entered" a guess.)
  */

  if (letters.length > 0) {

    if (letters.length === 5) {
      statusElement.classList.add('hidden');
      statusElement.classList.remove('fade');
    }

    letters.pop();

    updateDisplay();

  }

}


function enterStuff() {

  //console.log("enter");

  // If the letters array length is exactly 5, allow a guess to be entered

  if (letters.length === 5){

    updateStatus('Great guess!');

  }

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

  statusElement = document.getElementById('status');

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