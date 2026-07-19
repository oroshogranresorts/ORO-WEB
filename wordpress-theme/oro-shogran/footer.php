<?php
/**
 * Footer template
 * @package Oro_Shogran
 */
?>
</main>

<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <div class="footer-brand"><?php bloginfo( 'name' ); ?></div>
                <p>A private mountain hideaway in Kaghan Valley — where alpine light, artisan craft and quiet luxury converge.</p>
                <p style="margin-top:20px">
                    <a href="<?php echo esc_url( oro_get_mod( 'oro_instagram', '#' ) ); ?>" target="_blank" rel="noopener">Instagram</a> ·
                    <a href="<?php echo esc_url( oro_get_mod( 'oro_facebook', '#' ) ); ?>" target="_blank" rel="noopener">Facebook</a>
                </p>
            </div>
            <div class="footer-col">
                <h4>Explore</h4>
                <ul>
                    <li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">Our Story</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/suites/' ) ); ?>">Suites</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/facilities/' ) ); ?>">Facilities</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/journal/' ) ); ?>">Journal</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><?php echo esc_html( oro_get_mod( 'oro_address', 'Shogran Valley, Kaghan' ) ); ?></li>
                    <li><a href="tel:<?php echo esc_attr( oro_get_mod( 'oro_phone' ) ); ?>"><?php echo esc_html( oro_get_mod( 'oro_phone', '+92 300 1234567' ) ); ?></a></li>
                    <li><a href="mailto:<?php echo esc_attr( oro_get_mod( 'oro_email' ) ); ?>"><?php echo esc_html( oro_get_mod( 'oro_email', 'reservations@oroshogran.com' ) ); ?></a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Reserve</h4>
                <p>Book direct for best rates and welcome amenity.</p>
                <a class="btn" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" style="margin-top:16px">Reserve Now</a>
            </div>
        </div>
        <div class="footer-bottom">
            <span>© <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. All rights reserved.</span>
            <span>Crafted with care in Kaghan Valley</span>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>