import {config} from "../utils/utils.js";

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

    _changeButtonState() {
        if (this._formElement.checkValidity()) {
            this._submitButton.classList.remove(config.unactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(config.unactiveButtonClass);
            this._submitButton.disabled = true;
        }
    }

    _setEventListener() {

        this._inputsList.forEach((input) => {
            this._changeButtonState();
            input.addEventListener('input', () => {

                this._changeButtonState();
                this._inputValidation(input);

            })

        })

    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
        this._setEventListener();
        }

}