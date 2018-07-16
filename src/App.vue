<template>
  <div id="app" class="container">
    <div class="circle" @click="open = !open"></div>
    <wiki-header></wiki-header>
    <div class="wiki-container">
      <wiki-sidebar @item-clicked="handleClose" :show="open"></wiki-sidebar>
      <div class="wiki-box">
        <router-view></router-view>
      </div>
    </div>
    <wiki-footer></wiki-footer>
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import WikiHeader from '@/components/Header';
import WikiFooter from '@/components/Footer';
import WikiSidebar from '@/components/Sidebar';

export default {
  name: 'App',
  components: {
    WikiHeader,
    WikiFooter,
    WikiSidebar,
  },
  data() {
    return {
      open: false,
      wh: 0,
    };
  },
  mounted() {
    this.wW = window.innerWidth;

    if (this.wW >= 1000) {
      this.open = true;
    }

    window.onresize = () => {
      this.wW = window.innerWidth;

      if (this.wW >= 1000) {
        this.open = true;
      } else {
        this.open = false;
      }
    };
  },
  methods: {
    handleClose() {
      if (this.wW >= 1000) {
        return;
      }
      this.open = false;
    },
  },
};
</script>

<style lang="less" scoped>
  @import "./styles/vars.less";
  @import "./styles/mixins.less";

  .circle {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 25px;
    right: 25px;
    background: url('./assets/circle.svg') no-repeat center;
    z-index: 1001;
    display: none;

    .m({
      display: block;
    });
  }

  .pc-sidebar {
    display: block;

    .m({
      display: none;
    });
  }

  .mobile-sidebar {
    display: none;

    .m({
      display: block;
    });
  }

  .wiki-container {
    display: flex;
    position: relative;
    min-height: 555px;
    height: 100%;

    .m({
      padding-left: 0;
    });

    .wiki-box {
      width: 100%;
      border-left: 1px solid cyan;

      .m({
        border-left: 0;
      });
    }
  }
</style>
