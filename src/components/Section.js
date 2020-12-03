export class Section {
    constructor({items, renderer}, containerSelector) {
        this._rendererItems = items;
        this._renderer = renderer;
        console.log(containerSelector);
        this._container = document.querySelector(containerSelector);
    }
    rendererAllElements(){
        this._rendererItems.reverse().forEach((item)=>this._renderer(item))
    }
    addItem(elem){
        this._container.prepend(elem);
    }
}