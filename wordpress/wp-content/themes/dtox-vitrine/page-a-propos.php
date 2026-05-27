<?php
/**
 * About page template.
 */

get_header();
?>

<section id="histoire" class="section split-story about-story">
    <div class="container split-story__grid">
        <div class="split-story__content">
            <p class="eyebrow">À Propos</p>
            <h1>Notre Histoire</h1>
            <p>2004, Eisso boit son premier verre de kombucha, fabriqué par sa mère. Elle en fabrique depuis quelques années mais Eisso ne voulait jamais goûter à ce truc monstrueux. Puis, le buvant en cure il est vendu : fini les sodas !</p>
            <p>Malgré sa belle carrière dans l'import-export il est malheureux et déprimé. Alors il décide de tout plaquer aux Pays-Bas. Il enregistre avec ses derniers sous un CD nommé Clochard Deluxe : des tubes de violon classique et orchestre, qu'il va jouer et vendre pendant 3 ans sur les marchés du Sud de la France.</p>
            <p>En lui rendant visite en octobre 2005 sa maman lui donne deux souches de kombucha pour en fabriquer lui-même. Trois cruches, un calepin pour prendre des notes, et un an de patience dans la cave de la bastide où il vit donneront naissance à cette boisson.</p>
            <p>L'histoire de la boisson démarre dans la cave de cette bastide aixoise incroyable.</p>
        </div>
        <figure class="split-story__image">
            <img src="<?php echo esc_url(dtox_image('mission.jpg')); ?>" alt="L'histoire de DTÖX">
        </figure>
    </div>
</section>

<section id="chronologie" class="section timeline-section">
    <div class="container timeline-panel">
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

<section id="processus" class="section split-story process-story">
    <div class="container split-story__grid">
        <div class="split-story__content">
            <p class="eyebrow">Processus</p>
            <h2>Processus de fabrication</h2>
            <p>C'est un savoureux mélange de thés et de sucre bio, fermenté par une symbiose de bactéries, levures, enzymes et ferments lactiques : SCOBY.</p>
            <p>À cette échelle de fabrication, nous sommes un des rares producteurs à fermenter intégralement sur souches de A-Z, ce qui garantit cette qualité inégalée.</p>
            <p>À force de chercher la perfection, ensemble avec des laboratoires, nous avons réussi à pousser la symbiose vers une dominance bactérienne.</p>
            <p>Car c'est elle qui fabrique ce goût unique, ces bienfaits surprenants, et ces qualités de conservateur naturel.</p>
            <p>Notre process unique et artisanal repose sur l'art de la fermentation, avec des thés bio, du sucre bio et une symbiose vivante guidée avec précision.</p>

            <div class="process-highlights">
                <div>
                    <strong>Base Vivante</strong>
                    <span>Thés bio, sucre bio et SCOBY</span>
                </div>
                <div>
                    <strong>Fermentation</strong>
                    <span>Intégralement sur souches de A-Z</span>
                </div>
                <div>
                    <strong>Signature DTÖX</strong>
                    <span>Une dominante bactérienne recherchée</span>
                </div>
            </div>

            <p class="process-quote">En fait il suffit de bien regarder la nature pour qu'elle puisse s'exprimer de la meilleure façon.</p>
        </div>
        <figure class="split-story__image split-story__image--small">
            <img src="<?php echo esc_url(dtox_image('process-deck-01.jpg')); ?>" alt="Visuel du processus DTÖX">
        </figure>
    </div>
</section>

<?php get_footer(); ?>
