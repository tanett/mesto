export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me `, {
            method: 'GET',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    editUserInfo(valuesFromInput) {
        return fetch(`${this._baseUrl}/users/me `, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: valuesFromInput.name,
                    about: valuesFromInput.about
                })
            }
        ).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    editUserAvatar(valuesFromInput) {
        return fetch(`${this._baseUrl}/users/me/avatar `, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: valuesFromInput.link
                })
            }
        ).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }).catch(err => console.log(err));
    }


    addCard(valuesFromInput) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(
                {
                    name: valuesFromInput.name,
                    link: valuesFromInput.link
                }
            )
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteCard(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    likeOn(cardID) {
        return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
            method: 'PUT',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    likeOff(cardID) {
        return fetch(`${this._baseUrl}/cards/likes/${cardID}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }


}