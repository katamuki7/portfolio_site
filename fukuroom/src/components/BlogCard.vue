<script setup lang="ts">
defineProps({
  blog: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <router-link :to="{ name: 'article', params: { id: blog.articleId } }">
      <el-card :body-style="{ padding: '0px' }">
        <img
            class="image"
            :src="blog.imgUrl ?? 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
        />
        <div style="padding: 14px">
          <span>{{ blog.title }}</span>
          <div class="bottom">
            <time class="time">{{ blog.publishedAt }}</time>
            <el-button text class="button">Open</el-button>
          </div>
        </div>
      </el-card>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 300px;
  margin: 30px auto;
  border: black solid 3px;
}
.content {
  background-color: pink;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 250px;
  display: block;
}
</style>