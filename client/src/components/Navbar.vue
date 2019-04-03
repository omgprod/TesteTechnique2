<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#"><img src="../assets/stationf.png" style="height: 40px"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#/"><font-awesome-icon icon="calendar-alt" /> Check Room</b-nav-item>
          <b-nav-item href="/#/Reserved" disabled><font-awesome-icon icon="calendar-times" /> Reserved Room</b-nav-item>
          <b-nav-item href="/#/Add"><font-awesome-icon icon="calendar-plus" /> Add New Room</b-nav-item>
          <b-nav-item href="/#/Contact"><font-awesome-icon icon="user-shield" /> Contact Admin</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "Navbar"
    }

</script>

<style scoped>
*{
  font-size: 16px;
}
</style>
