<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

$request_path = dtox_request_path();
$candidates   = dtox_static_file_candidates( $request_path );
$served       = false;

foreach ( $candidates as $candidate ) {
	if ( file_exists( $candidate ) && is_file( $candidate ) ) {
		readfile( $candidate );
		$served = true;
		break;
	}
}

if ( ! $served ) {
	while ( have_posts() ) {
		the_post();
		echo '<main class="dtox-wp-page" style="padding:2rem;max-width:960px;margin:0 auto;">';
		the_title( '<h1>', '</h1>' );
		the_content();
		echo '</main>';
	}
}

get_footer();
