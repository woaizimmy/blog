<template>
  <div>
    <center-header></center-header>
    <div id="content">
      <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <h1 class="title">
          <span>{{type=='article'?'文章列表':'Demo列表'}}</span>
        </h1>
        <div class="tab-box">
          <el-button-group>
            <el-button :type="type=='article'?'primary':'info'" @click="toggle"><i class="iconfont icon-liebiao"></i> 文章</el-button>
            <el-button :type="type=='demo'?'primary':'info'" @click="toggle"><i class="iconfont icon-play1"></i> Demo</el-button>
          </el-button-group>
          <el-button v-if="type=='article'" @click="handleAdd()" class="btn-add">新增+</el-button>
          <el-button v-if="type=='demo'" @click="handleAdd2()" class="btn-add" v-show="false">新增+</el-button>
        </div>
        <div v-if="type=='article'">
          <el-table
            :data="articleList"
            style="width: 100%"
            header-align='right'
            border
            stripe>
            <el-table-column label="标题" width="">
                <template slot-scope="scope">
                  <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column label="日期" width="200">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span>{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="摘要" width="">
                <template slot-scope="scope">
                  <span>{{ scope.row.gist.slice(0,30) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="分类" width="250">
                <template slot-scope="scope">
                  <span v-if="scope.row.category.length === 0">未分类</span>
                  <el-tag v-else class="tag_margin" type="primary" v-for="tag in scope.row.category" :key="tag.id">{{ tag }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="230">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleLook(scope.$index, scope.row)">查看</el-button>
                  <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
        </div>

        <div v-if="type=='demo'">
          <el-alert style="margin:0 auto 10px;width: 300px;"
            title="功能未完善，暂不开放"
            type="warning"
            close-text="知道了">
          </el-alert>
          <el-table
            :data="demoList"
            style="width: 100%"
            header-align='right'
            border
            stripe>
            <el-table-column
                label="标题"
                width="200">
                <template slot-scope="scope">
                  <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="日期"
                width="200">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span>{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="file"
                width="200">
                <template slot-scope="scope">
                    <span>{{ scope.row.file }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="图片"
                width="200">
                <template slot-scope="scope">
                    <span>{{ scope.row.pic }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="摘要"
                width="200">
                <template slot-scope="scope">
                  <span>{{ scope.row.gist.slice(0,30) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleLook2(scope.$index, scope.row)">查看</el-button>
                  <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit2(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </div>
    <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <myInfo></myInfo>
    </el-col>
    <el-col :span="24">
      <common-footer></common-footer>
    </el-col>
  </div>
</template>

<script>
import CenterHeader from "../../components/centerHeader";
import CommonFooter from "../../components/commonFooter";
import myInfo from "../visiter/index";
import { checkAdmin,webUrl } from "~/js/public.js";

export default {
  mixins: [checkAdmin],
  components: {
    CenterHeader,
    CommonFooter,
    myInfo,
  },
  data() {
    return {
      name: null,
      token: null,
      articleList: [],
      demoList: [],
      type: "article"
    };
  },
  beforeCreate: function() {},
  mounted: function() {
    // 获取文章列表
    this.$axios.post(webUrl + "myArticleList",{ name: this.name}).then(res => {
      console.log('获取我的文章列表',res)
      if (res) {
        this.articleList = res.data.reverse();
      }
    });
    // 获取demo列表
    this.$axios.post(webUrl + "demoList").then(res => {
      if (res) {
        // this.demoList = res.data.reverse();
      }
    });
  },
  created(){
    this.$store.commit("changeIndex", '');
    this.name = localStorage.getItem("user_name");
    this.token = localStorage.getItem("token");
  },
  methods: {
    toggle() {
      //切换
      this.type = this.type == "article" ? "demo" : "article";
    },
    handleAdd() {
      //新增
      this.$router.push("/admin/edit");
    },
    handleAdd2() {
      //新增-demo
      this.$router.push("/admin/editt");
    },
    handleLook(index, row) {
      //查看
      let id = row._id;
      window.open("#/detail/" + id);
    },
    handleLook2(index, row) {
      //查看-demo
      window.open("#/demo/");
    },
    handleEdit(index, row) {
      //编辑
      let id = row._id;
      this.$router.push("/admin/edit/" + id);
    },
    handleEdit2(index, row) {
      //编辑-demo
      let id = row._id;
      this.$router.push("/admin/editt/" + id);
    },
    handleDelete(index, row) {
      //删除
      let self = this;
      let _id = row._id;
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          self.$axios
            .post(webUrl + "admin/deleteArticle", { _id: _id })
            .then(res => {
              if (res.data.status == 1) {
                self.$message({
                  type: "success",
                  message: "删除成功!"
                });
                self.fetchData();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleDelete2(index, row) {
      //删除--demo
      let self = this;
      let _id = row._id;
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          self.$axios
            .post(webUrl + "admin/deleteDemo", { _id: _id })
            .then(res => {
              if (res.data.status == 1) {
                self.$message({
                  type: "success",
                  message: "删除成功!"
                });
                self.fetchData2();
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    fetchData: function() {
      // 更新数据
      this.$axios.post(webUrl + "myArticleList").then(res => {
        if (res) {
          this.articleList = res.data.reverse();
        }
      });
    },
    fetchData2: function() {
      // 更新数据---demo
      this.$axios.post(webUrl + "demoList").then(res => {
        if (res) {
          this.demoList = res.data.reverse();
        }
      });
    }
  }
};
</script>


<style>
.el-table .cell {
  text-align: center;
}
</style>
<style lang="scss" scoped>
#content {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  .title {
    margin: 30px 0;
    text-align: center;
  }
  .tab-box {
    position:relative;
    text-align: center;
    margin-bottom: 20px;
  }
  .btn-add {
    position: absolute;
    right:0;
  }
  .el-tag{
    margin: 0 3px;
  }
}
</style>