<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="site">
    <header>
      <RouterLink class="title-link" to="/" >
        <div class="title">
          <img src="@/assets/fire-icon.png" class="icon"/>
          <h1>くまもとブログ</h1>
        </div>
      </RouterLink>

      <div class="nav">
        <RouterLink to="/" >
          <button class="nes-btn">ブログ</button>
        </RouterLink>
        <RouterLink to="/about">
          <button class="nes-btn">プロフィール</button>
        </RouterLink>
      </div>
    </header>

    <div class="main-content">
      <RouterView />
    </div>

    <div class="footer">
      ふったーだよ
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site{
  background-color: gray;
  color: white;
  font-family: "NuKinakoMochiRegFont";
  padding: 0 30%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
}
.main-content {
  flex: 1;
}
header {
  padding: 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-bottom: black solid 1px;
}
.nes-btn {
  margin-top: 10px;
  margin-left: 20px;
}
.title-link{
  text-decoration: none;
  color: inherit;
}
.title{
  display: flex;
  font-size: 20px;
  margin-top: 8px;
  .icon {
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-right: 10px;
  }
}
.footer{
  text-align: center;
}
</style>