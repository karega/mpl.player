//var gulp = require('gulp'),

// gulp.task('lint', function() {
//     gulp.watch(["./src/**/*.js", "./src/**/*.jsx"], ['eslint']);
// });

// gulp.task('eslint', function() {
//     return gulp.src(["./src/**/*.js", "./src/**/*.jsx"])
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failAfterError());
// });

// gulp.task('flow-check', function(cb) {
//     var execFile = require('child_process').execFile;
//     var flow = require('flow-bin');
//     var rootDir = __dirname;

//     console.log("Running flow check from: /src");
//     process.chdir(rootDir + "/src");

//     execFile(flow, ['check'], function(err, stdout) {
//         console.log(stdout);
//         process.chdir(rootDir);
//         if (err) {
//             console.log("Flow check failed!");
//             cb(1);
//             process.exit(1);
//         }
//         cb(0);
//     });
// });

//var DEBUG = process.env.NODE_ENV === 'debug';
//var CI = process.env.CI === 'true';
//var DEBUG = false;
//var CI = true;

//gulp.task('test', function () {
//    return gulp.src(['tests/**/*-test.js'], {read: false});
//});

//gulp.task('test-dev', ['test'], function () {
//    gulp.watch(['tests/**/*-test.js', 'src/**/*.js'], ['test']);
//});
