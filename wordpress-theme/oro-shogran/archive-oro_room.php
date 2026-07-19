<?php
/**
 * Suites archive template
 * @package Oro_Shogran
 */
get_header(); ?>

<section class="page-hero">
    <div class="container">
        <span class="eyebrow">Accommodations</span>
        <h1>Our Suites</h1>
        <p style="max-width:640px;margin:24px auto 0">Six thoughtfully composed retreats — each with private terrace, fireplace warmth and views tuned to the valley's rhythm.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <?php if ( have_posts() ) : ?>
            <div class="grid grid-3">
                <?php while ( have_posts() ) : the_post(); oro_render_suite_card( get_the_ID() ); endwhile; ?>
            </div>
        <?php else : ?>
            <p style="text-align:center">No suites published yet. Add them from <strong>Suites</strong> in the WP admin.</p>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>