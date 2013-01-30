module.exports = function( grunt ) {
	grunt.initConfig({
	  // Project metadata, used by some directives, helpers and tasks.
	  meta: {},
	  // Lists of files to be concatenated, used by the "concat" task.
	  concat: {},
	  // Lists of files to be linted with JSHint, used by the "lint" task.
	  lint: {},
	  // Lists of files to be minified with UglifyJS, used by the "min" task.
	  min: {},
	  // Lists of files or URLs to be unit tested with QUnit, used by the "qunit" task.
	  qunit: {},
	  // Configuration options for the "server" task.
	  server: {},
	  // Lists of files to be unit tested with Nodeunit, used by the "test" task.
	  test: {},
	  // Configuration options for the "watch" task.
	  watch: {},
	  // Global configuration options for JSHint.
	  jshint: {},
	  // Global configuration options for UglifyJS.
	  uglify: {}
	})
};