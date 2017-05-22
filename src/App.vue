<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VueHeader from './components/Header'

export default {
  name: 'app',
  components: {
    VueHeader
  }
}
</script>

<style>
</style>
