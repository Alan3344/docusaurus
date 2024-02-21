---
sidebar_position: 3
---

# Créer un article de blog

Docusaurus crée une **page** pour chaque article de blog, et crée également une **page d'index de blog**, un **système de balises**, un flux **RSS**...

## Créez votre premier article

Créez un fichier dans `blog/2021-02-28-greetings.md` :

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

Félicitations, vous avez publié votre premier article !

N'hésitez pas à essayer de modifier ce message.
```

De nouveaux articles de blog sont désormais disponibles sur [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
