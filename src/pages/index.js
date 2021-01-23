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
    popupEditUserProfileSelector, popupShowPictSelector, popupEditAvatarSelector, page,
    buttonOpenPopupEditAvatar, avatarPicSelector, formEditAvatar, popupAskDeleteSelector
} from "../utils/constants.js";

//--------------создание экземпляров классов

//экземпляр класса Апи
const api = new Api(optionsApi);

//создание экземпляра  класса Section  для  рендеринга карточек
const sectionRenderCards = new Section({
    renderer: (cardData, userId) => {
        sectionRenderCards.addItem(createCard(cardData, userId));
    }
}, config.photoGrid);

//вызов класса с инфо юзера
const userInfo = new UserInfo(profileNameSelector, profileDescrSelector, avatarPicSelector);

//попап добавления картинки - экземпляр класса PopupWithForm
const popupAddImage = new PopupWithForm(popupAddPictSelector);
popupAddImage.setSubmitAction(() => {
        popupAddImage.renderLoading(true);
        api.addCard(popupAddImage.getInputValues())
            .then(data => {
                sectionRenderCards.addItem(createCard(data, userInfo.getUserInfo().Id))
            }).catch(err => console.log(err))
            .finally(() => popupAddImage.renderLoading(false));
        popupAddImage.close();
    }
);
popupAddImage.setEventListeners();

//попап редактирования инфо - экземпляр класса PopupWithForm
const popupEditInfo = new PopupWithForm(popupEditUserProfileSelector);
popupEditInfo.setSubmitAction(() => {
    popupEditInfo.renderLoading(true);
    api.editUserInfo(popupEditInfo.getInputValues())
        .then(data => {
            userInfo.setUserInfo(data)
        }).catch(err => console.log(err))
        .finally(() => popupEditInfo.renderLoading(false));
    popupEditInfo.close();

});
popupEditInfo.setEventListeners();

//попап просмотра картинки - экземпляр класса PopupWithImage
const popupShowImage = new PopupWithImage(popupShowPictSelector);
popupShowImage.setEventListeners();

//попап редактирования аватарки
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector);
popupEditAvatar.setSubmitAction(() => {
    popupEditAvatar.renderLoading(true);
    api.editUserAvatar(popupEditAvatar.getInputValues())
        .then(data => {
            userInfo.setUserAvatar(data)
        }).catch(err => console.log(err))
        .finally(() => popupEditAvatar.renderLoading(false));
    popupEditAvatar.close();

});
popupEditAvatar.setEventListeners();

//попап подтверждения удаления
const popupAskDelete = new PopupAsk(popupAskDeleteSelector);
popupAskDelete.setSubmitAction(() => {
    api.deleteCard(popupAskDelete._cardId)
        .catch(err => console.log(err));
    popupAskDelete._trash.closest('.photo-grid__item').remove();
    popupAskDelete.close();

});
popupAskDelete.setEventListeners();

//-------------------функции-------

//функция создания карточки
function createCard(cardData, userId) {
    const cardItem = new Card(cardData, {
            handleCardClick: (event) => {
                popupShowImage.open(event);
            }, handleLikeClick: (cardID, hasMyLike) => {
                if (hasMyLike) {
                    api.likeOff(cardID)
                        .then(data => {
                            cardItem.checkLikes(data);
                        }).catch(err => console.log(err));
                } else {
                    api.likeOn(cardID)
                        .then(data => {
                            cardItem.checkLikes(data);
                        }).catch(err => console.log(err));
                }
            }, handlerTrashClick: (cardId, trashEl) => {
                popupAskDelete.open(cardId, trashEl);
            }
            ,
            templateSelector: template
        }
        ,
        userId
        )
    ;
    return cardItem.generateCard();
}

/*         -----------------------------------------------------------------------------  */
// получение карточек и установка данных пользователя с сервера
const startLoadPage = () => {//так не промаргивают при обновлении данные профиля из верстки
    page.style.visibility = 'hidden';
    Promise.all([api.getInitialCards(), api.getUserInfo()])
        .then(data => {
            sectionRenderCards.rendererAllElements(data[0], data[1]._id)
            userInfo.setUserInfo(data[1]);
            userInfo.setUserAvatar(data[1]);
        }).catch(err => console.log(err))
        .finally(() => page.style.visibility = 'visible');
}

startLoadPage();


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
    validatorPopupEditInfo.clearError();
    nameInput.value = userData.name;
    aboutInput.value = userData.about;

    popupEditInfo.open();
});

buttonOpenPopupAdd.addEventListener('click', () => {
    validatorPopupAddImage.clearError();
    popupAddImage.open();
})











