<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'word1' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'EdfDUTeL%;jqNpQ6N6fO#Yom5N&m+rcA`Bo[x`XlFk:~P}H_>d5)wC4Xxo!j#-^v' );
define( 'SECURE_AUTH_KEY',  'Q>pXbLt`[k:Q-#moVV;|uLP,hu#BG,(lS< Y>:YE!L-5aTE]jwsLPoI(^gyD424>' );
define( 'LOGGED_IN_KEY',    'm#ekLb,,|{n_9zMMtzeP~z+X[C#N4c^+LaqG0gPqaR`G0qJ<h<)>`5S(;-)L:$IA' );
define( 'NONCE_KEY',        'pXB+{+Rig{UEKqSR(eomwQjLqmKY~:kJn{vg^iXn1]*%h(#Dz;$>+YF)mDb3qPT%' );
define( 'AUTH_SALT',        '&;(.`<H djmbJ}7qGNZjr&:rQ_2ubtp&+G-H|zf1H8})Ikw3Q@>U.62m6hU[+nFM' );
define( 'SECURE_AUTH_SALT', 'd_GsRfY,Jhy6@?l.?^qb&X0~p8R>/|@uwUf`w.b}xd<ZYMxPM!zmL+fb,smgw`NL' );
define( 'LOGGED_IN_SALT',   '1alR;uu( -/_aTB!g)*Ohp&K/>c<a!E2R2R#K1@n|P1jNZO3(hSg_0hZx`k q`-2' );
define( 'NONCE_SALT',       '3UB=4[7($eF)<9rzpKs4&-%Ld7<G:uEmuB3of=`Ua~z?9gox1&2s6zR(C^0GC)B:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
