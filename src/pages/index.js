import '../index.css';
import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {PopupAsk} from "../components/PopupAsk.js";
import {Api} from "../components/Api.js";

//импорт  переменных
import {
    optionsApi, config, template, buttonOpenPopupEdit,
    nameInput, aboutInput, formEdit,
    buttonOpenPopupAdd, formAdd,
    profileNameSelector, profileDescrSelector, popupAddPictSelector,
    popupEditUserProfileSelector, popupShowPictSelector, popupEditAvatarSelector,
    buttonOpenPopupEditAvatar, avatarPicSelector, formEditAvatar, popupAskDeleteSelector
} from "../utils/utils.js";

//--------------создание экземпляров классов

//экземпляр класса Апи
const api = new Api(optionsApi);

//создание экземпляра  класса Section  для  рендеринга карточек
const sectionRenderCards = new Section({renderer: renderStartCard}, config.photoGrid);

//вызов класса с инфо юзера
const userInfo = new UserInfo(profileNameSelector, profileDescrSelector, avatarPicSelector, api.getUserInfo()._id);

//попап добавления картинки - экземпляр класса PopupWithForm
const popupAddImage = new PopupWithForm(formSubmitHandlerAddPict, popupAddPictSelector);
popupAddImage.setEventListeners();

//попап редактирования инфо - экземпляр класса PopupWithForm
const popupEditInfo = new PopupWithForm(formSubmitHandlerEditUserProfile, popupEditUserProfileSelector);
popupEditInfo.setEventListeners();

//попап просмотра картинки - экземпляр класса PopupWithImage
const popupShowImage = new PopupWithImage(popupShowPictSelector);
popupShowImage.setEventListeners();

//попап редактирования аватарки
const popupEditAvatar = new PopupWithForm(formSubmitHandlerEditAvatar, popupEditAvatarSelector);
popupEditAvatar.setEventListeners();

//-------------------функции-------

//функция создания карточки
function createCard(cardData, userId) {
    const cardItem = new Card(cardData, handleCardClick, handleLikeClick, handlerTrashClick, template, userId);
    return cardItem.generateCard();
}

//функция  рендеринга для sectionInitialCards
function renderStartCard(cardData, userId) {
    sectionRenderCards.addItem(createCard(cardData, userId));
}

// обработчик добавления картинки в popupAddImage
function formSubmitHandlerAddPict(valuesFromInput) {
    popupAddImage.renderLoading(true);
    api.addCard(valuesFromInput)
        .then(data => {
            sectionRenderCards.addItem(createCard(data, userInfo.getUserInfo().Id))
        }).catch(err => console.log(err))
        .finally(() => popupAddImage.renderLoading(false));
    popupAddImage.close();
}

// функция открытия попапа просмотра  при клике на карточку
function handleCardClick() {
    popupShowImage.open(event);
}

// оработка клика по лайку
function handleLikeClick(cardID, hasMyLike, likeCountElem, likeBtn) {
    if (hasMyLike) {
        api.likeOff(cardID)
            .then(data => {
                likeCountElem.textContent = data.likes.length;
                likeBtn.classList.remove('photo-grid__like_on');
            }).catch(err => console.log(err));
    } else {
        api.likeOn(cardID)
            .then(data => {
                likeCountElem.textContent = data.likes.length;
                likeBtn.classList.add('photo-grid__like_on');
            }).catch(err => console.log(err));
    }
}

//обработчик в popupEditAvatar
function formSubmitHandlerEditAvatar(valuesFromInput) {
    popupEditAvatar.renderLoading(true);
    api.editUserAvatar(valuesFromInput)
        .then(data => {
            userInfo.setUserAvatar(data)
        }).catch(err => console.log(err))
        .finally(() => popupEditAvatar.renderLoading(false));
    popupEditAvatar.close();
}

// обработчик в  popupEditInfo
function formSubmitHandlerEditUserProfile(valuesFromInput) {
    popupEditInfo.renderLoading(true);
    api.editUserInfo(valuesFromInput)
        .then(data => {
            userInfo.setUserInfo(data)
        }).catch(err => console.log(err))
        .finally(() => popupEditInfo.renderLoading(false));
    popupEditInfo.close();
}

// клик на корзину-> открыть попап с вопросом popupAskDelete
function handlerTrashClick(cardID, trashEl) {
    const popupAskDelete = new PopupAsk(popupSubmitHandlerDeleteCard, popupAskDeleteSelector, cardID, trashEl);
    popupAskDelete.setEventListeners();
    popupAskDelete.open();
}

//обработчик попапа  удаления
function popupSubmitHandlerDeleteCard(cardID) {
    api.deleteCard(cardID)
        .catch(err => console.log(err));
}


/*         -----------------------------------------------------------------------------  */
// получение карточек и установка данных пользователя с сервера

Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(data => {
        sectionRenderCards.rendererAllElements(data[0], data[1]._id)
        userInfo.setUserInfo(data[1]);
        userInfo.setUserAvatar(data[1]);
    }).catch(err => console.log(err));

//подключение валидации
//для попапа редактирования
const validatorPopupEditInfo = new FormValidator(config, formEdit);
validatorPopupEditInfo.enableValidation();

//для попапа добавления
const validatorPopupAddImage = new FormValidator(config, formAdd);
validatorPopupAddImage.enableValidation();

//для редактирования автарки
const validatorPopupEditAvatar = new FormValidator(config, formEditAvatar);
validatorPopupEditAvatar.enableValidation();


// установка слушателей на кнопки открытия попапов
buttonOpenPopupEditAvatar.addEventListener('click', (e) => {
    validatorPopupEditAvatar.clearError();
    popupEditAvatar.open();
});

buttonOpenPopupEdit.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.about;
    popupEditInfo.open();
});

buttonOpenPopupAdd.addEventListener('click', () => {
    validatorPopupAddImage.clearError();
    popupAddImage.open();
})











