---
sidebar_position: 2
---

# 创建文档

文档是 **页面组**，通过以下方式连接：

- a **sidebar**
- **previous/next navigation**
- **versioning**

## 创建您的第一个文档

在 `docs/hello.md` 创建一个 Markdown 文件：

```md title="docs/hello.md"
# Hello

这是我的 **第一份 Docusaurus 文档**！
```

现在可以在 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) 上找到新文档。

## 配置侧边栏

Docusaurus 自动从 `docs` 文件夹 **创建侧边栏**。

添加元数据以自定义侧边栏标签和位置：

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

这是我的 **第一份 Docusaurus 文档**！
```

也可以在“sidebars.js”中显式创建侧边栏：

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
