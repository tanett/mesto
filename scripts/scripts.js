const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

function popupToggle() {
    popup.classList.toggle('popup_opened')
}

buttonClosePopup.addEventListener('click', popupToggle);
buttonOpenPopup.addEventListener('click', popupToggle);

function onMissclickPopup(event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    popupToggle();
}

popup.addEventListener('click', onMissclickPopup);


let form = document.querySelector('.popup__container');

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


form.addEventListener('submit', formSubmitHandler);