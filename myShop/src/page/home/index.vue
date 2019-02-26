<template>
  <div class="home-contain">
    <!-- 搜索模块 -->
    <div class="serach">
      <div class="category">
        <a href="#">
          <van-icon name="notes-o"/>
        </a>
      </div>
      <div class="searchForm">
        <van-search class="serachFrom" placeholder="请输入搜索关键词"/>
      </div>

      <div class="login">
        <a href="#">登入</a>
      </div>
    </div>

    <!-- 轮播图区域 -->
    <div class="home-swip">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in  shopSwip" :key="index">
          <img :src="item.img" alt width="100%" height="100%">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 商品列表区域 -->
    <div class="shopList">
      <ul class="nav">
        <li v-for="item in shopList" :key="item.id">
          <a href>
            <img :src="item.img" alt>
            <p>{{item.name}}</p>
          </a>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopSwip: [],
      shopList:[]
    };
  },
  created() {
    this.getSwip();
    this.getGoodList()
  },
  methods: {
    getSwip() {
      this.$http.get("home/getBanners").then(result => {
        // console.log(result.data.data);
        this.shopSwip = result.data.data;
      });
    },
    getGoodList(){
        this.$http.get("goods/getGoodsSubCategories",{
            params: {
            page:1,
            pageSize:100
    }
        }).then(result=>{
             this.shopList=result.data.data.cates
             console.log(result.data.data.cates)
        })
    }
  }
};
</script>
<style lang="less">
.home-contain {
  height: 1000px;
  // background-color: #323233;
  background: #fff;
//   padding-top: 5px;
  .serach {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 50px;
    display: flex;
    .category {
      width: 12%;
      text-align: center;
      line-height: 50px;
      font-size: 16px;
      //   background: #fff;
    }
    .van-search {
      //    padding: -10px -16px !important;
      background: none !important;
    }
    .searchForm {
      text-align: center;
      width: 76%;
      background: none;
      .van-search__content {
        border-radius: 50px;
        border: 1px solid #ccc;
        line-height: 45px;
        height: 30px;
        .van-field__left-icon {
          margin-left: 10px;
        }
        .van-field__body {
          //   background: #fff;
          height: 26px;
          line-height: 26px;

          input[type="search"] {
            height: 26px;
            line-height: 26px;
            background: #fff;
            text-align: left;
          }
        }
      }
    }
    .login {
      width: 12%;
      text-align: center;
      line-height: 60px;
      //   background-color: #fff;
      font-size: 18px;
    }
  }
  .home-swip {
    position: relative;
    overflow: hidden;
  }
  .nav{
      display: flex;
      flex-wrap: wrap;
      li{
          width: 33.33%;
          text-align: center;
        //   background: #fff;
          margin: 10px 0;
          img{
              width: 50%;
            //   height: 100%;
          }
      }
  }
}
</style>