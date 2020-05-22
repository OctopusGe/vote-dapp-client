<template>
    <v-col cols="12">
      <div v-for="voteInfo in voteInfoList" :key="`${voteInfo.id}`">
        <div class="vote-container" data-id="voteInfo.id" data-name="voteInfo.proposal">
          <div class="image-area">
            <div class="share-img">
              <v-icon size="140" color="#96ACFF">fas fa-poll</v-icon>
            </div>
          </div>
          <div class="text-area">
            <div class="text-content">
              <h4 class="vote-title">提案：{{ voteInfo.proposal }}</h4>
              <p class="vote-address" style="word-break:break-word;">合约地址：{{ voteInfo.contractAddress }}</p>
            </div>
            <div class="text-desc">{{ voteInfo.totalVoter }}人参与</div>
            <div class="vote-btn-box">
              <div class="text-center">
                <v-btn rounded large color="primary" dark style="font-size: 20px">投票</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <v-pagination
          v-model="pageNo"
          :length="totalPage"
          circle
          :total-visible="7"
          @input="next"
        ></v-pagination>
      </div>
    </v-col>
</template>

<script>
  import { getVoteList } from "../api/vote";

  export default {
      name: "VoteItem",
      props: {
        voteInfoList: {
          type: Array,
          required: true
        },
        totalPage: {
          type: String,
          required: false
        },
        pageNo: {
          type: String,
          required: false
        },
        msg: {
          type: String,
          required: false
        }
      },
      data() {
        return {
          items : [],
        }
      },
      methods:{
        next(page){
          console.log(page);
          getVoteList({pageNo:page}).then(response => {
            this.voteInfoList = response.data._data.voteInfoList;
            console.log(this.voteInfoList)
          }).catch(error => {
            console.log(error)
          });
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/vote-item.css";
</style>
