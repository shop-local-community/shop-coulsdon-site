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
                  <span>This is an about page.</span>
                </span>
              </p>
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

export default {
  name: 'about',
  components: {
    MenuButton
  }
}
</script>
