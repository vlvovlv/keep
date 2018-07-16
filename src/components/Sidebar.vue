<template>
  <div class="wiki-sidebar">
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
    padding: 20px 0;

    .m({
      position: fixed;
      display: none;
    });

    h2 {
      color: @dark-green;
      padding: 15px;
      margin: 0;
    }

    .split {
      color: @white;
      margin: 15px 0 0;
    }
  }
</style>
