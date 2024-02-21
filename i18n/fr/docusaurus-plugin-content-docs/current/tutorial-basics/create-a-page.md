---
sidebar_position: 1
---

# Créer une page

Ajoutez des fichiers **Markdown ou React** à `src/pages` pour créer une **page autonome** :

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Créez votre première page React

Créez un fichier dans `src/pages/my-react-page.js` :

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

Une nouvelle page est désormais disponible sur [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Créez votre première page Markdown

Créez un fichier dans `src/pages/my-markdown-page.md` :

```mdx title="src/pages/my-markdown-page.md"
# Ma page Markdown

Ceci est une page Markdown
```

Une nouvelle page est maintenant disponible sur [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
