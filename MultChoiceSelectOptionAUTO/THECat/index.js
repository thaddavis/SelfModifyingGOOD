(function (lib, img, cjs, ss, an) {

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
		width: 600,
		height: 430,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});

var lib, images, createjs, ss, AdobeAn;