<script setup lang="ts">
import Get from '@/api/articles/index'

onMounted(async () => {
  if (Array.isArray(route.params.id)) {
    articleId.value = route.params.id.join(',')
  } else {
    articleId.value = route.params.id
  }
  blog.value = await Get.execute(articleId.value)
  isLoaded.value = true
})
</script>

<template>
  <div v-if="isLoaded">
    <div class="blog-cotent" v-html="blog.content"></div>
  </div>
</template>