<?php
/**
 * Main template
 * @package Oro_Shogran
 */
get_header(); ?>

<section class="page-hero">
    <div class="container">
        <span class="eyebrow">Journal</span>
        <h1><?php is_home() ? single_post_title( '', false ) : the_archive_title(); ?></h1>
    </div>
</section>

<section class="section">
    <div class="container">
        <?php if ( have_posts() ) : ?>
            <div class="grid grid-3">
                <?php while ( have_posts() ) : the_post(); ?>
                    <article class="card">
                        <a href="<?php the_permalink(); ?>">
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="thumb"><?php the_post_thumbnail( 'oro-card' ); ?></div>
                            <?php endif; ?>
                            <div class="body">
                                <span class="eyebrow"><?php echo esc_html( get_the_date() ); ?></span>
                                <h3><?php the_title(); ?></h3>
                                <p><?php the_excerpt(); ?></p>
                            </div>
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>
            <div style="text-align:center;margin-top:48px">
                <?php the_posts_pagination( array( 'prev_text' => '← Previous', 'next_text' => 'Next →' ) ); ?>
            </div>
        <?php else : ?>
            <p style="text-align:center">No posts found.</p>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>