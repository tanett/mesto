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
  photoItem.querySelector('.photo-grid__item-name').innerText = objWithNameAndLink.name;
  photoItem.querySelector('.photo-grid__picture').src = objWithNameAndLink.link;
  photoItem.querySelector('.photo-grid__like').addEventListener('click', changeLike);
  photoItem.querySelector('.photo-grid__trash').addEventListener('click', removePhotoItem);
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
let nameInput = document.querySelector('.popup__input_name');
let aboutInput = document.querySelector('.popup__input_about');
let profileName = document.querySelector('.profile__name');
let profileDescr = document.querySelector('.profile__descr');

// для окна добавления фото
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const popupAddPict = document.querySelector('.popup_add-pict');
const formAdd = document.querySelector('.popup__container_add-photo');
let titleInput = document.querySelector('.popup__input_title');
let linkInput = document.querySelector('.popup__input_link');

//общие для всех попапов
const buttonsClosePopup = document.querySelectorAll('.popup__close-button');
const popups = document.querySelectorAll('.popup');

//попап фуллсайз картинки
const popupShowPict = document.querySelector('.popup_show-pict');
const photoGridPictures = document.querySelectorAll('.photo-grid__picture');
let popupFullsizePict = document.querySelector('.popup__fullsize-pict');


function popupOpenEdit() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescr.textContent;
  popupEditUserProfile.classList.add('popup_opened');
}

function popupOpenAdd() {
  popupAddPict.classList.add('popup_opened');
}

function popupOpenPict(event) {
  popupFullsizePict.src = event.target.src;
  popupShowPict.classList.add('popup_opened');
  console.log(event.target.src);
  console.log('ok');
}


function popupClose() {
  popups.forEach(popup => {
    popup.classList.remove('popup_opened')
  })

}

function onMissclickPopup(event) {
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

popups.forEach(popup => popup.addEventListener('click', onMissclickPopup));

buttonsClosePopup.forEach((buttonClosePopup) => buttonClosePopup.addEventListener('click', popupClose));

photoGridPictures.forEach((photoGridPict) => photoGridPict.addEventListener('click', popupOpenPict));







