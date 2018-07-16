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
];

export default menus;
