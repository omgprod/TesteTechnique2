<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Rooms Available: </h2>
    <TableSearch></TableSearch>
  </div>
</template>

<script>
    export default {
        name: "Index",
      components: {
          TableSearch: () => import("./TableSearch")
      },
      data () {
        return {
          msg: "Reserv'App",
          loading: null,
          error: "",
        }
      },
      methods: {

      },
      mounted() {

      }
    }
</script>

<style scoped>
  *{
    color: white;
  }
  h1 {
    margin-top: 2%;
    text-shadow: 0 1px 0 #eee,
    0 2px 0 #e5e5e5,
    -1px 3px 0 #C8C8C8,
    -1px 4px 0 #C1C1C1,
    -2px 5px 0 #B9B9B9,
    -2px 6px 0 #B2B2B2,
    -2px 7px 2px rgba(0,0,0, 0.6),
    -2px 7px 8px rgba(0,0,0, 0.2),
    -2px 7px 45px rgba(0,0,0, 0.4);
  }
  h2 {
    text-shadow: -1px 0 0 rgba(0, 0, 0, 0.8),
    1px 0 0 rgba(0, 0, 0, 0.8),
    0 -1px 0 rgba(0, 0, 0, 0.8),
    0 1px 0 rgba(0, 0, 0, 0.8);
     }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
