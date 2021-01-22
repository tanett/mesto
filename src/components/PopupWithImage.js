import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullsizePict = this._popup.querySelector('.popup__fullsize-pict');
        this._PictTitle = this._popup.querySelector('.popup__pict-title');
    }

    open(event) {

        this._fullsizePict.src = event.target.src;
        this._PictTitle.textContent = event.target.alt;
        this._fullsizePict.alt = event.target.alt;
        super.open();
    }
}
