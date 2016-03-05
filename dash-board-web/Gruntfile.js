/*



*/

module.exports = function(grunt){
	var _filePath="src/main/webapp/js/";

grunt.initConfig({
	pkg:grunt.file.readJSON('package.json'),
             
             browserify:{
                dist:{
                  options:{
                    transform:[
                               ["babelify"]
                              ]
                  },
                  files:{
                   "src/main/webapp/js/es5/controllers":["src/main/webapp/js/es6/controllers/demo.js"]
                  }
                }

             },
            /* Used to watch changes in the files and run the relevant task*/
              /*watch:{
                     files:"WebContent/styleSheets/less/*.less",
                     script:["WebContent/js/es6/default/*.js"],
                     tasks:["browserify","less","concat","cssmin"],
              },*/
               watch:{
					  babelify: {
					    files: [ 'src/main/webapp/js/es6/**/*.js' ],  //<- this watch all files (even sub-folders)
					    tasks: ['browserify']
					  },
					  lessToCss: {
					    files: ['src/main/webapp/style/less/**/*.less'],
					    tasks: ['less']
					  }
					},

             /* Convert less files to css files*/
	          less:{
	          	development:{
	          		options:{
	          			path:['WebContent/styleSheets/less/'],
	          			yuicompress:true
	          		},
	          		files:{
	          			"src/main/webapp/style/css/pwHome.css":"src/main/webapp/style/less/pwHome.less"
	          		}	
	          	},
	          	

	          },

            /*Concat multiple css files to a single file*/
              concat:{
				dist:{
              		src:['WebContent/styleSheets/css/default/*.css','WebContent/styleSheets/css/header/*.css'],
              		dest:'WebContent/styleSheets/minified/main.css'
              	}
              },   

           /* minifying css files*/
				cssmin:{
                      target:{
                      	files:[{
                      		expand:true,
                      		cwd:'WebContent/styleSheets/minified',
                      		src:['*.css','!*-min.css'],
                      		dest:'WebContent/styleSheets/minified',
                      		ext:'-min.css'
                      	}]
                      }
				
				}
});
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-uncss');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
//grunt.registerTask('default',['less','concat','cssmin']);
grunt.registerTask('default',['watch']);
};
