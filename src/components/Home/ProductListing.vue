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
        <Categories :products="getCategories.slice(0, 7)">
          <template #more>
            <div class="more">
              <router-link
                to="/more"
                class="
                  more
                  d-flex
                  flex-wrap
                  justify-content-center
                  align-items-center
                  fw-bold
                "
                >{{ $t("more") }}</router-link
              >
            </div>
          </template>
        </Categories>
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
      <div
        class="
          col-lg-3 col-md-4 col-5
          d-flex
          justify-content-end
          align-items-start
        "
      >
        <input
          type="number"
          class="form-control"
          :placeholder="$t('each-page')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Branches from "./Branches";
import ProductCard from "./ProductCard";
import SearchBar from "./Search";
import Categories from "@/components/Categories.vue";
import Pagination from "./Pagination";
export default {
  name: "product-component",
  components: { Branches, ProductCard, SearchBar, Categories, Pagination },
  computed: {
    ...mapGetters(["getCategories"]),
  },
};
</script>
<style lang="scss" scoped>
@import "./../../scss/common/_varibles.scss";

.form-control:focus {
  border: none;
  box-shadow: none;
}
.more {
  border-radius: 50%;
    width: 125px;
    height: 125px;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(
      $color: $dark-green,
      $alpha: 0.5
    );
    color: $white-color !important;
    &.hover{
      background-color: $dark-green;
      color: $white-color !important;
    }
    a{
      text-decoration: none;
    }
  }
</style>
