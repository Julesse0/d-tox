<?php
/**
 * Shared helpers for templates.
 */

if (!defined('ABSPATH')) {
    exit;
}

function dtox_asset(string $path): string
{
    return DTOX_THEME_URI . '/assets/' . ltrim($path, '/');
}

function dtox_image(string $name): string
{
    return dtox_asset('images/' . ltrim($name, '/'));
}

function dtox_media_url(string $path, string $fallback = ''): string
{
    $value = trim($path);
    if ($value === '') {
        $value = $fallback;
    }

    if ($value === '') {
        return '';
    }

    if (strpos($value, 'http://') === 0 || strpos($value, 'https://') === 0) {
        return $value;
    }

    $value = ltrim($value, '/');
    if (strpos($value, 'legacy-blog/') === 0 || strpos($value, 'legacy-wp-uploads/') === 0) {
        return dtox_asset($value);
    }

    return dtox_image($value);
}

function dtox_theme_option(string $key, string $fallback = ''): string
{
    $value = get_theme_mod('dtox_' . $key, $fallback);
    return is_string($value) && $value !== '' ? $value : $fallback;
}

function dtox_meta(int $post_id, string $key, string $fallback = ''): string
{
    $value = get_post_meta($post_id, $key, true);
    return is_string($value) && $value !== '' ? $value : $fallback;
}

function dtox_split_lines(string $value): array
{
    return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $value))));
}

function dtox_get_page_url(string $path): string
{
    return home_url('/' . trim($path, '/') . '/');
}

function dtox_find_product(string $slug): ?WP_Post
{
    $posts = get_posts([
        'name' => $slug,
        'post_type' => 'dtox_product',
        'post_status' => 'publish',
        'numberposts' => 1,
    ]);

    return $posts[0] ?? null;
}

function dtox_get_products(): array
{
    return get_posts([
        'post_type' => 'dtox_product',
        'post_status' => 'publish',
        'numberposts' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    ]);
}

function dtox_get_partners(): array
{
    return get_posts([
        'post_type' => 'dtox_partner',
        'post_status' => 'publish',
        'numberposts' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    ]);
}

function dtox_get_blog_posts(?string $section = null, int $limit = -1): array
{
    $args = [
        'post_type' => 'dtox_blog',
        'post_status' => 'publish',
        'numberposts' => $limit,
        'orderby' => 'date',
        'order' => 'DESC',
    ];

    if ($section) {
        $args['tax_query'] = [[
            'taxonomy' => 'dtox_blog_section',
            'field' => 'slug',
            'terms' => $section,
        ]];
    }

    return get_posts($args);
}

function dtox_blog_card_image(WP_Post $post): string
{
    $preview_map = [
        'recette-cocktail-royaltox' => 'kir-royal.png',
        'recette-de-cocktail-sangritox' => 'sangria.png',
        'recette-de-cocktail-sex-on-the-tox' => 'sex-on-the-beach.png',
        'recette-de-cocktail-mojitox' => 'mojito.png',
        'recette-cocktail-pina-colatox' => 'pina-colada.png',
    ];

    if (isset($preview_map[$post->post_name])) {
        return dtox_media_url($preview_map[$post->post_name]);
    }

    return dtox_media_url(dtox_meta($post->ID, 'dtox_legacy_image', 'hero.jpg'));
}

function dtox_blog_hero_image(WP_Post $post): string
{
    return dtox_media_url(dtox_meta($post->ID, 'dtox_legacy_image', 'hero.jpg'));
}
