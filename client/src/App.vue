<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <notifications group="notify" position="bottom right"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Navbar, Footer},
}
</script>

<style>
  html, body { height: 100%; }
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(to right top, #d16ba5, #e16f9c, #ed7491, #f67c87, #fc867d, #ff9275, #ff9f6e, #ffac69, #ffbe66, #ffd166, #ffe469, #f9f871);  text-align: center;
  color: #2c3e50;
}
</style>
