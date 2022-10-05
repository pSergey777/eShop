'use strict';

const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses"
const GOODS = "/catalogData.json"
const urlMocky = 'https://run.mocky.io/v3/cc5447fd-a13a-41af-8a45-a95e8ffee58d'

const url = `${URL}${GOODS}`

function service(url) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => {
        const result = JSON.parse(xhr.response)
        resolve(result)
      };
      xhr.send();
    })
  }
  
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
      }
    },

    computed: {
      filterGoods() {
        return this.goods.filter((item) => {
          const regExp = new RegExp(this.search);
          return regExp.test(item.product_name);
        })
      }
    }
  })










