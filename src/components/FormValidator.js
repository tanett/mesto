

export class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        this.config = config;
        this._inputsList = Array.from(this._formElement.querySelectorAll(this.config.inputSelector));
        this._submitButton = this._formElement.querySelector(this.config.submitButtonSelector);
    };

    _showError(input) {
        this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
        this._errorElement.textContent = input.validationMessage;
        this._errorElement.classList.remove(this.config.errorMssgInactivClass);
        input.classList.add(this.config.errorInputClass);
    }

    _hideError(input) {

        this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
        this._errorElement.textContent = '';
        this._errorElement.classList.add(this.config.errorMssgInactivClass);
        input.classList.remove(this.config.errorInputClass);
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
            this._submitButton.classList.remove(this.config.unactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this.config.unactiveButtonClass);
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

    clearError() {

        this._inputsList.forEach((input) => {
            this._hideError(input);
            this._changeButtonState();
        })

    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener();
    }

}