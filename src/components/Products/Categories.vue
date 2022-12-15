<template>
  <div
    class="
      categories
      d-flex
      flex-wrap
      justify-content-center
      align-items-center
      g-5
    "
  >
    <div
      v-for="category in getCategories.slice(0, 6)"
      :key="category.id"
      class="category"
      @click="clickCategory(category)"
    >
      <router-link
        to="#"
        class="
          d-flex
          flex-wrap
          justify-content-center
          align-items-center
          fw-bold
        "
        :class="{active: activeTab === category}"
      >
        {{ category }}
      </router-link>
    </div>
    <div class="category">
      <router-link
        to="#"
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "categories-component",
  data() {
    return {
      activeTab: null,
    };
  },
  computed: {
    ...mapGetters(["getCategories"]),
  },
  methods: {
    clickCategory(category) {
      this.activeTab = category;
      this.$store.dispatch("fetchCategoryProducts", category);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../../scss/common/varibles.scss";
.categories {
  gap: 10px;
}
.category {
  a {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: #fff;
    box-shadow: 0 0 5px 0 #aaa;
    color: $background-color-nav !important;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: $background-color-nav;
      color: white !important;
    }
    &.active {
      background-color: $background-color-nav;
      color: white !important;
    }
  }
  .more {
    background-color: rgba(
      $color: $background-color-nav,
      $alpha: 0.5
    ) !important;
    color: white !important;
  }
}
</style>