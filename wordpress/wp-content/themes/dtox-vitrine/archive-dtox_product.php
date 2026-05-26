<?php
/**
 * Products archive.
 */

get_header();

$products = dtox_get_products();
$defaults = dtox_default_products();
$display_products = $products ?: array_map(static function ($item) {
    return (object) [
        'ID' => 0,
        'post_title' => $item['title'],
        'post_name' => $item['slug'],
        'post_excerpt' => $item['excerpt'],
    ];
}, $defaults);
?>

<section class="page-hero page-hero--compact">
    <div class="container">
        <p class="eyebrow">La Gamme</p>
        <h1>Nos Produits</h1>
        <p>Deux expressions du kombucha D-tox : une signature brute, vivante et quotidienne, et une cuvée premium plus fine et plus festive.</p>
    </div>
</section>

<section class="section products-archive">
    <div class="container product-grid product-grid--archive">
        <?php foreach ($display_products as $index => $product) :
            $fallback = $defaults[$index] ?? $defaults[0];
            $image = $product->ID ? dtox_meta($product->ID, 'dtox_image', $fallback['image']) : $fallback['image'];
            $tag = $product->ID ? dtox_meta($product->ID, 'dtox_tag', $fallback['tag']) : $fallback['tag'];
            $excerpt = $product->post_excerpt ?: $fallback['excerpt'];
            $url = $product->ID ? get_permalink($product) : dtox_get_page_url('produits/' . $product->post_name);
            ?>
            <a class="product-card product-card--large" href="<?php echo esc_url($url); ?>">
                <span class="product-card__image">
                    <img src="<?php echo esc_url(dtox_media_url($image)); ?>" alt="<?php echo esc_attr($product->post_title); ?>">
                </span>
                <span class="product-card__tag"><?php echo esc_html($tag); ?></span>
                <strong><?php echo esc_html($product->post_title); ?></strong>
                <span><?php echo esc_html($excerpt); ?></span>
                <em>Découvrir</em>
            </a>
        <?php endforeach; ?>
    </div>
</section>

<?php get_footer(); ?>
