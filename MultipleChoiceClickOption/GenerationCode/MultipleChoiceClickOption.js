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
var fontSizeOfAnswers;
var answer;
var font;
var params = [
	"folder",
	"fileName",
	"outputFileName",
	"outputFileNameTEST",
	"frameToAddFunctionalityOn",
	"answerOptions",
	"fontSizeOfAnswers",
	"answer",
	"font"
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
	

//--------
    TestMetadata = function () {
        Answers = ` + `['` + answerOptions.join("','") + `']` + `

        this.getAnswers = function () {
            return Answers;
        };
    };
    testMetadata = new TestMetadata();
    createjs.Graphics.prototype.dashedLineTo = function (x1, y1, x2, y2, dashLen) {
        this.moveTo(x1, y1);
        var dX = x2 - x1;
        var dY = y2 - y1;
        var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
        var dashX = dX / dashes;
        var dashY = dY / dashes;
        var q = 0;
        while (q++ < dashes) {
            x1 += dashX;
            y1 += dashY;
            this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
        }
        return this;
    };
    var _self = this;
    _self._answerOptions = [];
    function addAnswers(stage) {
    
        var offset = stage.canvas.width / stage.scaleX / (testMetadata.getAnswers().length * 2);

        testMetadata.getAnswers().forEach(function (value, i) {

            var label = new createjs.Text(value, "` + fontSizeOfAnswers + `px ` + font + `", "#000");
            label.textAlign = 'center';
            label.y -= label.getBounds().height / 2;
            var textRect = new createjs.Shape();
            var labelHeight = label.getBounds().height * 0.8;
            var labelWidth = label.getBounds().width * 1.2;
            textRect.graphics.setStrokeStyle(2).beginStroke('rgba(1.0,0,0,0.08)').beginFill('rgba(0,0,0,0.08)').rect(-labelWidth / 2, -labelHeight / 2, labelWidth, labelHeight);
            var textRectContainer = new createjs.Container();
            textRectContainer.x = offset * (i * 2 + 1);
            textRectContainer.y = stage.canvas.height / stage.scaleY * 0.85;
            textRectContainer.originalX = textRectContainer.x;
            textRectContainer.originalY = textRectContainer.y;
            textRectContainer.addChild(textRect, label);
            textRectContainer.setBounds(-labelWidth, -labelHeight, labelWidth * 2, labelHeight * 2);
            var shape = new cjs.Shape();
            shape.graphics.setStrokeStyle(5, 'round').beginStroke('#000000')
            .dashedLineTo(offset * (i * 2 + 1) - labelWidth / 1.5, stage.canvas.height / stage.scaleY * 0.85 + label.getBounds().height / 2, offset * (i * 2 + 1) + labelWidth / 1.5, stage.canvas.height / stage.scaleY * 0.85 + label.getBounds().height / 2, 7);
            stage.addChild(shape);
        
            textRectContainer.on('pressup', function (evt) {

                evt.currentTarget.children[0].graphics.setStrokeStyle(2).beginStroke('rgba(0.0,0.0,0,0.0)').beginFill('rgba(0.0,0.0,0,0.0)').rect(-labelWidth / 2, -labelHeight / 2, labelWidth, labelHeight);

                _self._answerOptions.forEach(function (value, i) {
                    _self._answerOptions[i].removeAllEventListeners();
                });

				   $('#responseJSON').html("<div id='response' data-response='" + evt.currentTarget.children[1].text + "'></div><div id='genre' data-genre='MultipleChoiceClickOption'></div>");

            });
            _self._answerOptions.push(textRectContainer);
            stage.addChild(textRectContainer);
        });
    
    }

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
