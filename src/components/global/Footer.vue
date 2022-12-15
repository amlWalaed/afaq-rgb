<template>
  <footer>
    <div class="container">
      <div class="row">
        <div
          class="
            footer-content
            col-12
            my-5
            d-flex
            justify-content-center
            flex-lg-row
            flex-column
          "
        >
        <div class="col-lg-3 col-md-5 col-sm-12">
            <router-link class="brand" to="/">
              <img src="@/assets/logo.png" />
            </router-link>
          </div>
          <div class="links col-lg-3 col-md-5 col-sm-12">
            <div class="header fw-bold my-2">
              <router-link
                class="brand d-flex align-items-center justify-content-center"
                to="/"
                >{{ $t("company-name") }}</router-link
              >
            </div>
            <ul class="d-inline-flex flex-column flex-wrap">
              <li>
                <router-link to="/">{{ $t("home") }}</router-link>
              </li>
              <li>
                <router-link to="whoWe/">{{ $t("who-we") }}</router-link>
              </li>
              <li>
                <router-link to="ourServices/">{{
                  $t("our-services")
                }}</router-link>
              </li>
              <li>
                <router-link to="partnerSuccess/">{{
                  $t("partner-success")
                }}</router-link>
              </li>
              <li>
                <router-link to="departments/">{{
                  $t("departments")
                }}</router-link>
              </li>
              <li>
                <router-link to="contactUs/">{{
                  $t("contact-us")
                }}</router-link>
              </li>
            </ul>
          </div>
          
          <div class="col-lg-6 col-md-12">
            <div class="header fw-bold my-2">{{$t('subscribe')}}</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              magni temporibus sunt animi mollitia nemo quam, numquam quod
              officia accusantium veritatis voluptate invento
            </p>
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  :placeholder="$t('enter-email')"
                />
                <div class="input-group-prepend">
                  <div
                    class="input-group-text"
                  >
                  <i class="fa-regular fa-paper-plane"></i>
                  </div>
                </div>
              </div>
              <div class="header">{{$t('follow-us-in-social-media')}}</div>
              <div class="media m-auto my-2">
                <router-link to="#" class="mx-1"><i class="fa-brands fa-facebook fa-2xl"></i></router-link >
                <router-link to="#" class="mx-1"><i class="fa-brands fa-square-twitter fa-2xl"></i></router-link >
                <router-link to="#" class="mx-1"><i class="fa-brands fa-linkedin fa-2xl"></i></router-link >
                <router-link to="#" class="mx-1"><i class="fa-brands fa-google fa-2xl"></i></router-link >
                </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ownership">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <div class="developer-name mx-2">aml walaed</div>
            <div class="developer-email">amlwalaed@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "footer-component",
};
</script>
<style lang="scss" scoped>
@import "./../../scss/common/varibles.scss";
footer {
  background-color:white !important;
  color: black !important;
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: $background-color-nav;
    }
  }
  .links {
    .header {
      img {
        max-width: 75px;
        max-height: 75px;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding: 5px;
      }
    }
  }
  .input-group {
    overflow: hidden;
    border-radius: 10px;
    border:1px solid $background-color-nav;
    input{
      border: none;
    }
    .input-group-prepend{
      width: 7%;
      @media (max-width: 567px){
        width: 10%;
        padding: 0;
      }
      .input-group-text{
        height: 100%;
        color: white!important;
        background-color: $background-color-nav !important;
        border-radius:0 ;
        border: none;
        border: 1px solid $background-color-nav ;
      }
    }

  }

  .media{
    i{
      color: $background-color-nav !important;
    }
  }
  .ownership{
    background-color: $links-collapse-color !important;
    color: white  !important;
    
  }
}
</style>
