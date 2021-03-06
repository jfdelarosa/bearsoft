import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import watch from 'gulp-watch';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';
import uglifyes from 'uglify-es';
import composer from 'gulp-uglify/composer';

const uglify = composer(uglifyes, console);
const server = browserSync.create();

const postcssPlugins = [
  cssnano({
    core: false,
    autoprefixer: {
      add: true,
      browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
    }
  })
];

const sassOptions = {
  outputStyle: 'compressed',
  includePaths: ['node_modules/normalize.css/']
};

gulp.task('styles', () =>
  gulp.src('./dev/scss/styles.scss')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(plumber())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(server.stream({match: '**/*.css'}))
);

gulp.task('pug', () =>
  gulp.src('./dev/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./'))
);

gulp.task('scripts', () =>
  browserify('./dev/js/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/js'))
);

gulp.task('default', () => {
  server.init({
    server: {
      baseDir: './'
    },
  });

  watch('./dev/scss/**/*.scss', () => gulp.start('styles'));
  watch('./dev/js/**/*.js', () => gulp.start('scripts',server.reload) );
  watch('./dev/pug/**/*.pug', () => gulp.start('pug', server.reload) );
});
