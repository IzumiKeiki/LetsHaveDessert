<template>
  <div class="q-pa-md">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img
          style="filter: brightness(50%)"
          src="https://images.unsplash.com/photo-1587306433556-18d035a3ed97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </template>

      <h1 class="text-white text-italic text-h5 q-px-sm">
        "Life is sweet if you allow it." - Anonymous
      </h1>
    </q-parallax>
  </div>
  <q-page class="flex flex-center q-mt-lg">
    <card-item
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      @addToCart="addToCart"
      @increase="increase"
      @decrease="decrease"
    ></card-item>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useStore } from "../stores/store";

export default defineComponent({
  name: "HomePage",
  components: {
    "card-item": require("components/CardItem.vue").default,
  },
  methods: {
    ...mapActions(useStore, ["addToCart", "increase", "decrease"]),
  },
  setup() {
    const { items } = useStore();

    return {
      items,
    };
  },
});
</script>
