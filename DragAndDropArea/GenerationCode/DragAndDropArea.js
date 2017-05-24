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
var answerAreaWidth;
var answerAreaHeight;
var answerAreaX;
var answerAreaY;
var answerLineHeight;
var answerLineWidth;
var answerLineX;
var answerLineY;
var fontSizeOfAnswer;
var answer;

var params = [
    "fileName",
    "folder",
    "outputFileName",
    "outputFileNameTEST",
    "projectName",
    "frameToAddFunctionalityOn",
    "answerOptions",
    "answerAreaWidth",
    "answerAreaHeight",
    "answerAreaX",
    "answerAreaY",
    "answerLineHeight",
    "answerLineWidth",
    "answerLineX",
    "answerLineY",
    "fontSizeOfAnswer",
    "answer"
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


for (var i = 1; i <= answer; i++) {

    var code = fs.readFileSync(__dirname + '/../' + folder + '/' + fileName, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      return data;
    });

    var areaObjectCode = `
    	(lib.answerArea = function (mode, startPosition, loop) {
            this.initialize(mode, startPosition, loop, {});
            
            this.horizontalLines = [];
            this.verticalLines = [];

            this.horizontalLines[0] = new cjs.Shape();
            this.horizontalLines[0].graphics.setStrokeStyle(2).beginStroke('#000000').mt(0,0).lt(` + answerAreaWidth + `,0);
            this.horizontalLines[0].setTransform(0, 0);

            this.horizontalLines[1] = new cjs.Shape();
            this.horizontalLines[1].graphics.setStrokeStyle(2).beginStroke('#000000').mt(0,` + answerAreaHeight + `).lt(` + answerAreaWidth + `,` + answerAreaHeight + `);
            this.horizontalLines[1].setTransform(0, 0);

            this.verticalLines[0] = new cjs.Shape();
            this.verticalLines[0].graphics.setStrokeStyle(2).beginStroke('#000000').mt(0,0).lt(0,` + answerAreaHeight + `);
            this.verticalLines[0].setTransform(0, 0);

            this.verticalLines[1] = new cjs.Shape();
            this.verticalLines[1].graphics.setStrokeStyle(2).beginStroke('#000000').mt(` + answerAreaWidth + `,0).lt(` + answerAreaWidth + `,` + answerAreaHeight + `);
            this.verticalLines[1].setTransform(0, 0);

            for (var i = 0; i < this.horizontalLines.length; i++) {
                this.timeline.addTween(cjs.Tween.get(this.horizontalLines[i]).wait(1));
            }
            for (var i = 0; i < this.verticalLines.length; i++) {
                this.timeline.addTween(cjs.Tween.get(this.verticalLines[i]).wait(1));
            }

        }).prototype = getMCSymbolPrototype(lib.answerArea, new cjs.Rectangle(0, 0, ` + answerAreaWidth + `,` + answerAreaHeight + `), null);
    `;

    var areaInstantiation = `
    	this.answerArea = new lib.answerArea();
        this.answerArea.parent = this;
        this.answerArea.setTransform(` + answerAreaX + `,` + answerAreaY + `, 1, 1, 0, 0, 0, 0, 0);
        this.timeline.addTween(cjs.Tween.get(this.answerArea).wait(1));
    `;

    var areaInteractionLogic = `
    	createjs.Graphics.prototype.dashedLineTo = function( x1 , y1 , x2 , y2 , dashLen ) {
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

        function addAnswer(stage) {

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

            var label = new createjs.Text("` + i + `", "` + fontSizeOfAnswer + `px Sans-Serif", "#000");
            label.textAlign="center";

            label.y = destHeight/4;
            label.x = destWidth/2;
            var textRect = new createjs.Shape();

            destination.addChild(label);
            stage.addChild(destination);

            var destLine = new cjs.Shape();
            destLine.graphics.setStrokeStyle(5).beginStroke("#000000")
                .dashedLineTo(
                    destinationX,
                    destinationY + destHeight * 1,
                    destinationX + destWidth,
                    destinationY + destHeight * 1,
                    5
                );
            stage.addChild(destLine);
        }

        addAnswer(stage);

    	var _self = this;   
            
        _self._answerArea = this.answerArea;
        
        _self._answerOptions = [` + answerOptions.join(",") + `]; 
        
        var answerAreaOccupancy = [];
        _self._answerOptions.forEach(function(value, i) {
            _self._answerOptions[i].originalX = _self._answerOptions[i].x;
            _self._answerOptions[i].originalY = _self._answerOptions[i].y;
            _self._answerOptions[i].addEventListener("pressmove", function(evt) { fl_DragToAnswerArea_instance(evt, _self._answerOptions[i]) });
            _self._answerOptions[i].addEventListener("pressup", function(evt) { fl_TestAnswerAreaIntersection_instance(evt, _self._answerOptions[i]) });
        });
        
        function fl_DragToAnswerArea_instance (evt, instance) {
            instance.x = evt.stageX / stage.scaleX; instance.y = evt.stageY / stage.scaleY;
            stage.update();
            if (intersect(evt.currentTarget, _self._answerArea)) { evt.currentTarget.alpha = 0.2; } else { evt.currentTarget.alpha = 1; }
        }
        
        function fl_TestAnswerAreaIntersection_instance (evt, instance) {

            if ( intersect(evt.currentTarget, _self._answerArea) ) {
                
                // console.log('true');
                // add instance id to answerAreaOccupancy
                var index = answerAreaOccupancy.indexOf(instance.id);
                if (index > -1) {
                    answerAreaOccupancy.splice(index, 1);
                }
                answerAreaOccupancy.push(instance.id);
                instance.x = evt.stageX / stage.scaleX; instance.y = evt.stageY / stage.scaleY;
            } else {
                // console.log('false');
                // remove instance id to answerAreaOccupancy
                var index = answerAreaOccupancy.indexOf(instance.id);
                if (index > -1) {
                    answerAreaOccupancy.splice(index, 1);
                }
                evt.currentTarget.x = instance.originalX; 
                evt.currentTarget.y = instance.originalY;
            }

            $('#responseJSON').html("<div id='response' data-response='" + answerAreaOccupancy.length + "'></div><div id='genre' data-genre='DragAndDropArea'></div>");
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
    				var testNodes0 = esprima.parse(areaInstantiation).body;
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
    			var testNodes2 = esprima.parse(areaInteractionLogic).body;
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
        			var testNodes1 = esprima.parse(areaObjectCode).body;
        			node.body.body.splice.apply(node.body.body, [desiredPlace+1, 0].concat(testNodes1));
    				return node;
    			}
        	}    	
        },
        leave: function (node, parent) {
        	
        }
    });

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


    if (!fs.existsSync(__dirname + '/../../DragAndDropAreaMult/' + folder + i)) {
        fs.mkdirSync(__dirname + '/../../DragAndDropAreaMult/' + folder + i);
    }

    var parseJson = {};

    for( var j = 2 ; j < passedInArgs.length ; j += 2 ) {
        

        if (passedInArgs[j] === 'answer') {
            parseJson['answer'] = i;
        } else {
            parseJson[passedInArgs[j]] = passedInArgs[j+1]; 
        }
        
    }

    fs.writeFileSync(__dirname + '/../../DragAndDropAreaMult/' + folder + i + '/config.json', JSON.stringify(parseJson, null, 4), function(err) {
        if (err) {
            throw err;
        }
    });
   
    fs.writeFileSync(__dirname + '/../../DragAndDropAreaMult/' + folder + i + '/' + outputFileNameTEST,
    	FINALdocTEST
    	, function (err) {
    		if (err) return console.log(err);
    	}
    );

    fs.writeFileSync(__dirname + '/../../DragAndDropAreaMult/' + folder + i + '/' + outputFileName,
    	FINALdoc
    	, function (err) {
    		if (err) return console.log(err);
    	}
    );

}

//opn(__dirname + '/../' + folder + '/' + outputFileNameTEST, {app: ['google chrome']});

process.exit();
