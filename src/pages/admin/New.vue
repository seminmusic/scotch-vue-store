<template>
  <form v-on:submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label v-bind:class="{ 'error': errors.has('name') }">Name</label>
        <input type="text" name="name"
               v-model="model.name" 
               v-validate="'required'"
               v-bind:class="{ 'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>
      <div class="form-group">
        <label v-bind:class="{ 'error': errors.has('price') }">Price</label>
        <input type="number" name="price"
               v-model="model.price" 
               v-validate="'required'"
               v-bind:class="{ 'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group">
        <label v-bind:class="{ 'error': errors.has('manufacturer') }">Manufacturer</label>
        <select type="text" name="manufacturer" class="form-control"
                v-model="model.manufacturer"
                v-validate="'required'"
                v-bind:class="{ 'form-control': true, 'error': errors.has('manufacturer') }">
          <template v-for="manufacturer in manufacturers">
            <option v-bind:value="manufacturer._id"
                    v-bind:selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">
              {{ manufacturer.name }}
            </option>
          </template>
        </select>
        <span class="small text-danger" v-show="errors.has('manufacturer')">Manufacturer is required</span>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    addProduct(model) {
      console.log(model);
    },
  },
};
</script>
