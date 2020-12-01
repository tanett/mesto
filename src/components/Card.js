export  class Card {
    constructor(cardData,handleCardClick, templateSelector) {
        this._templateSelector = templateSelector;
        this._name = cardData.name;
        this._pictLink = cardData.link;
        this._handleCardClick = handleCardClick;

    };

    _getTemplateCard () {

        return document.querySelector(this._templateSelector).content.cloneNode(true);

    }

    _setEventListener() {
        this._likeBtn.addEventListener('click',()=>{this._changeLike();});
        this._trash.addEventListener('click',()=>{this._removePhotoItem();});
        this._photoGridPict.addEventListener('click',()=>{this._handleCardClick();});
        }

    _changeLike() {
        this._likeBtn.classList.toggle('photo-grid__like_on');
    }

    _removePhotoItem () {
        this._trash.closest('.photo-grid__item').remove();
    }
    generateCard() {
        this._cardElement = this._getTemplateCard();
        this._likeBtn = this._cardElement.querySelector('.photo-grid__like');
        this._trash = this._cardElement.querySelector('.photo-grid__trash');
        this._photoGridPict  = this._cardElement.querySelector('.photo-grid__picture');

        this._setEventListener();
        this._photoGridPict.src = this._pictLink;
        this._photoGridPict.alt = this._name;
        this._cardElement.querySelector('.photo-grid__item-name').textContent = this._name;

        return this._cardElement;
    }
}