const catalog = [
    {
        "title": "Oranges",
        "category": "fruit",
        "price": 3.00,
        "image": "oranges.jpg",
        "_id": "1"
    },
    
    {
        "title": "Shampoo",
        "category": "hygene",
        "price": 6.00,
        "image": "shampoo.png",
        "_id": "2"
    },
    
    {
        "title": "Pencil",
        "category": "office supply",
        "price": 2.00,
        "image": "pencil.jpg",
        "_id": "3"
    }

];

class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;