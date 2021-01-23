export class UserInfo {
    constructor(selectorUserName, selectorUserAbout, selectorAvatarPic) {
        this._userName = document.querySelector(selectorUserName);
        this._userAbout = document.querySelector(selectorUserAbout);
        this._userLinkAvatar = document.querySelector(selectorAvatarPic)
        this._name = '';
        this._about = '';
        this._avatar = '';
        this._userId = '';
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this._userName.textContent;
        userInfo.about = this._userAbout.textContent;
        userInfo.avatar = this._userLinkAvatar.src;
        userInfo.Id = this._userId;
        return userInfo;
    }


    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userAbout.textContent = data.about;

        this._userId = data._id;

    }

    setUserAvatar(data) {
        this._userLinkAvatar.src = data.avatar;
    }
}