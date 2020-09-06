# Dungary 管理后台项目


## 代码提交规范

## 打包配置

为了方便调试，项目将打包配置分为三部分：**运行模式**、**打包模式**和**运行环境**

### 运行模式

其分为**webpack开发服务运行**和在**远程服务器运行**，对于前者，将混入热加载等配置，而对于后者则不需要做额外操作

### 打包模式

其分为**开发打包模式**和**生产打包模式**，在后者中将对代码进行压缩，做必要的优化处理；配置文件形如`webpack.dev.js`、`webpack.prod.js`等

### 运行环境

应用分三个环境：local本地环境，dev开发环境及prod生产环境，分别对应三份不同的后台数据

## 心得

### 遇到的坑

* **postcss-loader** 

  需要配置`.browserslistrc`文件，现阶段大部分浏览器已提供css3良好支持，打包后可能不出现兼容前缀

* **css-loader v4.0.0+ 与vue-style-loader不兼容**

### Babel

* **@babel/core**

  开发依赖；babel核心，用于将代码转换成抽象语法树，配合plugin和preset进行后续转换

* **@babel/preset-env**

  开发依赖；用于babel转换es6+语法（const、箭头函数等）

  默认不包含Promise，async函数等的polyfill，若需提供polyfill，需安装**运行依赖**`core-js`，并配合.browserslistrc进行代码转换，参考配置：

  ```js
  {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: { version: 3, proposals: false }
        }
      ]
    ]
  }
  ```

  **缺点：**

  * 对Promise等的polyfill会污染全局变量
  * 且按需转换若忽略第三方库可能出现问题
  * 对Class、async函数等会转换产生重复内嵌代码，代码冗余

* **@babel/runtime | @babel/runtime-corejs3**

  配合`@babel/plugin-transform-runtime`使用，对Class、async函数等转换使用helper函数以达复用；不污染全局变量

**备注：待项目开发后期比较两者打包体积大小差异**

