<template>
  <footer>
    <div class="wrapper">
      <p>欢迎光临本站！</p>
      <p>本站开发者及所有者：杨梓明 
        <a href="https://github.com/woaizimmy" target="_blank"><i class="iconfont icon-github"></i></a>
        <a href="https://blog.csdn.net/qq_17850449" target="_blank"><i class="iconfont icon-csdn"></i></a>
        <a href="https://www.zhihu.com/people/yang-zi-ming-16-90/activities" target="_blank"><i class="iconfont icon-zhihu"></i></a>
      </p>
      <p>备案：还没批下来</p>
    </div>
    <transition name="slide-fade">
      <div v-if="isTop" class="toTop iconfont icon-top" @click="toTop"></div>
    </transition>
  </footer>
</template>
<script>
import {webUrl} from "../../static/js/public.js"

export default {
  data(){
    return{
      isTop:false,
    }
  },
  created(){
    window.addEventListener('scroll', this.scroll);
  },
  methods:{
    scroll:function(){
      let scroll=document.body.scrollTop || document.documentElement.scrollTop;
      if(scroll>100){
        this.isTop=true;
      }else{
        this.isTop=false;        
      }
    },
    toTop:function(){
      //Math.animation = function (from, to, duration, easing, callback) {}
      Math.animation(document.documentElement.scrollTop, 0,800,'Quart.easeOut', function (value) {
          document.documentElement.scrollTop = value;
          document.body.scrollTop = value;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
  background:#545c64;
  color: #fff;
  margin-top: 20px;
  padding: 10px 0;
  text-align: center;
  .wrapper .iconfont{
    color: #fff;
    font-size:20px;
    margin:0 5px;
    &:hover{
      color: #bbb;
    }
  }
  .toTop{
    position: fixed;
    right: 20px;
    bottom: 150px;
    font-size: 40px;
    color: #666;
    cursor: pointer;
    z-index: 9999;
    &:hover{
      color: #333;
    }
  }
  .slide-fade-enter-active,.slide-fade-leave-active{
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(10px);
    opacity: 0;
  }
}


@media (min-width: 768px) {//pc
  footer{
    margin-top: 80px;
    padding: 15px 0;
    .wrapper .iconfont{
      font-size:20px;
    }
    .toTop{
      position: fixed;
      // right: 50%;
      right: 10%;
      bottom: 50px;
      // margin-right: -690px;
      font-size: 40px;
      color: #666;
      cursor: pointer;
      z-index: 9999;
      &:hover{
        color: #999;
      }
    }
  }
}
</style>
