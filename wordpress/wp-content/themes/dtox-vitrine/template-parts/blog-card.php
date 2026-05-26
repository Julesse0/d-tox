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

$terms = get_the_terms($post_object, 'dtox_blog_section');
$term = is_array($terms) && !empty($terms) ? $terms[0] : null;
?>

<article class="blog-card">
    <a class="blog-card__image" href="<?php echo esc_url(get_permalink($post_object)); ?>">
        <img src="<?php echo esc_url(dtox_blog_card_image($post_object)); ?>" alt="<?php echo esc_attr(get_the_title($post_object)); ?>">
    </a>
    <div class="blog-card__content">
        <div class="blog-card__meta">
            <?php if ($term instanceof WP_Term) : ?>
                <a href="<?php echo esc_url(get_term_link($term)); ?>"><?php echo esc_html($term->name); ?></a>
            <?php endif; ?>
            <time datetime="<?php echo esc_attr(get_the_date('c', $post_object)); ?>"><?php echo esc_html(get_the_date('d M. Y', $post_object)); ?></time>
        </div>
        <h3><a href="<?php echo esc_url(get_permalink($post_object)); ?>"><?php echo esc_html(get_the_title($post_object)); ?></a></h3>
        <p><?php echo esc_html(wp_trim_words(get_the_excerpt($post_object), 22)); ?></p>
        <a class="text-link" href="<?php echo esc_url(get_permalink($post_object)); ?>">Ouvrir</a>
    </div>
</article>
