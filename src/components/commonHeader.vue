<template>
  <header>
    <div class="wrapper">
      <el-row>
        <el-col :xs="20" :sm="4" :md="4" :lg="4" :xl="4"><div class="logo">日月站</div></el-col>
        <el-col :xs="0" :sm="20" :md="20" :lg="20" :xl="20">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo hidden-xs-only nav-pc"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/"><i class="iconfont icon-zhuye f16"></i>主页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/archives"><i class="iconfont icon-git-commit"></i>归档</router-link></el-menu-item>
            <!-- <el-menu-item index="3"><router-link to="/categories"><i class="iconfont icon-fenlei"></i>分类</router-link></el-menu-item> -->
            <!-- <el-menu-item index="4"><router-link to="/collections"><i class="iconfont icon-shoucang"></i>收藏</router-link></el-menu-item> -->
            <!-- <el-menu-item index="5"><router-link to="/demo"><i class="iconfont icon-play"></i>演示</router-link></el-menu-item> -->
            <el-menu-item index="6"><router-link to="/about"><i class="iconfont icon-liebiao"></i>关于</router-link></el-menu-item>
            <el-menu-item index="7" v-if="isSignIn===0"><router-link :class="[activeIndex==7?'meBtnOn':'meBtnOff']" to="/sign">登录</router-link></el-menu-item>
            <el-menu-item index="7" v-else-if="isSignIn===1"><router-link :class="[activeIndex==7?'meBtnOn':'meBtnOff']" to="/admin/list">{{nickName}}</router-link></el-menu-item>
            <el-menu-item index="7" v-else-if="isSignIn===2"><router-link :class="[activeIndex==7?'meBtnOn':'meBtnOff']" to="/visiter">{{nickName}}</router-link></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xs="4" :sm="0" :md="0" :lg="0" :xl="0" class="">
          <div class="nav-mob">
            <!-- <div v-if="(isSignIn===1||isSignIn===2)&&navMobile" @click="navToggle" class="avatar"></div>
            <img v-if="(isSignIn===1||isSignIn===2)&&navMobile" @click="navToggle" class="avatar" :src="avatar" alt=""> -->
            <i class="iconfont icon-caidan" @click="navToggle"></i>
            <transition  name="slide-fade">
              <div v-if="navMobile" class="content">
                <ul  @click='slideUp'>
                  <li><router-link to="/">主页</router-link></li>
                  <li><router-link to="/archives">归档</router-link></li>
                  <!-- <li><router-link to="/categories">分类</router-link></li> -->
                  <!-- <li><router-link to="/collections">收藏</router-link></li> -->
                  <!-- <li><router-link to="/demo">演示</router-link></li> -->
                  <li><router-link to="/about">关于</router-link></li>
                  <li>
                    <router-link v-if="isSignIn===1||isSignIn===2" to="/visiter">{{nickName}}</router-link>
                    <router-link v-else to="/sign">登录</router-link>
                  </li>
                </ul>
              </div>
            </transition >
          </div>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // activeIndex: '1',
      navMobile: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('changeIndex',key);
      this.$store.commit("changeIndex", key);
    },
    navToggle() {
      this.navMobile = this.navMobile ? false : true;
    },
    slideUp() {
      this.navMobile = this.navMobile ? false : true;
    }
  },
  // created(){
  //   console.log(this.$store.state.activeIndex)
  // },
  computed: {
    activeIndex() {
      return this.$store.state.activeIndex;
    },
    isSignIn() {
      return this.$store.state.isSignIn;
    },
    nickName() {
      return localStorage.getItem("nickName");
    },
    avatar() {
      return localStorage.getItem("avatar");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background: #545c64;
  color: #fff;
  margin-bottom: 15px;
  .logo {
    line-height: 40px;
    font-size: 16px;
    margin-left: 20px;
  }
  .nav-pc {
    border-bottom: none;
    float: right;
    > li {
      padding: 0;
      > a {
        display: inline-block;
        padding: 0 20px;
        text-align: center;
        > .iconfont {
          vertical-align: top;
          margin: 0 5px 0 0;
          font-size: 20px;
        }
      }
    }
  }
  .nav-mob {
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    z-index: 9999;
    i {
      font-size: 24px;
    }
    .avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid #9d9d9d;
      position: absolute;
      right: 7px;
      top: 7px;
    }
    .content {
      ul {
        position: absolute;
        right: 0;
        top: 40px;
        background: #545c64;
        color: #fff;
        width: 100px;
        li {
          list-style: none;
          text-align: center;
          border-top: 1px solid #777;
          width: 100%;
          line-height: 24px;
          padding: 5px 12px;
          box-sizing: border-box;
          &:last-child{
            line-height: 20px;
            padding: 7px 12px;
          }
          a{
            color: #fff;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  //pc
  header {
    margin-bottom: 20px;
    .logo {
      line-height: 60px;
      font-size: 18px;
    }
  }
  .meBtnOff {
    transition: all 0.3s;
    background: #3b99fc !important;
    color: #fff !important;
    line-height: 60px;
    vertical-align: top;
  }
  .meBtnOn {
    transition: all 0.3s;
    background: #3b99fc !important;
    color: #fff !important;
    line-height: 58px;
    vertical-align: top;
  }
}
</style>
