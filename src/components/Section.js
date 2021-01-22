export class Section {
    constructor({renderer}, containerSelector) {

        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    rendererAllElements(items, userId) {
        items.forEach((item) => this._renderer(item, userId))
    }

    addItem(elem) {
        this._container.prepend(elem);
    }
}