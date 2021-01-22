export class Card {
    constructor(cardData, handleCardClick, handleLikeClick, handlerTrashClick, templateSelector, userId) {
        this._templateSelector = templateSelector;
        this._cardData = cardData;
        this._name = cardData.name;
        this._pictLink = cardData.link;
        this._handleCardClick = handleCardClick;
        this._handlerTrashClick = handlerTrashClick;
        this._handleLikeClick = handleLikeClick;
        this._likeCount = cardData.likes.length;
        this._cardId = cardData._id;
        this._ownerId = cardData.owner._id;
        this._likes = cardData.likes;
        this.userId = userId;
        this.hasMyLike = false;

    };

    getCardId() {
        return this._cardId
    }
    _isOwner(){
        return this._ownerId === this.userId
    }

    _isLiked(data) {
        return data.likes.some(el => el._id === this.userId);

    }

    checkLikes(data) {
        if (this._isLiked(data)) {
            this._likeBtn.classList.add('photo-grid__like_on');
            this.hasMyLike = true;
        } else {
            this._likeBtn.classList.remove('photo-grid__like_on');
            this.hasMyLike = false;
        }
    }

    _changeLike() {
        this._handleLikeClick(this._cardId, this.hasMyLike, this._likeCountElem,this._likeBtn);
         this.hasMyLike = !this.hasMyLike;

    }

    _getTemplateCard() {

        return document.querySelector(this._templateSelector).content.cloneNode(true);

    }

    _setEventListener() {
        this._likeBtn.addEventListener('click', () => {
            this._changeLike();
        });
        this._trash.addEventListener('click', () => {
            this._handlerTrashClick(this._cardId,this._trash);
        });
        this._photoGridPict.addEventListener('click', () => {
            this._handleCardClick();
        });
    }


    removePhotoItem() {

        // this._trash.closest('.photo-grid__item').remove();
    }

    generateCard() {
        this._cardElement = this._getTemplateCard();
        this._likeBtn = this._cardElement.querySelector('.photo-grid__like');
        this._trash = this._cardElement.querySelector('.photo-grid__trash');
        this._photoGridPict = this._cardElement.querySelector('.photo-grid__picture');
        this._likeCountElem = this._cardElement.querySelector('.photo-grid__like-count');

        this._photoGridPict.src = this._pictLink;
        this._photoGridPict.alt = this._name;
        this._cardElement.querySelector('.photo-grid__item-name').textContent = this._name;
        this._likeCountElem.textContent = this._likeCount;
        if (!this._isOwner()) {this._trash.remove()}
        this.checkLikes(this._cardData);
        this._setEventListener();

        return this._cardElement;
    }
}