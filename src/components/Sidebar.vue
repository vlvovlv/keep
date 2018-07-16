<template>
  <div class="wiki-sidebar" :style="{
    display: show ? 'block' : 'none'
  }">
    <h2>/* Index */</h2>
    <div class="split">
      ================================================================================
    </div>
    <ul class="menu">
      <sub-menu :menus="menus" pi="1" pp="" :depth="0"></sub-menu>
    </ul>
  </div>
</template>

<script>
import menus from '../router/menus';
import SubMenu from './SubMenu';

export default {
  name: 'WikiSidebar',
  props: {
    show: Boolean,
  },
  components: {
    SubMenu,
  },
  created() {
    this.menus = menus;
  },
};
</script>

<style lang="less" scoped>
  @import '../styles/vars.less';
  @import "../styles/mixins.less";

  .wiki-sidebar {
    font-family: 'Droid Sans Mono', monospace;
    width: 450px;
    min-height: 100%;
    overflow-x: hidden;
    padding: 10px 0;

    .m({
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1000;
      background-color: @darker;
      padding-left: 20px;
      width: 333px;
    });

    h2 {
      color: @dark-green;
      padding: 10px 10px 0;
      margin: 0;
    }

    .split {
      color: @white;
      margin: 15px 0;
    }
  }
</style>
