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
  }
}
</script>

<style lang="scss">
@import './scss/common/varibles.scss';
@import './scss/style-rtl.scss';

*, *::after , *::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box ;
}
body{
  color: $font-color;
}
#app {
  background-color: $background-color;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
