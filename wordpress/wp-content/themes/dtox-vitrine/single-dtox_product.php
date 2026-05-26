<?php
/**
 * Product detail template.
 */

get_header();
the_post();

$slug = get_post_field('post_name', get_the_ID());
$defaults = dtox_default_products();
$fallback = $defaults[0];
foreach ($defaults as $default_product) {
    if ($default_product['slug'] === $slug) {
        $fallback = $default_product;
        break;
    }
}

$image = dtox_meta(get_the_ID(), 'dtox_image', $fallback['image']);
$gallery_image = dtox_meta(get_the_ID(), 'dtox_gallery_image', $fallback['gallery_image']);
$tag = dtox_meta(get_the_ID(), 'dtox_tag', $fallback['tag']);
$items = dtox_split_lines(dtox_meta(get_the_ID(), 'dtox_items', implode("\n", $fallback['items'])));
?>

<section class="product-detail">
    <div class="container product-detail__grid">
        <div class="product-detail__media">
            <img src="<?php echo esc_url(dtox_media_url($image)); ?>" alt="<?php the_title_attribute(); ?>">
            <?php if ($slug === 'd-tox') : ?>
                <img class="product-detail__medal" src="<?php echo esc_url(dtox_image('medal-2023-2.png')); ?>" alt="Médaille 2023 D-tox">
            <?php endif; ?>
        </div>

        <div class="product-detail__content">
            <p class="eyebrow"><?php echo esc_html($tag); ?></p>
            <h1><?php the_title(); ?></h1>
            <div class="product-detail__intro">
                <?php the_content(); ?>
            </div>
            <ul class="check-list">
                <?php foreach ($items as $item) : ?>
                    <li><?php echo esc_html($item); ?></li>
                <?php endforeach; ?>
            </ul>
            <div class="button-row">
                <a class="btn" href="<?php echo esc_url(dtox_get_page_url('contact#formulaire')); ?>">Demander une information</a>
                <a class="btn btn--ghost" href="<?php echo esc_url(dtox_get_page_url('produits')); ?>">Retour aux produits</a>
            </div>
        </div>
    </div>
</section>

<?php if ($gallery_image !== '') : ?>
    <section class="section product-note">
        <div class="container product-note__grid">
            <div>
                <p class="eyebrow">Format</p>
                <h2>Une boisson vivante, pensée pour le quotidien.</h2>
                <p>D-tox conserve un esprit brut et accessible, avec une fermentation maîtrisée et une présentation claire pour les boutiques comme pour les consommateurs.</p>
            </div>
            <img src="<?php echo esc_url(dtox_media_url($gallery_image)); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
        </div>
    </section>
<?php endif; ?>

<?php get_footer(); ?>
