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
var correctOrder = [];

var params = [
    "fileName",
    "outputFileName",
    "outputFileNameTEST",
    // "correctOrder",
    "folder"
];

var allNumbers = [
'one01','two02','three03','four04','five05','six06','seven07','eight08','nine09','ten10','eleven11','twelve12',
'thirteen13','fourteen14','fifteen15','sixteen16','seventeen17','eighteen18','nineteen19','twenty20','twentyone21',
'twentytwo22','twentythree23','twentyfour24','twentyfive25','twentysix26','twentyseven27','twentyeight28','twentynine29','thirty30',
'thirtyone31','thirtytwo32','thirtythree33','thirtyfour34','thirtyfive35','thirtysix36','thirtyseven37','thirtyeight38','thirtynine39',
'forty40'
];

var passedInArgs = [];
process.argv.forEach(function (val, index, array) {
    passedInArgs.push(val);
});

params.forEach(function(val) {
  var a = passedInArgs.indexOf(val);
  eval(passedInArgs[a] + " = passedInArgs[a + 1]");
});

projectName = fileName.substring(0, fileName.lastIndexOf('.'));
projectName = projectName.replace(/[-.]/g, '');

//**---CONFIG---**//

var code = fs.readFileSync(__dirname + '/../' + folder + '/' + fileName, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data;
});

var ast = esprima.parse(code);

var lineInteractionLogic = ``;

estraverse.traverse(ast, {
    enter: function (node, parent) { 
        if (node.type === "Identifier") {
            if (allNumbers.indexOf(node.name) > -1) {
                correctOrder.push(node.name);
            } else {}
        }
    },
    leave: function (node, parent) {
    }
});


correctOrder = correctOrder.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});

correctOrder.sort(function(a, b) {
    return parseFloat(a.substring(a.length - 2, a.length)) - parseFloat(b.substring(b.length - 2, b.length));
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

        TestMetadata = function() {
          var clicks = 0;

          this.getClicks = function() {
            return clicks;
          };
          
          this.incClicks = function() {
            clicks++;
            return clicks;
          };
        };
        const testMetadata = new TestMetadata();
        const correctOrder = ['` + correctOrder.join("','") + `']` + `

        function handleComplete() {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            exportRoot = new lib.` + projectName + `();
            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.enableMouseOver();

            stage.addEventListener("stagemousedown", function(evt) {
                testMetadata.incClicks();
                var nextCorrectNumber = correctOrder[(testMetadata.getClicks() - 1)];
                if ( correctOrder.length > 0 && (testMetadata.getClicks() - 1 < correctOrder.length) 
                    &&
                    ( evt.stageX < ( exportRoot[nextCorrectNumber].localToGlobal(exportRoot[nextCorrectNumber].x,exportRoot[nextCorrectNumber].y).x/2 + (
                                exportRoot[nextCorrectNumber].__proto__.nominalBounds.x*2 +
                                exportRoot[nextCorrectNumber].__proto__.nominalBounds.width*2 )) &&
                        evt.stageX > ( exportRoot[nextCorrectNumber].localToGlobal(exportRoot[nextCorrectNumber].x,exportRoot[nextCorrectNumber].y).x/2 + (
                                exportRoot[nextCorrectNumber].__proto__.nominalBounds.x*2 ))) &&
                    ( evt.stageY < ( exportRoot[nextCorrectNumber].localToGlobal(exportRoot[nextCorrectNumber].x,exportRoot[nextCorrectNumber].y).y/2 + (
                                exportRoot[nextCorrectNumber].__proto__.nominalBounds.y*2 +
                                exportRoot[nextCorrectNumber].__proto__.nominalBounds.height*2 )) &&
                        evt.stageY > ( exportRoot[nextCorrectNumber].localToGlobal(exportRoot[nextCorrectNumber].x,exportRoot[nextCorrectNumber].y).y/2 + (
                                exportRoot[nextCorrectNumber].__proto__.nominalBounds.y*2 )))) {
                    
                    
                    
                    if (testMetadata.getClicks() == ` + correctOrder.length + `) {
                        $('#responseJSON').html("<div id='response' data-response='Correct'></div><div id='genre' data-genre='ClickSequence'></div>");
                    }

                } else {
                    
                    $('#responseJSON').html("<div id='response' data-response='Incorrect'></div><div id='genre' data-genre='ClickSequence'></div>");

                    for ( var i = 0 ; i < correctOrder.length ; i++ ) {
                        
                        var nextCorrectNumber = correctOrder[i];
                        exportRoot[nextCorrectNumber].removeAllEventListeners();


                    }
                }

            });


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