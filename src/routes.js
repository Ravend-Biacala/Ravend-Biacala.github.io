import home from "./Home.vue"
import profile from "./Profile.vue"
import aiopenmind from "./AIOpenMind.vue"
import ludo from "./Ludo.vue"
import tictactoe from "./TicTacToe.vue"
import karaoke from "./Karaoke.vue"
import beatsmixer from "./BeatsMixer.vue"

export const routes = [
  { path: '/', component: home},
  { path: '/profile', component: profile},
  { path: '/aiopenmind', component: aiopenmind},
  { path: '/ludo', component: ludo},
  { path: '/tictactoe', component: tictactoe},
  { path: '/karaoke', component: karaoke},
  { path: '/beatsmixer', component: beatsmixer}
]