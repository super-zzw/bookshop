<template>
  <div>
    <div class="content">
      <div class="product">
        <div class="img">
          <img :src="bookMsg.image" alt width="280" />
        </div>
        <div class="info">
          <h2>{{bookMsg.title}}</h2>
          <span>作者:{{author}}</span>
          <span>出版社:{{bookMsg.publisher}}</span>
          <span v-if="bookMsg.subtitle">副标题:{{bookMsg.subtitle}}</span>
          <span v-if="bookMsg.origin_title">原作名:{{bookMsg.origin_title}}</span>
          <span v-if="bookMsg.translator.length">译者:{{translator}}</span>
          <span>出版年:{{bookMsg.pubdate}}</span>
          <span v-if="bookMsg.binding">装帧:{{bookMsg.binding}}</span>
          <span>ISBN:{{bookMsg.isbn13}}</span>
          <div class="price">
            价格
            <p>¥{{bookMsg.price}}</p>
          </div>
          <div class="count">
            数量
            <el-input-number v-model="num" @change="handleCount" :min="1" :max="10" label="描述文字" />
          </div>
          <div class="opt">
            <el-button type="primary" class="buy">立即购买</el-button>
            <el-button type="primary" class="addCart">加入购物车</el-button>
          </div>
        </div>

        <div class="rating">
        <el-rate v-model="value" disabled show-score text-color="#ff9900" :max="5" ></el-rate>
        </div>
      </div>

      <div class="description"></div>
     
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Details",
  data() {
    return {
      num: 1,
      value:8.5,
     
    };
  },
  created() {
    console.log(this.$route);
    this.getdata(this.$route.params.id);
  },
  computed: {
    ...mapState(["BooksList", "bookMsg"]),
    author() {
      //作者格式
      let author = this.bookMsg.author;
      if (author.length > 1) {
        author = author.join("/");
      } else {
        author = author.toString();
      }
      return author;
    },

    translator() {
      //译者格式
      let translator = this.bookMsg.translator;
      translator =
        translator.length > 1 ? translator.join("/") : translator.toString();
      return translator;
    }
  },
  methods: {
    handleCount(value) {
      console.log(value);
    },
    getdata(i) {
      this.$store.dispatch("queryID", i);
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  width: 1000px;
  .product {
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    .info {
      padding: 10px 15px;
      h2 {
        font-size: 26px;
      }
      span {
        display: block;
        height: 30px;
        line-height: 30px;
      }
      .price {
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        line-height: 35px;
        p {
          margin-left: 20px;
          font-size: 30px;
          color: #f40;
          font-weight: bold;
        }
      }
      .opt {
        margin-top: 10px;
        .buy {
          background: #ffe4d0;
          border-color: #f0cab6;
          color: #e5511d;
        }
        .addCart {
          border-color: #f40;
          background: #f40;
          color: #fff;
        }
      }
    }
    .rating{
      width: 100px;
    }
  }
}
</style>