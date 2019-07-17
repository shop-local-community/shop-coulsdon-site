<template>
  <div class="card mb-3 mb-lg-0">
    <div class="card-body">
      <h3 class="card-title">{{ business.name }}</h3>

      <p class="text-serif mb-1">
        <em>{{ business.description }}</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessCard',
  props: {
    business: Object
  }
}
</script>

<style scoped lang="scss">
h4 {
  font-weight: 400;
}
</style>
