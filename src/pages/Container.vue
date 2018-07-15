<template>
  <div class="wiki-content-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WikiContentContainer',
};
</script>

<style lang="less" scoped>
  @import '../styles/vars.less';

  .wiki-content-container {
    width: 100%;
    padding: 40px 15px;
    color: @white;
  }
</style>
