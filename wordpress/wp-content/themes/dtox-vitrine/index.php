<?php
/**
 * Fallback template.
 */

get_header();
?>
<section class="section page-hero">
    <div class="container">
        <p class="eyebrow">D-tox</p>
        <h1><?php single_post_title(); ?></h1>
    </div>
</section>

<section class="section">
    <div class="container content">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                the_content();
            endwhile;
        endif;
        ?>
    </div>
</section>
<?php get_footer(); ?>
