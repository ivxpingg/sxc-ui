
module.exports = function(grunt){
    // Time how long tasks take. Can help when optimizing build times
    //require('time-grunt')(grunt);

    // load all grunt tasks matching the `grunt-*` pattern
    // This replaces the tiresome task of including all grunt-plugins as you would have done below
    // These plugins provide necessary tasks. -- loading grunt plugins
    // Equivalent to:
    // require('load-grunt-tasks')(grunt, {pattern: 'grunt-*'});
    // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); //using matchdep
    // OR:
    // -------------------------------------------------------------
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    // grunt.loadNpmTasks('grunt-contrib-jade');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-jade');
    // grunt.loadNpmTasks('grunt-contrib-nodeunit');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner:'',
        watch: {
            files: ['src/assets/style/**/**/*.scss','src/assets/style/**/*.scss','src/assets/style/*.scss'],
            tasks: ['sass','autoprefixer']
        },

        sass: {
            dev: {
                options:  {
                    style: 'expanded', //  expanded|compressed 压缩
                    sourcemap: 'none'   // ['auto' | 'file' | 'inline' | 'none']
                },
                files: {'dist/assets/style/sxc.css':'src/assets/style/sxc.scss'}
            }
        },

        autoprefixer: {
            options: {
                browsers: [],
                map: {
                    //sourcesContent: true,
                    annotation:'dist/assets/style/presxc.css.map',
                    inline: false
                }
            },
            dev: {
                files: { 'dist/assets/style/presxc.css':'dist/assets/style/sxc.css'}
            }
        },

        cssmin: {
            options: {
                banner: '',
                sourceMap: false,
                report: 'min' // 'gzip'
            },
            target: {
                files : {'dist/assets/style/presxc.min.css':'dist/assets/style/presxc.css'}
            }
        },

        fontcustom: {
            options: {
              //fontName: "dd"
            },
            target: {
                src: 'src/assets/fonts/icon1',
                dest: 'dist/assets/fonts'
            }
        },

        webfont: {
            icons: {
                src: 'src/assets/fonts/*.svg',
                dest: 'dist/assets/fonts',
                options: {
                   template: 'dist/assets/fonts/tmpl.css'
                }
            }
        }
    });
grunt.loadNpmTasks('grunt-fontcustom');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('sas', ['sass']);
    grunt.registerTask('start', ['sass','autoprefixer']);
    grunt.registerTask('auto', ['autoprefixer']);
    grunt.registerTask('icon', ['webfont']);
}
