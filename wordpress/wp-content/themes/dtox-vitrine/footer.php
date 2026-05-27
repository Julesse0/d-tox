<?php
/**
 * Theme footer.
 */

if (!defined('ABSPATH')) {
    exit;
}

$address_lines = dtox_split_lines(dtox_theme_option('address'));
?>
</main>
<footer class="site-footer">
    <div class="container site-footer__grid">
        <div class="site-footer__brand">
            <h2>DTÖX</h2>
            <p>Kombucha artisanal brassé avec des ingrédients naturels et une fermentation vivante.</p>
            <div class="site-footer__socials">
                <a href="<?php echo esc_url(dtox_theme_option('instagram')); ?>" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
                <a href="<?php echo esc_url(dtox_theme_option('facebook')); ?>" target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
                <a href="mailto:<?php echo esc_attr(dtox_theme_option('email')); ?>" aria-label="Email">@</a>
            </div>
        </div>

        <div>
            <h3>Nos Produits</h3>
            <nav class="site-footer__links">
                <a href="<?php echo esc_url(dtox_get_page_url('produits/d-tox')); ?>">DTÖX Original 1L</a>
                <a href="<?php echo esc_url(dtox_get_page_url('produits/chateau')); ?>">Château de la Crau</a>
            </nav>
        </div>

        <div>
            <h3>Éditorial</h3>
            <nav class="site-footer__links">
                <a href="<?php echo esc_url(dtox_get_page_url('blog/articles')); ?>">News</a>
                <a href="<?php echo esc_url(dtox_get_page_url('blog/recettes')); ?>">Recettes</a>
                <a href="<?php echo esc_url(dtox_get_page_url('blog/reseaux')); ?>">On parle de nous / Presse</a>
                <a href="<?php echo esc_url(dtox_get_page_url('contact#formulaire')); ?>">Nous contacter</a>
            </nav>
        </div>

        <div>
            <h3>Contact</h3>
            <div class="site-footer__links">
                <a href="mailto:<?php echo esc_attr(dtox_theme_option('email')); ?>"><?php echo esc_html(dtox_theme_option('email')); ?></a>
                <span><?php echo esc_html(dtox_theme_option('phone')); ?></span>
                <span><?php echo esc_html(end($address_lines) ?: 'Velaux, France'); ?></span>
            </div>
        </div>
    </div>

    <div class="container site-footer__bottom">
        <p>© <?php echo esc_html(date('Y')); ?> DTÖX. Tous droits réservés.</p>
        <div>
            <a href="<?php echo esc_url(dtox_get_page_url('mentions-legales')); ?>">Mentions Légales</a>
            <a href="#">Politique de Confidentialité</a>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
