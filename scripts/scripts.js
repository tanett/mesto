const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_about');
let profileName = document.querySelector('.profile__name');
let profileDescr = document.querySelector('.profile__descr');


function popupOpen() {
     nameInput.value =  profileName.textContent;
     jobInput.value = profileDescr.textContent ;
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function onMissclickPopup(event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    popupClose();
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    console.log(nameInput.value);
    console.log(jobInput.value);
    profileName.textContent = nameInput.value;
    profileDescr.textContent = jobInput.value;
    popupClose();
}

form.addEventListener('submit', formSubmitHandler);
popup.addEventListener('click', onMissclickPopup);
buttonOpenPopup.addEventListener('click', popupOpen);
buttonClosePopup.addEventListener('click', popupClose);


/*function popupToggle() {
    popup.classList.toggle('popup_opened');
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

form.addEventListener('submit', formSubmitHandler);
popup.addEventListener('click', onMissclickPopup);
buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
buttonClosePopup.onclick = evt.stopPropagation(); */



