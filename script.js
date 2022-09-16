'use strict';

const goods = [
    { title: 'Shirt', price: 150, image: 'img/Shirt.png'},
    { title: 'Socks', price: 50, image: 'img/Socks.png'},
    { title: 'Jacket', price: 350, image: 'img/Jacket.png'},
    { title: 'Shoes', price: 250, image: 'img/Shoes.png'},
];
const renderGoodsItem = ({image, title = '', price = 0 }) => {
return `<div class="goods-item"><img class="img_size" src="${image}" alt="">
<h3>${title}</h3><p>${price } $</p><button class="button-item">Добавить</button></div>`;
};
const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}
renderGoodsList(goods);



