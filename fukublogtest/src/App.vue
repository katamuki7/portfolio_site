<script>
export default {
  name: 'App'
}
</script>

<template>
  <div class="home_link">
    <a href="/person">人物</a>
    <a href="/work">作品集</a>
    <a href="/technology">技術</a>
    <a href="/career">経歴</a>
  </div>
</template>

<style >
.site{
  font-family: "NuKinakoMochiRegFont";
}

.home_link {
  font-family: "851tegaki_zatsu_normal_0883";
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
}

.home_link a {
  color: black;
  text-decoration: none;
  font-size: 30px;
}

.home_link a:hover {
  animation: shake 4s infinite; /* マウスオーバー時にアニメーションを適用 */
}

.home_link a:not(:hover) {
  opacity: 0.2; /* マウスオーバーしていないリンクを透明にする */
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
