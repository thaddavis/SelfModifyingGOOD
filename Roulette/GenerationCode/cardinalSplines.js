function getCurvePoints(pts) {
	    var tension = 0.8;
	    var isClosed = false;
	    var numOfSegments = 1;

	    var _pts = [], res = [],    // clone array
	        x, y,           // our x,y coords
	        t1x, t2x, t1y, t2y, // tension vectors
	        c1, c2, c3, c4,     // cardinal points
	        st, t, i;       // steps based on num. of segments

	    // clone array so we don't change the original
	    //
	    _pts = pts.slice(0);

	    // The algorithm require a previous and next point to the actual point array.
	    // Check if we will draw closed or open curve.
	    // If closed, copy end points to beginning and first points to end
	    // If open, duplicate first points to befinning, end points to end
	    if (isClosed) {
	        _pts.unshift(pts[pts.length - 1]);
	        _pts.unshift(pts[pts.length - 2]);
	        // _pts.unshift(pts[pts.length - 1]);
	        // _pts.unshift(pts[pts.length - 2]);
	        _pts.push(pts[0]);
	        _pts.push(pts[1]);
	    }
	    else {
	        _pts.unshift(pts[1]);   //copy 1. point and insert at beginning
	        _pts.unshift(pts[0]);
	        _pts.push(pts[pts.length - 2]); //copy last point and append
	        _pts.push(pts[pts.length - 1]);
	    }

	    // ok, lets start..

	    // 1. loop goes through point array
	    // 2. loop goes through each segment between the 2 pts + 1e point before and after
	    for (i=2; i < (_pts.length - 4); i+=2) {
	        
	    	// console.log("outer loop: " + i);

	        for (t=0; t <= numOfSegments; t++) {

	        	// console.log("numOfSegments: " + t);

	            // calc tension vectors
	            t1x = (_pts[i+2] - _pts[i-2]) * tension;
	            t2x = (_pts[i+4] - _pts[i]) * tension;

	            // console.log("t1x", t1x);
	            // console.log("t2x", t2x);

	            t1y = (_pts[i+3] - _pts[i-1]) * tension;
	            t2y = (_pts[i+5] - _pts[i+1]) * tension;

	            // console.log("t1y", t1y);
	            // console.log("t2y", t2y);

	            // calc step
	            st = t / numOfSegments;

	            // console.log('st', st);

	            // calc cardinals
	            c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1; 
	            c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
	            c3 =       Math.pow(st, 3)  - 2 * Math.pow(st, 2) + st; 
	            c4 =       Math.pow(st, 3)  -     Math.pow(st, 2);

	            // calc x and y cords with common control vectors
	            x = c1 * _pts[i]    + c2 * _pts[i+2] + c3 * t1x + c4 * t2x;
	            y = c1 * _pts[i+1]  + c2 * _pts[i+3] + c3 * t1y + c4 * t2y;

	            //store points in array
	            res.push(x);
	            res.push(y);
	        }
	    }

	    return res;
	}

	//spline, t, length
	function getXY(points, pos, length) {

	  var len = 0, lastLen, i, l = points.length;

	  // find segment
	  for(i = 2; i < l; i += 2) {

	  	//console.log(i);

	    lastLen = dist(points[i], points[i+1], points[i-2], points[i-1]);

	    len += lastLen;
	    if (pos < len && lastLen) {
	      len -= lastLen;
	      pos -= len;

	      return {
	        x: points[i-2] + (points[i] - points[i-2]) * (pos / lastLen),
	        y: points[i-1] + (points[i+1] - points[i-1]) * (pos / lastLen)
	      }
	    }
	  }

	  //return null
	}

	function getLength(points) {
	  for (var len = 0, i = 0, dx, dy; i < points.length - 2; i+=2) {
	    len += dist(points[i+2], points[i+3], points[i], points[i+1])
	  }
	  return len
	}

	function dist(x1, y1, x2, y2) {
	  var dx = x2 - x1,
	      dy = y2 - y1;
	  return Math.sqrt(dx*dx + dy*dy)
	}