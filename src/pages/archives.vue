<template>
    <div class="page">
      <div class="wrapper">
        <el-row>
            <el-col :span="24">
              <div class="main">
                <p class="title">归档</p>
                <list_article :items="items" type="archives"></list_article>
              </div>
            </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import List_article from "../components/list_article"
import List_content from "../components/list_content"
import {webUrl} from "../../static/js/public.js"

export default {
  data(){
    return{
      items:[]
    }
  },
  components:{
    List_article,
    List_content
  },
  created(){
    this.$store.commit("changeIndex", '2');
    this.$axios.post(webUrl+'articleList',{'type':'archives'})
      .then((res)=>{
        this.items=res.data;
      })
  },
}
</script>

<style lang="scss" scoped>
.main{
  background: #fff;
  margin: -15px 0px -20px;
  padding: 10px;
  >.title{
    font-size: 18px;
    border-bottom: 1px solid #eee;
    padding: 5px 0;
    margin-bottom: 30px;
  }
}
.aside{
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  >.title{
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    padding:10px 15px;
  }
}

@media (min-width: 768px) {//pc
  .main{
    margin:0 20px;
    padding: 20px;
    >.title{
      font-size: 30px;
    }
  }
}
</style>
