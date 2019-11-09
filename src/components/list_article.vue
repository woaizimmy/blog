<template>
<div>
  <div class="card" v-for="(item) in items" :key="item.id">
    <p class="card_title" :id="'anchor-'+item.type">{{item.type}}</p>
    <el-timeline class="timeline-wrap">
      <el-timeline-item v-for="li in item.list" :key="li.id"
        :timestamp="li.date"
        color="#0bbd87"
        placement="top">
          <router-link :to="'/detail/'+li._id"  class="title">{{ li.title }}</router-link>
        <!-- <a v-if="type=='archives'" href="javascript:;" @click='goCategory()' class="category"> -->
        <span v-if="type=='archives'" href="javascript:;" class="category">
          <template v-for="tag in li.category">
            <el-tag class="link" size="small" :key="tag.id">{{ tag }}</el-tag>
          </template>
        </span>
        <!-- </a> -->
        <!-- <a v-else-if="type=='categories'" href="javascript:;" class="category"> -->
        <span v-else-if="type=='categories'" href="javascript:;" class="category">
          <i class="iconfont icon-tubiao13"></i>
          <template v-for="tag in li.category">
            <el-tag class="link" size="small" :key="tag.id" @click="anchor(tag)">{{ tag }}</el-tag>
          </template>
        </span>
        <!-- </a> -->
      </el-timeline-item>
      <el-timeline-item
        timestamp="Above"
        color="#0bbd87"
        placement="top">
      </el-timeline-item>
    </el-timeline>
  </div>
</div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     list:[]
  //   }
  // },
  props: ['items','type'],  
  methods:{
    goCategory:function(e){
      this.$store.commit('changeIndex','3')
      this.$router.push({ path: '/categories'})
    },
    anchor:function(e){
      let id='anchor-'+e;
      let anchor=document.getElementById(id);
      let go=anchor.offsetTop;

      // console.log(go)
      Math.animation(document.documentElement.scrollTop,go,600,'Quart.easeOut', function (value) {
          document.documentElement.scrollTop = value;
      });
    }
  },

}
</script>

<style lang="scss" scoped>
  .card{
    .timeline-wrap{
      font-size:16px;
      padding:0 30px;
    }
    .card_title{
      font-size: 18px;
      color: #6a6b6b;
      margin-bottom: 5px;
      padding:0 15px;
    }
    ul{
      padding: 0 10px;
      li{
        list-style: none;
        padding: 5px 10px;
        position: relative;
        .date{
          color: #888;
          display: block;
        }
        .title{
          font-size: 14px;
          margin: 0 5px;
          font-weight: bold;
          color: #223253;
          transition:all .3s;
          &:hover{
            color: #7091d3;
          }
        }
        .category{
          .iconfont{
            margin: 0 6px 0 0;
          }
          .link{
            position: relative;
            transition:all .3s;
            cursor: pointer;
          }
        }
      }
    }
  }
@media (min-width: 768px) {//pc
  .card{
    .timeline-wrap{
      font-size:16px;
      padding:0 60px;
    }
    .card_title{
      font-size: 26px;
      margin-bottom: 20px;
      padding:0 30px;
    }
    ul{
      padding: 0 30px;
      li{
        list-style:none;
        padding: 5px 16px;
        .date{
          display: inline;
        }
        .title{
          font-size: 16px;
        }
      }
    }
  }
}
</style>
