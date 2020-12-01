import {Popup} from "./Popap.js";


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

    open(){
        this._submitBtn.classList.add('popup__submit_disactive');
        this._submitBtn.disabled = true;
        super.open();
    }

    close(){
        super.close();
        this._popup.querySelector('form').reset();


    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit',(event)=>{
            event.preventDefault();
            this._handlerSubmitForm(this._getInputValues());
        } );

    }
}