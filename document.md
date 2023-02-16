# document

# FancyUI 说明

**fancy-ui 基于 vite、vue3进行开发。**

一. 支持`Vue3`和`Jsx`两种开发模式语法（因为项目刚搭建好，可以讨论使用其一种）。

1. 安装了`@vitejs/plugin-vue`用于支持vue语法
2. 安装了`@vitejs/plugin-vue-jsx`用于支持jsx语法

二. 使用`Ts`开发语言，尽量避免使用`any`。

1. `vite`支持`ts`的开箱即用，所以不用安装和配置什么，在`tsconfig.json`中配置一些规则就可以了

三. 文档使用`vitepress`，为了做成和`elementui`的那种有代码示例的效果集成了`vitepress-theme-demoblock`插件。具体使用可以网上看文档https://github.com/xinlei3166/vitepress-theme-demoblock文档在`docs`文件夹下

1. `.vitepress` 为`vitepress`一些配置
    1. `theme` 用于配置主题和引用`FancyUI`
    2. `config.ts` 用于配置一些基础信息和路由
2. `components` 书写具体组件文档
    1. 具体示例代码使用插槽`：：：`的写法
3. `guide`以后配置公共菜单使用，暂时没写


四. 集成了`vitest`测试工具，说是`vitest`对`vite`最好，就用`vitest`。

1. 安装了`vitest` 测试框架，用于执行整个测试过程和`jest api`大致相同
2. 安装 `happy-dom`用于在Node开发环境中模拟 `Dom` 
3. 安装`@vue/test-utils` ，这个是`Vue`推荐的测试工具库。

五. 接下来准备集成`eslint`，`stylelint`等代码规范化工具（待完成）

六. 现在并未发布到`npm`

## 项目目录

- `demo` 用于开发测试打包后的真实的组件库，可以看到打包后的效果
- `dist` 打包后的文件
- `docs` 文档目录
- `packages` 组件目录
    - `components` 组件
        - `button` button组件
            - `__test__` 测试文件
            - `src` 组件目录
            - `index.ts` 导出文件
        - `index.ts` 导出整个组件
    - `theme` 组件样式目录
        - `config` 用于公共样式
        - `src` 单个组件样式
        - `index.scss` 导出整个组件样式
- `play` 用于开发环境测试组件
