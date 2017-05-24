var fs = require('fs');
var esprima = require('esprima');
var escodegen = require('escodegen');
var estraverse = require('estraverse');
var opn = require('opn');

//**---CONFIG---**//
var fileName;
var folder;
var outputFileName;
var outputFileNameTEST;
var projectName;
var frameToAddFunctionalityOn;
var answerOptions;
var cellsX;
var cellsY;
var offX;
var offY;
var answerGridX;
var answerGridY;
var answerLineWidth;
var answerLineHeight;
var answerLineX;
var answerLineY;
var answer;
var fontSizeOfAnswer;
var params = [
	"fileName",
	"folder",
	"outputFileName",
	"outputFileNameTEST",
	"projectName",
	"frameToAddFunctionalityOn",
	"answerOptions",
	"cellsX",
	"cellsY",
	"offX",
	"offY",
	"answerGridX",
	"answerGridY",
	"answerLineWidth",
	"answerLineHeight",
	"answerLineX",
	"answerLineY",
	"answer",
	"fontSizeOfAnswer"
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

//**---CONFIG---**//

var code = fs.readFileSync(__dirname + '/../' + folder + '/' + fileName, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data;
});

var gridObjectCode = `
	var cellsX = ` + cellsX +`;
	var cellsY = ` + cellsY + `;
	var offX = ` + offX + `;
	var offY = ` + offY + `;
	var answerGridX = ` + answerGridX + `;
	var answerGridY = ` + answerGridY + `;

	var cellOccupancy = [];

	for (var j = 0; j < cellsX; j++) {
	    for (var i = 0; i < cellsY; i++) {

	        //console.log(j * cellsY + i);

	        cellOccupancy[ i * cellsX + j ] = {};
	        cellOccupancy[ i * cellsX + j ].centerX = answerGridX + (j * offX + offX/2);
	        cellOccupancy[ i * cellsX + j ].centerY = answerGridY + (offY * i  + offY/2);
	        cellOccupancy[ i * cellsX + j ].originalID = null;
	    }
	}

	(lib.answerGrid = function(mode,startPosition,loop) {
	    this.initialize(mode,startPosition,loop,{});
	    this.horizontalLines = [];
	    this.verticalLines = [];
	    for (var i = 0; i < cellsX; i++) {
	        this.horizontalLines[i] = [];
	        for (var j = 0; j <= cellsY; j++) {
	                this.horizontalLines[i][j] = new cjs.Shape();
	                this.horizontalLines[i][j].graphics.setStrokeStyle(2).beginStroke("#000000").mt(i * offX , offY * j).lt(i * offX + offX, offY * j);
	                this.horizontalLines[i][j].setTransform(0,0);
	        }
	    }
	    for (var i = 0; i <= cellsX; i++) {
	        this.verticalLines[i] = [];
	        for (var j = 0; j < cellsY; j++) {
	            this.verticalLines[i][j] = new cjs.Shape();
	            this.verticalLines[i][j].graphics.setStrokeStyle(2).beginStroke("#000000").mt(i * offX , offY * j).lt(i * offX, offY * j  + offY);
	            this.verticalLines[i][j].setTransform(0,0);
	        }
	    }
	    for (var i = 0; i < cellsX; i++) {
	        for (var j = 0; j <= cellsY; j++) {
	            this.timeline.addTween(cjs.Tween.get(this.horizontalLines[i][j]).wait(1));
	        }
	    }
	    for (var i = 0; i <= cellsX; i++) {
	        for (var j = 0; j < cellsY; j++) {
	            this.timeline.addTween(cjs.Tween.get(this.verticalLines[i][j]).wait(1));
	        }
	    }
	    
	}).prototype = getMCSymbolPrototype(lib.answerGrid, new cjs.Rectangle(0,0,offX * cellsX, offY * cellsY), null);
`;

var gridInstantiation = `
	this.answerGrid = new lib.answerGrid();
	this.answerGrid.parent = this;
	this.answerGrid.setTransform(answerGridX,answerGridY,1,1,0,0,0,0,0);
	this.timeline.addTween(cjs.Tween.get(this.answerGrid).wait(1));
`;

var gridInteractionLogic = `
	createjs.Graphics.prototype.dashedLineTo = function( x1 , y1 , x2 , y2 , dashLen ){
		this.moveTo( x1 , y1 );

		var dX = x2 - x1;
		var dY = y2 - y1;
		var dashes = Math.floor(Math.sqrt( dX * dX + dY * dY ) / dashLen );
		var dashX = dX / dashes;
		var dashY = dY / dashes;

		var q = 0;
		while( q++ < dashes ){
		    x1 += dashX;
		    y1 += dashY;
		    this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
		}
		this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);
		return this; 
	}

	var destHeight = ` + answerLineHeight + `;
	var destWidth = ` + answerLineWidth + `;

	destinationX = ` + answerLineX + `;
	destinationY = ` + answerLineY + `;

	var box = new createjs.Shape();
	box.graphics.setStrokeStyle(2).rect(0, 0, destWidth, destHeight);
	var destination = new createjs.Container();

	destination.x = destinationX;
	destination.y = destinationY;

	destination.addChild(box);

	var label = new createjs.Text("` + answer + `", "` + fontSizeOfAnswer + `px Sans-Serif", "#000");
	label.textAlign="center";

	label.y = destHeight/4;
	label.x = destWidth/2;
	var textRect = new createjs.Shape();

	destination.addChild(label);
	stage.addChild(destination);

	// var destLine = new cjs.Shape();
	// destLine.graphics.setStrokeStyle(5).beginStroke("#000000")
	// 	.dashedLineTo(
	// 		destinationX,
	// 		destinationY + destHeight * 1,
	// 		destinationX + destWidth,
	// 		destinationY + destHeight * 1,
	// 		5
	// 	);
	// stage.addChild(destLine);


	var _self = this;   
	// *** REPLACE answerLine with name of answer area instance
	_self._answerArea = this.answerGrid; 
	// *** REPLACE instance_1,instance_2, & instance_3 with the names of answer option instances
	_self._answerOptions = [` + answerOptions.join(",") + `]; // REPLACE with the names of your answer option instances

	_self._answerOptions.forEach(function(value, i) {
	    _self._answerOptions[i].originalX = _self._answerOptions[i].x;
	    _self._answerOptions[i].originalY = _self._answerOptions[i].y;
	    _self._answerOptions[i].originalID = _self._answerOptions[i].id;
	    _self._answerOptions[i].addEventListener("pressmove", function(evt) { fl_DragToAnswerArea_instance(evt, _self._answerOptions[i]) });
	    _self._answerOptions[i].addEventListener("pressup", function(evt) { fl_TestAnswerAreaIntersection_instance(evt, _self._answerOptions[i]) });
	});

	function fl_DragToAnswerArea_instance (evt, instance) {
	    instance.x = evt.stageX / stage.scaleX; instance.y = evt.stageY / stage.scaleY;

	    stage.update();
	    if (intersect(evt.currentTarget, _self._answerArea)) { 
	    	evt.currentTarget.alpha = 0.2; 
	    } else { 
	    	evt.currentTarget.alpha = 1; 
	    }
	}

	function fl_TestAnswerAreaIntersection_instance (evt, instance) {

	    var closestCell = {};
        closestCell.originalID = null;
        closestCell.distance = 1000000000;
        for (var i = 0; i < cellOccupancy.length; i++) {
            if (cellOccupancy[i].originalID == evt.currentTarget.originalID) {
                cellOccupancy[i].originalID = null;
            }
        }
        for (var i = 0; i < cellOccupancy.length; i++) {
            var a = evt.currentTarget.x - cellOccupancy[i].centerX;
            var b = evt.currentTarget.y - cellOccupancy[i].centerY;
            var c = Math.sqrt(a * a + b * b);
            if (c < closestCell.distance) {
                closestCell.centerX = cellOccupancy[i].centerX;
                closestCell.centerY = cellOccupancy[i].centerY;
                closestCell.distance = c;
                closestCell.cellNum = i;
            }
        }
        if (intersect(evt.currentTarget, _self._answerArea)) {
            if (cellOccupancy[closestCell.cellNum].originalID == null) {
                evt.currentTarget.x = closestCell.centerX;
                evt.currentTarget.y = closestCell.centerY;
                cellOccupancy[closestCell.cellNum].originalID = evt.currentTarget.originalID;

                var dataCellOccupancy = [];
                for (var i = 0; i < cellOccupancy.length; i++) {
                    if (cellOccupancy[i].originalID) {
                        dataCellOccupancy.push(cellOccupancy[i].originalID);
                    }
                }

                $('#responseJSON').html("<div id='response' data-response='" + dataCellOccupancy.length + "'></div><div id='genre' data-genre='DragAndDropGrid'></div>");

            } else {
                evt.currentTarget.x = instance.originalX;
                evt.currentTarget.y = instance.originalY;
            }
        } else {

            var dataCellOccupancy = [];
            for (var i = 0; i < cellOccupancy.length; i++) {
                if (cellOccupancy[i].originalID) {
                    dataCellOccupancy.push(cellOccupancy[i].originalID);
                }
            }
            
            $('#responseJSON').html("<div id='response' data-response='" + dataCellOccupancy.length + "'></div><div id='genre' data-genre='DragAndDropGrid'></div>");

            evt.currentTarget.x = instance.originalX;
            evt.currentTarget.y = instance.originalY;
        }
        evt.currentTarget.alpha = 1;
	}

	//** this function is used to tell when the answer option and the answer area are in contact 
	function intersect(obj1, obj2) {
	    if (!obj1) { return false; }
	    if (!obj2) { return false; }

	    var pt = { x: obj1.x, y: obj1.y }

	    if ( 
	        (pt.x >= (obj2.x) && pt.x <= (obj2.x + obj2.nominalBounds.width))
	        && 
	        (pt.y >= (obj2.y) && pt.y <= (obj2.y + obj2.nominalBounds.height))
	    ) 
	    { 
	        return true; 
	    }
	    else { return false; }
	}
`;

var ast = esprima.parse(code);

estraverse.traverse(ast, {
    enter: function (node, parent) {
    	
    	if ( node.type === 'AssignmentExpression' && 
    		 node.left.type === 'MemberExpression' && 
    		 node.right.type === 'FunctionExpression' &&
    		 node.left.object.name === 'lib' &&
    		 node.left.property.name === projectName
    		) {

    		var desiredPlace = -1;
    		for (var i = 0 ; i < node.right.body.body.length; i++) {

    			if (node.right.body.body[i].type == 'ExpressionStatement' && 
					node.right.body.body[i].expression &&
					node.right.body.body[i].expression.callee &&
    				node.right.body.body[i].expression.callee.property &&
    				node.right.body.body[i].expression.callee.property.name == 'initialize'
    			) {
    				desiredPlace = i;
    				break;
    			}

    		}	
    		
    		if (desiredPlace > -1) {
				var testNodes0 = esprima.parse(gridInstantiation).body;
    			node.right.body.body.splice.apply(node.right.body.body, [desiredPlace+1, 0].concat(testNodes0));
				return node;
			}
    	}

    	if ( 
    		 node.type === 'AssignmentExpression' && 
    		 node.left.type === 'MemberExpression' && 
    		 node.right.type === 'FunctionExpression' &&
    		 node.left.object.type === 'ThisExpression' &&
    		 node.left.property.name === frameToAddFunctionalityOn
    		) {
			var testNodes2 = esprima.parse(gridInteractionLogic).body;
    		node.right.body.body.splice.apply(node.right.body.body, [0, 0].concat(testNodes2));
			return node;
    	}
    	
    	if (
    		node.type === 'FunctionExpression' &&
    		node.params.length == 5
    	) {
    		var desiredPlace = -1;
    		for (var i = 0 ; i < node.body.body.length; i++) {
    			if (node.body.body[i] && node.body.body[i].id && node.body.body[i].id.name === 'getMCSymbolPrototype') {
    				desiredPlace = i;
    				break;
    			}
    		}	
    		if (desiredPlace > -1) {
    			var testNodes1 = esprima.parse(gridObjectCode).body;
    			node.body.body.splice.apply(node.body.body, [desiredPlace+1, 0].concat(testNodes1));
				return node;
			}
    	}    	
    },
    leave: function (node, parent) {
    	
    }
});

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
	, function (err) {
		if (err) return console.log(err);
	}
);

fs.writeFileSync(__dirname + '/../' + folder + '/' + outputFileName,
	FINALdoc
	, function (err) {
		if (err) return console.log(err);
	}
);

opn(__dirname + '/../' + folder + '/' + outputFileNameTEST, {app: ['google chrome']});

process.exit();