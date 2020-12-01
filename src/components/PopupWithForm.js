import {Popup} from "./Popap.js";
import {titleInput,linkInput} from '../utils/utils.js';

export class PopupWithForm extends Popup {
    constructor(handlerSubmitForm,popupSelector ) {
        super(popupSelector);
        this._handlerSubmitForm = handlerSubmitForm;
        this._listInputs = this._popup.querySelectorAll('.popup__input');

    }
    _getInputValues(){

        this._inputValues = {};
        this._listInputs.forEach(input => this._inputValues[input.name] = input.value);

        return this._inputValues;
    }
    close(){
        super.close();
        this._popup.querySelector('form').reset();
        // titleInput.value = '';
        // linkInput.value = '';

    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', this._handlerSubmitForm);

    }
}