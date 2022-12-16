<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container justify-content-between">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" />
        <div>{{ $t("company-name") }}</div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t("home") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="whoWe/">{{
              $t("who-we")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="ourServices/">{{
              $t("our-services")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="partnerSuccess/">{{
              $t("partner-success")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="departments/">{{
              $t("departments")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="contactUs/">{{
              $t("contact-us")
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <div class="lang btn-group">
          <button
            type="button p-2"
            class="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ $t("language") }}
          </button>
          <ul class="dropdown-menu">
            <li data-lang="AR" @click="changeLang">{{ $t("arabic") }}</li>
            <li data-lang="EN" @click="changeLang">{{ $t("english") }}</li>
          </ul>
        </div>
        <div
          class="notification d-flex flex-column justify-content-center mx-2"
        >
          <span class="icon"><i class="fa-solid fa-bell"></i></span>
          <span>0</span>
        </div>
        <div class="cart d-flex flex-column mr-1">
          <span
            class="icon"
            ><i class="fa-solid fa-cart-shopping"></i
          ></span>
          <span>0</span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navBar",
  methods: {
    changeLang(el) {
      localStorage.setItem("lang", el.target.dataset.lang);
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../scss/common/varibles.scss";
nav {
  background-color: $dark-green !important;
  color: $white-color !important;
  .navbar-brand {
    margin: 0;
    padding: 0;
    @media (max-width: 991px) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: small;
    }
    img {
      width: 25px;
      height: 25px;
    }
    div {
      font-size: 18px;
    }
  }

  .navbar-collapse {
    @media (max-width: 991px) {
      position: absolute;
      z-index: 999;
      top: 85px;
      left: 0;
      right: 0;
      width: 100%;
      background-color: rgba($color: $dark-green, $alpha: 0.7);
    }
    .navbar-nav {
      &::after {
        content: "";
        position: absolute;
        top: -39px;
        margin: 0 10px;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent
          rgba($color: $dark-green, $alpha: 0.7) transparent;
      }
    }
    li a.router-link-exact-active {
      font-weight: bold;
      color: $white-color !important;
    }
  }
  .notification,
  .cart {
    position: relative;
    span {
      i {
        font-size: 30px;
        @media (max-width: 567px) {
          font-size: 20px;
        }
      }
      &:nth-child(2) {
        position: absolute;
        position: absolute;
        top: -5px;
        left: -5px;
        background-color: red;
        min-width: 15px;
        font-size: 12px;
      }
    }
  }
  .lang {
    button {
      background-color: transparent !important;
      border: none;
      @media (max-width: 567px) {
        padding: 0;
      }
      &::after {
        margin-right: 0.255em;
      }
    }
    ul {
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      li {
        &:hover {
          background-color: rgba($color: $dark-green, $alpha: 0.7);
          color: $white-color;
          cursor: pointer;
        }
      }
    }
  }
}
</style>