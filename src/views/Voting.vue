<template>
  <v-container>
    <v-row>
      <v-col>
        <v-form ref="votingForm">
          <v-row justify-center>
            <v-col
              v-for="(column, $columnIndex) in board.columns"
              :key="$columnIndex"
              cols="4"
              class="ma-auto"
            >
              <v-card>
                <v-card-title>
                  {{ column.name }}
                </v-card-title>
                <v-card-subtitle>
                  Selection Limit : {{ column.votingLimit }}
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                  <v-checkbox
                    v-for="(task, $taskIndex) in column.tasks"
                    :key="$taskIndex"
                    :label="task.name"
                    v-model="selected[$columnIndex]"
                    :value="task.name"
                    @click="votingLimitValidation($event, column, $columnIndex)"
                    class="checkbox"
                    required
                  >
                  </v-checkbox>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-btn class="mr-4 float-right" @click="submit">submit</v-btn>
          Total Votes: {{ board.totalVotes }}

          <v-snackbar v-model="snackbar" :class="classes">
            {{ msg }}
            <v-btn text color="primary" @click="snackbar = false">Close</v-btn>
          </v-snackbar>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selected: [],
      msg: '',
      snackbar: false,
      classes: ''
    }
  },
  computed: {
    ...mapState(['board'])
  },
  created() {
    this.board.columns.forEach(() => this.selected.push([]))
  },
  methods: {
    votingLimitValidation(e, column, columnIndex) {
      if (this.selected[columnIndex].length > column.votingLimit) {
        this.selected[columnIndex].shift()
      }
    },
    submit() {
      let temp = this.selected.some(column => column.length === 0)
      if (temp) {
        this.msg = 'Validation Error'
        this.classes = 'red--text'
        this.snackbar = true
      } else {
        this.$store.commit('UPDATE_VOTES', { selected: this.selected })
        this.msg = 'Success'
        this.classes = 'green--text'
        this.snackbar = true

        this.$refs['votingForm'].reset()
      }
    }
  }
}
</script>

<style scoped>
.checkbox {
  /* background-color: #eeeeee; */
}
.checkbox :hover {
  background-color: #bdbdbd;
}
</style>
