<template>
  <div :style="{
    paddingLeft: depth * 10 + 'px'
  }">
    <li v-for="(menu, index) in menus" :key="menu.name">
      <router-link
        class="menu-link"
        :to="`${pp}/${menu.path}`"
        v-if="menu.children.length === 0"
        @click.native="handleClick()"
      >
        {{menu.name}}
      </router-link>
      <div class="menu-text" v-else>
        <span>{{pi}}-{{index + 1}}.</span> {{menu.name}}
      </div>
      <sub-menu
        :menus="menu.children"
        :pi="`${pi}-${index + 1}`"
        :pp="`${pp}/${menu.path}`"
        :depth="depth + 1"
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
    depth: Number,
  },
  components: {
    SubMenu,
  },
  methods: {
    handleClick() {
      let parent = this.$parent;
      for (let i = 0; i < this.depth; i += 1) {
        parent = parent.$parent;
      }
      parent.$emit('item-clicked');
    },
  },
  computed: {
    depthClass() {
      const { depth } = this;
      let result = 'depth';
      for (let i = 1; i <= depth; i += 1) {
        result += `-level${i}`;
      }
      return result;
    },
  },
};
</script>

<style lang="less" scoped>
  @import '../styles/vars.less';
  @import '../styles/mixins.less';

  .menu {
    font-size: 16px;

    .depth-level1 {
      font-size: 16px;
      padding-left: 10px + 10px;

      &-level2 {
        font-size: 14px;
        padding-left: 10px + 10px + 10px;
      }
    }

    li .menu-link,
    li .menu-text {
      position: relative;
      display: block;
      padding: 5px 5px 5px 15px;
      margin-bottom: 10px;
      color: @white;
    }

    li .menu-text {
      padding-left: 2px;
      font-size: 18px;
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
    }
  }

  /deep/ .non-touch li .menu-link {
      &:hover {
        &:before {
          height: 0;
        }
        &:after {
          width: 100%;
        }
      }
  }
</style>
