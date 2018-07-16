<template>
  <div class="wiki-content-container">
    <index-page v-if="showIndex"></index-page>
    <transition name="router-anim">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import IndexPage from '../../README.md';

export default {
  name: 'WikiContentContainer',
  components: {
    IndexPage,
  },
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
