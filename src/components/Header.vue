<template>
  <div>
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
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">HTML5 Tutorial</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="" style="color:gray">Home</a>
          <a class="mdl-navigation__link" href="" style="color:gray">About</a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">HTML5 Tutorial</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Home</a>
        <a class="mdl-navigation__link" href="">About</a>
      </nav>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
