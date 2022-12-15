<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{$t('branches')}}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><router-link to="#" class="dropdown-item" >{{$t('cairo')}}</router-link></li>
      <li><router-link to="#" class="dropdown-item" >{{$t('cairo')}}</router-link></li>
      <li><router-link to="#" class="dropdown-item" >{{$t('cairo')}}</router-link></li>
      <li><router-link to="#" class="dropdown-item" >{{$t('cairo')}}</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "banches-component",
};
</script>
<style lang="scss" scoped>
@import './../../scss/common/varibles.scss';
.dropdown{
    button{
        background-color: $background-color-nav !important;
        border: none;
        min-width: 100%;

        &::after{
            margin-right: 4px;
        }
    }
    .dropdown-menu{
        text-align: center;
        min-width: 100%;
        a{
            &:hover{
                background-color: rgba($color: $background-color-nav, $alpha: 0.5);
                color: white;
            }
        }
    }
}
</style>
