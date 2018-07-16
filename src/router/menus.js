const menus = [
  {
    name: 'Git',
    path: 'git',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'submodule',
        path: 'submodule',
        component: () => import('../../wikis/Git/submodule.md'),
        children: [
          
        ],
      },
    ],
  },
  {
    name: 'Vue',
    path: 'vue',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'test',
        path: 'test',
        component: () => import('../../wikis/Vue/test.md'),
        children: [
          
        ],
      },
    ],
  },
];

export default menus;
