<template>
  <product-form v-on:save-product="addProduct" v-bind:model="model" v-bind:manufacturers="manufacturers"></product-form>
</template>

<script>
import ProductForm from '@/components/product/ProductForm';

export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: 'sam',
          name: 'Samsung',
        },
        {
          _id: 'apple',
          name: 'Apple',
        },
      ],
    };
  },
  methods: {
    addProduct(model) {
      console.log('model', model);
    },
  },
  components: {
    'product-form': ProductForm,
  },
};
</script>
