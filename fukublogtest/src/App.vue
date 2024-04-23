<script>
export default {
  name: 'App'
}
</script>

<template>
  <div class="top_link">
    <a class="top_person" href="/person">人物</a>
    <a class="top_work" href="/work">作品集</a>
    <a class="top_technology" href="/technology">技術</a>
    <a class="top_career" href="/career">経歴</a>
  </div>
</template>

<style>

.top_link {
  font-family: '851tegaki_zatsu_normal_0883';
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh; /* viewportの高さに合わせる */
}

.top_link a {
  color: black;
  text-decoration: none;
  font-size: 30px;
}
.top_link a:hover {
  animation: shake 4s infinite; /* マウスオーバー時にアニメーションを適用 */
}

@keyframes shake {
  0% {
    transform: translate3d(0, 0, 0);
  }
  5% {
    transform: translate3d(-1px, 2px, 0);
  }
  10% {
    transform: translate3d(0, 0, 0);
  }
  15% {
    transform: translate3d(-3px, 2px, 0);
  }
  20% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(-2px, -1px, 0);
  }
  30% {
    transform: translate3d(0, 0, 0);
  }
  35% {
    transform: translate3d(-1px, -2px, 0);
  }
  40% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(-1px, 2px, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  55% {
    transform: translate3d(-2px, 1px, 0);
  }
  60% {
    transform: translate3d(0, 0, 0);
  }
  65% {
    transform: translate3d(-3px, 1px, 0);
  }
  70% {
    transform: translate3d(0, 0, 0);
  }
  75% {
    transform: translate3d(-1px, 2px, 0);
  }
  80% {
    transform: translate3d(0, 0, 0);
  }
  85% {
    transform: translate3d(-2px, 2px, 0);
  }
  90% {
    transform: translate3d(0, 0, 0);
  }
  95% {
    transform: translate3d(-1px, 1px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
