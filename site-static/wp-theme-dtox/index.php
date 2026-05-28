<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
echo '<main class="dtox-index-fallback" style="padding:2rem;max-width:960px;margin:0 auto;">';
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
		the_title( '<h1>', '</h1>' );
		the_content();
	}
} else {
	echo '<h1>' . esc_html( get_bloginfo( 'name' ) ) . '</h1>';
	echo '<p>' . esc_html( get_bloginfo( 'description' ) ) . '</p>';
}
echo '</main>';
get_footer();
