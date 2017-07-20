<template>
  <section class="section section-minigame">
    <div class="sc-bg"></div>
    <h1>미니게임 섹션</h1>

    <router-link to="/minigame/view">상세 페이지</router-link>

    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

    <!-- Main UI -->
    <div class="mt-3 mb-3">
      Submitted Names:
      <ul>
        <li v-for="n in names">{{n}}</li>
      </ul>
    </div>

    <!-- Modal Component -->
    <b-modal id="modal1" title="Submit your name" @ok="submit" @shown="clearName">

      <form @submit.stop.prevent="submit">
        <b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>
      </form>

    </b-modal>

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
        name: '',
        names: [],
        transitionDirection: 'slideleft'
      }
    },
    methods: {
      clearName () {
        this.name = ''
      },
      submit (e) {
        if (!this.name) {
          alert('Please enter your name')
          return e.cancel()
        }

        this.names.push(this.name)
        this.name = ''
      }
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
