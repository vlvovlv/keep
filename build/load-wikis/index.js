const path = require('path');
const globby = require('globby');
const fs = require('fs-extra');

const { sort, walk, flat } = require('./utils');
const { gencode, genindex } = require('./gencode');

(async () => {
  const pageFiles = sort(await globby(['**/*.md'], { cwd: path.resolve(__dirname, '../../wikis') }))
  const dest = path.resolve(__dirname, '../../src/router/menus.js');
  const indexDest = path.resolve(__dirname, '../../README.md');
  let routes = {};

  pageFiles.forEach((file) => {
    let arr = file.split('/');
    const paths = arr.map((item, index) => {
      if (arr.length - 1 === index) {
        const temp = item.split('.');
        temp.splice(temp.length - 1, 1);
        return temp.join('');
      }
      return item;
    });
    walk(routes, paths, file);
  });

  routes = flat(routes);

  const template = gencode(routes);
  const indexTemplate = genindex(routes);

  await fs.writeFile(dest, template);
  await fs.writeFile(indexDest, indexTemplate);
})();
