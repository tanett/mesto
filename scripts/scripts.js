//стартовый массив фото
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

const photoGrid = document.querySelector('.photo-grid')
const template = document.querySelector('.template');

function getPhotoItems (objWithNameAndLink)  {
  const photoItem = template.content.cloneNode(true);
  const  photoItemPicture= photoItem.querySelector('.photo-grid__picture');
  photoItem.querySelector('.photo-grid__item-name').innerText = objWithNameAndLink.name;
  photoItemPicture.src = objWithNameAndLink.link;
  photoItemPicture.alt = objWithNameAndLink.name;
  photoItem.querySelector('.photo-grid__like').addEventListener('click', changeLike);
  photoItem.querySelector('.photo-grid__trash').addEventListener('click', removePhotoItem);
  photoItemPicture.addEventListener('click', popupOpenPict);
  return photoItem;
}

function renederPhotoGrid ()  {
  const photos = initialCards.map((element) => {return getPhotoItems(element)});
  photoGrid.append(...photos);
  console.log(photos);
}

renederPhotoGrid();

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


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function popupOpenEdit() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescr.textContent;
  openPopup(popupEditUserProfile);
}

function popupOpenAdd() {
  openPopup(popupAddPict);
}

function popupOpenPict(event) {
  popupFullsizePict.src = event.target.src;
  openPopup(popupShowPict);
}

function popupClose() {
  const openedPopup = document.querySelector('.popup_opened')
  if (openedPopup) {
    openedPopup.classList.remove('popup_opened')
  }
}

function onOverlayClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  popupClose();
}

function formSubmitHandlerEditUserProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescr.textContent = aboutInput.value;
  popupClose();
}

function formSubmitHandlerAddPict(evt) {
  evt.preventDefault();
  const nItem = getPhotoItems({name: titleInput.value, link : linkInput.value});
  photoGrid.prepend(nItem);
  popupClose();
  titleInput.value = '';
  linkInput.value = '';
}

function changeLike(event) {
  event.stopPropagation();
  event.target.classList.toggle('photo-grid__like_on');
}

function removePhotoItem (event) {
  event.target.closest('.photo-grid__item').remove();
}


buttonOpenPopupEdit.addEventListener('click', popupOpenEdit);
buttonOpenPopupAdd.addEventListener('click', popupOpenAdd);

formEdit.addEventListener('submit', formSubmitHandlerEditUserProfile);
formAdd.addEventListener('submit', formSubmitHandlerAddPict);

popups.forEach(popup => popup.addEventListener('click', onOverlayClick));
closePopupButtons.forEach((buttonClosePopup) => buttonClosePopup.addEventListener('click', popupClose));









