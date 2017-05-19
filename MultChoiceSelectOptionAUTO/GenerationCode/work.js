var fs = require('fs');
var path = require('path');
var esprima = require('esprima');
var escodegen = require('escodegen');
var estraverse = require('estraverse');

var params = [
    "models",
    "outputDir",
    "outputFilenameTest",
    "animationCodeTemplate",
    "folder",
    "ModelsDirectory",
    "SpritesDirectory",
    "canvasX",
	"canvasY",
	"maxWidthOfObjectGrid",
	"maxNumberObjects"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function dedupe(arr) {
  return arr.reduce(function (p, c) {
    // create an identifying id from the object values
    var id = [c.x, c.y].join('|');
    // if the id is not found in the temp array
    // add the object to the output array
    // and add the key to the temp array
    if (p.temp.indexOf(id) === -1) {
      p.out.push(c);
      p.temp.push(id);
    }
    return p;
  // return the deduped array
  }, { temp: [], out: [] }).out;
}

function gcd(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

function calculateFactors(num) {
    var half = Math.floor(num / 2), // Ensures a whole number <= num.
        str = '1', // 1 will be a part of every solution.
        i, j;
    // Determine out increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? str += ',' + i : false;
    }

    str += ',' + num; // Always include the original number.
    return str.split(",");
}

var pArgs = [];
process.argv.forEach(function (val, index, array) {
	//console.log(val);
	pArgs.push(val);
});
params.forEach(function(val) {  
  var a = pArgs.indexOf(val);
  eval(pArgs[a] + " = pArgs[a + 1]");
});

var openingHTMLtag = `<!DOCTYPE html><html>`;
var openingHeadtag = `<head>`;
var closingHeadtag = `</head>`;
var openingBodytag = `<body>`;
var closingBodytag = `</body>`;
var closingHTMLtag = `</html>`;

var openingDivtag = `<div>`;
var closingDivtag = `</div>`;

var styles = `
  <style>
	  #animation_container {
		position:absolute;
		margin:auto;
		left:0;right:0;
		top:0;bottom:0;
	  }
	  canvas {
	  	border-style: solid;
	  }
  </style>
`;

var createJSscript = `<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>`;
var jqueryJSscript = `<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>`;
var animationStageHTML = `
	<div>
		<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00);">
			<canvas id="canvas" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
			<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; position: absolute; left: 0px; top: 0px; display: block;">
			</div>
		</div>
		<script>init();</script>
		<div style="display:none;" id="responseJSON"></div>
	</div>
`;
var canvasContentscript = `
	<script>
		var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
		function init() {
			
			canvas = document.getElementById("canvas");
			anim_container = document.getElementById("animation_container");
			dom_overlay_container = document.getElementById("dom_overlay_container");
			handleComplete();
		}
		function handleComplete() {
			//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
			// stage = new createjs.Stage(canvas);
			// stage.enableMouseOver();	
			exportRoot = new lib.MCTemplate();
			stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);	
			//Registers the "tick" event listener.
			fnStartAnimation = function() {
				createjs.Ticker.setFPS(lib.properties.fps);
				createjs.Ticker.addEventListener("tick", stage);
			}	    
			//Code to support hidpi screens and responsive scaling.
			function makeResponsive(isResp, respDim, isScale, scaleType) {		
				var lastW, lastH, lastS=1;		
				window.addEventListener('resize', resizeCanvas);		
				resizeCanvas();		
				function resizeCanvas() {			
					var w = lib.properties.width, h = lib.properties.height;			
					var iw = window.innerWidth, ih=window.innerHeight;			
					var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
					if(isResp) {                
						if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
							sRatio = lastS;                
						}				
						else if(!isScale) {					
							if(iw<w || ih<h)						
								sRatio = Math.min(xRatio, yRatio);				
						}				
						else if(scaleType==1) {					
							sRatio = Math.min(xRatio, yRatio);				
						}				
						else if(scaleType==2) {					
							sRatio = Math.max(xRatio, yRatio);				
						}			
					}			
					canvas.width = w*pRatio*sRatio;			
					canvas.height = h*pRatio*sRatio;
					canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
					canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
					stage.scaleX = pRatio*sRatio;			
					stage.scaleY = pRatio*sRatio;			
					lastW = iw; lastH = ih; lastS = sRatio;		
				}
			}
			makeResponsive(true,'both',false,2);	
			fnStartAnimation();
		}
	</script>
`;

var MovieClipTemplate = `(lib.MCTemplate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,` + pArgs[pArgs.indexOf('canvasX')+1] + ` ,` + pArgs[pArgs.indexOf('canvasY')+1] + `);
`;

var animationCodeTemplateCode = `(function (lib, img, cjs, ss, an) {
	var p;
	lib.ssMetadata = [];
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}
	lib.properties = {
		width: ` + pArgs[pArgs.indexOf('canvasX')+1] + `,
		height: ` + pArgs[pArgs.indexOf('canvasY')+1] + `,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
`;


var models = pArgs[pArgs.indexOf('models')+1];
var models = models.split(",");

// Produce a question for each i
for (var i = 1 ; i <= pArgs[pArgs.indexOf('maxNumberObjects')+1] ; i++) {

	var mcTemplateAST = esprima.parse(MovieClipTemplate);
	var drawModelsCode = ``;

	var chosenModels = [];	
	
	// Pick i models 
	for (var j = 0 ; j < i ; j++) {
		var randomIndexForModels = getRandomInt(1,models.length) - 1;
		var model = fs.readFileSync(pArgs[pArgs.indexOf('ModelsDirectory')+1] + '/' + models[randomIndexForModels], 'utf8', {});
		var modelAST = esprima.parse(model);
		
		chosenModels.push(modelAST);

		drawModelsCode = drawModelsCode + `
			this.instance` + j + ` = new lib.` + modelAST.body[0].expression.right.arguments[0].property.name + `();
			this.instance` + j + `.parent = this;
		`;	
	}

	var drawModelsTweenCodeStart = `this.timeline.addTween(cjs.Tween.get({})`;
	var drawModelsTweenCode = ``;

	// figure out the scale of each model 
	// and figure how much space is available
	var xCanvas = parseFloat(pArgs[pArgs.indexOf('canvasX')+1]);
	var yCanvas = parseFloat(pArgs[pArgs.indexOf('canvasY')+1]);
	var maxWidthGrid = parseFloat(pArgs[pArgs.indexOf('maxWidthOfObjectGrid')+1]);
	
	var quotient = Math.floor(i / maxWidthGrid);
	var remainder = i % maxWidthGrid;
	var itemsPerRow = [];
	
	if (quotient == 0) {
		itemsPerRow.push(remainder);
	} else if ( 
		calculateFactors(i)[calculateFactors(i).length - 2] != 1 &&
		calculateFactors(i)[calculateFactors(i).length - 2] < maxWidthGrid &&
		i % calculateFactors(i)[calculateFactors(i).length - 2] == 0		
	) {
		var rows = i / calculateFactors(i)[calculateFactors(i).length - 2]
		for (var j = 0 ; j < rows ; j++ ) { itemsPerRow.push(parseFloat(calculateFactors(i)[calculateFactors(i).length - 2])); }		
	} else {
		if (remainder == 0) {
			for (var j = 0 ; j < quotient ; j++ ) { itemsPerRow.push(maxWidthGrid); }		
		} else {

			for (var j = 0 ; j < quotient ; j++ ) { itemsPerRow.push(maxWidthGrid); }
			itemsPerRow.push(remainder);

			while (itemsPerRow[itemsPerRow.length-1] < (itemsPerRow[0] / 2)) {
				for (var j = 0 ; j < itemsPerRow.length - 1 ; j++) {
					itemsPerRow[j] = itemsPerRow[j] - 1  
					itemsPerRow[itemsPerRow.length-1] = itemsPerRow[itemsPerRow.length-1] + 1;
				}
			}
		}
	}

	var xOffset = xCanvas/itemsPerRow[0];
	var yOffset = yCanvas/itemsPerRow.length;

	console.log('^^^');
	console.log(xOffset);
	console.log(yOffset);

	// Place each model		
	for (var j = 0 ; j < i ; j++) {
		var nextTo = ``;
		var nextState = ``;
		// console.log('---');
		// console.log('j',j);
		// Build each state for this amount of i

		console.log('---');
		for (var k = 0 ; k <= j ; k++) {			
			var currentX, currentY, currentWidth, currentHeight;
			chosenModels[k].body[0].expression.right.arguments[1].arguments.forEach(function(e, i) {
    			if (i == 0) {
    				if (e.type == 'UnaryExpression') { currentX = parseFloat(e.operator + e.argument.value); } 
    				else { currentX = parseFloat(e.value); }
    			} else if (i == 1) {
    				if (e.type == 'UnaryExpression') { currentY = parseFloat(e.operator + e.argument.value); } 
    				else { currentY = parseFloat(e.value); }
    			} else if (i == 2) {
    				currentWidth = parseFloat(e.value);
    			} else {
    				currentHeight = parseFloat(e.value);
    			}	
			});

			var acc = 0;
			var xX = 0;
			var yY = 0;

			//console.log();
			for (var h = 0 ; h < itemsPerRow.length ; h++ ) {

				acc += itemsPerRow[h];
				
				if (k < acc) {
					xX = k % itemsPerRow[h];
					break;
				}

				xX = 0;
				yY++;

			}

			console.log('---');
			console.log('xX',xX);
			console.log('yY',yY);

			nextState = nextState + `{t:this.instance` + k + `,p:{x:` + xX*xOffset + `,y:` + yY*yOffset + `}},`;
		}

		nextTo = `.to({state:[` + nextState + `]},10)`;
		if (j == i - 1) {
			drawModelsTweenCodeStart = drawModelsTweenCodeStart + nextTo;
			drawModelsTweenCode = drawModelsTweenCodeStart;
			drawModelsTweenCode = drawModelsTweenCode + `.wait(` + (10*i)  + `)` + `);`;
			drawModelsTweenCode = drawModelsTweenCode + `
				this.frame_` + (10*i) + ` = function() {
					this.stop();
				}
				this.timeline.addTween(cjs.Tween.get(this).wait(` + (10*i) + `).call(this.frame_` + (10*i) + `).wait(1));
			`;
		} else {
			drawModelsTweenCodeStart = drawModelsTweenCodeStart + nextTo;
		}
	}

	var drawModelsTweenCodeAST = esprima.parse(drawModelsTweenCode);
	var drawModelsCodeAST = esprima.parse(drawModelsCode);

	var animationCodeTemplateAST = esprima.parse(animationCodeTemplateCode);

	estraverse.traverse(animationCodeTemplateAST, {
	    enter: function (node, parent) {
	    	if (
	    		node.type === 'BlockStatement' &&
	    		node.body[3] &&	node.body[3].id && node.body[3].id.name === 'getMCSymbolPrototype'
	    	) {
	    		
	    		// 4 because getMCSymbolPrototype() is the 4th instruction of the index.js template
	    		var chosenModelsDeduped = dedupe(chosenModels);
	    		for (var z = 0 ; z < chosenModelsDeduped.length ; z++) {
	    			node.body.splice(z+4, 0, chosenModelsDeduped[z].body[0]);
	    		}
	    		
				mcTemplateAST.body[0].expression.left.object.right.body.body
					.splice.apply(
						mcTemplateAST.body[0].expression.left.object.right.body.body,
						[mcTemplateAST.body[0].expression.left.object.right.body.body.length, 0] //drawModelsCodeAST.body.length
					.concat(drawModelsCodeAST.body, drawModelsTweenCodeAST.body) //,drawModelsTweenCodeAST.body						
				);

				node.body.splice.apply(node.body, [node.body.length - 1, 0].concat(mcTemplateAST.body));

	    	}
	    },
	    leave: function (node, parent) {
	    }
	});

	var animationFunctionality = `<script>` + escodegen.generate(animationCodeTemplateAST) + `</script>`;
	var FINALdocTEST = openingHTMLtag + 
	    					openingHeadtag + 
	    						styles +
	    						jqueryJSscript +
	    						createJSscript +
	    						animationFunctionality +
	    						canvasContentscript +
	    					closingHeadtag +
	    					openingBodytag +
	    						animationStageHTML +
	    					closingBodytag +
	    			   closingHTMLtag;

	var folder = path.basename(pArgs[pArgs.indexOf('outputFilenameTest') + 1],'.html');
	if (!fs.existsSync(__dirname + '/' + pArgs[pArgs.indexOf('outputDir')+1])) {
		fs.mkdirSync(__dirname + '/' + pArgs[pArgs.indexOf('outputDir')+1]);
	}
	if (!fs.existsSync(__dirname + '/' + pArgs[pArgs.indexOf('outputDir')+1] + '/' + folder + i)) {
		fs.mkdirSync(__dirname + '/' + pArgs[pArgs.indexOf('outputDir')+1] + '/' + folder + i);
	}

	fs.writeFileSync(__dirname + '/' + pArgs[pArgs.indexOf('outputDir')+1] + '/' + folder + i + '/' + pArgs[pArgs.indexOf('outputFilenameTest')+1],
	    FINALdocTEST
	    , {}
	);

}