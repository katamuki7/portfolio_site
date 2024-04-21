<script setup lang="ts">
import { ref } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
type Blog = {
  articleId: string
  title: string
  imgUrl: string
  content: string
  publishedAt: string
}
import  Get from "@/api/home/index.ts"
onMounted(async () => {
  blogList.value = await Get.execute()
})
</script>

<template>
  <div class="card-container">
    <BlogCard v-for="blog in blogList" :key="blog.articleId" :blog="blog" />
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  display: block;
}
</style>
