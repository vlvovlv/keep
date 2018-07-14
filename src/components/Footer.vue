<template>
  <div class="wiki-footer">
    <span class="cyan">console</span>
    <span class="white">.</span>
    <span class="green">log</span>
    <span class="white">(</span>
    <span class="orange">"</span>
    <span class="purple">I ❤ coding</span>
    <span class="orange">"</span>
    <span class="white">)</span>
  </div>
</template>

<script>
export default {
  name: 'WikiFooter',
};
</script>

<style lang="less" scoped>
  @import "../styles/vars.less";

  .wiki-footer {
    font-family: 'Droid Sans Mono', monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    font-size: 16px;
    border-top: 1px solid @border;
    white-space: nowrap;
  }
</style>
