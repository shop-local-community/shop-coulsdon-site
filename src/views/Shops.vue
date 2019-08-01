<template>
  <div>
    <div class="block">
      <MenuButton/>

      <div>
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <p class="lead mt-1">
                <span class="text-ribbon text-ribbon-primary">
                  <span>Shops</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block block-inverse block-transparent py-0 block-grid">
      <div class="block-bg-clip">
        <div class="block-bg">
          <div class="block-bg-img"></div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-3 mb-md-4" v-for="business in businesses" v-bind:key="business.slug">
            <div class="card card-bold card-primary mb-0 box-shadow">
              <img v-if="business.facebook" :src="'https://graph.facebook.com/' + business.facebook + '/picture?type=large'" />
              <div class="card-body pb-5">
                <h4 class="mb-0">{{ business.name }}</h4>
              </div>
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
import businessesData from '@/assets/businesses.json'

export default {
  name: 'shops',
  components: {
    MenuButton
  },
  data () {
    return {
      businesses: businessesData
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@shop-local/shop-local-theme/scss/variables";

.box-shadow {
  box-shadow: 0 0 (min($spacer-x, $spacer-y) / 2) 0 $gray-900;
}

.block-grid {
  margin-top: -($spacer * 1.6);

  img {
    width: 100%;
  }

  .container {
    position: relative;
    top: -($spacer * 4.7);
    z-index: 2;
  }
}
</style>
