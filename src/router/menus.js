const menus = [
  {
    name: 'CSS',
    path: 'css',
    meta: '0',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'Less 的 mixin 中参数当做 left hand value 时的写法',
        path: 'less-de-mixin-zhong-can-shu-dang-zuo-left-hand-value-shi-de-xie-fa',
        meta: '1534236464000',
        component: () => import('../../wikis/CSS/Less 的 mixin 中参数当做 left hand value 时的写法.md'),
        children: [
          
        ],
      },
      {
        name: 'transform 会影响 position:fixed 的定位效果',
        path: 'transform-hui-ying-xiang-position-fixed-de-ding-wei-xiao-guo',
        meta: '1534991407000',
        component: () => import('../../wikis/CSS/transform 会影响 position:fixed 的定位效果.md'),
        children: [
          
        ],
      },
    ],
  },
  {
    name: 'Git',
    path: 'git',
    meta: '0',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: '删除标签',
        path: 'shan-chu-biao-qian',
        meta: '1532242255000',
        component: () => import('../../wikis/Git/删除标签.md'),
        children: [
          
        ],
      },
      {
        name: '更新 git 子模块',
        path: 'geng-xin-git-zi-mo-kuai',
        meta: '1534308123000',
        component: () => import('../../wikis/Git/更新 git 子模块.md'),
        children: [
          
        ],
      },
    ],
  },
  {
    name: 'JavaScript',
    path: 'javascript',
    meta: '0',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: '打包方式概念',
        path: 'da-bao-fang-shi-gai-nian',
        meta: '1532242255000',
        component: () => import('../../wikis/JavaScript/打包方式概念.md'),
        children: [
          
        ],
      },
    ],
  },
  {
    name: 'Shell',
    path: 'shell',
    meta: '0',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'zsh  与 nvm 的集成',
        path: 'zsh-yu-nvm-de-ji-cheng',
        meta: '1534152233000',
        component: () => import('../../wikis/Shell/zsh  与 nvm 的集成.md'),
        children: [
          
        ],
      },
      {
        name: '查看 crontab 日志',
        path: 'cha-kan-crontab-ri-zhi',
        meta: '1534580167000',
        component: () => import('../../wikis/Shell/查看 crontab 日志.md'),
        children: [
          
        ],
      },
    ],
  },
  {
    name: 'Tmux',
    path: 'tmux',
    meta: '0',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'tmux 操作说明',
        path: 'tmux-cao-zuo-shuo-ming',
        meta: '1535004152000',
        component: () => import('../../wikis/Tmux/tmux 操作说明.md'),
        children: [
          
        ],
      },
    ],
  },
  {
    name: 'Vim',
    path: 'vim',
    meta: '0',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'vim 操作说明',
        path: 'vim-cao-zuo-shuo-ming',
        meta: '1535004152000',
        component: () => import('../../wikis/Vim/vim 操作说明.md'),
        children: [
          
        ],
      },
    ],
  },
];

export default menus;
