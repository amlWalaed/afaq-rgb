<template>
  
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >

      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="overlay"></div>
        <div class="carousel-item active">
          <img
            src="https://wallpaperaccess.com/full/2489629.jpg"
            class="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1321255356/photo/rack-with-stylish-womens-summer-clothes-concept-for-shopping-store-beauty-fashion.jpg?b=1&s=170667a&w=0&k=20&c=IDLZSxVy_2QghT75wHJ-RzBxuf0Kj3tfmqPwN_9SBNU="
            class="d-block w-100 h-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://thumbs.dreamstime.com/b/flat-lay-various-cozy-woman-s-clothes-accessories-flat-lay-various-cozy-woman-s-clothes-accessories-white-128941045.jpg"
            class="d-block w-100 h-100"
            alt="..."
          />
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Carousel-component",
  mounted(){
    let images = document.querySelectorAll('.carousel-item');
    let indicators = document.querySelectorAll('.carousel-indicators button');
    let count=0
    setInterval(()=>{
        if(count < images.length){
            indicators.forEach((indicator) => {
                indicator.classList.remove('active')
            })
            images.forEach((image) =>{
                image.classList.remove('active');
            })
            indicators[count].classList.add('active');
            images[count].classList.add('active');
            count += 1
        }else{
            count = 0
        }
    }, 4000)
  }

};
</script>
<style lang="scss" scoped>
@import '@/scss/common/_varibles.scss';
.carousel{
    max-height: 70vh;
    position: relative;
    overflow: hidden;
    .carousel-inner{
      max-height: 70vh;
      border-radius: $border-radius;
      
    }
    img{
        width: 100%;
        height: 100%;
    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9;
    }
    .carousel-indicators{
        z-index: 10;
        .active{
          background-color: $light-green;
        }
    }
}
</style>
