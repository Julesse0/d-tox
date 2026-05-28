# DTÖX Static to WordPress

Ce thème est une base open-source GPL-2.0+ pour faire tourner votre site DTÖX dans WordPress sans changer son rendu visuel.

## Ce que fait le thème

- garde une structure WordPress standard avec `style.css`, `functions.php`, `header.php`, `footer.php`, `front-page.php`, `page.php` et `index.php`
- sert les fichiers statiques présents à la racine de WordPress si l'URL correspond à un fichier HTML exporté
- charge `site.css` et `site.js` si ces fichiers existent à la racine du site
- applique des redirections 301 depuis `redirects.txt`

## Installation

1. Copier le dossier `wp-theme-dtox` dans `wp-content/themes/`.
2. Copier votre export statique à la racine WordPress, au même niveau que `wp-config.php`.
3. Vérifier que les fichiers et dossiers comme `index.html`, `_next/`, `produits/`, `blog/`, `a-propos/`, `contact/`, `site.css` et `site.js` sont bien présents.
4. Activer le thème dans l'administration WordPress.
5. Compléter `redirects.txt` avec vos anciennes URLs.

## Format des redirections

Une ligne = une redirection.

```txt
/ancienne-page/ /nouvelle-page/
/blog/ancien-article/ /blog/articles/nouvel-article/
```

Les lignes qui commencent par `#` sont ignorées.

## Remarque importante

Ce thème ne réécrit pas le contenu du site en Gutenberg. Il sert votre export HTML d'origine à l'intérieur de WordPress, ce qui permet d'obtenir rapidement un site fonctionnel avec le même rendu.
