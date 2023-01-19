<template>
  <q-card class="my-card q-ma-lg">
    <q-img :src="item.img">
      <div class="absolute-bottom text-h6">{{ item.name }}</div>
    </q-img>
    <q-card-section class="text-center text-h6">
      Price: ${{ item.price }}
    </q-card-section>
    <div v-if="item.quantity >= 1" class="row q-mx-md q-mb-md">
      <q-btn @click="increase" square color="secondary" icon="add" />

      <q-item-section class="flex-center"
        >{{ item.quantity }} in Cart</q-item-section
      >
      <q-btn @click="decrease" square color="secondary" icon="remove" />
    </div>
    <div v-if="item.quantity < 1" class="q-mx-md q-mb-md">
      <q-btn
        @click="addToCart"
        class="full-width"
        color="secondary"
        icon-right="shopping_cart"
        label="Add to cart"
      />
    </div>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardItem",
  props: ["item"],
  methods: {
    addToCart() {
      this.$emit("addToCart", this.item.id);
    },
    increase() {
      this.$emit("increase", this.item.id);
    },
    decrease() {
      this.$emit("decrease", this.item.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
