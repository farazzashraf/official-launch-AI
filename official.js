
const buttonElement = document.getElementById('get-started');
const paragraphElement = document.querySelector('.paragraph-2')
const getAppElement = document.getElementById('get-app');
const getPElement = document.querySelector('#get-app p');
const charsCountElement = document.getElementById('first-input');
const remainingCharsElement = document.getElementById('charachters');
const bodyElement = document.body;


let maxAllowedChars = charsCountElement.maxLength;

function updateCharsElement(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingChars;

    if (remainingChars <= 11) {
        remainingCharsElement.classList.add('input-color');
        charsCountElement.classList.add('firstinput')
    } else {
        remainingCharsElement.classList.remove('input-color');
        charsCountElement.classList.remove('firstinput')
    }
}

function updateButtonElement() {
    buttonElement.textContent = 'Verifying.....';
    bodyElement.style.backgroundColor = 'black';
    bodyElement.style.color = 'white';
    getPElement.style.backgroundColor = 'white';
    getPElement.style.color = 'black';
    getAppElement.style.color = 'white';
}

function updateGetAppElement() {
    getAppElement.textContent = 'We are sorry. App is not ready yet. We\'re working on it.';
    getAppElement.style.color = 'grey';
}

buttonElement.addEventListener('click', updateButtonElement);
getAppElement.addEventListener('click', updateGetAppElement);
charsCountElement.addEventListener('input', updateCharsElement);