<template>
  <footer class="fixed_footer">
    <div class="content">
      <p> Codded By OMGPROD with ♥</p>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .fixed_footer{
    width: 100%;
    height: 50px;
    background: #cccccc;
    opacity: 0.5;
    position: fixed; left: 0; bottom: 0;
  }

  .fixed_footer p{
    margin-top: 15px;
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 300;
  }
</style>
