<template>
  <div id="doctor-detail">
    <Header :title="title"></Header>
    <h1>这是医生详情页面</h1>
  </div>
</template>

<script>
  import Header from '../header/header'

  export default {
    name: 'doctor-details',
    data() {
      return {
        title: '医生详情'
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>
