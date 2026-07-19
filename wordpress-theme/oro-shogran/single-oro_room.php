<?php
/**
 * Single Suite template
 * @package Oro_Shogran
 */
get_header();
while ( have_posts() ) : the_post();
    $price  = get_post_meta( get_the_ID(), '_oro_price', true );
    $guests = get_post_meta( get_the_ID(), '_oro_guests', true );
    $size   = get_post_meta( get_the_ID(), '_oro_size', true );
    $beds   = get_post_meta( get_the_ID(), '_oro_beds', true );
?>

<section class="page-hero" <?php if ( has_post_thumbnail() ) echo 'style="background-image:linear-gradient(rgba(11,11,11,.5),rgba(11,11,11,.85)),url(' . esc_url( get_the_post_thumbnail_url( null, 'oro-hero' ) ) . ');background-size:cover;background-position:center;min-height:60vh"'; ?>>
    <div class="container">
        <span class="eyebrow">Signature Suite</span>
        <h1><?php the_title(); ?></h1>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid grid-2">
            <div class="entry-content"><?php the_content(); ?></div>
            <aside style="background:var(--ink-2);padding:32px;border:1px solid var(--line)">
                <h3 style="font-size:1.5rem">Suite Details</h3>
                <div class="rule"></div>
                <ul style="list-style:none;padding:0">
                    <?php if ( $price ) : ?><li>PKR <strong><?php echo esc_html( $price ); ?></strong> / night</li><?php endif; ?>
                    <?php if ( $guests ) : ?><li>Up to <?php echo esc_html( $guests ); ?> guests</li><?php endif; ?>
                    <?php if ( $beds ) : ?><li><?php echo esc_html( $beds ); ?></li><?php endif; ?>
                    <?php if ( $size ) : ?><li><?php echo esc_html( $size ); ?> sq ft</li><?php endif; ?>
                </ul>
                <a class="btn btn-primary" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" style="margin-top:24px;width:100%;text-align:center">Reserve This Suite</a>
            </aside>
        </div>
    </div>
</section>

<?php endwhile; get_footer(); ?>