<template>
  <div
    class="
      products-card
      d-flex
      flex-wrap
      justify-content-center
      align-items-center
      mt-3
    "
  >
  <Loading v-if="isLoading"/>
    <div
      class="product col-12 col-lg-4 p-1"
      v-else
      v-for="product in getProducts.products"
      :key="product.id"
    >
      <div class="card w-100 h-100">
        <div class="overlay">
          <div class="icons p-1">
            <span><i class="fa-regular fa-heart"></i></span>
            <span><i class="fa-regular fa-eye"></i></span>
            <span><i class="fa-solid fa-cart-plus"></i></span>
          </div>
          <div class=" p-1 mt-2">
            <span class="text me-1 p-2">{{$t('try')}}</span>
            <span class="text me-1 p-2">{{$t('more')}}</span>
          </div>
        </div>
        <img :src="product.thumbnail" class="card-img-top" />
        <div class="card-body fs-6">
          <div class="main-info d-flex flex-column">
            <div class="product-name">
              <span class="red-color">Name: </span>
              <span>{{ product.title }}</span>
            </div>
            <div class="product-brand">
              <span class="red-color">Brand: </span>
              <span>{{ product.brand }}</span>
            </div>
          </div>
          <div class="">
            <div class="discount">{{ product.discountPercentage }} %</div>
            <div class="price">{{ product.price }} $</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Loading from "@/components/Loading"
export default {
  name: "product-card",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getProducts" , "isLoading"]),
  },
  components: {
    Loading,
}
}
</script>
<style lang="scss" scoped>
@import "@/scss/common/_varibles.scss";
.products-card {
  background-color: $white-color;
  border-radius: $border-radius;

  .product {
    border-radius: $border-radius;
    height: 350px;
    .card {
      overflow: hidden;
      transition: 1s all;
      position: relative;
      perspective: 500px;
      .overlay{
        display: none;
        .icons{
          background-color: $white-color;
          border-radius: 5px;
          i{
            cursor: pointer;
            color: $dark-green;
            margin: 5px;
          }
        }
        .text{
          cursor: pointer;
          border-radius: $border-radius;
          background-color: $white-color ;
          color:$dark-green;

        }
      }
      &:hover {
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: rgba($color: #000000, $alpha: 0.5);
          z-index: 9;
        }
        img{
          width: 100%;
          height: 100%;
          transform: translateZ(150px);
        }
        .card-body{
          display: none;
        }
      }
    }
    .red-color {
      color: #842029;
      font-weight: bold;
    }
    img {
      width: 100%;
      min-height: 60%;
      transition: 1s all;
    }
  }
}
</style>