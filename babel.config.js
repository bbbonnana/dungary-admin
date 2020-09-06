module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: false }
      }
    ]
  ]
  // plugins: [
  //   [
  //     'component',
  //     {
  //       libraryName: 'element-ui',
  //       styleLibraryName: '~theme'
  //     }
  //   ]
  // ]
}
