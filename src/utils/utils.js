const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    unactiveButtonClass: 'popup__submit_disactive',
    errorInputClass: 'popup__input_invalid',
    errorMssgInactivClass: 'popup__error-msg_inactive',
    errorMssgClass: 'popup__error-msg',
    photoGrid: '.photo-grid'
}

const optionsApi = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
    headers: {
        authorization: '47b6d590-a975-406b-afdb-480f171a6854',
        "Content-Type": 'application/json'
    }
}

const template = '.template';
const profileNameSelector = '.profile__name';
const profileDescrSelector = '.profile__descr';

// для попапа редактирования профиля
const popupEditUserProfileSelector = '.popup_edit-user-profile';
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');

const formEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('.popup__input_name');
const aboutInput = document.querySelector('.popup__input_about');

//для попапа редактирования автарки
const popupEditAvatarSelector ='.popup_edit-avatar';
const buttonOpenPopupEditAvatar = document.querySelector('.profile__avatar-wrap');
const avatarPicSelector = '.profile__avatar-pic';
const formEditAvatar =document.querySelector('.popup__container_edit-avatar');

// попап удаления
const popupAskDeleteSelector = '.popup_ask-delete';


// для окна добавления фото
const popupAddPictSelector= '.popup_add-pict';
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const formAdd = document.querySelector('.popup__container_add-photo');


//попап фуллсайз картинки
const popupShowPictSelector = '.popup_show-pict';


export {initialCards, config,template, buttonOpenPopupEdit ,
    nameInput, aboutInput,
    buttonOpenPopupAdd,  formAdd,formEdit,
     profileDescrSelector,profileNameSelector,popupEditUserProfileSelector,
    popupAddPictSelector,popupShowPictSelector,popupEditAvatarSelector,buttonOpenPopupEditAvatar,
    avatarPicSelector,formEditAvatar,popupAskDeleteSelector,optionsApi
};