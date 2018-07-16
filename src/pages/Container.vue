<template>
  <div class="wiki-content-container">
    <h1 v-if="showIndex">Hello, world...</h1>
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WikiContentContainer',
  computed: {
    showIndex() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style lang="less" scoped>
  @import '../styles/vars.less';

  .wiki-content-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 15px;
    color: @white;
  }
</style>
