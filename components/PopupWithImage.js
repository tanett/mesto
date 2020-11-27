import {Popup} from "./Popap.js";
import {popupFullsizePict, popupTitlePict} from "../utils/utils.js";
export class PopupWithImage extends Popup {

    open(event) {
        popupFullsizePict.src = event.target.src;
        popupTitlePict.textContent = event.target.alt;
        super.open();
    }
}
