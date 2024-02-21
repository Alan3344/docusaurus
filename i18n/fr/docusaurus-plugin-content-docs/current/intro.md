---
sidebar_position: 1
---

# Introduction du didacticiel

Explorons **Docusaurus**en moins de 5 minutes。

## commencer

Commencez par **Créer un nouveau site**.

Ou **Essayez Docusaurus maintenant** en utilisant **[docusaurus.new](https://docusaurus.new)**.

### de quoi avez-vous besoin

- [Node.js](https://nodejs.org/en/download/) 18.0 ou supérieur :
  - Lors de l'installation de Node.js, il est recommandé de cocher toutes les cases liées aux dépendances.

## Générer un nouveau site

Générez un nouveau site Docusaurus à l'aide du **Modèle classique**.

Après avoir exécuté la commande, le modèle classique sera automatiquement ajouté à votre projet :

```bash
npm init docusaurus@latest my-website classic
```

Vous pouvez taper cette commande dans l'invite de commande, Powershell, Terminal ou tout autre terminal intégré de votre éditeur de code.

Cette commande installe également toutes les dépendances requises pour exécuter Docusaurus.

## Lancez votre site Web

Exécutez le serveur de développement :

```bash
cd my-website
npm run start
```

`cd` commande pour changer le répertoire que vous utilisez. Pour utiliser le site Docusaurus nouvellement créé, vous devez y naviguer dans le terminal.

`npm run start` La commande crée votre site Web localement et le sert via un serveur de développement que vous pouvez consulter sur http://localhost:3000/.

Ouvrez `docs/intro.md` (cette page) et modifiez quelques lignes : Le site Web **se recharge automatiquement** et affiche vos modifications.
