export class Cart {
    items: Item[];
    totalPrice: number;
}

export class Item {
    name: string;
    price: number;
    qty: number;

    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}