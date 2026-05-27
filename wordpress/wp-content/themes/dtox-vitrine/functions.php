<?php
/**
 * D-tox Vitrine theme bootstrap.
 */

if (!defined('ABSPATH')) {
    exit;
}

define('DTOX_THEME_VERSION', '0.1.3');
define('DTOX_THEME_DIR', get_template_directory());
define('DTOX_THEME_URI', get_template_directory_uri());

require_once DTOX_THEME_DIR . '/inc/content.php';
require_once DTOX_THEME_DIR . '/inc/helpers.php';
require_once DTOX_THEME_DIR . '/inc/setup.php';
require_once DTOX_THEME_DIR . '/inc/customizer.php';
require_once DTOX_THEME_DIR . '/inc/seed.php';
