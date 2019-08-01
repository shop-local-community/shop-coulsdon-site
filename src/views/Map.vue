<template>
  <div class="block block-fill-height block-map">
    <MenuButton/>

    <LocalMap class="block-background" id="main-map" v-bind:businesses="businesses" v-bind:carParks="carParks" />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuButton from '@/components/MenuButton.vue'
import LocalMap from '@/components/LocalMap.vue'
import businessesData from '@/assets/businesses.json'
import carParksData from '@/assets/car-parks.json'

export default {
  name: 'mainMap',
  components: {
    MenuButton,
    LocalMap
  },
  data () {
    return {
      businesses: businessesData,
      carParks: carParksData
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@shop-local/shop-local-theme/scss/variables";

.block-map {
  height: 100vh;
}
</style>
