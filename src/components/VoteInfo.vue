<template>
  <v-container>
    <v-row>
      <v-col offset="2" cols="6" >
        <vue-poll v-bind="options" @addvote="addVote"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import VuePoll from './Vote'

  export default {
    name: "VoteInfo",
    data() {
      return {
        options: {
          showResults : false,
          question: 'What\'s your favourite <strong>JS</strong> framework?',
          answers: [
            { value: 1, text: 'Vue', votes: 53 },
            { value: 2, text: 'React', votes: 35 },
            { value: 3, text: 'Angular', votes: 30 },
            { value: 4, text: 'Other', votes: 10 }
          ]
        }
      }
    },
    components: {
      VuePoll
    },
    methods: {
      addVote(obj){
        console.log('You voted ' + obj.value + '!');
      }
    }
  }
</script>
