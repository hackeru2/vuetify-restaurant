<template>
  <v-row>
    <Product v-for="(product, i) in products" :key="i" :product="product" />
  </v-row>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  data: () => ({
    products: [
      {
        img: " 3.jpg",
        type: "Bedroom",
        money: "450$",
      },
      {
        img: "4.jpg",
        type: "Furniture",
        money: "600$",
      },
      {
        img: "5.jpg",
        type: "Home",
        money: "430$",
      },
      {
        img: "6.jpg",
        type: "Interior",
        money: "303$",
      },
      {
        img: " 7.jpg",
        type: "Living room",
        money: "700$",
      },
      {
        img: "8.jpg",
        type: "Living room",
        money: "360$",
      },
      {
        img: "9.jpg",
        type: "Living room",
        money: "520$",
      },
      {
        img: "10.jpg",
        type: "Living room",
        money: "360$",
      },
      {
        img: "2.jpg",
        type: "Living room",
        money: "360$",
      },
    ],
  }),
};
</script>
