<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <router-link class="navbar-brand" to="/home">
        <img src="../assets/NS2-logo-white.svg" alt="NS2 logo" width="86" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        @click="visible = !visible"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <b-collapse v-model="visible" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/table">Table</router-link>
          </li>
        </ul>
      </b-collapse>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      visible: false
    }
  }
}
</script>