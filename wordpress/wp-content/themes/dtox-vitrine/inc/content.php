<?php
/**
 * Static defaults used for seed data and fallbacks.
 */

if (!defined('ABSPATH')) {
    exit;
}

function dtox_default_pages(): array
{
    return [
        'home' => ['title' => 'Accueil', 'template' => 'front-page.php', 'path' => ''],
        'produits' => ['title' => 'Nos Produits', 'template' => 'page-produits.php', 'path' => 'produits'],
        'a-propos' => ['title' => 'À Propos', 'template' => 'page-a-propos.php', 'path' => 'a-propos'],
        'contact' => ['title' => 'Contact', 'template' => 'page-contact.php', 'path' => 'contact'],
        'blog' => ['title' => 'Blog', 'template' => 'page-blog.php', 'path' => 'blog'],
    ];
}

function dtox_default_products(): array
{
    return [
        [
            'slug' => 'd-tox',
            'title' => 'D-tox Original',
            'excerpt' => 'Un kombucha brut, vivant et non pasteurisé, fermenté 8 à 15 jours sur des souches sélectionnées de A à Z.',
            'image' => 'dtox-1l.png',
            'gallery_image' => 'dtox-33cl.png',
            'tag' => 'Produit Signature',
            'items' => [
                'Reconnu complément alimentaire pour accompagner une consommation bien-être au quotidien.',
                'Goût unique, rafraîchissant et désaltérant, sans approche médicamenteuse.',
                'Ingrédients 100% bio, sans aromatisation et sans pasteurisation.',
                'Méthodes de fabrication rigoureuses, suivies selon les principes HACCP.',
                'Taux exceptionnel d’acide gluconique : 15 g/L.',
                'Très longue DDM : jusqu’à J + 18 mois.',
                'Bouteille en r-PET 100% recyclé et recyclable.',
                'Choix du PET pour un bilan CO2 plus léger.',
            ],
        ],
        [
            'slug' => 'chateau',
            'title' => 'Château de la Crau',
            'excerpt' => 'Une cuvée premium issue du savoir-faire D-TOX, travaillée avec une fermentation plus longue.',
            'image' => 'chateau-crau.png',
            'gallery_image' => '',
            'tag' => 'Édition Premium',
            'items' => [
                'Base de recette et process fidèles au D-TOX classique, avec une fermentation prolongée de 30%.',
                'Profil plus mature, plus stable et naturellement riche en bénéfices de fermentation.',
                'Filtration totale des levures pour obtenir une robe claire et élégante.',
                'Stabilité optimale à température ambiante avec une DLUO jusqu’à J + 18 mois.',
                'Injection de fines bulles pour une dégustation plus délicate.',
                'Ingrédients 100% bio, avec des thés certifiés Demeter.',
                'Taux d’alcool moyen : 1,8% vol. À consommer avec modération.',
                'Packaging premium, singulier et soigné.',
            ],
        ],
    ];
}

function dtox_default_partners(): array
{
    return [
        ['name' => 'Vitafrais', 'href' => 'https://www.vitafrais.fr/', 'logo' => 'partner-vitafrais.png'],
        ['name' => 'Relais Vert', 'href' => 'https://www.relaisverts.com/', 'logo' => 'partner-relais-vert.png'],
        ['name' => 'Jolie Imports', 'href' => 'https://jolieimports.nl/', 'logo' => 'partner-jolie-imports.jpg'],
        ['name' => 'MyBioShop', 'href' => 'https://mybioshop.fr/', 'logo' => 'partner-mybioshop.webp'],
        ['name' => 'ProNatura', 'href' => 'https://www.pronatura.com/', 'logo' => 'partner-pronatura.png'],
        ['name' => 'Biofresh', 'href' => 'https://www.biofresh.be/', 'logo' => 'partner-biofresh.png'],
        ['name' => 'BioFrais', 'href' => 'https://www.biofrais.com/', 'logo' => 'partner-biofrais.png'],
        ['name' => 'Naturalia', 'href' => 'https://www.naturalia.fr/', 'logo' => 'partner-naturalia.png'],
        ['name' => 'So.bio', 'href' => 'https://www.sobio.fr/', 'logo' => 'partner-sobio.png'],
        ['name' => 'Greenweez', 'href' => 'https://www.greenweez.com/', 'logo' => 'partner-greenweez.png'],
        ['name' => 'marcel&fils', 'href' => 'https://marceletfils.com/', 'logo' => 'partner-marcel-fils.svg'],
        ['name' => 'Biomonde', 'href' => 'https://www.biomonde.fr/', 'logo' => 'partner-biomonde.png'],
        ['name' => "Bio c' Bon", 'href' => 'https://www.bio-c-bon.eu/', 'logo' => 'partner-bio-c-bon.svg'],
        ['name' => 'La Mirande', 'href' => 'https://www.la-mirande.fr/fr/', 'logo' => 'partner-la-mirande.png'],
        ['name' => 'Biodis', 'href' => 'https://www.biodis.eu/', 'logo' => 'partner-biodis.png'],
    ];
}

function dtox_timeline(): array
{
    return [
        ['year' => '2006', 'title' => 'Premier Engouement', 'text' => "La demande explose à Aix, alors qu'Eisso ne produit encore que 110L par mois."],
        ['year' => '2007', 'title' => 'Naissance De D-TOX', 'text' => "Création de l'entreprise et dépôt officiel de la marque."],
        ['year' => '2009', 'title' => 'Labo À Velaux', 'text' => 'Construction du labo et installation des deux premières cuves.'],
        ['year' => '2010', 'title' => 'Premiers Magasins', 'text' => 'Les premières bouteilles arrivent en magasins bio à Aix-en-Provence.'],
        ['year' => '2019', 'title' => 'Reconnaissance UE', 'text' => "D-TOX devient le premier kombucha reconnu complément alimentaire dans l'UE."],
        ['year' => '2022', 'title' => 'Médaille De Bronze', 'text' => 'Premier concours européen de kombucha, à Bruxelles.'],
        ['year' => '2023', 'title' => 'Double Or', 'text' => "D-TOX et Château de la Crau remportent chacun l'or à l'Aurore Taste Challenge."],
        ['year' => '2023', 'title' => 'Concentré Ultra-Actif', 'text' => "Lancement du développement d'un concentré pour la nutrition et la cosmétique."],
    ];
}
