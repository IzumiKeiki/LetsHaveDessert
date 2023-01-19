import { defineStore } from "pinia";

export const useStore = defineStore("good", {
  state: () => ({
    items: [
      {
        id: 0,
        img: require("../assets/cake.jpg"),
        name: "cake",
        price: 20,
        quantity: 0,
      },
      {
        id: 1,
        img: require("../assets/cream.jpg"),
        name: "cream",
        price: 15,
        quantity: 0,
      },
      {
        id: 2,
        img: require("../assets/cherry.jpg"),
        name: "cherry",
        price: 12,
        quantity: 0,
      },

      {
        id: 3,
        img: require("../assets/tea.jpg"),
        name: "tea",
        price: 9,
        quantity: 0,
      },
      {
        id: 4,
        img: require("../assets/pastry.jpg"),
        name: "pastry",
        price: 7,
        quantity: 0,
      },
      {
        id: 5,
        img: require("../assets/watermelon.jpg"),
        name: "watermelon",
        price: 10,
        quantity: 0,
      },
      {
        id: 6,
        img: require("../assets/waffle.jpg"),
        name: "waffle",
        price: 5,
        quantity: 0,
      },
    ],
    cart: [],
  }),
  getters: {
    counter: (state) => {
      return state.cart.length;
    },
    total: (state) => {
      const eachItem = state.items.map((item) => item.price * item.quantity);
      const sum = eachItem.reduce((acc, cur) => acc + cur, 0);
      return sum;
    },
  },
  actions: {
    addToCart(id) {
      this.items[id].quantity = 1;
      this.cart.push(this.items[id].name);
    },
    removeFromCart(id) {
      this.items[id].quantity = 0;
      this.cart = this.cart.filter((item) => item != this.items[id].name);
    },
    increase(id) {
      this.items[id].quantity++;
      this.cart.push(this.items[id].name);
    },
    decrease(id) {
      this.items[id].quantity--;
      const index = this.cart.indexOf(this.items[id].name);
      this.cart.splice(index, 1);
    },
  },
});
