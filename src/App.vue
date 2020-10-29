<template>
  <div id="app">
    <AppHeader />
    <main class="flex-shrink-0 mb-5">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import '~bootswatch/dist/flatly/bootstrap.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';

main > .container {
  padding: 80px 15px 0;
}
</style>
