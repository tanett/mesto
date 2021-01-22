import {Popup} from "./Popup.js";


export class PopupAsk extends Popup {
    constructor(handlerSubmit, popupSelector, cardId, trashEl) {
        super(popupSelector);
        this._handlerSubmit = handlerSubmit;
        this.cardId = cardId;
        this._trash = trashEl
    }

    // setSubmitAction(action){
    //     this._handlerSubmit = action;
    // }
    setEventListeners() {
        super.setEventListeners();
        this._submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this._handlerSubmit(this.cardId);
            this._trash.closest('.photo-grid__item').remove();
            this.close()
        });

    }

}