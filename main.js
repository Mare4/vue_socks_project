const app = Vue.createApp({
  /* data: funtion() *ES6 simples below) */
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
