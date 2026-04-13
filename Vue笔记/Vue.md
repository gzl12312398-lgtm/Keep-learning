# Vue

## Web前端框架

### 概念

**前端框架**是专注于 Web 前端开发的预先编写好的代码集合，为开发人员提供可重用的组件和工具。它封装了 HTML、CSS 和 JavaScript 等基础技术，并提供了高级组件和逻辑实现机制。

其核心理念源自软件工程中的 模块化 和 代码复用原则，旨在帮助开发者更高效地构建复杂、可维护的用户界面。



### 前端框架的核心作用

前端框架的引入极大地提升了开发效率与项目质量，具体体现在以下几个方面：

| 作用                     | 描述                                                    |
| ------------------------ | ------------------------------------------------------- |
| 降低开发难度             | 让开发者专注于业务逻辑，减少对底层技术细节的关注        |
| 提高可维护性与可扩展性   | 统一的代码结构和设计模式便于后期维护和功能扩展          |
| 丰富的组件与插件支持     | 加速开发流程，提升开发质量                              |
| 良好的目录结构与文档规范 | 保持代码整洁，减少错误率                                |
| 组件化开发               | 通过组件系统分解复杂界面，创建可复用的 UI 组件          |
| 数据自动处理与同步       | 实现视图与数据模型的自动同步，减少手动操作 DOM 的工作量 |
| 支持多端开发             | 如 React Native、Vue + Quasar、Electron 等              |
| 提升 SEO 友好性          | 服务端渲染（SSR）和静态生成（SSG）优化搜索引擎抓取      |



### 按技术栈分类

| 类型            | 示例                                |
| --------------- | ----------------------------------- |
| JavaScript 框架 | React、Vue、Angular                 |
| CSS 框架        | Bootstrap、Tailwind CSS、Foundation |
| 构建工具        | Vite、Webpack、Rollup、Parcel       |
| 状态管理库      | Redux、Vuex、MobX、Pinia            |



## Vue的基本认识

Vue (发音为 /vjuː/，类似 **view**) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。

### Vue 的核心功能

- **声明式渲染**：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。
- **响应性**：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。



### 渐进式框架

Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。因此可以用不同的方式使用 Vue：

- 无需构建步骤，渐进式增强静态的 HTML
- 在任何页面中作为 Web Components 嵌入
- 单页应用 (SPA)
- 全栈 / 服务端渲染 (SSR)
- Jamstack / 静态站点生成 (SSG)
- 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面



### 单文件组件

在大多数启用了构建工具的 Vue 项目中，我们可以使用一种类似 HTML 格式的文件来书写 Vue 组件，它被称为**单文件组件** (也被称为 `*.vue` 文件，英文 Single-File Components，缩写为 **SFC**)。顾名思义，Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里。



### API风格

两种 API 风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 是在组合式 API 的基础上实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。

#### 选项式API

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 `data`、`methods` 和 `mounted`。选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。

选项式 API 以“组件实例”的概念为中心 (即上述例子中的 `this`)，对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。

#### 组合式API

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [``](https://cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

组合式 API 的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。这种形式更加自由，也需要你对 Vue 的响应式系统有更深的理解才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更加强大。



## Vue开发环境的安装

### Vue的主要安装使用方式

#### 1.使用全局构建版本

使用了全局构建版本的 Vue，该版本的所有顶层 API 都以属性的形式暴露在了全局的 Vue 对象上。

#### 2.通过 CDN 使用 Vue

你可以借助 script 标签直接通过 CDN 来使用 Vue：

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

可以使用任何提供 npm 包服务的 CDN，例如 jsdelivr 或 cdnjs。当然，也可以下载此文件并自行提供服务。

通过 CDN 使用 Vue 时，不涉及“构建步骤”。这使得设置更加简单，并且可以用于增强静态的 HTML 或与后端框架集成。但是，你将无法使用单文件组件 (SFC) 语法。

#### 3.npm方式安装vue

安装npm 需要安装note.js（**NPM是包含在Node.js里的包管理工具**），它具有以下功能：允许用户从NPM服务器下载别人编写的第三方包到本地使用。允许用户把自己编写的包或插件上传到NPM服务器供别人下载使用。来自各地的开源软件开发者可以使用 npm 互相分享和借鉴。包的结构使软件开发者能够轻松跟踪项目依赖项和版本。



### node.js的安装及配置

#### 1. 安装node.js

#### 2. 配置npm下载时的默认安装目录和缓存日志目录

这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为npm install express [-g] 执行全局安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径目录下，久而久之C盘很容易被占满（C盘足够大可以无视此步骤），通过设置，将默认安装目录和缓存日志目录重新配置到其他盘符节约C盘空间

**例如：**

![屏幕截图 2026-04-02 194622](assets/屏幕截图 2026-04-02 194622.png)

解释如下：

 1️⃣ builtin（npm自带默认配置）

```
; "builtin" config from C:\Program Files\nodejs\node_modules\npm\npmrc
```

2️⃣ user（用户级配置 ⭐重点）

```
; "user" config from C:\Users\35748\.npmrc
```

👉 这是你手动配置的内容（最关键）：

```
cache = "D:\\作业\\00nodejs\\node.js\\node_cache"
prefix = "D:\\作业\\00nodejs\\node.js\\node_global"
registry = "http://registry.npmmirror.com"
```

✔ 说明：

| 配置项   | 含义                               |
| -------- | :--------------------------------- |
| cache    | npm缓存目录（你改到D盘了👍）        |
| prefix   | 全局安装目录（全局包位置）         |
| registry | 镜像源（你用的是淘宝镜像，加速用） |

3️⃣ 覆盖提示（关键点⚠️）

```
; prefix = "C:\\Users\\35748\\AppData\\Roaming\\npm" ; overridden by user
```

👉 意思是：

- 原本默认全局路径在 C 盘
- ❗但被你 user 配置覆盖了
- ✔ 现在实际使用的是：

```
D:\作业\00nodejs\node.js\node_global
```



👉 现在的 npm 行为是：

- 📦 全局安装 → D盘 node_global
- ⚡ 缓存/日志 → D盘 node_cache
- 🌐 下载源 → 淘宝镜像
- 📁 项目依赖 → 当前项目 node_modules

✔ 完全健康配置 



#### 3. npm配置命令

查看npm的全局路径：npm list -global

查看基本配置：npm config list

查看所有配置：npm config list -l 

获取全局安装的默认目录：npm config get prefix

设置全局安装的默认目录：npm config set prefix “directory”

> npm本地安装与全局安装区别：
>
> **本地安装：**
>
> npm install 模块
>
> 是将模块下载到当前命令行所在目录。
> **全局安装：**
>
> npm install -g 模块
>
> 模块将被下载安装到【全局目录】中；

#### 4. npm配置镜像站

为什么要配置？

npm 的官方仓库服务器部署在国外（主要是美国），我们在国内直接访问时，会遇到下载速度慢且下载失败率高的问题

而国内的 npm 镜像站（比如淘宝 npm 镜像 `registry.npmmirror.com`）是把官方仓库的包同步到国内服务器，相当于 “国内中转站”，能够完美解决上述问题

- 临时指定淘宝镜像源：

  `npm --registry http://registry.npmmirror.com install express`

- 永久指定淘宝镜像源：

  `npm config set registry http://registry.npmmirror.com`

- 安装 cnpm

  `npm install -g cnpm --registry=http://registry.npmmirror.com`

**5. 配置环境变量**



### 跑Vue项目的完整流程

#### 1. 创建项目

在终端输入：

```
npm create vite@latest
```

#### 2. 按提示选择

会出现交互：

```
✔ Project name: my-vue-app
✔ Select a framework: Vue
✔ Select a variant: JavaScript（新手选这个）
```

#### 3. 进入项目目录

```
cd my-vue-app
```

#### 4. 安装依赖

```
npm run dev
```

#### 5. 启动项目

```
npm run dev
```

#### 6. 打开浏览器

终端会显示类似：

```
http://localhost:5173/
```

👉 打开这个地址，就能看到 Vue 页面 🎉

![Leveraging Pinia to simplify complex Vue state management - LogRocket Blog](assets/23hvPajYp3pQLBn7JeArQ-41Lo1NTBfyD12F02UQwu_7qoHguJNdsZjWclEDJoTW-r5wK1m3SOuWG2IYxeP_RY_jGr9uNIX9seVF7pyB6fuB_ITyMHp9upN72Vs83vYl4nYog4SC9RzsGfIEeIoP7Nmkmqa1powSMNThKSSMfRcAhXdKY4p0fM2eYc-hUwjo.jpeg)





#### 7.项目结构：

![手把手教你使用Vite创建Vue3项目 - lizhigang - 博客园](assets/El-rRgWSwqXN0kSUcVfV0zfFuiVA7kCAsJO6QjFTsJSjI9U2Tv7jLmhfJTm-eiac3fSW-VSNZlW3sPsJDxs48SX9Xu7rXhFsxkG7PsFAhYl2vFmHpoVOggK-9K1qATmkttkuMhmbhN3YN4WKqgnLki0O28PykaNExMboyqSoqSmrKKtFiTfaiU_1CaZx_sVt.jpeg)



## 好用的工具

### ❗不要贪多

 最容易犯的错误：

> “这个库也学一点，那个也学一点”

###  正确路线

👉 第一阶段：

- Vite 
- Element Plus 
- Axios 

👉 第二阶段：

- Pinia
- Vue Router

👉 第三阶段：

- Ant Design Vue（企业项目）
- Tailwind / UnoCSS



### Ant Design Vue

[Ant Design Vue](https://antdv.com/components/overview-cn)

Ant Design Vue 是一套基于 Vue 的 企业级 UI 组件库，由蚂蚁金服 Ant Design 体系延伸而来。

**优点：**

- 企业级设计规范
- 组件非常全面
- 开箱即用（效率极高）
- 适合后台管理系统、数据管理平台



![屏幕截图 2026-04-02 210319](assets/屏幕截图 2026-04-02 210319.png)



### Element Plus

[Element Plus](https://element-plus.org/zh-CN/component/overview)

**优点：**

- 中文文档非常友好

- 学习成本低

- 社区非常大

![vue3-element-plus-admin 后台管理系统（Vue3学者速速进来看看） - 墨天轮](assets/ymOu3gQ78j46pRfW_7F1yLhP5KXpNJaYxpHTGv28_XbwPEuTsRH3Dt1EFSBNbVwrvVKF9jkhcRQkjM5avbCVfeTv3gNvY__7RPlErXmwAPLINidn4FFW32Ep9AY872pYIJpfgAsJo7pCPAo_dPeHoZMxlc9GLDviqkKNWlrEMQLBYdlUbndxNXqxSKi1gedj.jpeg)



### Naive UI

[Naive UI](https://www.naiveui.com/)

**优点：**

- 设计更现代
- 支持暗黑模式很好
- 性能优秀

💡 适合想做“高级感项目”的人

![GitHub - sohaha/naiveui-admin-template: 🔥 基于 Vue3 + Unocss + Naive UI 的轻量简洁的后台管理模板](assets/SYWQRL_409wE9gog4z_e2XuejZ12ny7N8dmGmEmo-vd7bnBMEDZVA3Zw3z-VZ8UipmoF8PwkCkeDKHQATOejtePEPOQGcP6Kcb9wAw6VmgnaKZ57OF_n3t0U5RDVVBpUHZh5x5MdwxghyARx3pfpvBXO74TAEgXml7s9ScKKKHlh6CXsVgROT9WF0stBISyb.jpeg)



### Vuetify

[Vuetify](https://vuetifyjs.com/en/)

**⭐ 特点：**

- Google Material Design 风格
- UI一致性强

![Fantastic 15 Vuetify Examples GitHub 2024 - ThemeSelection](assets/70FC_fq2iOx3PYB_2WaGYPGKe7uIztmAprumyT_Jpdy-PAOpaQ9oEaBW56nfdiy7Bl7qFF64_8-Ke2TyL6FllKMb8GY31SG5lp1kB6uF2dYqDy76iA9-lQAeZZ11OuYLVacCf5ObTWMVHbVQ_evTMjR8SykEWpD7NiH4GXrTDrCElLvmxq_xa9w9r2Dl2Dsk.jpeg)



# Vue语法

## 用Vue+Vite开启一个新项目

如果是从0开始：[Vue3 安装 | 菜鸟教程](https://www.runoob.com/vue3/vue3-install.html)

否则：

不管你以前电脑上有没有 Vite 项目，创建一个新 Vite 项目的动作永远是：

1. npm create vite@latest（**调用**创建工具，无需手动安装）
2. 输入项目名并选择框架。
3. cd 项目名（**进入**新文件夹）
4. npm install（**每个项目都要跑一遍**，把 Vite 下载到当前项目里）
5. npm run format(自动整理代码格式)
6. npm run dev（**启动**）

**一句话总结：** 只要是**新文件夹**，就要重新 **npm install**。



接下来：

1.使用Ant Design Vue

2.A. 两个独立页面：点击“去注册”跳转到新页面（需要用到 Vue Router），除此之外再加入一个欢迎页

3.后端也我自己写，想顺便练习Axios和数据库知识（目前还不会）

4.表单校验：比如用户名不能为空、密码必须大于6位。
密码明文/密文切换：点小眼睛图标显示密码。

5.项目已经创建好了，已经执行到了npm run dev这一步，已经有了一个空白页面



### 后端

#### 搭建后端服务器 (Node.js + Express + SQLite)

我们要在你的项目目录下创建一个新的文件夹 server。

##### 1. 初始化后端环境

打开一个新的终端窗口：

codeBash

```
mkdir server
cd server
npm init -y
npm install express cors sqlite3 sqlite
```

- **express**: 极简的 Web 框架。
- **cors**: 处理跨域（因为前端在 5173 端口，后端在 3000 端口）。
- **sqlite3 & sqlite**: 操作数据库。



## 路由

Vue 路由允许我们通过不同的 URL 访问不同的内容。

通过 Vue 可以实现多视图的单页 Web 应用（single page web application，SPA）。

**官方 Router：**

对于大多数单页面应用，都推荐使用官方支持的 [vue-router 库 ](https://github.com/vuejs/vue-router)。更多细节可以移步 [vue-router 文档 ](https://next.router.vuejs.org/)。

Vue Router 负责将 URL 路径与应用中的组件进行映射，当用户在应用中浏览时，URL 会更新，但页面不会重新加载，从而提供流畅的用户体验。

![img](assets/20129187VHbf5OQ3Ur.png)

上图展示了一个**两层级的嵌套路由结构**：

- **顶层 (`App.vue` 的 `<router-view>`)** 负责渲染**独立布局**（如 `Login.vue`）或**主框架布局**（`Layout.vue`）。
- **主框架布局 (`Layout.vue`)** 内部包含第二个 `<router-view>`，用于渲染**功能页面的子组件**（如 `Dashboard.vue`、`User.vue`），从而实现页头、侧边栏和页脚的持久化显示。
- 未匹配的路径最终会导向独立的 `page404.vue`。

### 核心组成部分

| 组成部分            | 描述                                                         | 选项式 API 访问 | 组合式 API 访问 |
| :------------------ | :----------------------------------------------------------- | :-------------- | :-------------- |
| **`router` 实例**   | 整个路由系统的实例，用于全局导航、添加路由等。               | `this.$router`  | `useRouter()`   |
| **`route` 对象**    | 当前激活的路由状态对象，包含当前 URL、参数、查询等信息。     | `this.$route`   | `useRoute()`    |
| **`<router-link>`** | 用于在应用中进行导航的组件，会被渲染成一个 `<a>` 标签，但可以阻止默认的页面刷新。 | -               | -               |
| **`<router-view>`** | 路由匹配到的组件将渲染在这个位置。                           | -               | -               |

------

### 怎么用？

**1. 安装与配置**

```js
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// 定义路由规则：path（路径）对应 component（组件）
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    // 动态路由参数 :id
    path: '/user/:id',
    name: 'User',
    component: () => import('../views/User.vue') // 懒加载
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 history 模式（路径不带 #）
  routes
})

export default router
```

**2. 在 main.js 中挂载**

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router) // 让 Vue 认识路由
app.mount('#app')
```

**3. 在页面中使用**

```vue
<template>
  <div>
    <!-- 1. 使用 router-link 代替 a 标签，to 属性指定跳转地址 -->
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link :to="{ name: 'User', params: { id: 123 } }">
        用户123
      </router-link>
    </nav>

    <!-- 2. 使用 router-view 作为容器，匹配到的组件会显示在这里 -->
    <router-view />
  </div>
</template>
```

**4. 编程式导航（在 JS 中跳转）**

```js
// 在 Vue 组件的方法中
methods: {
  goToAbout() {
    // 字符串路径
    this.$router.push('/about')
    
    // 或者带参数的对象
    this.$router.push({ path: '/user/456' })
    
    // 或者通过路由名称跳转（推荐）
    this.$router.push({ name: 'User', params: { id: 456 } })
  },
  goBack() {
    this.$router.go(-1) // 后退一步
  }
}
```





### **注意**：

- **`<router-link>`** 会被渲染成 `<a>` 标签，但点击时不会刷新页面。
- **`<router-view>`** 是“插座”，当前路径匹配到的组件会显示在这里。
- **动态路由**：`/user/:id` 中的 `:id` 可以在组件中通过 `this.$route.params.id` 获取。
- **区别 `$router` 和 `$route`**：
  - `$router`：路由器实例，用来**执行跳转**（`push`， `go`， `replace`）。
  - `$route`：当前激活的路由信息，用来**获取参数**（`params`， `query`， `path`）。



### 实例分析1

```ts
// 这是我的登录注册2.0里面的index.ts

//这行代码从 vue-router 库中导入了两个核心函数：
//- createRouter: 用于创建和管理路由的实例。
//- createWebHistory: 用于启用 HTML5 History 模式，这种模式下的 URL 看起来更干净，没有 # 符号。
//- RouteRecordRaw :为你的路由配置数组提供类型检查
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';

// 这里调用 createRouter 函数，并传入一个配置对象，创建了一个路由实例，并将其赋值给 router 常量。
const router = createRouter({
   // createWebHistory(...) 设置了路由的模式为 HTML5 History 模式。
   // import.meta.env.BASE_URL 是一个 Vite 环境变量，它通常指向你在 vite.config.js 或 vite.config.ts 文件中配置        的 base 选项。这个配置主要用于处理应用部署在服务器子路径（例如 example.com/my-app/）的情况。如果你的应用部署在根        路径，这个值通常是 /
  history: createWebHistory(import.meta.env.BASE_URL),
  // 这是一个数组，用于定义你所有的路由规则。目前数组是空的 []，意味着还没有定义任何路径。你需要在这里添加对象来配置路径和组      件的对应关系
  routes: [],
})

// 最后，将创建好的 router 实例导出。这样，你就可以在 main.js 或 main.ts 文件中导入它，并通过 app.use(router) 将其挂载到 Vue 应用上，使整个应用具备路由功能。
export default router

```











## 指令

Vue 指令（Directives）是 Vue.js 的一项核心功能，它们可以在 HTML 模板中以 **v-** 开头的特殊属性形式使用，用于将响应式数据绑定到 DOM 元素上或在 DOM 元素上进行一些操作。

Vue 指令是带有前缀 **v-** 的特殊 HTML 属性，它赋予 HTML 标签额外的功能。

与传统的 JavaScript 方法相比，使用 Vue 创建响应式页面要容易得多，并且需要的代码更少。

**以下是几个常用的 Vue 指令：**

| 指令      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| `v-bind`  | 用于将 Vue 实例的数据绑定到 HTML 元素的属性上。              |
| `v-if`    | 用于根据表达式的值来条件性地渲染元素或组件。                 |
| `v-show`  | v-show 是 Vue.js 提供的一种指令，用于根据表达式的值来条件性地显示或隐藏元素。 |
| `v-for`   | 用于根据数组或对象的属性值来循环渲染元素或组件。             |
| `v-on`    | 用于在 HTML 元素上绑定事件监听器，使其能够触发 Vue 实例中的方法或函数。 |
| `v-model` | 用于在表单控件和 Vue 实例的数据之间创建**双向数据绑定**。    |

### **注意**：

- `v-model` 本质上是一个语法糖，它帮我们做了两件事：绑定了 `value` 属性和监听了 `input` 事件。只在表单元素上使用。
- **`:key` 很重要**：尽量使用数据中唯一的 `id`，不要用 `index`（除非列表不会重新排序）。
- **不要同时用 `v-for` 和 `v-if`**：Vue 会先执行 `v-for` 再执行 `v-if`，导致性能浪费。如果一定要过滤列表，应该用**计算属性**先过滤数据，再 `v-for`。
- **`v-if` vs `v-show`**：
  - `v-if`：真正的条件渲染，切换时元素会被销毁/重建。适合运行时很少改变条件的情况。
  - `v-show`：只是切换 CSS 的 `display: none`，元素始终存在。适合频繁切换显示/隐藏的场景。
- `v-if` 是惰性的：如果初始条件为假，什么也不做，直到条件变为真时才开始渲染。
