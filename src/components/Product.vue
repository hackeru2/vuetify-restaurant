<template>
  <v-col cols="12" sm="4">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="product.img" height="200px" cover></v-img>
      <v-divider></v-divider>
      <v-card-title>
        {{ product.type }}
      </v-card-title>
      <v-card-actions>
        <v-btn prepend-icon="mdi mdi-cart">{{ product.money }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="toggleHeartColor"
          size="small"
          :color="heartColor"
          variant="text"
          icon="mdi-heart"
        ></v-btn>
        <v-btn
          size="small"
          color="surface-variant"
          variant="text"
          icon="mdi-share-variant"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      heartColor: "defaultColor", // Set your default color here
    };
  },
  methods: {
    toggleHeartColor() {
      this.heartColor =
        this.heartColor === "defaultColor" ? "red" : "defaultColor";
    },
  },
};
</script>
