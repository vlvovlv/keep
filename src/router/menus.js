const menus = [
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
        name: '子模块',
        path: 'zi-mo-kuai',
        meta: '1532242255000',
        component: () => import('../../wikis/Git/子模块.md'),
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
];

export default menus;
