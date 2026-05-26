# Migration WordPress D-tox

Ce dossier contient la migration progressive du site Next/React vers un WordPress vitrine versionné dans le dépôt.

## Structure

- `wp-content/themes/dtox-vitrine/` : thème WordPress custom.
- `wp-content/themes/dtox-vitrine/assets/` : images, styles, scripts et données de seed.
- `wp-content/themes/dtox-vitrine/inc/` : CPT, taxonomies, Customizer, helpers et import initial.
- `docker-compose.yml` : environnement local WordPress + MySQL pour vérifier le thème.

Le core WordPress n'est pas versionné ici. Le dossier récupéré `../dtox4life` sert de référence historique et de source d'assets, mais il n'est pas modifié directement.

## Installation locale

1. Depuis ce dossier, lancer WordPress :

   ```bash
   docker compose up -d
   ```

2. Ouvrir `http://localhost:8080` et terminer l'installation WordPress.
3. Activer le thème `D-tox Vitrine`.
4. À l'activation, le thème crée les pages, produits, articles, fournisseurs et menus de base si absents.
5. Aller dans `Réglages > Permaliens` puis enregistrer pour rafraîchir les routes si nécessaire.

## Routes visees

- `/`
- `/produits`
- `/produits/d-tox`
- `/produits/chateau`
- `/a-propos`
- `/contact`
- `/blog`
- `/blog/articles`
- `/blog/recettes`
- `/blog/reseaux`

## Edition du contenu

- Produits : type de contenu `Produits D-tox`.
- Blog : type de contenu `Blog D-tox`, classe par rubrique.
- Fournisseurs : type de contenu privé `Partenaires D-tox`.
- Contact et réseaux sociaux : `Apparence > Personnaliser > D-tox`.
- Menus : `Apparence > Menus`, emplacement `Navigation principale`.
- Logo : `Apparence > Personnaliser > Identité du site`.

## Contenu importé

- Produits et fournisseurs : valeurs reprises depuis le contenu React actuel.
- Articles : import initial depuis `assets/data/legacy-blog.json`.
- Images historiques : `assets/legacy-blog/uploads/` et `assets/legacy-wp-uploads/`.
- Images principales du rendu actuel : `assets/images/`.

## Vérifications

```bash
npx tsc --noEmit
```

Pour vérifier le PHP sans installation locale de PHP, utiliser Docker depuis la racine du dépôt :

```bash
docker run --rm -v "${PWD}/wordpress/wp-content/themes/dtox-vitrine:/theme" php:8.2-cli sh -lc "find /theme -name '*.php' -print0 | xargs -0 -n1 php -l"
```

Après activation du thème, vérifier au minimum :

- `/`, `/produits`, `/produits/d-tox`, `/produits/chateau`
- `/a-propos`, `/contact`
- `/blog`, `/blog/articles`, `/blog/recettes`, `/blog/reseaux`

## Notes

Cette migration privilégie WordPress natif : types de contenus, taxonomies, menus, Customizer et champs meta simples. Aucun ACF n'est requis.

Le formulaire de contact utilise Contact Form 7 si une fiche existe dans l'admin. Sinon, le thème affiche un formulaire HTML de secours en `mailto:`.
