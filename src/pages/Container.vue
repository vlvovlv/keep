<template>
  <div class="wiki-content-container">
    <index-page v-if="showIndex"></index-page>
    <router-view></router-view>
    <div class="last-timestamp">
      <span class="green">//</span>
      上次更新时间：{{lastUpdatedAt}}
    </div>
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
    lastUpdatedAt() {
      const lastUpdatedAt = this.$route.meta;
      return new Date(parseInt(lastUpdatedAt, 10)).toLocaleString('zh-CN');
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

  .last-timestamp {
    border-top: 1px dashed @green;
    border-bottom: 1px dashed @green;
    padding: 10px 0;
    margin: 40px 0;
    text-align: right;
  }
</style>
