var cp = require('child_process');
var path = require('path');
var fs = require('fs');

var watchedFolder = '..';
var files = fs.readdirSync(watchedFolder);
var p = "../";

files.forEach(file => {
	
	var filename = path.join(p, file); // file.replace(/^.*[\\\/]/, '');
    
    if ( filename == "../GenerationCode" ) {
    } else if ( fs.lstatSync(filename).isDirectory() ) { 

    	var fd = fs.readdirSync(filename);
    	fd.forEach(f => {

    		if (path.extname(f) === '.json') {
		
				var config = require(filename + '/' +  f);
				var args = [];

				for (var key in config) {
				  if (config.hasOwnProperty(key)) {
				    //console.log(key + " -> " + config[key]);
				    args.push(key);
				    args.push(config[key]);
				  }
				}

				args.push("folder");
				args.push(file);

				cp.fork(__dirname + '/DragAndDropLine.js', args);
			
			}
    	
    	});
	
	}

});
			
