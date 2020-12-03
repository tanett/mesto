import {Popup} from "./Popup.js";


export class PopupWithForm extends Popup {
    constructor(handlerSubmitForm,popupSelector ) {
        super(popupSelector);
        this._handlerSubmitForm = handlerSubmitForm;
        this._listInputs = this._popup.querySelectorAll('.popup__input');
        this._errMsg = this._popup.querySelector('.popup__error-msg');
    }
    _getInputValues(){

        this._inputValues = {};
        this._listInputs.forEach(input => this._inputValues[input.name] = input.value);

        return this._inputValues;
    }

    open(){

        this._submitBtn.classList.add('popup__submit_disactive');
        this._submitBtn.disabled = true;
        super.open();
    }

    close(){
        super.close();
        this._popup.querySelector('form').reset();
        this._errMsg.textContent = '';
        this._listInputs.forEach((input) =>input.classList.remove('popup__input_invalid'));

    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit',(event)=>{
            event.preventDefault();
            console.log(this._getInputValues());
            this._handlerSubmitForm(this._getInputValues());
        } );

    }
}