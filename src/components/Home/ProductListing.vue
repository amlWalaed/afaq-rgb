<template>
  <div class="products">
    <div class="row">
      <div class="col-lg-9 col-8">
        <searchBar />
      </div>
      <div class="col-lg-3 col-4">
        <branches />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Categories />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <productCard />
      </div>
    </div>
    <div class="row d-flex justify-content-between mt-3">
      <div class="col-7 col-md-6">
        <Pagination />
      </div>
      <div class="col-lg-3 col-md-4 col-5 d-flex justify-content-end align-items-start">
        <input type="number" class="form-control" :placeholder="$t('each-page')"/>
      </div>
    </div>
  </div>
</template>
<script>
import Branches from "./Branches.vue";
import ProductCard from "./ProductCard.vue";
import SearchBar from "./Search.vue";
import Categories from "./Categories.vue";
import Pagination from "./Pagination.vue"
export default {
  name: "product-component",
  components: { Branches, ProductCard, SearchBar, Categories , Pagination},
};
</script>
<style lang="scss" scoped>
@import "./../../scss/common/_varibles.scss";

.form-control:focus{
  border: none;
  box-shadow: none;
}
</style>
