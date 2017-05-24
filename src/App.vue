<template>
   <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">vue-cli-app</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">vue-cli-app</span>
      <nav class="mdl-navigation">
        <router-link to="/lists" class="mdl-navigation__link">Go to Foo</router-link>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
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
import VueFooter from './components/Footer'
import VueList from './components/List'

export default {
  name: 'app',
  components: {
    VueHeader,
    VueFooter,
    VueList
  }
}
</script>

<style>
</style>
