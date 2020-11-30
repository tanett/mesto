export class Popup{
    constructor(popupSelector) {
       this._popap = document.querySelector(popupSelector);
       this._closeBtn = this._popap.querySelector('.popup__close-button');
    }
    _handleEscClose(event){
        if (event.key ==='Escape') {
            this.close();
        }
    }
    _onOverleyClick(event){
        if (event.target !== event.currentTarget) {
            return;
        }
        this.close();
    }
    open(){
        this._popap.classList.add('popup_opened');
        document.body.addEventListener('keydown',(event)=>{this._handleEscClose(event);});
    };
    close(){
        document.body.removeEventListener('keydown', (event)=>{this._handleEscClose(event);});
        this._popap.classList.remove('popup_opened');
    };
    setEventListeners(){
        this._popap.addEventListener('click',(event)=>{this._onOverleyClick(event);});
        this._closeBtn.addEventListener('click', this.close.bind(this) );
    }
}