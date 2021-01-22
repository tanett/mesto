import {Popup} from "./Popup.js";


export class PopupWithForm extends Popup {
    constructor(handlerSubmitForm,popupSelector ) {
        super(popupSelector);
        this._handlerSubmitForm = handlerSubmitForm;
        this._listInputs = this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('form');
    }
    _getInputValues(){

        this._inputValues = {};
        this._listInputs.forEach(input => this._inputValues[input.name] = input.value);

        return this._inputValues;
    }

    close(){
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading){
        if(isLoading) {
            this._submitBtn.textContent = 'Сохранение...';

        } else {this._submitBtn.textContent = 'Сохранить';}
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit',(event)=>{
            event.preventDefault();
            this._handlerSubmitForm(this._getInputValues());
        } );

    }
}