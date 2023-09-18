
const lodash = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');


function SaveLocalStorage() {
    const estado = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(estado));
}


function ChargeFromLocalStorage() {
    const SaveState = localStorage.getItem('feedback-form-state');
    if (SaveState) {
        const state = JSON.parse(SaveState);
        emailInput.value = state.email;
        messageTextarea.value = state.message;
    }
}


function DeleteLocalStorage() {
    localStorage.removeItem('feedback-form-state');
}


emailInput.addEventListener('input', lodash(SaveLocalStorage, 500));
messageTextarea.addEventListener('input', lodash(SaveLocalStorage, 500));

ChargeFromLocalStorage();


feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const state = {
        email: emailInput.value,
        message: messageTextarea.value,
    };

    
    emailInput.value ='';
    messageTextarea.value = '';
 
  
    DeleteLocalStorage();


    console.log(state);
});