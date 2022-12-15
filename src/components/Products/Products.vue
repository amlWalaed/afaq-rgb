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
      <div class="col-6">
        <ul class="pagination">
          <li class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </li>
          <li class="page-link">1</li>
          <li class="page-link">2</li>
          <li class="page-link">3</li>
          <li class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-4 col-6 d-flex justify-content-end align-items-start">
        <input type="number" class="form-control" :placeholder="$t('each-page')"/>
      </div>
    </div>
  </div>
</template>
<script>
import branches from "./Branches.vue";
import productCard from "./ProductCard.vue";
import searchBar from "./Search.vue";
import Categories from "./Categories.vue";
export default {
  name: "product-component",
  components: { branches, productCard, searchBar, Categories },
};
</script>
<style lang="scss" scoped>
@import "./../../scss/common/varibles.scss";
.pagination {
  overflow: hidden;
  .page-link {
    color: $links-collapse-color !important;
    cursor: pointer;
  }
}
.form-control:focus{
  border: none;
  box-shadow: none;
}
</style>
