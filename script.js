'use strict';

const goods = [
    { title: 'Shirt', price: 150, image: 'img/Shirt.png'},
    { title: 'Socks', price: 50, image: 'img/Socks.png'},
    { title: 'Jacket', price: 350, image: 'img/Jacket.png'},
    { title: 'Shoes', price: 250, image: 'img/Shoes.png'},
];

class GoodsItem {
    constructor({image, title = "", price = 0 }) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
    render() {
        return `
        <div class="goods-item">
        <img class="img_size" src="${this.image}" alt="">
        <h3>${this.title}</h3>
        <p>${this.price } $</p>
        <button class="button-item">Добавить</button></div>`
    }
}

const goodsItem = new GoodsItem({ title: 'Shirt', price: 150, image: 'img/Shirt.png'})

class GoodsList {
    list = [];
    fetchGoods() {    
        this.list = goods;
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
goodsList.fetchGoods();
goodsList.render();
console.log(goodsList.getPrice())








