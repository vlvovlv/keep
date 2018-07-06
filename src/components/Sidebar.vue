<template>
  <div class="wiki-sidebar">
    <h2>/* Index */</h2>
  </div>
</template>

<script>
export default {
  name: 'WikiSidebar',
};
</script>

<style lang="less" scoped>
  @import '../styles/vars.less';

  .wiki-sidebar {
    font-family: 'Droid Sans Mono', monospace;

    h2 {
      color: @dark-green;
    }
  }
</style>
