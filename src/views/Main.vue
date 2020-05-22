<template>
  <v-app>
    <NavBar :links="links" />
    <v-content color="#DAD5D1">
      <router-view />
    </v-content>
    <Footer :links="links" />
  </v-app>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'main',

  components: {
    // HelloWorld,
    NavBar,
    Footer
  },
  data: () => ({
    links: [
      {
        label: '首页',
        name: 'Home'
      },
      // {
      //   label: 'Login',
      //   name: 'Login'
      // },
      // {
      //   label: 'Signup',
      //   name: 'Signup'
      // },
      // {
      //   label: '投票列表',
      //   name: 'Vote'
      // },
      // {
      //   label: '我的投票',
      //   name: 'Voting'
      // },
      // {
      //   label: '历史投票',
      //   name: 'Auth'
      // },
      // {
      //   label: '个人中心',
      //   name: 'Dashboard'
      // }
      {
        label: '投票列表',
        name: 'VoteList'
      },
      {
        label: '我的投票',
        name: 'MyVote'
      },
      {
        label: '历史投票',
        name: 'VoteHistory'
      },
      {
        label: '个人中心',
        name: 'Personal'
      }
    ]
  })
}
</script>
