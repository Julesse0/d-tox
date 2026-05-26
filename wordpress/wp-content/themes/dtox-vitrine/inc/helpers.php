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
