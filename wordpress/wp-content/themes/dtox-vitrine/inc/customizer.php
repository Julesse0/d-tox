<?php
/**
 * Native WordPress Customizer settings for global content.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('customize_register', function (WP_Customize_Manager $wp_customize): void {
    $wp_customize->add_section('dtox_options', [
        'title' => 'DTÖX',
        'priority' => 30,
    ]);

    $settings = [
        'email' => ['E-mail', 'eisso@dtox4life.fr'],
        'phone' => ['Téléphone', '04 42 02 65 91'],
        'mobile' => ['Portable', '06 31 55 22 60'],
        'address' => ['Adresse', "DTÖX SARL\n690, Chemin de la Crau\n13880 Velaux"],
        'instagram' => ['Instagram', 'https://www.instagram.com/dtox4life.kombucha/?hl=fr'],
        'facebook' => ['Facebook', 'https://www.facebook.com/Eisdude?fref=ts#'],
        'linkedin' => ['LinkedIn', 'https://www.linkedin.com/in/d-tox-kombucha-06178320b/'],
    ];

    foreach ($settings as $key => [$label, $default]) {
        $wp_customize->add_setting('dtox_' . $key, [
            'default' => $default,
            'sanitize_callback' => $key === 'address' ? 'sanitize_textarea_field' : 'sanitize_text_field',
        ]);

        $wp_customize->add_control('dtox_' . $key, [
            'label' => $label,
            'section' => 'dtox_options',
            'type' => $key === 'address' ? 'textarea' : 'text',
        ]);
    }
});
