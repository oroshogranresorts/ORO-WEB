<?php
/**
 * Default page template
 * @package Oro_Shogran
 */
get_header(); ?>

<section class="page-hero">
    <div class="container">
        <span class="eyebrow">Oro Shogran</span>
        <h1><?php the_title(); ?></h1>
    </div>
</section>

<section class="section">
    <div class="container">
        <?php while ( have_posts() ) : the_post(); ?>
            <div class="entry-content"><?php the_content(); ?></div>
        <?php endwhile; ?>
    </div>
</section>

<?php get_footer(); ?>