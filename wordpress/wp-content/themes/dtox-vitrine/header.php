<?php
/**
 * Theme header.
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header" data-site-header>
    <div class="site-header__inner">
        <a class="site-header__logo" href="<?php echo esc_url(home_url('/')); ?>" aria-label="DTÖX">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <img src="<?php echo esc_url(dtox_image('logo-dtox.png')); ?>" alt="DTÖX">
            <?php endif; ?>
        </a>

        <button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="primary-menu" data-menu-toggle>
            <span class="screen-reader-text">Ouvrir le menu</span>
            <span></span>
            <span></span>
        </button>

        <nav id="primary-menu" class="site-header__nav" aria-label="Navigation principale" data-primary-menu>
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'primary-menu',
                    'fallback_cb' => false,
                    'depth' => 2,
                ]);
            } else {
                ?>
                <ul class="primary-menu">
                    <li><a href="<?php echo esc_url(dtox_get_page_url('produits')); ?>">Nos Produits</a></li>
                    <li><a href="<?php echo esc_url(dtox_get_page_url('blog')); ?>">Blog</a></li>
                    <li><a href="<?php echo esc_url(dtox_get_page_url('a-propos')); ?>">À Propos</a></li>
                    <li><a href="<?php echo esc_url(dtox_get_page_url('contact')); ?>">Contact</a></li>
                </ul>
                <?php
            }
            ?>
        </nav>
    </div>
</header>
<main id="content" class="site-main">
