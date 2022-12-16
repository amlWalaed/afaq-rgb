<template>
  <Loading v-if="isLoading" />
  <div class="container" v-else>
    <div class="row my-3">
      <Carousel />
    </div>
    <div class="row my-3">
      <div class="col-4 d-none d-md-block">
        <Advertisement class="my-3">
          <template #text>
            <p class="text-white fw-bold">{{$t('discount-50')}}</p>
            <button class="btn btn-success">{{$t('shopping-now')}}</button>
          </template>
          <template #image>
            <img src="https://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg" class="w-100 h-100" />
          </template>
        </Advertisement>
        <Advertisement class="my-3">
          <template #text>
            <p class="text-white fw-bold">{{$t('discount-50')}}</p>
            <button class="btn btn-success">{{$t('shopping-now')}}</button>
          </template>
          <template #image>
            <img src="https://i0.wp.com/salifex.com/wp-content/uploads/2019/02/heinz_ketchup_2.jpg?fit=660%2C900&ssl=1" class="w-100 h-100" />
          </template>
        </Advertisement>
        <Advertisement class="my-3">
          <template #text>
            <p class="text-white fw-bold">{{$t('discount-50')}}</p>
            <button class="btn btn-success">{{$t('shopping-now')}}</button>
          </template>
          <template #image>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/7_Up_-_You_like_it%2C_it_likes_you%2C_1948.jpg" class="w-100 h-100" />
          </template>
        </Advertisement>
      </div>
      <div class="col-sm-12 col-md-8">
        <div class="row">
          <Products />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Advertisement from "@/components/Advertisement.vue";
import Products from "@/components/Home/ProductListing";
import Loading from "@/components/Loading.vue";
import {mapGetters} from 'vuex'
export default {
  name: "HomeView",
  computed:{
    ...mapGetters(['isLoading'])
  },
  components: { Carousel , Advertisement , Products , Loading },
 
};
</script>
<style lang="scss" scoped>
</style>
