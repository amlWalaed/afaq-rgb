<template>
    <div class="container">
        <div class="loading">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'loading-component',
}
</script>
<style lang="scss" scoped>
@import "./../scss/common/_varibles.scss";
@mixin animation($delay){
    animation: loading 1s linear #{$delay}s infinite alternate;
}
.container{
    position: relative;
    height: 50vh;
}
.loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > div{
        width: 25px;
        height: 25px;
        margin: 5px;
        border-radius: 50% ;
        display: inline-block;
        background-color: $dark-green;
        position: relative;
        &:nth-child(1){
            @include animation(0) ;
        }
        &:nth-child(2){
            @include animation(0.25) ;
        }
        &:nth-child(3){
            @include animation(0.75) ;
        }
            
    }
}
@keyframes loading {
    0%{
        opacity: 0.5;
        top: -20px;
    }
    100%{
        opacity: 1;
        top: 0;
    } 
}

</style>