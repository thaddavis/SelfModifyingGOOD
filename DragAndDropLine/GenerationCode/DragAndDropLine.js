var fs = require('fs');
var esprima = require('esprima');
var escodegen = require('escodegen');
var estraverse = require('estraverse');
var opn = require('opn');

//**---CONFIG---**//
var fileName;
var outputFileName;
var outputFileNameTEST;
var projectName;
var frameToAddFunctionalityOn;
var answerOptions;
var answerOptionBorderSpace;
var fontSizeOfAnswers;
var answer;
var font;
var destBoxHeight;
var destBoxWidth;
var destBoxX;
var destBoxY;
var params = [
	"folder",
	"fileName",
	"outputFileName",
	"outputFileNameTEST",
	"frameToAddFunctionalityOn",
	"answerOptions",
	"answerOptionBorderSpace",
	"fontSizeOfAnswers",
	"answer",
	"font",
	"destBoxHeight",
	"destBoxWidth",
	"destBoxX",
	"destBoxY"
];

var passedInArgs = [];
process.argv.forEach(function (val, index, array) {
	passedInArgs.push(val);
});

params.forEach(function(val) {
  var a = passedInArgs.indexOf(val);
  eval(passedInArgs[a] + " = passedInArgs[a + 1]");
});

var answerOptions = answerOptions.split(",");

projectName = fileName.substring(0, fileName.lastIndexOf('.'));
projectName = projectName.replace(/[-.]/g, '');

//**---CONFIG---**//

var code = fs.readFileSync(__dirname + '/../' + folder + '/' + fileName, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data;
});

var lineInteractionLogic = `
	TestMetadata = function() {
		Answers = ` + `['` + answerOptions.join("','") + `']` + `

		this.getAnswers = function() {
		  return Answers;
		};
	};

	testMetadata = new TestMetadata();

	createjs.Graphics.prototype.dashedLineTo = function( x1 , y1 , x2 , y2 , dashLen ){
		this.moveTo( x1 , y1 );

		var dX = x2 - x1;
		var dY = y2 - y1;
		var dashes = Math.floor(Math.sqrt( dX * dX + dY * dY ) / dashLen );
		//var dashes = Math.floor((dX * dX + dY * dY) / dashLen );
		var dashX = dX / dashes;
		var dashY = dY / dashes;

		var q = 0;
		while( q++ < dashes ){
		    x1 += dashX;
		    y1 += dashY;
		    this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
		}
		//this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);
		return this; 
	}		

	var _self = this;
	_self._answerOptions = []; // REPLACE  with the names of your answer option instances

	// Code for adding answers
	function addAnswers(stage) {
		//Destination Size
		var destHeight = ` + destBoxHeight + `; //(stage.canvas.height / stage.scaleY) * 0.20;
		var destWidth = ` + destBoxWidth +  `; //(stage.canvas.width / stage.scaleX) * 0.25;

		// var box = new createjs.Shape();
		// box.graphics.setStrokeStyle(2).beginStroke("white").rect(0, 0, destWidth, destHeight);
		// box.setBounds(0, 0, destWidth, destHeight);
		var destination = new createjs.Container();

		destinationX = ` + destBoxX + `;//(stage.canvas.width / stage.scaleX) * 0.70;
		destinationY = ` + destBoxY + `;//(stage.canvas.height / stage.scaleY) * 0.35;

		destination.x = destinationX;
		destination.y = destinationY;

		destination.setBounds(destinationX, destinationY, destWidth, destHeight);
		//destination.addChild(box);
		stage.addChild(destination);

		var destLine = new cjs.Shape();
		destLine.graphics.setStrokeStyle(3, "round").beginStroke("#000000").mt(destinationX,destinationY + destHeight * 1.0).lt(destinationX + destWidth,destinationY + destHeight * 1.0);
		// destLine.graphics.setStrokeStyle(5, "round").beginStroke("#000000")
		// 	.dashedLineTo(
		// 		destinationX,
		// 		destinationY + destHeight * 1.0,
		// 		destinationX + destWidth,
		// 		destinationY + destHeight * 1.0,
		// 		8
		// 	);
		stage.addChild(destLine);

		//*** Answers ***//
		//var offset = (stage.canvas.width / stage.scaleX) / (testMetadata.getAnswers().length * 2);//(stage.canvas.clientWidth) / (testMetadata.getAnswers().length * 2);

		var answerOptionBorderSpace = ` + answerOptionBorderSpace + `;
        var totalWidth = stage.canvas.width / stage.scaleX;

        var answersTotalWidth = 0;
        testMetadata.getAnswers().forEach(function (value, i) {
            var label = new createjs.Text(value, "` + fontSizeOfAnswers + `px ` + font + `", "#000");
            var labelWidth = label.getBounds().width;
            answersTotalWidth += labelWidth;
        });      

        var answerOptionSpacing = totalWidth - answersTotalWidth - (answerOptionBorderSpace * 2);
        var answerOptionSpacing = answerOptionSpacing / (testMetadata.getAnswers().length - 1);

        var currentAnswerPositionX = answerOptionBorderSpace;
		testMetadata.getAnswers().forEach(function(value, i) {

			var label = new createjs.Text(value, "` + fontSizeOfAnswers + `px ` + font + `", "#000");
			label.textAlign = 'center';
                    
            label.y -= label.getBounds().height / 2;
            var textRect = new createjs.Shape();
            var labelHeight = label.getBounds().height;
            var labelWidth = label.getBounds().width;
            
            textRect.graphics.setStrokeStyle(2)
                .beginStroke('rgba(0,0,0,0.008)')
                .beginFill('rgba(0,0,0,0.008)')
                .drawRoundRectComplex(
                	(-labelWidth / 2) - 5,
                	-labelHeight / 2,
                	labelWidth + 10,
                	labelHeight,
                	20,20,5,5
                );
                //.rect((-labelWidth / 2) - 5, -labelHeight / 2, labelWidth + 10, labelHeight);
            
            var dragger = new createjs.Container();
            
            dragger.x = currentAnswerPositionX + labelWidth/2;
            currentAnswerPositionX += (labelWidth + answerOptionSpacing);

            dragger.y = stage.canvas.height / stage.scaleY * 0.8;
            
            dragger.originalX = dragger.x;
            dragger.originalY = dragger.y;
            dragger.addChild(textRect, label);

			// draw placement line
			// var shape = new cjs.Shape();
			// shape.graphics.setStrokeStyle(5, "round").beginStroke("#000000")
			// 	.dashedLineTo(
			// 		offset * (i*2 + 1) - labelWidth / 1.5,
			// 		(stage.canvas.height / stage.scaleY) * 0.80 + label.getBounds().height/2, 
			// 		offset * (i*2 + 1) + labelWidth / 1.5,
			// 		(stage.canvas.height / stage.scaleY) * 0.80 + label.getBounds().height/2,
			// 		7
			// 	);
			// stage.addChild(shape);

			//------- EVENT HANDLERS
			dragger.addEventListener("rollover", function() {
				createjs.Sound.play(value);
		 	});

			dragger.on("pressmove", function(evt) {
				evt.currentTarget.x = evt.stageX / stage.scaleX;
			    evt.currentTarget.y = evt.stageY / stage.scaleY;
			    stage.update(); 
			    if(intersect(evt.currentTarget, destination)){				    
		        	evt.currentTarget.alpha=0.2;
		       		destLine.alpha = 0.2;
		       	} else {
		        	evt.currentTarget.alpha=1;
		        	destLine.alpha = 1.0;	
		        }
			});

			dragger.on("pressup", function(evt) {
				if(intersect(evt.currentTarget, destination)) {
			      dragger.x = destination.x + destWidth/2;
			      dragger.y = destination.y + destHeight/2;

			      dragger.alpha = 1;
			      destLine.alpha = 1.0;
			      //box.graphics.clear();     
			      //box.graphics.setStrokeStyle(2).beginStroke("white").rect(0, 0, destWidth, destHeight);
			      
			      stage.update(evt);
			      _self._answerOptions.forEach(function(value, i) { _self._answerOptions[i].removeAllEventListeners(); });
			      $('#responseJSON').html("<div id='response' data-response='" + evt.currentTarget.children[1].text + "'></div><div id='genre' data-genre='DragAndDropLine'></div>");

			    } else {
					_self._answerOptions.forEach(function(value, i) {
						_self._answerOptions[i].x = _self._answerOptions[i].originalX;
						_self._answerOptions[i].y = _self._answerOptions[i].originalY;
					});
				}
			});

			_self._answerOptions.push(dragger);

			stage.addChild(dragger);
		});
	}

	function intersect(obj1, obj2) {
	var objBounds1 = obj1.getBounds().clone();
	var objBounds2 = obj2.getBounds().clone();

	var pt = obj1.globalToLocal(stage.x, stage.y);
	pt = { x: -pt.x, y: -pt.y }

	if (
		( pt.x >= objBounds2.x && pt.x <= (objBounds2.x + objBounds2.width) ) &&
		( pt.y >= objBounds2.y && pt.y <= (objBounds2.y + objBounds2.height) )
	   ) {

		return true;
	}

	return false;
	}

	function addSounds() {
	if (!createjs.Sound.initializeDefaultPlugins()) {
		console.log("Failed to initialize Default Plugins for audio");
		return;
	}	

	createjs.Sound.registerSound("assets/01.ogg", "One");
	createjs.Sound.registerSound("assets/02.ogg", "Two");
	createjs.Sound.registerSound("assets/03.ogg", "Three");
	createjs.Sound.registerSound("assets/04.ogg", "Four");
	createjs.Sound.registerSound("assets/05.ogg", "Five");
	createjs.Sound.registerSound("assets/06.ogg", "Six");
	createjs.Sound.registerSound("assets/07.ogg", "Seven");
	createjs.Sound.registerSound("assets/08.ogg", "Eight");
	createjs.Sound.registerSound("assets/09.ogg", "Nine");
	createjs.Sound.registerSound("assets/10.ogg", "Ten");

	}

	addSounds();

	addAnswers(stage);
`;

var ast = esprima.parse(code);

estraverse.traverse(ast, {
    enter: function (node, parent) {
    	
    	if ( 
    		 node.type === 'AssignmentExpression' && 
    		 node.left.type === 'MemberExpression' && 
    		 node.right.type === 'FunctionExpression' &&
    		 node.left.object.type === 'ThisExpression' &&
    		 node.left.property.name === frameToAddFunctionalityOn
    		) {

			var testNodes1 = esprima.parse(lineInteractionLogic).body;
			node.right.body.body.splice.apply(node.right.body.body, [0, 0].concat(testNodes1));
			return node;
    	}

    },
    leave: function (node, parent) {
    	
    }
});

// console.log(escodegen.generate(ast));
// fs.writeFileSync(outputFileName,
// 	escodegen.generate(ast)
// 	, function (err) {
// 		if (err) return console.log(err);
// 	}
// );

//----------------------------------------------------------------------------------------------------

var openingHTMLtag = `<!DOCTYPE html><html>`;
var openingHeadtag = `<head>`;
var closingHeadtag = `</head>`;
var openingBodytag = `<body>`;
var closingBodytag = `</body>`;
var closingHTMLtag = `</html>`;

var openingDivtag = `<div>`;
var closingDivtag = `</div>`;

//var styles = ``;
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
			exportRoot = new lib.` + projectName + `();
			stage = new createjs.Stage(canvas);
			stage.addChild(exportRoot);
			stage.enableMouseOver();	
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

var FINALdocTEST = openingHTMLtag + 
					openingHeadtag + 
						styles +
						jqueryJSscript +
						createJSscript +
						'<script>' +
						escodegen.generate(ast) +
						'</script>' +
						//animationFunctionality +
						canvasContentscript +
					closingHeadtag +
					openingBodytag +
						animationStageHTML +
					closingBodytag +
			   closingHTMLtag;					

var FINALdoc = openingDivtag +
			   		'<script>' +
					escodegen.generate(ast) +
					'</script>' +
			   		canvasContentscript +
			   		animationStageHTML +
			   closingDivtag;

fs.writeFileSync(__dirname + '/../' + folder + '/' + outputFileNameTEST,
	FINALdocTEST
	, {}
);

fs.writeFileSync(__dirname + '/../' + folder + '/' + outputFileName,
	FINALdoc
	, {}
);

//opn(outputFileNameTEST, {app: ['google chrome']});
opn(__dirname + '/../' + folder + '/' + outputFileNameTEST, {app: ['google chrome']});

process.exit();
