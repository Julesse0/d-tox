<?php
/**
 * Blog single template.
 */

get_header();
the_post();

$post_object = get_post();
$terms = get_the_terms(get_the_ID(), 'dtox_blog_section');
$term = is_array($terms) && !empty($terms) ? $terms[0] : null;
?>

<article class="article-detail">
    <header class="article-detail__hero">
        <div class="container article-detail__grid">
            <div>
                <div class="blog-card__meta">
                    <?php if ($term instanceof WP_Term) : ?>
                        <a href="<?php echo esc_url(get_term_link($term)); ?>"><?php echo esc_html($term->name); ?></a>
                    <?php endif; ?>
                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('d M. Y')); ?></time>
                </div>
                <h1><?php the_title(); ?></h1>
                <?php if (has_excerpt()) : ?>
                    <p><?php echo esc_html(get_the_excerpt()); ?></p>
                <?php endif; ?>
            </div>
            <?php if ($post_object instanceof WP_Post) : ?>
                <img src="<?php echo esc_url(dtox_blog_hero_image($post_object)); ?>" alt="<?php the_title_attribute(); ?>">
            <?php endif; ?>
        </div>
    </header>

    <section class="section section--white">
        <div class="container article-content">
            <?php the_content(); ?>
            <?php if (trim(get_the_content()) === '') : ?>
                <p>Cette archive est conservée pour mémoire. Le visuel de la recette reste disponible ci-dessus.</p>
            <?php endif; ?>
            <p><a class="text-link" href="<?php echo esc_url(dtox_get_page_url('blog')); ?>">Retour au blog</a></p>
        </div>
    </section>
</article>

<?php get_footer(); ?>
