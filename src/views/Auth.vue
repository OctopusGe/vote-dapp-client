<template>
  <div>
    <v-card class="red">
      <v-tabs v-model="tab" background-color="primary" dark grow>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text>
              <component :is="item.content" />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import Login from '@/views/Login-o.vue'
import Signup from '@/views/Signup.vue'
export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Login', content: Login },
        { tab: 'Register', content: Signup }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
