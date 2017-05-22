<template>
  <div id="app" class="mdl-layout__container">
    <div class="mdl-layout">
      <router-view></router-view>
      <vue-header></vue-header>
      <main class="mdl-layout__content">
        <div class="page-content">
        </div>
      </main>
      <vue-footer></vue-footer>
    </div>
  </div>
</template>

<script>
import VueHeader from './components/Header'
import VueFooter from './components/Footer'

export default {
  name: 'app',
  components: {
    VueHeader,
    VueFooter
  }
}
</script>

<style>
</style>
