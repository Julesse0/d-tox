<?php
/**
 * Blog section archive.
 */

get_header();

$term = get_queried_object();
$posts = $term instanceof WP_Term ? dtox_get_blog_posts($term->slug, -1) : [];
?>

<section class="page-hero page-hero--compact">
    <div class="container">
        <p class="eyebrow">Rubrique</p>
        <h1><?php echo $term instanceof WP_Term ? esc_html($term->name) : 'Blog'; ?></h1>
        <?php if ($term instanceof WP_Term && $term->description !== '') : ?>
            <p><?php echo esc_html($term->description); ?></p>
        <?php endif; ?>
    </div>
</section>

<section class="section section--white blog-list-section">
    <div class="container">
        <div class="blog-grid">
            <?php foreach ($posts as $post_object) : ?>
                <?php get_template_part('template-parts/blog-card', null, ['post' => $post_object]); ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
