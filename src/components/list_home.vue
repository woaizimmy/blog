<template>
<div>
  <!-- <div class="card" v-for="(item) in items" :key="item.id">
    <router-link :to="'/detail/'+item._id">
      <p class="card_title">{{item.title}}</p>
      <p class="gist">{{item.gist}}</p>
    </router-link>
    <p class="date"><span class="author">{{item.nickName}}</span> 发表于 {{item.date}}</p>
  </div> -->

  <el-card class="card" v-for="(item) in items" :key="item.id">
    <router-link :to="'/detail/'+item._id">
      <p class="card_title">{{item.title}}</p>
      <p class="gist">{{item.gist}}</p>
    </router-link>
    <p class="date"><span class="author">{{item.nickName}}</span> 发表于 {{item.date}}</p>
  </el-card>
</div>
</template>

<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  props: ['items'],  
  mounted(){
    // this.list = this.items
    console.log('items',this.items)
  },
  methods:{
    // goCategory:function(e){
    //   this.$store.commit('changeIndex','3')
    //   this.$router.push({ path: '/categories'+e})
    // }
  },
}
</script>

<style lang="scss" scoped>
  .card{
    margin-bottom: 15px;
    .card_title{
      font-size: 18px;
      font-weight: 600;
      color: #0085A1;
    }
    .gist{
      transition: all .3s;
      font-style: italic;
      color:#666;
      margin: 5px 0;
      &:hover{
        color: #0085a1;
      }
    }
    .date{
      color: #999;
      font-size: 12px;
      .author{
        font-weight: bold;
        color: #333;
        font-size: 13px;
      }
    }
  }
@media (min-width: 768px) {//pc
  .card{
    padding-bottom: 20px;
    .card_title{
      font-size: 26px;
    }
    .gist{
      margin: 10px 0;
    }
  }
}
</style>
