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
    inactiveButtonClass: 'popup__submit_disactive',
    errorClass: 'popup__input_invalid'
}

const photoGrid = document.querySelector('.photo-grid');

// для попапа редактирования профиля
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const popupEditUserProfile = document.querySelector('.popup_edit-user-profile');
const formEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('.popup__input_name');
const aboutInput = document.querySelector('.popup__input_about');
const profileName = document.querySelector('.profile__name');
const profileDescr = document.querySelector('.profile__descr');

// для окна добавления фото
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const popupAddPict = document.querySelector('.popup_add-pict');
const formAdd = document.querySelector('.popup__container_add-photo');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');

//общие для всех попапов
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const popups = document.querySelectorAll('.popup');

//попап фуллсайз картинки
const popupShowPict = document.querySelector('.popup_show-pict');
const popupFullsizePict = document.querySelector('.popup__fullsize-pict');
const popupTitlePict = document.querySelector('.popup__pict-title');

export {initialCards, config,photoGrid, buttonOpenPopupEdit , popupEditUserProfile, formEdit,
    nameInput, aboutInput,profileName,profileDescr,
    buttonOpenPopupAdd, popupShowPict, popupAddPict, formAdd,titleInput, linkInput,
    closePopupButtons, popups,
    popupFullsizePict, popupTitlePict};