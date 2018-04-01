<template>
  <div class="w3-margin-top container-listas">
    <div class="w3-cell-row w3-border list">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'List'
}
</script>

<style scoped>
  .container-listas{
    max-height: 70vh;
    overflow: auto;
  }
  .list{
    padding: 16px 16px 
  }
</style>
