# Migration WordPress D-tox

Ce dossier contient la migration progressive du site Next/React vers un WordPress vitrine versionne dans le depot.

## Structure

- `wp-content/themes/dtox-vitrine/` : theme WordPress custom.
- `wp-content/themes/dtox-vitrine/assets/` : images, styles, scripts et donnees de seed.
- `docker-compose.yml` : environnement local WordPress + MySQL pour verifier le theme.

Le core WordPress n'est pas versionne ici. Le dossier recupere `../dtox4life` sert de reference historique et de source d'assets, mais il n'est pas modifie directement.

## Installation locale

1. Depuis ce dossier, lancer WordPress :

   ```bash
   docker compose up -d
   ```

2. Ouvrir `http://localhost:8080` et terminer l'installation WordPress.
3. Activer le theme `D-tox Vitrine`.
4. A l'activation, le theme cree les pages, produits, articles, fournisseurs et menus de base si absents.
5. Aller dans `Reglages > Permaliens` puis enregistrer pour rafraichir les routes.

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
- Fournisseurs : type de contenu prive `Partenaires D-tox`.
- Contact et reseaux sociaux : `Apparence > Personnaliser > D-tox`.

## Notes

Cette migration privilegie WordPress natif : types de contenus, taxonomies, menus, Customizer et champs meta simples. Aucun ACF n'est requis.
