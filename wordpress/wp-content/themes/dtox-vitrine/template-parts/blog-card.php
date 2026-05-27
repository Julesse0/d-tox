<?php
/**
 * Blog card template part.
 *
 * @var array $args
 */

$post_object = $args['post'] ?? null;
if (!$post_object instanceof WP_Post) {
    return;
}

$featured = !empty($args['featured']);
$terms = get_the_terms($post_object, 'dtox_blog_section');
$term = is_array($terms) && !empty($terms) ? $terms[0] : null;
$section_label = $term instanceof WP_Term ? $term->name : '';
$card_classes = $featured ? 'blog-card blog-card--featured' : 'blog-card';
?>

<a class="<?php echo esc_attr($card_classes); ?>" href="<?php echo esc_url(get_permalink($post_object)); ?>">
    <span class="blog-card__image">
        <img src="<?php echo esc_url(dtox_blog_card_image($post_object)); ?>" alt="<?php echo esc_attr(get_the_title($post_object)); ?>">
    </span>
    <span class="blog-card__content">
        <span class="blog-card__meta">
            <?php if ($section_label !== '') : ?>
                <span><?php echo esc_html($section_label); ?></span>
            <?php endif; ?>
            <time datetime="<?php echo esc_attr(get_the_date('c', $post_object)); ?>"><?php echo esc_html(get_the_date('d M. Y', $post_object)); ?></time>
        </span>
        <?php if ($featured) : ?>
            <h2><?php echo esc_html(get_the_title($post_object)); ?></h2>
        <?php else : ?>
            <h3><?php echo esc_html(get_the_title($post_object)); ?></h3>
        <?php endif; ?>
        <p><?php echo esc_html(wp_trim_words(get_the_excerpt($post_object), $featured ? 44 : 22)); ?></p>
        <span class="text-link"><?php echo $featured ? "Lire l'article" : 'Ouvrir'; ?></span>
    </span>
</a>
