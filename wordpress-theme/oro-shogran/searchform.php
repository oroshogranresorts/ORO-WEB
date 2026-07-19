<?php
/**
 * Search form
 * @package Oro_Shogran
 */
?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <label>
        <input type="search" class="search-field" placeholder="Search…" value="<?php echo get_search_query(); ?>" name="s" />
    </label>
    <button type="submit" class="btn">Search</button>
</form>