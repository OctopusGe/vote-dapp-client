<template>
  <AppDrop @drop="moveTaskOrColumn">
    <AppDrag
      class="task"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
    >
      <v-hover v-slot:default="{ hover }">
        <v-list-item
          dense
          :class="hover ? 'grey lighten-3' : ''"
          class="grey lighten-5 mb-1"
        >
          <v-list-item-content>
            <v-list-item-title class="body-1 mb-1" v-text="task.name">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-hover>
    </AppDrag>
  </AppDrop>
</template>

<script>
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'

export default {
  components: { AppDrag, AppDrop },
  mixins: [movingTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask(task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    }
  },
  data: () => ({
    item: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' }
    ]
  })
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}
</style>
