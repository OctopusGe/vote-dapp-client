<template>
  <div class="container">
    <h1>Dashboard</h1>
    Total Votes: {{ board.totalVotes }}
    <template v-for="(column, $columnIndex) in board.columns">
      <v-data-table
        :caption="column.name"
        :key="$columnIndex"
        :headers="headers"
        :items="column.tasks"
        class="elevation-1"
        @click:row="selectRow"
        hide-default-footer
      ></v-data-table>
    </template>
    <v-snackbar v-model="snackbar">
      You have selected {{ currentItem }}
      <v-btn flat color="primary" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'DashboardPage',
    data() {
      return {
        snackbar: false,
        currentItem: '',
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {text: 'Votes', value: 'votes'}
        ]
      }
    },
    computed: {
      ...mapState(['board'])
    },
    methods: {
      selectRow(event) {
        this.snackbar = true
        this.currentItem = event.name
      }
    }
  }
</script>
