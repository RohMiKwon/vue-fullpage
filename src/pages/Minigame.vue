<template>
  <section class="section section-minigame">
    <div class="sc-bg"></div>
    <h1>미니게임 섹션</h1>

    <router-link to="/minigame/view">상세 페이지</router-link>

    <transition :name="transitionDirection">
      <router-view class="route"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'minigame',
    data () {
      return {
        transitionDirection: 'slideleft'
      }
    },
    created () {
      console.log('created')
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionDirection = toDepth < fromDepth ? 'slideright' : 'slideleft'
      }
    }
  }
</script>

<style scoped>
</style>
