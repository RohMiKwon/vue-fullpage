<template>
  <!--<iscroll-view ref="scrollView" class="scroll-view" @pullUp="onPullUp" @pullDown="onPullDown" :options="{mouseWheel: true}">-->
    <!--<div style="width:100%; height: 100%;">-->
      <section class="section section-intro">
        <h1>인트로섹션</h1>
        <div id="menu-wrap" class="menu-wrap">
          <div id="flip-menu" class="flip-menu" style="display: none">
            <div class="flip-container character">
              <a href="#character" class="flipper">
                <span class="front"></span>
                <span class="back"></span>
              </a>
            </div>
            <div class="flip-container minigame">
              <a href="#minigame" class="flipper">
                <span class="front"></span>
                <span class="back"></span>
              </a>
            </div>
          </div>

          <ul>
            <li v-for="menu in menus">
              <router-link v-bind:to="menu.id">{{ menu.text }}</router-link>
            </li>
          </ul>

          <div id="swiper-menu" class="swiper-container menu-list" style="display: none">
            <div class="swiper-wrapper">
              <template v-for="menu in menus">
                <div class="swiper-slide" v-bind:data-section-id="menu.id">
                  <span class="menu" v-bind:class="menu.id">{{ menu.text }}</span>
                </div>
              </template>
            </div>
          </div>

          <div>
            <b-input-group left="$" right=".00">
              <b-form-input></b-form-input>
            </b-input-group>

            <br>

            <b-input-group size="lg" left="$" right=".00">
              <b-form-input></b-form-input>
            </b-input-group>

            <br>

            <b-input-group left="Username">
              <b-form-input></b-form-input>

              <!-- Attach Right button -->
              <b-input-group-button slot="right">
                <b-dropdown text="Dropdown" variant="success" right>
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Action</b-dropdown-item>
                </b-dropdown>
              </b-input-group-button>

            </b-input-group>
          </div>

          <!-- input-group-1.vue -->
        </div>
      </section>
    <!--</div>-->
  <!--</iscroll-view>-->
</template>

<script>
  export default {
    name: 'intro',
    data () {
      return {
        menus: [
          { id: '', text: '사전예약' },
          { id: 'minigame', text: '미니게임' },
          { id: 'character', text: '캐릭터생성' },
          { id: 'media', text: '미디어' }
        ]
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
      onPullUp () {
        console.log('pull up')
        let nextRoute = ''
        let routes = this.$router.options.routes
        let currentRouteInfo = this.getCurrentRouteInfo
        let routeIndex = currentRouteInfo.index

        nextRoute = routes[routeIndex + 1]

        if (!nextRoute || !nextRoute.name) {
          return
        }
        this.$router.push({ name: nextRoute.name })
      },
      onPullDown () {
        console.log('pull down')
        let nextRoute = ''
        let routes = this.$router.options.routes
        let currentRouteInfo = this.getCurrentRouteInfo
        let routeIndex = currentRouteInfo.index

        nextRoute = routes[routeIndex - 1]

        if (!nextRoute || !nextRoute.name) {
          return
        }
        this.$router.push({ name: nextRoute.name })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
