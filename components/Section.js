export class Section {
    constructor({items, renderer}, containerSelector) {
        this._rendererItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    rendererAllElements(){
        this._rendererItems.forEach((item)=>this._renderer(item))
    }
    addItem(elem){
        this._container.append(elem);
    }
}