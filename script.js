'use strict';

const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses"
const GOODS = "/catalogData.json"
const urlMocky = 'https://run.mocky.io/v3/cc5447fd-a13a-41af-8a45-a95e8ffee58d'

const url = `${URL}${GOODS}`

function service(url) {
     return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        const result = JSON.parse(xhr.response)
          if(xhr.status !== 200){
            reject(error)
            return alert ('Ошибка, данные с сервера не загруженны')
              } else {
                resolve(result);
                return alert ('Данные с сервера загруженны')
                }
        // resolve(result)
      };
      xhr.send();
    })
  }
 
function init() {
 
  Vue.component('search', {   
    props: ['value'],
    template: `
        <input type="text" class="goods-search" 
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)">
    `
})

  Vue.component('basket', {
    props: [
      'item'
    ],
    template:`
    <div class="cart">
      <button class="cart_close" type="button" @click="$emit('close')">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    `
  })

  Vue.component('custom_button', {
    props: [
      'item'
    ],
    template:`
    <button class="cart-button" type="button" v-on:click="$emit('click')">
    <slot></slot>
    </button>
    `
  })

  Vue.component('goods_item', {
    props: [
      'item'
    ],
    template:`
    <div class="goods-item">
      <img class="img_size" :src="item.image" alt="product_image">
      <div class="item_title">
        <h3>Модель: {{ item.product_name }}</h3>
        <p>Цена: {{ item.price }}</p>
        <button class="btn">В корзину</button>
      </div>
    </div>
    `
  })

const app = new Vue({
  el: '#root',
  data: {
    goods: [],
    search: '',
    isVisibleCart: false
  },
  
  mounted() {
    return new Promise((resolve) => {
      service(urlMocky).then((data) => {
        this.goods = data;
        resolve();
      });
    })
  },

  methods: {
    setVisionCard() {
      this.isVisibleCart = !this.isVisibleCart;
    },
  },

  computed: {
    filterGoods() {
      return this.goods.filter((item) => {
        const regExp = new RegExp(this.search, 'i');
        return regExp.test(item.product_name);
      })
    }
  }
})
  };
  window.onload = init









