<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/weatherdetails"></router-link>

    <router-view></router-view>
  </div>

</template>


<script>


export default {
  name: 'App'
}
</script>

<style>
@import "@/assets/styles.css";

</style>
