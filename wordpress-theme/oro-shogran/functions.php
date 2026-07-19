<?php
/**
 * Oro Shogran functions and definitions
 *
 * @package Oro_Shogran
 */

if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! defined( 'ORO_VERSION' ) ) {
    define( 'ORO_VERSION', '1.0.0' );
}

/**
 * Theme setup
 */
function oro_setup() {
    load_theme_textdomain( 'oro-shogran', get_template_directory() . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'customize-selective-refresh-widgets' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );

    // Custom image sizes
    add_image_size( 'oro-hero', 1920, 1080, true );
    add_image_size( 'oro-suite', 800, 600, true );
    add_image_size( 'oro-card', 600, 450, true );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'oro-shogran' ),
        'footer'  => __( 'Footer Menu', 'oro-shogran' ),
    ) );
}
add_action( 'after_setup_theme', 'oro_setup' );

/**
 * Enqueue scripts and styles
 */
function oro_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'oro-fonts',
        'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Fira+Sans:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style( 'oro-style', get_stylesheet_uri(), array( 'oro-fonts' ), ORO_VERSION );

    // Main JavaScript
    wp_enqueue_script( 'oro-main', get_template_directory_uri() . '/assets/js/main.js', array(), ORO_VERSION, true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'oro_scripts' );

/**
 * Register sidebars
 */
function oro_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Footer Column 1', 'oro-shogran' ),
        'id'            => 'footer-1',
        'description'   => __( 'First footer column', 'oro-shogran' ),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ) );
    register_sidebar( array(
        'name'          => __( 'Journal Sidebar', 'oro-shogran' ),
        'id'            => 'journal-sidebar',
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'oro_widgets_init' );

/**
 * Register Custom Post Type: Rooms / Suites
 */
function oro_register_rooms_cpt() {
    $labels = array(
        'name'               => __( 'Suites', 'oro-shogran' ),
        'singular_name'      => __( 'Suite', 'oro-shogran' ),
        'menu_name'          => __( 'Suites', 'oro-shogran' ),
        'add_new'            => __( 'Add New Suite', 'oro-shogran' ),
        'add_new_item'       => __( 'Add New Suite', 'oro-shogran' ),
        'edit_item'          => __( 'Edit Suite', 'oro-shogran' ),
        'all_items'          => __( 'All Suites', 'oro-shogran' ),
    );
    register_post_type( 'oro_room', array(
        'labels'       => $labels,
        'public'       => true,
        'has_archive'  => 'rooms',
        'menu_icon'    => 'dashicons-bed',
        'supports'     => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'rewrite'      => array( 'slug' => 'suites' ),
        'show_in_rest' => true,
    ) );

    // Facility CPT
    register_post_type( 'oro_facility', array(
        'labels' => array(
            'name'          => __( 'Facilities', 'oro-shogran' ),
            'singular_name' => __( 'Facility', 'oro-shogran' ),
        ),
        'public'       => true,
        'has_archive'  => 'facilities',
        'menu_icon'    => 'dashicons-palmtree',
        'supports'     => array( 'title', 'editor', 'thumbnail' ),
        'rewrite'      => array( 'slug' => 'facilities' ),
        'show_in_rest' => true,
    ) );
}
add_action( 'init', 'oro_register_rooms_cpt' );

/**
 * Custom meta box for room pricing
 */
function oro_add_room_meta_box() {
    add_meta_box( 'oro_room_details', __( 'Suite Details', 'oro-shogran' ), 'oro_room_meta_callback', 'oro_room', 'side' );
}
add_action( 'add_meta_boxes', 'oro_add_room_meta_box' );

function oro_room_meta_callback( $post ) {
    wp_nonce_field( 'oro_room_meta', 'oro_room_meta_nonce' );
    $price   = get_post_meta( $post->ID, '_oro_price', true );
    $guests  = get_post_meta( $post->ID, '_oro_guests', true );
    $size    = get_post_meta( $post->ID, '_oro_size', true );
    $beds    = get_post_meta( $post->ID, '_oro_beds', true );
    ?>
    <p><label>Price (PKR / night)<br><input type="text" name="oro_price" value="<?php echo esc_attr( $price ); ?>" style="width:100%"></label></p>
    <p><label>Guests<br><input type="text" name="oro_guests" value="<?php echo esc_attr( $guests ); ?>" style="width:100%"></label></p>
    <p><label>Size (sq ft)<br><input type="text" name="oro_size" value="<?php echo esc_attr( $size ); ?>" style="width:100%"></label></p>
    <p><label>Beds<br><input type="text" name="oro_beds" value="<?php echo esc_attr( $beds ); ?>" style="width:100%"></label></p>
    <?php
}

function oro_save_room_meta( $post_id ) {
    if ( ! isset( $_POST['oro_room_meta_nonce'] ) || ! wp_verify_nonce( $_POST['oro_room_meta_nonce'], 'oro_room_meta' ) ) return;
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
    if ( ! current_user_can( 'edit_post', $post_id ) ) return;

    foreach ( array( 'oro_price', 'oro_guests', 'oro_size', 'oro_beds' ) as $field ) {
        if ( isset( $_POST[ $field ] ) ) {
            update_post_meta( $post_id, '_' . $field, sanitize_text_field( $_POST[ $field ] ) );
        }
    }
}
add_action( 'save_post', 'oro_save_room_meta' );

/**
 * Fallback menu when no menu is assigned
 */
function oro_fallback_menu() {
    echo '<ul>';
    echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">Home</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/about/' ) ) . '">About</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/suites/' ) ) . '">Rooms</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/facilities/' ) ) . '">Facilities</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/journal/' ) ) . '">Journal</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/contact/' ) ) . '">Contact</a></li>';
    echo '</ul>';
}

/**
 * Excerpt customization
 */
function oro_excerpt_length( $length ) { return 24; }
add_filter( 'excerpt_length', 'oro_excerpt_length' );

function oro_excerpt_more( $more ) { return '&hellip;'; }
add_filter( 'excerpt_more', 'oro_excerpt_more' );

/**
 * Customizer settings
 */
function oro_customize_register( $wp_customize ) {
    // Contact info section
    $wp_customize->add_section( 'oro_contact', array(
        'title'    => __( 'Contact Information', 'oro-shogran' ),
        'priority' => 30,
    ) );

    $fields = array(
        'oro_phone'     => array( 'label' => 'Phone Number', 'default' => '+92 300 1234567' ),
        'oro_email'     => array( 'label' => 'Email Address', 'default' => 'reservations@oroshogran.com' ),
        'oro_address'   => array( 'label' => 'Address', 'default' => 'Shogran Valley, Kaghan, Pakistan' ),
        'oro_instagram' => array( 'label' => 'Instagram URL', 'default' => 'https://instagram.com/oroshogran' ),
        'oro_facebook'  => array( 'label' => 'Facebook URL', 'default' => 'https://facebook.com/oroshogran' ),
    );

    foreach ( $fields as $key => $data ) {
        $wp_customize->add_setting( $key, array(
            'default'           => $data['default'],
            'sanitize_callback' => 'sanitize_text_field',
        ) );
        $wp_customize->add_control( $key, array(
            'label'   => $data['label'],
            'section' => 'oro_contact',
            'type'    => 'text',
        ) );
    }

    // Hero section
    $wp_customize->add_section( 'oro_hero', array(
        'title'    => __( 'Homepage Hero', 'oro-shogran' ),
        'priority' => 31,
    ) );

    $wp_customize->add_setting( 'oro_hero_eyebrow', array( 'default' => 'Kaghan Valley · Est. 2019', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'oro_hero_eyebrow', array( 'label' => 'Hero Eyebrow', 'section' => 'oro_hero', 'type' => 'text' ) );

    $wp_customize->add_setting( 'oro_hero_title', array( 'default' => 'A Cinematic Retreat Above the Clouds', 'sanitize_callback' => 'sanitize_text_field' ) );
    $wp_customize->add_control( 'oro_hero_title', array( 'label' => 'Hero Title', 'section' => 'oro_hero', 'type' => 'text' ) );

    $wp_customize->add_setting( 'oro_hero_subtitle', array( 'default' => 'Tucked into the pine-scented ridges of Shogran, Oro is a private mountain hideaway where alpine light, artisan craft and quiet luxury converge.', 'sanitize_callback' => 'sanitize_textarea_field' ) );
    $wp_customize->add_control( 'oro_hero_subtitle', array( 'label' => 'Hero Subtitle', 'section' => 'oro_hero', 'type' => 'textarea' ) );

    $wp_customize->add_setting( 'oro_hero_image', array( 'sanitize_callback' => 'esc_url_raw' ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'oro_hero_image', array(
        'label'   => 'Hero Background Image',
        'section' => 'oro_hero',
    ) ) );
}
add_action( 'customize_register', 'oro_customize_register' );

/**
 * Helper to get theme mod with default
 */
function oro_get_mod( $key, $default = '' ) {
    return get_theme_mod( $key, $default );
}

/**
 * Include additional template files
 */
require_once get_template_directory() . '/inc/template-tags.php';