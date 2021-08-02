import { defineConfig } from 'umi';
const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  mfsu: {},
  theme: lessToJs(
    fs.readFileSync(path.join(__dirname, './src/themes/default.less'), 'utf8')
  ),
});
