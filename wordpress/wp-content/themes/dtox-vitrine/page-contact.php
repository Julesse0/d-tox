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
$address = dtox_theme_option('address', "690, Chemin de la Crau\n13880 Velaux");
$address_lines = dtox_split_lines($address);
$map_query = rawurlencode(implode(', ', $address_lines));
?>

<section class="page-hero page-hero--compact contact-hero">
    <div class="container">
        <p class="eyebrow">Nous joindre</p>
        <h1>Contact</h1>
    </div>
</section>

<section class="contact-locator">
    <div class="container contact-locator__panel">
        <div class="section-heading section-heading--center">
            <div>
                <p class="eyebrow">Points de vente</p>
                <h2>Où nous trouver</h2>
                <p>Retrouvez DTÖX chez nos partenaires et distributeurs, en ligne comme en magasin.</p>
            </div>
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
    <div class="container contact-panel">
        <div class="contact-grid">
            <div class="contact-card">
                <div>
                    <p class="eyebrow">Atelier Velaux</p>
                    <h2>Restons en contact</h2>
                    <p>Toutes les infos utiles pour joindre DTÖX rapidement, que ce soit pour une demande commerciale, un point de distribution ou une question produit.</p>
                </div>

                <div class="contact-info-grid">
                    <article>
                        <span class="contact-info-icon contact-info-icon--red" aria-hidden="true"></span>
                        <strong>Adresse</strong>
                        <span><?php echo esc_html(dtox_theme_option('company', 'DTÖX SARL')); ?></span>
                        <?php foreach ($address_lines as $line) : ?>
                            <span><?php echo esc_html($line); ?></span>
                        <?php endforeach; ?>
                    </article>
                    <article>
                        <span class="contact-info-icon contact-info-icon--dark" aria-hidden="true"></span>
                        <strong>Téléphone</strong>
                        <a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', dtox_theme_option('phone'))); ?>"><?php echo esc_html(dtox_theme_option('phone')); ?></a>
                        <a href="tel:<?php echo esc_attr(preg_replace('/\s+/', '', dtox_theme_option('mobile'))); ?>">Portable : <?php echo esc_html(dtox_theme_option('mobile')); ?></a>
                    </article>
                    <article>
                        <span class="contact-info-icon contact-info-icon--red" aria-hidden="true"></span>
                        <strong>Contact France</strong>
                        <span><?php echo esc_html(dtox_theme_option('contact_name', 'Eisso')); ?></span>
                    </article>
                    <article>
                        <span class="contact-info-icon contact-info-icon--dark" aria-hidden="true"></span>
                        <strong>E-mail</strong>
                        <a href="mailto:<?php echo esc_attr(dtox_theme_option('email')); ?>"><?php echo esc_html(dtox_theme_option('email')); ?></a>
                    </article>
                </div>

                <div class="contact-social-card">
                    <p class="eyebrow">Communauté</p>
                    <h3>Suivez-nous</h3>
                    <p>Retrouvez nos actualités, nos produits et nos prises de parole sur les réseaux de la marque.</p>
                    <div class="contact-social-links">
                        <a href="<?php echo esc_url(dtox_theme_option('instagram')); ?>" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
                        <a href="<?php echo esc_url(dtox_theme_option('facebook')); ?>" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
                        <a href="<?php echo esc_url(dtox_theme_option('linkedin')); ?>" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <p class="eyebrow">Formulaire</p>
                <h2>Envoyez-nous un message</h2>
                <p>Une question sur nos saveurs, la distribution ou un partenariat ? Écrivez-nous directement ici.</p>
                <?php dtox_render_contact_form(); ?>
            </div>
        </div>
    </div>
</section>

<section class="section find-us-section">
    <div class="container find-us-panel">
        <div class="find-us-panel__header">
            <div>
                <p class="eyebrow">Adresse</p>
                <h2>Nous trouver</h2>
            </div>
            <p>Notre atelier et point de contact principal restent basés à Velaux.</p>
        </div>
        <div class="find-us-panel__map">
            <iframe
                title="Carte DTÖX"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=<?php echo esc_attr($map_query); ?>&output=embed">
            </iframe>
        </div>
    </div>
</section>

<?php get_footer(); ?>
