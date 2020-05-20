import Vue from 'vue'
import Vuex from 'vuex'
import { saveStatePlugin } from '@/utils/utils.js'

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || {
  name: 'Election Board',
  columns: [],
  totalVotes: 0
}

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  getters: {
    getTask(state) {
      return id => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  mutations: {
    // SAVE_STATE(state) {},
    CREATE_TASK(state, { tasks, name, votes }) {
      tasks.push({
        name,
        votes
      })
    },
    CREATE_COLUMN(state, { name, votingLimit }) {
      state.board.columns.push({
        name,
        votingLimit,
        tasks: []
      })
    },
    UPDATE_TASK(state, { task, key, value }) {
      task[key] = value
    },
    MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns

      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    },
    DELETE_COLUMN(state, { columnIndex }) {
      state.board.columns.splice(columnIndex, 1)
    },
    UPDATE_VOTES(state, { selected }) {
      selected.forEach((selectedColumn, selectedColumnIndex) => {
        selectedColumn.forEach(taskName => {
          let taskObject = state.board.columns[selectedColumnIndex].tasks.find(
            ele => ele.name == taskName
          )
          taskObject.votes++
        })
      })
      state.board.totalVotes++
    },
    UPDATE_VOTING_LIMIT() {}
  }
})
