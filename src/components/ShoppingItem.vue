<template>
  <q-card v-if="item.quantity > 0" class="my-card q-ma-lg">
    <q-card-section horizontal class="justify-between">
      <q-card-section
        ><q-item-section class="flex-center text-h6">
          {{ item.name }}
        </q-item-section>
      </q-card-section>
      <q-card-actions>
        <q-item-section class="flex-center text-h6 q-mr-md"
          >${{ item.quantity * item.price }}
        </q-item-section>
        <q-btn
          @click="removeFromCart"
          square
          color="negative"
          icon-right="delete"
        />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingItem",
  props: ["item"],
  methods: {
    removeFromCart() {
      this.$emit("removeFromCart", this.item.id);
    },
  },
});
</script>

<style></style>
