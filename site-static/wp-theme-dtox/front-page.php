<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

$file = trailingslashit( ABSPATH ) . 'index.html';

if ( file_exists( $file ) ) {
	readfile( $file );
} else {
	echo '<main class="dtox-fallback" style="padding:2rem;max-width:960px;margin:0 auto;">';
	echo '<h1>' . esc_html( get_bloginfo( 'name' ) ) . '</h1>';
	echo '<p>' . esc_html( get_bloginfo( 'description' ) ) . '</p>';
	echo '<p>Le fichier index.html de votre export statique est introuvable à la racine de WordPress.</p>';
	echo '</main>';
}

get_footer();
