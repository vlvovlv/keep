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
  ? indent + '  component: require(\'' + route.component + '\'),'
  : ''
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
