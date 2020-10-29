<template>
  <footer class="footer fixed-bottom mt-auto py-3">
    <div class="container">
      <span class="text-muted float-right">
        Powered By <a target="_blank" href="https://sapns2.com/">SAP NS2</a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
}
.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}
</style>