<template>
  <div>
    <div class="block block-hero">
      <MenuButton/>

      <div class="block-sm-middle block-xs-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <h1 class="block-title mb-4">
                <img src="../assets/logo-white.png" class="text-ribbon text-ribbon-primary img-fluid" alt="Shop Coulsdon">
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block block-inverse block-businesses">
      <div>
        <div class="container">
          <div class="row mb-4">
            <div class="col-lg-6">
              <h1 class="block-title mb-4">
                <span class="text-ribbon">
                  <span class="text-serif">Shop Independant<br>Save Time &amp; Money</span>
                </span>
              </h1>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <BusinessCard v-bind:business="{
                name: 'Cozy Glow',
                description: 'Description…'
              }"/>
            </div>

            <div class="col-lg-4">
              <BusinessCard v-bind:business="{
                name: 'Trendy Lane',
                description: 'Description…'
              }"/>
            </div>

            <div class="col-lg-4">
              <BusinessCard v-bind:business="{
                name: 'Little Lambs Soft Play',
                description: 'Description…'
              }"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuButton from '@/components/MenuButton.vue'
import BusinessCard from '@/components/BusinessCard.vue'

export default {
  name: 'home',
  components: {
    MenuButton,
    BusinessCard
  }
}
</script>

<style scoped lang="scss">
@import "~@shop-local/shop-local-theme/scss/variables";

.block-hero {
  background-image: url(../assets/img/boxed-water-is-better-1464058-unsplash.jpg);

  .block-title {
    .text-ribbon {
      background-blend-mode: multiply;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  .row {
    margin-bottom: $spacer-y * 3;
  }
}

.block-grid {
  margin-top: $spacer-y;

  .container {
    position: relative;
    top: -($spacer-y * 3);
    z-index: 2;
  }

  img {
    width: 100%;
  }
}

.block-businesses {
  background-color: var(--secondary);
}
</style>
