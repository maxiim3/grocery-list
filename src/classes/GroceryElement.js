
export default class GroceryElement {
    #_id
    #_name;
    #_category;
    #_price;
    #_picture;

    constructor(id, name, category, price, picture) {
        this.#_id = id;
        this._name = name;
        this._category = category;
        this._price = price;
        this._picture = picture;
        this._id = id;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get picture() {
        return this._picture;
    }

    set picture(value) {
        this._picture = value;
    }
}