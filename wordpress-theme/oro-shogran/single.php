<?php
/**
 * Single post template
 * @package Oro_Shogran
 */
get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
    <section class="page-hero" <?php if ( has_post_thumbnail() ) echo 'style="background-image:linear-gradient(rgba(11,11,11,.7),rgba(11,11,11,.9)),url(' . esc_url( get_the_post_thumbnail_url( null, 'oro-hero' ) ) . ');background-size:cover;background-position:center"'; ?>>
        <div class="container">
            <span class="eyebrow"><?php echo esc_html( get_the_date() ); ?></span>
            <h1><?php the_title(); ?></h1>
        </div>
    </section>

    <article class="section">
        <div class="container">
            <div class="entry-content"><?php the_content(); ?></div>
        </div>
    </article>
<?php endwhile; ?>

<?php get_footer(); ?>