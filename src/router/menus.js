const menus = [
  {
    name: 'css',
    path: 'css',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'css-1',
        path: 'css-1',
        component: () => import('../../wikis/css/css-1.md'),
        children: [
          
        ],
      },
      {
        name: 'css-2',
        path: 'css-2',
        component: () => import('../../wikis/css/css-2.md'),
        children: [
          
        ],
      },
      {
        name: 'css-3',
        path: 'css-3',
        component: () => import('../../wikis/css/css-3.md'),
        children: [
          
        ],
      },
      {
        name: 'css3',
        path: 'css3',
        component: { template: '<router-view></router-view>' },
        children: [
          {
            name: 'css-4',
            path: 'css-4',
            component: () => import('../../wikis/css/css3/css-4.md'),
            children: [
              
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'html',
    path: 'html',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'html-1',
        path: 'html-1',
        component: () => import('../../wikis/html/html-1.md'),
        children: [
          
        ],
      },
      {
        name: 'html-2',
        path: 'html-2',
        component: () => import('../../wikis/html/html-2.md'),
        children: [
          
        ],
      },
      {
        name: 'html-3',
        path: 'html-3',
        component: () => import('../../wikis/html/html-3.md'),
        children: [
          
        ],
      },
      {
        name: 'html5',
        path: 'html5',
        component: { template: '<router-view></router-view>' },
        children: [
          {
            name: 'html-4',
            path: 'html-4',
            component: () => import('../../wikis/html/html5/html-4.md'),
            children: [
              
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'javascript',
    path: 'javascript',
    component: { template: '<router-view></router-view>' },
    children: [
      {
        name: 'javascript-1',
        path: 'javascript-1',
        component: () => import('../../wikis/javascript/javascript-1.md'),
        children: [
          
        ],
      },
      {
        name: 'javascript-2',
        path: 'javascript-2',
        component: () => import('../../wikis/javascript/javascript-2.md'),
        children: [
          
        ],
      },
      {
        name: 'javascript-3',
        path: 'javascript-3',
        component: () => import('../../wikis/javascript/javascript-3.md'),
        children: [
          
        ],
      },
    ],
  },
];

export default menus;
