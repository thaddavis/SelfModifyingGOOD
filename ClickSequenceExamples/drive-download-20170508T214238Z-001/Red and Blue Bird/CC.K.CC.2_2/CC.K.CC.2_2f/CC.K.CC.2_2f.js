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


(lib._30thirty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBdQgXgdABhAQgBgoAJgZQAIgYARgOQAQgNAYAAQASAAAPAIQANAHAJAOQAKAOAFAUQAEAUABAhQgBApgHAYQgJAZgQANQgRAOgZAAQggAAgTgYgAgehNQgPAWAAA3QAAA4AOATQAMATATAAQATAAAOgTQANgTAAg4QAAg4gNgSQgNgSgUgBQgSAAgMAQg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgMACIAEgXIAEAAQARAAAPgJQAOgKAAgTQAAgPgLgLQgKgKgQAAQgQAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQASAAAQAIQAQAIAJAOQAHAOABAPQgBAPgHAMQgIANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape_1.setTransform(-8.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BhQgVgbAAhGQAAhEAXgeQAVgZAiAAQAjAAAUAZQAYAeAABEQAABFgYAeQgUAZgjAAQgiAAgXgbgAgOhPQgHAFgDAOQgGASAAAqQABArAEAQQAEAQAHAFQAHAGAHAAQAJAAAGgGQAGgFAEgOQAFgSAAgrQAAgqgFgQQgEgQgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_3.setTransform(-9.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._29twentynine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgyBmQgRgPgDgbIAbgDQADAUAKAIQAKAJAPAAQAMAAAKgGQAJgGAHgKQAGgKAEgRQAEgQAAgSIAAgGQgIAOgPAIQgPAJgQAAQgcAAgUgWQgTgTAAgiQAAgiAUgWQAVgVAfAAQAVAAATAMQASAMAKAXQAJAVAAArQAAAqgJAbQgKAZgTAOQgTAOgYAAQgbAAgRgPgAgghOQgOAQAAAYQAAAWAOAOQANANATAAQATAAAMgNQANgOAAgYQAAgYgNgOQgNgPgSAAQgSAAgOAPg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BtQgSgPgFgfIAtgEQACANAHAHQAHAHALAAQAOAAAKgOQAKgNADgqQgSAVgZAAQgdAAgVgWQgUgWAAgjQAAglAWgXQAWgXAiAAQAkABAXAdQAYAcAABBQAABCgZAeQgYAegngBQgdAAgRgPgAgahKQgJAJAAAYQAAAYAKAKQAJALAOAAQAMAAAKgKQAJgLAAgUQAAgXgLgMQgKgMgNAAQgNgBgIALg");
	this.shape_2.setTransform(9.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._28twentyeight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BhQgWgUAAgeQAAgWAMgPQALgPAVgFQgSgGgIgNQgJgLAAgRQAAgZASgRQATgRAdAAQAdAAATASQASARAAAZQAAAQgIALQgIANgSAGQAVAGAMAPQALAQgBAVQAAAdgUAUQgVAUgiAAQghAAgUgUgAghAOQgMANAAAUQgBAMAGALQAGAMALAFQAMAHAMAAQATAAAOgNQANgNAAgUQAAgVgOgNQgOgNgTAAQgUAAgNANgAgahTQgKALAAAOQAAAQAKAKQAKALAQAAQARAAAKgKQAKgLAAgPQAAgPgKgKQgMgLgPAAQgQAAgKAKg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BrQgagUAAgkQAAgUAJgRQALgPAVgKQgTgHgIgNQgIgNAAgRQAAgbATgSQATgSAjAAQAiAAATASQATASAAAbQAAASgJANQgJAMgQAHQAVAJALAPQAKAPAAAVQAAAhgWAVQgVAWgkgBQggAAgWgRgAgZAVQgIALAAAOQAAATAJALQALALANAAQAOAAAKgKQAKgLAAgUQAAgQgKgLQgKgLgOAAQgQABgJAMgAgVhPQgIAJAAANQAAAOAIAHQAIAJANgBQAMABAIgJQAIgHAAgOQAAgNgIgJQgHgHgNAAQgNAAgIAHg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._27twentyseven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgpBxQAAgbALgmQAKgnATgiQASgkAVgYIhvAAIAAgbICTAAIAAAWQgWAXgVAmQgWAmgKApQgJAdgCAig");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AguB4QABgzAUg0QATgzAggpIhpAAIAAgsICfAAIAAAiQgUATgUAlQgVAjgKApQgKApAAAgg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._26twentysix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BbQgWgaAAg7QAAhCAZgdQAVgbAjAAQAcAAARAPQARAQADAaIgbACQgEgQgHgIQgMgMgQAAQgNAAgKAHQgNAKgIATQgHASgBAjQAKgPAPgIQAPgHAPAAQAcgBAUAVQAUAUAAAgQAAAWgKATQgJASgQAKQgRAKgUAAQgiAAgXgagAgdADQgNAOAAAWQAAAPAGAMQAGAOALAHQALAHALAAQASAAANgOQANgPAAgZQAAgYgNgNQgNgMgTAAQgSAAgNAMg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BgQgXgdAAhBQAAhCAYgeQAZgdAnAAQAbAAATAPQASAQAFAdIgtAFQgCgNgHgHQgHgHgLAAQgOAAgKAOQgKANgDAqQARgVAZAAQAeAAAUAWQAVAWAAAjQAAAlgWAXQgWAWgiAAQgkAAgYgcgAgTAHQgJALAAAUQAAAXAKAMQALANAMAAQANAAAJgKQAJgLAAgXQAAgXgKgLQgJgKgOAAQgMAAgKAJg");
	this.shape_2.setTransform(9.6,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._25twentyfive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag0BiQgUgSgDgdIAegDQADAWAMALQAMALARAAQATAAAOgQQAOgPAAgZQAAgYgNgNQgOgOgVAAQgNAAgLAGQgLAGgHAJIgagEIAWh0IBxAAIAAAbIhaAAIgNA9QAVgOAWAAQAeAAAUAVQAVAUAAAhQAAAegSAXQgWAcglAAQggAAgTgRg");
	this.shape.setTransform(8.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag4BoQgVgSgEgeIAugGQACAQALAKQAJAJANAAQANAAALgMQAKgMAAgYQAAgXgKgKQgKgKgQAAQgTAAgRAQIglgGIAXh9IB7AAIAAAsIhXAAIgHApQAQgIAOAAQAfAAAWAWQAWAXAAAkQAAAdgSAYQgXAggqAAQghAAgWgSg");
	this.shape_2.setTransform(9.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._24twentyfour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape.setTransform(8.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_2.setTransform(9.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._23twentythree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgLACIACgXIAFAAQARAAAOgJQAPgKAAgTQAAgPgKgLQgLgKgPAAQgRAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQATAAAPAIQAQAIAIAOQAJAOAAAPQAAAPgJAMQgHANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._22twentytwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape.setTransform(8.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_2.setTransform(9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._21twentyone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgPAJQgRAKgNAEIAAgbQAYgLARgQQARgPAHgPIASAAIAADlg");
	this.shape.setTransform(7.7,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgiAMIAAgrQARgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_2.setTransform(8.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._20twenty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBdQgXgdABhAQgBgoAJgZQAIgYARgOQAQgNAYAAQASAAAPAIQANAHAJAOQAKAOAFAUQAEAUABAhQgBApgHAYQgJAZgQANQgRAOgZAAQggAAgTgYgAgehNQgPAWAAA3QAAA4AOATQAMATATAAQATAAAOgTQANgTAAg4QAAg4gNgSQgNgSgUgBQgSAAgMAQg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BhQgVgbAAhGQAAhEAXgeQAVgZAiAAQAjAAAUAZQAYAeAABEQAABFgYAeQgUAZgjAAQgiAAgXgbgAgOhPQgHAFgDAOQgGASAAAqQABArAEAQQAEAQAHAFQAHAGAHAAQAJAAAGgGQAGgFAEgOQAFgSAAgrQAAgqgFgQQgEgQgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_3.setTransform(-9.9,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.bird3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366FF").s().p("AgJAnQgYgKgPAAQgDgTAAgwQBDADATAKQARAKAAAeQAAATgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABg");
	this.shape.setTransform(369.8,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjNBgQgzgsgegyQgagrAAgcQAAhZBigjQBYggB+AWQB/AWBXA9QBiBEAABWIABAeQgCAigMAbQgkBYh4AAQjSAAiKh1gAicAIQAaASA0AYIBbAAQAfgLAGgZQACgHAAgqIAAgrQgDgSgPgJQgegTiggNg");
	this.shape_1.setTransform(375,34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkIB9Qgygzgdg+QgWgwABgcQgBiAByg1QBmgvCVAbQCSAbBnBRQByBZABBwIACA8QgCAtgOAgQgqBeimAAQkFAAiRiWgAjXi+QhhAjgBBZQAAAcAaArQAfAzAyArQCKB2DSAAQB4AAAkhYQAMgcACghIAAgeQgBhWhihEQhXg+h+gWQg0gJgtAAQhCAAg0ATgAhPA2QgzgZgagRIAAiSQCgAOAdATQAPAJADASIAAAqQAAAqgCAHQgGAZgfAMgAhlgOQAPAAAYAKIA7AAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgUQAAgegRgKQgUgLhDgDQAAAxADATg");
	this.shape_2.setTransform(375.1,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE0000").s().p("AohbHQAIhOAAgjQAAgRgGgGQgDgEgLgFQgqA2gJBbIgRAAQpPhkksjyQgygpgvgxIAjgeQU+IHLUrHQSY0y3GvwQC2AeBAAAQB/AAAhhJQALgYAAgjIgBguQAAhXhYhEQhPg+hxgVQhzgUhOAkQgrAUgVAhIgGAAQA+hbAog9IATgIIEBACQGxB6DwEgQBNBcBfCdQBvC5AnA1QBhCHA9E/QA0ERAADwQAADKhpDnQgjBMgsBKQiSB/AAAQQAAAQALAFQAGADANAAIAFgEQhCBVhPBQQj3D8lYCrQjrB1kOBKQgFgygsABQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgCAAAAAPIAAA0QiZAnikAZgA5pT5IAYAAIgNAMIgLgMg");
	this.shape_3.setTransform(340.7,177.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C58DE").s().p("A5lXLQBwhNBahmQBVhhBdhdQBchdBmhSQBnhUBihdQBjhfBfhhQBbhgBphOQBLg5BLgzIAPAWIABABIADAFIAIALIBCBfQAmAyAoAtIiXCKQkhEDjHB5QiMBXmrDfQh2A+hkA5IgXAMIhRAvIg7AkQAxgoA0gkgAklBYIBMg1QATgPADgBQHwgcHpjJQQbnKv9prQBFhrBdiIIAHgLQAGgCADgDIABgGIgBgCIAEgEQG2AWC3FQQB0DSAAEjQAACMguBcQg3BviKBYQkpC8tjCkIlHAFQhUAFgZAAQgqAAiXgGg");
	this.shape_4.setTransform(190,257.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9933").s().p("AqxFuQEujHGwjfQC5hgDIhfQBAgfBBgfICLhAQg6BJhRByIiBC2IhCBeQhABdg8BaIhMATQhiAZgEAAQh9AIkEAVQjxAUiFAIg");
	this.shape_5.setTransform(278.6,46.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AmubHQAHhOAAgjQAAgRgFgGQgDgEgMgFQgqA2gIBbIgRAAQpPhkksjyQgzgpgugxQC8ikARAAQARAAAVADQAMgEAAgmQAAgSgDgGQgDgEgOgKQhVBHioCYQgwg1gtg9QgTgah/jGIAugmQBZAXB/AAQAZAABYgFIFHgFQNoihE1jGQCSheA8h4QA0hnAAiXQAAk0h1jYQi7lXm+ggQBChgBMhsQAUgJAJgKIgGgNIAbgnIBhiJICAi3QCWjXBJhwIATgIIEAACQE6BZDVCwIAJAHQBLA/A/BLQBNBcBeCdQBwC5AmA1QBiCHA8E/QA0ERAADwQAADKhpDnQgjBMgrBKQiTB/AAAQQAAAQAMAFQAFADANAAIAGgEQhCBVhPBQQj3D8lZCrQjqB1kOBKQgFgygtABQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgDAAAAAPIAAA0QiZAnijAZgAD05bQhYAoAABiQAAAWARAlQAWAwAnAoQBvBzDJAAQCAAAAghJQALgYABgjIgCguQAAhXhXhEQhQg+hxgVQgpgHglAAQhBAAgxAXg");
	this.shape_6.setTransform(329.2,177.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3366FF").s().p("EggdAOoQFylfI1mwICmDuQAmAyAoAtIiXCKQkhECjHB6QiMBWmrDgQksCdizB4QAnjTHTm8gAv7AxQCtiRCcilQCCiLB1iXQByiTB/i/IDYlRQBViJCIjGIAHgLQAGgCACgDIACgHIgBgBIAEgFQG1AXC4FQQB0DSAAEjQAACMguBcQg3BviKBYQkqC8thCkIlHAFQhVAFgZAAQhlAAhHgOgEAkhgD3QBpjsAAjNQAAkNgsj3QgYiIgihqIA5A6QBoB4ApB6QAeBcAHBcQADAjAACJIACBtQACA5gFAjQgNBehRB5QgsBCiFB4IAbg7g");
	this.shape_7.setTransform(264.7,260.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("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");
	this.shape_8.setTransform(263.4,239.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bird3, new cjs.Rectangle(0,0,526.9,479.9), null);


(lib.Bird2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACIKHQklgkiCgaQhMAJixAZIjlAgQgQAAgEgDIgDgCQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEgCAAgPQAAgjDcgaQBpgMCtgOIgckPIAArzIgDAAIAAgnIADABIAAiAIgKgSQAQgJAUgPQAKAOAEAPIAACUIAFABIgDAQIgBAWIgBAAIAALfIAYCgIANBaIEkgDQAjgEDrgLIAAgCIHWAAQAGACAJAAQAFACAAAQQAAAQgFADIgPABInxACQjfANgoAFIkJAAQAEAEACAGIgBAEQBRAECfAPQDXAVHdAzIAIAPQgCAGgMAHQgOAHgRAAQidAAlqgsg");
	this.shape.setTransform(223.1,373.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AkhJRQAgkfB/luQBGjIC5m8QAyBiA+EUQA1DyAAA0QAAA4kLFEQjQD9hoBsg");
	this.shape_1.setTransform(349,100.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlGMPIgDgDIAAi0QAljIAiiKQAwjAA6iXQAfhOCGlLQBrkEAAgOQAAgOAPgEQAQgFARAIQAPB0BMFNQBHE6AAAGQnuMbiMAAQgPAAgHgCgAiCgnQh/FuggEeIAABwQBohsDQj9QELlEAAg4QAAgzg1jyQg+kVgyhiQi5G8hGDJg");
	this.shape_2.setTransform(349,98.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3366FF").s().p("AgsAIQgBgNAJgHQAIgHAMABIAEAAIgCgDQgFgIgDAAQgDACgCgBIAhgMIANgEQAJgDAHACQAGAOADAQQADAWgHALIhEAdQgOgYgCgPg");
	this.shape_3.setTransform(397.4,58.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmBCQgJgFgHgMIgGgMIgJgVIgCgGQgJgRgHgMQgHgMABgCIADAAQALgEgBgCQBAgjAogDQARgCANAFIABAAQAWAHAEATQAOAXgCAeQgCAmgeAMIg8AYQgbgGgMgHgAgZgKQgJAHABANQACAPAOAYIBEgdQAHgLgDgWQgDgQgGgOQgHgCgJADIgNAEIghAMQACABADgCQADAAAFAIIACADIgEAAIgCAAQgKAAgIAGg");
	this.shape_4.setTransform(396.3,58.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhjCjQgQgUgNgVIgIgKIgJgOQgSgZgKgSQgXgqAEgjQAOhqD8hUQAiACAWAUIADADQAFAFAHAKIALARIABACQAHALAKAiQAQAxADAsQAICJhyAsIh9AvQgZgHgkgrg");
	this.shape_5.setTransform(396.7,58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah5FEQgUgUgPgcIAAgBIgLgZIgCgDIgphDQgVgsADgjQAKhhDFhbQAwgPAmgDIAZADIAOgGIAHAFQASAEANAIQAQAIAMAQIACAEIAIAMIAEALIAMAJQABAIAFALQANAXAEANIgFgEQATA2gEA7QgLCUi0BFQgkAOgeAAQg1AAgogogAjBBpQgEAkAXAqQAKASASAYIAKAOIAHALQANAUARAVQAjAqAZAIIB9gvQBzgsgIiKQgDgtgQgwQgLghgHgMIgBgBIgLgRQgHgLgEgEIgDgDQgWgUgigDQj9BVgOBpgAgoi0IADgFIAFAEIgIACIAAgBgABVlrIABAAIgBACg");
	this.shape_6.setTransform(396.7,45.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3366FF").s().p("AgxgGQAHgOANgEQALgDALAEIADACIAAgDQAAgKgDgCQgEABgBgBIAmABIAOABQALABAGADQgCARgIAQQgKAYgNAIIhQACQAAgdAHgOg");
	this.shape_7.setTransform(324,63.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag5BNQgXgRgHgLQgFgJAAgOIABgPIADgXIACgGQADgWAAgPQAAgOACgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQANAAAAgCQBQgLAoAMQARAGAKAJIAAAAQARAQgHAVQAAAagUAeQgXAlgkACgAgfgWQgMAEgHAOQgHAOAAAdIBQgCQANgIAKgYQAHgQADgRQgGgDgLgBIgOgBIgmgBQABABAEgBQADACAAAKIAAADIgDgCQgGgCgHAAIgKABg");
	this.shape_8.setTransform(324.1,63.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AizC9QgTgRgIg4QgEgagBgZIgBgOIgBgRQgDgfABgVQACgyAagiQBKhkEdANQAfAQAJAcIACAEIACATIAAAVIAAACQAAAOgJAmQgNA1gYAuQhHCLiDAAg");
	this.shape_9.setTransform(324.7,64.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Aj4DAQgHgcACggIAAgBIAEgeIAAgEIABhRQAEgzAYghQBBhdDugPQA2ADAlALQAJAHANAGIASAAIACAIQAPAKAIANQAKAPACATIAAAGIAAAOIgBANIAFANQgEAKgBALQgDAdgDAOIgCgGQgOA9glA5QhfCOjRAAQhwAAgXhYgAi9gzQgaAigCAyQgBAVADAfIABASIABANQABAZAEAbQAIA4ATAQICTACQCDABBHiMQAYgtANg2QAJgmAAgOIAAgBIAAgWIgCgTIgCgEQgJgcgfgQQgigBgfAAQjlAAhBBYgAB1kSIABgBQADgEADAAIABAFIgIAAg");
	this.shape_10.setTransform(324.9,59.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C58DE").s().p("AqdJ0Qh5g1iCg/IAUgRQNFDGGJjkQHRmTlZptIAXgQQDfigBUhAQARBLAxC6QBLFNAAELQAADdh/CxQj0FUp0AAQi/AAmQisg");
	this.shape_11.setTransform(187.9,175.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3366FF").s().p("AqdJ0Qh5g1iCg/IGPlQQD+jWC9iKQBRg9HWlSQDfigBUhAQARBLAxC6QBLFNAAELQAADdh/CxQj0FUp0AAQi/AAmQisg");
	this.shape_12.setTransform(187.9,175.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AqfK4QiCg8h5hFQhmg4AAgFQAAgPAFgHQAHgNAXAAIBXAsQEmkwISmGQCnh8EyjZQEcjICJhkIgBgMQAAgaACgWQATALASAWIABgBIAOAFQAGADAAAQIgDAEQA/BpArEGQAvEbAAD2QAABZgbBjQgpCXhbB3QkNFbp3AAQjvAAmOi5gAIFovQnWFShRA9Qi9CLj+DVImPFQQCCBAB5A0QGQCsC/AAQJ0AAD0lUQB/ixAAjcQAAkLhLlNQgxi6gRhMQhUBAjfCgg");
	this.shape_13.setTransform(183.5,173.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C58DE").s().p("Aj7GPQBhjSCakpQCbkrAqkPIArAnQA/A2BOA0Ig8CLQiTFEhWB/Ih9DAQhNB2g3BLQhkCFhvBoQAfhGBijSg");
	this.shape_14.setTransform(58.9,334.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DE0000").s().p("Ao9VfQlThXkViaQhMgqhCgtQALg1ABgtQUqIRJpqYQJpqZo3ylQEJi+CHhmQBwhUBKg9IAOAcQBSCjAcBBQCgFwAAFyQAACfgrFmQgtFvgCB4QgBBQgqCNQgzCqhTCRQjmGVleAGIl1AFQgfAFgZAAQm4AAmNhngA4DNzQBaAcBWAZIgeBFQhRg7hBg/g");
	this.shape_15.setTransform(239,174.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3366FF").s().p("AnGKwQAGjcBhkeQBJjXCGkSQBejCC/jiIAxg5QAVAcAbAdQAiAlAqAkQA/A2BOA0Ig8CLQiTFEhWB/Ih+DAQhMB2g3BLQikDbjDCLg");
	this.shape_16.setTransform(51.5,335.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("A/KfXIAAg1QAAjGBfkhQBckaChkqQB1jbCFi+QAmg0AmgzQhAhoAAhrQAAgPABgHIACgEIAGgFQAGgFAPAAQBGBBAAAEQAAAMgKAFQgKAEAAANQAAAmAbAyQDUkLDTiZQBmhKC3ipQCrifCShkQAwghFWjcQD7ihB3hjQCyiUCchzQBthRBxhMQBLgyBMgvQAqgaEYj1QAsgkAkgcQgCgJAAgGIABgPQADgDABgFIAYASQCXhtAABBQAAAYhaBQQA5BFAsBnQAMAdAsB3QAiBaAbA0QA5DIAKBqQAFAsAADkQAAH6haIXQgnDtgHAcQgjCdhDBxQixEtnlCLIl3AFQgjAFgZAAQkQAAlchKQllhMk4iAQi2hLiOhTQgjB0hQCWQh5DljKEQQiwDsioCzQiiCtgqAAQguAAgJgygA06HeQjADjheDBQiGEThJDXQhhEegGDcIAABiQDDiMCkjbQA4hKBNh2IB+jBQBVh/CTlFIA8iLQhNgzg/g2QgrglgiglQgagcgWgdIgxA5gAufIEQADAHAAAOQAAAwgNA5QBDAtBMAqQEVCaFTBXQGMBnG4AAQAaAAAfgFIF1gFQFegGDmmVQBTiRAyiqQAriNABhQQACh3AslvQAslnAAifQAAlyiglwQgchBhSijIgOgcQhKA9hwBUQiIBmkJC+IltEEQpzG8jsCvQnGFMiuChQkdEHilC0QAbAlApAqIAeAdQBBA/BQA7IAthmQAVAAAGASg");
	this.shape_17.setTransform(199.5,215);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AoMVfQlThXkViaQhMgqhCgtQAMg5AAgwQAAgOgCgHQgHgSgVAAIgsBmQhRg7hBg/IgegdQgogqgcglQCli0EekIQCuihHFlLQDtivJym8IFukEQEJi+CHhmQBwhUBKg9IAOAcQBSCjAcBBQCgFwAAFyQAACfgrFmQgtFvgCB4QgBBQgqCNQgzCqhTCRQjmGVleAGIl1AFQgfAFgZAAQm4AAmNhng");
	this.shape_18.setTransform(234.1,174.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AL3IYQjvhBg9gJQllgwmagyIgCAGQgLAAg6AGQhBAHgxAHIksAAIgMgFIgHgIQAXgdAfgJQAQgFAegEIEFAAQgEgOgFgVIgMgNQABgFADgDIAEgDQgOhPgHiWIgIlAQAAhdACgnIABgSQAAgSgFgOIAAgCIAHAAQAFg4ALgfQAPAGAFAOIAAHvIAeDRIAOBaIFmACIBggHIIGgDQAugDCVgFIAUgBQACAYAEARIg9ACQiiAGgjADIoBACIhgAIIlBAAIAAAQQA9gPCbAVQBnAOBiAVQB5ALBSALIDmAfQAeADDmA9IBrAcIgEAmIgzgOg");
	this.shape_19.setTransform(303.5,375.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bird2, new cjs.Rectangle(0,9.3,419.7,433.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.122)").s().p("EglEAXuQEli3BghFQC6iFB9iOQCQikB0jqQAeg9AJgeQASg/gIhKQgBgCAYgTIAlgcQAggcAFgBQAFgBAZgTQAGA6ALAyQAbB/A2BtIANAZIAJAQIgtATIgKAEQgHAOgrAvIgIAJIAmgNIjBCvIgDACQhQBIhCA4Qi8ChhPAnQhzA5u5IoQDMiSEki2gAhbS3UAsJgHegKkgkDQCNhYCPg/QCPg/BhgTIAGABIAAgBQAAgTAbAAIABgEIAPAAIAZgLIAGAQIgMgBIAEACQAOAFAMASIAAASQALAcANAkIATA3QgvgVhNgEQkRARhKBqQgcAngEA6IgBBeIAAAEIgEAiIAAABQgDAlAIAgQAbBkB/AAQDwAABsiiQArhBAQhGQATBMAOBOIARBiQgfALAAAEQAAAPADADIAEACIAfAAQARB0AHBWQAIBigBDMQAADxhyEyQiGFhjvEgQkcFWoOEAQlFCfouAAQlaAAmyg9gEApQgcPIgBABIAJACIgCgGQgCAAgEADgA36HvQAagXgnAmQAHgJAGgGgAl1FAQPKjhEonWQBwiyAFjKQADifg+iVIB/g2QBrgwC4hWQgDB5gNBxIgHA2IgSCNQgMBcgWBKQg9DXioDeQgZAXghAjQhBBFhHBcQgsAYh+BhQhjBLh4AtQhSAhg2AUQhmAlhZATQhoAVhnAAQihAAiggzg");
	this.shape.setTransform(292.1,198.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3366FF").s().p("AoCMjQhRgShEgXQgNgOgZgMQgegPgaACQhlgxg8hCQgMgOgKgNIgFgIQhEhggFitIAdgUQE2jTEdiiQHfkROmm4QgDB5gNBxIgGA2QgsE0h5DpQkoJCrzDGg");
	this.shape_1.setTransform(327,153.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("An4OGQhXgRhJgXIgKABQhigegWgXIAAgBQhkgzg9hFQgMgNgKgNIgBgCQhKhlgLisIgzAjIAAgOIAzgjIgBgoQAAgfABgZIArAAQgEAcAAAYIABAQIDViVQE3jVBmg/QHCkVPCm6IAAgUQAAgggIgfIAegNIASgHIAAAqIAAArIAigQIAagLIAAAzIg9AcQgDB9gLBtIgGA2IgKBFQgtEZhyDfQkuJOsdDXgArCMZQAZAMANAOQBEAXBRASIEnAAQLzjGEopCQB5jpAsk0IAGg2QANhxADh5QumG4nfERQkdCik2DTIgdAUQAFCtBEBgIAFAIQAKANAMAOQA8BCBlAxIADgBQAZAAAcAOg");
	this.shape_2.setTransform(327.5,147.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AL3IYQjuhBg+gJQllgwmagyIgCAGQgLAAg7AGQhAAHgwAHIksAAIgNgFIgIgIQAYgdAegJQARgFAdgEIEHAAQgGgOgDgVIgOgNQACgFAEgDIADgDQgNhPgIiWIgHlAQgBhdACgnIAAgSQAAgSgEgOIAAgCIAHAAQAEg4ALgfQAQAGAEAOIAAHvIAfDRIANBaIFnACIBhgHIIFgDQAugDCVgFIATgBQACAYAFARIg9ACQiiAGgkADIoAACIhhAIIk/AAIAAAQQA8gPCbAVQBnAOBiAVQB5ALBSALIDlAfQAgADDlA9IBqAcIgDAmIgzgOg");
	this.shape_3.setTransform(399.4,368.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACIKHQklgkiCgaQhMAJixAZIjlAgQgQAAgEgDIgCgCQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgEgCAAgPQAAgjDbgaQBqgMCtgOIgckPIAArzIgCAAIAAgnIACABIAAiAIgKgSQAQgJAUgPQAKAOAEAPIAACUIAFABIgDAQIgBAWIgBAAIAALfIAYCgIANBaIEkgDQAigEDsgLIAAgCIHWAAQAGACAJAAQAFACAAAQQAAAQgFADIgPABInxACQjfANgoAFIkJAAQAEAEACAGIgBAEQBRAECfAPQDWAVHfAzIAHAPQgCAGgMAHQgOAHgRAAQieAAlpgsg");
	this.shape_4.setTransform(316,370.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3366FF").s().p("Ag4gHQAIgRAOgEQANgDANAFIAEACIAAgEQAAgMgEgBQgEABgCgBIAsABIARAAQAMACAGAEQgDASgIATQgLAcgPAJIhcACQAAggAIgRg");
	this.shape_5.setTransform(545.5,54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhBBYQgagTgIgNQgGgKAAgQIABgRIAEgaIABgIQAEgZAAgRQAAgPACgCQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAPAAAAgCQBbgMAuAOQATAGALAKIABABQATASgIAYQAAAegWAiQgbAqgpACgAgjgZQgOAEgIAQQgIARAAAhIBbgCQAQgJALgcQAIgTADgSQgHgEgMgCIgRgBIgrgBQABACAFgBQADABABAMIAAAEIgEgCQgIgDgHAAQgGAAgFABg");
	this.shape_6.setTransform(545.6,54.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AoNGZIgGgpIgeAAIgEgCQgEgDAAgPQAAgEAggLIgRhhQgOhOgThNIgBAGQgDgbgehjIgBgFIgBgFIgCgFQgOgvgIgSIACABIgTg3QgNgjgLgdIAAgSQgMgSgOgFIgEgCIAMABIgCgGIAqAAIACAJQEEAUCRAZQCHAYDMBCQAzANB5AZQB6AZCKArQCLAqBEAsQh8Asi4AkQjlAshDASIlKBiQirA0hsAVIAGAtgAqRjwQALA8AMAbIASAyIACACIAAABQAAAHANAnQANAkAKARIAAABIAHATQAoBuAKA+IAVCCQBsgiEVhIQHdh8EVgwIAKgFQirghingvQixg1hdgaQkbhOmhgwIACAHgAp7hHIAAgBIABACgAnamYIACAAIgDABg");
	this.shape_7.setTransform(629,43.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9933").s().p("AoECaQgKg9gohuIgHgTIAAgBQgKgRgMglQgNgnAAgHIAAAAIgDgCIgRgzQgMgagMg8IgBgIQGgAwEbBPQBdAZCxA1QCoAwCqAhIgKAFQkVAwndB8QkVBIhsAiIgViDg");
	this.shape_8.setTransform(628.4,46.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjNDYQgVgTgKhAQgFgfgBgcIAAgQIgCgUQgDgjABgYQADg5AdgnQBUhyFHAPQAiASALAgIACAFIACAVIABAYIAAADQAAAQgLArQgPA9gbA0QhRCfiWAAg");
	this.shape_9.setTransform(542.3,54.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AlOElQgIgfADglIAAgCIAEghIAAgEIABheQAEg6AcgmQBKhqEQgSQA+AEAqAOIAZAOIAVAAIADAJQAQALAKAPQALARACAXIAAAFIAAARIgBAOIAFAPQgEAKgBAOQgDAhgEARIgCgHQgQBGgrBAQhsCjjvAAQiAAAgahlgAkLAPQgdAngCA5QgBAZADAjIABAUIABAQQABAcAEAfQAKBAAWATICnACQCWAABSifQAag0APg+QALgrAAgQIAAgDIAAgXIgDgVIgBgFQgLgggjgSQgngCgkAAQkFAAhLBkgABTjwIABgBQAEgDADgBIABAGIgJgBgAFTmIIACgBIgDACg");
	this.shape_10.setTransform(547.6,41.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag5BQIgGgCIAAg1IAqgzQAqgbAqgdQgrA6goA5IAFABQAIAAAQgBQAAAFAHAPIgHAWQgFAAgKAEQgMAEgOAAQgQAAgJgDg");
	this.shape_11.setTransform(126.4,322.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AuuNmIgDgCQgEgDAAgPQAAicJTpBQDCi6DkjOQCoiXA2grQAGADAJAAQAFACAAAPQAAAEgGAJQCtiJD9i5QgEgxgDg5IAHgFIAhAAIAFBTIAHgFIgEAXIAAABQgCAMgBAMIAGAFQAGAxAJArQAZB3AxBmIANAZIAQAdIAmgSIAOAFQAGADAAAQQAAAGgGAHQgKgCgVAPQgXAQgJAPIgDgFIgQAHQg0Avg8BAIiLCZQhrBth/BYQgqAcgsAbQg0Afg2AaQj9B/lCC4QhxBBmCDjgAt3MxQE1izCyhlQE7izD/iAQBOgnC9igQBBg3BRhIIACgCIDCivIgnAMIAIgIQAsgwAHgNIAKgFIAtgTIgJgQIgNgYQg3htgbiAQgLgxgGg7QhQA/heBQIjdDAQgNALhrBnQgiAZgoAeQhtBWhhBZIgjAgIgUAEQgTAUgNAEIgDAAQnsHWjzFbg");
	this.shape_12.setTransform(95,298.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3366FF").s().p("AiHgnIADABQANgFAUgUIATgEIAjggQBhhZBthWQAogeAigZQBrhnANgLIDdjAQBehQBQg/QAGA7ALAxQAbCAA3BtIANAYIAJAQIgtATIgKAFQgHANgsAwIgIAIIAngMIjCCvIgCACQhRBIhBA4Qi9CfhOAnQj/CAk7CzQiyBlk1CzQDzlbHsnWg");
	this.shape_13.setTransform(93.3,302.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AiGYFIhQAAIAAgEIgjAAIgBAEImjAAQhfgLhZgPIgeAAQgPgKgQgHIgHAAIgDAAIAAAEQqBh8kOlOIgSgXQgSgYgRgaIACgCIgIgOIgNgaIgFADIgQgdIgNgZQgxhmgZh3QgMg4gHhCIAZgTQBahDBUg+QBahBBUg8IB2hTIAOgIQACgDAFgDIAKgHIAIgGIABgBIABAAIAbgTQE2jSEeiiQHZkNOQmwQAGgHAegOQAVgJASgFICxhTIEmiIIAZgLIKOktIAQgHIAGABIAAgBIAAgCQATgEAcgLIASgHIADgCIADgBIABABQAHACAAAMIAAADIACACIAEATQAIAgAJAKQADAPAMAfIAIAiIAAACIABABQAGAMAGARIADATIAFAGIAHAZQAEAQAFAKIAAAAIACAGIAPAjQARAoADApQAPBDANBDIARBhIgDABQACAOAAATIAAABIAHAAQAMBPAHBCIAFA6QAIBhAADMQAACEgiCWQgdB9g0CLQiFFijwEgQkcFWmDC6QmrDOoLAAIg8gBgAcY38IAAgBIAAAAg");
	this.shape_14.setTransform(375.5,168.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgjOAYrIgGgCIAAg1IApg0QAsgbAqgdQgrA6gpA6IAEABQAJAAARgBQAAAFAHAPIgHAWQgFAAgMAEQgMAEgOAAQgPAAgJgDgA5RQBQgXghgOgZIAAAUQgDAJgLAAQgOAAgOgIQgMgHAAgFQAAgGADgDQAEgFAOgFQgMglgagbQgVgXAAgLQAAgYAZASQAjAaAHAAQADAAAQAWIAfArQAJAKADAHIAEAGIAyBKIAKAQQAAAJgGADQgFADgMAAQgJAAgggvgEAjKgUUQgDgGgBgIIgEgPIgDgLIgEgJQgSghAAgLIAAgBIACgEQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQADADAAADQAAAAABABQAAAAAAAAQABAAAAAAQABAAABAAQACAAAQAzIAPA0QAAADgDABQgFgFgDgIgEAh7gYHIgDgLIgDgOIAAgDQACgTAlARQAkARAHANIgBAHQAAACgIAAQgIAAgGgEIgOgKIgEAFQgFAFgEACQAEADgCAIQgBAIgJAAQgKAAgIgag");
	this.shape_15.setTransform(346.1,172.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ARVelIADAAIgDATgAiqULIgpAAIAAACIgmAAIAAgCIl9AAQh0gNhpgSQgRgHgdgHQgpgLgUAFQpWh7kTktIgWgaIgzhJIgEgHQgDgHgJgKIgegrIgGgJIgNgZQg2htgbiAIgLg8QADgGAAgGIgGgkIgGghQAAgHgDgHQgDglgBgoIAHgGIAgAAIAGBUIBDgxICGhhQBWg+BYg8IB2hTIAAgBIATgNIANgKIACgBIAEgCIADgDIDUiTQE3jWBmg/QHAkUO8m3QAIgDAfgQIAIgFIAAACIAjgQICThCIEniFIGLiyIEdiBIAngSIALgGIAEgBIATgJQgYgrgQAAQgPAAgJgDIgFgCIAAg1QBTgOAiBdIAygXQAZACAXAEIAUACIhPAlIgeAOIAIAmIABAAIAAADIADAOIAAAHQAJAaADAOIAKAbQAWBAADAUIADACQAAAMARAhIAIAUIADAPQABAIAEAGIgBAFIAHATQAoBvAKA9IANBQQgCAFAAAIIAPA5IABABIgBAIIABAZQABAHACAFIAQB+IADAhQANCNABC9QgBB8gkCbQgdB1gxCHQiLF2jxEwQknF1mQDAQmPDBnfAAQhZAAhcgHgAjTTcIAAAFIBQAAQIvAMHEjZQGDi6EclWQDvkgCGlhQA0iLAdh+QAhiXAAiEQABjLgIhiIgFg6QgHhBgMhPIgHAAIAAgCQAAgTgCgNIACgBIgRhiQgMhDgQhCQgCgqgRgnIgPgjIgCgGIAAgBQgFgJgFgQIgGgaIgFgGIgEgSQgFgRgHgNIAAgBIAAgBIgIgjQgMgegEgQQgIgJgJghIgDgTIgCgCIAAgDQAAgMgHgBIgBgCIgDACIgDABIgSAHQgcAMgTAEIAAACIAAAAIgGAAIgQAHIqOEsIgaAMIklCIIixBTQgSAFgVAJQgfANgFAIQuRGvnZENQkdCik2DUIgcASIAAABIgBABIgIAGIgLAGQgEAEgCACIgOAJIh2BTQhVA6hZBCQhUA9haBEIgZATQAGBCAMA3QAZB3AyBnIANAYIAQAdIAEgCIAOAaIAIAOIgDABQASAaASAZIASAXQEOFNKAB8IAAgDIAEAAIAHAAQAQAHAPAJIAeAAQBYAPBgAMIGjAAIAAgFgAcb8hIABAAIAAAAgEAgPgehIACgBIgDACg");
	this.shape_16.setTransform(375.2,197.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,700.9,439.8), null);


// stage content:
(lib.CCKCC2_2f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		this.twenty20.addEventListener("click", fl_ClickToGoToAndStopAtFrame_53.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_53()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.twentyone21.addEventListener("click", fl_ClickToGoToAndStopAtFrame_54.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_54()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.twentytwo22.addEventListener("click", fl_ClickToGoToAndStopAtFrame_55.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_55()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.twentythree23.addEventListener("click", fl_ClickToGoToAndStopAtFrame_56.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_56()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.twentyfour24.addEventListener("click", fl_ClickToGoToAndStopAtFrame_57.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_57()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.twentyfive25.addEventListener("click", fl_ClickToGoToAndStopAtFrame_58.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_58()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.twentysix26.addEventListener("click", fl_ClickToGoToAndStopAtFrame_59.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_59()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.twentyseven27.addEventListener("click", fl_ClickToGoToAndStopAtFrame_60.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_60()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.twentyeight28.addEventListener("click", fl_ClickToGoToAndStopAtFrame_61.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_61()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.twentynine29.addEventListener("click", fl_ClickToGoToAndStopAtFrame_62.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_62()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.thirty30.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(73));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(83));

	// numbers ALL
	this.thirty30 = new lib._30thirty();
	this.thirty30.parent = this;
	this.thirty30.setTransform(83.1,377.6);
	new cjs.ButtonHelper(this.thirty30, 0, 1, 2, false, new lib._30thirty(), 3);

	this.twentynine29 = new lib._29twentynine();
	this.twentynine29.parent = this;
	this.twentynine29.setTransform(91.1,262.1);
	new cjs.ButtonHelper(this.twentynine29, 0, 1, 2, false, new lib._29twentynine(), 3);

	this.twentyeight28 = new lib._28twentyeight();
	this.twentyeight28.parent = this;
	this.twentyeight28.setTransform(218,160.6);
	new cjs.ButtonHelper(this.twentyeight28, 0, 1, 2, false, new lib._28twentyeight(), 3);

	this.twentyseven27 = new lib._27twentyseven();
	this.twentyseven27.parent = this;
	this.twentyseven27.setTransform(333,105.1);
	new cjs.ButtonHelper(this.twentyseven27, 0, 1, 2, false, new lib._27twentyseven(), 3);

	this.twentysix26 = new lib._26twentysix();
	this.twentysix26.parent = this;
	this.twentysix26.setTransform(443,52.2);
	new cjs.ButtonHelper(this.twentysix26, 0, 1, 2, false, new lib._26twentysix(), 3);

	this.twentyfive25 = new lib._25twentyfive();
	this.twentyfive25.parent = this;
	this.twentyfive25.setTransform(552.5,136.2);
	new cjs.ButtonHelper(this.twentyfive25, 0, 1, 2, false, new lib._25twentyfive(), 3);

	this.twentyfour24 = new lib._24twentyfour();
	this.twentyfour24.parent = this;
	this.twentyfour24.setTransform(503,266.6);
	new cjs.ButtonHelper(this.twentyfour24, 0, 1, 2, false, new lib._24twentyfour(), 3);

	this.twentythree23 = new lib._23twentythree();
	this.twentythree23.parent = this;
	this.twentythree23.setTransform(354,250.6);
	new cjs.ButtonHelper(this.twentythree23, 0, 1, 2, false, new lib._23twentythree(), 3);

	this.twentytwo22 = new lib._22twentytwo();
	this.twentytwo22.parent = this;
	this.twentytwo22.setTransform(376.5,346.1);
	new cjs.ButtonHelper(this.twentytwo22, 0, 1, 2, false, new lib._22twentytwo(), 3);

	this.twentyone21 = new lib._21twentyone();
	this.twentyone21.parent = this;
	this.twentyone21.setTransform(383,426.1);
	new cjs.ButtonHelper(this.twentyone21, 0, 1, 2, false, new lib._21twentyone(), 3);

	this.twenty20 = new lib._20twenty();
	this.twenty20.parent = this;
	this.twenty20.setTransform(223.5,365.6);
	new cjs.ButtonHelper(this.twenty20, 0, 1, 2, false, new lib._20twenty(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.twenty20},{t:this.twentyone21},{t:this.twentytwo22},{t:this.twentythree23},{t:this.twentyfour24},{t:this.twentyfive25},{t:this.twentysix26},{t:this.twentyseven27},{t:this.twentyeight28},{t:this.twentynine29},{t:this.thirty30}]}).to({state:[]},12).wait(71));

	// numbers
	this.twentyone21_1 = new lib._21twentyone();
	this.twentyone21_1.parent = this;
	this.twentyone21_1.setTransform(383,426.1);
	new cjs.ButtonHelper(this.twentyone21_1, 0, 1, 2, false, new lib._21twentyone(), 3);

	this.twentytwo22_1 = new lib._22twentytwo();
	this.twentytwo22_1.parent = this;
	this.twentytwo22_1.setTransform(376.5,346.1);
	new cjs.ButtonHelper(this.twentytwo22_1, 0, 1, 2, false, new lib._22twentytwo(), 3);

	this.twentythree23_1 = new lib._23twentythree();
	this.twentythree23_1.parent = this;
	this.twentythree23_1.setTransform(354,250.6);
	new cjs.ButtonHelper(this.twentythree23_1, 0, 1, 2, false, new lib._23twentythree(), 3);

	this.twentyfour24_1 = new lib._24twentyfour();
	this.twentyfour24_1.parent = this;
	this.twentyfour24_1.setTransform(503,266.6);
	new cjs.ButtonHelper(this.twentyfour24_1, 0, 1, 2, false, new lib._24twentyfour(), 3);

	this.twentyfive25_1 = new lib._25twentyfive();
	this.twentyfive25_1.parent = this;
	this.twentyfive25_1.setTransform(552.5,136.2);
	new cjs.ButtonHelper(this.twentyfive25_1, 0, 1, 2, false, new lib._25twentyfive(), 3);

	this.twentysix26_1 = new lib._26twentysix();
	this.twentysix26_1.parent = this;
	this.twentysix26_1.setTransform(443,52.2);
	new cjs.ButtonHelper(this.twentysix26_1, 0, 1, 2, false, new lib._26twentysix(), 3);

	this.twentyseven27_1 = new lib._27twentyseven();
	this.twentyseven27_1.parent = this;
	this.twentyseven27_1.setTransform(333,105.1);
	new cjs.ButtonHelper(this.twentyseven27_1, 0, 1, 2, false, new lib._27twentyseven(), 3);

	this.twentyeight28_1 = new lib._28twentyeight();
	this.twentyeight28_1.parent = this;
	this.twentyeight28_1.setTransform(218,160.6);
	new cjs.ButtonHelper(this.twentyeight28_1, 0, 1, 2, false, new lib._28twentyeight(), 3);

	this.twentynine29_1 = new lib._29twentynine();
	this.twentynine29_1.parent = this;
	this.twentynine29_1.setTransform(91.1,262.1);
	new cjs.ButtonHelper(this.twentynine29_1, 0, 1, 2, false, new lib._29twentynine(), 3);

	this.thirty30_1 = new lib._30thirty();
	this.thirty30_1.parent = this;
	this.thirty30_1.setTransform(83.1,377.6);
	new cjs.ButtonHelper(this.thirty30_1, 0, 1, 2, false, new lib._30thirty(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.twentyone21_1}]},1).to({state:[{t:this.twentytwo22_1}]},1).to({state:[{t:this.twentythree23_1}]},1).to({state:[{t:this.twentyfour24_1}]},1).to({state:[{t:this.twentyfive25_1}]},1).to({state:[{t:this.twentysix26_1}]},1).to({state:[{t:this.twentyseven27_1}]},1).to({state:[{t:this.twentyeight28_1}]},1).to({state:[{t:this.twentynine29_1}]},1).to({state:[{t:this.thirty30_1}]},1).to({state:[]},2).wait(71));

	// bird LINES
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EAoZglfIJnAAIAAC5EAyAgR4MAAAA3YMhj/AAAMAAAhK/MA0uAAA");
	this.shape_1.setTransform(320,240);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgwgGIgWAAIABgEQBHAKBGAGIAAAFQg+gIg6gJg");
	this.shape_2.setTransform(269.9,319.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACyIvIhTgLIgUgDQilgVhUgRQg/AHiTAVIi/AbQgMAAgFgCIgBgCQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgEgBAAgNQAAgdC3gVQBYgKCQgMIgYjiIAApzIgCAAIAAgGQgSgDgLADQkig8jHhuIAAgmQDOB5E4A9IACAAIAAhqIgIgPQANgIAQgMQAJALAEANIAABxIgjAGIAnAGIgBADIAXAAQA6AKA+AIIAAAgQg/gIg7gKQgJgFgOgDIAAADIgBAAIAAJjIAUCGIALBKIDygCQAdgEDEgIIAAgCIGGAAQAGACAHAAQAEABAAANQAAAOgEACIgNABImdACQidAJgwAFIgOABIjbAAQADADABAFIgBADQBEADCDANIACABIAJAAIAUACQC1ASFtAnIAGAMQgCAFgKAGQgLAGgOAAQiEAAksgkg");
	this.shape_3.setTransform(280,359.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_4.setTransform(320,240);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ABAANIghgEQg9gIg6gJIgXAAIACgEQBIAKBEAGIBRAJg");
	this.shape_5.setTransform(273.9,320);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjFIvIhTgLIgOgCIgGgBQiRgThSgPIgEgBIgTgDQg+AHiTAVIi/AbQgNAAgEgCIgCgCQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgDgBAAgNQgBgdC3gVQBYgKCQgMIgYjiIAApzIgCAAIAAgGQgSgDgKADIgUgFIiWglIgUgGIAAAAQiqgyiChIIAAgmQCBBMCrA0QBmAfB0AXIACAAIAAhqIgIgPQANgIARgMQAIALAEANIAABxIgjAGIAoAGIgCADIAXAAQA6AKA+AIIAhAEIAvAAIAtAEQCWANCGACIAAAwIABAAIAAEhIAaCtIAKBMIErABIBRgGIGugDQAngCB7gFIARAAQACAUADAOIgzACIikAHImrACIhQAHIkKAAIAAANQAygNCAASQBXALBRASQBmAJBEAJIAaAEICkAWQAaADC/AyIBZAYIgDAfIgrgLQjGg3gzgHIivgXQjcgdj0gdIgCAEQgJABgwAEQg2AGgnAGIj5AAIgLgEIgGgHQATgYAagHQAOgFAYgDIDYAAIgGgcIgLgMQABgDAEgDIADgDQgLhCgHh9IgGkJIABhuIAAgGIAAAAIAAgCIk9AAIg+gHIgCAAIh0gSIgEAAQgJgFgOgDIAAADIgBAAIAAJjIAUCGIALBKID0gCQAcgEDEgIIAAgCIGGAAQAFACAHAAQAEABABANQgBAOgEACIgMABImdACQidAJgwAFIgNABIjdAAQADADACAFIgBADQBDADCFANIABABIAJAAIAUACQC1ASFsAnIAGAMQgBAFgLAGQgLAGgOAAQiEAAkrgkgARPDRIADAAIgDAQg");
	this.shape_6.setTransform(317.6,359.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABAANIgdgEIgEAAIgGgBQgygHgxgHIgOgCIgXAAIACgEIAJACIAZADIAHABIBXAJIAMABIALACIBGAHg");
	this.shape_7.setTransform(273.9,320);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjFIvIhTgLIgDAAIgLgCIgGgBIgJgBQiFgRhPgPIgGgBIgEgBIgTgDQg+AHiTAVIi/AbQgNAAgEgCIgCgCQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgDgBAAgNQgBgdC3gVQBYgKCQgMIgYjiIAApzIgCAAIAAgGQgSgDgKADIgUgFIgCAAQhNgRhHgUIgJgCIgIgDIgDgBQhBgTg8gXIAAAAQhfgkhQgsIAAgmQBQAvBfAlQA7AYBCAUQBmAfB0AXIACAAIAAhqIgIgPQANgIARgMQAIALAEANIAABxIgjAGIAoAGIgCADIAXAAIAOACQAwAIAzAHIAHABIAEAAIAdAEIAvAAIAtAEIAFAAIAEABIAJABIAJAAIAIABQB7AJBwADIAOAAIAAAAQFXAGDyg+QBrgcBYgoIAAAsQhjAkhoAYIkFAmQhmAHhqgEIhJgFIgiAAIAAFBIAaCtIAKBMIErABIBRgGIGugDQAngCB7gFIARAAQACAUADAOIgzACIikAHImrACIhQAHIkKAAIAAANQAygNCAASQBXALBRASQBmAJBEAJIAaAEICkAWQAaADC/AyIBZAYIgDAfIgrgLQjGg3gzgHIivgXQjcgdj0gdIgCAEQgJABgwAEQg2AGgnAGIj5AAIgLgEIgGgHQATgYAagHQAOgFAYgDIDYAAIgGgcIgLgMQABgDAEgDIADgDQgLhCgHh9IgGkJIABhuIAAgGIAAAAIAAgCIk9AAIgEAAIgWgDIgigEIgCAAIgCAAQg6gIg4gJIgCgBIgEAAQgJgFgOgDIAAADIgBAAIAAJjIAUCGIALBKID0gCQAcgEDEgIIAAgCIGGAAQAFACAHAAQAEABABANQgBAOgEACIgMABImdACQidAJgwAFIgNABIjdAAQADADACAFIgBADQBDADCFANIABABIAJAAIAUACQC1ASFsAnIAGAMQgBAFgLAGQgLAGgOAAQiEAAkrgkgARPDRIADAAIgDAQg");
	this.shape_8.setTransform(317.6,359.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3366FF").s().p("AAUgYIARgRQgjArgmAoQAdgkAbgeg");
	this.shape_9.setTransform(348.3,206.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ABAANIgUgDIgCAAIgHgBIgEAAIgDgBIgDAAIhdgNIgGgBIgFgBIgCAAIgHgBIgXAAIACgEIAJACIAZADIAHABIBXAJIAMABIALACIBGAHg");
	this.shape_10.setTransform(273.9,320);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjFYSIhTgLIgDAAIgLgBIgGgBIgJgBIgFgBIgEAAIgMgCIgEgBIgIgBIgHgBIgDAAIgCAAIgCAAIgBgBIgLgBIiDgUIgCgBIgJgBIgLgCIgBgBIgFAAIgEgBIgTgDQg+AHiTAVIi/AbQgNAAgEgDIgCgCQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQgDgBAAgMQgBgdC3gWQBYgKCQgLIgYjiIAAp0IgCAAIAAgHQgSgDgKADIgUgEIgCAAQhNgRhHgUIgJgDIgGgCIgBAAIgBAAIgDgBIgZgIQg0gQgwgSIAAgBQhfgkhQgsIAAgmQBQAvBfAmQA7AXBCAUIAHADIAGABICwAsIADABIAaAFIACAAIAAhpIgIgPQANgIARgMQAIALAEAMIAAByIgjAGIAoAFIgCAEIAXAAIAHABIACAAIAFABIAGABIBdANIAEABIADABIAEAAIAHABIACAAIAUACIAvAAIAtAEIACABIABAAIAwAEIDIAKIAOAAIAFAAIAOAAIAAABQFXAFDyg+IAIgCIAugNIAGgCIAegJIAAAAQAcgKAbgKQAagLAYgLIAAAsIgyASIg3ARIgeAJQgiAJgiAIIkFAlQhmAHhqgEIhJgEIgiAAIAAFAIAaCvIAKBLIErABIBRgFIGugDQAngCB7gFIARAAQACATADAOIgzADIikAGImrADIhQAGIkKAAIAAAOQAygNCAARQBXAMBRASQBmAIBEAKIAaADICkAXQAaADC/AxIBZAYIgDAgIgrgMQjGg2gzgIIivgXQjcgcj0geIgCAFQgJAAgwAFQg2AFgnAHIj5AAIgLgFIgGgGQATgYAagIQAOgEAYgEIDYAAIgGgcIgLgLQABgEAEgDIADgCQgLhCgHh9IgGkKIABhuIAAgHIAAAAIAAgBIk9AAIgEAAIgRgCIgKgCIgQgCIgHgBIgGgBIgCAAIgCAAIhkgPIgMgCIgCAAIgCAAIgEgBQgJgEgOgEIAAAEIgBAAIAAJkIAUCFIALBLID0gCQAcgEDEgJIAAgBIGGAAQAFABAHAAQAEACABANQgBAOgEACIgMABImdACQidAIgwAFIgNABIjdAAQADAEACAEIgBAEQBDADCFANIABAAIAJABIAUACQC1ARFsAnIAGANQgBAFgLAGQgLAFgOAAQiEAAkrgkgARPS0IADAAIgDAQgAp6hYQhJgPg9gTIgIAAQhRgYgTgUIAAgBQhTgpgyg6IgTgWIgBgCQg+hTgIiQIgBABIAAgMIABAAIAAAAIgBgKIAAgIIAAAAIAAgPIABgvIAjAAQgDAXAAAVIABANIACgCIAAANIgCABQAECRA5BQIAEAFIASAXQAzA2BTApQAVAAAZAMQARAIALAIIguALQDcBGDcgtQAxgKA0gRIA6gUIAUgHIAMgEIBSghQAbgKAZgLIB8hMIAEgDQBqhQAkgUQAcgkAbggQAngpAkgsQARgRAOgNQBkiEA3iBQAWg0AOgzQAOgtAJg2IAGgnIAHhEIAFgcIACgVIAGgtQAIhKAEhPIAAgNIABgPIABAAIAAhQIAAAAIgBgIIAAAAQAAgMgCgMQgCgHgCgIIAZgKIAPgGIAAAjIAAAUIAAAAIAAAOIAAACIACgBIAAArIgCABIAAACIAAAEIgCAmIAAANQgEBJgGBAIgFAtIgJA6IgBAHQgRBqgdBgQgRA3gVA0QgVA2gaAxQgXAtgaApIgBADQgsBFg0A+QgiAognAmQgXAXgYAWIgIAGIgCACQgYAVgZATIgBABIgDACIAAABQhHA2hQAuQgoAYgrAVQgoAUgpASIgyAVQgsARguAPQg/AVhDATg");
	this.shape_11.setTransform(317.6,259.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AsDDuIgUgCIgCgBIgHAAIgEgBIgDAAIgEgBIhdgNIgGgBIgFgBIgCgBIgHgBIgXAAIACgDIAJABIAZADIAHABIBYALIAMABIAKABIBGAHgAO0jtQjBC+jxByQEAiKCyimg");
	this.shape_12.setTransform(357.5,297.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AmnYSIhTgLIgDAAIgLgBIgGgBIgIgBIgFgBIgEAAIgNgCIgEgBIgHgBIgIgBIgCAAIgCAAIgCAAIgCgBIgKgBIiEgUIgCgBIgIgBIgLgCIgCgBIgFAAIgEgBIgSgDQg/AHiTAVIi/AbQgNAAgEgDIgCgCQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBgBQgDgBAAgMQAAgdC2gWQBZgKCPgLIgXjiIAAp0IgCAAIAAgHQgTgDgKADIgUgEIgCAAQhNgRhGgUIgKgDIgGgCIgBAAIgBAAIgDgBIgYgIQg0gQgxgSIAAgBQhfgkhQgsIAAgmQBQAvBfAmQA8AXBBAUIAHADIAHABICvAsIAEABIAaAFIACAAIAAhpIgIgPQANgIAQgMQAJALADAMIAAByIgiAGIAnAFIgCAEIAXAAIAHABIACAAIAFABIAGABIBeANIADABIADABIAEAAIAHABIACAAIAUACIAwAAIAsAEIADABIAAAAIAwAEIDJAKIANAAIAFAAIAPAAIAAABQFSAFDxg9IAFgBIAIgCIAEgBIAqgMIAGgCIAegJIAAAAQAdgKAagKIAugUIASgIQA0gaAygaIANgIQDyhzDAi+IB8iGQAYgbAXgdIAoAAQgdAngfAmQj1E2lMCgQhDAghGAaIgyASIg3ARIgeAJIhBAQIgDABIkFAlQhlAHhqgEIhJgEIgiAAIAAFAIAaCvIALBLIEpABIBRgFIGugDQAngCB8gFIAQAAQACATADAOIgzADIikAGImqADIhRAGIkJAAIAAAOQAzgNB/ARQBWAMBSASQBlAIBEAKIAVACIAFABIClAXQAaADC/AxIBYAYIgDAgIgqgMQjHg2gzgIIivgXIgBAAIgEAAQjagdjvgdIgCAFQgJAAgxAFQg1AFgpAHIj5AAIgLgFIgGgGQATgYAagIQAOgEAYgEIDaAAIgHgcIgLgLQABgEADgDIADgCQgLhCgHh9IgGkKIABhuIABgHIgBAAIAAgBIk9AAIgEAAIgQgCIgLgCIgQgCIgGgBIgGgBIgDAAIgBAAIhlgPIgMgCIgCAAIgBAAIgFgBQgJgEgOgEIAAAEIgBAAIAAJkIAUCFIALBLID0gCQAcgEDEgJIAAgBIGGAAQAGABAGAAQAFACAAANQAAAOgFACIgMABImdACQidAIgwAFIgNABIjdAAQADAEACAEIgBAEQBDADCFANIACAAIAIABIAUACQC1ARFsAnIAGANQgBAFgKAGQgMAFgOAAQiCAAktgkgANtS0IADAAIgDAQgAtchYQhIgPg9gTIgIAAQhRgYgTgUIAAgBQhTgpgzg6IgSgWIgBgCQg+hTgJiQIAAABIAAgMIAAAAIAAAAIAAgKIAAgIIAAAAIgBgPIABgvIAkAAQgEAXAAAVIABANIACgCIAAANIgCABQAECRA5BQIAEAFIATAXQAyA2BTApQAWAAAZAMQAQAIALAIIgtALQDbBGDdgtQAwgKA0gRIA6gUIAVgHIAMgEIBSghQAagKAZgLIB+hMIAEgDQBphQAlgUQAbgkAaggQAogpAjgsQARgRAPgNQBjiEA3iBQAXg0AOgzQANgtAJg2IAGgnIAIhEIAEgcIADgVIAFgtQAJhKADhPIABgNIAAgPIABAAIAAhQIAAAAIgBgIIAAAAQAAgMgCgMQgBgHgDgIIAZgKIAPgGIAAAjIAAAUIAAAAIAAAOIAAACIACgBIAAArIgCABIAAACIAAAEIgCAmIAAANQgDBJgHBAIgFAtIgIA6IgBAHQgRBqgeBgQgRA3gVA0QgVA2gaAxQgWAtgaApIgCADQgrBFg0A+QgjAogmAmQgXAXgZAWIgHAGIgDACQgWAVgaATIgBABIgCACIgBABQhGA2hRAuQgoAYgsAVQgnAUgqASIgxAVQgsARgvAPQg/AVhDATg");
	this.shape_13.setTransform(340.2,259.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("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");
	this.shape_14.setTransform(357.8,259.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AvMUBIgUgCIgCAAIgHgBIgEAAIgDgBIgEgBIhdgNIgGgBIgFgBIgCAAIgHgBIgXAAIABgEIAKABIAYAEIAIABIBYAKIAMABIAKABIBGAHgAHpPtQCQheByhqQh4B2iKBZQhVA3hcArQBegyBTg3gARyx7IAJAEIACADIgLgHgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_15.setTransform(377.6,193.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AitEBIgBgBIgEgEIgDgEQgFgIgDgKIgEgNIgCgGIgDgSIgBgBIAAgBIAAgDIgDgWIgBgHIAAgFIgBgPIAAgNIgBgRIgBgDIgBgSIAAgEIAAgBIgBgIIABgQIAAgHQADglASgcIAFgHQBGhfEQANQASAJAKAPIABABIACAEIADAEIAAABIABABIAAABIABABIABACIAAACIACAEIACATIAAABIAAATIAAABIAAABIgBAJIgGAhIgBABIAAABIgBAEIAAACIgCAFIAAACIgEAPIgCAFIgCAGIgBACIgFAPIgCAEIgLAaIgFAKIgBACQgJASgKAPQghA0gtAYQgrAYg0AAgAg3ATIAAACIgCAbIAAAGIAAAAIgBAGIgEAWIAAACIgBANQAAANAFAIQAHALAVAQIBCAAQAigBAWgjQAIgNAFgMQAGgPAAgPIAAgCQAGgTgPgOIgBAAQgJgJgQgFQgmgLhMAJQAAADgMAAIgCgCQgDACAAANgACmj6QABgQAfAPIALAFIgrgEg");
	this.shape_16.setTransform(475,90.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("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ImeACQidAJgwAEIgNACIjdAAQADADACAFIgBADQBDADCFANIABABIAJAAIAUACQCyARFlAnIALABIAGAMQgBAFgLAGIgFACQgJAEgLAAQiEAAksglgAH02+IgEAHQgSAcgEAmIAAAHIAAAQIAAAIIAAABIAAAEIACASIAAADIABARIABANIAAAPIABAFIAAAHIADAWIAAADIABABIAAABIAEASIABAGIAEANQAEAKAEAIIADAEIAFAEIAAABICLACQA1AAArgYQAtgZAigzQAJgPAKgSIABgCIAFgKIALgaIABgEIAGgPIABgCIACgGIABgFIAEgPIABgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgDgEIAAgCIgBgCIgBgBIAAgBIAAgBIgBgBIgCgEIgDgEIgBgBQgKgPgSgJIg/gBQjaAAg+BTgANU6GQAIAkAHAVIAFAPIADAIIALAjIADABIAAABQAAAFAKAhQALAeAJAOIAAABIACAHIADAKIABADIABACIAMAkIABABIABACIALAnIACAFIABAEIALAxIAAABIABABIAIAyIADARIAEAdIABAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIANgDIAHgCIANgEIACAAQBwgdBjgYIADgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIADAAIAKgCIA5gLIAIgBIAJgEQg2gLg2gMIgLgDQhSgThQgXQiUgshNgVIgMgDQhNgVhZgTQhtgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgADTWiIADAAIgDARgA32CVQhJgPg9gTIgIABQhRgZgTgTIAAgBQhTgqgyg5IgTgWIgBgBQg+hUgIiPIgBAAIAAgLIABgBIAAAAIgBgKIAAgIIAAAAIAAgPIABgvIAjAAQgDAYAAAUIABANIACgBIAAAMIgCABQAECRA5BQIAEAFIASAXQAzA2BTAoQAVAAAZAMQARAIALAJIguAKQDcBHDcguQAxgKA0gQIA6gUIAUgIIAMgEIBSghQAbgJAZgLIB9hMIAEgDQBqhQAkgTIAogyIAPgTQAngoAkgsQARgSAOgNQBkiEA3iBQAWgzAOgzQAOguAJg2IAGgnIAHhDIAFgdIACgUIAGguQAFgqADgsIAEhDIAAgNIABgPIABAAIAAhQIAAAAIgBgHIAAgBQAAgMgCgLQgCgIgCgIIAZgKIAPgGIAAAjIAAAUIAAABIAAANIAAACIACAAIAAAqIgCABIAAACIAAAEIgCAmIAAANIgFBMIgFA9IgFAtIgJA6IgBAIQgRBpgdBgQgRA3gVA0QgVA2gaAyQgXAsgaApIgBAEQgsBEg0A+QgiApgnAlIgfAeIgQAPIgIAGIgCACQgYAVgZAUIgBAAIgDADIAAAAQhHA2hQAvQgpAXgrAVQgoATgpASIgyAVQgsARguAQQg/AVhDASgAKM0YQgWgQgGgLQgGgIAAgNIABgNIAAgCIAEgWIABgGIAAAAIABgGIABgbIAAgCQABgNACgCIACACQANAAgBgDQBNgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQAAAPgGAPQgFAMgHANQgXAjgiABgAKl13IgFACQgIAFgFAKQgEAHgCAKQgBALAAAOIBMgCIARgRIADgGIABgDIACgEQAFgNACgMIACgHQgGgDgKgCIgNgBIghAAQADABAAAKIAAACIAAABIgCgBIgBAAQgGgDgHAAIgIABgAMZ6SIAAgBQADgDACAAIABAFIgGgBgAPt8RIACAAIgDABg");
	this.shape_17.setTransform(406.8,235.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AvMUBIgUgCIgCAAIgHgBIgEAAIgDgBIgEgBIhdgNIgGgBIgFgBIgCAAIgHgBIgXAAIABgEIAKABIAYAEIAIABIBYAKIAMABIAKABIBGAHgAHpPtQCQheByhqIgHAHIgKAJIgGAFIgLALQhpBih3BNQgwAfgxAbIgzAaIgOAHIgPAHQBegyBTg3gARyx7IAJAEIACADIgLgHgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_18.setTransform(377.6,193.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("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HgDIgDgBIgCAAQgNAAgIgDIgEgCIAAgrQAlgHAZAUQAWAQANAkIAqgSIAoAEIARACIhCAfIgQAHIgFADIgBAAIgBABIgBAAIAAACIAAADIAEATIAAAAIABAGIABABIABAAIArAEQBHAGA8AGQBgAKBCAMQBUAPB0AiIAmAMIAsAOQArAKBkAWQBlAUB0AkQBzAkA5AkQhHAZhfAXQgrAKgvAJIgeAGIgPADIgFABIhVARQhHAOghAJIgCAAIAAAAIgCABIgCAAIgBAAIgBABIheAbIgLADIgHADIgCAAIhdAcIgJADIgQAEIgaAIIgIACIgJADIgtANIgRAFIiAAiIgqAIIABADIACARIADASIACAQIAIBGIADAcQALB1AACdQAABngfCBQgYBhgpBwQhhEJigDdQgcAogfAmQi1DljkCTQhRA0hXAqQhCAhhGAaIgsAPIgLAEIgyAPIgeAJIhBAQIgDABIkFAmIhCADQhGAChIgDIhJgEIgiAAIAAFAIAaCvIAKBLIErACIBRgGIGugDQAngCB6gFIARAAQACAUADAOIgzACIijAHImrACIhQAGIkKAAIAAAOQAygNCAASIAdAEQBHAKBEAPQBmAJBEAJIASACIABAAIACABIAEAAIABAAICkAXQAaADC+AyIBZAXIgDAgIgrgMQjFg2gzgHIivgXIgLgCIlEgpIiBgQIgCAFQgJAAgwAFIhEAIIgGABIgUADIj5AAIgLgFIgGgGQATgYAagHQAOgFAYgDIDZAAIgHgdIgKgKIgBgBIABgBQABgDADgDIADgCIgHgvQgHg6gEhWIgGkKIABhuIAAgGIAAAAIAAgCIk9AAIgEAAIgRgCIgKgBIgQgCIgHgBIgGgBIgCAAIgCgBIhkgOIgMgCIgCgBIgCAAIgEgBQgJgEgOgEIAAAEIgBAAIAAJkIAUCFIALBLID0gCQAcgEDEgJIAAgBIGHAAQAFABAHAAQAEACABANQgBAOgEACIgMABImeACQidAJgwAEIgNACIjdAAQADADACAFIgBADQBDADCFANIABABIAJAAIAUACIEOAcIEHAbIACABIALABIAGAMQgBAFgLAGIgFACQgJAEgLAAQhWAAifgQgAH02+IgEAHQgSAcgEAmIAAAHIAAAQIAAAIIAAABIAAAEIACASIAAADIABARIABANIAAAPIABAFIAAAHIADAWIAAADIABABIAAABIAEASIABAGIAEANQAEAKAEAIIADAEIAFAEIAAABICLACQA1AAArgYQAtgZAigzQAJgPAKgSIABgCIAFgKIALgaIABgEIAGgPIABgCIACgGIABgFIAEgPIABgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgDgEIAAgCIgBgCIgBgBIAAgBIAAgBIgBgBIgCgEIgDgEIgBgBQgKgPgSgJIg/gBQjaAAg+BTgANU6GQAIAkAHAVIAFAPIADAIIALAjIADABIAAABQAAAFAKAhQALAeAJAOIAAABIACAHIADAKIABADIABACIAMAkIABABIABACIALAnIACAFIABAEIALAxIAAABIABABIAIAyIADARIAEAdIABAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIANgDIAHgCIANgEIACAAQBwgdBjgYIADgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIADAAIAKgCIA5gLIAIgBIAJgEQg2gLg2gMIgLgDQhSgThQgXQiUgshNgVIgMgDQhNgVhZgTQhtgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgADTWiIADAAIgDARgAKM0YQgWgQgGgLQgGgIAAgNIABgNIAAgCIAEgWIABgGIAAAAIABgGIABgbIAAgCQABgNACgCIACACQANAAgBgDQBNgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQAAAPgGAPQgFAMgHANQgXAjgiABgAKl13IgFACQgIAFgFAKQgEAHgCAKQgBALAAAOIBMgCIARgRIADgGIABgDIACgEQAFgNACgMIACgHQgGgDgKgCIgNgBIghAAQADABAAAKIAAACIAAABIgCgBIgBAAQgGgDgHAAIgIABgAMZ6SIAAgBQADgDACAAIABAFIgGgBgAPt8RIACAAIgDABg");
	this.shape_19.setTransform(406.8,235.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AvMUBIgUgCIgCAAIgHgBIgEAAIgDgBIgEgBIhdgNIgGgBIgFgBIgCAAIgHgBIgXAAIABgEIAKABIAYAEIAIABIBYAKIAMABIAKABIBGAHgAHpPtQCPheBxhpIgDAEIgCACIgHAHIgDACIgGAFIgIAIIgDADIgFAFIhVBJIiEBgIgCABIhVAzIgMAHIgzAaIgHAEIgHADIgPAHQBegyBTg3gARyx7IAJAEIACADIgLgHgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_20.setTransform(377.6,193.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("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ADIgVAKIiCA8IgzAXIhqAtIAGANIqaFLIgvAaIgGADIhzBAQjuCHkCCwIgKAHIgDACIgJAGIgCABQAECRA5BQIAEAFIATAXQAyA2BTAoIACAAQAVAAAYAMgAIQ2+IgFAHQgSAcgDAmIgBAHIAAAQIAAAIIAAABIAAAEIACASIAAADIABARIABANIAAAPIABAFIABAHIACAWIABADIAAABIAAABIAEASIABAGIAEANQAEAKAEAIIAEAEIAEAEIAAABICMACQA1AAAqgYQAtgZAigzQAKgPAJgSIABgCIAFgKIALgaIABgEIAGgPIABgCIACgGIABgFIAFgPIAAgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgCgEIAAgCIgCgCIgBgBIAAgBIAAgBIgBgBIgCgEIgCgEIgBgBQgLgPgSgJIg/gBQjaAAg9BTgANw6GQAHAkAHAVIAGAPIACAIIAMAjIACABIAAABQAAAFALAhQAKAeAJAOIAAABIACAHIADAKIABADIABACIAMAkIABABIABACIAMAnIABAFIABAEIALAxIABABIAAABIAIAyIADARIAFAdIAAAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIANgDIAIgCIAMgEIACAAQBwgdBjgYIADgBIBOgTQCEgfBpgVIAMgCIAFgBIAEgBIADAAIAKgCIA5gLIAJgBIAIgEQg2gLg2gMIgLgDQhRgThRgXQiUgshNgVIgMgDQhNgVhZgTQhsgWh+gSQhFgKhLgJIgZgDIgCgBIACAGgADuWiIADAAIgDARgAKn0YQgWgQgGgLQgFgIAAgNIABgNIAAgCIADgWIABgGIAAAAIABgGIACgbIAAgCQAAgNACgCIACACQANAAAAgDQBMgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQAAAPgGAPQgEAMgIANQgWAjgjABgALA13IgFACQgIAFgFAKQgDAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIABgEQAFgNACgMIACgHQgGgDgKgCIgNgBIghAAQADABABAKIAAACIAAABIgCgBIgCAAQgGgDgHAAIgIABgAM06SIAAgBQAEgDACAAIABAFIgHgBgAQJ8RIABAAIgDABg");
	this.shape_21.setTransform(404.1,235.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.11)").s().p("AABgBQAVgTgfAeQAGgIAEgDg");
	this.shape_22.setTransform(139.2,259.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AvMUBQhQgJhJgMIgXAAIABgEQBzAPBrAKgALrMlQjBC+jyBzQEAiLCzimgARyx7IAJAEIACADIgLgHgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_23.setTransform(377.6,193.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("A9BUiIgEgCIAAgsIAjgsQAkgWAjgYQglAwghAwIADABIAVgBQABAEAFANIgGASQgDAAgKAEQgLADgLAAQgNAAgIgCgA0uNVQgUgcgLgVIAAARQgCAIgKAAQgIAAgIgEIAhgeIAOgGIACAEIADgEIAGAKIAFAGIApA9IAIANQAAAIgGADQgDACgKAAQgIAAgagngAXHsfIAAAAIgFgFIgDgEQgEgHgEgLIgEgNIgBgGIgEgSIAAgBIgBgBIAAgDIgDgVIAAgHIgBgGIAAgPIgBgNIgBgQIAAgEIgCgSIAAgDIAAgCIAAgHIAAgQIAAgHQAEgmASgcIAEgIQBGheERANQASAJAKAOIABABIADAEIACAEIABACIAAAAIAAABIABACIABACIAAACIADAEIABASIAAACIABASIAAACIAAABIgBAIIgHAjIAAAAIAAABIgBAFIgBACIgBAEIgBACIgEAPIgBAFIgCAGIgBACIgGAQIgBADIgLAaIgFAKIgBADQgKARgJAQQgiAzgtAZQgrAXg1AAgAY9wNIAAACIgBAbIgBAGIAAAAIgBAGIgEAXIAAACIgBANQAAANAGAIQAGAKAWAQIBCAAQAigBAXgjQAHgMAFgMQAGgQAAgPIABgBQAFgTgPgPIAAAAQgKgJgQgFQgmgLhNAKQABACgNAAIgCgCQgCACgBANgAcb0aQACgQAeAOIALAFIgrgDg");
	this.shape_24.setTransform(309.7,196.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("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ACAAQAVAAAYAMgASL2+IgFAHQgSAcgDAmIgBAHIAAAQIAAAIIAAABIAAAEIACASIAAADIABARIABANIAAAPIABAFIABAHIACAWIABADIAAABIAAABIAEASIABAGIAEANQAEAKAEAIIAEAEIAEAEIAAABICMACQA1AAAqgYQAtgZAigzQAKgPAJgSIABgCIAFgKIALgaIABgEIAGgPIABgCIACgGIABgFIAFgPIAAgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgCgEIAAgCIgCgCIgBgBIAAgBIAAgBIgBgBIgCgEIgCgEIgBgBQgLgPgSgJIg/gBQjaAAg9BTgAXr6GQAHAkAHAVIAGAPIACAIIAMAjIACABIAAABQAAAFALAhQAKAeAJAOIAAABIACAHIADAKIABADIABACIANAkIAAABIABACIAMAnIABAFIABAEIALAxIABABIAAABIAIAyIADARIAFAdIAAAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIANgDIAIgCIAMgEIACAAQBwgdBjgYIADgBIBOgTQCEgfBpgVIAMgCIAFgBIAEgBIADAAIAKgCIA5gLIAJgBIAIgEQg2gLg2gMIgLgDQhRgThRgXQiUgshNgVIgMgDQhNgVhZgTQhsgWh+gSQhFgKhLgJIgZgDIgCgBIACAGgANpWiIADAAIgDARgAUi0YQgWgQgGgLQgFgIAAgNIABgNIAAgCIADgWIABgGIAAAAIABgGIACgbIAAgCQAAgNACgCIACACQANAAAAgDQBMgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQAAAPgGAPQgEAMgIANQgWAjgjABgAU713IgFACQgIAFgFAKQgDAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIABgEQAFgNADgMIABgHQgGgDgKgCIgNgBIghAAQADABABAKIAAACIAAABIgCgBIgCAAQgGgDgHAAIgIABgAWv6SIAAgBQAEgDACAAIABAFIgHgBgAaE8RIABAAIgDABg");
	this.shape_25.setTransform(340.6,235.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("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HhDIAEgdIADgUIAFguQAJhKAEhPIAAgNIABgcIgFACIgXALIgEACIgIADIgVAKIiCA8IgzAXIhqAtIAGANIqYFLIgwAaIgGADIhzBAQjuCHkCCwIgKAHIgCACIgMAHQAFCRA4BQIAFAFIASAXQAyA2BTAoIACAAQAVAAAYAMgAWJ2+IgFAHQgSAcgDAmIAAAHIgBAQIABAIIAAABIAAAEIABASIABADIAAARIABANIAAAPIABAFIABAHIADAWIAAADIAAABIABABIADASIABAGIAFANQADAKAFAIIADAEIAEAEIAAABICMACQA1AAArgYQAsgZAigzQAKgPAJgSIABgCIAFgKIALgaIACgEIAFgPIABgCIACgGIACgFIAEgPIAAgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgCgEIAAgCIgBgCIgBgBIAAgBIgBgBIgBgBIgCgEIgCgEIgBgBQgKgPgSgJIg/gBQjaAAg+BTgAbp6GQAHAkAHAVIAGAPIACAIIAMAjIADABIAAABQAAAFAKAhQAKAeAJAOIAAABIACAHIAEAKIABADIABACIAMAkIAAABIABACIAMAnIACAFIABAEIAKAxIABABIAAABIAIAyIAEARIAEAdIAAAFIABAHIAWgHIAQgFIAMgDQBHgVB3gfIAugMIAMgDIAIgCIANgEIACAAQBvgdBjgYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEQg2gLg1gMIgLgDQhSgThRgXQiTgshOgVIgMgDQhNgVhZgTQhsgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgARnWiIAEAAIgEARgAYg0YQgWgQgGgLQgFgIAAgNIABgNIAAgCIADgWIABgGIAAAAIABgGIACgbIAAgCQAAgNADgCIABACQANAAAAgDQBMgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQABAPgHAPQgEAMgIANQgWAjgiABgAY513IgFACQgIAFgFAKQgDAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIABgEQAFgNADgMIABgHQgGgDgJgCIgOgBIggAAQACABABAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAat6SIAAgBQAEgDACAAIABAFIgHgBgAeC8RIACAAIgDABg");
	this.shape_26.setTransform(315.2,235.9);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(315.2,235.8,0.832,0.832,0,0,0,350.4,219.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Bird2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(268.5,405.4,1.007,0.871,0,0,0,201.5,429.9);

	this.instance_2 = new lib.bird3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(272,413.3,0.832,0.786,0,0,0,286.2,459.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_4}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_9},{t:this.shape_4}]},1).to({state:[{t:this.shape_14},{t:this.shape_12},{t:this.shape_9},{t:this.shape_4}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_9},{t:this.shape_4}]},1).to({state:[{t:this.shape_19},{t:this.shape_16},{t:this.shape_18},{t:this.shape_9},{t:this.shape_4}]},1).to({state:[{t:this.shape_21},{t:this.shape_16},{t:this.shape_20},{t:this.shape_9},{t:this.shape_4}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_9},{t:this.shape_22},{t:this.shape_4}]},1).to({state:[{t:this.shape_26},{t:this.shape_24},{t:this.shape_23},{t:this.shape_9},{t:this.shape_22},{t:this.shape_4}]},1).to({state:[{t:this.shape_26},{t:this.shape_24},{t:this.shape_23},{t:this.shape_9},{t:this.shape_22},{t:this.shape_4}]},1).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},4).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({x:315.1,alpha:0.071},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.354},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.495},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.849},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.99},0).wait(1).to({regY:220,x:315.4,y:235.7,alpha:1},0).to({_off:true},7).wait(25).to({_off:false},0).to({_off:true},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,239,642,482);
// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;