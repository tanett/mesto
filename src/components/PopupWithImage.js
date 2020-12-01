import {Popup} from "./Popap.js";
// import {popupFullsizePict, popupTitlePict} from "../utils/utils.js";
export class PopupWithImage extends Popup {

    open(event) {
        const fullsizePict = this._popup.querySelector('.popup__fullsize-pict');
        fullsizePict.src = event.target.src;
        this._popup.querySelector('.popup__pict-title').textContent = event.target.alt;
        fullsizePict.alt = event.target.alt;
        super.open();
    }
}
