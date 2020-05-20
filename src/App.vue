<template>

  <div id="app">
    <router-view/>
  </div>

<!--  <v-app>-->
<!--    <NavBar v-if="$route.path != '/login' && $route.path != '/register'" :links="links" />-->
<!--    <v-content>-->
<!--      <router-view />-->
<!--    </v-content>-->
<!--    <Footer v-if="$route.path != '/login' && $route.path != '/register'" :links="links" />-->
<!--  </v-app>-->
</template>

<script>
  //import NavBar from '@/components/NavBar.vue'
  //import Footer from '@/components/Footer.vue'
  // export default {
  //   name: 'App',
  //
  //   components: {
  //     // HelloWorld
  //     //NavBar,
  //     //Footer
  //   },
  //   data: () => ({
  //     links: [
  //       {
  //         label: '首页',
  //         name: 'Home'
  //       },
  //       // {
  //       //   label: 'Login',
  //       //   name: 'Login'
  //       // },
  //       // {
  //       //   label: 'Signup',
  //       //   name: 'Signup'
  //       // },
  //       // {
  //       //   label: '投票列表',
  //       //   name: 'Vote'
  //       // },
  //       // {
  //       //   label: '我的投票',
  //       //   name: 'Voting'
  //       // },
  //       // {
  //       //   label: '历史投票',
  //       //   name: 'Auth'
  //       // },
  //       // {
  //       //   label: '个人中心',
  //       //   name: 'Dashboard'
  //       // }
  //       {
  //         label: '投票列表',
  //         name: 'VoteList'
  //       },
  //       {
  //         label: '我的投票',
  //         name: 'MyVote'
  //       },
  //       {
  //         label: '历史投票',
  //         name: 'VoteHistory'
  //       },
  //       {
  //         label: '个人中心',
  //         name: 'Personal'
  //       }
  //     ]
  //   })
  // }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
