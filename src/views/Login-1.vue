<template>
  <div>
    <div class="" id="user-login" style="display: none;background-color: #f2f2f2">

      <div class="user-login-main">
        <div class="user-login-header">
          <h2>基于以太坊的电子投票系统</h2>
          <p>------登录------</p>
        </div>
        <div class="form">
          <div class="">
            <label class="" for="LAY-user-login-username"></label>
            <input v-model="account" type="text" name="admnumber" id="LAY-user-login-username" lay-verify="required" placeholder="用户名" class="layui-input" >
          </div>
          <div class="">
            <label class="" for="LAY-user-login-password"></label>
            <input v-model="password" type="password" name="admpassword" id="LAY-user-login-password" lay-verify="required" placeholder="密码" class="layui-input">
          </div>
          <div class="layui-form-item">
            <div class="layui-row">
              <div class="layui-col-xs7">
                <label class="" for="LAY-user-login-vercode"></label>
                <input type="text" name="vercode" id="LAY-user-login-vercode" placeholder="图形验证码" class="">
              </div>
              <div class="layui-col-xs5">
                <div style="margin-left: 10px;">
                  <canvas id="canvas" width="100" height="43"></canvas>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="layui-form-item" style="margin-bottom: 20px;">
            <input type="checkbox" name="remember" lay-skin="primary" title="记住密码">
            <a href="forget.html" class="layadmin-user-jump-change layadmin-link" style="margin-top: 7px;">忘记密码？</a>
          </div> -->
          <div class="layui-form-item">
            <a href="/register" class="">没有账号？去注册>></a>
            <button @click="login" class="" lay-submit lay-filter="LAY-user-login-submit">登 入</button>
          </div>
          <!-- <div class="layui-trans layui-form-item layadmin-user-login-other">
            <label>社交账号登入</label>
            <a href="javascript:;"><i class="layui-icon layui-icon-login-qq"></i></a>
            <a href="javascript:;"><i class="layui-icon layui-icon-login-wechat"></i></a>
            <a href="javascript:;"><i class="layui-icon layui-icon-login-weibo"></i></a>

            <a href="" class="layadmin-user-jump-change layadmin-link">注册帐号</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login-1"
    }
</script>

<style scoped>

</style>
