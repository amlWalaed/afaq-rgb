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
      v-for="category in products"
      :key="category.id"
      class="category"
      @click="clickCategory(category)"
    >
      <router-link
        to="/"
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
    <slot name="more"></slot>
  </div>
</template>
<script>
export default {
  name: "categories-component",
  data() {
    return {
      activeTab: null,
    };
  },
  props:['products'],
  
  methods: {
    clickCategory(category) {
      this.activeTab = category;
      this.$store.dispatch("fetchCategoryProducts", category);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/common/_varibles.scss";
.categories {
  gap: 10px;
}
.category {

    border-radius: 50%;
    width: 125px;
    height: 125px;
    background: $white-color;
    box-shadow: 0 0 5px 0 #aaa;
    color: $dark-green !important;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    
    &:hover {
      background-color: $dark-green;
      color: $white-color !important;
      a{
        color: $white-color!important;
      }
    }
    &.active {
      background-color: $dark-green;
      color: $white-color !important;
    }
    a{
      color: $dark-green;
      text-decoration: none;
    }
  
}
</style>