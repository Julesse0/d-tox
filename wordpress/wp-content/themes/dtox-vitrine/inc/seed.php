<?php
/**
 * Idempotent demo/content seed for the vitrines pages and CPTs.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('after_switch_theme', function (): void {
    dtox_seed_initial_content();
    update_option('dtox_vitrine_flush_rewrite', '1');
});

add_action('admin_init', function (): void {
    if (!current_user_can('manage_options')) {
        return;
    }

    if (get_option('dtox_vitrine_seeded_version') !== DTOX_THEME_VERSION) {
        dtox_seed_initial_content();
    }
});

add_action('admin_menu', function (): void {
    add_theme_page(
        'Import DTÖX',
        'Import DTÖX',
        'manage_options',
        'dtox-vitrine-import',
        'dtox_render_import_page'
    );
});

add_action('admin_notices', function (): void {
    if (!current_user_can('manage_options') || get_option('dtox_vitrine_seeded_version')) {
        return;
    }

    $screen = function_exists('get_current_screen') ? get_current_screen() : null;
    if ($screen && $screen->id === 'appearance_page_dtox-vitrine-import') {
        return;
    }

    $url = admin_url('themes.php?page=dtox-vitrine-import');
    echo '<div class="notice notice-info"><p><strong>DTÖX Vitrine :</strong> le thème est actif. <a href="' . esc_url($url) . '">Lancer l\'import des pages et contenus DTÖX</a>.</p></div>';
});

add_action('init', function (): void {
    if (get_option('dtox_vitrine_flush_rewrite')) {
        flush_rewrite_rules(false);
        delete_option('dtox_vitrine_flush_rewrite');
    }
}, 99);

function dtox_render_import_page(): void
{
    if (!current_user_can('manage_options')) {
        wp_die(esc_html__('Vous n’avez pas les droits nécessaires.', 'dtox-vitrine'));
    }

    $message = '';

    if (isset($_POST['dtox_seed_nonce']) && wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['dtox_seed_nonce'])), 'dtox_seed_content')) {
        dtox_seed_initial_content();
        $message = 'Import terminé. Les pages, produits, partenaires et articles ont été créés ou mis à jour.';
    }
    ?>
    <div class="wrap">
        <h1>Import DTÖX</h1>
        <?php if ($message !== '') : ?>
            <div class="notice notice-success"><p><?php echo esc_html($message); ?></p></div>
        <?php endif; ?>
        <p>Ce bouton crée ou met à jour les contenus de test du thème sur ce WordPress.</p>
        <p>À utiliser sur le staging uniquement.</p>
        <form method="post">
            <?php wp_nonce_field('dtox_seed_content', 'dtox_seed_nonce'); ?>
            <?php submit_button('Lancer l’import DTÖX'); ?>
        </form>
    </div>
    <?php
}

function dtox_seed_initial_content(): void
{
    if (function_exists('dtox_register_content_types')) {
        dtox_register_content_types();
    }

    $home_id = dtox_seed_page('accueil', 'Accueil', '');
    dtox_seed_page('produits', 'Nos Produits', 'page-produits.php');
    dtox_seed_page('blog', 'Blog', 'page-blog.php');
    dtox_seed_page('a-propos', 'A Propos', 'page-a-propos.php');
    dtox_seed_page('contact', 'Contact', 'page-contact.php');
    dtox_seed_page('mentions-legales', 'Mentions Legales', '');

    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_id);

    dtox_seed_blog_terms();
    dtox_seed_products();
    dtox_seed_partners();
    dtox_seed_blog_posts();
    dtox_seed_menu();

    update_option('dtox_vitrine_seeded_version', DTOX_THEME_VERSION);
    update_option('dtox_vitrine_flush_rewrite', '1');
}

function dtox_seed_page(string $slug, string $title, string $template): int
{
    $existing = get_page_by_path($slug, OBJECT, 'page');
    $post_data = [
        'post_title' => $title,
        'post_name' => $slug,
        'post_status' => 'publish',
        'post_type' => 'page',
        'post_content' => '',
    ];

    if ($existing instanceof WP_Post) {
        $post_data['ID'] = $existing->ID;
        $post_id = wp_update_post($post_data, true);
    } else {
        $post_id = wp_insert_post($post_data, true);
    }

    if (is_wp_error($post_id)) {
        return 0;
    }

    if ($template !== '') {
        update_post_meta((int) $post_id, '_wp_page_template', $template);
    }

    return (int) $post_id;
}

function dtox_seed_blog_terms(): void
{
    $terms = [
        'articles' => 'News',
        'recettes' => 'Recettes',
        'reseaux' => 'On parle de nous / Presse',
        'supports' => 'Supports',
    ];

    foreach ($terms as $slug => $name) {
        if (!term_exists($slug, 'dtox_blog_section')) {
            wp_insert_term($name, 'dtox_blog_section', ['slug' => $slug]);
        }
    }
}

function dtox_seed_products(): void
{
    foreach (dtox_default_products() as $index => $product) {
        $existing = get_page_by_path($product['slug'], OBJECT, 'dtox_product');
        $post_content = '<p>' . esc_html($product['excerpt']) . '</p>';

        $post_data = [
            'post_title' => $product['title'],
            'post_name' => $product['slug'],
            'post_status' => 'publish',
            'post_type' => 'dtox_product',
            'post_excerpt' => $product['excerpt'],
            'post_content' => $post_content,
            'menu_order' => $index + 1,
        ];

        if ($existing instanceof WP_Post) {
            $post_data['ID'] = $existing->ID;
            $post_id = wp_update_post($post_data, true);
        } else {
            $post_id = wp_insert_post($post_data, true);
        }

        if (is_wp_error($post_id)) {
            continue;
        }

        update_post_meta((int) $post_id, 'dtox_image', $product['image']);
        update_post_meta((int) $post_id, 'dtox_gallery_image', $product['gallery_image']);
        update_post_meta((int) $post_id, 'dtox_tag', $product['tag']);
        update_post_meta((int) $post_id, 'dtox_items', implode("\n", $product['items']));
    }
}

function dtox_seed_partners(): void
{
    foreach (dtox_default_partners() as $index => $partner) {
        $slug = sanitize_title($partner['name']);
        $existing = get_page_by_path($slug, OBJECT, 'dtox_partner');
        $post_data = [
            'post_title' => $partner['name'],
            'post_name' => $slug,
            'post_status' => 'publish',
            'post_type' => 'dtox_partner',
            'menu_order' => $index + 1,
        ];

        if ($existing instanceof WP_Post) {
            $post_data['ID'] = $existing->ID;
            $post_id = wp_update_post($post_data, true);
        } else {
            $post_id = wp_insert_post($post_data, true);
        }

        if (is_wp_error($post_id)) {
            continue;
        }

        update_post_meta((int) $post_id, 'dtox_url', $partner['href']);
        update_post_meta((int) $post_id, 'dtox_logo', $partner['logo']);
    }
}

function dtox_seed_blog_posts(): void
{
    $file = DTOX_THEME_DIR . '/assets/data/legacy-blog.json';
    if (!is_readable($file)) {
        return;
    }

    $items = json_decode((string) file_get_contents($file), true);
    if (!is_array($items)) {
        return;
    }

    foreach ($items as $item) {
        if (!is_array($item) || empty($item['slug']) || empty($item['title'])) {
            continue;
        }

        $slug = sanitize_title((string) $item['slug']);
        $existing = get_page_by_path($slug, OBJECT, 'dtox_blog');
        $paragraphs = isset($item['paragraphs']) && is_array($item['paragraphs']) ? $item['paragraphs'] : [];
        $content = '';

        foreach ($paragraphs as $paragraph) {
            $content .= '<p>' . esc_html((string) $paragraph) . '</p>';
        }

        $timestamp = !empty($item['date']) ? strtotime((string) $item['date']) : false;
        $post_date = $timestamp ? date('Y-m-d H:i:s', $timestamp) : current_time('mysql');

        $post_data = [
            'post_title' => (string) $item['title'],
            'post_name' => $slug,
            'post_status' => 'publish',
            'post_type' => 'dtox_blog',
            'post_excerpt' => isset($item['excerpt']) ? (string) $item['excerpt'] : '',
            'post_content' => $content,
            'post_date' => $post_date,
        ];

        if ($existing instanceof WP_Post) {
            $post_data['ID'] = $existing->ID;
            $post_id = wp_update_post($post_data, true);
        } else {
            $post_id = wp_insert_post($post_data, true);
        }

        if (is_wp_error($post_id)) {
            continue;
        }

        $section = !empty($item['section']) ? sanitize_title((string) $item['section']) : 'articles';
        wp_set_object_terms((int) $post_id, [$section], 'dtox_blog_section', false);

        if (!empty($item['heroImage'])) {
            update_post_meta((int) $post_id, 'dtox_legacy_image', ltrim((string) $item['heroImage'], '/'));
        }
    }
}

function dtox_seed_menu(): void
{
    $menu_name = 'Navigation DTÖX';
    $menu = wp_get_nav_menu_object($menu_name);

    if (!$menu) {
        $menu_id = wp_create_nav_menu($menu_name);
        if (is_wp_error($menu_id)) {
            return;
        }
    } else {
        $menu_id = (int) $menu->term_id;
    }

    $existing_items = wp_get_nav_menu_items($menu_id);
    if (is_array($existing_items)) {
        foreach ($existing_items as $item) {
            wp_delete_post((int) $item->ID, true);
        }
    }

    $products_parent = dtox_seed_menu_item($menu_id, 'Nos Produits', dtox_get_page_url('produits'));
    dtox_seed_menu_item($menu_id, 'DTÖX Original 1L', dtox_get_page_url('produits/d-tox'), $products_parent);
    dtox_seed_menu_item($menu_id, 'Château de la Crau', dtox_get_page_url('produits/chateau'), $products_parent);

    $blog_parent = dtox_seed_menu_item($menu_id, 'Blog', dtox_get_page_url('blog'));
    dtox_seed_menu_item($menu_id, 'News', dtox_get_page_url('blog/articles'), $blog_parent);
    dtox_seed_menu_item($menu_id, 'Recettes', dtox_get_page_url('blog/recettes'), $blog_parent);
    dtox_seed_menu_item($menu_id, 'On parle de nous / Presse', dtox_get_page_url('blog/reseaux'), $blog_parent);

    $about_parent = dtox_seed_menu_item($menu_id, 'A Propos', dtox_get_page_url('a-propos'));
    dtox_seed_menu_item($menu_id, 'Notre Histoire', dtox_get_page_url('a-propos#histoire'), $about_parent);
    dtox_seed_menu_item($menu_id, 'Chronologie', dtox_get_page_url('a-propos#chronologie'), $about_parent);
    dtox_seed_menu_item($menu_id, 'Processus', dtox_get_page_url('a-propos#processus'), $about_parent);

    dtox_seed_menu_item($menu_id, 'Contact', dtox_get_page_url('contact'));

    $locations = get_theme_mod('nav_menu_locations', []);
    $locations['primary'] = $menu_id;
    set_theme_mod('nav_menu_locations', $locations);
}

function dtox_seed_menu_item(int $menu_id, string $title, string $url, int $parent_id = 0): int
{
    $item_id = wp_update_nav_menu_item($menu_id, 0, [
        'menu-item-title' => $title,
        'menu-item-url' => $url,
        'menu-item-status' => 'publish',
        'menu-item-parent-id' => $parent_id,
    ]);

    return is_wp_error($item_id) ? 0 : (int) $item_id;
}
