<?php
/**
 * Front page template — Home
 * @package Oro_Shogran
 */
get_header();
$hero_image = oro_get_mod( 'oro_hero_image' );
if ( ! $hero_image ) {
    $hero_image = get_template_directory_uri() . '/assets/images/hero.jpg';
}
?>

<section class="hero" style="background-image:url('<?php echo esc_url( $hero_image ); ?>')">
    <div class="container">
        <span class="eyebrow"><?php echo esc_html( oro_get_mod( 'oro_hero_eyebrow', 'Kaghan Valley · Est. 2019' ) ); ?></span>
        <h1><?php echo esc_html( oro_get_mod( 'oro_hero_title', 'A Cinematic Retreat Above the Clouds' ) ); ?></h1>
        <p class="lede"><?php echo esc_html( oro_get_mod( 'oro_hero_subtitle', 'Tucked into the pine-scented ridges of Shogran, Oro is a private mountain hideaway where alpine light, artisan craft and quiet luxury converge.' ) ); ?></p>
        <div style="margin-top:32px;display:flex;gap:16px;flex-wrap:wrap">
            <a class="btn btn-primary" href="<?php echo esc_url( home_url( '/suites/' ) ); ?>">Explore Suites</a>
            <a class="btn" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Reserve a Stay</a>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid grid-2" style="align-items:center">
            <div>
                <span class="eyebrow">The Heritage</span>
                <h2>A quieter altitude of Pakistan's mountain hospitality.</h2>
                <div class="rule"></div>
                <p>Oro Shogran was conceived as a retreat for travellers who measure luxury in stillness — the hush of cedar forest at dawn, a fire that never goes out, tea poured on a private terrace as the sun folds behind the Malka Parbat range.</p>
                <p>Every suite, every meal, every gesture is designed around the landscape it inhabits.</p>
                <a class="btn" href="<?php echo esc_url( home_url( '/about/' ) ); ?>" style="margin-top:24px">Read Our Story</a>
            </div>
            <div>
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/heritage.jpg' ); ?>" alt="Oro Shogran retreat">
            </div>
        </div>
    </div>
</section>

<section class="section" style="background:var(--ink-2)">
    <div class="container">
        <div style="text-align:center;margin-bottom:64px">
            <span class="eyebrow">Accommodations</span>
            <h2>Signature Suites</h2>
        </div>
        <div class="grid grid-3">
            <?php
            $rooms = new WP_Query( array( 'post_type' => 'oro_room', 'posts_per_page' => 3 ) );
            if ( $rooms->have_posts() ) :
                while ( $rooms->have_posts() ) : $rooms->the_post();
                    oro_render_suite_card( get_the_ID() );
                endwhile;
                wp_reset_postdata();
            else :
                $placeholders = array(
                    array( 'Luxury Family Rooms', 'Panoramic valley views · 4 guests', '25,000' ),
                    array( 'Deluxe Family Suite', 'Private terrace · fireplace · 6 guests', '35,000' ),
                    array( 'Deluxe Family Rooms', 'Forest-facing balcony · 4 guests', '20,000' ),
                );
                foreach ( $placeholders as $p ) : ?>
                    <article class="card">
                        <div class="thumb"><img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/room-placeholder.jpg' ); ?>" alt=""></div>
                        <div class="body">
                            <span class="eyebrow"><?php echo esc_html( $p[1] ); ?></span>
                            <h3><?php echo esc_html( $p[0] ); ?></h3>
                            <div class="price">From PKR <?php echo esc_html( $p[2] ); ?> / night</div>
                        </div>
                    </article>
                <?php endforeach;
            endif;
            ?>
        </div>
        <div style="text-align:center;margin-top:48px">
            <a class="btn" href="<?php echo esc_url( home_url( '/suites/' ) ); ?>">View All Suites</a>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div style="text-align:center;margin-bottom:64px">
            <span class="eyebrow">Facilities</span>
            <h2>Curated for a slower rhythm</h2>
        </div>
        <div class="grid grid-3">
            <?php
            $facilities = array(
                array( 'Guided Jeep Tours', 'Explore Siri Paye, Makra Peak and hidden alpine lakes with seasoned drivers.' ),
                array( 'Bonfire Evenings', 'Nightly fires under a canopy of stars, with local music and warm chai.' ),
                array( 'Mountain Cuisine', 'Farm-to-table menus rooted in the produce of Kaghan Valley.' ),
                array( '24/7 Hot Water', 'Solar-heated warmth even on the coldest Shogran mornings.' ),
                array( 'Private Terraces', 'Suites open onto forest-facing decks with panoramic views.' ),
                array( 'Guided Treks', 'Naturalist-led walks tuned to your pace and season.' ),
            );
            foreach ( $facilities as $f ) : ?>
                <div class="card"><div class="body">
                    <span class="eyebrow">Experience</span>
                    <h3 style="font-size:1.4rem"><?php echo esc_html( $f[0] ); ?></h3>
                    <p><?php echo esc_html( $f[1] ); ?></p>
                </div></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section" style="background:var(--ink-2);text-align:center">
    <div class="container">
        <span class="eyebrow">Reserve</span>
        <h2>Your quiet altitude awaits</h2>
        <p style="max-width:560px;margin:0 auto 32px">Book direct with our team for personalised itineraries, welcome amenities and private transfers from Naran.</p>
        <a class="btn btn-primary" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Begin Your Reservation</a>
    </div>
</section>

<?php get_footer(); ?>