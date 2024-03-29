module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            less: {
                files: ['src/style/*.less'],
                tasks: ['less:src']
            }
        },

        clean: {
            dist: ['dist']
        },

        copy: {
            dist: {
                expand: true,
                cwd: 'src/',
                src: ['img/*', 'font/*'],
                dest: 'dist/'
            }
        },

        less: {
            src: {
                options: {
                    paths: 'src/'
                },
                files: {
                    'src/style/style.css': 'src/style/main.less'
                }
            },
            dist: {
                options: {
                    paths: 'src/'
                },
                files: {
                    'src/style/style.css': 'src/style/main.less'
                }
            }
        },

        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['style/*.css'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/script/script-preview.js': ['src/script/script-preview.js']
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    keepClosingSlash: true
                },
                files: {
                    'dist/index.xhtml': 'src/index.xhtml',
                    'dist/preview.xhtml': 'src/preview.xhtml'
                }
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'src/style/*.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('dist', ['clean:dist', 'copy:dist', 'less:dist', 'postcss:dist', 'cssmin:dist', 'uglify:dist', 'htmlmin:dist'])
    grunt.registerTask('default', ['watch']);
};
