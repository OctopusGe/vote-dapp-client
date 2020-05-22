<template>
  <div class="vue-poll">
    <h3 class="qst" v-html="question"></h3>
    <div class="ans-cnt">
      <div v-for="(a,index) in calcAnswers" :key="index" :class="{ ans: true, [a.custom_class]: (a.custom_class) }">

        <template v-if="!finalResults">

          <div v-if="!visibleResults" :class="{ 'ans-no-vote noselect': true, active: a.selected }" @click.prevent="handleVote(a)" >
            <span class="txt" v-html="a.text"></span>
          </div>
          <div v-else :class="{ 'ans-voted': true, selected: a.selected }" >
            <span v-if="a.percent" class="percent" v-text="a.percent"></span>
            <span class="txt" v-html="a.text"></span>
          </div>

          <span class="bg" :style="{ width: visibleResults ? a.percent : '0%' }"></span>
        </template>
        <template v-else>
          <div class="ans-voted final">
            <span v-if="a.percent" class="percent" v-text="a.percent"></span>
            <span class="txt" v-html="a.text"></span>
          </div>
          <span :class="{ bg: true, selected: mostVotes == a.votes }" :style="{ width: a.percent }"></span>
        </template>

      </div>
    </div>
    <div class="votes" v-if="showTotalVotes && (visibleResults || finalResults)" v-text="totalVotesFormatted + ' votes'"></div>

    <template v-if="!finalResults && !visibleResults && multiple && totalSelections > 0">
      <a href="#" @click.prevent="handleMultiple" class="submit" v-text="submitButtonText"></a>
    </template>

  </div>
</template>

<script>
  export default{
    name: 'Poll',
    props: {
      question: {
        type: String,
        required: true
      },
      answers: {
        type: Array,
        required: true
      },
      showResults: {
        type: Boolean,
        default: false
      },
      showTotalVotes: {
        type: Boolean,
        default: true
      },
      finalResults: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      },
      submitButtonText: {
        type: String,
        default: 'Submit'
      },
      customId: {
        type: Number,
        default: 0
      }
    },
    data(){
      return{
        visibleResults: JSON.parse(this.showResults)
      }
    },
    computed: {
      totalVotes(){
        let totalVotes = 0
        this.answers.filter(a=>{
          if (!isNaN(a.votes) && a.votes > 0)
            totalVotes += parseInt(a.votes)
        })
        return totalVotes
      },
      totalVotesFormatted(){
        return this.totalVotes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      mostVotes(){
        let max = 0
        this.answers.filter(a=>{
          if (!isNaN(a.votes) && a.votes > 0 && a.votes >= max)
            max = a.votes
        })

        return max
      },
      calcAnswers(){

        if (this.totalVotes === 0)
          return this.answers.map(a=>{
            a.percent = '0%'
            return a
          })

        //Calculate percent
        return this.answers.filter(a=>{
          if (!isNaN(a.votes) && a.votes > 0)
            a.percent = ( Math.round( (parseInt(a.votes)/this.totalVotes ) * 100) ) + '%'
          else
            a.percent =  '0%'

          return a
        })
      },
      totalSelections(){
        return this.calcAnswers.filter(a => a.selected).length
      }
    },
    methods: {
      handleMultiple(){

        let arSelected = []
        this.calcAnswers.filter(a=>{
          if (a.selected){
            a.votes++
            arSelected.push({ value: a.value, votes: a.votes })
          }
        })

        this.visibleResults = true

        let obj =  { arSelected: arSelected , totalVotes: this.totalVotes }

        if (this.customId)
          obj.customId = this.customId

        this.$emit('addvote', obj)
      },
      handleVote(a){ //Callback

        if (this.multiple){

          if (a.selected === undefined)
            console.log("Please add 'selected: false' on the answer object")

          a.selected = !a.selected
          return
        }

        a.votes++
        a.selected = true
        this.visibleResults = true

        let obj = { value: a.value, votes: a.votes, totalVotes: this.totalVotes }

        if (this.customId)
          obj.customId = this.customId

        this.$emit('addvote', obj)
      }
    }
  }
</script>

<style>
  @import url('../assets/css/vote.css');
</style>
