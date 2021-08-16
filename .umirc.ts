import { defineConfig } from 'umi';
import routes from './src/utils/route';
const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    fastRefresh: {},
    // mfsu: {},
    theme: lessToJs(
        fs.readFileSync(
            path.join(__dirname, './src/themes/default.less'),
            'utf8',
        ),
    ),
    routes: routes,
    // plugins: [
    //     [
    //         'umi-plugin-react',
    //         {
    //             dva: true,
    //         },
    //     ],
    // ],
    tailwindcss: {
        tailwindCssFilePath: '@/tailwind.css',
        tailwindConfigFilePath: 'tailwind.config.js', // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),
    },
    extraPostCSSPlugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
    ],
});
