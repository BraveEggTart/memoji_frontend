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
      <li v-for="i in count" :key="i" class="infinite-list-item">
        <el-card>
          <el-image
              :src="randomUrl(i)"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="[randomUrl(i)]"
              :initial-index="0"
              fit="fill"
          />
        </el-card>
      </li>
    </ul>
    <div style="text-align: center">
      <p v-if="loading">Loading...</p>
      <p v-if="noMore">No more</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';

axios.defaults.baseURL = 'https://nsfw.just4dream.club';

const count = ref(0);
const loading = ref(false);
const noMore = computed(() => count.value >= 100);
const disabled = computed(() => loading.value || noMore.value);
const searchVal = ref();
const load = () => {
  loading.value = true;
  setTimeout(() => {
    count.value += 10;
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
  height: 95vh;
  padding-top: 80px;
  box-sizing: border-box;
  position: relative;
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
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      .el-image{
        height: 100%;
      }
    }
  }
}
</style>
