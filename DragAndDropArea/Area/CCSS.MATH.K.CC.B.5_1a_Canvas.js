(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.tree01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#239647").s().p("ACwBVIhUgHIhngIQgsgDgdABQgVABgpgJQgogIgiACIhCADQgeABgbACQgmADgOgLQgOgLATgRQAPgNASgeIAOgdQASArgLAfQBAgrAkgwQgCAkgQAkQBZguApguQgBA5gYA4QAkg0A2grQgdA8AQApIB/h3IgzBtQAwgjBMgpQgzA1AHAbQA2ggBFgUIgiA4QA7gHAsgfQgHAcghAaIBrgYQgNAigJAAQgJAAAkACQAkADASADQgLAEgYAFQgvAKg6ABIgjAAQggAAgTgBg");
	this.shape.setTransform(7.3,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DBE074","#128F43"],[0.086,0.765],132.2,17.1,82.4,104.7).s().p("AAMFxIgIgGQgmARg0AAQg/AAgsgYQgOgIgKgJQgaAIggAAQhAAAgugiQgughAAgvQAAgKACgJIgWgWQghgNgZgdQgvg0ABhJQgBhHAug0QAHgRAKgRQABgiAXgYQAVgWAcgEIAGgFQAGg+A/guQBHgxBjAAQA7AAAxASQAUgOAXAAQAfAAAZAaIADAAQAbgfAjAAQAiAAAbAcQAogkA3AAQA4AAAoAlQAmAkADAwQA4AJAsAcQBCApAAA7QAAA2g4AnQAoAoAAA2QAABBg6AtQgjAdgtALIgDADIAAADQAAA+hAAsQg/AshZAAQgWAAgTgDIgJAIQgZATgjAAQgkAAgZgTg");
	this.shape_1.setTransform(0,-34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A8542A","#D4A01E"],[0,1],-9.3,-2.2,12.9,1.9).s().p("AioFqQBZkfgRkNQhBgzgXhWIAWgFQARA9AuAiQgHg9gLg7IBtAAQAUBUAPBaQB1hCAGhoIAigEQgZCMh9BOQAjDrgHEOg");
	this.shape_2.setTransform(4.7,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AAD23").s().p("ADCA6IgDgBIgBgBIhdABIgBAAIgCABIhhAAIgCgBIgBgBIgSAAIgCgBIgIAAIgCgBIgLgBIgCAAIgUgBIgCAAIgBgBIgGAAIgDgBIgCAAIgOgBIgDAAIgUgBIgDgBIhqAAIgCgBIgTgBIgCAAIAAAAIg7gBIgCAAIgBgBIgDAAIgDgBIgFAAIgDgBIgDAAIAAABIgBABIgBABIgCABIgDAAIgCAAIgCgBIAAgBIAAgBIACgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIgBgBIAAgBIAAgBIABgBIABgBIAAgBIAAgBIAAgBIABgBIABgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIABgBIAAgBIAAgBIAAgDIAAgBIABgBIABgBIAAgBIABAAIABgBIABgBIABgBIAAgBIAAgBIABgBIABgBIABgBIABgBIACgBIADgBIABgBIABgBIACgBIACgBIADgBIABgBIAEgBIACgBIABgBIABgBIAAAAIADAAIADgBIABgBIACgCIABgBIADgBIACAAIABAAIACgBIADAAIADgBIAEgBIACAAIAGgBIADgBIASAAIADABIACABIABABIAAAAIACAAIABgBIABgBIABgBIAAgBIACgBIADgBIABAAIADgBIACgBIACAAIABgBIADgBIAEAAIADgBIABgBIACAAIAIgBIADAAIAFgBIAEgBIANAAIADABIAGABIACAAIAFABIACABIABABIABAAIACAAIACABIABABIABABIABABIACABIABABIACABIABABIABABIACABIABABIABABIAAABIACAAIACgBIABgBIABgBIACgBIACgBIACgBIABgBIACAAIACgBIADgBIACgBIADAAIABgBIABgBIADgBIAEAAIACgBIACgBIACAAIAEgBIADAAIAFgBIACgBIABgBIACAAIAGAAIAAAAIADgBIAOAAIACABIABAAIADAAIADABIABABIACABIACABIABABIACABIABAAIACACIACABIABABIAAABIABABIABAAIABABIABgBIAAgBIABgBIACgBIACgBIABgBIACgBIABgBIACgBIADgBIACgBIADgBIACgBIACgBIABgBIACgBIABAAIABgBIACAAIADgBIADgBIACAAIACgBIACAAIABAAIAEgBIACgBIABAAIACAAIADgBIADgBIAFAAIAEgBIAdAAIACABIAGAAIADABIADABIADABIADABIACABIABABIABABIAAAEIAAABIAAACIAAACIAAADIAAADIAAABIABgBIADAAIACgBIAEgBIABAAIADAAIADgBIADgBIACgBIAEgBIADgBIABAAIAEgBIAEAAIAWAAIADAAIABABIACABIABABIACABIACABIACABIABABIABABIACABIABABIAAABIACABIABABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIgBABIgCABIgBABIgBABIgBABIgCABIgBABIAAABIAGAAIADgBIALAAIABgBIACAAIAeAAIACAAIABABIACAAIACABIACABIACAAIABABIABABIACAAIADABIABABIACABIABABIAAABIABABIABABIABABIAAAAIADABIABABIABABIABABIAAABIABABIAAABIAAAAIAAACIAAABIABABIAAABIAAABIAAAAIAAACIAAABIAAABIAAABIAAABIAAAAIAAADIAAABIgBACIAAAAIAAABIAEAAIABgBIABAAIACgBIAHAAIACgBIAgAAIACABIABABIABAAIABABIAAABIAAACIAAACIAAAAIADAAIADgBIACgBIAAAAIACgBIAFgBIACAAIAJAAIACAAIABACIACABIACABIACAAIABABIABABIADACIAAABIABABIAAAAIABACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIgBABIAAABIgCABIgCABIAAABIgBAAIgBABIiOAAg");
	this.shape_3.setTransform(7.4,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree01, new cjs.Rectangle(-55.6,-73.6,111.3,147.3), null);

(lib.apple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#339900").ss(1.5,1,1).p("AhsgzQAmgTAnALQAPAEAQAJIgJgiAA6gkIgBAiAgfg7IgsAUAgfgCIA/gSQgRgQgPgKAAggUQAnAjAmBCAAsA2IApgG");
	this.shape.setTransform(14.2,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1.5,1,1).p("AgRhwIgCgBQACgCgBgBQgUgQgUgJQgVgJgPABQiBAHgqBqQgbBDANBWQAJA5AqBAQAvBJBDApQAKAGARALQANAIAIABQAVAAAZgCQAXgDAlACQB1hSA9hTQBFhggDhoQgOhrhCgcQhAgbh7AoQgDABgEABQgDACgEABQgCAAgBABIAAAAQAAAAgBAAQgCABgCABQgBABAAACQAAABAAAAIgGgCIgGgCQAAgCAAgCQAAgCABgCQALhzBZhOIAeAeQg0ATgXAdQggAngLBQQACABACABQAAAAAAAAAgFhoQgEABgDABQg9AVg9AoAgFhsQAAACAAACAkMlGQBPCdCwgKQhBkri+CYg");
	this.shape_1.setTransform(28.4,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60D824").s().p("Ah+gwQC9iXBAEqIgTAAQigABhKiUgABsBYQgmhCgngjQAnAjAmBCgAArA9IApgGgAA4AEIABghgAggAEIA/gRQgRgQgPgKQAPAKARAQgAhMggIAsgUgAgBgnIgJgiIAJAiQgQgJgPgEIgEgBQgMgDgMAAIAAAAIAAAAQgZAAgYAMQAYgMAZAAIAAAAIAAAAQAMAAAMADIAEABQAPAEAQAJgAgBgnIAAAAg");
	this.shape_2.setTransform(14.3,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BD7D56").s().p("Ag7BkIAHgCIgBADIAAABgAhBBiIAAgEIABgEQALhyBZhNIAeAeQg0ASgWAdQggAmgMBQIAAAEIgHACg");
	this.shape_3.setTransform(33.1,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFA466","#FF3300"],[0,0.671],-28.4,0,28.4,0).s().p("AhCEIQgIAAgNgIIgbgSQhDgpgvhIQgqhAgJg5QgNhVAbhEQAqhqCBgIQAPgBAVAJQAUAJAUAQQAAAAAAABQABAAgBABQAAAAAAABQAAAAgBABIACAAIgBAFIAAADIAGADQg9AUg9ApQA9gpA9gUIAGACIAAgBIABgEIAEgBIABgBIAAAAIADgBIAHgCIAHgCQB7gpBAAcQBCAcAOBsQADBmhFBgQg9BUh1BSQglgDgXADQgVACgSAAIgHAAgAgFjeIAEACIAAABIgEABIAAgEgAgBjbIAAAAg");
	this.shape_4.setTransform(28.4,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.apple, new cjs.Rectangle(-1,-1,58.8,77.6), null);


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tree01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.52,2.52);
	this.instance.shadow = new cjs.Shadow("#000000",4,4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(-150.2,-195.6,310,400), null);


(lib.apple2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.apple14 = new lib.apple();
	this.apple14.parent = this;
	this.apple14.setTransform(0.1,0.2,0.634,0.634,0,0,180,28.4,38);

	this.timeline.addTween(cjs.Tween.get(this.apple14).wait(1));

}).prototype = getMCSymbolPrototype(lib.apple2, new cjs.Rectangle(-18.4,-24.4,37,49), null);


(lib.apple1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.apple08 = new lib.apple();
	this.apple08.parent = this;
	this.apple08.setTransform(0.2,0.2,0.634,0.634,0,0,0,28.6,38);

	this.timeline.addTween(cjs.Tween.get(this.apple08).wait(1));

}).prototype = getMCSymbolPrototype(lib.apple1, new cjs.Rectangle(-18.5,-24.4,37,49), null);


// stage content:
(lib.CCSSMATHKCCB5_1a_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();  
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(62));

	// apples
	this.apple01 = new lib.apple2();
	this.apple01.parent = this;
	this.apple01.setTransform(112.1,112);

	this.apple02 = new lib.apple1();
	this.apple02.parent = this;
	this.apple02.setTransform(299.5,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.apple02},{t:this.apple01}]}).wait(62));

	// tree
	this.instance = new lib.tree();
	this.instance.parent = this;
	this.instance.setTransform(189.9,244.3,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,239,642,482.2);
// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;