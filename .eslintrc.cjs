module.exports =   {
    root: true,
    env: {
      browser: true,
      es2020: true,
      node: true,
      jest: true
    },
    globals: {
      ga: true,
      chrome: true,
      __DEV__: true
    },
    plugins: ['@typescript-eslint'],
    parserOptions: {
      parser: '@typescript-eslint/parser', // 解析 .ts 文件
      sourceType: 'module'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      "prettier/prettier": "off"
    }
  }
