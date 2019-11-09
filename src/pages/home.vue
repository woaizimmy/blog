<template>
  <div class="page">
      <div class="wrapper">
        <el-row>
            <el-col :xs="24" :sm="4" :md="18" :lg="18" :xl="18">
              <div class="main">
                <list_home :items="items"></list_home>
              </div>
            </el-col>
            <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
              <div class="aside">

                <el-card class="card">
                  <p class="title">关于我</p>
                  <img class="pic" src="../../static/img/avatar.png" alt="">
                  <div class="row">
                    <p>一只前端攻城狮</p>
                    <div class="icons">
                      <a href="https://github.com/woaizimmy" target="_blank"><i class="iconfont icon-github"></i></a>
                      <a href="https://www.zhihu.com/people/yang-zi-ming-16-90/activities" target="_blank"><i class="iconfont icon-zhihu"></i></a>
                      <a href="https://blog.csdn.net/qq_17850449" target="_blank"><i class="iconfont icon-csdn"></i></a>
                    </div>
                  </div>
                </el-card>

                <el-card class="card">
                  <p class="title">友链</p>
                  <div class="row">
                    <a class="link" href="http://www.yangziming.ltd" target="_blank">胖梓</a>
                    <a class="link" href="http://www.yangziming.ltd" target="_blank">Z</a>
                  </div>
                </el-card>

              </div>
            </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import List_home from "../components/list_home"
import {webUrl} from "../../static/js/public.js"
export default {
  data(){
    return{
      items:[]
    }
  },
  components:{
    List_home,
  },
  created(){
    this.$store.commit("changeIndex", '1');
    this.$axios.post(webUrl+'articleList',{  })
      .then((res)=>{
        this.items=res.data.reverse();
      })
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 0 15px;
}
.aside{
  .card{
    margin-bottom: 10px;
    .title{
      padding: 10px;
      font-weight: 600;
      color:#808080;
    }
    .pic{
      display: block;
      width: 60%;
      margin: 0 auto 10px;
    }
    .row{
      padding: 0 10px;
      &>p{
        color:#bfbfbf;
      }
      .icons{
        padding:10px 0;
        text-align: center;
        .iconfont{
          transition: all .3s;
          margin: 5px;
          color: #000;
          font-size: 20px;
          background-color: rgba(200, 200, 200, 0.3);
          padding: 8px;
          border-radius: 50%;
          &:hover{            
            color:#fff;
            background-color: rgba(0, 133, 166, 0.8);
            border-radius: 5px;          
          }
        }
      }

      &>.link{
        color:#bfbfbf;
        display: inline-block;
        padding: 5px;
        transition: all .3s;        
        &:hover{
          color: #0085a1;
        }
      }
    }
  }
}

@media (min-width: 768px) {//pc
  .main{
    padding: 0 20px;
  }
}
</style>
