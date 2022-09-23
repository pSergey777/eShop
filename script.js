'use strict';

const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses"
const GOODS = "/catalogData.json"
const urlMocky = 'https://run.mocky.io/v3/cc5447fd-a13a-41af-8a45-a95e8ffee58d'

const url = `${URL}${GOODS}`

function service(url) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url );
        xhr.onload = () => {
            const result = JSON.parse(xhr.response)
            resolve(result)
          };
          xhr.send();
    })
    }
  

const goods = [
    { product_name: 'Shirt', price: 150, image: 'img/Shirt.png'},
    { product_name: 'Socks', price: 50, image: 'img/Socks.png'},
    { product_name: 'Jacket', price: 350, image: 'img/Jacket.png'},
    { product_name: 'Shoes', price: 250, image: 'img/Shoes.png'},
];

class GoodsItem {
    constructor({image, product_name = "", price = 0 }) {
        this.image = image;
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `
        <div class="goods-item">
        <img class="img_size" src="${this.image}" alt="">
        <h3>${this.product_name}</h3>
        <p>${this.price } $</p>
        <button class="button-item">Добавить</button></div>`
    }
}

const goodsItem = new GoodsItem({ product_name: 'Shirt', price: 150, image: 'img/Shirt.png'})

class GoodsList {
    list = [];
    fetchGoods(callback) { 
       return service(urlMocky).then((data) => {
            this.list = data;
            callback()
        });   
    }

    getPrice() {
       return this.list.reduce((acc, item) => {
            return acc + item.price;
        }, 0)
  }

    render() {
        const resultList = this.list.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render()
        });
    document.querySelector('.goods-list').innerHTML = resultList.join('');
    }
}

const goodsList = new GoodsList(goods);
goodsList.fetchGoods(() => {
    goodsList.render();
});

console.log(goodsList.getPrice())








