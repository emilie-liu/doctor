<template>
  <div id="header">
    <span>{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "header",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
