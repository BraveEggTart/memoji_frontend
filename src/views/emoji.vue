<template>
  <div class="image-container">
    <div class="search-input">
      <el-input
          v-model="searchVal"
          style="width: 800px"
          placeholder="请输入关键词搜索"
          class="input-with-search"
      >
        <template #append>
          <el-button>搜索</el-button>
        </template>
      </el-input>
    </div>
    <ul v-infinite-scroll="load" :infinite-scroll-disabled="disabled" class="infinite-list">
      <li v-for="(item,index) in countList" :key="index" class="infinite-list-item">
        <el-card>
          <el-image
              :src="randomUrl(index)"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="[randomUrl(index)]"
              :initial-index="0"
              fit="contain"
          />
          <div class="icon-box">
            <el-icon color="red" @click="item.like++">
              <IconBxsLike />
            </el-icon>
            <p>{{ item.like }}</p>
            <el-icon color="#409eff" @click="item.dislike++">
              <IconBxsDislike />
            </el-icon>
            <p>{{ item.dislike }}</p>
          </div>
        </el-card>
      </li>
    </ul>
    <div class="center-text">
      <p v-if="loading">Loading...</p>
      <p v-if="noMore">No more</p>
    </div>
    <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
    />
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
import IconBxsLike from '~icons/bxs/like'
import IconBxsDislike from '~icons/bxs/dislike'

axios.defaults.baseURL = 'https://nsfw.just4dream.club';

const count = ref(0);
const countList = ref([]);
const loading = ref(false);
const noMore = computed(() => count.value >= 100);
const disabled = computed(() => loading.value || noMore.value);
const searchVal = ref();
const load = () => {
  loading.value = true;
  setTimeout(() => {
    const newRow = {
      like: 0,
      dislike: 0
    };
    const arr = new Array(10).fill().map(() => Object.assign({}, newRow));
    countList.value = [...countList.value,...arr]
    loading.value = false;
  }, 500);
};

const urls = ref<string[]>([]);

onMounted(() => {
  for (let index = 0; index < 100; index++) {
    axios({
      url: '/api/meme/random',
      method: 'get',
    }).then((res) => {
      urls.value.push(res.data.data);
    });
  }
});

const randomUrl = (i: number) => {
  return urls.value[i % 100];
};
</script>

<style lang="scss" scoped>
.image-container{
  width: 100%;
  height: 90vh;
  padding-top: 80px;
  box-sizing: border-box;
  position: relative;
  .center-text{
    height: 20px;
    font-size: 14px;
    margin: 10px 0;
    text-align: center;
    p{
      margin:0;
      padding: 0;
    }
  }
  .search-input{
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .infinite-list{
    height: 100%;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }
  .infinite-list-item{
    width: 350px;
    height: 350px;
    margin: 10px;
    .el-card{
      width: 350px;
      height: 100%;
    }
    :deep(.el-card__body){
      height: 100%;
      padding: 30px 20px 40px 20px;
      box-sizing: border-box;
      text-align: center;
      .el-image{
        height: 100%;
      }
      .icon-box{
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 5px;
        p{
          margin: 0 10px 0 5px;
        }
      }
      .el-icon{
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  :deep(.el-pagination){
    justify-content: center;
  }
}
</style>
