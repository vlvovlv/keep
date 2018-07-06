<template>
  <header class="wiki-header">
    <div class="logo">
      <span class="green">H</span>
      <span class="purple">e</span>
      <span class="orange">l</span>
      <span class="red">l</span>
      <span class="cyan">o</span>
      <span class="white">,</span>
    </div>
    <h1 class="title">Use code to speak.</h1>
  </header>
</template>

<script>
export default {
  name: 'WikiHeader',
};
</script>

<style lang="less" scoped>
  @import "../styles/vars.less";

  .wiki-header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    padding: 10px;
    font-weight: bold;
    font-family: 'Droid Sans Mono', monospace;
    border-bottom: 1px solid #d6d6d6;
    flex-wrap: nowrap;

    .logo {
      display: flex;
    }

    .title {
      position: relative;
      margin-left: 10px;
      font-size: 24px;
      color: @white;
      white-space: nowrap;

      &:after {
        content: '';
        height: 120%;
        width: 1px;
        background: transparent;
        position: absolute;
        display: block;
        right: -5px;
        top: -10%;
        animation: blink 1.2s linear infinite;
      }
    }
  }

  @keyframes blink {
    49% {
      background: transparent;
    }

    50% {
      background: @white;
    }

    100% {
      background: @white;
    }
  }
</style>
