<?php
/**
 * Shared helpers for templates.
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('wp_body_open')) {
    function wp_body_open(): void
    {
        do_action('wp_body_open');
    }
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
    $defaults = [
        'company' => 'DTÖX SARL',
        'contact_name' => 'Eisso Weert jr',
        'email' => 'eisso@dtox4life.fr',
        'phone' => '04 42 02 65 91',
        'mobile' => '06 31 55 22 60',
        'address' => "690, Chemin de la Crau\n13880 Velaux",
        'instagram' => 'https://www.instagram.com/dtox4life.kombucha/?hl=fr',
        'facebook' => 'https://www.facebook.com/Eisdude?fref=ts#',
        'linkedin' => 'https://www.linkedin.com/in/d-tox-kombucha-06178320b/',
    ];

    if ($fallback === '' && isset($defaults[$key])) {
        $fallback = $defaults[$key];
    }

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
    $anchor = '';
    if (strpos($path, '#') !== false) {
        [$path, $anchor] = explode('#', $path, 2);
        $anchor = '#' . sanitize_title($anchor);
    }

    $path = trim($path, '/');
    if ($path === '') {
        return home_url('/') . $anchor;
    }

    $parts = explode('/', $path);

    if ($parts[0] === 'produits' && isset($parts[1])) {
        $product = dtox_find_product($parts[1]);
        if ($product instanceof WP_Post) {
            return get_permalink($product) . $anchor;
        }
    }

    if ($parts[0] === 'blog' && isset($parts[1])) {
        $term = get_term_by('slug', $parts[1], 'dtox_blog_section');
        if ($term instanceof WP_Term) {
            $url = get_term_link($term);
            if (!is_wp_error($url)) {
                return $url . $anchor;
            }
        }
    }

    $page = get_page_by_path($path, OBJECT, 'page');
    if ($page instanceof WP_Post) {
        return get_permalink($page) . $anchor;
    }

    if ($path === 'produits') {
        $archive = get_post_type_archive_link('dtox_product');
        if ($archive) {
            return $archive . $anchor;
        }
    }

    if ($path === 'blog') {
        $archive = get_post_type_archive_link('dtox_blog');
        if ($archive) {
            return $archive . $anchor;
        }
    }

    return home_url('/' . $path . '/') . $anchor;
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

function dtox_render_contact_form(): void
{
    $forms = class_exists('WPCF7_ContactForm') ? get_posts([
        'post_type' => 'wpcf7_contact_form',
        'post_status' => 'publish',
        'numberposts' => 1,
    ]) : [];

    if (!empty($forms)) {
        echo do_shortcode('[contact-form-7 id="' . (int) $forms[0]->ID . '" title="' . esc_attr($forms[0]->post_title) . '"]');
        return;
    }
    ?>
    <form action="mailto:<?php echo esc_attr(dtox_theme_option('email')); ?>" method="post" enctype="text/plain">
        <label>
            Votre nom*
            <input type="text" name="nom" autocomplete="name" required>
        </label>
        <label>
            Votre email*
            <input type="email" name="email" autocomplete="email" required>
        </label>
        <label>
            Sujet
            <input type="text" name="sujet">
        </label>
        <label>
            Votre message
            <textarea name="message" rows="7" required></textarea>
        </label>
        <button class="btn" type="submit">Envoyer</button>
    </form>
    <?php
}

function dtox_svg_icon(string $name): string
{
    $icons = [
        'map-pin' => '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
        'phone' => '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92Z"/>',
        'user' => '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
        'mail' => '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
        'instagram' => '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
        'facebook' => '<path d="M15 8h-2a2 2 0 0 0-2 2v2H9v4h2v6h4v-6h3l1-4h-4v-1a1 1 0 0 1 1-1h3V8Z"/>',
        'linkedin' => '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    ];

    if (!isset($icons[$name])) {
        return '';
    }

    return '<svg class="dtox-icon dtox-icon--' . esc_attr($name) . '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' . $icons[$name] . '</svg>';
}
