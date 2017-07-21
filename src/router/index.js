import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/index'
import Minigame from '@/components/Minigame/index'
import MinigameView from '@/components/Minigame/view'
import Character from '@/components/Character/index'
import CharacterView from '@/components/Character/view'
import Media from '@/components/Media/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
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
