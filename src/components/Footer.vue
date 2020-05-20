<template>
  <v-footer color="#1d1d1d" padless>
    <v-layout justify-center wrap>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="{ name: link.name }"
      >
        {{ link.label }}
      </v-btn>
      <v-flex color="dark" lighten-2 py-2 text-center white--text xs12>
        {{ new Date().getFullYear() }} — <strong>VOTE DAPP</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
