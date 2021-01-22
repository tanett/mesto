export class Section {
    constructor({renderer}, containerSelector) {
        // this._rendererItems = items;
        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    rendererAllElements(Items, userId) {
        Items.forEach((item) => this._renderer(item, userId))
    }

    addItem(elem) {
        this._container.prepend(elem);
    }
}