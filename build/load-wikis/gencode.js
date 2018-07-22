const start = 'const menus = [';

const end = `
];

export default menus;
`;


function gen (routes, indentNo) {
  let routesStr = '';
  indentNo += 1;
  let indent = Array(indentNo).fill('  ').join('');
  routes.forEach((route) => {
    routesStr = routesStr + `
${indent}{
${indent}  name: '${route.name}',
${indent}  path: '${route.path}',
${
  route.component
  ? indent + '  component: () => import(\'../../wikis/' + route.component + '\'),'
  : indent + `  component: { template: '<router-view></router-view>' },`
}
${indent}  children: [
${indent}    ${gen(route.children, indentNo + 1).trim()}
${indent}  ],
${indent}},`;
  });
  return routesStr;
}

exports.gencode = function (routes) {
  const result = start + gen(routes, 0) + end;
  return result;
}

function gencontent (routes, parentPath) {
  let content = '';
  routes.forEach((item) => {
    const path = parentPath + '/' + item.path;
    if (!(item.children && item.children.length)) {
      content += `* [${item.name}](${path})\n`;
    } else {
      content += gencontent(item.children, path);
    }
  });

  return `${content}\n`;
}

exports.genindex = function (routes) {
  const lines = ['|', '|', '|'];
  routes.forEach((route, index) => {
    lines[0] += ` ${index + 1} |`;
    lines[1] += ' :-: |';
    lines[2] += ` [${route.name}](#${route.path}) |`;
  });
  const list = lines.join('\n');

  let content = '';
  routes.forEach((route) => {
    content += `## [${route.name}](#${route.path})\n`;
    content += gencontent(route.children, route.path);
  });

  return `${list}\n${content}`;
};
