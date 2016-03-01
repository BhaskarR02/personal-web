/*var grunt = require('grunt');
grunt.registerTask('default','Testing Grunt' ,function(){
  console.log('** Hello Grunt **');
});*/
module.exports= function(grunt){

 /* Init Configuration*/
 grunt.initConfig({
 pkg:grunt.file.readJSON('package.json'),
 });

 /*config init end here*/

grunt.registerTask('default' ,'Executing Default Task',function(){
	console.log("Executing Defualt Task");
});
};
