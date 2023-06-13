import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Aone-UI',
  mode: 'site',
  // logo:'/images/aone.png',
  // favicons: ["/images/aone.png"]
  // more config: https://d.umijs.org/config
  outputPath: 'docs-dist',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
});
