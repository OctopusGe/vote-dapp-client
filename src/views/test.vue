<template>
    <div style="">
      <v-btn @click="test">测试</v-btn>
    </div>
</template>

<script>
    export default {
        name: "test",
      methods:{
          test(){
            this.$toast("的首付款了");
          }
      }
    }
</script>

<style scoped>

</style>
