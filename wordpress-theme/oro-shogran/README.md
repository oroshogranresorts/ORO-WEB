# Oro Shogran — WordPress Theme

Cinematic editorial luxury retreat theme for Oro Shogran (Kaghan Valley).

## Installation

1. Zip the `oro-shogran/` folder → `oro-shogran.zip`
2. WP Admin → Appearance → Themes → Add New → Upload Theme
3. Upload → Install Now → Activate

## Setup after activation

### 1. Permalinks
Settings → Permalinks → choose "Post name" → Save.

### 2. Menu
Appearance → Menus → create menu with your pages → assign location "Primary Menu".
Fallback (Home / About / Rooms / Facilities / Journal / Contact) shows if none is set.

### 3. Pages
Create Pages: Home, About, Facilities, Journal, Contact.
Settings → Reading → set Home as static front page.

### 4. Suites
A "Suites" menu appears in WP admin. For each suite: add title, description, featured image, and fill the "Suite Details" meta box (price, guests, beds, size).

### 5. Customize
Appearance → Customize:
- Contact Information (phone, email, address, socials)
- Homepage Hero (eyebrow, title, subtitle, background image)
- Site Identity (logo)

## Templates

- front-page.php — Homepage
- page.php — Default page
- single.php — Blog post
- single-oro_room.php — Suite detail
- archive-oro_room.php — All suites
- index.php — Blog fallback
- 404.php — Not found
- header.php / footer.php — Shared layout

## Design tokens

All colors/spacing/typography are CSS variables at the top of style.css.
Gold: #C9A961 · Ink: #0B0B0B · Cream: #F5F0E6

## Package as ZIP

From the wordpress-theme/ folder run:

    zip -r oro-shogran.zip oro-shogran

Upload that zip to WordPress.
