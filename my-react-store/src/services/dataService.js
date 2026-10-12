const catalog = [
    {
        "title": "Oranges",
        "category": "fruit",
        "price": 3.00,
        "image": "placeholder",
        "_id": "1"
    },
    
    {
        "title": "Shampoo",
        "category": "hygene",
        "price": 6.00,
        "image": "placeholder",
        "_id": "2"
    },
    
    {
        "title": "Pencil",
        "category": "office supply",
        "price": 2.00,
        "image": "placeholder",
        "_id": "3"
    }

];

class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;