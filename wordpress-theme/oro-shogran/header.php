<?php
/**
 * Header template
 * @package Oro_Shogran
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="utility-bar">
    <div class="container">
        <span>📍 <?php echo esc_html( oro_get_mod( 'oro_address', 'Shogran Valley, Kaghan, Pakistan' ) ); ?></span>
        <div>
            <a href="tel:<?php echo esc_attr( oro_get_mod( 'oro_phone', '+92 300 1234567' ) ); ?>"><?php echo esc_html( oro_get_mod( 'oro_phone', '+92 300 1234567' ) ); ?></a>
            <a href="mailto:<?php echo esc_attr( oro_get_mod( 'oro_email', 'reservations@oroshogran.com' ) ); ?>"><?php echo esc_html( oro_get_mod( 'oro_email', 'reservations@oroshogran.com' ) ); ?></a>
        </div>
    </div>
</div>

<header class="site-header">
    <div class="container">
        <?php oro_site_branding(); ?>
        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">☰</button>
        <nav class="main-nav" id="primary-menu" role="navigation">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => '',
                'fallback_cb'    => 'oro_fallback_menu',
            ) );
            ?>
        </nav>
        <a class="btn-book" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Reserve</a>
    </div>
</header>

<main id="primary" class="site-main">