<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <v-content style="padding: unset">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </v-content>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    }
  }
</script>

<!--<template>-->
<!--  <div class="layui-container layui-col-lg12">-->
<!--    <div class="layui-row nav">-->
<!--      <div class="layui-col-lg6">-->
<!--        <h2 class="nav-title">基&nbsp;于&nbsp;以&nbsp;太&nbsp;坊&nbsp;的&nbsp;电&nbsp;子&nbsp;投&nbsp;票&nbsp;系&nbsp;统</h2>-->
<!--      </div>-->
<!--      <div class="layui-col-lg6">-->
<!--        <ul class="nav-bar">-->
<!--          <li class="nav-item"><a href="">首页</a></li>-->
<!--          <li class="nav-item"><a href="">投票列表</a></li>-->
<!--          <li class="nav-item"><a href="">我的投票</a></li>-->
<!--          <li class="nav-item">-->
<!--            <a href="javascript:;">投票历史</a>-->
<!--          </li>-->
<!--          <li class="nav-item"><a href="">个人中心</a></li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->

<!--    移动设备、平板、桌面端的不同表现：-->
<!--    <div class="layui-row">-->
<!--      <div class="layui-col-xs6 layui-col-sm6 layui-col-md4">-->
<!--        移动：6/12 | 平板：6/12 | 桌面：4/12-->
<!--      </div>-->
<!--      <div class="layui-col-xs6 layui-col-sm6 layui-col-md4">-->
<!--        移动：6/12 | 平板：6/12 | 桌面：4/12-->
<!--      </div>-->
<!--      <div class="layui-col-xs4 layui-col-sm12 layui-col-md4">-->
<!--        移动：4/12 | 平板：12/12 | 桌面：4/12-->
<!--      </div>-->
<!--      <div class="layui-col-xs4 layui-col-sm7 layui-col-md8">-->
<!--        移动：4/12 | 平板：7/12 | 桌面：8/12-->
<!--      </div>-->
<!--      <div class="layui-col-xs4 layui-col-sm5 layui-col-md4">-->
<!--        移动：4/12 | 平板：5/12 | 桌面：4/12-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<style>-->
<!--  @import "../assets/css/home.css";-->
<!--</style>-->
