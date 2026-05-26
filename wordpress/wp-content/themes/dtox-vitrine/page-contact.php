<?php
/**
 * Contact page template.
 */

get_header();

$partners = dtox_get_partners();
$partner_defaults = dtox_default_partners();
$display_partners = $partners ?: array_map(static function ($item) {
    return (object) ['post_title' => $item['name'], 'ID' => 0, 'fallback' => $item];
}, $partner_defaults);
$address = dtox_theme_option('address', "D-TOX SARL\n690, Chemin de la Crau\n13880 Velaux");
$address_lines = dtox_split_lines($address);
$map_query = rawurlencode(implode(', ', $address_lines));
?>

<section class="contact-locator">
    <div class="container contact-locator__grid">
        <div>
            <p class="eyebrow">Points De Vente</p>
            <h1>Où nous trouver</h1>
            <p>Retrouvez D-tox chez nos partenaires et distributeurs, en ligne comme en magasin.</p>
        </div>
        <div class="partners-grid partners-grid--compact">
            <?php foreach ($display_partners as $partner) :
                $fallback = $partner->fallback ?? ['href' => '#', 'logo' => ''];
                $href = $partner->ID ? dtox_meta($partner->ID, 'dtox_url', $fallback['href']) : $fallback['href'];
                $logo = $partner->ID ? dtox_meta($partner->ID, 'dtox_logo', $fallback['logo']) : $fallback['logo'];
                ?>
                <a class="partner-card" href="<?php echo esc_url($href); ?>" target="_blank" rel="noreferrer">
                    <img src="<?php echo esc_url(dtox_media_url($logo)); ?>" alt="Logo <?php echo esc_attr($partner->post_title); ?>">
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section id="formulaire" class="section section--white contact-form-section">
    <div class="container contact-grid">
        <div class="contact-card">
            <p class="eyebrow">Restons En Contact</p>
            <h2>Une demande pro, une question produit ou une envie de collaborer ?</h2>
            <p>Envoyez-nous votre message, l'équipe D-tox vous répondra directement.</p>
            <div class="contact-details">
                <a href="mailto:<?php echo esc_attr(dtox_theme_option('email')); ?>"><?php echo esc_html(dtox_theme_option('email')); ?></a>
                <a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', dtox_theme_option('phone'))); ?>"><?php echo esc_html(dtox_theme_option('phone')); ?></a>
                <a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', dtox_theme_option('mobile'))); ?>"><?php echo esc_html(dtox_theme_option('mobile')); ?></a>
            </div>
        </div>

        <div class="contact-form">
            <?php
            $forms = class_exists('WPCF7_ContactForm') ? get_posts([
                'post_type' => 'wpcf7_contact_form',
                'post_status' => 'publish',
                'numberposts' => 1,
            ]) : [];

            if (!empty($forms)) {
                echo do_shortcode('[contact-form-7 id="' . (int) $forms[0]->ID . '" title="' . esc_attr($forms[0]->post_title) . '"]');
            } else {
                ?>
                <form action="mailto:<?php echo esc_attr(dtox_theme_option('email')); ?>" method="post" enctype="text/plain">
                    <label>
                        Nom
                        <input type="text" name="nom" required>
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" required>
                    </label>
                    <label>
                        Message
                        <textarea name="message" rows="6" required></textarea>
                    </label>
                    <button class="btn" type="submit">Envoyer</button>
                </form>
                <?php
            }
            ?>
        </div>
    </div>
</section>

<section class="section find-us-section">
    <div class="container find-us-grid">
        <div>
            <p class="eyebrow">Nous Trouver</p>
            <h2>Le labo D-tox</h2>
            <address>
                <?php foreach ($address_lines as $line) : ?>
                    <span><?php echo esc_html($line); ?></span>
                <?php endforeach; ?>
            </address>
        </div>
        <iframe
            title="Carte D-tox"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=<?php echo esc_attr($map_query); ?>&output=embed">
        </iframe>
    </div>
</section>

<?php get_footer(); ?>
