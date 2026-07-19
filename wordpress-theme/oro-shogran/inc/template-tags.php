<?php
/**
 * Custom template tags for Oro Shogran
 */
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Print the site branding block
 */
function oro_site_branding() {
    if ( has_custom_logo() ) {
        the_custom_logo();
    } else {
        echo '<div class="site-branding">';
        echo '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html( get_bloginfo( 'name' ) );
        echo '<span class="tag">' . esc_html( get_bloginfo( 'description' ) ) . '</span>';
        echo '</a></div>';
    }
}

/**
 * Suite card
 */
function oro_render_suite_card( $post_id ) {
    $price  = get_post_meta( $post_id, '_oro_price', true );
    $guests = get_post_meta( $post_id, '_oro_guests', true );
    ?>
    <article class="card">
        <a href="<?php echo esc_url( get_permalink( $post_id ) ); ?>">
            <div class="thumb">
                <?php if ( has_post_thumbnail( $post_id ) ) : ?>
                    <?php echo get_the_post_thumbnail( $post_id, 'oro-suite' ); ?>
                <?php endif; ?>
            </div>
            <div class="body">
                <span class="eyebrow"><?php echo $guests ? esc_html( $guests . ' guests' ) : 'Suite'; ?></span>
                <h3><?php echo esc_html( get_the_title( $post_id ) ); ?></h3>
                <p><?php echo esc_html( get_the_excerpt( $post_id ) ); ?></p>
                <?php if ( $price ) : ?>
                    <div class="price">From PKR <?php echo esc_html( $price ); ?> / night</div>
                <?php endif; ?>
            </div>
        </a>
    </article>
    <?php
}