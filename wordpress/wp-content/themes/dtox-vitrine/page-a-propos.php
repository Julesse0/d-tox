<?php
/**
 * About page template.
 */

get_header();
?>

<section class="page-hero page-hero--compact about-hero">
    <div class="container">
        <p class="eyebrow">À Propos</p>
        <h1>Une histoire de fermentation, de patience et de goût.</h1>
        <p>DTÖX défend un kombucha vivant, brut et accessible, fabriqué avec exigence près d'Aix-en-Provence.</p>
    </div>
</section>

<section class="section split-story">
    <div class="container split-story__grid">
        <div class="split-story__content">
            <p class="eyebrow">Notre Histoire</p>
            <h2>Du brassage artisanal à une marque reconnue.</h2>
            <p>La maison s'est construite autour d'une conviction simple : proposer un kombucha authentique, sans surpromesse, avec une fermentation réelle et des ingrédients choisis avec soin.</p>
            <p>Au fil des années, DTÖX a grandi avec ses partenaires, ses points de vente et une communauté fidèle, tout en gardant le même cap : goût, exigence, lisibilité.</p>
        </div>
        <figure class="split-story__image">
            <img src="<?php echo esc_url(dtox_image('mission.jpg')); ?>" alt="Préparation DTÖX">
        </figure>
    </div>
</section>

<section class="section section--white split-story">
    <div class="container split-story__grid split-story__grid--reverse">
        <figure class="split-story__image split-story__image--small">
            <img src="<?php echo esc_url(dtox_image('process-deck-01.jpg')); ?>" alt="Contrôle du brassage DTÖX">
        </figure>
        <div class="split-story__content">
            <p class="eyebrow">Le Processus</p>
            <h2>Une fermentation suivie, vivante et maîtrisée.</h2>
            <p>Chaque cuvée est travaillée avec le temps nécessaire : infusion, fermentation, contrôle, filtration selon les formats, puis conditionnement dans des règles strictes.</p>
            <p>Le résultat doit rester clair pour le consommateur : une boisson bio, rafraîchissante, stable et fidèle au caractère naturel du kombucha.</p>
        </div>
    </div>
</section>

<section class="section timeline-section">
    <div class="container">
        <div class="section-heading section-heading--center">
            <div>
                <p class="eyebrow">Chronologie</p>
                <h2>Les grandes dates</h2>
            </div>
        </div>

        <div class="timeline">
            <?php foreach (dtox_timeline() as $item) : ?>
                <article class="timeline__item">
                    <span class="timeline__year"><?php echo esc_html($item['year']); ?></span>
                    <div class="timeline__card">
                        <h3><?php echo esc_html($item['title']); ?></h3>
                        <p><?php echo esc_html($item['text']); ?></p>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
