<template>
  <div>
    <v-app-bar app color="dark" dark>
      <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
      <v-toolbar-title style="margin-left: 24px; font-size: 25px">基&nbsp;于&nbsp;以&nbsp;太&nbsp;坊&nbsp;的&nbsp;电&nbsp;子&nbsp;投&nbsp;票&nbsp;系&nbsp;统</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="{ name: link.name }"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      disable-resize-watcher
    >
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
