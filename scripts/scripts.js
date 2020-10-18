// для попапа редактирования профиля
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const popupEditUserProfile = document.querySelector('.popup_edit-user-profile');
const formEdit = document.querySelector('.popup__container_edit');
let nameInput = document.querySelector('.popup__input_name');
let aboutInput = document.querySelector('.popup__input_about');
let profileName = document.querySelector('.profile__name');
let profileDescr = document.querySelector('.profile__descr');

// для окна добавления фото
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const popupAddPict = document.querySelector('.popup_add-pict');
const formAdd = document.querySelector('.popup__container_add-photo');
let photoGridItemName = document.querySelector('.photo-grid__item-name');
let titleInput = document.querySelector('.popup__input_title');
let linkInput = document.querySelector('.popup__input_link');

//общие для всех попапов
const buttonsClosePopup = document.querySelectorAll('.popup__close-button');
const popups= document.querySelectorAll('.popup');

//попап фуллсайз картинки
const popupShowPict = document.querySelector('.popup_show-pict');
const photoGridPictures = document.querySelectorAll('.photo-grid__picture');
let photoGridPicture = document.querySelector('.photo-grid__picture');
let popupFullsizePict = document.querySelector('.popup__fullsize-pict');

//лайк фото
const photoLikes = document.querySelectorAll('.photo-grid__like');



function popupOpenEdit() {
     nameInput.value =  profileName.textContent;
     aboutInput.value = profileDescr.textContent ;
    popupEditUserProfile.classList.add('popup_opened');
}

function popupOpenAdd() {
    popupAddPict.classList.add('popup_opened');
}
function popupOpenPict(event) {
    popupFullsizePict.src = event.target.src;
    popupShowPict.classList.add('popup_opened');
}


function popupClose() {
    popups.forEach(popup => {popup.classList.remove('popup_opened')})

}

function onMissclickPopup(event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    popupClose();
}

function formSubmitHandlerEditUserProfile(evt) {
    evt.preventDefault();
    console.log(nameInput.value);
    console.log(aboutInput.value);
    profileName.textContent = nameInput.value;
    profileDescr.textContent = aboutInput.value;
    popupClose();
}

function formSubmitHandlerAddPict(evt) {
    evt.preventDefault();
    console.log(titleInput.value);
    console.log(linkInput.value);
    photoGridItemName = titleInput.value;
    photoGridPicture.src = linkInput.value;
    popupClose();
    titleInput.value ='';
    linkInput.value ='';
}

function changeLike(event) {
    event.stopPropagation();
    event.target.classList.toggle('photo-grid__like_on');
}


buttonOpenPopupEdit.addEventListener('click', popupOpenEdit);
buttonOpenPopupAdd .addEventListener('click', popupOpenAdd);
formEdit.addEventListener('submit', formSubmitHandlerEditUserProfile);
formAdd.addEventListener('submit', formSubmitHandlerAddPict);
popups.forEach(popup =>popup.addEventListener('click', onMissclickPopup));
buttonsClosePopup.forEach((buttonClosePopup) => buttonClosePopup.addEventListener('click', popupClose));
photoGridPictures.forEach((photoGridPicture) => photoGridPicture.addEventListener('click',popupOpenPict));
photoLikes.forEach((like) => {like.addEventListener('click', changeLike)});



