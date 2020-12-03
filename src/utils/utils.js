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

const photoGridElement = document.querySelector('.photo-grid');

const template = '.template';
const profileNameSelector = '.profile__name';
const profileDescrSelector = '.profile__descr';

// для попапа редактирования профиля
const popupEditUserProfileSelector = '.popup_edit-user-profile';
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const popupEditUserProfile = document.querySelector('.popup_edit-user-profile');
const formEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('.popup__input_name');
const aboutInput = document.querySelector('.popup__input_about');
const profileName = document.querySelector('.profile__name');
const profileDescr = document.querySelector('.profile__descr');

// для окна добавления фото
const popupAddPictSelector= '.popup_add-pict';
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const popupAddPict = document.querySelector('.popup_add-pict');
const formAdd = document.querySelector('.popup__container_add-photo');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');

//общие для всех попапов
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const popups = document.querySelectorAll('.popup');

//попап фуллсайз картинки
const popupShowPictSelector = '.popup_show-pict';
const popupShowPict = document.querySelector('.popup_show-pict');
const popupFullsizePict = document.querySelector('.popup__fullsize-pict');
const popupTitlePict = document.querySelector('.popup__pict-title');

export {initialCards, config,photoGridElement,template, buttonOpenPopupEdit , popupEditUserProfile,
    nameInput, aboutInput,profileName,profileDescr,
    buttonOpenPopupAdd, popupShowPict, popupAddPict, formAdd,formEdit,titleInput, linkInput,
    closePopupButtons, popups,profileDescrSelector,profileNameSelector,popupEditUserProfileSelector,
    popupFullsizePict, popupTitlePict,popupAddPictSelector,popupShowPictSelector};