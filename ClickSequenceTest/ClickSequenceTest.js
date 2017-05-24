var fs = require('fs');
var esprima = require('esprima');
var escodegen = require('escodegen');
var estraverse = require('estraverse');
var opn = require('opn');

var code = fs.readFileSync(__dirname + '/' + 'Fish_a.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  return data;
});


var allNumbers = [
'one01',
'two02',
'three03',
'four04',
'five05',
'six06',
'seven07',
'eight08',
'nine09',
'ten10',
'eleven11',
'twelve12',
'thirteen13',
'fourteen14',
'fifteen15',
'sixteen16',
'seventeen17',
'eighteen18',
'nineteen19',
'twenty20',
'twentyone21',
'twentytwo22',
'twentythree23',
'twentyfour24',
'twentyfive25',
'twentysix26',
'twentyseven27',
'twentyeight28',
'twentynine29',
'thirty30',
'thirtyone31',
'thirtytwo32',
'thirtythree33',
'thirtyfour34',
'thirtyfive35',
'thirtysix36',
'thirtyseven37',
'thirtyeight38',
'thirtynine39',
'forty40'
]

var sequence = [];


var ast = esprima.parse(code);

var lineInteractionLogic = ``;

estraverse.traverse(ast, {
    enter: function (node, parent) { 
    	
    	if (node.type === "Identifier") {
    		
        	if (allNumbers.indexOf(node.name) > -1) {
			    
        		sequence.push(node.name);

			} else {
			    
			}

    	}
    	
    },
    leave: function (node, parent) {
    }
});

var unique = sequence.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});

unique.sort(function(a, b) {
    return parseFloat(a.substring(a.length - 2, a.length)) - parseFloat(b.substring(b.length - 2, b.length));
});

console.log('DONE');
console.log(unique);
//console.log(sequence);
