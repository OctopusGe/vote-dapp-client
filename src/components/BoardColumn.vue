<template>
  <v-hover v-slot:default="{ hover }">
    <v-card hover>
      <AppDrop @drop="moveTaskOrColumn">
        <AppDrag
          :transferData="{
            type: 'column',
            fromColumnIndex: columnIndex
          }"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ column.name }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon
                :class="hover ? '' : 'd-sm-none'"
                @click="deleteColumn($event, columnIndex)"
              >
                mdi-trash-can-outline
              </v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider></v-divider>

          <ColumnTask
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            :task="task"
            :taskIndex="$taskIndex"
            :column="column"
            :columnIndex="columnIndex"
            :board="board"
          />

          <v-card-actions>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="+ Enter new task"
                  v-model="taskName"
                  @keyup.enter="createTask($event, column.tasks)"
                  solo
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  type="number"
                  label="Voting Limit"
                  v-model.number="column.votingLimit"
                  @change="updateVotingLimit"
                  min="1"
                  :max="column.tasks.length - 1"
                  outlined
                  clear-icon
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-actions>
        </AppDrag>
      </AppDrop>
    </v-card>
  </v-hover>
</template>

<script>
import ColumnTask from './ColumnTask'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'

export default {
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  data() {
    return {
      taskName: ''
    }
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    pickupColumn(e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask(e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value.trim(),
        votes: 0
      })
      this.taskName = ''
    },
    deleteColumn(e, columnIndex) {
      this.$store.commit('DELETE_COLUMN', { columnIndex })
    },
    updateVotingLimit() {
      this.$store.commit('UPDATE_VOTING_LIMIT')
    }
  }
}
</script>

<style lang="css"></style>
