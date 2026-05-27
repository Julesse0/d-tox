<?php
/**
 * Blog section archive.
 */

get_header();

$term = get_queried_object();
$active_slug = $term instanceof WP_Term ? $term->slug : 'all';
$section_meta = [
    'articles' => ['label' => 'News', 'title' => 'News', 'description' => 'Les nouveautés DTÖX, les sujets autour du kombucha et les contenus de fond les plus utiles.'],
    'recettes' => ['label' => 'Recettes', 'title' => 'Recettes', 'description' => 'Cocktails, accords et inspirations à servir avec DTÖX pour un usage plus lifestyle et convivial.'],
    'reseaux' => ['label' => 'On parle de nous', 'title' => 'On parle de nous / Presse', 'description' => ''],
];
$current = $section_meta[$active_slug] ?? ['label' => 'Blog', 'title' => 'Blog', 'description' => ''];
$posts = $term instanceof WP_Term ? dtox_get_blog_posts($term->slug, -1) : [];
$featured = $posts[0] ?? null;
$rest = array_slice($posts, 1);
?>

<section class="page-hero page-hero--compact blog-hero">
    <div class="container">
        <a class="blog-back-link" href="<?php echo esc_url(dtox_get_page_url('blog')); ?>">Retour au journal</a>
        <p class="eyebrow">Éditorial</p>
        <h1><?php echo esc_html($current['title']); ?></h1>
        <?php if ($current['description'] !== '') : ?>
            <p><?php echo esc_html($current['description']); ?></p>
        <?php endif; ?>
    </div>
</section>

<section class="blog-filters-section blog-filters-section--taxonomy">
    <div class="container blog-filter-row">
        <a class="blog-filter" href="<?php echo esc_url(dtox_get_page_url('blog')); ?>">Tout lire (<?php echo esc_html(count(dtox_get_blog_posts(null, -1))); ?>)</a>
        <?php foreach ($section_meta as $slug => $meta) :
            $count = count(dtox_get_blog_posts($slug, -1));
            ?>
            <a class="blog-filter <?php echo $slug === $active_slug ? 'is-active' : ''; ?>" href="<?php echo esc_url(dtox_get_page_url('blog/' . $slug)); ?>"><?php echo esc_html($meta['label']); ?> (<?php echo esc_html($count); ?>)</a>
        <?php endforeach; ?>
    </div>
</section>

<section class="blog-list-section">
    <div class="container">
        <?php if ($featured) : ?>
            <div class="blog-list-stack">
                <?php get_template_part('template-parts/blog-card', null, ['post' => $featured, 'featured' => true]); ?>
                <?php if (!empty($rest)) : ?>
                    <div class="blog-grid">
                        <?php foreach ($rest as $post_object) : ?>
                            <?php get_template_part('template-parts/blog-card', null, ['post' => $post_object]); ?>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php else : ?>
            <div class="blog-empty">
                <h2>Aucun billet dans cette rubrique</h2>
            </div>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>
