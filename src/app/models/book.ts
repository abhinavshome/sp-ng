export class Book {
    id: number;
    title: string;
    author: string;
    price: number;
    rating: number;

    constructor(title, author, price, rating) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.rating = rating;
    }
}

// export interface Book {
//     id?: number;
//     title: string;
//     author: string;
//     price: number;
//     rating: number;
// }