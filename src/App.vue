<template>
  <div id="app" class="container">
    <wiki-header />
    <div class="wiki-container">
      <wiki-sidebar />
      <div class="wiki-box">
        <router-view />
      </div>
    </div>
    <wiki-footer />
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
};
</script>

<style lang="less" scoped>
  @import "./styles/vars.less";
  @import "./styles/mixins.less";

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
