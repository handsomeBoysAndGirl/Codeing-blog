<template>
  <div class="all">
    <div class="header">
      <div class="row">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-2 col-md-2">
          <img src="../assets/imgs/logo.png">
        </div>
      </div>
    </div>
    <div id="login">
      <div class="row">
        <div class="col-lg-5 col-md-5"></div>
        <div class="box col-lg-3 col-md-3">
          <div class="form-group">
            <h2>登录</h2>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="username" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="pass" placeholder="Password">
          </div>
          <div class="input-group form-group">
            <input type="text" class="form-control" v-model="icode" placeholder="请输入验证码" aria-describedby="basic-addon2"/>
            <identify @existCode="getCode"></identify>
          </div>
          <div class="btndiv form-group">
            <button id="btn" class="btn btn-default" @click='login'>登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import identify from './confirm'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      pass: '',
      icode: '',
      code: ''
    }
  },
  components: {identify},
  methods: {
    login () {
      if (this.icode.toLowerCase() === this.code.toLowerCase()) {
        console.log('succes')
      } else {
        alert('验证码输入错误')
      }
    },
    getCode (val) {
      this.code = val
    }
  }
}
</script>

<style scoped>
  .header{
    height: 90px;
  }
  .header .row{
    margin-top: 10px;
    margin-left: 0;
    margin-right: 0;
  }
  .header img{
    height: 80px;
    width: 160px;
  }
  #login{
    width: 100%;
    height: 470px;
    background-image: url("../assets/imgs/bj.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  #login .row{
    height: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .box{
    padding: 10px 20px;
    border: 1px solid rgba(250, 250, 250, 0.9);
    border-radius: 10px;
    box-shadow: 1px 1px 10px white;
    position: relative;
    top: 50%;
    margin-top: -151px;
  }
  h2{
    text-align: center;
    color: white;
    margin-top: 10px;
  }
  .btndiv{
    text-align: center;
  }
  .input-group{
    display: flex;
  }
  .input-group .form-control{
    width: 70%;
  }
</style>
