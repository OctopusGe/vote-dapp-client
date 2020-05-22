<template>
  <div>
    <v-app-bar app color="dark" dark>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      <v-toolbar-title style="margin-left: 24px; font-size: 25px">基&nbsp;于&nbsp;以&nbsp;太&nbsp;坊&nbsp;的&nbsp;电&nbsp;子&nbsp;投&nbsp;票&nbsp;系&nbsp;统</v-toolbar-title>
      <v-spacer></v-spacer>
      <form action="/">
        <van-search
          style="width: 400px"
          v-model="voteAddress"
          shape="round"
          background="#282828"
          placeholder="请输入合约地址"
          @search="searchVote"
        ></van-search>
      </form>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="{ name: link.name }"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      disable-resize-watcher
    >
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { getVoteInfo } from "../api/vote";

  export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      drawer: false,
      voteAddress : '',
    }
  },
  methods: {
    searchVote(){
      //this.$toast(this.value);
      console.log("voteAddress:" + this.voteAddress);
      getVoteInfo(this.voteAddress).then(response => {
        //console.log("data：" + response.data._data.proposal);
        //let voteInfo = response.data._data;
        //console.log("voteInfo：" +  voteInfo);
        let options = {
          question : response.data._data.proposal,
          answers : response.data._data.candidateList,
          showResults : true
        };

        this.$router.push({
          path: '/vote',

          params: {options: options}
        })
      }).catch(error => {
        console.log(error)
      }) ;
    }
  }
}
</script>

<style lang="scss" scoped></style>
