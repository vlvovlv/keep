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
          JavaScript()
        </a>
      </li>
      <li>
        <a href="#">
          JavaScript()
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

  .wiki-sidebar {
    font-family: 'Droid Sans Mono', monospace;
    position: absolute;
    top: 0;
    left: 0;
    width: 333px;
    overflow-x: hidden;
    padding: 20px 0;

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
