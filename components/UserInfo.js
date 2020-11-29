
export class UserInfo {
    constructor(selectorUserName, selectorUserAbout) {
        this._userName = document.querySelector(selectorUserName);
        this._userAbout = document.querySelector(selectorUserAbout);
    }
    getUserInfo() {
        const userInfoFromHtml = {};
        userInfoFromHtml.name = this._userName.textContent;
        userInfoFromHtml.about = this._userAbout.textContent;
        return userInfoFromHtml;
    }
    setUserInfo({name, about}){
        this._userName.textContent = name;
        this._userAbout.textContent = about;
    }
}