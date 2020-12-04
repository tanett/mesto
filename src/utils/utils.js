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



const template = '.template';
const profileNameSelector = '.profile__name';
const profileDescrSelector = '.profile__descr';

// для попапа редактирования профиля
const popupEditUserProfileSelector = '.popup_edit-user-profile';
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');

const formEdit = document.querySelector('.popup__container_edit');
const nameInput = document.querySelector('.popup__input_name');
const aboutInput = document.querySelector('.popup__input_about');


// для окна добавления фото
const popupAddPictSelector= '.popup_add-pict';
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

const formAdd = document.querySelector('.popup__container_add-photo');

//общие для всех попапов


//попап фуллсайз картинки
const popupShowPictSelector = '.popup_show-pict';


export {initialCards, config,template, buttonOpenPopupEdit ,
    nameInput, aboutInput,
    buttonOpenPopupAdd,  formAdd,formEdit,
     profileDescrSelector,profileNameSelector,popupEditUserProfileSelector,
    popupAddPictSelector,popupShowPictSelector};