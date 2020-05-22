<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="1">
        <VoteItem v-bind="options"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import VoteItem from '../components/VoteItem'
  import { getVoteList } from "../api/vote";

  export default {
    name: "VoteList",
    components: {
      VoteItem
    },
    data() {
      return {
        options: {
          voteInfoList: [],
          totalPage: "",
          pageNo: "",
          msg: '获取失败'
        }
      }
    },
    created() {
      this.getVoteInfoList();
    },
    methods: {
      async getVoteInfoList(){
        //const token = await getSession('token');
        // console.log("token: " + token);
        const result = await getVoteList();
        // console.log(result.data._data);
        if ('200' === result.data._code) {
          this.options.voteInfoList = result.data._data.voteInfoList;
          this.options.totalPage = result.data._data.totalPage;
          this.options.pageNo = result.data._data.pageNo;
          console.log(this.voteInfoList);
        } else {
          this.$toast('获取投票列表失败');
        }

        // this.$http.post(http+'/api/vote/getVoteInfoList', {token: window.sessionStorage.getItem('token')}).then(function({data: res}){
        //   if('200' === res._code){
        //     console.log(this.voteInfoList);
        //     this.voteInfoList = res._data.voteInfoList;
        //     this.totalPage = res._data.totalPage;
        //     // 设置token，记录登录状态
        //   }
        // })
      }
    }
  }
</script>

<style lang="css">

</style>
