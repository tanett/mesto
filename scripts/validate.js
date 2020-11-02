const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disactive',
    errorClass: 'popup__input_invalid'
}

function showError(singleForm, input) {
    const errorElement = singleForm.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(config.errorClass);
}

function hideError(singleForm, input) {
    const errorElement = singleForm.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(config.errorClass);
}

function inputValidation(singleForm, input) {
    if (input.checkValidity()) {
        hideError(singleForm, input);
    } else {
        showError(singleForm, input);
    }

}

function changeButtonState(singleForm, button) {
    if (singleForm.checkValidity()) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true;
    }
}


function setEventListener(singleForm) {
    const inputsList = Array.from(singleForm.querySelectorAll(config.inputSelector));
    const submitButton = singleForm.querySelector(config.submitButtonSelector);
    inputsList.forEach((input) => {
        input.addEventListener('input', (evt) => {
            inputValidation(singleForm, evt.target);
            changeButtonState(singleForm, submitButton);
        })
        changeButtonState(singleForm, submitButton);
    })

}

function enableValidation({formSelector}) {
    const formElements = Array.from(document.querySelectorAll(formSelector));
    formElements.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(form);
    });
}


enableValidation(config);