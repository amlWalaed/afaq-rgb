<template>
  <div class="Advertisement">
    <div
      class="
        overlay
        d-flex
        align-items-center
        justify-content-center
        flex-column
      "
    >
      <slot name="text"></slot>
    </div>
    <slot name="image"></slot>
  </div>
</template>
<script>
export default {
  name: "Advertisement-component",
};
</script>
<style lang="scss">
@import "@/scss/common/_varibles.scss";
.Advertisement {
  background-color: $white-color;
  border-radius: $border-radius;
  position: relative;
  height: 50vh;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    .btn-success {
      background-color: $light-green;
      border: none;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      z-index:1;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $light-green !important;
        z-index: -2;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: darken($light-green, 15%) !important; 
        transition: all 0.3s;
        z-index: -1;
      }
      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
  }
}
</style>
