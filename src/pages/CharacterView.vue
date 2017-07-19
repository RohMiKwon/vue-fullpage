<template>
  <section class="page">
    <h1>캐릭터 상세</h1>
    <router-link to="/character">뒤로</router-link>
  </section>
</template>

<script>
  export default {
    name: 'characterView',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  section {
    background: #fff;
  }
</style>
