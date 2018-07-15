exports.sort = function (arr) {
  return arr.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
}

function walk (tree, paths, component) {
  const entry = paths[0];
  paths.splice(0, 1);
  if (!tree[entry]) {
    tree[entry] = {
      name: entry,
      path: entry,
      children: {},
    };
    if (!paths.length) {
      tree[entry].component = component;
    }
  }
  paths.length && walk(tree[entry].children, paths, component);
}

exports.walk = walk;

function flat (tree) {
  const entrys = Object.keys(tree);
  const result = [];

  entrys.forEach((entry) => {
    const item = tree[entry];
    const i = {
      name: item.name,
      path: item.path,
      children: flat(item.children),
    };
    if (item.component) {
      i.component = item.component;
    }
    result.push(i);
  });

  return result;
}

exports.flat = flat;
