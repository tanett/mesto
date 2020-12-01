import '../index.css';
import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";

//импорт стартового массива и переменных
import {
    initialCards, config, buttonOpenPopupEdit,
    nameInput, aboutInput, formEdit,
    buttonOpenPopupAdd, formAdd
} from "../utils/utils.js";


//функция создания карточки
function createCard(cardData,handleCardClick, templateSelector) {
    const cardItem = new Card(cardData,handleCardClick, templateSelector);
    return cardItem.generateCard();

}
// рендеринг первоначального массива фото
const renderInitialsCard = new Section({items :initialCards,
    renderer:(item) => {

        renderInitialsCard.addItem(createCard(item, handleCardClick, '.template'));

    } }, config.photoGrid);

//Вызов метода отображения стартового массива
renderInitialsCard.rendererAllElements();

// функция открытия попапа просмотра  при клике на карточку
function handleCardClick() {
    popupShowPict.open(event);
}

// обработчик добавления картинки
function formSubmitHandlerAddPict(valuesFromInput) {

    const renderCardItem = new Section({
        renderer: () => {
            return createCard(valuesFromInput, handleCardClick, '.template');

        }
    }, config.photoGrid);
    renderCardItem.addItem(renderCardItem._renderer());
    popupAddImage.close.bind(popupAddImage)();
}

//попап добавления картинки
const popupAddImage = new PopupWithForm(formSubmitHandlerAddPict,'.popup_add-pict');
popupAddImage.setEventListeners();

//вызов класса с инфо юзера
const userInf = new UserInfo('.profile__name','.profile__descr');

// обработчик попапа редактирования инфо
function formSubmitHandlerEditUserProfile(valuesFromInput) {

    // const inputValue = popupEditInfo._getInputValues.bind(popupEditInfo)();
    userInf.setUserInfo(valuesFromInput);
    popupEditInfo.close();
}
//попап редактирования инфо
const popupEditInfo = new PopupWithForm(formSubmitHandlerEditUserProfile,'.popup_edit-user-profile');
popupEditInfo.setEventListeners();

//попап просмотра картинки
const popupShowPict = new PopupWithImage('.popup_show-pict');
popupShowPict.setEventListeners();


//подключение валидации

const validatorPopupEditInfo = new FormValidator(config, formEdit);
validatorPopupEditInfo.enableValidation.bind(validatorPopupEditInfo)();

const validatorPopupAddImage = new FormValidator(config, formAdd);
validatorPopupAddImage.enableValidation.bind(validatorPopupAddImage)();


// установка слушателей на кнопки открытия попапов
buttonOpenPopupEdit.addEventListener('click', ()=>{
const userData = userInf.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.about;
    popupEditInfo.open();
});
buttonOpenPopupAdd.addEventListener('click', ()=>popupAddImage.open());











