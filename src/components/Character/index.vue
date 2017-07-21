<template>
  <section class="section section-character">
    <div class="sc-bg"></div>
    <h1>캐릭터 생성 섹션</h1>

    <router-link to="/character/view">상세 페이지</router-link>

    <transition :name="transitionDirection">
      <router-view class="route"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'character',
    data () {
      return {
        transitionDirection: 'slideleft'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionDirection = toDepth < fromDepth ? 'slideleft' : 'slideright'
      }
    }
  }
</script>

<style scoped>

</style>
