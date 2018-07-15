<template>
  <div>
    <li v-for="(menu, index) in menus" :key="menu.name">
      <router-link class="menu-link" :to="`${pp}/${menu.path}`" v-if="menu.children.length === 0">
        {{menu.name}}()
      </router-link>
      <div class="menu-text" v-else>
        <span>{{pi}}-{{index + 1}}.</span> {{menu.name}}
      </div>
      <sub-menu
        :menus="menu.children"
        :pi="`${pi}-${index + 1}`"
        :pp="`${pp}/${menu.path}`"
      ></sub-menu>
    </li>
  </div>
</template>

<script>
import SubMenu from './SubMenu';

export default {
  name: 'SubMenu',
  props: {
    menus: Array,
    pi: String,
    pp: String,
  },
  components: {
    SubMenu,
  },
};
</script>

<style lang="less" scoped>
  @import '../styles/vars.less';

  .menu {
    font-size: 18px;

    li .menu-link,
    li .menu-text {
      position: relative;
      display: block;
      padding: 10px 10px 10px 15px;
      margin-bottom: 15px;
      color: @white;
    }

    li .menu-text {
      padding-left: 2px;
      font-size: 20px;
      font-weight: 600;

      span {
        color: @dark-green;
      }
    }

    li .menu-link {
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
</style>
