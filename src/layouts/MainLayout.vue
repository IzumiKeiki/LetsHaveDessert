<template>
  <q-layout view="hHh lpr lFr">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="text-center"> Store </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="shopping_cart"
          aria-label="Menu"
          @click="toggleRightDrawer"
          ><q-badge v-if="counter > 0" color="red" floating>{{
            counter
          }}</q-badge></q-btn
        >
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" show-if-above bordered>
      <div v-if="counter > 0">
        <shopping-item
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          @removeFromCart="removeFromCart"
        />
        <q-separator />
        <q-card-section horizontal class="justify-between">
          <q-card-section>
            <q-item-section class="flex-center text-h6">
              Total:
            </q-item-section>
          </q-card-section>
          <q-card-actions>
            <q-item-section class="flex-center text-h6 q-mr-md"
              >${{ total }}
            </q-item-section>
          </q-card-actions>
        </q-card-section>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores/store";

export default defineComponent({
  name: "MainLayout",

  components: {
    "shopping-item": require("components/ShoppingItem.vue").default,
  },
  methods: {
    ...mapActions(useStore, ["removeFromCart"]),
  },
  computed: {
    ...mapState(useStore, ["counter", "total"]),
  },
  setup() {
    const rightDrawerOpen = ref(false);
    const { items } = useStore();

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },

      items,
    };
  },
});
</script>
