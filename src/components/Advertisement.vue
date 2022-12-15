<template>
    <div class="Advertisement">
        <div class="overlay d-flex align-items-center justify-content-center flex-column ">
            <slot name="text"></slot>
        </div>
        <slot name="image"></slot>

    </div>
</template>
<script>
export default {
    name:'Advertisement-component'
}
</script>
<style lang="scss">
@import '@/scss/common/varibles.scss';
.Advertisement{
    background-color: white;
    border-radius: $border-radius;
    position:relative;
    height: 50vh;
    overflow: hidden;
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        .btn-success{
            background-color: $links-collapse-color;
        }
    }
}
</style>
