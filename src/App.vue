<template>
  <Navbar />
    <router-view/>
  <Footer />
</template>
<script>
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'

export default {
  components:{Navbar , Footer},
  mounted(){
    if(localStorage.getItem('lang') === "AR"){
        document.body.setAttribute('dir', 'rtl')
    }
  },
  beforeCreate(){
    this.$store.dispatch("fetchData");
  }
}
</script>

<style lang="scss">
@import './scss/common/_varibles.scss';
@import './scss/style-rtl.scss';

*, *::after , *::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box ;
}
#app {
  background-color: $gray-color;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height:100vh;
}


</style>
