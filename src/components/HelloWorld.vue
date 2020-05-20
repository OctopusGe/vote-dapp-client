<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="text-align: center">
          <v-img
            :src="require('../assets/img/ethereum.jpeg')"
            class="my-1"
            contain
            width="1200"
          />
          <br></div>

        <div style="text-align: left">
          <h1>
            <van-icon name="orders-o" color="#1989fa" size="40"/>
            <span class="display-2 font-weight-bold mb-3" style="margin-left: 10px">以太坊简介</span></h1>
          <br>
          <h3 class="display-1 font-weight-bold mb-1">
            以太坊是一个为去中心化应用（Dapp）而生的全球开源平台
          </h3>
          <br>
          <h2>以太坊是互联网新时代的基础：</h2>
          <ul id="ul-1">
            <li>内建货币与支付。</li>
            <li>用户拥有个人数据主权，且不会被各类应用监听或窃取数据。</li>
            <li>人人都有权使用开放金融系统。</li>
            <li>基于中立且开源的基础架构，不受任何组织或个人控制。</li>
          </ul>
          <br>
          <h2>以太坊主网于 2015 年上线，是世界领先的可编程区块链。</h2>
          <br>
          <p>
            <b>和其它区块链一样，以太坊也拥有原生加密货币，叫作 Ether(ETH)</b>。
            ETH 是一种数字货币，和比特币有许多相同的功能。
            ETH 是一种数字货币，和比特币有许多相同的功能。它是一种纯数字货币，可以即时发送给世界上任何地方的任何人。
            ETH 的供应不受任何政府或组织控制，它是去中心化且具稀缺性的。全世界的人们都在使用 ETH 进行支付，或将其作为价值存储和抵押品。
          </p>
          <br>
          <p><b>但与其它区块链不同的是，以太坊可以做更多的工作。</b>以太坊是可编程的，开发者可以用它来构建不同于以往的应用程序。</p>
          <br>
          <p>
            这些去中心化的应用程序（或称“dapps”）基于加密货币与区块链技术 而值得信任，也就是说 dapps 一旦被“上传”到以太坊，它们将始终按照编好的程序运行。
            这些应用程序可以控制数字资产，以便创造新的金融应用；同时还是去中心化的，这意味着没有任何单一实体或个人可以控制它们。
          </p></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {}
}
</script>
<style scoped>
  @import url("../assets/css/Helloword.css");
</style>
