const gulp = require('gulp')
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create()

// Server de desarrollo
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

//Tarea para procesar el css
gulp.task('sass', function () {

  return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream())

})

//Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['sass'])
  gulp.watch('./*.html').on('change', browserSync.reload)
})

// Unir todas las tareas para ejecutar en el terminal solamente gulp
gulp.task('default', ['watch', 'serve'])