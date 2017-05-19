var fs = require('fs');
var path = require('path');
var cp = require('child_process');

var ModelsDirectory = __dirname + '/../../Models';
var SpritesDirectory = '';
var watchedDirectory = __dirname + '/..';
var generalConfig = __dirname + '/config.json';


var p = "../";
var MultChoiceSelectOptionAUTOScript = __dirname + '/work.js'; 

var files = fs.readdirSync(watchedDirectory);

files.forEach(file => {

	var filename = path.join(p, file);
	if ( filename == "../GenerationCode" ) {} 
	else if ( fs.lstatSync(filename).isDirectory() ) { 
		
		var fd = fs.readdirSync(filename);
    	
		var args = [];
		args.push("ModelsDirectory");
		args.push(ModelsDirectory);
		args.push("SpritesDirectory");
		args.push(SpritesDirectory);

    	fd.forEach(f => {

    		var gConfig = require(generalConfig);
    		for (var key in gConfig) {
    			args.push(key);
				args.push(gConfig[key]);
    		}

    		if (path.extname(f) === '.json') {
				// Collect Metadata from various sources and work	
    			var config = require(filename + '/' +  f);
				for (var key in config) {
				
					if (key == 'Models') {
						if (config[key] instanceof Array) {
							for (var i = 0 ; i < config[key].length ; i++) { 
								config[key][i] = ModelsDirectory + '/' + config[key][i]; 
							}
						} else { throw("Models are not listed as an array in config file for directory: " + filename); }
					} else {

					}
					
					args.push(key);
				    args.push(config[key]);

				}
				
				cp.fork(MultChoiceSelectOptionAUTOScript, args);
			}


    	});
	}

});