const menus = [
  {
    name: 'Git',
    path: 'git',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: '删除标签',
        path: 'shan-chu-biao-qian',
        component: () => import('../../wikis/Git/删除标签.md'),
        children: [
          
        ],
      },
      {
        name: '子模块',
        path: 'zi-mo-kuai',
        component: () => import('../../wikis/Git/子模块.md'),
        children: [
          
        ],
      },
    ],
  },
  {
    name: 'JavaScript',
    path: 'javascript',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: '打包方式概念',
        path: 'da-bao-fang-shi-gai-nian',
        component: () => import('../../wikis/JavaScript/打包方式概念.md'),
        children: [
          
        ],
      },
    ],
  },
];

export default menus;
