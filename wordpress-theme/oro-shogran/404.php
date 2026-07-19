<?php
/**
 * 404 template
 * @package Oro_Shogran
 */
get_header(); ?>

<section class="section" style="text-align:center;padding:160px 0">
    <div class="container">
        <span class="eyebrow">404</span>
        <h1>This trail leads nowhere</h1>
        <p style="max-width:520px;margin:24px auto">The page you were looking for has wandered off into the pines. Let's guide you back.</p>
        <a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>" style="margin-top:24px">Return Home</a>
    </div>
</section>

<?php get_footer(); ?>