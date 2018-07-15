<template>
  <div class="wiki-sidebar">
    <h2>/* Index */</h2>
    <div class="split">
      ================================================================================
    </div>
    <ul class="menu">
      <li>
        <a href="#">
          JavaScript()
        </a>
      </li>
      <li>
        <a href="#">
          CSS(3)
        </a>
      </li>
      <li>
        <a href="#">
          HTML(5)
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WikiSidebar',
};
</script>

<style lang="less" scoped>
  @import '../styles/vars.less';
  @import "../styles/mixins.less";

  .wiki-sidebar {
    font-family: 'Droid Sans Mono', monospace;
    position: fixed;
    top: 80px;
    left: 0;
    width: 333px;
    height: 100%;
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
      margin: 15px 0;
    }

    .menu {
      font-size: 18px;

      li a {
        position: relative;
        display: block;
        padding: 15px 15px 15px 20px;
        margin-bottom: 15px;
        color: @white;

        &:before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background-color: @green;
          transition: all ease 0.5s;
        }

        &:after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: @green;
          transition: all ease 0.5s;
        }

        &:hover {
          &:before {
            height: 0;
          }
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
</style>
