const catalog = [
    {
        "title": "Oranges",
        "category": "fruit",
        "price": 3.00,
        "image": "Oranges.webp",
        "_id": "1"
    },
    
    {
        "title": "Shampoo",
        "category": "hygene",
        "price": 6.00,
        "image": "Shampoo.webp",
        "_id": "2"
    },
    
    {
        "title": "Pencil",
        "category": "office supply",
        "price": 2.00,
        "image": "Pencils.webp",
        "_id": "3"
    }

];

class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;