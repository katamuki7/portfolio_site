<template>
  <div class="profile-link">
    <a href="/experience" class="vertical-text">
      <span v-for="(char, index) in experienceText" :key="index" :style="{ '--delay': (index + 0.3 ) * 0.5 + 's' }">{{ char }}</span>
    </a>
    <a href="/skills" class="vertical-text">
      <span v-for="(char, index) in skillsText" :key="index" :style="{ '--delay': index * 0.5 + 's' }">{{ char }}</span>
    </a>
    <a href="/works" class="vertical-text">
      <span v-for="(char, index) in worksText" :key="index" :style="{ '--delay': (index + 1) * 0.5 + 's' }">{{ char }}</span>
    </a>
    <a href="/profile" class="vertical-text">
      <span v-for="(char, index) in text" :key="index" :style="{ '--delay': (index + 0.5) * 0.5 + 's' }">{{ char }}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '人物'.split(''),
      worksText: '作品集'.split(''),
      skillsText: '技術'.split(''),
      experienceText: '経歴'.split('')
    }
  }
}
</script>

<style>
body {
  background-color: #fff;
}

.profile-link {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 24px;
  text-decoration: none;
  color: #000;
}

.vertical-text span {
  opacity: 0;
  animation: fadeIn 2s forwards;
  animation-delay: var(--delay);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>