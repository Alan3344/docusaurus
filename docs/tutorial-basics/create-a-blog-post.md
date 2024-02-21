---
sidebar_position: 3
---

# 创建博客文章

Docusaurus 为每个博客文章创建一个 **页面**，同时还创建一个 **博客索引页面**、**标签系统**、**RSS** 提要...

## 创建您的第一篇文章

在 `blog/2021-02-28-greetings.md` 创建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

恭喜，您已经发表了第一篇文章！

您可以随意尝试和编辑这篇文章。
```

现在可以在 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings) 上找到新的博客文章。
