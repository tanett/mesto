

export class Popup{
    constructor(popupSelector) {
       this._popup = document.querySelector(popupSelector);
       this._closeBtn = this._popup.querySelector('.popup__close-button');
       this._submitBtn = this._popup.querySelector('.popup__submit');
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

        this._popup.classList.add('popup_opened');
        document.body.addEventListener('keydown',(event)=>{this._handleEscClose(event);});
    };
    close(){
        document.body.removeEventListener('keydown', (event)=>{this._handleEscClose(event);});
        this._popup.classList.remove('popup_opened');
    };
    setEventListeners(){
        this._popup.addEventListener('click',(event)=>{this._onOverleyClick(event);});
        this._closeBtn.addEventListener('click', this.close.bind(this) );
    }


    }