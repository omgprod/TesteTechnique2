<template>
  <div class="hello">
    <h2 style="margin-top: 10%">Find me on: </h2>
    <a href="https://www.github.com/omgprod" style="text-decoration: none">GitHub</a>
    <a href="https://www.brian-haggerty.net" style="text-decoration: none">Portfolio</a>
    <a href="https://www.linkedin.com/in/haggerty-brian" style="text-decoration: none">LinkedIn</a>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
  html, body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  p{
    font-size: 20px;
    color: #292929;
    text-shadow: 0 0 7px rgba(0,0,0, 0.5);
  }

  a{
    font-size: 30px;
    color: #292929;
    text-shadow: 0 1px 0 #eee,
    0 2px 0 #e5e5e5,
    -1px 3px 0 #C8C8C8,
    -1px 4px 0 #C1C1C1,
    -2px 5px 0 #B9B9B9,
    -2px 6px 0 #B2B2B2,
    -2px 7px 2px rgba(0,0,0, 0.6),
    -2px 7px 8px rgba(0,0,0, 0.2),
    -2px 7px 45px rgba(0,0,0, 0.4);
    text-decoration: none
  }

  .card-body{
    background-color: #eeeeee;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.47);
  }

  h2{
    margin-bottom: 2%;
    color: #eeeeee;
    text-shadow: -1px 0 0 rgba(0, 0, 0, 0.8),
    1px 0 0 rgba(0, 0, 0, 0.8),
    0 -1px 0 rgba(0, 0, 0, 0.8),
    0 1px 0 rgba(0, 0, 0, 0.8);
  }
</style>
