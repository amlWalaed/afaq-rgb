<template>
    <div class="search">
        <div class="overlay"></div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            :placeholder="$t('search')"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            @keyup.enter="getResearchResults(value)"
            v-model="value"
          />
          <div class="input-group-append" @click="getResearchResults(value)">
            <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>
    </div>
</template>
<script>
import { mapActions , mapGetters } from 'vuex';
export default {
  name: "search-bar",
  data(){
    return {
          value:"",
          show: true,
        }
  },
  computed:{
    ...mapGetters(['searchResults'])
  },
  methods:{
    ...mapActions(['getResearchResults']),
    close(e){
        if (!this.$el.contains(e.target)) {
        this.show = false
      }else{
        this.show = true
      }
    }

  },
  mounted(){
    document.addEventListener('click', this.close)
  },
  beforeUnmount () {
    document.removeEventListener('click',this.close)
  }
};
</script>
<style lang="scss" scoped>
@import './../../scss/common/_varibles.scss';
.search{
    position: relative;
    .input-group{
        overflow: hidden;
        border-radius: $border-radius;
        border: 1px solid $light-green;
        input{
            border: none;
        }
        .input-group-append{
            .input-group-text{
                background-color: $light-green;
                border: 1px solid $light-green;
                color: $white-color;
                border-radius: 0;
                height: 100%;
                &:hover{
                  background-color: darken($light-green, 15%) !important; 
                }
            }
        }
    }
    
    ul{
        list-style: none;
        position: absolute;
        top: 38px;
        right: 0;
        left: 0;
        z-index: 8;
        background-color: $white-color;
        padding: 0;
        li{
            padding: 5px 0;
            position: relative;
            a{
                text-decoration: none;
                color: $light-green;
            }
            &:not(:last-child){
                &::after{
                    content:'';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background-color: $light-green;
                }
            }
        }
    }
}
</style>
