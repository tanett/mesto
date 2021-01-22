import {Popup} from "./Popup.js";


export class PopupAsk extends Popup {
    constructor(popupSelector,popupSubmitHandler) {
        super(popupSelector);
        this._handlerSubmit = popupSubmitHandler;
        this._submitBtn = this._popup.querySelector('.popup__submit');
    }

    setSubmitAction(action){
        this._handlerSubmit = action;
    }
    setEventListeners() {
        super.setEventListeners();
        this._submitBtn.addEventListener('click', ()=>this._handlerSubmit(this.cardId,this._trash));

    }

    open(cardID, trashEl) {
        super.open();
        this.cardId=cardID;
        this._trash=trashEl;

    }
}
