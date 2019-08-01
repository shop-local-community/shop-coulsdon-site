<template>
  <div id="app">
    <div id="sidebar" class="stage-shelf">
      <ul class="nav nav-bordered nav-stacked flex-column">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/map" class="nav-link">Map</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/shops" class="nav-link">Shops</router-link>
        </li>
      </ul>
    </div>

    <div id="stage" class="stage">
      <router-view/>

      <div class="block block-inverse accent-primary">
        <div class="container">
          <div class="row text-serif">
            <div class="col-md-2">
              <ul class="list-unstyled list-spaced">
                <li>
                  <h4>Press</h4>
                </li>

                <li class="text-muted">
                  <em>Overview</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$icon-font-path: "~@shop-local/shop-local-theme/fonts/";
@import "~@shop-local/shop-local-theme/scss/toolkit-bold";
</style>
