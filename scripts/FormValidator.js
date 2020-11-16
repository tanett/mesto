import {config} from "./utils.js";

export class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;

        this._inputsList = Array.from(this._formElement.querySelectorAll(config.inputSelector));
        this._submitButton = this._formElement.querySelector(config.submitButtonSelector);
    };
    _showError(input) {
        this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
        this._errorElement.textContent = input.validationMessage;
        input.classList.add(config.errorClass);
    }

    _hideError(input) {
        this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
         this._errorElement.textContent = '';
        input.classList.remove(config.errorClass);
    }

    _inputValidation(input) {
        if (input.checkValidity()) {
            this._hideError(input);
        } else {
            this._showError(input);
        }

    }

    _changeButtonState(button) {
        if (this._formElement.checkValidity()) {
            button.classList.remove(config.inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(config.inactiveButtonClass);
            button.disabled = true;
        }
    }

    _setEventListener() {

        this._inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._inputValidation(input);
                this._changeButtonState(this._submitButton);
            })
            this._changeButtonState(this._submitButton);
        })

    }

    enableValidation(form) {
        form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
        this._setEventListener();
        }

}