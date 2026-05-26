<?php
/**
 * Blog archive.
 */

get_header();

$sections = [
    'articles' => ['label' => 'News', 'text' => 'Actualités, prises de parole et sujets de fond autour de D-tox.'],
    'recettes' => ['label' => 'Recettes', 'text' => 'Cocktails, accords et idées à partager avec le kombucha.'],
    'reseaux' => ['label' => 'On parle de nous / Presse', 'text' => 'Relais de marque, presse et contenus de découverte.'],
];
$posts = dtox_get_blog_posts(null, 12);
?>

<section class="page-hero page-hero--compact">
    <div class="container">
        <p class="eyebrow">Éditorial</p>
        <h1>Blog</h1>
    </div>
</section>

<section class="section blog-sections">
    <div class="container blog-section-grid">
        <?php foreach ($sections as $slug => $section) : ?>
            <a class="blog-section-card blog-section-card--link" href="<?php echo esc_url(dtox_get_page_url('blog/' . $slug)); ?>">
                <p class="eyebrow"><?php echo esc_html($section['label']); ?></p>
                <h3><?php echo esc_html($section['label']); ?></h3>
                <p><?php echo esc_html($section['text']); ?></p>
                <span class="text-link">Ouvrir</span>
            </a>
        <?php endforeach; ?>
    </div>
</section>

<section class="section section--white blog-list-section">
    <div class="container">
        <div class="section-heading">
            <div>
                <p class="eyebrow">Dernières Publications</p>
                <h2>À lire</h2>
            </div>
        </div>
        <div class="blog-grid">
            <?php foreach ($posts as $post_object) : ?>
                <?php get_template_part('template-parts/blog-card', null, ['post' => $post_object]); ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
