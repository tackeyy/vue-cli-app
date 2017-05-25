<template>
   <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <vue-header></vue-header>
    <vue-header-toggle></vue-header-toggle>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueHeader from './components/Header'
import VueHeaderToggle from './components/HeaderToggle'
import VueFooter from './components/Footer'
import VueList from './components/List'

export default {
  name: 'app',
  components: {
    VueHeader,
    VueHeaderToggle,
    VueFooter,
    VueList
  }
}
</script>

<style>
</style>
