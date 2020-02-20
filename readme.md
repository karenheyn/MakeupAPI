# Makeup API

### About

This Restful API was built by collecting raw Json data from this [makeup API](https://makeup-api.herokuapp.com/). Each object contains information about the product including but not limited to: brand, name, product type, image, hex color, color name, price, descripion, rating, and product link. This API was created using node.js, express, and mongoose queries.

### Endpoints

|   Query    |           Path           | Description                            | Additional Information                                                  |
| :--------: | :----------------------: | -------------------------------------- | ----------------------------------------------------------------------- |
|  **POST**  |        `/id/{id}`        | create a new object                    | Number                                                                  |
|  **GET**   |        `/product`        | find all objects in database           |                                                                         |
|  **GET**   | `/product/brand/{brand}` | find by brand name                     | String. This will be the full name of the brand.                        |
|  **GET**   |  `/product/type/{type}`  | find by product name                   | String. This is the full name of the type of product (i.e. foundation). |
|  **PUT**   |     `/product/{id}`      | update existing object in the database | Number.                                                                 |
| **DELETE** |     `/product/{id}`      | delete object by id                    | Number.                                                                 |

### Goal

The goal of this project was to create an API using mongoose and express with full CRUD capability and thorough documentation. This project is to be later used in developing a MERN stack application.

### Sample Response

```
    {
        "tagList": [],
        "_id": 993,
        "brand": "nyx",
        "price": "9.5",
        "priceSign": "$",
        "currency": "USD",
        "imageLink": "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw2e036256/ProductImages/Eyes/Doll_Eye_Mascara/800897123543_dolleyemascara_longlash_black_main.jpg?sw=390&sh=390&sm=fit",
        "productLink": "https://www.nyxcosmetics.com/doll-eye-mascara/NYX_017.html?cgid=mascara",
        "description": "Hello, dollface! For irresistibly fluttery eyelashes, try this mascara on for size. Doll Eye Mascara uses a unique blend of natural oil and nylon fibers to extend lashes to almost faux proportions. Choose from our Doll Eye Mascara in Long Lash, Volume or Waterproof.",
        "rating": null,
        "category": null,
        "productType": "mascara",
        "productColors": [
            {
                "_id": "5dcc9560cf8c3e50910ffaa7",
                "hexValue": "#141414",
                "colourName": "Waterproof - Black"
            }
        ],
        "__v": 0
    }
```

### Technologoies Used
- javascript
- mongoDB
- mongoose
- node.js
- express
- postman

### Deployed on Heroku
https://makeupinfo.herokuapp.com/product
