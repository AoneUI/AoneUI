// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { demos as dm0, frontmatter as fm0, toc as toc0, texts as txt0 } from 'H:/AoneUI/docs/getting-started.zh-CN.md?type=meta';
import { demos as dm1, frontmatter as fm1, toc as toc1, texts as txt1 } from 'H:/AoneUI/docs/getting-started.md?type=meta';
import { demos as dm2, frontmatter as fm2, toc as toc2, texts as txt2 } from 'H:/AoneUI/docs/index.zh-CN.md?type=meta';
import { demos as dm3, frontmatter as fm3, toc as toc3, texts as txt3 } from 'H:/AoneUI/docs/help.zh-CN.md?type=meta';
import { demos as dm4, frontmatter as fm4, toc as toc4, texts as txt4 } from 'H:/AoneUI/docs/index.md?type=meta';
import { demos as dm5, frontmatter as fm5, toc as toc5, texts as txt5 } from 'H:/AoneUI/docs/help.md?type=meta';
import { demos as dm6, frontmatter as fm6, toc as toc6, texts as txt6 } from 'H:/AoneUI/src/button/index.md?type=meta';

export { components } from './atoms';
export { tabs } from './tabs';

export const filesMeta = {
  'docs/getting-started.zh-CN': {
    frontmatter: fm0,
    toc: toc0,
    texts: txt0,
    demos: dm0,
  },
  'docs/getting-started': {
    frontmatter: fm1,
    toc: toc1,
    texts: txt1,
    demos: dm1,
  },
  'docs/index.zh-CN': {
    frontmatter: fm2,
    toc: toc2,
    texts: txt2,
    demos: dm2,
  },
  'docs/help.zh-CN': {
    frontmatter: fm3,
    toc: toc3,
    texts: txt3,
    demos: dm3,
  },
  'docs/index': {
    frontmatter: fm4,
    toc: toc4,
    texts: txt4,
    demos: dm4,
  },
  'docs/help': {
    frontmatter: fm5,
    toc: toc5,
    texts: txt5,
    demos: dm5,
  },
  'components/button/index': {
    frontmatter: fm6,
    toc: toc6,
    texts: txt6,
    demos: dm6,
  },
}

// generate demos data in runtime, for reuse route.id to reduce bundle size
export const demos = Object.entries(filesMeta).reduce((acc, [id, meta]) => {
  // append route id to demo
  Object.values(meta.demos).forEach((demo) => {
    demo.routeId = id;
  });
  // merge demos
  Object.assign(acc, meta.demos);

  // remove demos from meta, to avoid deep clone demos in umi routes/children compatible logic
  delete meta.demos;

  return acc;
}, {});
