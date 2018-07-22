const slugify = require('transliteration').slugify;
const spawn = require('cross-spawn');
const path = require('path');

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
      path: slugify(entry),
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
      path: slugify(item.path),
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

exports.getGitLastUpdatedTimeStamp = function (filepath) {
  filepath = path.join(__dirname, filepath);
  return parseInt(spawn.sync('git', ['log', '-1', '--format=%ct', filepath]).stdout.toString('utf-8')) * 1000;
}
