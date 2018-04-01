<template>
  <div id="app">
    
    <top-bar></top-bar>
    <router-view/>
    
  </div>
</template>

<script>
import TopBar from './components/commons/TopBar.vue'

export default {
  components:{
    TopBar
  },
  name: 'App'
}
</script>

<style>
  
  body{
    background-image: url("./assets/bg2.jpg");
    background-repeat: no-repeat;
    background-position: center;
  }

</style>
