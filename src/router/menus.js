const menus = [
  {
    name: 'css',
    path: 'css',

    children: [
      {
        name: 'css-1',
        path: 'css-1',
        component: require('css/css-1.md'),
        children: [

        ],
      },
      {
        name: 'css-2',
        path: 'css-2',
        component: require('css/css-2.md'),
        children: [

        ],
      },
      {
        name: 'css-3',
        path: 'css-3',
        component: require('css/css-3.md'),
        children: [

        ],
      },
      {
        name: 'css3',
        path: 'css3',

        children: [
          {
            name: 'css-4',
            path: 'css-4',
            component: require('css/css3/css-4.md'),
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

    children: [
      {
        name: 'html-1',
        path: 'html-1',
        component: require('html/html-1.md'),
        children: [

        ],
      },
      {
        name: 'html-2',
        path: 'html-2',
        component: require('html/html-2.md'),
        children: [

        ],
      },
      {
        name: 'html-3',
        path: 'html-3',
        component: require('html/html-3.md'),
        children: [

        ],
      },
      {
        name: 'html5',
        path: 'html5',

        children: [
          {
            name: 'html-4',
            path: 'html-4',
            component: require('html/html5/html-4.md'),
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

    children: [
      {
        name: 'javascript-1',
        path: 'javascript-1',
        component: require('javascript/javascript-1.md'),
        children: [

        ],
      },
      {
        name: 'javascript-2',
        path: 'javascript-2',
        component: require('javascript/javascript-2.md'),
        children: [

        ],
      },
      {
        name: 'javascript-3',
        path: 'javascript-3',
        component: require('javascript/javascript-3.md'),
        children: [

        ],
      },
    ],
  },
];

export default menus;
