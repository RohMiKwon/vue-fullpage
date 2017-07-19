import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/pages/Intro'
import Minigame from '@/pages/Minigame'
import MinigameView from '@/pages/MinigameView'
import Character from '@/pages/Character'
import CharacterView from '@/pages/CharacterView'
import Media from '@/pages/Media'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro,
      meta: {
        order: 1
      }
    },
    {
      path: '/minigame',
      name: 'minigame',
      component: Minigame,
      meta: {
        order: 2
      },
      children: [
        {
          path: 'view',
          name: 'minigameView',
          component: MinigameView
        }
      ]
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
      meta: {
        order: 3
      },
      children: [
        {
          path: 'view',
          name: 'characterView',
          component: CharacterView
        }
      ]
    },
    {
      path: '/media',
      name: 'media',
      component: Media,
      meta: {
        order: 4
      }
    }
  ]
})
