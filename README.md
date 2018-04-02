## 文档索引

- [使用的库](#使用的库)
- [目录结构](#目录结构)
- [Npm命令](#Npm命令)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [支持的语法和Polyfills](#支持的语法和Polyfills)
- [安装依赖](#安装依赖)
- [代码分割](#代码分割)
- [添加样式文件](#添加样式文件)
- [Post-Processing CSS](#post-processing-css)

## 使用的库

* `react` - A JavaScript library for building user interfaces
* `react-router` - React Router is a collection of navigational components that compose declaratively with your application.
* `redux` - Redux is a predictable state container for JavaScript apps.
* `create-react-app` - is a global command-line utility that you use to create new projects.

## 目录结构

```
italki-react-starter/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    __tests__
    App/
      Page/
        Page.css
        Page.js
        Page.test.js
        pageModdule.js
        pageModdule.test.js
        ComponentA/
          ComponentA.css
          ComponentA.js
          ComponentA.test.js
      ComponentB/
          ComponentB.css
          ComponentB.js
          ComponentB.test.js
      App.css
      App.js
      App.test.js
    index.css
    index.js
```

为了项目的构建，**这些文件必须存在，并且不能修改文件名**:

* `public/index.html` 是项目的页面模板;
* `src/index.js` 是JavaScript入口文件。

其他文件可以删除或者重命名。

Webpack会自动处理保存于`src`文件夹中的**JS和CSS文件**，如果不在该文件夹内Webpack会忽略。

只有在`public`文件夹中的文件可以使用在`public/index.html`。

## Npm命令
### `npm start`

需要提供环境变量REACT_APP_WEBSITE=com / REACT_APP_WEBSITE=cn 启动开发服务器。[http://127.0.0.1:9000](http://127.0.0.1:9000)<br>

#### Mac / Linux

```sh
REACT_APP_WEBSITE=com npm start
REACT_APP_WEBSITE=cn npm start
```

#### Windows(command)

```cmd
set "REACT_APP_SECRET_CODE=abcdef" && npm start
```

#### Windows(Powershell)

```powershell
($env:REACT_APP_SECRET_CODE = "abcdef") -and (npm start)
```

### `npm run start-cn`

启动CN开发服务器, 该命令在windows下无法执行

### `npm run start-cn`

启动COM开发服务器, 该命令在windows下无法执行

### `npm test`

运行测试

### `npm test -- --coverage`

生成覆盖率报告

### `npm run build`

需要提供环境变量REACT_APP_WEBSITE=com / REACT_APP_WEBSITE=cn，生成`build`文件夹，为发布做准备

## 支持的语法和Polyfills

支持[ES6](https://github.com/lukehoban/es6features)语法的同时也支持以下语法:

* [指数运算符](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

[了解更多](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-)。

## 安装依赖

```sh
npm install --save react-router
```

也可以使用`yarn`:

```sh
yarn add react-router
```

## 代码分割

当用户使用时不下载整个网站而是按需加载。

通过[dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand)实现代码分割。`import()`从参数中获取模块名返回[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，以此来解决模块内命名空间。

下面是个简单列子:

### `moduleA.js`

```js
const moduleA = 'Hello';

export { moduleA };
```
### `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

`moduleA.js`和它的依赖会被分割成单独的chunk，只有在用户点击'Load'按钮时才加载。

### 集成React Router

[这里](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)介绍了怎么使用代码分割。

## 添加样式文件

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return <div className="Button" />;
  }
}
```

## Storybook

[Storybook](https://storybook.js.org/basics/introduction/) 是UI开发工具，通过它，可以直观的看到UI组件上各种不同状态的样式。

### 启动Storybook

```sh
npm run storybook
````

## Post-Processing CSS

压缩CSS时会自动添加多浏览器处理 [Autoprefixer](https://github.com/postcss/autoprefixer)。

例如:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

会转变成:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```
