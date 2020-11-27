import {aboutInput, nameInput, profileDescr, profileName} from "../utils/utils.js";

export class UserInfo {
    constructor(selectorUserName, selectorUserAbout) {
        this.userName = document.querySelector(selectorUserName);
        this.userAbout = document.querySelector(selectorUserAbout);
    }
    getUserInfo() {
        const userInfoFromHtml = {};
        userInfoFromHtml[uName] = this.userName.textContent;
        userInfoFromHtml[uAbout] = this.userAbout.textContent;
        return userInfoFromHtml;
    }
    setUserInfo(){
        this.userName.textContent = nameInput.value;
        this.userAbout.textContent = aboutInput.value;
    }
}