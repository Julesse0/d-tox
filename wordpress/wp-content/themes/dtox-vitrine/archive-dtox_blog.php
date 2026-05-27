<?php
/**
 * Blog archive.
 */

get_header();

$sections = [
    'articles' => [
        'eyebrow' => 'À lire',
        'label' => 'News',
        'title' => 'News',
        'text' => 'Actus, sujets de fond et nouveautés autour de la marque.',
        'icon' => 'news',
    ],
    'recettes' => [
        'eyebrow' => 'À servir',
        'label' => 'Recettes',
        'title' => 'Recettes',
        'text' => 'Cocktails, accords et idées à partager autour de DTÖX.',
        'icon' => 'recipe',
    ],
    'reseaux' => [
        'eyebrow' => 'À relayer',
        'label' => 'On parle de nous',
        'title' => 'On parle de nous / Presse',
        'text' => 'Prises de parole, relais de marque et future rubrique presse.',
        'icon' => 'press',
    ],
];

$posts = dtox_get_blog_posts(null, -1);
$featured = $posts[0] ?? null;
$rest = array_slice($posts, 1);
?>

<section class="page-hero page-hero--compact blog-hero">
    <div class="container">
        <p class="eyebrow">Éditorial</p>
        <h1>Le Journal DTÖX</h1>
    </div>
</section>

<section class="blog-categories-section">
    <div class="container blog-section-grid">
        <?php foreach ($sections as $slug => $section) :
            $section_posts = dtox_get_blog_posts($slug, -1);
            $lead = $section_posts[0] ?? null;
            $total = count($section_posts);
            ?>
            <article class="blog-section-card">
                <div class="blog-section-card__top">
                    <div>
                        <p class="eyebrow"><?php echo esc_html($section['eyebrow']); ?></p>
                        <h3><?php echo esc_html($section['title']); ?></h3>
                    </div>
                    <span class="blog-section-card__icon blog-section-card__icon--<?php echo esc_attr($section['icon']); ?>" aria-hidden="true"></span>
                </div>
                <p><?php echo esc_html($section['text']); ?></p>
                <div class="blog-section-card__lead">
                    <p class="blog-section-card__count"><?php echo esc_html($total); ?> contenu<?php echo $total > 1 ? 's' : ''; ?></p>
                    <?php if ($lead) : ?>
                        <div class="blog-section-card__lead-row">
                            <img src="<?php echo esc_url(dtox_blog_card_image($lead)); ?>" alt="<?php echo esc_attr(get_the_title($lead)); ?>">
                            <span>
                                <strong><?php echo esc_html(get_the_title($lead)); ?></strong>
                                <small><?php echo esc_html(wp_trim_words(get_the_excerpt($lead), 18)); ?></small>
                            </span>
                        </div>
                    <?php else : ?>
                        <small>La rubrique est prête à accueillir vos nouveaux contenus.</small>
                    <?php endif; ?>
                </div>
                <a class="text-link" href="<?php echo esc_url(dtox_get_page_url('blog/' . $slug)); ?>">Ouvrir la rubrique</a>
            </article>
        <?php endforeach; ?>
    </div>
</section>

<section class="blog-filters-section">
    <div class="container blog-filter-row">
        <a class="blog-filter is-active" href="<?php echo esc_url(dtox_get_page_url('blog')); ?>">Tout lire (<?php echo esc_html(count($posts)); ?>)</a>
        <?php foreach ($sections as $slug => $section) : ?>
            <?php $count = count(dtox_get_blog_posts($slug, -1)); ?>
            <a class="blog-filter" href="<?php echo esc_url(dtox_get_page_url('blog/' . $slug)); ?>"><?php echo esc_html($section['label']); ?> (<?php echo esc_html($count); ?>)</a>
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
