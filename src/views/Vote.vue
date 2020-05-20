<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="8" md="6">
        <v-text-field
          label="New Column Name"
          v-model="newColumnName"
          @keyup.enter="createColumn"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <div class="d-flex flex-wrap">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :board="board"
        class="col-12 col-md-3 mx-auto my-1"
      />
    </div>

    <v-row class="mt-4">
      <v-col>
        <div class=" red">
          <v-btn
            class="my-4 mr-n12 float-right "
            tile
            outlined
            color="success"
            @click="createBoard"
          >
            <v-icon left>mdi-pencil</v-icon> Create Board
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="task-bg" v-if="isTaskOpen" @click.self="close">
      <router-view />
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import BoardColumn from '@/components/BoardColumn'

export default {
  components: { BoardColumn },
  data() {
    return {
      newColumnName: ''
    }
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task'
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'board' })
    },
    createColumn() {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName,
        votingLimit: 1
      })

      this.newColumnName = ''
    },
    createBoard() {
      // this.$store.commit('SAVE_BOARD')
    }
  }
}
</script>

<style lang="css">
.task-bg {
  @apply pin absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>
