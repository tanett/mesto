import {Popup} from "./Popup.js";


export class PopupWithForm extends Popup {
    constructor(popupSelector ) {
        super(popupSelector);

        this._submitBtn = this._popup.querySelector('.popup__submit');
        this._listInputs = this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('form');
    }
    getInputValues(){

        this._inputValues = {};
        this._listInputs.forEach(input => this._inputValues[input.name] = input.value);

        return this._inputValues;
    }

    setSubmitAction(action){
        this._handlerSubmit = action;
    }

    close(){
        super.close();
        if(this._form) {this._form.reset()}else{console.log('no')}

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
            this._handlerSubmit();
        } );

    }

}