<?php
/**
 * Front page template.
 */

get_header();

$products = dtox_get_products();
$product_defaults = dtox_default_products();
$partners = dtox_get_partners();
$partner_defaults = dtox_default_partners();
?>

<section class="home-hero">
    <img class="home-hero__bg" src="<?php echo esc_url(dtox_image('fond-home.png')); ?>" alt="">
    <div class="home-hero__overlay"></div>
    <div class="container home-hero__grid">
        <div>
            <p class="eyebrow">Kombucha Artisanal</p>
            <h1 class="home-hero__title">DT<span>Ö</span>X</h1>
            <a class="btn" href="<?php echo esc_url(dtox_get_page_url('produits')); ?>">Voir Nos Produits</a>
        </div>
        <div class="home-hero__medals">
            <img src="<?php echo esc_url(dtox_image('medal-2023-2.png')); ?>" alt="Médaille D-tox 2023">
            <img src="<?php echo esc_url(dtox_image('review-medal.png')); ?>" alt="Médaille D-tox review">
        </div>
    </div>
</section>

<section class="section products-preview">
    <div class="container">
        <div class="section-heading">
            <div>
                <p class="eyebrow">Sélection</p>
                <h2>Nos Produits</h2>
            </div>
            <a class="text-link" href="<?php echo esc_url(dtox_get_page_url('produits')); ?>">Voir tout</a>
        </div>

        <div class="product-grid">
            <?php
            $display_products = $products ?: array_map(static function ($item) {
                return (object) [
                    'post_title' => $item['title'],
                    'post_name' => $item['slug'],
                    'post_excerpt' => $item['excerpt'],
                    'ID' => 0,
                ];
            }, $product_defaults);

            foreach ($display_products as $index => $product) :
                $fallback = $product_defaults[$index] ?? $product_defaults[0];
                $image = $product->ID ? dtox_meta($product->ID, 'dtox_image', $fallback['image']) : $fallback['image'];
                $excerpt = $product->post_excerpt ?: $fallback['excerpt'];
                ?>
                <a class="product-card" href="<?php echo esc_url(dtox_get_page_url('produits/' . $product->post_name)); ?>">
                    <span class="product-card__image">
                        <img src="<?php echo esc_url(dtox_image($image)); ?>" alt="<?php echo esc_attr($product->post_title); ?>">
                    </span>
                    <strong><?php echo esc_html($product->post_title); ?></strong>
                    <span><?php echo esc_html($excerpt); ?></span>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section section--yellow editorial-preview">
    <div class="container">
        <div class="section-heading">
            <div>
                <p class="eyebrow">Éditorial</p>
                <h2>Blog</h2>
            </div>
            <a class="btn btn--ghost" href="<?php echo esc_url(dtox_get_page_url('blog')); ?>">Voir tout l'édito</a>
        </div>

        <div class="blog-section-grid">
            <?php
            $sections = [
                ['slug' => 'articles', 'eyebrow' => 'À lire', 'title' => 'News', 'text' => 'Actus, sujets de fond et nouveautés autour de la marque.'],
                ['slug' => 'recettes', 'eyebrow' => 'À servir', 'title' => 'Recettes', 'text' => 'Cocktails, accords et idées à partager autour de D-tox.'],
                ['slug' => 'reseaux', 'eyebrow' => 'À relayer', 'title' => 'On parle de nous / Presse', 'text' => 'Prises de parole, relais de marque et future rubrique presse.'],
            ];

            foreach ($sections as $section) :
                $lead_posts = dtox_get_blog_posts($section['slug'], 1);
                $lead = $lead_posts[0] ?? null;
                ?>
                <article class="blog-section-card">
                    <p class="eyebrow"><?php echo esc_html($section['eyebrow']); ?></p>
                    <h3><?php echo esc_html($section['title']); ?></h3>
                    <p><?php echo esc_html($section['text']); ?></p>
                    <?php if ($lead) : ?>
                        <div class="blog-section-card__lead">
                            <strong><?php echo esc_html(get_the_title($lead)); ?></strong>
                            <span><?php echo esc_html(wp_trim_words(get_the_excerpt($lead), 18)); ?></span>
                        </div>
                    <?php endif; ?>
                    <a class="text-link" href="<?php echo esc_url(dtox_get_page_url('blog/' . $section['slug'])); ?>">Ouvrir la rubrique</a>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section section--white home-contact">
    <div class="container home-contact__panel">
        <div>
            <p class="eyebrow">Contact</p>
            <h2>Une question, une boutique, un projet ?</h2>
            <p>Pour une demande pro, une question produit ou un partenariat, écrivez-nous directement via le formulaire.</p>
            <div class="button-row">
                <a class="btn" href="<?php echo esc_url(dtox_get_page_url('contact#formulaire')); ?>">Ouvrir le formulaire</a>
                <a class="btn btn--ghost" href="mailto:<?php echo esc_attr(dtox_theme_option('email')); ?>">Écrire par email</a>
            </div>
        </div>
    </div>
</section>

<section class="section section--yellow partners-section">
    <div class="container partners-section__panel">
        <div class="section-heading section-heading--center">
            <div>
                <p class="eyebrow">Nos Partenaires</p>
                <h2>Ils Nous Font Confiance</h2>
            </div>
        </div>
        <div class="partners-grid">
            <?php
            $display_partners = $partners ?: array_map(static function ($item) {
                return (object) ['post_title' => $item['name'], 'ID' => 0, 'fallback' => $item];
            }, $partner_defaults);

            foreach ($display_partners as $partner) :
                $fallback = $partner->fallback ?? ['href' => '#', 'logo' => ''];
                $href = $partner->ID ? dtox_meta($partner->ID, 'dtox_url', $fallback['href']) : $fallback['href'];
                $logo = $partner->ID ? dtox_meta($partner->ID, 'dtox_logo', $fallback['logo']) : $fallback['logo'];
                ?>
                <a class="partner-card" href="<?php echo esc_url($href); ?>" target="_blank" rel="noreferrer">
                    <img src="<?php echo esc_url(dtox_image($logo)); ?>" alt="Logo <?php echo esc_attr($partner->post_title); ?>">
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section section--yellow final-cta">
    <div class="container final-cta__panel">
        <h2>Prêt à passer au kombucha D-tox ?</h2>
        <p>Découvrez nos produits artisanaux et retrouvez aussi nos rubriques News, Recettes et Presse.</p>
        <div class="button-row button-row--center">
            <a class="btn" href="<?php echo esc_url(dtox_get_page_url('produits')); ?>">Nos Produits</a>
            <a class="btn btn--ghost" href="<?php echo esc_url(dtox_get_page_url('contact#formulaire')); ?>">Nous Contacter</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
