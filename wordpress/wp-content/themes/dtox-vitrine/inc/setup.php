<?php
/**
 * Theme setup, assets, custom post types and meta.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('after_setup_theme', function (): void {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

    register_nav_menus([
        'primary' => 'Navigation principale',
        'footer_products' => 'Footer produits',
        'footer_editorial' => 'Footer éditorial',
    ]);
});

add_action('wp_enqueue_scripts', function (): void {
    wp_enqueue_style('dtox-vitrine-fonts', 'https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700;800&family=Montserrat:wght@400;600;700;800&display=swap', [], null);
    wp_enqueue_style('dtox-vitrine-theme', dtox_asset('css/theme.css'), [], DTOX_THEME_VERSION);
    wp_enqueue_script('dtox-vitrine-theme', dtox_asset('js/theme.js'), [], DTOX_THEME_VERSION, true);
}, 99);

function dtox_register_content_types(): void
{
    register_post_type('dtox_product', [
        'labels' => [
            'name' => 'Produits DTÖX',
            'singular_name' => 'Produit DTÖX',
            'add_new_item' => 'Ajouter un produit',
            'edit_item' => 'Modifier le produit',
        ],
        'public' => true,
        'has_archive' => 'produits',
        'rewrite' => ['slug' => 'produits'],
        'menu_icon' => 'dashicons-products',
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'],
        'show_in_rest' => true,
    ]);

    register_post_type('dtox_blog', [
        'labels' => [
            'name' => 'Blog DTÖX',
            'singular_name' => 'Article DTÖX',
            'add_new_item' => 'Ajouter un article',
            'edit_item' => 'Modifier l’article',
        ],
        'public' => true,
        'has_archive' => 'blog',
        'rewrite' => ['slug' => 'blog'],
        'menu_icon' => 'dashicons-media-document',
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail'],
        'show_in_rest' => true,
    ]);

    register_taxonomy('dtox_blog_section', ['dtox_blog'], [
        'labels' => [
            'name' => 'Rubriques DTÖX',
            'singular_name' => 'Rubrique DTÖX',
        ],
        'public' => true,
        'hierarchical' => true,
        'rewrite' => ['slug' => 'blog'],
        'show_in_rest' => true,
    ]);

    register_post_type('dtox_partner', [
        'labels' => [
            'name' => 'Partenaires DTÖX',
            'singular_name' => 'Partenaire DTÖX',
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-store',
        'supports' => ['title', 'thumbnail', 'page-attributes'],
        'show_in_rest' => true,
    ]);

    $string_meta = ['dtox_image', 'dtox_gallery_image', 'dtox_tag', 'dtox_url', 'dtox_logo', 'dtox_section', 'dtox_legacy_image'];
    foreach (['dtox_product', 'dtox_partner', 'dtox_blog'] as $post_type) {
        foreach ($string_meta as $key) {
            register_post_meta($post_type, $key, [
                'type' => 'string',
                'single' => true,
                'show_in_rest' => true,
                'sanitize_callback' => 'sanitize_text_field',
            ]);
        }
    }

    register_post_meta('dtox_product', 'dtox_items', [
        'type' => 'string',
        'single' => true,
        'show_in_rest' => true,
        'sanitize_callback' => 'wp_kses_post',
    ]);

    add_rewrite_rule('^blog/(articles|recettes|reseaux|supports)/?$', 'index.php?dtox_blog_section=$matches[1]', 'top');
}

add_action('init', 'dtox_register_content_types');

add_action('add_meta_boxes', function (): void {
    add_meta_box('dtox_details', 'Détails DTÖX', 'dtox_render_details_metabox', ['dtox_product', 'dtox_partner', 'dtox_blog'], 'normal', 'default');
});

function dtox_render_details_metabox(WP_Post $post): void
{
    wp_nonce_field('dtox_save_details', 'dtox_details_nonce');

    $fields = [
        'dtox_image' => 'Image asset',
        'dtox_gallery_image' => 'Image secondaire',
        'dtox_tag' => 'Étiquette',
        'dtox_url' => 'URL externe',
        'dtox_logo' => 'Logo asset',
        'dtox_items' => 'Liste détails, une ligne par item',
        'dtox_legacy_image' => 'Image legacy',
    ];

    foreach ($fields as $key => $label) {
        $value = get_post_meta($post->ID, $key, true);
        echo '<p><label for="' . esc_attr($key) . '"><strong>' . esc_html($label) . '</strong></label></p>';

        if ($key === 'dtox_items') {
            echo '<textarea class="widefat" rows="6" id="' . esc_attr($key) . '" name="' . esc_attr($key) . '">' . esc_textarea((string) $value) . '</textarea>';
        } else {
            echo '<input class="widefat" id="' . esc_attr($key) . '" name="' . esc_attr($key) . '" value="' . esc_attr((string) $value) . '" />';
        }
    }
}

add_action('save_post', function (int $post_id): void {
    if (!isset($_POST['dtox_details_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['dtox_details_nonce'])), 'dtox_save_details')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    foreach (['dtox_image', 'dtox_gallery_image', 'dtox_tag', 'dtox_url', 'dtox_logo', 'dtox_items', 'dtox_legacy_image'] as $key) {
        if (!array_key_exists($key, $_POST)) {
            continue;
        }

        $raw = wp_unslash($_POST[$key]);
        $value = $key === 'dtox_items' ? wp_kses_post((string) $raw) : sanitize_text_field((string) $raw);
        update_post_meta($post_id, $key, $value);
    }
});
