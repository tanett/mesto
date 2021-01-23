
import {PopupWithForm} from "./PopupWithForm.js";


export class PopupAsk extends PopupWithForm {
    constructor(popupSelector) {
        super(popupSelector);
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitBtn.addEventListener('click', ()=>this._handlerSubmit());
    }

    open(cardID, trashEl) {
        super.open();
        this._cardId=cardID;
        this._trash=trashEl;
    }
}
