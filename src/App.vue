<template>
    <div id="app">
      <v-touch tag="div" id="touch"
               @swipeleft="onSwipe"
               @swiperight="onSwipe"
               @swipedown="onSwipe"
               @swipeup="onSwipe">
          <transition :name="transitionDirection">
              <router-view class="route"></router-view>
          </transition>
      </v-touch>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      scrollPosition: 0,
      transitionDirection: 'slideup'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      const toOrder = to.meta.order
      const fromOrder = from.meta.order
      this.transitionDirection = toDepth < fromDepth ? 'slideup' : 'slidedown'
      if (toDepth === fromDepth) {
        this.transitionDirection = toOrder < fromOrder ? 'slideup' : 'slidedown'
      }
    }
  },
  computed: {
    getCurrentRouteInfo () {
      let routes = this.$router.options.routes
      let index
      let childrenRoute
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].name === this.$route.name) {
          if (routes[i].children) {
            childrenRoute = routes[i].children[0] // 자식 route 가 있을 경우
          }
          index = i
          break
        } else {
          if (routes[i].children) {
            if (routes[i].children[0].name === this.$route.name) { // 현재 view 페이지일 경우
              index = i
              break
            }
          }
        }
      }
      return {
        index: index,
        childrenRoute: childrenRoute
      }
    }
  },
  methods: {
    onSwipe (e) {
      let eventType = e.type
      let nextRoute = ''
      let routes = this.$router.options.routes
      let currentRouteInfo = this.getCurrentRouteInfo
      let routeIndex = currentRouteInfo.index
      let childrenRoute = currentRouteInfo.childrenRoute
      switch (eventType) {
        case 'swipeup':
          nextRoute = routes[routeIndex + 1]
          break
        case 'swipedown':
          nextRoute = routes[routeIndex - 1]
          break
        case 'swipeleft':
          nextRoute = childrenRoute
          break
        case 'swiperight':
          nextRoute = routes[routeIndex]
          break
      }
      if (!nextRoute || !nextRoute.name) {
        return
      }
      this.$router.push({ name: nextRoute.name })
    }
  }
}
</script>

<style lang="scss">
/*@import '~@/assets/styles/preorder.scss';*/

html, body {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

#app {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
}

h1 {
  margin: 0;
}

section {
  width: 100%;
  height: 100%;
  transition: all .75s;
}

.route {
  position: absolute;
  top: 0;
  left: 0;
}

.slidedown-enter, .slideup-leave-active {
  transform: translate3d(0px,100%,0px);
}

.slideup-enter, .slidedown-leave-active {
  transform: translate3d(0,-100%,0px);
}

.slideleft-enter, .slideright-leave-active {
  transform: translate3d(100%,0px,0px);
}

.slideright-enter, .slideleft-leave-active {
  transform: translate3d(100%,0px,0px);
}

#touch {
  width: 100%;
  height: 100%;
}

.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
