const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__container');


function popupToggle() {
    popup.classList.toggle('popup_opened')
}

function onMissclickPopup(event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    popupToggle();
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.popup__input-name');
    let jobInput = document.querySelector('.popup__input-about');
    console.log(nameInput.value);
    console.log(jobInput.value);
    let profileName = document.querySelector('.profile__name');
    let profileDescr = document.querySelector('.profile__descr');

    profileName.textContent = nameInput.value;
    profileDescr.textContent = jobInput.value;
    popupToggle();
}

popup.addEventListener('click', onMissclickPopup);
buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
buttonClosePopup.event.stopPropagation();
form.addEventListener('submit', formSubmitHandler);