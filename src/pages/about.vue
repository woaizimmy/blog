<template>
  <div class="page" id="page" @click="clickTips">
      <div class="wrapper">
        <el-row>
            <el-col :span="24">
              <div class="main">
                <p class="title">关于</p>
                <el-timeline class="timeline-wrap">
                  <el-timeline-item
                    timestamp="作者：杨梓明"
                    color="#0bbd87"
                    placement="top">
                      <ul>
                        <li>GitHub：<a href="https://github.com/woaizimmy" target="_blank">woaizimmy</a></li>
                        <li><a href="https://blog.csdn.net/qq_17850449" target="_blank">CSDN</a></li>
                        <li>邮箱：7682102@qq.com</li>
                        <li>QQ：7682102</li>
                        <li>微信：zimmy1126</li>
                      </ul>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="本站版本"
                    color="#0bbd87"
                    placement="top">
                      v1.0
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="技术栈"
                    color="#0bbd87"
                    placement="top">
                      <ul>
                        <li>前端：Vue、Vuex、ElementUI</li>
                        <li>后端：Node、Express、mongoose</li>
                        <li>数据库：MongoDB</li>
                      </ul>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="本站功能"
                    color="#0bbd87"
                    placement="top">
                      <ul class="">
                        <li>导航<i class="el-icon-check"></i></li>
                        <li>归档时间轴<i class="el-icon-check"></i></li>
                        <li>文章管理：新增、修改、删除（Markdown编辑器）<i class="el-icon-check"></i></li>
                        <li>文章上/下篇切换<i class="el-icon-check"></i></li>
                        <li>文章评论<i class="el-icon-check"></i></li>
                        <li>修改昵称及头像功能<i class="el-icon-check"></i></li>
                      </ul>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="待优化"
                    color="#0bbd87"
                    placement="top">
                      <ul class="">
                        <li>目前用户角色有两个，管理员和访客。</li>
                        <li>若全部用户均为管理员，即本站实际上是一个多用户博客平台。</li>
                        <li>若只开放访客注册，则本站为我个人的博客网站。</li>
                        <li>后续明确角色开放后还需做相应的调整。</li>
                      </ul>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="近期Flag"
                    color="#0bbd87"
                    placement="top">
                    <ul>
                      <li>购买域名：<a href="www.yangziming.ltd" target="_blank">www.yangziming.ltd</a><i class="el-icon-check"></i></li>
                      <li>购买腾讯云服务器<i class="el-icon-check"></i></li>
                      <li>服务器部署Node+Vue+MongoDB博客系统<i class="el-icon-check"></i></li>
                      <li>绑定域名，以域名访问博客</li>
                      <li>在右上角显示头像</li>
                      <li>添加留言板页面、留言功能</li>
                      <li>等熟悉域名机制，二级域名开发出来后，添加Demo演示列表页面和管理页面，以链接指向别的独立应用。</li>
                      <li> etc.</li>
                    </ul>
                  </el-timeline-item>
                  <el-timeline-item
                    timestamp="to be continued"
                    color="#0bbd87"
                    placement="top">
                  </el-timeline-item>
                </el-timeline>
              </div>
            </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import { anchor } from "../../static/js/public.js";

const arr = [
  "Vue",
  "Node",
  "MonngoDB",
  "CentOS",
  "前端",
  "程序猿",
  "攻城狮",
  "搬砖",
  "码农",
];
const setStyle = (obj, json) => {
  for (var i in json) {
    obj.style[i] = json[i];
  }
};

let index = 0;

export default {
  mixins: [anchor],
  data() {
    return {
    };
  },
  components: {},
  created() {
    this.$store.commit("changeIndex", '6');
  },
  methods: {
    clickTips: function(e) {
      if (index >= arr.length) {
        index = 0;
      }
      let newA = document.createElement("a");
      newA.className = "click_tips";
      let styles = {
        left: `${e.pageX}px`,
        top: `${e.pageY - 20}px`
      };
      newA.innerHTML = arr[index];
      setStyle(newA, styles);
      document.getElementById("page").appendChild(newA);
      index++;
      newA.addEventListener("animationend", () => {
        document.getElementById("page").removeChild(newA);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  background: #fff;
  margin: -15px 0px -20px;
  padding: 10px;
  > .title {
    font-size: 18px;
    padding: 5px 0;
    margin-bottom: 30px;
    border-bottom: 1px solid #eee;
  }
  .timeline-wrap{
    font-size:16px;
    padding:0 30px;
    a{
      color:#409EFF;
      &:hover{
        background:#409EFF;
        color:#fff;
      }
    }
    ul{
      li{
        list-style: disc inside;
        .el-icon-check{
          color:#67C23A;
        }
        .el-icon-close{
          color:#F56C6C;
        }
      }
      &.func{
        li{
          list-style: none;
        }
      }
    }
  }
}


@media (min-width: 768px) {
  //pc
  .main {
    margin: 0 20px;
    padding: 20px;
    > .title {
      font-size: 30px;
    }
    .timeline-wrap{
      font-size:16px;
      padding:0 60px;
    }
  }
}
</style>
<style>
/* click_tips */
.click_tips {
  color: red;
  position: absolute;
  transition: all 0.3s;
  animation: click_translateTop 1s;
}

@keyframes click_translateTop {
  0%,
  100% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
  }
}
</style>

