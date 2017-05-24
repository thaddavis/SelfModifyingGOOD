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


(lib.sound_noSound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2.3,1,2).p("AgfhbQAUAHAPARQAcAcAAAnQAAAogcAcQgPAQgUAI");
	this.shape.setTransform(8.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgfAoIhBAAIAAhQIBBAAIBHhAQANBkgNBtgAA8gjQAPAAALALQALALAAANQAAAPgLAKQgLALgPAAQAHglgHgig");
	this.shape_1.setTransform(-1.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sound_noSound, new cjs.Rectangle(-11.5,-10.5,24.2,21), null);


(lib.twentytwo22 = function(mode,startPosition,loop) {
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


(lib.twentyone21 = function(mode,startPosition,loop) {
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


(lib.twentyfive25 = function(mode,startPosition,loop) {
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


(lib.twenty20 = function(mode,startPosition,loop) {
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


(lib.sixteen16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BbQgWgaAAg7QAAhCAZgdQAVgbAjAAQAcAAARAPQARAQADAaIgbACQgEgQgHgIQgMgMgQAAQgNAAgKAHQgNAKgIATQgHASgBAjQAKgPAPgIQAPgHAPAAQAcgBAUAVQAUAUAAAgQAAAWgKATQgJASgQAKQgRAKgUAAQgiAAgXgagAgdADQgNAOAAAWQAAAPAGAMQAGAOALAHQALAHALAAQASAAANgOQANgPAAgZQAAgYgNgNQgNgMgTAAQgSAAgNAMg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BgQgXgdAAhBQAAhCAYgeQAZgdAnAAQAbAAATAPQASAQAFAdIgtAFQgCgNgHgHQgHgHgLAAQgOAAgKAOQgKANgDAqQARgVAZAAQAeAAAUAWQAVAWAAAjQAAAlgWAXQgWAWgiAAQgkAAgYgcgAgTAHQgJALAAAUQAAAXAKAMQALANAMAAQANAAAJgKQAJgLAAgXQAAgXgKgLQgJgKgOAAQgMAAgKAJg");
	this.shape_2.setTransform(9.6,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.seventeen17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgpBxQAAgbALgmQAKgnATgiQASgkAVgYIhvAAIAAgbICTAAIAAAWQgWAXgVAmQgWAmgKApQgJAdgCAig");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AguB4QABgzAUg0QATgzAggpIhpAAIAAgsICfAAIAAAiQgUATgUAlQgVAjgKApQgKApAAAgg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.nineteen19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgyBmQgRgPgDgbIAbgDQADAUAKAIQAKAJAPAAQAMAAAKgGQAJgGAHgKQAGgKAEgRQAEgQAAgSIAAgGQgIAOgPAIQgPAJgQAAQgcAAgUgWQgTgTAAgiQAAgiAUgWQAVgVAfAAQAVAAATAMQASAMAKAXQAJAVAAArQAAAqgJAbQgKAZgTAOQgTAOgYAAQgbAAgRgPgAgghOQgOAQAAAYQAAAWAOAOQANANATAAQATAAAMgNQANgOAAgYQAAgYgNgOQgNgPgSAAQgSAAgOAPg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BtQgSgPgFgfIAtgEQACANAHAHQAHAHALAAQAOAAAKgOQAKgNADgqQgSAVgZAAQgdAAgVgWQgUgWAAgjQAAglAWgXQAWgXAiAAQAkABAXAdQAYAcAABBQAABCgZAeQgYAegngBQgdAAgRgPgAgahKQgJAJAAAYQAAAYAKAKQAJALAOAAQAMAAAKgKQAJgLAAgUQAAgXgLgMQgKgMgNAAQgNgBgIALg");
	this.shape_2.setTransform(9.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fifteen15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag0BiQgUgSgDgdIAegDQADAWAMALQAMALARAAQATAAAOgQQAOgPAAgZQAAgYgNgNQgOgOgVAAQgNAAgLAGQgLAGgHAJIgagEIAWh0IBxAAIAAAbIhaAAIgNA9QAVgOAWAAQAeAAAUAVQAVAUAAAhQAAAegSAXQgWAcglAAQggAAgTgRg");
	this.shape.setTransform(8.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag4BoQgVgSgEgeIAugGQACAQALAKQAJAJANAAQANAAALgMQAKgMAAgYQAAgXgKgKQgKgKgQAAQgTAAgRAQIglgGIAXh9IB7AAIAAAsIhXAAIgHApQAQgIAOAAQAfAAAWAWQAWAXAAAkQAAAdgSAYQgXAggqAAQghAAgWgSg");
	this.shape_2.setTransform(9.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.eighteen18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BhQgWgUAAgeQAAgWAMgPQALgPAVgFQgSgGgIgNQgJgLAAgRQAAgZASgRQATgRAdAAQAdAAATASQASARAAAZQAAAQgIALQgIANgSAGQAVAGAMAPQALAQgBAVQAAAdgUAUQgVAUgiAAQghAAgUgUgAghAOQgMANAAAUQgBAMAGALQAGAMALAFQAMAHAMAAQATAAAOgNQANgNAAgUQAAgVgOgNQgOgNgTAAQgUAAgNANgAgahTQgKALAAAOQAAAQAKAKQAKALAQAAQARAAAKgKQAKgLAAgPQAAgPgKgKQgMgLgPAAQgQAAgKAKg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BrQgagUAAgkQAAgUAJgRQALgPAVgKQgTgHgIgNQgIgNAAgRQAAgbATgSQATgSAjAAQAiAAATASQATASAAAbQAAASgJANQgJAMgQAHQAVAJALAPQAKAPAAAVQAAAhgWAVQgVAWgkgBQggAAgWgRgAgZAVQgIALAAAOQAAATAJALQALALANAAQAOAAAKgKQAKgLAAgUQAAgQgKgLQgKgLgOAAQgQABgJAMgAgVhPQgIAJAAANQAAAOAIAHQAIAJANgBQAMABAIgJQAIgHAAgOQAAgNgIgJQgHgHgNAAQgNAAgIAHg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

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


(lib.two = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("2", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(18.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.two, new cjs.Rectangle(0,0,21.7,26.4), null);


(lib.twenteetwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("22", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAJAJABAMQgBANgJAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(31.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twenteetwo, new cjs.Rectangle(0,0,34.5,26.4), null);


(lib.twelve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("12", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNIABgEQABgKAIgHQAKgJANAAQAOAAAJAJQAJAHABAKIAAAEQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(30.4,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twelve, new cjs.Rectangle(0,0,33.7,26.4), null);


(lib.tweentythree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("23", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAKAJQAKAJgBAMQABANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.6,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentythree, new cjs.Rectangle(0,0,33,26.4), null);


(lib.tweentysix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("26", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(28.7,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentysix, new cjs.Rectangle(0,0,32.1,26.4), null);


(lib.tweentyseven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("27", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(25.1,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentyseven, new cjs.Rectangle(0,0,30.2,26.4), null);


(lib.tweentyone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("21", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(27.6,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentyone, new cjs.Rectangle(0,0,31,26.4), null);


(lib.tweentynine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("29", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJABgNQgBgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(28.2,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentynine, new cjs.Rectangle(0,0,31.5,26.4), null);


(lib.tweentyfour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("24", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.9,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentyfour, new cjs.Rectangle(0,0,33.3,26.4), null);


(lib.tweentyfive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("25", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAJAJABAMQgBANgJAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(28.4,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentyfive, new cjs.Rectangle(0,0,31.8,26.4), null);


(lib.tweentyeight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("28", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.9,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweentyeight, new cjs.Rectangle(0,0,33.3,26.4), null);


(lib.tweenty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("20", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQALAJAAAMQAAANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(27.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tweenty, new cjs.Rectangle(0,0,31.1,26.4), null);


(lib.three = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("3", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQALAJAAAMQAAANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(17.9,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.three, new cjs.Rectangle(0,0,21.2,26.4), null);


(lib.thirtytwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("32", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.7,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtytwo, new cjs.Rectangle(0,0,33.1,26.4), null);


(lib.thirtythree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("33", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAJAJABAMQgBANgJAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtythree, new cjs.Rectangle(0,0,33.1,26.4), null);


(lib.thirtysix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("36", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJABgNQgBgMAKgJQAKgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.5,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtysix, new cjs.Rectangle(0,0,32.8,26.4), null);


(lib.thirtyseven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("37", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAKAJQAKAJgBAMQABANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(23.8,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtyseven, new cjs.Rectangle(0,0,30.1,26.4), null);


(lib.thirtyone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("31", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(25.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtyone, new cjs.Rectangle(0,0,30.2,26.4), null);


(lib.thirtynine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("39", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 24;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAKAJQAKAJgBAMQABANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(28.3,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtynine, new cjs.Rectangle(0,0,31.6,26.4), null);


(lib.thirtyfour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("34", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.8,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtyfour, new cjs.Rectangle(0,0,33.2,26.4), null);


(lib.thirtyfive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("35", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQALAJAAAMQAAANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(30.9,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtyfive, new cjs.Rectangle(0,0,34.3,26.4), null);


(lib.thirtyeight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("38", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(27.6,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirtyeight, new cjs.Rectangle(0,0,31,26.4), null);


(lib.thirty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("30", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(28.4,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirty, new cjs.Rectangle(0,0,31.7,26.4), null);


(lib.thirteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("13", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJABgNQgBgMAKgJQAKgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.5,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thirteen, new cjs.Rectangle(0,0,32.8,26.4), null);


(lib.ten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("10", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAJAJABAMQgBANgJAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(30.1,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ten, new cjs.Rectangle(0,0,33.5,26.4), null);


(lib.sixteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("16", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.9,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteen, new cjs.Rectangle(0,0,33.2,26.4), null);


(lib.six = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("6", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(17.7,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.six, new cjs.Rectangle(0,0,21,26.4), null);


(lib.seventeen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("17", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(25.1,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeen, new cjs.Rectangle(0,0,30.2,26.4), null);


(lib.seven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("7", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQALAJAAAMQAAANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(15.6,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seven, new cjs.Rectangle(0,0,19,26.4), null);


(lib.one = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("1", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(15.7,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.one, new cjs.Rectangle(0,0,19,26.4), null);


(lib.nineteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("19", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(26.6,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteen, new cjs.Rectangle(0,0,30.2,26.4), null);


(lib.nine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("9", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(18.6,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nine, new cjs.Rectangle(0,0,22,26.4), null);


(lib.fourty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("40", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAJAJABAMQgBANgJAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.7,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fourty, new cjs.Rectangle(0,0,33,26.4), null);


(lib.fourteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("14", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAJAJABAMQgBANgJAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(30.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fourteen, new cjs.Rectangle(0,0,33.6,26.4), null);


(lib.four = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("4", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJABgNQgBgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(16.9,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.four, new cjs.Rectangle(0,0,20.3,26.4), null);


(lib.five = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("5", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJABgNQgBgMAKgJQAKgJANAAQAOAAAKAJQAKAJgBAMQABANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(17.8,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.five, new cjs.Rectangle(0,0,21.2,26.4), null);


(lib.fifteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("15", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(29.9,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fifteen, new cjs.Rectangle(0,0,33.2,26.4), null);


(lib.eleven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("11", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(26.8,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eleven, new cjs.Rectangle(0,0,30.2,26.4), null);


(lib.eighteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("18", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAKAJQAKAJAAAMQAAANgKAJQgKAJgOAAQgNAAgKgJg");
	this.shape.setTransform(26.7,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eighteen, new cjs.Rectangle(0,0,30.2,26.4), null);


(lib.eight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("8", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAJAJQALAJgBAMQABANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(17.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eight, new cjs.Rectangle(0,0,20.8,26.4), null);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("1", "20px 'Arial'");
	this.text.lineHeight = 31;
	this.text.lineWidth = 11;
	this.text.parent = this;
	this.text.setTransform(-5.2,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(-7.2,-11.7,15.1,26.4), null);


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC6B").s().p("AACgSIAAAPIAAAGIAAAIIgCAHIgBABg");
	this.shape.setTransform(122.9,81.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(180,148,86,0.251)").s().p("Ai5FeIgMgDIg8gTIgrgMIgegGIgPgIIgLgHIgagPIgXgPIgNgHIgOgIIgPgPIgQgPIgOgPIgPgPIgIgHIgIgIIgEgIIgGgHIgKgPIgJgPIgKgPIgKgPIgGgHIgEgIIgDgIIgDgHIgCgHIgDgIIgCgHIAAgIIAAgPIAAgHIAAgIIAAgHIAAgPIAAgOIAAgPIAAgQIAAgHIAAgHIACgIIADgHIACgIIAAgIIADgHIAAgHIAAgIIAAgHIAAgIIADgIIACgHIAAgHIACgIIADgHIAFgIIAFgIIAFgHIACgHIAGgIIAAgHIACgIIACgIIADgHIAAgHIACgIIADgHIAFgIIAKgPIAFgHIAFgIIAKgPIAPgWIAHgLQBbHmGFBNQGABLC5h4IgCAEIgFAHIgFAIIgCAHIgGAIIgHAIIgIAHIgHAHIgKAIIgNAIIgJAHIgKAIIgeAOIgfAPIgRAIIgWAIIgQAHIgTAHIgUAIIghAGIgMABIgKAGIgSAHIg8AFIgUAFIlqADIgMgDg");
	this.shape_1.setTransform(64.1,67.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC6B").s().p("AjOHXIgMgCIg8gUIgrgMIgegGIgPgHIgKgHIgbgQIgXgOIgMgIIgPgIIgPgPIgPgPIgPgPIgPgPIgIgHIgHgIIgFgHIgFgIIgKgPIgKgPIgKgPIgKgPIgFgHIgFgIIgDgHIgCgIIgDgHIgCgIIgDgHIAAgIIAAgPIAAgHIAAgIIAAgHIAAgPIAAgPIAAgPIAAgPIAAgIIAAgHIADgIIACgHIADgIIAAgHIACgIIAAgHIAAgHIAAgHIAAgIIADgHIACgIIAAgHIADgIIACgHIAFgIIAFgHIAFgIIADgHIAFgIIAAgHIACgIIADgHIACgIIAAgHIADgIIACgHIAFgIIAKgPIAFgHIAFgIIAKgPIAPgWIAPgXIAKgPIAFgHIAIgIIAHgHIAXgXIAWgWIAPgPIAIgIIAHgHIAKgIIALgHIAMgIIAHgHIAIgIIAHgHIANgIIAZgOIAPgIIAMgIIAKgHIAIgIIAKgHIAPgIICCgFIAFAFIARAGIANAEIAPAFIAFAFIAPAIIAKAHIAJAIIAMAIIAKAHIAIAHIAKAIIAMAIIAKAHIAIAHIAKAIIAPAHIAPAIIAKAHIAHAIIAIAHIAHAIIANAHIAMAIIAIAHIAPAIIAKAHIAHAIIAIAHIAPAIIAKAHIAHAIIAIAHIAHAIIANAHIAMAIIAPAPIAXAWIAWAXIAXAWIAWAXIAFAHIAFAIIADAHIAPAPIAlAmIAeAeIAeAdIAeAeIADAHIACAIIAAAHIAFAIIAIAHIAFAIIACAHIAFAIIAFAHIAFAIIAIAHIABABIgEgBIgRAFIgIAIIgFAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAPIAAAPIAAAPIAAAPIAAAHIAAAIIgCAHIgFAIIgDAHIgFAIIgFAHIgCAIIgFAHIgIAIIgHAHIgIAIIgKAHIgMAIIgKAHIgKAIIgeAPIgeAPIgSAHIgWAIIgPAHIgUAIIgUAHIghAGIgMACIgKAFIgSAHIg8AFIgUAFIlpADIgNgDg");
	this.shape_2.setTransform(66.2,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai2IhIgNgCIgZgFQgcgFgbgJIgtgQIgWgCIgUgGIgXgHIgMgHIgMgIIgLgHIgPgIIgMgIIgMgHIgLgHIgPgIIgKgHIgHgIIgIgIIgPgOIgPgPIgPgQIgPgOIgHgIIgFgHIgFgIIgKgPIgKgPIgKgPIgKgPIgFgHIgFgIIgFgHIgDgIIgFgIIgCgHIgDgHIgCgIIgDgHIgCgIIAAgIIAAgOIAAgXIAAgeIAAgHIAAgIIAAgPIAAgPIAAgHIAAgIIAAgPIACgHIADgIIACgHIAAgIIADgIIAAgGIAAgHIAAgIIAAgHIACgIIADgIIAAgHIACgHIADgIIACgHIAFgIIAFgIIAFgHIAFgHIAAgIIADgHIACgIIADgIIAAgHIACgHIADgIIACgHIAFgIIADgIIAFgHIAKgPIAPgXIAPgWIAKgPIAFgIIAFgHIAKgPIAHgHIAPgQIAXgWIAegeIAHgHIAIgIIAPgPIAHgIIALgHIAMgHIAKgIIAHgHIAIgIIAKgHIAMgIIANgHIAbgPIANgIIAHgIIAIgHIAMgHIAPgIIAPgHIAIgBIgDgBIACgCIAIgCIACgBIAEgCIAGgCIAHgDIAEgCIAIgCIAEgBIAJgDIAJgCIAFgBIACgBIAJgBQATADAUABIAHAFIABAAIAGACIASAGIAPAHIAIAFIADACIAOAGIANAFIAPAEIAJAIIAMAIIANAHIAHAHIAPAIIAKAHIAIAIIAHAIIAPAHIAKAHIAIAIIAHAHIAPAIIAPAIIANAHIAHAHIAIAIIAHAHIAKAIIANAIIAKAHIAMAHIANAIIAHAHIAIAIIAMAIIANAHIAHAHIAIAIIAHAHIAKAIIANAIIAKAHIAHAHIAPAPIAXAXIAeAeIAeAeIAPAPIACAIIAFAHIAFAHIAIAIIAPAPIAWAWIAeAfIAeAdIAaAaIABAHIAEAAIAHACIAEADIAEADIADADIADACIACAEIACACIABADIACADIABADIACADIADADIABADIABACIACAEIADADIACACIABADIACADIABADIACACIABAEIABACIABADIAAAEIAAACIACADIABADIACADIABACIACAEIAAACIABADIABAEIABACIAAAGIAAAJIAAALIAAALIAAAMIAAAOIAAAPIAAAJIgBADIgBACIgBAEIAAADIgCACIgBADIgBADIgBADIgBADIgBADIgCAFIgCAGIgCAGIgCAGIgCADIgCADIgCACIgDAEIgEACIgEACIgBAAIAAABIAAAIIAAAHIAAAIIgDAIIgFAHIgFAHIgHAIIgIAHIgCAIIgFAIIgFAHIgIAHIgHAIIgIAHIgHAIIgIAIIgKAHIgPAHIgHAIIgNAHIgtAXQgiAQgkAOIgoAPIgPAHIgRAGIghAEIgUAIIgPAFIgMACIg8AGIgUAEIlTAAgAjXnKIgPAHIgKAHIgHAIIgKAIIgNAHIgOAIIgaAOIgMAIIgIAIIgHAHIgIAIIgMAHIgKAHIgKAIIgIAIIgHAHIgPAPIgXAXIgWAWIgIAHIgHAIIgFAIIgKAPIgPAWIgPAXIgKAOIgFAIIgFAIIgKAPIgFAHIgDAHIgCAIIAAAIIgDAHIgCAIIgDAHIAAAHIgFAIIgCAIIgFAHIgFAIIgFAHIgDAHIgCAIIAAAIIgDAHIgCAIIAAAHIAAAGIAAAIIAAAIIgDAHIAAAIIgCAHIgDAHIgCAIIAAAIIAAAHIAAAPIAAAPIAAAPIAAAPIAAAHIAAAIIAAAIIAAAPIAAAHIACAHIADAIIACAIIADAHIACAIIAFAHIAFAHIAKAQIAKAPIAKAOIAKAQIAFAHIAFAIIAIAHIAHAHIAPAQIAPAPIAPAOIAPAQIAPAIIANAHIAXAOIAaAQIALAHIAPAIIAeAFIAqANIA8ATIANACIAMADIFqgDIAUgFIA8gEIARgIIAKgFIANgCIAggFIAUgIIAUgIIAPgHIAXgIIARgHIAegPIAegPIAKgIIAKgGIANgIIAKgIIAHgIIAIgHIAHgIIAFgHIADgHIAFgIIAFgIIACgHIAFgIIADgHIAAgHIAAgIIAAgPIAAgPIAAgPIAAgPIAAgIIAAgHIAAgHIAAgIIAAgIIAFgHIAHgIIASgEIADABIgBgBIgHgIIgFgIIgFgHIgFgIIgDgHIgFgHIgHgIIgFgIIAAgHIgDgIIgCgHIgegeIgegeIgegdIgmgmIgPgOIgCgIIgFgIIgFgHIgXgWIgWgXIgXgWIgWgXIgPgPIgNgHIgMgIIgIgIIgHgHIgIgIIgKgHIgPgHIgHgIIgIgIIgKgHIgPgIIgHgHIgNgHIgMgIIgIgIIgHgHIgIgIIgKgHIgPgHIgPgIIgKgIIgHgHIgKgHIgNgIIgKgHIgHgIIgKgHIgNgIIgJgIIgKgHIgPgHIgFgGIgPgEIgMgFIgSgFIgFgGIiCAGg");
	this.shape_3.setTransform(66.3,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing1, new cjs.Rectangle(0,0,132.7,109.1), null);


(lib.thight1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46B15B").s().p("AAiBiIgEgBIgFgEIgGgCIgIgCIgDgBIgIgEIgGgCIgFgDIgGgDIgEgDIgBgCIgFgDIgCgDIgCgCIgDgDIgBgDIgCgDIgBgCIgEgDIgFgDIgDgCIgDgDIgCgDIgCgCIgBgDIgBgDIgCgCIgCgDIgBgDIgDgDIgCgCIgCgEIgBgCIgCgDIgCgCIgCgEIgBgCIgBgBIgBgEIgBgCIAAgDIAAgDIAAgDIAAgCIAAgDIACgDIAAgCIABgDIAAgDIAAgCIAAgDIAAgDIAAgDIAAgCIAAgDIAAgDIAAgCIAAgDIAGgDIAEgDIAFgCIABgDIACgDIACgCIABgEIABgCIAAgDIAAgCIgBgEIgBgCIAAgCIAEgEIADgCIACgBIAYABIAIABIADACIAIADIAHABIAHACIAEABIAEAEIABACIADADIADACIADAEIACACIAGADIADADIABACIACADIACADIADADIAAACIACADIACADIADACIACADIADADIACADIACACIABADIACADIAEACIACADIABADIABACIACADIAEADIAAADIACACIACAEIAAABIABACIABAEIAAACIAAADIAAACIAAAGIAAAGIAAAFIAAAGIAAAFIAAADIgCACIAAADIgBADIAAACIAAADIAAADIgBADIgBACIgBADIgBADIgDACIgBADIgBADIgBADIgBACIgCAEIAAACIgCADIgBADIgDACIgZABIgCgBg");
	this.shape.setTransform(12.8,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdCQIgIgCIgFgDIgHgDIgFgCIgHgDIgEgCIgHgCIgGgCIgGgDIgGgDIgFgCIgFgDIgGgDIgDgDIgCgCIgDgDIgDgDIgDgCIgCgEIgCgCIgBgDIgCgCIgDgEIgCgCIgDgDIgDgDIgCgCIgDgDIgDgDIgDgDIgCgCIgDgDIgCgDIgCgCIAAgDIgBgDIgBgDIgCgCIgCgDIgCgDIgCgCIgCgDIgBgDIgCgCIgCgDIgCgDIgCgDIgBgCIAAgEIgBgCIgBgCIgBgEIgBgCIAAgCIAAgCIAAgEIAAgCIAAgDIAAgDIAAgDIAAgCIAAgDIAAgDIAAgCIAAgDIABgDIABgCIABgDIABgDIgBgDIgBgCIgBgDIgBgDIAAgCIAAgDIAAgDIAAgCIAAgDIAAgDIAAgDIABgCIABgEIACgCIAAgCIABgEIABgCIABgDIABgCIACgEIACgCIACgDIADgDIACgDIABgCIACgDIACgDIADgCIAGgDIADgDIADgCIADgDIAEgDIAEgDIAEgCIAGgDIAEgCIADgBIAGAAIAAgBIAgAAIAJACIADACIAHACIAGACIAIABIAGACIAJACIAFADIAFACIAGADIAEADIACADIACACIACADIADADIAEACIAEADIACADIADADIACACIACAEIACACIABACIABAEIABACIADADIADACIADAEIACACIACADIABADIACACIADADIABADIAEADIACACIACADIABADIABACIACADIABADIADADIACACIABADIABADIADACIACADIACADIABACIABADIAAADIAAADIAAAGIAAABIAAACIAAAEIAAACIAAADIAAAGIAAAFIAAAIIAAAGIAAAIIAAAKIAAADIgBADIgBADIgBACIAAADIAAADIAAACIgBADIgBADIgCADIgBACIgCAEIAAACIgCADIgCADIgBACIgBADIgCACIAAAEIgBACIgBADIgBADIgCADIgCACIgCADIgCADIgBACIgCADIgDADIgEACIgFADIgGADIgIACIgoAAgAg0hhIgDACIgEAEIAAACIABACIABAEIAAACIAAADIgBACIgBAEIgCACIgBADIgCADIgFACIgEADIgGADIAAADIAAACIAAADIAAADIAAACIAAADIAAADIAAADIAAACIAAADIgBADIAAACIgCADIAAADIAAACIAAADIAAADIAAADIABACIABAEIABABIABACIACAEIACACIACADIABACIACAEIACACIADADIACADIABADIACACIABADIABADIACACIADADIACADIADACIAFADIAEADIACACIACADIABADIACADIACACIADADIAEADIABACIAFADIAFADIAGADIAFACIAIAEIAEABIAHACIAGACIAFAEIAEABIADABIAZgBIADgCIABgDIABgDIAAgCIACgEIABgCIABgDIACgDIABgDIACgCIABgDIABgDIABgCIABgDIAAgDIAAgDIAAgCIABgDIABgDIACgCIAAgDIAAgFIAAgGIAAgFIAAgGIAAgGIAAgCIAAgDIAAgCIgBgEIgBgCIgBgBIgCgEIgCgCIAAgDIgDgDIgCgDIgCgCIgBgDIgCgDIgDgCIgCgDIgCgDIgCgCIgBgDIgDgDIgDgDIgDgCIgBgDIgCgDIgBgCIgDgDIgCgDIgCgDIAAgCIgEgDIgGgDIgCgCIgDgEIgDgCIgCgDIgCgCIgDgEIgFgBIgHgCIgGgBIgIgDIgEgCIgHgBIgZgBIgCABg");
	this.shape_1.setTransform(12.7,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.thight1, new cjs.Rectangle(0,0,25.5,28.7), null);


(lib.tail1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECBE65").s().p("AkSBwIADgBIgEgBIgGgDIgGgCIgDgDIgDgDIgDgDIgDgDIgDgCIgCgEIgCgCIgCgCQF/AADmjGIADADIAHAHIAFAIIADAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIgFAHIgNAIIgMAIIgKAHIgNAIIgPAHIgMAGIgIAIIgHAIQgWANgXAJIgmAOIgqAQIgXAIIgPAHIgUAHIgWAIIgdAGIgUAEIjuACIgKgEgAlBA2IADgEIgBAGIgDAAIABgCg");
	this.shape.setTransform(40,80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC6B").s().p("AkUGnIACgBIgDgBIgHgDIgGgCIgDgDIgCgDIgEgDIgDgDIgCgCIgDgEIgCgCIgCgDIgBgDIgBgDIgBgDIAAgDIAAgDIAAgCIAAgEIAAgDIAAgCIAAgDIgDABIgHACIAAgCIAFgHIAAgIIAAgHIAAgHIAAgBIAAgBIAFgHIAIgHIACgHIAFgIIAAgHIAAgIIAAgIIAAgHIAAgHIAAgIIAAAAIADgHIAAgIIACgIIAAgHIACgHIAAgIIADgHIAAgQIAAgWIAAgPIAAgWIAAgPIAAgQIAAgHIAAgHIgDgIIgCgHIgFgIIAAgIIAAgHIAAgHIAAgIIgFgHIgCgIIgGgIIgFgHIgCgGIAAgIIgCgIIgDgHIAAgBIAAgBIAFgIIAAgIIgCgHIgGgHIgHgIIgGgDIgBgCIgDgIIgFgEIAAgGIAAgHIAFgHIAHgIIAIgHIAFgIIAFgIIACgHIALgHIAHgIIAHgHIAKgIIAIgIIAKgHIAHgHIAKgIIAIgHIAIgIIAHgIIAIgHIAHgHIAHgIIAIgHIAIgIIAJgIIAQgHIAOgHIAKgIIAIgHIAHgIIAIgIIAIgHIAKgHIAUgPIAMgIIAKgHIAMgIIAKgHIANgIIARgHIAUgIIAOgIIAXgHIASgHIAZgIIAqgDIAFAFIAFAIIAAAIIAAAHIAFAHIAFAIIAAAHIAAAIIAAAIIAAAHIgFAHIgIAIIgEAHIgFAIIgDAIIgHAHIgIAHIgIAIIgHAHIgHAIIgIAIIgHAHIgIAHIgKAIIgMAIIgLAHIgHAIIgHAHQgVAQgVAOIgtAdIgjAYIgWAPIgKAHIgIAHIgHAIIgIAIIgIAHIgHAHIgNAIIgMAHIgRAIIgIAIIgIAHIgHAHIgMAGIgIAEIgIAIIgHAHIgIAHIgEAIIgDAHIAAAHIAAAIIAFAHIAHAIIASAFIAUAAIARgFIAugVQBYglBagbQA6gQA4gWIAbgJIAvgCIAUgFICCAAIAAAHIAAAIIAAAIIAAAHIAAAIIgFAHIgKAHIgUAPIgbAQIgPAHIgNAHIgKAHIgoAPIgtAPIgWAIIgVAHIgOAIIgPAHIgQAFIgKADIgKACIgJACIgKADIgKADIglACIgNACIgOAGIgXAHIgyAFIgRAFIgIAIIgHAHIgGAHIgCAIIAAAIIAAAHIAFAIIAHAHIASAFIBkAAIARgFIBcgFIAUgFICdgCIAIAFIAHAHIAKAHIAGAIIAHAIIAHAHIAGAIIACAHIAAAHIAAAIIAAAIIAAAHIAAAIIAAAHIgFAHIgNAIIgMAIIgKAHIgNAIIgOAHIgNAHIgHAIIgIAIQgVANgYAJIglAOIgrAQIgXAIIgOAHIgVAHIgWAIIgdAGIgUAEIjuACIgJgEg");
	this.shape_1.setTransform(40.3,49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("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");
	this.shape_2.setTransform(40.6,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tail1, new cjs.Rectangle(0,0,81.3,98), null);


(lib.leg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("AinEEIgCgCIgDgCIgCgCIgDgCIgCgCIAAgCIgCgCIgBgBIgCgCIgCgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIABgBIABgBIADgBIACgBIACgBIABgBIABgCIACgBIADgBIABgBIACgBIACgBIADgBIACgCIAAgBIACgBIADgBIADgBIACgBIABgBIABgCIACgBIACgBIABgBIACgBIABgBIAEgBIABgBIACgBIABgBIACgBIABgBIACAAIACgBIACgBIADgBIACgCIACgBIABgBIACgBIABAAIADgBIACgBIABgBIACAAIABgCIACAAIABgBIADgBIABAAIADgBIADgBIABgBIACgBIACgCIADgBIACAAIAAgBIACgBIADgBIACgBIABgBIACgBIABgBIACgBIACgCIACAAIACgBIACgBIACgBIACgCIAKgDIA5gUQAlgNgbAGIABgDIgbACQgUABgUAFQgmAGgmALQgZAHgVALIgDABIgCABIgBAAIgFADIACgBQgWAOgagCIgBgBIgBgBIAAgBIgBgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgDIABgBIAAgBIAAgBIABgBIABgBIABgCIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIAAgBIABgBIABgBIABgBIACgBIACgBIACgCIACgBIABgBIADgBIACgBIACgBIACgBIADgCIACgBIACgBIACgBIADgBIADgBIACgBIACAAIACgBIABAAIACgBIADgBIACgBIABAAIACgBIACAAIAAAAIADgBIANgDIAWgFIARgEIApgLIAggFIARgFIA7gFIAAgHIAAgIIAAgPIAAgWIAAgXIAAgVIAAgXIAAgHIgCgIIgDgHIAAgIIgCgHIgCgIIAAgHIAAgIIAAgHIgBAAIAAgEIAAgEIAAgEIAAgEIAAgDIAAgBIAAgBIAAgBIgBgBIAAgBIAAgDIAAgCIAAgCIAAgDIAAgBIAAgBIAAgBIACgNIgFgIIgDgFIgegxIAAgTQAZgUAoABIAPAIIAPAXIAAALIAAAIQABAcADAbIAAABIgBABIAAAAIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAAAIAAABIAAABIAAABIAAAAIABABIAAABIgBABIAAAGIAAAHIAAAIIAAAHIAAAIIACAHIACAIIADAHIAAAIIADAHIAAAPIAAAXIAAAWIAAAWIAAAWIAAAXIAAAQIACABIACABIABABIADACIACABIACABIABABIADAAIADACIABAAIAAAAIACABIACAAIABAAIADABIACAAIACABIABAAIAFAAIACABIACAAIABAAIADABIACAAIACABIABAAIAEAAIACABIADAAIAEABIACABIABABIABAAIADABIACABIADABIADAAIADABIACABIACABIACABIACABIACABIABABIAEABIACAAIABABIADAAIADAAIACABIABAAIABAAIACABIADABIADABIABABIACABIABABIABABIACACIAAABIABABIABABIABABIABABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAADIAAABIgBABIAAABIAAABIAAABIgBABIgBACIgBABIgBABIgCABIgBAAIgCAAIgCABIgHAAIgBgBIgDAAIgCgBIgCAAIgKAAIgCAAIgDgBIgCgBIAAAAIgCgBIgCgBIgRgBIgBAAIgEgBIgFgCIgCAAIgDgBIgCgBIgBAAIgBAAIgDgBIgCAAIgCgBIgBAAIgFAAIgCgBIgCAAIgGgBIgDAAIgBAAIgBgBIgDAAIgCAAIgCgBIgCgBIgCAAIgBgBIAAAAIgOABIgCABIgEABIgBABIgDAAIgDABIgDABIgCABIgBABIgEABIgCABIgBABIgBABIgFABIgBABIgDABIgBABIgEAAIgBABIgBAAIgCABIgCABIgDABIgCAAIgBABIgEABIgEABIgCABIgBABIgBAAIgDABIgCABIgBAAIgDAAIgCABIgDABIgBABIgCABIgDABIgDABIgCABIAAABIgDABIgCACIgBAAIgDABIgCABIgCABIgCACIgBABIgCABIgCABIgBABIgBABIgCABIgBACIgDABIgCABIgBABIgCABIgDABIgBABIgBACIgBABIgCABIgCABIgCABIgEABIgBABIgBACIgBABIgCABIgCABIgDABIgCABIgBABIgBACIgBABIgDABIgBABIgCABIAAABIgCABIgCACIgCABIgBABIgBABIgBABIgBABIgCABIgCACIgCABIgCABIgDACIgFACIgEACIgDACIgDABIgDABIgFACIgCABIgFABIgCABIgEACIgFACIgDACIgEACIgDACIgCACIgXAAg");
	this.shape.setTransform(22.8,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leg2, new cjs.Rectangle(0,0,45.6,51.9), null);


(lib.leg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("AiyEMIgCgBIgCgBIgDgCIgCgBIgCgBIgCgBIgBgBIgBgBIgCgBIAAgBIgBgCIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIABgBIAAgBIAAgCIABgBIABgBIAAgBIABgBIABgBIABgBIABgCIACgBIACgBIAAgBIACgBIABgBIADgBIACgCIACgBIABgBIABgBIACgBIADgBIABgBIACgCIACgBIADgBIACgBIAAgBIACgBIADgBIADgCIACgBIABgBIABgBIACgBIACgBIABgBIACgCIABAAIAEgBIABgBIACgBIABgCIACgBIABAAIACgBIACgBIACgBIADgBIACgBIACgBIABgBIACgBIABAAIADgBIACgBIABgBIACgBIABgBIACgBIABAAIADgBIABgBIADAAIADgCIABgBIACgBIACgBIADgBIACgBIAAAAIACgBIADgBIACgBIABgCIACgBIABgBIACgBIACgBIACgBIACgBIACgBIACgBIACgBIADgBIABgBIABAAIAkgQQAUgJAQgMIgiAFQgrANgnANQgXAJgeAHQgeAMglgCIgHAAIgGgDIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgDIAAgCIAAgCIABgBIAAgBIAAgCIABgBIABgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIABgBIABgBIABgCIACgBIACgBIACgBIACgBIABgBIADgBIACgCIACgBIACgBIADgBIACgBIACgBIACgBIADgCIADgBIACAAIACgBIACAAIABgBIACAAIADgCIACAAIABgBIACAAIACAAIAAAAIADgCIANgCIAWgFIARgFIApgKIAggFIARgFIA7gFIAAgIIAAgHIAAgPIAAgXIAAgVIAAgXIAAgWIAAgIIgCgHIgDgIIAAgHIgCgIIgCgHIAAgIIAAgHIAAgGIAAAAIAAgBIAAgBIAAgDIAAgDIAAgDIAAgDIAAgCIAAgDIAAgDIAAgCIAAgCIAAAAIAAgBIAAgBIgBgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIACgRIgFgIIgDgFIgegxIAAgTQAZgUAoAAIAPAIIAPAXIAAAMIAAAHQABAhAFAfIAAABIAAAAIgBABIAAABIAAABIAAABIAAAAIAAAEIgBABIgBAAIAAAGIAAAIIAAAHIAAAIIAAAHIACAIIACAEIAAABIAAAGIAAAHIAAAGIAAAGIAAADIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIABAAIAAABIABABIAAABIAAACIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIABAAIAAABIAAABIAAALIAAAVIAAAXIAAAWIAAARIACABIACABIABABIADABIACABIACABIABABIADABIADABIABABIAAAAIACAAIACABIABAAIADAAIACABIACAAIABABIAFAAIACAAIACABIABAAIADAAIACABIACAAIABAAIAEABIACAAIADABIAEABIACABIABAAIABABIADAAIACACIADAAIADABIADABIACAAIACABIACABIACABIACABIABACIAEAAIACABIABAAIADABIADAAIACAAIABABIABAAIACAAIADABIADABIABABIACACIABABIABABIACABIAAABIABABIABABIABACIABABIAAABIAAABIAAABIABABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIgBABIAAABIAAACIAAABIgBABIgBABIgBABIgBABIgCABIgBAAIgCABIgCAAIgHAAIgBAAIgDgBIgCAAIgCAAIgKAAIgCgBIgDAAIgCgBIAAgBIgCAAIgCgBIgRgBIgBgBIgEAAIgFgCIgCgBIgDAAIgCgBIgBgBIgBAAIgDAAIgCgBIgCAAIgBAAIgFgBIgCAAIgCgBIgGAAIgDAAIgBgBIgBAAIgDgBIgCAAIgCgBIgCAAIgCgBIgBAAIAAAAIgOAAIgCABIgEABIgBABIgDABIgDABIgDABIgCABIgBAAIgEABIgCABIgBABIgBACIgFABIgBABIgDAAIgBABIgEABIgBABIgBAAIgCABIgCAAIgDABIgCABIgBAAIgEABIgEABIgCABIgBABIgBABIgDAAIgCABIgBAAIgDABIgCABIgDABIgBABIgCABIgDAAIgDACIgCABIAAABIgDABIgCABIgBABIgDABIgCABIgCABIgCABIgBABIgCABIgCACIgBABIgBABIgCABIgBABIgDABIgCABIgBABIgCACIgDABIgBABIgBABIgBABIgCABIgCACIgCABIgEABIgBABIgBABIgBABIgCABIgCACIgDABIgCABIgBABIgBABIgBABIgDABIgBACIgCABIAAABIgCABIgCABIgCABIgBABIgBACIgBABIgBABIgCABIgCABIgCABIgBABIgBACIgCABIgBABIgCABIgBABIgBABIgBABIgBACIgBABIgBAAIgBABIgCABIAAAAIgGAEQgfAVgkAHIgCABIgBgBg");
	this.shape.setTransform(22.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leg1, new cjs.Rectangle(0,0,45.6,53.8), null);


(lib.eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AABAUIgDAAIgBAAIgBAAIAAgBIgBAAIAAAAIAAAAIgBAAIgBgBIgBAAIgBgBIAAgBIAAAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIgBAAIAAgCIAAgBIAAgDIgBgBIAAgCIABgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAAAIABgBIABAAIAAAAIABAAIABgBIABAAIABAAIABgCIABAAIABAAIABgBIAAAAIABAAIADAAIABAAIAAAAIABABIAAAAIABABIAAABIABAAIAAABIABAAIAAAAIABABIAAAAIAAABIAAAAIABABIAAAAIAAABIAAACIABAAIAAABIAAAAIABAAIAAABIAAAAIABAAIAAABIAAAAIABABIAAAAIAAABIABABIAAAAIAAAAIAAADIABAAIABAAIAAABIAAABIgBABIAAABIAAAAIAAABIgBAAIAAABIAAABIAAABIAAAAIAAABIgBAAIgBAAIAAABIAAAAIgBABIAAABIAAAAIAAABIgBAAIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIgBABIgBAAIAAAAIgBABIAAAAIAAAAIAAABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAgAAAgOIAAABIAAgBIAAAAIAAAAg");
	this.shape.setTransform(2.8,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAnIAAgBIgBAAIgBgBIAAABIgBgBIgBAAIgJgFIAAAAIgBAAIAAgCIgBgBIgBgBIgBAAIAAgBIgBgBIAAAAIgBgBIgCgCIAAAAIAAgCIAAgBIgBgBIgBAAIAAgBIAAgBIgBgBIAAgBIgBAAIAAgCIAAgBIgBgCIAAAAIgBgBIgBgBIAAgBIAAAAIAAAAIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAAAIAAAAIAAgDIAAgCIABAAIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIAAgCIAAAAIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIAAgCIAAgBIABAAIAAgBIAAgBIABAAIAAAAIAAgBIABgBIABAAIAAgBIABgBIABgBIAAAAIABAAIAAgBIABAAIABgBIAAAAIABAAIABgBIABAAIABAAIAAgBIABAAIABAAIABAAIABAAIABAAIABgBIABAAIABgBIABABIABAAIABAAIAAAAIABgBIAAAAIABABIABAAIAAAAIACAAIABABIABAAIABAAIAAAAIAEABIACAAIAAABIAGAEIABABIABABIAAAAIABABIABAAIAAAAIAAABIAAABIABABIABABIAAABIABABIAAACIABABIAAAAIABABIAAAAIAAACIAAABIAAAAIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIABAAIgBAAIAAABIABABIAAAAIgBABIAAABIAAACIAAABIgBABIAAABIAAABIgBABIAAACIgBACIAAABIAAABIAAAAIgBACIAAABIgBAAIAAABIgBABIAAABIAAABIgBAAIgBABIAAAAIgBABIgBAAIAAAAIAAABIgBAAIgBABIAAAAIgBAAIAAABIAAAAIgBABIAAAAIgBABIAAABIgBAAIgCACIAAABIgBAAIAAAAIAAAAIgCAAIgBAAIAAABIgBAAIgBABIAAAAIAAABIgBAAIgCAAIAAAAIgBABIgBAAgAgMgCIgBAAIAAACIABABIAAAEIAAAAIAAACIABAAIAAABIAAABIABAAIAAAAIAAAAIAAABIABAAIAAABIAAABIAAAAIABAAIAAABIAAABIAAAAIABAAIAAABIAAABIABAAIABABIABAAIABAAIAAAAIAAAAIABAAIAAABIABAAIABAAIADAAIABAAIAAAAIABAAIAAgBIABAAIABAAIAAAAIAAAAIAAgBIABAAIAAgBIABAAIABAAIAAgBIABAAIAAgBIAAgBIAAAAIABAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIABgBIABAAIAAAAIAAgBIAAgBIAAAAIAAgCIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAAAIgBgBIgBAAIAAgEIAAAAIAAAAIgBgBIAAgBIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIAAAAIgBAAIAAgBIAAAAIgBgBIAAgCIAAgBIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBgBIgEAAIAAAAIAAABIgBAAIgBABIgBAAIgBABIgBAAIgBAAIgBABIgBAAIAAAAIgBAAIgBABIAAAAIAAABIAAAAIgBABIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAg");
	this.shape_1.setTransform(2.6,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKA9IgHAAIgBAAIgCgBIAAAAIAAAAIgCgBIAAAAIAAgBIgCgBIgBAAIgBAAIgBAAIgBAAIAAgBIgBAAIgBgBIAAAAIgBAAIgBAAIgBAAIgBAAIAAAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIgBAAIgBAAIgBgBIAAgBIgBAAIgBAAIAAgBIgBAAIgCAAIAAgBIgCAAIgBgBIAAAAIAAgBIgBAAIgBAAIgBgBIAAgBIgBgCIAAAAIgBgBIgBAAIAAgBIAAAAIgBgBIgBAAIgBAAIAAgBIAAAAIAAgBIgJgGIAAgBIgBgBIAAAAIgBgBIAAgBIAAAAIAAgBIgBAAIAAgEIAAAAIgBgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAAAIAAgDIgBgBIAAAAIgBgBIAAgBIgBgBIAAAAIAAAAIAAgCIgBAAIAAgDIAAAAIAAgBIgBAAIAAAAIAAgBIAAgBIAAgBIAAAAIAAAAIAAgCIAAgEIgBAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIABgBIAAgCIABgCIAAgBIABgBIAAgBIAAAAIABAAIAAgBIACgBIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIAAgBIAAAAIAAgCIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIAAAAIACgCIABAAIAAgBIABAAIAAAAIABgCIAAAAIABgBIABgBIABAAIAAAAIABgBIABAAIAAgBIABAAIAAAAIABAAIABgBIABAAIAAAAIABgCIABAAIABgBIAAgBIABAAIAAAAIABAAIABgBIAAAAIABAAIABgBIAAAAIABAAIAAgBIAAAAIABgBIAAAAIABAAIAAAAIABgBIABAAIABgBIABAAIABAAIAAAAIABgBIABAAIACAAIACgBIABAAIABgBIADAAIAAAAIACAAIABgBIABAAIADAAIABAAIAAgBIAFAAIABABIAAAAIAEADIABAAIABAAIAEADIACAAIABAAIAAAAIAbASIAAAAIABABIABACIABABIACAAIABADIABACIABABIABABIABACIABABIAAABIAAAAIAAADIABABIAAAAIAAABIAAAFIABAAIAAABIAAABIABAAIAAAAIAAABIAAABIABAAIAAABIAAABIAAAAIABABIAAABIAAACIAAAAIAAABIAAABIAAACIAAACIAAABIAAABIgBABIAAAAIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAACIgBABIAAAEIgBABIAAAAIAAABIgBAAIAAADIAAAAIAAACIgBAAIAAACIAAAAIAAABIAAAAIAAAAIgBABIAAADIAAAAIgBAAIAAABIAAABIgBAAIAAAAIAAAAIgBAAIAAABIAAAAIAAABIgBABIAAAAIgBAAIAAABIAAABIgBABIAAABIAAAAIAAABIgBAAIAAAAIAAABIAAAAIgBABIAAAAIAAAAIAAABIgBAAIAAAAIAAABIgBAAIgFAGIgBAAIgBAAIgBABIAAAAIgBAAIgBABIgBAAIgBABIgBAAIgBAAIAAAAIgBAAIgBAAIAAABIgBAAIgCAAIAAAAIgBAAIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgBAAIgGABIgBAAgAgFAUIABABIAAgBIgBgBIAAABgAAVgSIAAABIABgBIAAAAIgBAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIBjIAAAAIgDgBIgBAAIgBAAIgBAAIgCAAIAAgBIgCAAIgBAAIAAAAIgBABIgCgBIgBgBIgCAAIgBAAIgBAAIgBgBIgBAAIgBAAIAAAAIgCgBIgCAAIAAAAIgCgBIgBAAIgCgBIgBAAIgCAAIgBgBIAAAAIgCAAIgBgBIgGgEIgBAAIAAAAIgCAAIgUgNIgBgCIgBgBIAAAAIgBgBIgBgCIgCgCIgBgBIgBgCIgBgBIgCgBIAAgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIgBgCIAAgBIgBgCIgBAAIAAgCIgBgCIAAgBIgBgCIgBgBIAAgCIgBgBIgBgCIAAgCIgBgBIAAgBIgBgBIAAgBIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBAAIABgBIgBgBIAAgCIABgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAAAIABgBIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIABgBIAAAAIAAAAIAAgCIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABAAIAAgCIAAAAIAAgCIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgCIAAgBIAAAAIABgBIAAgBIABgBIAAAAIAAgBIABgBIAAgCIABAAIABgBIAAgBIAAgBIAAAAIABgBIAAgBIABAAIABgBIAAAAIAAAAIABgBIAAAAIAAgBIAAgCIABAAIAAAAIABgBIAAgBIAAAAIAAgBIACgCIAAAAIABgBIAAgBIABAAIAAgBIAAAAIACgCIABgBIAAAAIADgDIAAgBIABgBIAAAAIABAAIAAgBIAAAAIABgBIAAAAIAAgBIACgBIABAAIAAAAIABgBIABAAIAAgBIACgBIABAAIABAAIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAAAIABgBIABgBIABAAIAAAAIABgBIAAgBIABAAIABgBIAAAAIABAAIABAAIAAgBIABAAIACgBIAAAAIAAAAIABgBIABAAIAAAAIABgBIAAAAIABAAIABgBIABAAIABAAIAAAAIABgBIABAAIAAgBIABAAIAAAAIABgBIABAAIABAAIAAAAIABgBIABAAIAAAAIABAAIABAAIABgBIABAAIACAAIABAAIAAgBIAEAAIABAAIADAAIAAAAIABABIACAAIAAABIACAAIAAABIABgBIACAAIAAABIABgBIABAAIABAAIAAAAIABABIABAAIACAAIABAAIAAABIABABIACACIABAAIABAAIABABIAJAEIACAAIABABIAYAQIACABIAAABIABACIABABIACACIABABIABABIABACIABACIABABIABACIABACIABAAIABACIACABIAAACIAAABIAAACQAAABABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABABIABAAIAAABIABABIAAABIABABIAAABIACACIAAAAIAAABIACACIABABIAAACIAAABIABACIAAABIAAABIABABIABADIAAABIACACIAAACIAAACIAAACIABABIAAABIAAABIAAACIABABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIgBACIgBACIgBACIAAADIAAACIgCAFIgBACIAAADIgBABIAAADIgBACIAAABIAAACIAAAAIgBABIAAABIgBAAIgBABIAAAAIAAACIgBAAIAAABIgBABIAAABIAAABIgBAAIAAABIAAACIgBAAIAAABIgCAAIAAACIgBAAIAAABIAAAAIgBABIgBABIAAABIgBAAIgBABIAAAAIgBABIgBABIgBAAIAAABIgBAAIAAABIgBABIAAABIgBABIgBAAIAAABIgBAAIgBAAIgBABIgBACIgBAAIgBAAIAAABIgCAAIAAACIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgCAAIgBABIAAAAIgBABIgBABIgCgBIgBABIgBAAIgCABIAAAAIgBAAIgCAAIgBAAIgBABIgBAAIgCABIgBAAIgBgBIgCABIAAgBIgCABIgBAAIgBAAIgCABIAAAAIgCAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAgAg6gWIgBAAIAAABIAAABIgCACIAAADIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAADIAAACIAAABIAAAAIAAABIAAABIABAAIAAABIAAAAIAAAAIABABIAAACIAAAAIAAACIABAAIAAABIAAAAIAAACIABAAIAAABIABAAIAAADIAAAAIAAABIABABIAAACIAAAAIAAABIABAAIABABIAAADIAAAAIAAABIABAAIAAABIABABIAAABIAAAAIAAABIAJAGIAAABIABABIAAAAIAAAAIABABIABAAIAAABIAAAAIABABIABAAIAAAAIABACIABABIABABIAAAAIABAAIAAABIABABIABAAIABABIAAAAIACAAIABAAIAAABIABABIABAAIABAAIAAABIABAAIABAAIABABIAAAAIABABIABAAIABAAIABABIABAAIABABIABAAIABAAIAAAAIABAAIABABIAAAAIABAAIABABIAAAAIABAAIACAAIAAABIABAAIACAAIAAABIAAAAIACABIAAAAIABAAIABABIABAAIAIAAIABAAIAFgBIABAAIACAAIABAAIAAAAIACgBIAAAAIABAAIABAAIAAgBIACAAIABAAIAAAAIABAAIABAAIAAgBIABAAIABAAIABAAIABAAIABgBIABgBIABAAIABgBIABAAIAAAAIAFgGIABAAIAAAAIAAgBIABAAIAAAAIAAgBIABAAIAAgBIAAAAIABgBIAAAAIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABAAIAAgBIAAAAIABAAIAAgBIAAgBIABAAIAAAAIAAgDIABAAIAAgBIAAAAIAAAAIABgBIAAgCIAAAAIAAgCIABAAIAAgCIAAgBIAAgBIABAAIABgBIAAgEIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIgBAAIAAgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAAAIAAgFIgBAAIAAgBIAAAAIAAgEIgBAAIAAgBIAAAAIgBgCIgCgCIgBgBIgBgCIgBgCIgBgBIgBgBIgBgBIgBgBIgBgBIgagRIgBAAIgBgBIgCAAIgEgDIAAAAIgCAAIgEgDIAAAAIgBAAIgFAAIAAAAIgBAAIgCABIgBAAIgBAAIgCABIgBAAIgDAAIgBAAIAAAAIgDABIgBAAIgCAAIgBABIAAAAIgBAAIgBAAIgBABIAAAAIgBABIgBAAIAAABIgBAAIAAAAIgBABIAAAAIgBABIAAAAIgBAAIgBAAIAAABIgBAAIAAAAIgBABIAAAAIgBAAIAAABIgBAAIgCACIAAAAIgBAAIgBABIgBAAIAAABIgBAAIAAAAIgBABIAAAAIgBABIgBAAIgBABIAAAAIgBABIgBABIAAAAIgBAAIAAABIgBAAIgBACIgBAAIgBAAIAAABIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAABIAAAAIAAACIgBAAIAAABIAAAAIgBABIAAAAIgBABIAAAAIAAAAIAAABIgCACIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye2, new cjs.Rectangle(-9,-9.9,18.1,19.8), null);


(lib.eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAEASIgIAAIAAAAIgBgBIgCgBIgCAAIAAgBIgBgBIgBgBIgBgBIgBAAIgBgBIgCgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBAAIAAAAIgBgBIAAgBIgBgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIACAAIABAAIACAAIABAAIABgBIABgBIACAAIABAAIABgBIABAAIACgBIACAAIACgBIACAAIABgBIAKAAIABABIABAAIACAAIABABIACAAIABABIABABIACAAIACABIACAAIABABIACAAIACABIAAAAIABABIACABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIgBABIAAAAIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIgBABIAAAAIgBABIgBABIgBABIAAABIgCAAIgBABIgCABIgCAAIgBABIgCAAIAAAAIgBABIgBABIgDABIgBAAIgBABIgBABg");
	this.shape.setTransform(13.1,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABRBCIgxAAIgBAAIgCAAIgCAAIgKgCIAAAAIgCAAIgCAAIgFgBIgCgBIgCAAIgCAAIgBAAIgBgBIgCAAIgCgBIAAAAIgCAAIgDgBIgCAAIgDgBIgDgBIgDAAIgFgCIgBAAIgEgBIgCgBIgDgBIgCAAIAAAAIgCgBIgCgBIgCgBIgDgBIgCgBIgCgBIgCgCIgBAAIgBgCIgCAAIgDAAIgCgCIgCgBIgBgBIgBgBIgCgBIgDgCIAAgBIgCAAIgCgBIgCgBIgCgCIgBgBIAAgBIgCgBIAAgBIgCgBIAAgBIgDgBIgBgBIgCgCIgBgBIgBgBIgBgBIgCgBIAAgBIgBgBIgBgBIgBgCIgBgBIgBgBIgCgBIAAgBIgCgBIAAgBIgBgBIAAgBIgBgCIgBAAIgBgBIAAgBIgBAAIAAgCIAAgBIgBgBIgBgBIAAgBIgBgCIgBAAIgBgBIgBgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgDIABgBIAAgBIAAgBIACgBIACgBIABgBIABgBIACgCIABAAIABgCIABgBIACgBIACgBIABAAIACgCIAAAAIACgCIAEgCIABAAIABgCIABAAIAEgBIABAAIABgBIACgBIADgBIABAAIADgBIACgBIABgBIACAAIADgBIACgBIACAAIABAAIAzAAIAAAAIACAAIACABIAHAAIABABIAEABIAHAAIAAAAIACAAIACABIADAAIABABIADAAIABABIABAAIABAAIACAAIAGACIAGABIACAAIACABIAFABIABABIACACIACABIAEAAIABABIABAAIABABIABABIACAAIACACIACABIABABIACACIACAAIACACIABABIACAAIABACIABAAIACACIACACIACAAIACACIABAAIACACIACABIACAAIABACIABAAIABACIABACIABAAIACACIACAAIAAABIABABIAAABIABACIAAABIABABIAAABIABABIABABIAAABIAAABIACABIAAACIABABIABABIAAADIAAAFIAAADIAAAGIAAADIAAADIAAADIAAADIAAAEIAAACIgBACIAAABIgBABIAAACIgCAAIAAACIAAABIAAAAIgBACIgBAAIgCACIAAACIgBAAIgBACIgBAAIgCACIgBABIgBAAIgBACIgCAAIgBACIgBACIgCAAIgCABIgBABIgBABIgBABIgDABIgDACIgBAAgAgyg2IAAABIgBAAIgCABIAAABIgBABIgBABIgCABIgCAAIgBABIgBAAIgBABIAAABIgBABIgBABIgBAAIAAACIgBAAIgBABIAAABIgBABIAAAAIAAABIAAABIgBABIAAAAIAAABIgBABIAAABIAAABIgBABIAAABIgBAAIAAABIAAABIgBAAIAAABIgBABIAAABIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAAAIABABIAAABIAAAAIAAAAIABABIAAABIAAABIABABIABABIAAABIABAAIAAABIABAAIAAABIABABIAAABIABABIABABIABABIAAABIABAAIABABIAAAAIAAABIAAABIABABIABABIAAAAIAAACIABAAIABABIABABIABABIABABIAAAAIABABIABABIAAAAIABABIABABIABABIABABIAAABIACABIABAAIACABIABABIABAAIACABIACAAIACAAIABABIAAAAIACAAIARAAIACAAIABAAIAAgBIADAAIACAAIABAAIABgBIABAAIACgBIACgBIABAAIABgBIACgBIABAAIACgBIABgCIABAAIABgBIABgBIABgBIABAAIACgBIABgBIABAAIACgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIABAAIABgBIABAAIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIABgBIAAAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgCIAAgCIAAgCIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIgBAAIAAgBIgBgBIAAAAIgBgBIgBgBIAAgBIgCAAIgBgBIgBgCIgBAAIgBgBIAAgBIgBgBIgBgBIgBAAIgCgBIAAAAIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgCgBIgBAAIgBgBIgCAAIAAgBIgCAAIAAAAIgCgBIgBgBIgCgBIgBgBIgCAAIgCgBIgCAAIgBAAIgCgBIgBAAIgIgBIAAAAIgCAAIgBAAIgMAAIgCAAIgBAAIAAAAIgCABIgCAAIgCAAg");
	this.shape_1.setTransform(15.7,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaBvIgDgCIgBAAIgBAAIgLAAIgCgBIgCAAIgBgBIgDAAIgCAAIgBgBIgEAAIgBgBIgCAAIgDgBIgCAAIgDgBIgCAAIgBgBIgBAAIgDAAIgBAAIgBgCIgEAAIgCAAIgDgBIgCgBIAAgBIgBAAIgDgBIgCAAIgDgBIgBAAIgCgBIgDgBIgDgBIgCgBIgCgBIgCgBIgCAAIgBgBIgCgBIgDAAIgBgBIgBgCIgBAAIgDgBIgCgCIgCAAIgCgBIgCgBIgDgBIgCgBIgCgBIAAgBIgCgBIgCgCIgDAAIgBgCIgBgBIgCAAIgCgCIgCAAIgCgCIgBgCIgBAAIgBgCIgCAAIgCgBIgCgCIgBAAIgCgCIgBgBIgCgBIgBgCIgBAAIgBgBIgBgBIgBgBIgBgCIgCgBIAAgBIgBgBIgBgBIgBAAIgBgCIgBgBIgBgBIAAgCIAAAAIgBgCIgBgBIgBgBIgBgBIgBAAIgBgCIgBgCIAAAAIgBgCIgBAAIAAgCIgBgBIgBAAIAAgCIAAAAIgCgCIAAgCIgBAAIAAgCIgBAAIAAgBIgBgCIAAAAIAAgCIAAgBIAAgBIgBgCIgBAAIAAgBIAAgBIAAgBIgBgCIgBgBIAAAAIAAgBIAAgBIAAgCIAAgBIAAgEIAAgCIAAgDIAAgDIAAgFIAAgDIAAgDIAAgCIAAgDIAAgDIAAgBIAAgBIABgBIABgBIAAgBIAAgCIABgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgCIABgBIAAgBIABgBIAAAAIABgCIABgBIAAgBIAAgBIABgBIABgCIAAgBIABgBIABAAIACgBIAAgCIACgBIABgBIABgBIABgBIABgCIABAAIABgBIABgBIACgBIAAgCIADgBIACgBIAAgBIACgBIABgBIABgBIACgBIACgCIACgBIABgBIABAAIACAAIABgBIACAAIACgBIABgBIACAAIAAAAIACgBIABgBIABgCIACgBIACgBIACAAIADgCIACAAIAAAAIACgBIADAAIACgBIACgBIACgBIACgBIAEgBIACgBIADAAIACgBIABgBIADAAIAtAAIACAAIACABIARABIACAAIACABIAAAAIAGAAIABAAIACgBIACAAIACAAIADABIABACIABABIACABIAAABIABAAIACAAIABABIACAAIADAAIACAAIACABIABAAIADABIACAAIADAAIACABIADABIACACIAAAAIADAAIABABIADABIACAAIADABIABAAIACABIABAAIABABIADAAIACACIADAAIABACIABABIACABIABACIACAAIACABIADABIACABIACACIADABIADACIABABIABABIACABIABABIACABIABACIAAABIACABIABABIABAAIACACIAAABIACABIABACIABAAIABACIACABIACAAIACACIABAAIABACIABABIABABIABACIAAAAIABABIABABIAAABIAAACIAAABIABABIABABIAAABIABABIABABIAAABIAAABIABACIABABIABABIACABIAAABIABABIAAABIABABIAAACIAAABIABABIAAABIABAAIABACIAAABIABABIAAACIABAAIAAACIAAABIABAAIAAABIAAADIAAABIAAADIAAACIAAACIAAAEIAAAEIAAAEIAAADIAAACIAAADIAAADIgBABIAAABIAAABIgBABIAAABIAAABIAAACIAAABIAAAAIgBABIgBABIAAACIgBABIAAABIAAABIgBABIAAACIgBAAIgBABIAAABIAAABIgBACIgBABIgBABIAAABIgBABIAAABIgBABIAAABIgBACIAAABIgBABIAAABIgBABIgBABIAAABIAAABIgBACIgBABIAAABIgBABIgBABIgBAAIAAACIAAABIgBABIgBACIgBAAIgBACIAAAAIgCABIgBACIgBAAIAAACIgBABIgCABIgBACIgBAAIgBABIgCABIgCABIgBACIgCABIgCABIgCABIgBABIgCABIgCABIgBABIgCABIgCACIgCAAIgBABIgCAAIgCABIgDAAIgCABIgBAAIgCABIgCAAIgDABIgDAAIgDABIgCABIgDAAIAAAAIgCAAIgCACIgmAAgAhVg9IgCABIgBACIgBAAIgEACIgBABIgBAAIgCACIgBAAIgCACIgBABIgBABIgBACIgBAAIgDABIgBABIgBABIgCACIgBABIgBABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAADIAAABIAAABIAAABIAAAAIABACIAAABIABABIAAACIABAAIABACIAAABIABAAIABABIAAABIAAACIABABIABABIABABIABABIABACIAAAAIABABIAAAAIABABIAAACIACABIABABIABABIABABIACABIAAABIABABIABACIABABIABABIACABIABABIABABIADABIAAABIACACIAAABIACABIAAABIACAAIACACIABABIACABIACABIABABIADACIABABIABAAIABABIADABIACACIACAAIACABIABACIACAAIACACIABABIACAAIADABIACABIACABIACABIAAAAIACABIADABIACABIAEABIACAAIAEABIADAAIAEABIACABIACAAIADABIACABIABAAIABABIABAAIACABIABAAIACAAIACAAIACABIAFABIACAAIACAAIAAAAIALABIACAAIACAAIAAAAIAxAAIABAAIACAAIACgBIADgBIABgBIACgBIABgBIACgCIABAAIABgCIABgBIACAAIABgCIACAAIABgCIABgCIABAAIABgCIABAAIABgBIABgCIABAAIABgCIABgBIAAgBIAAgCIABAAIAAgBIABgBIAAgBIABgCIAAgDIAAgDIAAgEIAAgDIAAgCIAAgEIAAgFIAAgEIAAgDIAAgFIgBgBIgBgBIAAgCIgBAAIgBgBIAAgBIgBgBIAAgCIgBgBIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIgCgBIgBgCIgBAAIgCgCIgBgBIgBAAIgBgCIgCAAIgBgCIgDgCIgBAAIgCgCIgCAAIgCgBIgBgCIgBAAIgCgCIgCgBIgBgBIgCgCIgCAAIgBgBIgCgBIgCgBIgCgCIgCgBIgBgBIgBgBIgBAAIgBgBIgDAAIgCAAIgDgCIgBgBIgEgBIgDgBIgCgBIgFgBIgGgCIgCAAIgBAAIgBAAIgCgBIgDAAIAAAAIgEAAIgCgBIgCAAIAAAAIgHAAIgDgBIgBgBIgHAAIgDgBIgBAAIgBgBIgzAAIAAABIgCAAIgDABIgCABIgCAAIgCABIgCABIgDAAIgBAAIgDABIgCABIgBABIgBAAIgDABgAgfAhIgCAAIgBAAIgBgBIgCAAIgBAAIgCgBIgCAAIgBgBIgCgCIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIAAgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBgBIgBgBIAAAAIAAgBIgBAAIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAAAIgBgBIAAgBIgBgBIAAAAIgBgCIAAAAIgBgBIgBAAIgBgBIAAAAIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAAAIABgBIAAgBIABAAIAAgBIAAgCIABAAIAAgBIABgBIAAgBIABgBIAAAAIAAgBIABAAIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABAAIAAgBIABAAIABgBIABgBIABgBIAAgBIABgBIACgBIABAAIACgBIABgBIABAAIABgBIABgBIABAAIABgBIABAAIACAAIACgBIAAAAIABAAIACAAIAMAAIABAAIACAAIAAAAIAIABIABAAIACABIACAAIABAAIACABIACAAIACABIABAAIACABIABABIAAAAIABAAIABABIACAAIABACIACAAIABABIABABIABABIACAAIABABIABABIABABIABAAIABABIABABIABABIABABIABABIAAABIABAAIACABIABABIABAAIAAABIABABIABABIAAABIABABIABABIAAAAIABABIAAABIAAAAIABABIAAABIAAABIAAACIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAADIAAACIAAABIAAACIgBAAIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIgBABIAAAAIAAABIgBABIAAABIgBABIgBAAIAAACIgBAAIgBABIAAABIgBABIAAAAIgBABIgBABIgCABIgBAAIgBABIgBABIgBABIgBABIgBABIgCABIgBAAIgBABIgBABIgCAAIgBABIgCABIgBABIgCABIgBABIgCAAIgBABIgBAAIgCAAIgCAAIgBABIgBAAIgBAAIgRAAgAg0gZIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIABABIAAABIAAABIABABIAAABIABABIAAAAIABABIAAABIABAAIABABIABABIABABIABABIAAABIABABIABAAIABABIACABIABABIABAAIABABIABAAIAAABIACAAIACACIABAAIAAAAIAJAAIABAAIABAAIABgCIABAAIACgBIACAAIABgBIAAAAIACAAIABAAIACgBIACAAIABgBIABgBIABgBIABAAIAAgCIABgBIAAAAIABgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIgCgBIgBgBIAAAAIgBgBIgCAAIgCgBIgBAAIgCgBIgCAAIgBgBIgBAAIgCgBIgBAAIgCgBIgBAAIgBAAIgMAAIgBAAIgBABIgCAAIgCABIgCAAIgCAAIAAABIgBAAIgCAAIgBABIgBABIgCAAIgBAAIgBAAIgCAAIAAABg");
	this.shape_2.setTransform(15.6,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye1, new cjs.Rectangle(0,0,31.2,22.1), null);


(lib.creast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABnCiIgQgHIgRgFIgPgFIgPgFIgUgFIgRgFIgHgFIgPgFIgtgFIgPgFIgZgFIgPgFIgjgFIgPgFIgtgFIgNgFIgHgFIgPgFIgNACIgHAAIAAgMIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIADgHIAEgIIADgHIAFgIIACgHIAGgIIACgHIAFgIIAFgHIADgIIACgHIAIgIIAHgHIAHgIIAIgHIAHgIIADgCIAKABIAAABIAAAFIAAAIIADAHIAEAIIADAHIAAAIIAAAWIAAAXIAAAWIAAAXIAAAWIAAAOIAAAPIAFAHIAIAIIARAFIAMgDIAIgFIAIgHIAPgPIAOgOIAIgHIAIgIIAHgHIAIgIIAOgHIAKgIIAKgHIAUgFIAHgFIAPgIIAZgCIAAAFIAAAHIAAAIIAAAHIAAAPIAAAIIAAAHIAAAIIAAAHIAAAGIgCAIIgIAHIgIAIIgCAHIAAAIIAAAHIAAAIIAAAHIAAAIIAFAHIAHAIIASAFIAMgDIAFgCIAGgFIACgIIAFgHIADgIIAKgHIACgIIAFgHIAMgIIAKgHIAIgIIAIgHIAHgHIAHgHIALgHIAUgFIAHgFIAHgIIANgFIAMgCIAGgDIAHADIAHAHIAFAIIADAHIAAAIIADAHIACAGIACAIIADAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIgDAHIgEAIIgDAHIgFAIIgFAHIgIAIIgCAHIgFAIIgKAHIgSAFIgHAFIgHAIIgNAFIgSAFIgxACIgKgFg");
	this.shape.setTransform(34.1,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACLDPQg+gWg9gcQg0gIg3gFQgkgDgfgEIg9gUIgHgHQgPgDgOgEQgPgDgUAAQgXACgMgGIgKgMIALAAIAAgIIAAgPIAAgPIAAgWIAAgXIAAgVIAAgWIAAgPIADgIIAFgHIACgIIAGgHIAEgIIADgHIAFgIIAHgHIADgIIADgHIAAgIIAEgHIAIgIIAIgHIAHgIIACgHIADgIIAHgHIAIgIIAIgHIAHgIIASgEIAAgBIAoAAIAPAFIAKAIIAHAHIAHAIIAGAHIACAIIADAHIAAAIIAEAHIADAIIADAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAPIAAAIIAAAHIAAAIIAEAAIAIgIIAIgHIAMgIIANgHIAHgIIAPgHIAKgFIANgFIAHgIIAFgFIAEgCIAMgDIAzAAIAOAFIAKAIIAIAHIAHAIIAGAHIACAIIACAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAFIAIgDIAIgHIAHgIIAPgHIAKgFIANgFIAHgIIAFgFIAFgCIAMgFIAIgFIAMgDIAfAAIAOAFIAKAIIAIAHIAHAIIAIAHIAIAIIAHAHIADAIIAEAHIAAAIIAAAHIAAAIIADAHIACAGIADAIIADAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgDAIIgDAHIgFAIIgCAHIgFAIIgDAHIgEAIIgGAHIgHAIIgDAHIgEAIIgGAHIgHAIIgKAHIgPAIIgSAHIgHAIIAAACIgDAAQgrAAgrgOgAjkBUIAHAFIAMAFIAuAFIAPAFIAjAFIAOAFIAaAFIAPAFIAtAFIANAFIAIAFIARAFIAUAFIAPAFIAQAFIARAFIAPAHIAKAFIAygCIASgFIAMgFIAHgIIAIgFIASgFIAJgHIAGgIIACgHIAIgIIAEgHIAGgIIACgHIAFgIIADgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIgDgHIgDgIIgCgHIgCgGIAAgIIgDgHIgFgIIgIgHIgHgDIgFADIgNACIgMAFIgIAIIgHAFIgUAFIgKAHIgIAGIgHAIIgIAHIgHAIIgKAHIgNAIIgEAHIgDAIIgKAHIgCAIIgGAHIgCAIIgFAFIgFACIgMADIgSgFIgHgIIgGgHIAAgIIAAgHIAAgIIAAgHIAAgIIADgHIAHgIIAIgHIACgIIAAgHIAAgGIAAgIIAAgHIAAgIIAAgPIAAgHIAAgIIAAgHIAAgFIgYACIgQAIIgHAFIgTAFIgKAHIgKAIIgPAHIgIAIIgHAHIgHAIIgIAGIgPAPIgPAPIgHAHIgIAFIgNADIgRgFIgHgIIgFgHIAAgPIAAgOIAAgWIAAgXIAAgWIAAgXIAAgWIAAgIIgDgHIgFgIIgCgHIAAgIIAAgFIAAgBIgKgBIgDACIgHAIIgIAHIgIAIIgHAHIgIAIIgCAHIgCAIIgGAHIgEAIIgDAHIgFAIIgCAHIgGAIIgCAHIgFAIIgCAHIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAMIAHAAIAMgCIAQAFg");
	this.shape_1.setTransform(33.6,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.creast, new cjs.Rectangle(0,0,67.1,44.2), null);


(lib.body1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,117,64,0.31)").s().p("ABIN8IgPgEIhAgGIgPgEIg+gQIg6gPIgUgCIgIgFIgOgHIgSgGIgNgEIgRgGIgKgCIgIgFIgegPIgdgPIgfgPIgKgIIgKgHIgOgHIgIgIIgNgHIgOgIIgKgIIgLgHIgKgHIgHgIIgHgIIgIgHIgIgIIgPgOIgOgQIgGgHIgEgIIgGgHIgFgHIgHgIIgHgIIgGgHIgEgIIgDgHIgKgHIgMgIIgGgIIgCgHIgFgIIgDgHIgEgHIgIgIIgIgIIgHgHIgIgIIgCgHIgFgHIgDgIIgEgIIgDgHIgHgIIgIgHIgHgHIgDgIIgFgIIgCgHIgGgIIgCgHIgFgHIAAgIIgDgIIgCgHIgFgIIgDgHIgFgHIgHgIIgFgIIAAgHIgCgIIgDgHIgFgHIgCgIIgGgHIgCgIIgFgIIgDgHIgCgHIAAgIIAAgHIgFgIIgCgIIgDgHIgFgHIgCgIIgDgHIAAgIIAAgIIAAgHIgDgHIgCgIIgCgHIgDgIIgDgIIgCgHIgCgHIgDgIIAAgHIAAgIIAAgIIAAgHIgDgHIgCgIIgDgHIgCgIIAAgtIAAhKIAAhLIAAhLIAAhLIAAhEIACgHIADgHIAAgIIACgIIADgHIAAgIIAAgHIAAgHIAAgIIAAgIIAAgHIADgIIAAgHIACgHIACgIIAAgIIADgHIADgIIACgHIACgHIADgIIAAgIIAAgHIAAgIIAAgHIAAgHIAAgIIAAgIIADgHIACgIIAAgHIACgHIADgIIADgIIAAgHIACgIIACgHIADgHIAAgIIACgIIADgHIADgIIAAgHIACgHIACgIIADgIIADgHIACgIIACgHIADgHIAAgIIADgIIAEgPIAGgOIAEgQIAFgPIAGgOIAEgQIAIgHIAIgIIACgHIAFgHIAFgIIACgIQh7LyE5F8QIgHyLKlhIgBADIgCAHIgDAIIgDAHIgCAIIgFAIIgDAHIgEAHIgDAIIgFAHIgCAIIgGAIIgCAHIgHAHIgGAIIgCAHIAAAIIgCAIIgGAHIgEAHIgDAIIgFAHIAAAIIgCAIIgDAHIgHAHIgIAIIgHAHIgDAIIgFAIIgFAHIgHAHIgDAIIgFAHIgFAIIgIAIIgHAHIgHAHIgKAIIgPAHIgIAIIgFAIIgFAHIgMAHIgIAIIgFAHIgFAIIgNAIIgHAHIgHAHIgKAIIgPAHIgIAIIgIAIIgHAHIgMAFIgKAFIgQAHIgMAFIgNADIgHAFIgNAFIgMAFIgRAFIgGADIgYAMIgPAHIAAgCIgGgFIABAQIgKACIgIACIgGADIgGACIgJACIgGABIgEABIgCABIgKABIgGABIgBABIgEAAIgFABIgHADIgBAAIioAAg");
	this.shape.setTransform(85.3,99.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#46B15B").s().p("AAyOJIgPgFIhAgFIgPgFIg+gPIg6gPIgUgCIgIgGIgOgHIgSgFIgNgFIgRgFIgKgDIgIgEIgegQIgdgPIgfgOIgKgIIgKgIIgOgHIgIgIIgNgGIgOgIIgKgIIgLgIIgKgHIgHgIIgHgHIgIgHIgIgIIgPgPIgOgPIgGgHIgEgIIgGgIIgFgHIgHgIIgHgHIgGgHIgEgIIgDgIIgKgHIgMgIIgGgHIgCgHIgFgIIgDgIIgEgHIgIgIIgIgHIgHgHIgIgIIgCgIIgFgHIgDgIIgEgHIgDgHIgHgIIgIgIIgHgHIgDgIIgFgHIgCgHIgGgIIgCgIIgFgHIAAgIIgDgHIgCgHIgFgIIgDgIIgFgHIgHgIIgFgHIAAgHIgCgIIgDgIIgFgHIgCgIIgGgHIgCgHIgFgIIgDgHIgCgIIAAgIIAAgHIgFgHIgCgIIgDgHIgFgIIgCgIIgDgHIAAgHIAAgIIAAgHIgDgIIgCgIIgCgHIgDgHIgDgIIgCgHIgCgIIgDgIIAAgHIAAgHIAAgIIAAgHIgDgIIgCgIIgDgHIgCgHIAAgtIAAhLIAAhKIAAhLIAAhMIAAhDIACgIIADgHIAAgIIACgHIADgHIAAgIIAAgIIAAgHIAAgIIAAgHIAAgHIADgIIAAgIIACgHIACgIIAAgHIADgHIADgIIACgIIACgHIADgIIAAgHIAAgHIAAgIIAAgIIAAgHIAAgIIAAgHIADgHIACgIIAAgIIACgHIADgIIADgHIAAgHIACgIIACgIIADgHIAAgIIACgHIADgHIADgIIAAgIIACgHIACgIIADgHIADgHIACgIIACgIIADgHIAAgIIADgHIAEgPIAGgPIAEgPIAFgPIAGgPIAEgPIAIgHIAIgIIACgIIAFgHIAFgIIACgHIADgHIAAgIIAFgHIADgCIAEgBIAGADIAMACIArAFIARAFIAgAFIASAFIAXAFIARAFIAqAFIASAFIAUAFIASAFIAEAFIASAFIARACIAKAGIAQAHIARAFIAIACIAHAFIAHAIIASAFIAHADIAIAEIAIAIIAOAFIAGAFIAPAGIACABIAIAGIAOAHIASAFIAHACIAIAGIAIAHIARAFIASACIAHAFIACACIABABIABgBIAdAAIAGACIAHADIAFACIAFACIACADIABABIAFACIADACIAGACIAEADIADAEIADACIAGAEIAEACIAEACIAFADIACACIAIABIAGACIAKACIAGADIAGACIAHABIADACIAFACIAEAEIAEADIADADIAGADIADACIAFACIAEAEIACACIABAAIAHACIANAFIAOAFIAGAFIAOAIIALAHIAKAHIAMAIIAKAHIAIAIIAJAIIANAIIAKAGIAHAIIALAHIAOAIIAQAIIAKAHIAHAHIAIAIIAHAHIANAIIAMAIIAHAHIAQAHIAKAIIAHAHIAIAIIAOAIIAKAHIAIAHIAIAIIAHAHIAMAIIANAIIAPAOIAXAXIAWAWIAXAXIAWAWIAFAIIAFAIIADAHIAOAPIAmAmIAeAeIAeAdIAeAfIADAHIACAHIAAAIIAFAIIAHAHIAGAIIACAHIAFAHIAFAIIAAAAIAFAEIACADIABADIADADIABACIABAAIABABIgBAAIADADIADAEIADACIADADIAEAEIABADIACADIABADIACADIABADIACAEIABADIABACIAAADIAAADIABAEIACADIABACIAAAEIAAADIAAACIABABIAFAIIAAAIIAAAHIAFAIIAFAHIAFAHIADAIIACAIIAAAHIAAAIIAAAHIAFAHIADAIIACAIIAAAHIAAAPIAAAHIAAAIIAAAPIAAAIIAAAOIAAAQIgCAHIAAAIIgDAHIAAAHIgDAIIAAAIIgCAHIAAAIIAAAHIAAAHIAAAIIAAAHIgCAIIgGAIIgEAHIgDAHIgFAIIAAAHIAAAIIAAAIIgFAHIgDAHIgEAIIgDAHIgCAIIgDAIIgDAHIgCAHIgFAIIgDAHIgEAIIgDAIIgFAHIgCAHIgGAIIgCAHIgHAIIgGAIIgCAHIAAAHIgCAIIgGAHIgEAIIgDAIIgFAHIAAAHIgCAIIgDAHIgHAIIgIAIIgHAHIgDAHIgFAIIgFAHIgHAIIgDAIIgFAHIgFAHIgIAIIgHAHIgHAIIgKAIIgPAHIgIAHIgFAIIgFAHIgMAIIgIAIIgFAHIgFAHIgNAIIgHAHIgHAIIgKAIIgPAHIgIAHIgIAIIgHAHIgMAGIgKAEIgQAIIgMAFIgNADIgHAEIgNAGIgMAEIgRAFIgGADIgYANIgPAGIAAgCIgGgEIABAPIgKADIgIACIgGACIgGACIgJADIgGABIgEABIgCAAIgKABIgGABIgBABIgEAAIgFACIgHADIgBAAIioAAg");
	this.shape_1.setTransform(87.5,97.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADLPPIgGgBIgDAAIiVAAIgRgFIg+gFIgRgFIgNgEIgogLIgUgFIAAAAIgGgBIgFgBIgHgBIgCgBIgFgBIgGgBIgPAAIgDgBIgGgCIgJgCIgHgCIgEgBIACgCIgPgEIgHgIIgIgFIgHgCIgRgFIgXgFIgSgFIgHgIIgNgHIgPgIIgOgHIgfgPIgegPIgHgIIgMgHIgNgIIgKgHIgYgQIgVgOIgKgIIgIgHIgHgIIgHgHIgIgIIgPgPIgPgPIgPgPIgFgHIgFgIIgFgHIgFgIIgHgHIgIgIIgFgHIgFgIIgNgHIgHgIIgFgHIgCgIIgGgHIgCgIIgFgHIgFgIIgIgHIgHgIIgIgHIgEgIIgGgHIgCgIIgFgHIgDgIIgEgHIgIgIIgHgHIgGgIIgEgHIgDgIIgFgHIgCgIIgGgHIgCgIIgFgHIgDgIIgCgHIAAgIIgFgHIgFgIIgHgHIgIgIIgFgHIAAgIIAAgHIAAgIIgFgHIgCgIIgGgHIgCgIIgFgHIgCgIIgGgHIgCgIIAAgHIAAgIIgCgHIgDgIIgFgHIgCgIIgGgHIgCgIIAAgHIAAgIIAAgHIAAgIIgCgHIgDgIIgDgHIgCgIIgDgHIgCgIIgCgHIgDgIIAAgHIAAgIIAAgHIAAgIIgDgHIgCgIIgCgHIgDgIIAAgeIAAhKIAAhSIAAgtIAAgmIAAgWIAAhLIAAg8IAAgIIADgHIAAgIIACgHIACgIIADgHIAAgIIAAgHIAAgIIAAgHIAAgIIAAgHIADgIIAAgHIACgIIAAgHIACgIIADgHIAAgIIACgHIADgIIADgHIACgIIAAgHIAAgIIAAgHIAAgIIAAgHIAAgIIACgHIAAgIIADgHIABgCIACgGIACgHIAAgEIgBAAIgEACIABgBIABgDIAAgCIABgDIACgCIAAgDIACgCIABgDIABgCIACgDIABgDIAAgCIABgDIAAgKIAAgKIAAAAIABgCIABgCIAAgDIABgCIAAgDIAAgCIAAgDIAAgCIAAgDIAAgCIAGgCIACAAIABgDIACgHIADgIIACgHIADgIIADgHIAAgIIACgHIACgIIADgHIAAgIIADgFIgGAAIAAAAIACgDIACgCIACgDIACgCIABgDIABgCIABgDIADgCIABgDIABgCIABgDIAAgDIABgCIAAgFIAAgIIAAgHIAAgIIAAgIIAAgFIAAgCIAAgEIACgCIAIgIIAHgHIAGgIIACgHIAAgIIAAgEIACgCIADgDIADgCIACgDIACgCIAAgDIACgCIABgDIAAgCIABgDIACgDIABgCIAAgDIAAgCIAAgDIAAgCIABgDIABgCIACgDIAAgCIACgDIABgCIAAgDIABgDIACgCIACgDIACgCIABgDIABgCIABgDIAAgBIAFAAIAIAAIACABIAEABIAFABIAgAAIADABIAHAFIANAFIAtAFIAPAFIAjAFIAPAFIAZAFIAPAFIAtAFIAPAFIAIAFIARAFIAUAFIAPAFIAPAFIARAFIAQAHIAJAFIASAAIAEACIAFACIAEADIAEACIADADIAEACIAFADIAFACIACAAIADACIAGADIAEACIAGACIAFABIAFACIACACIAFADIADACIABADIACACIACADIACACIADADIADACIADADIAEACIAFADIAGABIAEABIACABIADABIAAAAIAIAFIAHADIARAFIAPAHIAIAFIAKADIASAFIAPAHIAHAFIADACIAOAGIAXAFIAPAFIAPAFIAQAFIAQAHIAKAIIACACIAIAFIAAABIAGABIATAGIAOAHIAIAFIADACIAOAGIANAFIAPAFIAKAHIANAIIAMAHIAIAIIAPAHIAKAIIAHAHIAHAIIAPAHIAKAIIAIAHIAIAIIAPAHIAOAIIANAHIAHAIIAIAHIAHAIIAKAHIANAIIAKAHIAMAIIANAHIAHAIIAIAHIANAIIAMAHIAIAIIAHAHIAHAIIALAHIAMAIIAKAHIAIAIIAPAPIAWAWIAeAeIAeAeIAPAPIADAIIAEAHIAGAIIAHAHIAPAPIAXAXIAdAeIAeAeIAaAaIAFAEIAEAHIADAIIAFAHIACAIIADAHIADAFIACADIADAEIAAABIAAABIABACIABABIABACIACABIABACIABABIACABIABACIACABIABACIABABIACABIACACIABABIACACIACABIABACIABABIABABIACACIAAABIABACIABABIABACIAAABIABABIABACIACABIACACIABABIACABIACACIAAAFIAAAFIAFAFIACAIIACACIAGADIAIAHIAEAIIADAHIAAAIIgFAGIgBACIABABIACAHIADAIIAAAHIADAIIAEAHIAGAIIACAHIAFAIIAAAHIAAAIIAAAHIAAAIIAFAHIADAIIACAHIAAAIIAAAHIAAAPIAAAPIAAAXIAAAPIAAAWIAAAPIgCAIIAAAHIgDAIIAAAHIgDAIIAAAHIgBAHIgBABIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIgFAHIgCAIIgIAHIgEAHIgBABIAAABIAAAEIAAABIAAACIgBABIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAACIgBABIgBACIgBABIgBABIgCACIgBABIgBACIgCABIgBACIAAABIgBABIgBACIgCABIgBACIAAABIAAACIgBABIAAABIAAACIAAABIAAACIgBABIgBABIAAACIAAABIAAACIgBABIgBACIAAABIAAABIgBACIgBABIAAACIgBABIAAACIgBABIAAABIgBACIgBABIgBACIgBABIAAACIAAABIgBABIAAACIgBABIAAACIAAABIgBABIAAACIAAABIgBACIgBABIAAACIAAABIAAABIgCACIgBABIgBACIAAABIgBACIAAABIAAABIAAABIgFAIIgBADIgCAEIgEAIIgDAHIgFAIIgFAHIgDAIIgCAHIAAAIIgFAHIgCAIIgIAHIgFAIIAAAHIgDAIIgCAHIgFAIIgFAHIgCAIIgIAHIgHAIIgGAHIgEAIIgGAHIgEAIIgGAHIgEAIIgGAHIgEAIIgIAHIgHAIIgIAHIgIAIIgHAHIgMAIIgIAHIgFAIIgFAHIgMAIIgIAHIgFAIIgFAHIgNAIIgMAHIgIAIIgHAHIgMAIIgNAHIgHAIIgIAHIgHAIIgGAFIgEACIgUAFIgKAIIgFAFIgGACIgMADIgPAFIgWAHIgJAFIgCADIgCADIgCADIgDACIgFADIgFADIgHADIgFADIgGADIgEACIgHACIgFACIgHACIgEACIgHABIgEACIgIACIgEACIgIACIgEACIgFABIgIACIgGACIgHABIgKABIgCABIgFABIgIACIAAAEIgEABIgRAAIgBAAIgFAAIgFABIgEAAgAqauDIgDABIgFAIIAAAHIgDAIIgCAHIgFAIIgFAHIgCAIIgIAHIgIAIIgEAPIgGAPIgFAPIgEAPIgGAPIgEAPIgDAHIAAAIIgDAHIgCAIIgCAHIgDAIIgDAHIgCAIIgCAHIAAAIIgDAHIgDAIIgCAHIAAAIIgDAHIgCAIIgCAHIAAAIIgDAHIgDAIIgCAHIAAAIIgCAHIgDAIIAAAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgDAIIgCAHIgCAIIgDAHIgDAIIAAAHIgCAIIgCAHIAAAIIgDAHIAAAIIAAAHIAAAIIAAAHIAAAIIAAAHIgDAIIgCAHIAAAIIgDAHIgCAIIAABDIAABLIAABLIAABLIAABKIAAAtIACAIIADAHIACAIIADAHIAAAIIAAAHIAAAIIAAAHIADAIIACAHIACAIIADAHIADAIIACAHIACAIIADAHIAAAIIAAAHIAAAIIADAHIACAIIAFAHIADAIIACAHIAFAIIAAAHIAAAIIACAHIADAIIAFAHIACAIIAGAHIACAIIAFAHIADAIIACAHIAAAIIAFAHIAHAIIAFAHIADAIIAFAHIACAIIADAHIAAAIIAFAHIACAIIAGAHIACAIIAFAHIADAIIAHAHIAIAIIAHAHIADAIIAEAHIADAIIAFAHIACAIIAIAHIAHAIIAIAHIAIAIIAEAHIADAIIAFAHIACAIIAGAHIAMAIIAKAHIADAIIAEAHIAGAIIAHAHIAHAIIAFAHIAGAIIAEAHIAGAIIAOAPIAPAPIAIAHIAIAIIAHAHIAHAIIAKAHIALAIIAKAHIAOAIIANAHIAIAIIAOAHIAKAIIAKAHIAfAPIAdAPIAeAPIAIAFIAKADIARAFIANAFIASAFIAOAHIAIAFIAUADIA6APIA+APIAPAFIBAAFIAPAFICoAAIABgBIAHgCIAFgCIAEAAIABgBIAGgBIAKgBIACgBIAEgBIAGgBIAJgCIAGgCIAGgCIAIgCIAKgDIgBgQIAGAFIAAACIAPgHIAYgMIAGgDIARgFIAMgFIANgFIAHgFIANgCIAMgFIAQgIIAKgEIAMgGIAHgHIAIgIIAIgHIAPgIIAKgHIAHgIIAHgHIANgIIAFgHIAFgIIAIgHIAMgIIAFgHIAFgIIAIgHIAPgIIAKgHIAHgIIAHgHIAIgIIAFgHIAFgIIADgHIAHgIIAFgHIAFgIIADgHIAHgIIAIgHIAHgIIADgHIACgIIAAgHIAFgIIADgHIAEgIIAGgHIACgIIAAgHIACgIIAGgHIAHgIIACgHIAGgIIACgHIAFgIIADgHIAEgIIADgHIAFgIIACgHIADgIIADgHIACgIIADgHIAEgIIADgHIAFgIIAAgHIAAgIIAAgHIAFgIIADgHIAEgIIAGgHIACgIIAAgHIAAgIIAAgHIAAgIIAAgHIACgIIAAgHIADgIIAAgHIADgIIAAgHIACgIIAAgPIAAgPIAAgHIAAgPIAAgIIAAgHIAAgPIAAgIIgCgHIgDgIIgFgHIAAgIIAAgHIAAgIIgCgHIgDgIIgFgHIgFgIIgFgHIAAgIIAAgHIgFgIIgBgBIAAgCIAAgEIAAgDIgBgDIgCgDIgBgDIAAgDIAAgDIgBgDIgBgDIgCgDIgBgDIgCgDIgBgDIgCgDIgBgDIgEgEIgDgDIgDgDIgDgDIgDgDIABAAIgBgBIgBgBIgBgBIgDgDIgBgDIgCgEIgFgDIAAAAIgFgIIgFgHIgCgIIgGgHIgHgIIgFgHIAAgIIgCgHIgDgIIgegeIgegeIgegeIgmglIgOgPIgDgIIgFgHIgFgIIgWgWIgXgXIgWgWIgXgXIgPgPIgNgHIgMgIIgHgHIgIgIIgIgHIgKgIIgOgHIgIgIIgHgHIgKgIIgQgHIgHgIIgMgHIgNgIIgHgHIgIgIIgHgHIgKgIIgQgHIgOgIIgLgHIgHgIIgKgHIgNgIIgJgHIgIgIIgKgHIgMgIIgKgHIgLgIIgOgHIgGgFIgOgFIgNgFIgHgCIgBgBIgCgCIgEgDIgFgCIgDgCIgGgDIgDgDIgEgDIgEgEIgFgCIgDgCIgHgCIgGgCIgGgCIgKgCIgGgCIgIgBIgCgCIgFgDIgEgDIgEgCIgGgDIgDgDIgDgDIgEgDIgGgCIgDgCIgFgDIgBAAIgCgDIgFgDIgFgCIgHgCIgGgCIgdAAIgBABIgBgBIgCgCIgHgFIgSgCIgRgFIgIgIIgIgFIgHgCIgSgFIgOgIIgIgFIgCgBIgPgGIgGgFIgOgFIgIgIIgIgFIgHgCIgSgFIgHgIIgHgFIgIgCIgRgFIgQgIIgKgFIgRgCIgSgFIgEgFIgSgFIgUgFIgSgFIgqgFIgRgFIgXgFIgSgFIgggFIgRgFIgrgFIgMgDIgGgCIgEABg");
	this.shape_2.setTransform(87.5,97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body1, new cjs.Rectangle(0,0,175,195.1), null);


(lib.beard2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgnA5IgEgBIgEgBIgCgCIgCgBIgBgCIgBgBIgBgBIgBgCIgBgBIgBgBIgBgCIgBgBIgCgBIgBgCIgBgBIgCgBIgCgCIgCgBIgDgCIgCgBIgCgBIgCgCIgBgBIgBgBIgCgCIgBgBIgBgBIgBgCIAAgBIgBgBIgBgCIgCgBIgBgCIgCgBIgBgBIgBgCIAAgBIgBgBIgBgCIgBgBIgCgBIAAgCIgBAAIADgBIABABIACAAIADAAIA3AAIADAAIACAAIABgBIAHAAIADAAIADgBIAEgCIAEgBIADAAIACgBIADgBIACgBIAIgCIAFgBIACAAIACgBIAEgBIACgBIACgBIADgCIAEgBIACgCIACgBIACgBIADgBIACgBIADgBIACgCIACgBIACgBIABgBIACAAIACgCIADgBIACgBIADgCIADgBIABgCIACgBIABgBIACgCIABgBIACgBIABgCIADgBIACgBIACgBIABgBIACgBIABgBIADgBIABgCIABAAIAAAAIAAABIAAABIAAABIAAACIAAABIABABIAAACIAAABIABACIABABIAAABIABACIAAABIAAABIAAACIAAABIABABIAAACIABABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAABIgBACIgBABIAAABIgBACIgBABIgBABIAAACIgBABIgBACIgCABIgBABIgCACIgCACIgCABIgBABIgBABIgBACIgCABIgBABIgCACIgCABIgBACIgBABIgDABIgCACIgCABIgCABIgCACIgBABIgDABIgCAAIgCABIgCACIgCABIgDABIgDACIgEABIgDABIgDABIgCABIgCACIgCABIgDABIgBAAIgBABIgCACIgDAAIgBABIgCABIgCABIgDACIgCAAIgDABIgBAAIgBABIgDACIgBABIgDABIgDABIgCABIgDABIgDABIgDAAIgEABIgDABIgOAAg");
	this.shape.setTransform(16,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaBgIgDAAIgDgBIgCgBIgCgBIgDgBIgDgBIgBgBIgDgBIgDgBIgCgBIgCgCIgCgBIgBgBIgCgCIgBgBIgBgCIgBgBIgCgBIgBgCIgBgBIAAgBIgCgCIgBgBIgCgBIAAgBIgEgBIgCgCIgCgBIgBgBIgBgCIgBgBIgCgBIgDgCIgCgBIgBgBIgBgCIgBgBIgBgCIgBgBIAAgBIgBgCIgBgBIgBgBIgBgCIgBgBIgCgBIgBgCIgCgBIAAgBIgCgCIgCgBIgBgCIgCgBIgBgBIgBgCIAAgBIgBgBIAAgCIAAgBIgDgBIgCgCIgBgBIgCgBIgBgCIAAgBIgBgCIgBgBIgCgBIgBgCIgCgBIgBgBIgCgCIgBgBIgCgBIgDgBIgBgBIgCgBIAAgCIgBgBIgBgCIAAgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAgBIABgBIAAgCIABgBIABgBIABgCIABgBIACgCIACAAIABgBIACAAIADgBIAHAAIADABIADABIACABIACABIADABIAPABIADAAIACABIAJAAIADAAIACABIABAAIAzAAIABAAIACgBIADAAIAGAAIACgBIADgBIACgBIACAAIACgBIAFgBIACAAIABgBIADgBIACgBIABAAIACgBIADAAIABgBIADAAIACgBIABgBIACAAIADgBIACgCIACgBIADgBIACgCIAFgCIACgCIADAAIACgBIADgBIACgCIACgBIACgBIABAAIACgBIACgCIABgBIABgBIACgCIACgBIADgBIABgCIABgBIACgBIACgCIACgBIACgCIACgBIADgBIACgCIACgBIABgBIADgCIABgBIABgBIAAgCIACgBIABgBIABgCIABgBIACgCIABgBIABgBIACgCIABgBIACgBIACgBIADgBIACAAIAAAAIADAAIADABIACACIACABIACABIAAACIABABIABABIAAACIAAABIABABIAAACIAAABIAAABIAAACIAAABIABACIAAABIABABIAAACIAAABIAAABIAAACIABABIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAACIABABIABABIAAACIAAABIABABIAAACIAAABIAAABIAAACIABABIAAACIABABIAAABIABACIAAABIAAABIAAADIAAAEIAAAEIAAAGIAAAFIAAAEIgBABIAAACIgBAAIgBACIAAABIgBABIAAACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIgCABIgBACIgBABIgBACIgBABIgBABIgBACIgBABIgCABIgBACIgBABIgBABIgCACIgBABIgBABIgCACIgBABIgBACIgCABIgCABIgCACIgCABIgCABIgBACIgDABIgCABIgDACIgBABIgBABIgCACIgCABIgBAAIgCABIgCABIgDABIgCABIgCABIgBABIgDABIgCABIgCABIgBAAIgCABIgDABIgCABIgCABIgCACIgCABIgBAAIgCABIgCABIgCABIgBABIgCAAIgCABIgCABIgCABIgBABIgDABIgDABIgDABIgCACIgDABIgDABIgDABIgCABIgDABIgDAAIgEACIgDAAIgDABIgBABIgDABIgCAAIgUAAgAhVAIIABABIAAACIACABIABABIABACIABABIAAABIABACIABABIACABIABACIACABIABACIABABIAAABIABACIABABIABABIACACIABABIABABIACACIACABIACABIADACIACABIACACIACABIABABIABACIACABIABABIABACIABABIABABIABACIABABIABABIABACIACABIACACIAEABIAEABIAOAAIADgBIAEgBIADAAIACgBIADgBIACgBIADgBIADgBIACgBIADgCIABgBIABAAIADgBIACAAIADgCIACgBIACgBIABgBIADAAIACgCIABgBIABAAIADgBIACgBIACgCIACgBIADgBIADgBIAEgBIADgCIADgBIACgBIACgCIACgBIACAAIADgBIABgBIACgCIACgBIACgBIACgCIADgBIABgBIABgCIACgBIACgCIABgBIACgBIABgCIABgBIABgBIACgCIACgCIACgCIABgBIACgBIABgCIABAAIAAgCIABgBIABgBIABgCIAAgBIABgBIABgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIgBgBIAAgCIgBgBIAAgBIAAgCIAAgBIAAgBIgBgCIAAgBIgBgBIgBgCIAAgBIAAgCIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAAAIgBAAIgBACIgDABIgBABIgCABIgBABIgCABIgCABIgDABIgBACIgCABIgBABIgCACIgBABIgCABIgBACIgDABIgDACIgCABIgDABIgCACIgCAAIgBABIgCABIgCABIgCACIgDABIgCABIgDABIgCABIgCABIgCACIgEABIgDACIgCABIgCABIgEABIgCABIgCAAIgFABIgIABIgDABIgDABIgCABIgDAAIgEABIgDACIgDABIgDAAIgHAAIgBABIgCAAIgDABIg3AAIgDgBIgCAAIgBgBIgDABg");
	this.shape_1.setTransform(14.5,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beard2, new cjs.Rectangle(0,0,29,19.3), null);


(lib.beard1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag2A/IgBAAIAAAAIgBAAIAAAAIAAgBIgBgBIAAAAIgCgCIAAAAIgBAAIAAgBIAAgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAAAIgBgBIAAAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAAAIgBgBIgBAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIAAgBIgBAAIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIAAgBIAAgBIgBAAIAAAAIgBAAIAAgBIAAgBIAAgIIgBAAIAAgGIAAAAIAAgEIgBAAIAAgHIABAAIAAgBIAAAAIAAgBIAAgBIAAAAIAAgCIAAgBIAAgDIABgBIAAgDIAAgBIAAAAIABgBIAAgCIAAAAIAAAAIABAAIAAgCIAAgBIAAgEIABAAIAAgBIAAAAIABgBIAAgCIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgCIAAAAIABgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIABAAIABgBIABAAIAAgBIABAAIAAAAIABgBIABAAIAAgBIABgBIABAAIAAgBIABAAIAAgBIACgCIAAAAIABgBIABgBIAAAAIACgBIABgBIAAAAIABgBIADgDIADgEIADgCIAEgEIADgDIAAAAIBxACIgDAFIAAAIIgDAHIgCAHIgCAIIAAAIIgDAHIgCAIIgDAGIgDAHIgCAIIgBACIgBABIAAAAIAAABIAAABIgBABIAAAAIgBABIAAABIgBAAIAAAAIAAABIgBAAIgBABIgBAAIgBAAIAAABIAAAAIgBABIAAAAIgBABIgBABIAAABIgBAAIgBABIAAAAIAAABIgBAAIgBABIgBAAIgCABIAAAAIAAABIAAABIgBAAIAAABIAAABIgBAAIgBABIAAAAIgBABIgCABIgBAAIgCABIAAAAIAAABIgBAAIAAABIgBAAIAAABIgBABIAAABIgBABIAAAAIgBABIgBABIgBAAIAAAAIgBAAIgBAAIgBAAIAAAAIgCABIAAAAIgBAAIgCAAIgBAAIAAAAIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIgCAAIAAAAIgBAAIgBABIgCAAIAAAAIAAAAIgBAAIAAABIgBAAIgCAAIgBAAIgBABIgBAAIAAAAIgBAAIAAABIgBAAIgBAAIgBABIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIgBAAIAAAAIgBAAIgBAAIgCAAIgBABIgCAAIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIAAAAIgBgBIAAAAIgBAAIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIAAABIgCAAIgBAAIAAAAIgBAAIgBABIgBAAIgBAAIgBAAIgBAAIgBAAg");
	this.shape.setTransform(11.7,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEBjIg3AAIgJgCIgGgDIgIgDIgGgDIgEgDIgDgEIgDgDIgDgDIgEgDIgCgDIgBgDIgBgDIgCgEIgBgDIgBgDIAAgDIAAgGIAAgKIAAgMIAAgQIAAgIIAAgGIAAgHIAAgGIAAgDIAAgGIABgEIABgDIACgDIAAgDIABgDIABgDIACgDIAAgDIABgEIACgDIACgDIABgDIACgDIABgBQBTgfBoAFIAHAEIAABPIgBABIAAABIAAABIgBABIAAAAIAAADIgBABIAAABIAAAAIAAABIAAABIAAABIgBABIAAAAIAAABIgBAAIAAADIAAAAIAAACIgBABIAAABIAAAAIAAACIgBAAIAAABIAAAAIAAABIgBABIAAACIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAAAIAAABIAAAAIgBABIAAABIgBAAIAAACIAAABIAAABIgBAAIAAABIAAABIAAABIAAAAIgBABIAAAAIAAABIgBABIAAABIAAABIgJAOIAAABIgBAAIAAABIgBAAIAAABIAAABIgBAAIAAABIgBABIgBAAIAAABIgBABIAAAAIgBABIAAAAIgBABIgBABIAAABIAAAAIAAABIgBAAIAAABIgBABIgBAAIAAABIgBAAIAAABIAAAAIgBABIgBAAIAAABIgBABIgBABIAAAAIgBABIgBABIAAABIgBAAIgBABIAAABIAAABIgBAAIAAABIgCABIgBAAIAAABIgBABIgBABIgBAAIgBABIgBABIAAAAIgBABIgCAAIAAABIgBAAIgBABIgBABIgCAAIgBABIAAAAIAAABIgBAAIgBAAIgBABIgBABIgCAAIgBABIgBAAIgBABIAAAAIgBABIAAAAIgCAAIAAABIgBAAIgCAAIgBAAIgBABIgBAAIAAAAIgBABIgBAAIgBAAIAAABIgBAAIgCAAIgBAAIAAABIgBAAIgBAAIgBAAIgBAAIgCABIgBAAIgBAAIgBAAIgBABIgBAAIgBAAgAg1gnIgBABIAAAAIgBABIgBAAIAAABIAAABIAAABIgBAAIAAACIAAABIAAABIgBABIAAABIAAAAIgBABIAAAAIAAABIgBABIAAADIAAAAIAAACIgBABIAAABIAAABIAAABIgBABIAAACIAAABIAAAAIgBABIAAAAIAAAEIgBAAIAAACIAAABIAAAAIAAABIAAACIgBABIAAAAIAAAAIAAADIgBAAIAAAEIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIgBABIAAAGIABABIAAAEIAAAAIAAAGIABAAIAAAIIAAAAIAAABIABABIAAAAIAAAAIABABIAAABIAAAAIABAAIAAAAIABABIAAAAIABAAIAAABIABAAIAAAAIABAAIAAABIAAAAIABABIAAAAIAAABIABAAIAAAAIABABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIABAAIAAABIABAAIAAAAIABAAIAAABIABAAIAAAAIAAABIAAAAIABAAIAAABIACABIAAABIAAAAIAAABIABABIAAAAIABAAIABAAIABAAIABAAIABgBIABAAIABAAIABAAIAAAAIABgBIABAAIABAAIABAAIABAAIACAAIABgBIABAAIABAAIAAABIABAAIABAAIAAAAIABAAIABABIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIACgBIABAAIABAAIACAAIAAgBIABABIABAAIABAAIABgBIABAAIABAAIABAAIABgBIAAAAIABAAIABgBIAAAAIABAAIAAAAIABAAIABgBIABAAIABAAIABAAIAAgBIABAAIACAAIAAAAIACAAIABgBIABAAIAAAAIACAAIAAAAIACAAIABAAIABgBIABAAIABAAIAAAAIABAAIABAAIABAAIABAAIABgBIABAAIABAAIABAAIABAAIAAAAIABgBIABAAIAAgBIAAgBIABgBIAAAAIABgBIABgBIAAAAIABgBIABAAIAAgBIAAAAIACgBIABgBIABgBIABAAIAAgBIABAAIABgBIAAAAIABgBIAAAAIAAgBIABgBIAAAAIACgBIABgBIABAAIAAgBIAAAAIABgBIABAAIAAgBIABgBIABAAIABgBIAAAAIABgBIAAAAIAAgBIABAAIABAAIABgBIAAAAIAAgBIABAAIABgBIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIABAAIABgBIABgCIACgIIADgGIACgIIADgHIACgIIAAgHIADgIIACgHIADgIIAAgHIACgFIhwgCIAAAAIgEADIgDADIgDADIgDAEIgDADIgBAAIAAABIgBAAIgCACIgBAAIgBABIAAABIgBAAIgBACIAAAAIgBABIAAAAIgBABIgBABIAAAAIgBABIgBABIgBAAIAAAAgABpAKIABgBIAAABIgBABg");
	this.shape_1.setTransform(10.6,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beard1, new cjs.Rectangle(0,0,21.2,19.9), null);


(lib.beack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD860E").s().p("AguAfIgSgFIhGgFIgUgFIAPgFIAPgFIANgCIAHgEIAPgIIAPgFIAPgFIAjgFIAPgFIAFgCICfACIAAAIIAAAHIgCAIIgGAGIgHAIIgHAHIgIAIIgRAHIiaAAg");
	this.shape.setTransform(27.5,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBqIgFgDIgFgCIgFgBIgGgCIgFgBIgfAAIAAAAIACgEIABgBIgBAAIg/gFIgUgFIgogFIgRgFIgFgFIgPgFIgIgIIgHgFIgIgCIgRgFIgIgIIgFgHIAAgIIAAgHIAAgIIAAgGIAFgIIAIgHIARgFIANgFIAegKIAegJIAogLIARgIIAIgFIAMgCIANgFIARgFIAggFIARgFICfgFIALAAIAAgIIAAgBIABAAIAHACIAHACIAFABIAWAAIgBAQIgBAVQgJBMgrA2QgIAKgEALIgKAHIgJAFIhrgBIgBAAIgDADIgDADIgDADIgBgBgAAdgbIgPAFIgiAFIgPAFIgPAFIgPAHIgHAEIgNADIgPAFIgPAFIAUAFIBGAFIASAFICaAAIARgIIAIgHIAHgIIAIgHIAFgHIACgHIAAgIIAAgHIiggDIgFADg");
	this.shape_1.setTransform(23.6,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.beack, new cjs.Rectangle(0,0,47.2,21.4), null);


(lib.ckW1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWCcIgCAAIgCgBIgQAAIgCAAIgCgBIgNgBIgCgBIgCAAIgHgBIgDAAIgDgBIgCgBIgDAAIgDgCIgCgBIgCAAIgDgBIgDgBIgDgBIgDgBIgEAAIgCgCIgBgBIgBAAIgCgBIgCgBIgCAAIgDgBIgEgBIgCgCIgBAAIgCgBIgDgBIgDgBIgDAAIgDgCIgBgBIgCgBIgEgCIgDgBIgBgBIgCgCIgBgBIgCgBIgCgBIgDgCIgCgBIgBgBIgCgCIgCgBIgBgBIgBgBIgCgCIgBgBIgBgBIgCgCIAAgBIgBgBIgBgCIgCgBIgCgBIgBgBIgCgCIgBgBIgBgBIAAgCIgBgBIgBgBIAAgCIgBgBIgBgBIgBgBIAAgCIgBgBIAAgBIgBgCIAAgBIgBgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIAAgBIgBgBIAAgCIAAgBIAAgEIAAgEIAAgGIAAgHIAAgGIAAgEIAAgDIAAgEIAAgCIAAgBIAAgCIABgBIAAgBIABgCIAAgBIAAgBIABgCIAAgBIAAgBIABAAIAAgCIAAgBIABgBIAAgCIABgBIAAgBIABgCIAAgBIAAgBIAAgBIABgCIAAgBIABgBIAAgCIABgBIAAgBIABgBIABgCIAAgBIABgBIAAgCIAAgBIABgBIAAgCIABgBIABgBIABgBIAAgCIABgBIABgBIABgCIABgBIABgBIAAgCIABgBIAAgBIABgBIABgCIABgBIAAgBIABgCIABgBIABgBIABgCIABgBIABgBIABgBIAAgCIABgBIABgBIABgCIAAgBIABgBIACgBIABgCIACgBIABgBIABgCIABgBIAAgBIABgCIACgBIABgBIABgBIABgCIABgBIAAgBIACgCIABgBIACgBIABgCIABgBIABgBIABgBIABgCIACgBIADgBIABgCIACgBIABgBIADgBIACgCIABgBIABgBIADgCIADgBIABgBIABgCIABgBIACgBIACgBIACgBIABgBIACgBIACgBIABgBIACgCIACgBIACgBIACgBIABgCIABgBIACgBIACgCIAEgBIADgBIABgBIABgCIADgBIABgBIACAAIAEgBIADgCIACgBIACgBIADgBIACgBIABgBIADgBIADgCIACgBIACgBIABAAIABgBIACAAIAAAAIADAAIACAAIADABIACABIACACIABABIABABIABACIABABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIgBABIgBACIgBABIAAABIgCABIgBACIgCABIgDABIgCACIgDABIgCABIgBABIgBABIgDAAIgDACIgCAAIADABIADABIACACIABABIACABIABABIACACIABABIAAAAIADABIABABIABACIACABIACABIACABIABACIABABIACABIABACIABABIACABIABABIACACIACABIACABIABACIABABIABABIAAACIABABIAAABIACABIAAACIACABIABABIABACIACABIABABIABACIACABIABABIABABIAAACIABABIACABIABACIABABIABABIACABIAAACIABABIABABIABACIABABIACABIABACIACABIABABIABABIABACIACABIAAABIABACIABABIABABIABACIABABIACABIAAABIABACIABABIACABIABACIAAABIABABIABACIABABIABABIABABIACACIABABIABABIAAACIAAABIABABIABABIAAACIABABIAAABIABACIABABIABABIAAACIABAAIABABIABABIAAACIABABIABABIAAACIABABIAAABIAAACIAAABIAAABIAAABIAAACIABABIABABIABACIAAABIAAABIAAACIAAABIAAABIAAADIAAACIAAACIAAABIAAABIABABIAAACIABABIAAABIABACIAAABIAAABIABACIAAABIAAABIAAAEIAAAHIAAACIAAABIAAADIAAADIAAADIAAAGIABAEIgBADIAAACIAAABIgBABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIgBACIgBABIgBABIAAACIAAABIAAABIAAACIgBABIgBABIgBABIAAACIAAABIgBABIAAACIAAABIAAABIAAABIgBACIgBABIAAABIgBACIAAABIgBABIAnAAIACAAIADgBIACABIADABIACABIACABIABACIABABIABABIAAABIABACIAAABIAAABIAAACIAAABIAAABIAAACIgBABIAAABIgBABIgBACIgBABIgBABIgCACIgCAAIgCABIgCAAIh6AAgAgfhrIgBABIgBABIgCACIgCABIgCABIgCACIgFACIgEADIgCABIgBABIgBACIgCABIgCABIgCACIgDABIgBABIgCABIgDACIgBABIgBABIgCACIgCABIgBABIgBACIgBABIgBABIgBABIgCACIgBABIgBABIgBACIgCABIgBABIgBABIAAACIgBABIgBABIgBACIgBABIgBABIgBACIgCABIgBABIAAABIgBACIgBABIgBABIAAACIgBABIgBABIgBACIgBABIgBABIgBABIgBACIAAABIgBABIAAACIgBABIgBABIgBABIgBACIgBABIAAABIgBACIAAABIgBABIgBACIAAABIAAABIgBABIgBACIAAABIgBABIAAACIgBABIAAABIAAACIgBABIAAABIgBABIAAABIAAABIAAABIAAACIgBABIgBABIAAACIgBABIAAABIgBABIAAACIAAABIAAABIAAACIgBABIgBABIAAADIAAABIAAADIAAAEIAAADIAAAEIAAAEIAAAEIABABIABACIAAABIABABIABACIABABIAAABIABABIAAACIAAABIABABIAAACIAAABIABABIAAACIAAABIABABIAAABIABACIABABIABABIABACIABABIABABIABACIACABIABABIABABIABACIACABIACABIABACIABABIABABIABABIADABIACABIACACIABABIABABIADABIADACIACABIACABIACABIAAABIADAAIACABIADABIAEACIACABIACABIADAAIADABIACABIABABIABABIADAAIABABIADABIADABIACAAIADABIACACIADAAIACABIADABIADABIACAAIABAAIAEABIADAAIACABIANAAIADABIADABIANABIADAAIACAAIA7AAIABgBIABgBIABgCIAAgBIABgBIAAgCIAAgBIABgBIABgBIAAgCIABgBIAAgBIAAgCIAAgBIABgBIABgBIAAgCIAAgBIAAgBIABgCIABgBIAAgBIAAgCIABgBIAAgBIAAgBIABgCIAAgBIABgBIAAgCIAAgBIAAgBIAAgCIAAgBIABgBIAAgBIABgCIAAgCIAAgEIAAgFIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgDIAAgEIgBgBIAAgCIgBgBIgBgBIAAgBIgBgCIAAgBIAAgBIgBgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIgBgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIgBgCIAAgBIgBgBIgBgBIAAgCIgBgBIgBgBIgBgCIAAgBIgBgBIAAgCIgBgBIgBgBIgBAAIgBgCIgBgBIAAgBIAAgCIAAgBIgCgBIgBgCIgBgBIgCgBIgBgBIAAgCIAAgBIgBgBIgCgCIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgCgCIgBgBIAAgBIAAgCIgCgBIgBgBIgBgBIgCgCIgBgBIgBgBIgCgCIgBgBIgBgBIgBgCIAAgBIgBgBIgCgBIgBgCIgBgBIgBgBIgCgCIgBgBIgBgBIgBgCIAAgBIgCgBIAAgBIgCgCIgBgBIgCgBIgBgCIgBgBIgBgBIgCgBIgBgCIgBgBIAAgBIgBgCIAAgBIgDgBIgCgCIgBgBIgBgBIgCgBIAAgCIgCgBIgBgBIgBgCIgCgBIAAgBIgBAAIgDgBIgBgBIgBgCIgBgBIgCgBIgCgCIgBgBIgDgBIgBgBIgBgBIgCgBIgDgBIgDgBIgHgBIgDgBIgBAAIgCABg");
	this.shape.setTransform(15.7,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C838").s().p("AAnB3IgCgBIgCAAIgOgBIgDgBIgCAAIgPgBIgBAAIgDgBIgEAAIgBAAIgCgBIgCgBIgDgBIgCAAIgDgBIgDgBIgDgBIgCgBIgDgBIgCAAIgCgBIgDgBIAAAAIgCgBIgCgCIgDAAIgCgBIgDgBIgCgBIgDgBIgDgBIgDgBIgCgBIgBAAIgBgBIgCgBIgDgCIgDgBIgCgBIgBgCIgBgBIgCgBIgCgCIgDAAIgBgBIgBgCIgCgBIgBgBIgCgBIgBgCIgBgBIgCgBIgBgCIgBgBIgBgBIgBgCIgCgBIgBgBIAAgBIgBgCIgBgBIgBgBIAAgCIgBgBIAAgBIAAgCIAAgBIgBgBIgBgBIAAgCIAAgBIAAgBIgBgCIgBgBIAAgBIgBgBIgBgCIAAgBIgBgBIAAgEIAAgEIAAgEIAAgEIAAgEIAAgCIAAgCIAAgCIABgCIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIABgCIAAAAIABgBIABgCIAAgBIAAgBIAAgBIAAgCIABgBIAAgBIABgCIAAgBIAAgBIABgCIAAgBIABgBIAAgBIABgCIABgBIAAgBIAAgCIABgBIAAgBIABgCIABgBIAAgBIABgBIABgCIAAgBIACgBIAAgCIABgBIABgBIAAgBIABgCIAAgBIACgBIABgCIAAgBIABgBIACgCIAAgBIABgBIABgBIAAgCIABgBIABgBIABgCIABgBIABgBIACgCIABgBIABgBIAAgBIABgCIABgBIAAgBIACgCIABgBIABgBIACgCIABgBIABgBIACgBIABgCIABgBIABgBIABgCIABgBIACgBIACgBIABgCIACgBIACgBIACgCIACgBIADgBIACgCIABgBIABgBIACgBIABgCIAFgCIAEgDIACgBIACgBIACgCIACgBIACgBIABgCIABgBIABABIAEABIAGABIADAAIACABIADABIAAABIABABIADACIABABIACABIACACIACABIABABIACABIADABIAAABIABABIABABIABABIABABIACACIABABIABABIACACIABABIACABIACACIABABIAAABIABABIABACIABABIABABIABACIABABIACABIABACIABABIACABIABABIABACIABABIABABIAAACIABABIACABIABABIABACIACABIABABIABACIAAABIABABIACACIABABIABABIACABIABACIACABIAAABIACACIABABIAAABIABACIABABIABABIACABIABACIABABIAAABIACACIABABIABABIABABIABACIAAABIABABIACACIABABIABABIABACIAAABIAAABIABABIABACIABABIABABIAAACIABABIABABIAAACIABABIABABIABABIABABIAAABIABABIAAACIABABIAAABIAAACIAAABIAAABIAAABIAAACIABABIAAABIABACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIABABIAAABIABABIAAACIAAABIABABIABACIAAABIABABIAAACIAAADIAAADIAAADIAAABIAAABIAAACIAAABIAAABIAAAFIAAAEIAAADIAAABIgBABIAAACIAAABIAAABIAAACIAAABIAAABIgBABIgBACIAAABIAAABIgBACIAAABIgBABIAAACIgBABIAAABIgBABIAAACIAAABIgBABIAAACIAAABIAAABIAAABIgBACIAAABIgBABIgBACIgBABIAAABIAAACIgBABIAAABIgBABIgBACIg8AAg");
	this.shape_1.setTransform(14.2,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ckW1, new cjs.Rectangle(0,0,31.5,31.3), null);


(lib.ckL1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIBdIgCgBIgEgBIgCgBIAAgCIgBAAIgBgCIgBgBIgBgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIABgBIABgCIgBgBIgBgBIAAgBIAAgBIAAgDIAAgEIAAgHIAAgGIAAgGIAAgHIAAgHIgBgBIgBgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIgBAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgDIAAgDIAAgBIgBgBIAAgBIgBgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIgBgBIAAgBIgBgBIAAgBIAAgCIAAgBIgBgCIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIgBgCIAAgBIgBgBIAAgBIgBgCIgBgBIAAgCIgBAAIAAgCIgBgBIgBgBIgBgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIABgBIAAgBIABgBIABgBIABgCIACgBIACgBIABgBIACAAIADAAIAAgBIACABIADABIADABIABABIAAACIABABIAAACIABAAIABACIABABIABABIAAACIABABIABACIABABIAAABIABABIAAABIABACIAAABIAAACIAAABIABABIAAABIAAABIAAACIAAACIAAABIAAABIACABIAAABIABACIAAABIAAACIAAABIAAABIAAABIAAABIAAACIABABIAAACIAAABIAAABIAAABIAAABIAAACIAAACIABABIAAABIAAABIABABIAAABIAAACIAAACIAAABIAAABIAAABIAAADIAAADIAAACIAAACIAAACIABABIAAACIAAABIAAABIAAABIAAABIAAABIABACIABABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAABIABABIABACIAAABIAAACIAAACIAAAEIAAAGIAAAGIAAAGIAAAGIAAAHIABACIABABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAADIAAADIAAADIAAACIAAABIAAABIgBACIAAACIgBABIgCABIgBABIgCABIgBABIgBABIgCAAIgDABIgCAAg");
	this.shape.setTransform(2.4,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ckL1, new cjs.Rectangle(0,0,4.8,18.5), null);


(lib.ckEbrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZAZIgDgBIgDAAIgDgBIgBgCIgBgBIgBgCIgBgBIAAgBIgBgBIgCgBIgBgCIgCgBIgBgCIgBgBIgBgBIgCgBIgBgBIAAAAIgDgBIgRAAIgDABIgCAAIgEAAIgCgBIgDgCIgBgBIgCgBIgBgBIAAgBIgBgBIAAgBIgBgCIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgCIABgCIAAgBIABgBIACgBIABgBIADgCIACAAIAEgBIAcAAIACABIADAAIACACIACABIAAAAIADAAIACACIACABIABABIACACIAAABIADADIADACIADADIACADIACACIACAAIAAABIABACIABACIABABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAABIgBABIAAABIgBACIgBABIgDACIgCABIgCAAIgDABIgCAAg");
	this.shape.setTransform(4.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ckEbrow1, new cjs.Rectangle(0,0,8.1,5), null);


(lib.ckE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGAxIgDgBIgCAAIgBAAIgDgBIgCAAIgDgCIgDgBIgCgBIgDgBIgDgBIgCgCIgBgBIgCgCIgBgBIAAgBIgBgCIgBAAIgBgCIgBgBIgCgCIgBgBIAAgBIgBgCIgBAAIAAgCIgBgBIgCgCIgBgBIAAgBIgBgCIgBgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAgCIAAgDIAAgEIAAgBIAAgBIABgCIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgCIABgCIABgBIABgBIABgBIABgBIABgCIABgBIABgCIABgBIABgBIABgBIABgBIABgCIACgBIABgCIACgBIABAAIACAAIADgBIACABIADAAIADACIABABIAOAAIACAAIADACIADABIACABIADABIACACIABABIACABIABACIACABIABABIABABIABACIABABIAAABIAAACIABABIAAACIABABIABABIAAABIABABIABACIABABIAAACIABAAIAAACIAAABIAAADIAAADIAAABIAAACIAAACIAAADIAAADIAAAFIAAAEIAAAGIAAABIAAABIAAABIgBACIAAABIAAACIgBABIAAABIgBABIAAABIgBACIgCACIgBABIgBABIgCABIgBABIgBACIgCABIgCACIgDAAIgDABIgNAAgAgLgOIAAACIAAAAIgBACIAAABIgBABIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIABACIABACIAAABIABABIABABIAAABIABABIACACIABACIACABIAAABIABABIACABIABABIABABIACAAIACABIADAAIAAABIADgBIABgBIAAgCIABgBIAAgCIAAgDIAAgDIAAgCIAAgCIAAgEIAAgBIgBgBIAAgBIgBgCIAAgBIgBgCIgBgBIAAgBIgBgCIgBAAIgBgCIgBgBIgQAAIgBABg");
	this.shape.setTransform(4.1,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EC4F7").s().p("AAJASIgDgBIgCAAIgCAAIgBgBIgBgBIgCgBIgBgBIAAgCIgCgBIgBgBIgCgCIgBgBIAAgBIgBgBIgBgCIAAgBIgBgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIABgBIAAgBIABgCIAAgBIAAgBIABgBIAQAAIABABIABABIABABIABACIAAABIABABIABACIAAABIABABIAAACIABABIAAACIAAACIAAADIAAACIAAADIAAACIAAADIgBABIAAACIgBABIgDAAIAAAAg");
	this.shape_1.setTransform(4.1,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ckE1, new cjs.Rectangle(0,0,8.3,9.7), null);


(lib.ckB0dy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuD+IgDAAIgDAAIgNgBIgCAAIgDgBIgCAAIgMgBIgDAAIgCgBIgCAAIgBgBIgDAAIgDgBIgDgBIgEgBIgBAAIgBgBIgCAAIgEgBIgCAAIgDgBIgDgBIgCAAIgBgBIgCgBIgDAAIgDgBIgCgBIgBAAIgBgBIgEAAIgDAAIgDgBIgDgBIgBgBIgCAAIgDgBIgDgCIgBgBIgBAAIgCgBIgBgBIgEgBIgCgBIgCgBIgBAAIgDgBIgDgCIgBgBIgCAAIgEgBIgCgBIgBgBIgBAAIgDgBIgDgBIgCgBIgDAAIgEgCIgCgBIgCgBIgCgCIgEAAIgEgCIgDgBIgCgCIgBgBIgCgBIgDgBIgCgCIgBgBIgBgBIgBgCIgCgBIgDgCIgBgBIgCgBIgBgBIgBgBIgBgCIgCgBIgCgCIgBgBIgBgBIgBgBIgBgBIgCgCIAAgBIgCgCIAAAAIgBgCIgBgBIgBgBIgBgCIAAgBIgBgCIgCgBIAAgBIgCgBIgBgBIgBgCIAAgCIgBgBIgBgBIgBgBIgBgBIgBgCIgBgBIgBgCIAAgBIgBgBIgBgBIAAgBIgBgCIAAgBIgCgCIgBgBIgBgBIgBgBIgBgBIAAgCIAAgBIgBgCIgBgBIgBgBIAAgBIAAgBIgBgCIAAgCIAAgBIgBgBIgBgBIAAgBIgBgCIgCgBIgBgCIAAgBIAAgBIgBgBIAAgBIAAgCIgBgBIAAgCIgBgBIAAgBIAAgBIgBgBIgBgCIAAgBIgBgCIgBgBIgBgBIgBgBIAAgBIgBgCIgBgCIAAgBIgBgBIgBgBIAAgBIgBgCIgBgBIAAgCIgCgBIAAgBIgBgCIgBAAIAAgCIAAgBIgBgCIAAgBIgBgBIAAgBIgBgBIAAgCIgBgBIAAgCIgBgBIAAgBIgBgCIAAAAIgBgCIgBgDIAAgBIgBgBIAAgCIAAgBIAAgBIgBgBIAAgCIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIgBgBIAAgCIgBgBIgBgBIgBgBIAAgBIAAgCIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIgBgCIgBgCIAAgBIAAgBIgBgBIAAgBIAAgFIAAgGIAAgEIAAgGIAAgEIAAgFIAAgGIAAgGIAAgIIAAgBIABgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgDIAAgDIAAgBIAAgCIAAgDIAAgBIAAgCIAAgBIAAgBIAAgCIAAgDIAAgCIABgBIAAgBIABgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIABgCIABgBIABgBIAAgCIABgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIAAgCIABgBIAAgBIABgBIAAgBIABgCIABgBIAAgCIABAAIAAgCIABgBIAAgBIABgCIAAgBIAAgCIABgBIAAgBIAAgBIABgBIAAgCIABgCIABgBIAAgBIABgBIABgBIABgCIAAgBIABgCIAAgBIAAgBIABgBIABgBIABgCIABgBIABgCIABgBIAAgBIACgBIACgBIABgCIABgBIAAgCIABgBIABgBIABgBIABgBIACgCIABgCIAAgBIABgBIABgBIABgBIACgCIACgBIACgCIACgBIABgBIABgBIACgBIABgCIABgBIACgCIABgBIABgBIABgBIABgBIADgCIABgBIACgCIACgBIABgBIADgBIABgBIACgCIAAgCIADgBIADgBIACgBIACgBIACgCIACgBIACgCIACgBIACgBIACgCIADAAIADgCIABAAIADgBIACgCIACgBIACgCIAEgBIADgBIABgBIACAAIADgBIAEAAIAEgCIADgCIADgBIAIgCIADgBIADgBIABAAIABgBIACgBIADgCIACAAIACgBIACgBIADgBIACAAIACgBIACAAIACgBIADAAIACAAIAAgBIAmAAIADABIACAAIACABIABAAIADABIADABIAAABIABABIABABIACABIAEACIACABIACACIACABIACABIACABIACABIABACIACABIACACIADAAIACACIACABIADABIACACIAAABIACACIABAAIABACIACABIACABIABACIABABIABACIABABIABABIACABIABABIACACIABACIABABIABABIABABIACABIACACIABABIABACIAAABIABABIAAABIACABIABACIABABIABACIABABIAAABIACABIAAABIABACIABABIABACIABABIABABIABABIABABIABACIAAACIABABIAAABIABABIABABIAAACIABABIABACIABABIAAABIABABIABABIABACIAAABIABACIABABIAAABIABABIAAABIACACIACABIAAACIACABIABABIAAABIABABIACACIABACIACABIABABIABABIACABIACACIAAABIACACIACABIACABIABACIABAAIABACIACABIACACIACABIABABIABABIADABIADACIABABIACACIADABIACABIACABIABABIACACIACABIACACIABABIACABIACACIADABIACABIABABIABACIACABIABACIACAAIABACIABABIABABIACACIADABIACACIABAAIAAACIABABIABABIABACIAAABIABACIACABIAAABIACABIABABIABACIABABIABACIADABIABABIABABIAAABIABACIABACIABABIABABIABABIAAABIAAACIABABIACACIABABIAAABIABABIABABIAAACIABABIABACIABABIAAABIABABIABABIABACIABACIAAABIABABIAAABIACABIAAABIABACIABACIAAABIABABIABABIABABIABACIAAABIABACIAAABIABABIABABIABABIABACIACABIAAABIAAABIABABIAAABIABABIAAACIABACIAAABIAAABIAAABIABABIAAACIABABIAAACIABABIAAABIAAABIAAABIABACIAAABIAAACIAAABIAAABIAAACIABAAIABACIAAABIABACIAAABIAAADIAAACIAAABIAAADIAAACIAAACIAAABIAAABIAAACIAAADIAAACIAAACIgBACIAAABIgBACIgBABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIgBABIAAABIAAACIAAABIAAACIAAABIAAABIgBABIAAABIgBACIAAACIAAABIgBABIAAABIAAABIAAACIAAABIAAACIAAABIgBABIAAABIgBABIAAACIgBABIAAACIAAABIgBABIAAABIAAABIgBACIAAABIAAACIgBABIgBABIAAABIgBABIgBACIAAACIAAABIAAABIAAABIAAABIAAACIgBABIgBACIAAABIgBABIAAABIgBABIgBACIAAABIgBACIgBABIAAABIAAABIAAABIgBACIAAABIgBACIAAABIgBABIAAABIgBABIAAACIgBACIgBABIAAABIgBABIAAABIgBACIgBABIgBACIgBABIgBABIAAACIgBAAIgBACIgCABIgBACIgBABIgBABIgBABIgBABIgBACIgBABIgBACIgBABIgBABIgBABIgBABIgCACIgCABIgCACIgBABIgBABIgCACIgBABIgCABIgCABIgCACIgBABIgBACIgCAAIgCACIgCABIgBABIgBACIgCABIgDACIgDABIgBABIgCABIgCABIgCACIgCABIgBABIgDABIgEABIgBABIgBAAIgCABIgFABIgBACIgBAAIgCABIgEABIgCABIAAAAIgDABIgEABIgCACIgCABIgDABIgDABIgCABIgCABIgCABIgDAAIgDABIgDABIgEABIgCAAIgDABIAAAAIgEABIgCABIgCABIgDAAIgBABIgCAAIgCAAIgRAAgAg7jeIgDAAIgCACIgCABIgCAAIgBABIgDAAIgEACIgCABIgEABIgGACIgDACIgFABIgCACIgDABIgDAAIgEABIgDABIgBABIgCABIgBABIgBABIgEABIgCABIgCACIgDABIgCABIgCABIgBABIgCACIgEABIgCACIgCABIgBABIgBABIgDABIgBACIgCACIgCABIgCABIgCABIgCABIgBABIgBACIgBACIgBABIgBABIgCABIgBABIgCACIgBABIgBACIgCABIgCABIgBABIgBABIgBACIgBABIgBACIgBABIAAABIgBABIgBABIgBACIgBABIgBACIgBABIgCABIgBABIgBABIgBACIgBACIAAABIgBABIAAABIgBABIgBACIAAABIgBACIAAABIgBABIAAACIgBAAIAAACIgBABIAAACIAAABIgCABIAAABIAAABIAAACIgBABIAAACIgBABIAAABIgBABIgBABIAAACIAAABIAAACIAAABIAAABIgBACIAAABIgBABIAAABIAAACIgBABIgBACIgBAAIAAACIAAABIAAABIAAACIAAABIgBACIAAAAIAAADIAAADIAAADIAAABIAAABIAAACIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAABIgBABIgBACIAAABIAAAEIAAAEIAAADIAAADIAAADIAAADIAAACIAAACIAAAFIAAADIAAADIAAAEIAAABIAAABIABACIAAABIABABIAAABIAAABIAAABIABABIAAACIABACIABABIAAABIABABIAAABIAAACIAAABIAAACIABABIAAABIAAABIABABIAAACIAAABIAAACIAAABIAAABIAAACIABAAIAAACIAAABIAAACIAAABIABABIAAACIAAAAIABACIAAABIABACIAAABIAAABIAAABIABACIABABIAAABIABACIAAABIABACIAAAAIABACIAAABIABABIAAACIAAABIABACIABABIAAABIABABIABABIABACIABABIABACIAAAAIABACIABABIAAABIABACIAAABIABACIABABIABABIAAABIABABIABACIABACIABABIAAABIABABIAAABIAAACIABABIAAACIAAABIABABIAAABIABABIACACIABABIAAACIABABIABABIAAABIAAABIAAACIAAABIABACIABABIABABIAAABIABABIABACIABACIACABIABABIAAABIAAABIABACIAAABIABACIAAABIABABIABABIABABIABACIABABIABACIABABIABABIABABIABABIABACIAAABIABACIACABIABABIABABIAAABIABACIAAACIACABIABABIACABIABABIABACIACABIABACIACABIACABIACACIABAAIABACIACABIACACIACABIAFACIADABIACABIABABIABAAIADABIADACIADABIADABIAEABIADABIAEABIACABIADACIACABIAEABIACABIACABIACABIABAAIACABIACABIAAAAIACABIADAAIACACIACABIACABIABAAIAEABIABAAIACABIAEABIAEABIAEABIADAAIACACIACAAIAEABIACABIABABIADAAIACABIAFAAIAEABIACABIACABIACAAIADABIAKABIACAAIACABIADAAIAMABIADAAIADAAIARAAIADgBIACAAIADgBIADgCIACAAIACgBIAFAAIABAAIABgBIADgBIAEgBIADgBIACgBIAAAAIAEgBIACgCIACgBIADgBIADAAIABgBIACgBIACAAIAAAAIAEgBIACgCIACAAIABgBIADgBIACgCIACAAIAEgBIACgBIABgBIADgCIACgCIACgBIACgBIACgBIACgBIABgBIACgCIACgCIABgBIACgBIABgBIACgBIABgCIACgBIACgCIABgBIACgBIABgBIACgBIABgCIABgBIABgCIAAgBIABgBIABgCIACAAIABgCIACgBIAAgCIABgBIABgBIABgBIABgBIABgCIABgBIAAgCIABgBIABgBIAAgCIABgBIAAgBIABgBIAAgCIAAgBIABgCIAAgBIAAgBIABgBIAAgBIAAgCIABgBIACgCIAAAAIABgCIAAgBIABgBIAAgCIAAgBIAAgCIABgBIAAgBIAAgBIABgBIAAgCIAAgBIABgCIABgBIAAgBIABgBIAAgBIAAgCIABgCIABgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgCIAAgBIABgBIAAgBIAAgBIABgCIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIACgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIgBgBIgBgBIAAgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgCIgBgBIAAgBIAAgCIAAAAIgBgCIgBgBIAAgCIgBgBIAAgBIgBgCIgBAAIgBgCIgBgBIAAgCIgBgBIgBgBIAAgCIgBgBIAAgBIgBAAIgBgCIAAgBIgCgCIgBAAIgBgCIAAgBIgBgBIAAgCIgBgBIgBgCIgBAAIAAgCIgBgBIgBgBIAAgCIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIAAgCIgBgBIgBgCIgBgBIAAgBIAAgBIgCgBIgBgCIgBgCIgBgBIgCgBIgBgBIgBgBIgBgCIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIAAgCIgBgBIgBgCIgCgBIgBgBIgCgBIgBgBIgBgCIgBgBIgDgCIgCgBIgBgBIgDgBIgBgBIgDgCIgCgCIgBgBIgBgBIgCgBIgCgBIgCgCIgBgBIgCgCIgCgBIgEgBIgBgBIgCgBIgCgCIgCgBIgCgCIgCgBIgBgBIgBgBIgCgBIgCgCIgCgBIgBgCIgBgBIgCgBIgCgBIgBgBIgBgCIgCgCIAAgBIgCgBIgBgBIgCgBIgBgCIgBgBIgBgCIgBgBIgBgBIgCgBIgBgBIgCgCIgBgBIAAgCIgBgBIgBgBIgBgCIgCAAIgBgCIAAgBIgBgCIgCgBIAAgBIgBgCIAAAAIAAgCIgBgBIgBgCIAAgBIgBgBIgBgCIgCgBIAAgBIgBgBIAAgCIAAgBIgBgCIgBgBIgBgBIgBgBIgBgBIAAgCIgBgBIgCgCIAAAAIgBgCIgBgBIgBgBIgBgCIAAgBIgBgCIgBAAIgBgCIgCgBIgBgBIgCgCIgBgBIAAgCIgBgBIgCgBIgDgBIgBgBIgBgCIgBgCIAAgBIgBgBIgCgBIgCgBIgCgCIgBgBIgBgCIgBgBIgBgBIgDgBIgBgBIgCAAIgCgBIgDgCIgBgBIgCgCIgBgBIgCgBIgBgBIgDgBIgCgCIgDgBIgEgBIgBgBIgBAAIgBgBIgkAAIgCAAIgDAAIgBAAIgBAAg");
	this.shape.setTransform(24.2,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF715").s().p("AArDhIgDgBIgDAAIgMgBIgCAAIgCAAIgDgBIgKAAIgCgBIgCAAIgDgBIgCgBIgDgBIgGgBIgCAAIgCgBIgCAAIgCgBIgDgBIgCgBIgDgBIgDAAIgDgBIgFgBIgDgBIgCgBIgCgBIgDAAIgCgBIgCgBIgCgBIgCgBIgCAAIgCgBIgBAAIgCgBIgCgBIgBAAIgBgBIgCgBIgDgBIgDgBIgDgBIgDgCIgCgBIgEgBIgDgBIgDgBIgDgBIgEgCIgCgBIgDgBIgCAAIgBgBIgCgBIgDgBIgFgDIgCgBIgCgBIgCgBIgBgCIgBgBIgCgBIgCgCIgCgBIgBgBIgCgBIgBgCIgBgBIgBgBIgCgCIgBgBIgBgBIAAgCIgBgBIgBgBIgBgBIgCgCIAAgBIgBgBIgBgCIgBgBIgBgBIAAgBIgCgCIgBgBIgBgBIgBgCIgBgBIAAgBIgBgCIgBgBIAAgBIgBgBIAAgCIgBgBIAAgBIgBgCIgCgBIgBgBIgBgCIAAgBIgBgBIAAgBIgBgCIgBgBIgBgBIAAgCIAAgBIAAgBIgBgCIgBgBIAAgBIgBgBIgBgCIgBgBIgBgBIAAgCIgBgBIAAgBIAAgBIAAgCIgBgBIgBgBIAAgCIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIAAgCIgBgBIgBgBIAAgCIgBgBIgBgBIgBgCIAAgBIgBgBIgBgBIgBgCIgBgBIAAgBIgBgCIgBgBIAAgBIgBgBIAAgCIAAgBIgBgBIgBgCIAAgBIgBgBIAAgCIgBgBIAAgBIgBgBIAAgCIAAgBIgBgBIAAgCIAAgBIgBgBIAAgCIAAgBIgBgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgBIgBgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgCIgBgBIAAgBIAAgEIAAgDIAAgEIAAgEIAAgCIAAgDIAAgCIAAgDIAAgEIAAgCIAAgEIAAgEIABgBIABgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgCIAAgDIAAgDIABgBIAAgBIAAgBIABgCIAAgBIAAgBIAAgCIAAgBIABgBIABgCIAAgBIAAgBIABgBIAAgCIABgBIAAgBIAAgCIAAgBIABgBIAAgCIAAgBIABgBIABgBIABgCIAAgBIAAgBIABgCIAAgBIAAgBIABgBIAAgCIAAgBIABgBIAAgCIABgBIAAgBIABgCIABgBIAAgBIABgBIABgCIAAgBIABgBIAAgCIABgBIAAgBIABgCIABgBIABgBIACgBIABgCIACgBIABgBIAAgCIABgBIABgBIAAgBIABgCIABgBIACgBIAAgCIABgBIACgBIABgCIACgBIABgBIACgBIABgCIABgBIACgBIABgCIABgBIABgBIABgCIACgBIABgBIACgBIACgCIACgBIACgBIACgCIACgBIABgBIABgCIACgBIADgBIADgBIACgCIABgBIACgBIACgCIADgBIACgBIADgBIADgBIABgBIABgBIACgBIACgBIACgCIAFAAIACgBIADgBIADgBIAEgBIADgCIAGgCIAFgCIACAAIADgCIADAAIACgBIABAAIACgBIACgCIADAAIACgBIABAAIACABIADAAIAjAAIABABIABAAIACABIADABIADABIADABIACACIABABIACABIACABIABACIABABIADABIADABIACABIABAAIACACIABABIABABIACACIABABIABABIACACIACABIABABIAAABIABACIACABIABABIACACIACABIABABIABACIABABIABABIABABIACACIABABIABABIABACIABABIAAABIABABIABACIABABIABABIABACIABABIAAABIABACIABABIACABIAAABIABACIABABIAAABIAAACIABABIABABIABACIABABIAAABIABABIABACIAAABIABABIAAACIABABIABABIABACIAAABIABABIACABIABACIABABIABABIABACIABABIABABIABABIACACIABABIABABIACACIABABIABABIABACIABABIACABIABABIABACIACABIABABIABACIACABIABABIACACIABABIACABIACABIABACIACABIABABIADACIABABIACABIACACIACABIADABIACABIACACIACABIACABIABACIACABIABABIABABIADACIACABIABABIADACIACABIABABIADACIABABIABABIACABIABACIACABIABABIABACIABABIAAABIABACIACABIABABIABABIABACIAAABIABABIABACIABABIACABIACABIABACIABABIABABIAAACIAAABIABABIABACIABABIAAABIABABIACACIABABIAAABIABACIABABIAAABIABACIABABIAAABIABABIABACIABABIABABIAAACIABABIAAABIABABIACACIAAABIABABIABACIABAAIAAABIAAACIABABIABABIABABIAAACIABABIABABIABACIAAABIABABIAAACIABABIABABIAAABIABACIAAABIAAABIABACIAAABIAAABIABACIAAABIAAABIAAABIAAACIAAABIABABIAAACIAAABIABABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIgBABIAAABIgBACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIgBABIAAABIgBACIAAABIAAABIAAABIAAACIAAABIgBABIAAACIgBABIAAABIAAACIgBABIAAABIAAABIAAACIAAABIgBABIAAACIAAABIgBABIAAACIAAABIAAABIgBABIAAACIAAABIgBABIAAACIgBABIgBABIAAACIgBABIAAABIAAABIgBACIAAABIgBABIAAACIAAABIAAABIgBABIAAACIgBABIAAABIgBACIgBABIAAABIgBACIAAABIAAABIgBABIAAACIgBABIAAABIgBACIAAABIgBABIAAACIgBABIgBABIAAABIgBACIgBABIgBABIgBACIgBABIgBABIAAABIgCACIgBABIgBABIgBACIgBABIgBABIgBACIgBABIgBABIgCABIgBACIgBABIgCABIgCACIgCABIgBABIgBACIgCABIgBABIgCABIgCACIgCABIgBABIgCACIgCABIgCABIgCABIgCACIgDABIgBABIgCACIgDABIgCAAIgDACIgDABIgBAAIgBABIgDABIgDABIgBAAIgCABIgCABIgBABIgDAAIgDABIgCABIgCACIgDAAIgBABIgCABIgDABIgEABIgCABIgCABIgBAAIgEAAIgDABIgCAAIgCABIgDABIgDABIgDABIgRAAg");
	this.shape_1.setTransform(24.1,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ckB0dy1, new cjs.Rectangle(0,0,48.3,50.8), null);


(lib.ckB2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86238").s().p("AgGBmIABgBIAAgBIAAAAIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgCIABgBIAAgBIAAgBIABgBIAAAAIABgBIAAgBIABgBIAAgCIAAgBIABgBIAAgBIABAAIAAgCIABgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgCIAAgBIABgBIAAgBIAAgCIABAAIAAgBIABgBIABgBIAAgCIABgBIABgBIAAgBIABgBIAAAAIABgBIAAgBIABgBIAAgCIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIAAgBIABgBIABgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgDIAAgCIAAgCIAAgBIAAgEIAAgCIAAgCIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgCIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIgCgBIAAgBIgBgBIgBgBIgCgBIgCgBIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBAAIgBgBIAAgBIgCgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgCgBIgBgBIAAgBIgBgBIgBgBIgBgBIgCgBIgBgBIgCgBIgBgCIgBgBIAAgBIgBgBIgBAAIgBgBIgBgBIgDgBIAAgCIACAAIADACIABABIACABIADABIADAAIABAAIADABIAEABIAEADIADABIAEACIACABIACAAIABAAIABABIADABIACABIADABIACABIACABIACABIABAAIABABIACAAIACABIADAAIACABIAAAAIABAAIACABIACABIAAAAIABABIAAACIAAABIABABIABABIABABIAAABIABABIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAABIAAACIAAABIAAAAIABABIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAAAIAAABIAAABIABABIAAABIABACIAAABIABABIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIABABIABABIABABIAAABIABABIAAACIAAABIABABIAAABIAAABIABAAIABABIAAABIAAABIABACIAAABIABABIAAABIAAAAIAAABIAAACIABABIAAABIAAABIABABIAAABIABAAIAAABIACABIAAABIABABIAAABIABABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAACIABABIAAABIAAABIAAAAIABABIAAABIAAABIABABIAAACIAAABIACABIAAABIAAABIAAABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIgBABIgBACIgBABIgBABIgBAAIgBABIgBABIgBABIgBACIgBABIgBABIgCABIgBABIAAAAIgBABIAAABIgBABIgBACIgBABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgBACIgBABIgBABIAAABIgBAAIAAABIgBABIgBABIgBABIgCACIgBABIgBABIAAABIgBABIAAAAIAAACIgBABIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIgBAAIAAgBg");
	this.shape.setTransform(11.3,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBCQIgCAAIgDgBIgCAAIgBgBIgBgBIAAgCIgBgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgCIABAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIAAAAIAAgBIAAgBIAAgBIABgBIAAgCIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIABgBIABgBIAAAAIAAgBIABgBIABgBIAAgCIABgBIAAgBIAAgBIABgBIAAAAIABgBIAAgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIACgBIABgBIAAgBIAAgBIABgCIABgBIAAgBIABgBIAAgBIAAAAIABgBIABgBIAAgBIABgCIAAgBIAAgBIABgBIABAAIAAgCIAAgBIABgBIAAgBIABgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIgBgBIgCgBIgCgCIgCgDIgBgBIgCgCIgBAAIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIgCgBIgCgBIgBgBIgBgBIAAgBIgBgBIgBgBIgCgBIgBgBIgCgBIgBgBIAAgBIgBgBIgBgBIgBgCIAAgBIgBgBIgCgBIgBAAIAAgBIgBgBIgBgBIAAgCIgBgBIgBgBIgBgBIgBAAIgBgBIgDgEIgBgBIgCgCIgCgCIgDgCIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgCgCIgBgBIAAgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgCIAAgBIgBgBIgBgBIgBAAIgBgCIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgBgBIgBgBIAAgBIgCgBIgBgBIgBgBIgBgBIgBgBIAAgBIgBgCIAAAAIgBgBIgBgBIgBgBIgCgCIgCgBIgBgBIAAgBIgBAAIgBgBIgBgBIgBgBIgDgBIgBgCIgBgBIgBgBIgBgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIABgCIAAgBIACgBIADAAIACAAIAAgBIADAAIACABIADAAIACABIABABIAAAAIACABIACACIACABIABABIACABIACAAIACABIADABIACABIABABIACACIABAAIACABIADABIACABIADAAIADABIACABIACABIADABIACACIACABIACAAIADABIABABIABABIACAAIACAAIADABIACABIACABIACABIAGADIACABIABAAIACAAIADABIABABIACABIADABIADACIABAAIADABIACABIAAAAIACABIAAAAIACAAIACAAIAEABIACgBIABAAIAAAAIACgBIACAAIADAAIABABIACAAIACABIABABIABACIAAABIABABIAAABIABABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIABABIABABIAAABIABACIABABIAAABIAAABIAAAAIABABIABABIAAABIAAABIABACIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAAAIABABIAAABIAAABIABABIABACIAAABIABABIAAABIABABIAAAAIABABIAAABIABABIAAACIABABIAAABIAAABIABABIAAABIABABIAAABIAAABIABABIABABIAAABIABABIAAABIABABIAAABIABABIAAACIAAABIAAABIAAABIABABIAAAAIAAABIABABIAAABIABACIAAABIABABIAAABIABAAIABAAIAAABIABACIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIABABIABACIAAABIABABIAAABIAAABIAAAAIAAABIAAABIAAABIAAADIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIgBABIAAABIgBABIgBABIAAABIgCABIAAABIgBABIgBABIgBACIgBAAIgBABIgBABIgBABIgBABIAAACIgBABIgBABIgBABIgBAAIgBABIgCACIgBABIgBACIgBABIgBABIgBABIgBABIAAABIgCABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBACIAAABIgBABIgBABIgBAAIAAABIgBABIAAABIgBABIgBACIAAABIgCABIgBABIgBAAIgBABIgBABIAAACIAAABIgBABIgBABIgBABIgCABIAAABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIgCABIgBABIAAABIgBACIgBABIgBABIAAABIgBABIgBAAIAAABIgBABIAAABIgCACIgBABIgBABIgBABIgBABIgBABIgCABIgCABIgBABIgBABIgBABIgBABIgBABIgBAAIgCABIgDAAIgCAAgAgkhiIACABIABABIABABIACABIABABIAAABIABABIABACIABAAIABABIACABIACABIABACIABABIAAABIABABIABAAIABABIABABIABABIACABIABACIABABIABABIABABIAAABIABABIACABIABABIABABIABABIABABIABABIAAABIAAABIABABIABABIABABIABABIABACIABABIABABIAAABIABAAIACABIABABIABABIAAACIADABIABABIABABIABAAIABABIACABIACABIABACIABABIABABIABABIABABIABABIAAABIABABIACABIABABIABABIABABIABABIABABIABABIABABIABABIACABIABACIABABIAAABIABABIAAAAIABABIAAABIABABIAAABIAAADIAAACIAAADIAAACIAAACIAAACIAAABIAAACIAAACIAAABIAAABIAAACIgBAAIgBABIAAABIAAABIAAACIgBABIAAABIAAABIgBAAIAAABIgBABIAAABIAAABIgBACIAAABIgBABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAACIAAABIgBABIgBAAIAAACIgBABIAAABIAAACIgBABIAAABIgBABIAAAAIAAABIgBABIAAABIAAACIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAACIAAABIAAABIgBABIAAABIgBAAIgBABIAAABIAAABIAAACIAAABIAAABIgBABIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIgCABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIABAAIABgBIABgBIABgBIABgCIABgBIABgBIABgBIAAgBIABAAIABgBIAAgCIAAgBIABgBIABgBIABgBIABgBIACgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIACgBIABgBIABgBIABgBIABgBIAAgCIABgBIABgBIAAgBIABAAIAAgBIABgBIACgBIABgBIABgCIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIABgBIACgBIAAgBIABgBIABgBIABgBIABgBIACgBIABgBIABgBIABgBIABgCIAAgBIAAAAIABgBIABgBIABgBIACgCIABgBIABgBIAAgBIABAAIAAgBIABgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgCIgBgBIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgCIgBgBIAAgBIgBgBIAAAAIAAAAIgBgBIAAgCIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIgBgCIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgCIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIAAgBIgBgBIgBgBIgBgBIAAgCIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgCIgBgBIgBgBIAAgBIAAgBIgBgBIAAAAIgDgBIgCgBIgBAAIAAAAIgBgCIgDAAIgDgBIgCAAIAAgBIgCAAIgCgBIgDgBIgCAAIgCgBIgCgBIgEgBIgBgCIAAAAIgBAAIgCgBIgFgCIgCAAIgFgDIgDgBIgDgBIgCgBIgDAAIgCgBIgCgBIgCgBIgDgBIgBAAIAAABg");
	this.shape_1.setTransform(9.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ckB2, new cjs.Rectangle(0,0,19,28.9), null);


(lib.ckB1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhRBTIgCAAIgCgBIgCgBIgCgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIABAAIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIABgBIABgBIABgCIAAgBIABgBIAAgBIAAgCIABgBIABgBIABgCIABgBIAAgBIABgCIABgBIABgBIABgBIABgCIAAgBIABgBIABgCIABgBIABgBIAAgCIABgBIACgBIAAgBIABgCIACgBIABgBIABgCIABgBIABgBIAAgCIABgBIABgBIAAgBIACgCIABgBIABgBIAAgCIABgBIABgBIABAAIABgCIABgBIABgBIABgCIACgBIABgBIABgCIABgBIABgBIABgBIABgCIABgBIAAgBIABgCIABgBIAAgBIAAgCIABgBIABgBIABgBIABgCIACgBIABgBIABgCIADgCIACgDIACgBIACgBIABgCIABgBIABgBIACgCIABgBIABgBIABgBIABgCIACgBIABgBIABgCIACgBIACgBIABgCIABgBIACgBIAAgBIABgCIABgBIABgBIACgCIACgBIACgBIABgCIABgBIACgBIABgBIABgCIABgBIABgBIACgCIADgBIABgBIADAAIACAAIAAgBIACAAIACABIADABIADABIABABIACACIABABIAAABIABABIAAACIAAABIABABIAAACIAAABIAAABIABACIAAABIAAABIAAABIAAACIABABIABABIAAACIAAABIAAABIABACIAAABIAAABIABABIABACIAAABIAAABIABACIAAABIAAABIAAABIABACIAAABIABABIABACIABABIABABIABACIAAABIABABIABABIABACIAAABIABABIAAACIABABIAAABIABACIAAABIAAABIABABIAAACIAAABIAAABIAAACIABABIABABIAAABIAAACIABABIAAABIABABIABABIAAABIABACIABABIAAABIACABIAAACIABABIABABIABACIAAABIADABIACACIACABIABABIABABIAAACIABABIAAABIAAACIABABIAAABIAAACIAAABIgBABIAAABIAAACIgBABIgBABIgBACIgBABIgCABIgCABIgDACIgDABIgCAAIgDABIgDAAIgBABIgBABIgCAAIgDABIgCABIgBABIgDABIgCABIgCABIgBABIgCAAIgCABIgEAAIgDACIgEABIgCABIgCAAIgCABIgEABIgCABIgCABIgDAAIgEABIgCAAIgGABIgDABIgCABIgDAAIgDACIgDABIgDAAIgFABIgCABIgFABIgDACIgHAAIgCAAIgBAAIgHABIgCAAIgCAAIgIACIgEABIgDAAIgBABIgDAAIgBABIgMABIgCgBgAAXgoIgBABIgCABIgBACIgCABIgBABIgCACIgCABIgBABIgBABIgCACIgBABIgBABIgCACIAAABIgBABIgBABIgBACIgBABIgBABIgBACIgBABIgCABIgBACIgBABIgBABIgBABIAAACIgBABIgBABIAAACIgCABIgBAAIAAACIgBABIAAABIgBABIgBACIgBABIgCABIgBACIgBABIgCABIgBACIgBABIgBABIgBABIgBACIgBABIgBABIgBACIgBABIAAABIgBABIgBACIgBABIAAABIgCACIgBABIgBABIgCACIgBABIAAABIgBABIgBACIAAABIgBABIgBACIgBABIgBABIgBACIgBABIgBABIAAABIgBACIgBABIACAAIADgBIABgBIACgBIAEAAIADgBIADgBIACgBIACgBIACgBIADgBIABAAIACgBIADAAIACgBIACAAIAEgBIACgBIADgBIACgBIADAAIACgBIACgBIADAAIADgBIACAAIACgBIADAAIABAAIACgBIADgBIADgBIADgBIAEgBIAEgBIACgBIADgCIACgBIACAAIADgBIACgBIACgBIACgBIgBgBIAAgBIgBgCIgBgBIgBgBIgBgCIgBgBIAAgBIAAgCIgBgBIAAgBIgBgBIgBgCIAAgBIgBgBIAAgCIgBgBIAAgBIAAAAIgBgCIAAgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAgBIgBgBIgBgBIgBgCIAAgBIgBgBIgBgCIgBgBIgBgBIgBgCIgBgBIgBgBIAAgBIAAgCIgBgBIAAgBIgBgCIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIgBgCIAAgBIgBAAIgBACg");
	this.shape.setTransform(9.1,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86238").s().p("Ag0AyIABgCIAAgCIABgBIABgBIABgBIABgBIABgCIABgBIAAgCIABgBIABgBIABgBIAAgBIABgCIABgBIABgCIABgBIACgBIABgBIABgBIABgCIABgCIAAgBIAAgBIABgBIACgBIAAgCIABgBIABgCIABgBIABgBIACgBIABgBIABgCIACgBIABgCIABgBIABgBIABAAIABgBIABgCIAAgBIABgCIABgBIABgBIABgBIAAgBIABgCIABgCIAAgBIABgBIABgBIABgBIACgCIACgBIAAgCIABgBIABgBIACgCIABAAIABgCIAAgBIABgCIACgBIABgBIABgBIABgBIABgCIACgBIACgCIACgBIACgBIABgCIABAAIACgCIABgBIABAAIAAABIAAABIABABIAAABIAAACIAAABIABACIAAABIAAABIABABIAAABIAAACIABABIAAACIABABIACABIAAABIABABIABACIABABIAAACIABABIABABIABABIABABIAAACIAAABIAAACIAAABIAAABIABABIAAACIAAABIABABIAAACIABABIAAACIABAAIAAABIABABIABABIAAACIABABIAAACIAAAAIABACIABABIABABIABACIABABIAAACIgCABIgBAAIgDABIgDABIgCAAIgBABIgDACIgDABIgDACIgEAAIgEABIgDABIgDABIgCABIgBAAIgCAAIgDABIgCABIgCAAIgDABIgDABIgCAAIgCABIgCAAIgDABIgDABIgDABIgCAAIgDABIgCAAIgCABIgCABIgDABIgCAAIgBABIgDABIgDABIgDABIgDAAIgCABIgCABIgDACIgBAAg");
	this.shape_1.setTransform(8.9,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ckB1, new cjs.Rectangle(0,0,18.2,16.8), null);


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


(lib.NumberDot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol();
	this.instance.parent = this;
	this.instance.setTransform(7.3,11.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAWQgKgJAAgNQAAgMAKgJQAKgJANAAQAOAAAJAJQALAJAAAMQAAANgLAJQgJAJgOAAQgNAAgKgJg");
	this.shape.setTransform(16.1,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberDot1, new cjs.Rectangle(0,0,19.4,26.4), null);


(lib.hen3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beard1();
	this.instance.parent = this;
	this.instance.setTransform(87.1,60.3,1,1,21.2,0,0,22.9,0.7);

	this.instance_1 = new lib.beard2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.1,56.5,0.747,1,61.2,0,0,14.7,9.8);

	this.instance_2 = new lib.eye2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(53.8,44.7,1.168,1,9);

	this.instance_3 = new lib.beack();
	this.instance_3.parent = this;
	this.instance_3.setTransform(69,39,1,1,0,25.4,-154.6,44.6,4.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46B15B").s().p("AAzBbIgLgCIgIgCIgHgDIgIgEIgJgFIgIgEIgDgEIgHgEIgJgEIgIgFIgGgEIgDgEIgMgNIgJgIIgIgJIgJgIIgIgIIgDgEIgCgEIgDgEIgCgFIgBgEIgCgFIAAgDIAAgFIgCgEIgCgFIgCgDIAAgFIAAgEIAAgFIADgDIABgFIACgEIAAgFIADgEIABgEIAHgEIADgBIALAAIACABIABADIAEAEIAGAEIANADIAIgCIAFgBIADgDIAFgEIAIADIAJAEIAHAFIAFAEIAEAEIAGAEIAOAFIAEAEIAIAEIAIAEIAIAFIAEAEIAFAEIAEAEIAEAEIAEAFIACAEIABAFIADADIACAFIACADIACAFIAAADIABAFIADAEIAEAFIADADIAAAFIAAAEIAAAFIAAADIAAAFIAAAEIAAAEIgCAFIgCAEIgBAEIAAAEIgDABIgFAFIgCAEIgCAFIAAACIgiAAg");
	this.shape.setTransform(121.2,214.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AijFoIgMgDIgFgEIgDgFIgBgEIgCgEIAAgEIAAgFIACgEIACgEIAFgEIAIgJIANgNIANgMIAIgJIAEgEIADgEIACgFIACgEIAGgEIAJgEIAEgFIAHgEIAHgEIAEgEIAJgFIAFgEIAFgEIAEgEIAIgFIAGgEIAEgEIAFgEIADgEIgIACIgWAGIgJAEIgEADIgNADIgEADIgNACIgEAFIgHAEIgJAEIgIAEIgJAFIgEADIgDABIgMADIgJAEIgGAEIgFAFIgJAEIgEAEIgHAEIgHAFIgEAEIgFAEIgCADIgDABIgJACIgFAAIgMgDIgFgEIgDgFIgCgEIgBgEIAAgEIAAgFIABgEIADgEIAEgEIAFgFIAEgEIAGgEIAIgEIAEgFIAFgEIAFgEIARgJIAigRIAigRIAJgEIALgDIAGgDIALgCIAIgFIAGgCIADgCIAIgBIAMgDIAOgEIAGgDIAIgCIARgCIAOgFIAFgDIAIgBIAHgBIgBgCIAAgEIAAgEIABgFIADgEIAFgEIAEgEIAEgDIABgEIACgFIADgEIAAgEIAAgEIAAgFIABgEIADgEIABgEIAAgFIAAgEIACgEIADgEIABgFIAAgEIAAgEIABgEIACgFIADgEIAAgEIABgEIACgFIACgEIAAgEIAAgDIAAgFIACgEIADgEIABgEIAAgFIABgEIADgEIACgEIAAgFIAAgEIABgEIADgEIABgFIgFAAIgNgCIgQgDIgMgDIgJgEIgHgFIgKgEIgEgEIgGgEIgHgFIgKgEIgEgEIgHgEIgIgEIgEgFIgEgEIgEgEIgFgEIgEgFIgEgEIgBgEIgCgEIgEgFIgEgEIgHgEIgIgEIgEgFIgEgEIgBgEIgCgEIgEgFIgEgEIgFgEIgCgEIgCgFIAAgEIgBgEIgDgEIgCgFIAAgEIgBgEIgDgEIgBgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIABgEIACgEIABgEIABgFIACgEIABgEIACgEIABgFIACgEIABgEIADgEIAEgFIAEgEIAFgEIAIgEIAGgFIAFgEIANgCIAAgBIAoAAIALADIAnADIALADIAHAEIAEAEIAJAFIAIAEIAHAEIAFAEIAIAFIAJAEIAIAEIAHAEIAGAFIAEAEIAEAEIAFAEIAEAEIAHAFIAHAEIAEAEIAFAEIACAFIACAEIADAEIAEAEIADAFIABAEIACAEIABAEIABAFIACAEIADAEIAEAEIADAFIABAEIACAEIABAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAIIgBAFIgDAEIgCAEIAAAEIgBAFIgDAEIgBAEIgDAEIgCAFIgCAEIgCAEIgDAEIgCAFIgFAEIgEAEIAAADIgBAEIgDAEIgCAFIAAAEIAAAEIgBAEIgBAFIgDAEIAAAEIAAAEIAAAFIAAAEIgCAEIgDAEIgCAFIgCADIgBAEIgDAJIgDAIIgDAJIgDAIIgEANIgDAIIAAAFIAAAEIgBAEIgDAEIgBAFIAAAEIgCAEIgDAEIgCAFIgCAEIgBAEIgCAEIgCAJIgDAIIgDAJIgBADIA3AAIAKADIASACIAKADIASADIAKADIAHADIAKADIAGACIABABIAKACIAJAFIAHAEIAEAEIABAEIACAEIABAFIgBAEIgCAEIgBAEIgEAFIgDADIgDABIgIABIgRAAIgMgCIgIgFIgJgEIgFgDIgCgBIgPgCIgMgCIgWgDIgMgDIg4AAIgMADIgLgDIAAgBIgBABIgHAEIgGAEIgHAFIgGAEIgEAEIgEAEIgFAFIgFAEIgFAEIgEAEIgDAFIgGAEIgHAEIgEAEIgEAFIgGAEIgEAEIgJAEIgEAFIgHAEIgHAEIgGAEIgEAFIgGAEIgIAEIgDAEIgEAFIgEAEIgFAEIgEAEIgEAFIgDAEIgBAEIgDAEIgCAFIgDAEIgEAEIgEAEIgHAEIgJAFIgKADIgFAAgAg4krIgHAEIgBAEIgDAEIAAAFIgBAEIgCAEIgDAEIAAAFIAAAEIAAAEIACAEIADAFIABAEIAAAEIAAAEIACAFIABAEIADAEIADAEIABAFIADAEIAIAIIAJAJIAIAIIAJAJIANANIACAEIAFAEIAJAEIAIAFIAHAEIAEAEIAJAEIAIAFIAJAEIAGADIAIABIALADIAiAAIAAgDIACgEIADgEIAEgFIADgBIAAgEIABgEIADgFIABgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIgCgEIgFgEIgDgEIgBgFIAAgEIgBgEIgDgEIgCgFIgCgEIgCgEIgBgEIgFgFIgEgEIgEgEIgEgEIgFgFIgIgEIgIgEIgIgEIgEgFIgOgEIgGgEIgEgEIgEgFIgJgEIgIgEIgJgDIgEAEIgDADIgEABIgJACIgNgDIgFgEIgFgEIgBgDIgBgBIgMgBIgDACg");
	this.shape_1.setTransform(118.4,235.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F9E52").s().p("AgHMQIgMgDIivgDIgMgCIg4gEIgMgCIgngDIgMgDIgFgDIgMgCIgCgCIgGgDIgJgEIgLgEIgBgBIgDgCIgHgFIgJgEIgCgEIgFgFIgFgDIgDgFIgGgEIgHgFIgGgDIgEgFIgGgEIgHgEIgIgEIgHgFIgEgEIgFgEIgEgEIgGgFIgIgEIgEgEIgFgFIgFgDIgJgFIgEgEIgEgFIgFgDIgFgFIgHgEIgGgFIgEgDIgCgFIgCgEIgDgFIgFgDIgEgFIgEgEIgEgFIgFgDIgEgFIgEgEIgEgEIgGgFIgIgEIgFgEIgEgEIgEgFIgCgEIgCgEIgCgEIgDgFIgBgEIgEgEIgFgEIgEgFIgBgEIgDgEIgBgFIgDgDIgCgFIgEgEIgEgFIgEgDIABgCIAAgFIAAgDIAAgFIgBgEIgDgFIgCgDIgEgFIgHgEIgGgDIAAAAIgEgEIgBgFIgCgEIgBgEIgDgEIAAgEIgBgFIgCgEIgDgEIgDgEIgEgFIgBgEIgCgEIgBgEIgBgFIgCgEIgDgEIAAgEIgBgFIgCgEIgCgEIgCgFIgDgDIgBgFIAAgEIgBgFIgDgDIgCgFIAAgEIgBgFIgCgDIgBgFIgBgEIAAgFIAAgDIgCgFIgBgEIgCgFIgCgEIgFgEIAAgEIgBgEIgDgFIgBgEIAAgEIAAgEIgCgFIgBgEIgDgEIAAgEIAAgFIAAgEIAAgEIAAgEIgBgFIgCgEIgBgEIgCgEIAAgEIAAgFIAAgEIAAgFIAAgDIgBgFIgCgEIgBgFIgBgDIAAgFIAAgEIgCgFIgDgDIgBgFIAAgEIAAgFIAAgEIAAgDIAAgFIAAgEIgBgFIgCgDIgDgFIAAgEIAAgFIAAgDIAAgFIAAgEIAAgFIgBgDIgBgFIgCgEIgBgFIAAgIIAAgIIAAgJIAAgEIAAgJIAAgIIAAgIIAAgIIAAgEIAAgFIAAgEIgCgEIgDgEIgBgEIAAgrIAAgrIAAgmIAAgiIAAgiIAAgiIAAgBIAAgBIABgDIADgFIACgEIAAgFIAAgEIgCgDIgDgFIgBgEIAAAAIAAgYIADgFIABgEIACgEIAAgFIAAgDIAAgFIAAgEIAAgFIAAgDIAAgFIAAgEIABgFIABgDIACgFIABgEIAAgFIAAgDIAAgFIAAgEIAAgFIAAgDIAAgFIAAgEIACgEIABgFIACgEIABgEIAAgEIAAgFIADgEIABgEIACgEIAAgFIAAgEIABgEIADgEIABgFIAAgEIAAgEIACgEIABgEIACgFIABgEIAAgEIAAgEIAAgFIAAgEIABgEIACgEIABgFIACgEIAAgEIACgEIACgFIABgEIAAgEIADgFIACgDIABgFIAAgEIAAgFIAAgDIABgFIADgEIACgFIACgDIACgFIABgEIAAgFIACgDIADgFIABgEIAAgFIABgEIADgEIACgEIAAgEIAAgFIABgEIADgEIABgEIAAgFIAAgEIACgEIAEgEIABgFIADgEIADgEIABgEIADgFIACgEIADgEIABgFIADgDIABgFIADgEIABgFIADgDIADgFIADgEIADgFIADgDIABgFIADgEIABgFIAAgDIADgFIAEgEIAFgFIABgBQiuKjEzGxQImIiJalaIgEAEIgJAIIgEAFIgEAEIgFAEIgCAFIgCADIgDAFIgEAEIgEAFIgDADIgEAFIgGAEIgEAFIgDADIgBAFIgDAEIgFAFIgEADIgEAFIgEAEIgFAFIgEAEIgIAEIgGAEIgEAEIgEAFIgFAEIgEAEIgGAEIgIAFIgEAEIgHAEIgIAEIgEAFIgEAEIgEAEIgFAEIgEAFIgEAEIgHAEIgHAEIgEAEIgJAFIgIAEIgHAFIgKADIgRAGIgKADIgHADIgPAEIgJADIgJACIgHACIgOAEIgKAEIgJABIgHACIgKADIgHADIgOAEIgbAEIgNACIgmADIgMADIizAAgAL7FeIAbhDIAAAEIgCAEIgCAEIgBAFIAAAEIgDAEIgCAEIgBAFIAAADIgDAFIgBAEIgCAEIgCAFIgCAEIgDAEIgDAEIgBAFIgBACIACgHg");
	this.shape_2.setTransform(93.7,133.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECBE65").s().p("AC0HaIAAgDIAAgFIAAgEIAAgFIAAgEIAAgEIACgEIADgEIACgFIAAgEIAAgEIAAgEIAAgFIACgEIABgEIACgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIACgEIADgEIAAgEIAAgFIAAgEIAAgFIAAgDIAAgFIABgDQAAgCC6AHQC5AICDhPQBUgzAagTIgBADIAAAFIgCAEIgCAEIgBAEIAAAEIgDAFIgBAEIgCAFIgEADIgEAFIgFAEIgEAFIgEADIgFAFIgBAEIgBAFIgFADIgIAJIgJAIIgIAJIgEAEIgFAFIgEADIgEAFIgFAEIgJAFIgJADIgIAFIgHAEIgKAFIgEADIgJADIgNAEIgIAEIgHAEIgKAEIgOAFIgQACIgJABIgHADIgIAFIgKACIgIACIgRAFIgRAHIgHACIgKADIgHADIgJAEIgQADIgMADIgKACIgIACIgIACIgJAEIgIACIgKADIgHADIgOAEIgQAEIgMACIgbADIgiAGIgNACIgVADIgMADIgbADIgOACIgbACIAAgCgAlqF7IgLgEIgigCIgLgDIgYgDIgWgFIgMgEIgLgDIgLgCIgGgDIgLgDIgGgCIgLgDIgGgEIgGgDIgFgFIgEgEIgFgFIgFgDIgIgFIgJgEIgGgFIgEgEIgGgDIgHgFIgIgEIgIgFIgDgDIgDgFIgCgEIgDgFIgGgDIgEgFIgCgEIgGgFIgJgDIgEgFIgEgEIgEgFIgFgEIgCgEIgCgEIgDgEIgEgFIgEgEIgEgEIgEgEIgCgFIgDgEIgCgEIgFgEIgCgFIgCgEIgDgEIgFgEIgDgFIgEgEIgBgEIgCgEIgFgEIgEgFIgFgEIgDgFIgFgDIgEgFIgDgEIgDgFIgBgDIgEgFIgEgEIgCgFIgBgDIgFgFIgDgEIgCgFIgCgEIgEgEIgDgEIgDgEIgBgFIgDgEIgBgEIgDgEIgCgFIgDgEIAAgIIAAgNIAAgNIAAgDIAAgFIAAgMIAAgRIAAgRIAAgIIAAgFIACgEIABgFIACgEIABgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIADgFIABgEIACgEIAAgEIAAgJIAAgIIAAgJIAAgJIAAgIIAAgEIAAgFIAAgDIABgFIADgEIABgFIAAgDIAAgFIACgEIABgFIABgDIACgFIACgEIABgFIABgEIACgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIADgFIABgEIACgEIAAgEIACgFIABgEIACgEIAAgEIAAgFIAAgEIACgEIABgEIABgEIACgFIABgEIABgEIAEgEIABgFIACgEIACgEIAAgEIACgFIADgEIABgEIACgEIACgFIADgEIACgEIACgFIAFgDIADgFIAEgEIADgFIAAgDIACgFIAAgEIADgFIACgDIACgFIABgEIADgFIAFgDIACgFIACgEIADgFIAEgEIADgEIACgEIACgEIAEgFIAEgDIABADIACAFIANAMIAJAJIAIAJIANAMIAMANIAJAJIAIAIIAEAEIABAFIACADIAFAFIAEAEIAEAEIAJAFIAFAEIACACQihEuDtD1QDNBmD9hjIAAACIBmAAIgBABIgBAFIgEAEIgGAEIgHAEIgFAFIgEAEIgFAEIgDAEIgFAEIgEAFIgFAEIgFAFIgIADIgFAFIgDAEIgEAFIgEADIgEAFIgIAEIgHAFIgEADIgIAFIgJAEIgHAFIgKADIgIAEIgGAFIgEAEIgGAFIgNADIgGAFIgFAEIgJAFIgIADIgIAFIgIAEIgJAFIgJADIgIAFIgIAEIgEAFIgKADIgHACIgOAFIiSAAg");
	this.shape_3.setTransform(160.4,115.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#46B15B").s().p("AgTOOIgLgDIiwgDIgLgCIg5gEIgLgCIgogDIgLgDIgGgDIgLgCIgDgCIgGgDIgIgEIgLgEIgCgBIgDgCIgHgFIgIgEIgDgEIgEgFIgGgDIgDgFIgGgEIgGgFIgGgDIgEgFIgGgEIgHgEIgJgEIgHgFIgEgEIgEgEIgEgEIgGgFIgJgEIgEgEIgEgFIgGgDIgIgFIgFgEIgEgFIgEgDIgGgFIgHgEIgFgFIgFgDIgBgFIgDgEIgDgFIgEgDIgEgFIgFgEIgEgFIgEgDIgEgFIgEgEIgFgEIgFgFIgJgEIgEgEIgEgEIgFgFIgBgEIgDgEIgBgEIgDgFIgCgEIgEgEIgEgEIgEgFIgCgEIgDgEIgBgFIgDgDIgBgFIgEgEIgFgFIgDgDIAAgCIAAgFIAAgDIAAgFIgBgEIgDgFIgBgDIgEgFIgIgEIgFgDIAAAAIgEgEIgCgFIgBgEIgCgEIgDgEIAAgEIgBgFIgBgEIgDgEIgDgEIgEgFIgCgEIgBgEIgCgEIgBgFIgBgEIgDgEIAAgEIgCgFIgBgEIgDgEIgBgFIgDgDIgCgFIAAgEIgBgFIgDgDIgBgFIAAgEIgCgFIgBgDIgBgFIgCgEIAAgFIAAgDIgBgFIgCgEIgBgFIgDgEIgEgEIAAgEIgCgEIgCgFIgCgEIAAgEIAAgEIgBgFIgCgEIgDgEIAAgEIAAgFIAAgEIAAgEIAAgEIgBgFIgBgEIgCgEIgBgEIAAgEIAAgFIAAgEIAAgFIAAgDIgCgFIgBgEIgBgFIgCgDIAAgFIAAgEIgBgFIgDgDIgCgFIAAgEIAAgFIAAgEIAAgDIAAgFIAAgEIgBgFIgBgDIgDgFIAAgEIAAgFIAAgDIAAgFIAAgEIAAgFIgCgDIgBgFIgBgEIgCgFIAAgIIAAgIIAAgJIAAgEIAAgJIAAgIIAAgJIAAgIIAAgEIAAgFIAAgEIgBgEIgDgEIgBgEIAAgrIAAgrIAAglIgBgiIAAgiIAAgiIAAgBIABgBIABgDIADgFIABgEIAAgFIAAgEIgBgDIgDgFIgBgEIgBAAIABgYIACgFIACgEIABgEIAAgFIAAgDIAAgFIAAgEIAAgFIAAgDIAAgFIAAgEIACgFIABgDIABgFIACgEIAAgFIAAgDIAAgFIAAgEIAAgFIAAgEIAAgEIAAgEIABgEIACgFIABgEIABgEIAAgEIAAgFIADgEIACgEIABgEIAAgFIAAgEIACgEIACgEIACgFIAAgEIAAgEIABgEIACgEIABgFIABgEIAAgEIAAgEIAAgFIAAgEIACgEIABgEIACgFIABgEIAAgEIADgEIABgFIACgEIAAgEIADgFIABgDIABgFIAAgEIAAgFIAAgDIACgFIADgEIABgFIADgDIABgFIACgEIAAgFIABgDIADgFIABgEIAAgFIACgEIADgEIABgEIAAgEIAAgFIACgEIACgEIACgEIAAgFIAAgEIABgEIAEgEIACgFIADgEIADgEIABgEIADgFIABgEIADgEIABgFIADgDIACgFIADgEIABgFIADgDIADgFIACgEIADgFIADgDIACgFIACgEIACgFIAAgDIADgFIAEgEIAEgFIAEgDIAFgFIAEgEIAEgEIACgFIACgEIADgEIAEgEIACgFIADgEIABgEIADgEIADgFIAGgDIAHgFIAEgEIABgFIADgEIADgEIAEgFIAEgDIAFgFIAEgEIAEgFIABgDIAFgFIAHgEIAEgFIAEgDIAHgFIAHgEIAFgFIABgDIAEgFIAHgEIAFgFIAIgEIAGgEIAEgEIAEgEIAJgFIAGgEIAEgEIAEgEIAEgFIAHgEIAHgEIAFgEIAIgFIAGgEIAEgEIAEgEIAFgFIAEgEIADgEIADgFIAFgDIAMgEIAFgCIAJgFIACgBIBMABIAMADIAVADIANADIAJACIABABIAHACIAHAFIAJAEIAIAEIAFAFIABAEIABAEIAFAEIAEAFIAEAEIAEAEIADAEIACAFIACAEIAFAEIADAEIABAFIADAEIABAEIAAAEIACAEIACAFIAFAEIAEAFIAEADIAEAFIACAEIAAAFIABADIADAFIACAEIAAAFIABADIADAFIABAEIAAAFIACADIACAFIADAEIACAEIABAFIACAEIABAEIABAEIACAFIABAEIAAAEIAAAEIACAFIACAEIAFAEIADAEIAAAFIABAEIABAEIADAFIACADIACAFIAFAEIADAFIABADIADAFIADAEIABAFIADADIABAFIACAEIADAFIABADIADAFIADAEIABAFIADADIAEAFIACAEIAAACIgDAEIgFAEIgEAFIgEADIgEAFIgFAEIgCAEIgCAFIgDADIgBAFIgBAEIgDAFIgCADIgDAFIgEAEIgEAFIgEADIgCAFIgBAEIgDAFIgBADIgCAFIgBAEIgDAEIgEAFIgFAEIgCAEIgCAEIAAAFIgBAEIgEAEIgDAEIgCAFIgBAEIgCAEIgBAEIgBAFIgCAEIgBAEIgCAFIgBADIgDAFIgDAEIgBAFIgDADIgBAFIgCAEIAAAFIAAADIAAAFIgBAEIgCAFIgBADIgBAFIAAAEIAAAFIgDADIgCAFIgBAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIgCAEIgCAEIgCAEIAAAFIgBAEIgDAEIgBAEIAAAFIgCAEIgDAEIgBAEIAAAEIAAAFIAAAEIAAAFIAAAIIAAAMIAAAJIAAAIIAAAFIAAAEIAAAFIgDAEIgBAEIgCAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIgBAEIgDAEIgBAEIAAAFIAAAVIAAAVIAAAWIAAAIIAAARIAAAZIAAANIAAAEIABAEIABAEIADAEIACAEIABAFIADAEIABAEIADAEIADAFIABAEIADAEIACAEIABAEIADAFIABAEIADAEIAEAEIADAFIACAEIACAEIAFAEIAEAFIAEAEIAEAEIAFAEIADAFIABAEIADAEIAEAFIAEADIAFAFIAEAEIADAFIABADIADAFIAEAEIADAFIABADIADAFIAEAEIAFAFIAEADIAEAFIACAEIABAFIAEADIAFAFIAEAEIAEAEIAEAFIAFAEIAEAEIADAEIABAFIADAEIAEAEIAGAEIAIAFIAFAEIAEAEIADAEIABAFIADAEIAEAEIAGAFIAHADIAFAFIAHAEIAHAFIAEADIAEAFIAHAEIAJAFIAIADIAEAFIAFAEIAFAFIAJADIAEAFIAHAEIAJAFIAMACIAFADIAMADIAFADIAWAFIANAEIAKACIANADIAEADIANACIAVADIANADIAgADIANADICfAAIAIgCIAGgCIALgDIAGgDIALgDIAEgBIADgDIAGgEIAKgDIAEgCIADgDIAGgDIAHgFIAIgEIAJgFIAIgDIAOgFIAHgEIAFgFIAEgDIAYgOIAZgNIANgIIAHgEIAHgEIAFgEIAEgFIAHgEIAHgEIAIgJIAJgIIAIgJIAFgEIAEgEIAEgFIAJgDIAFgFIAFgEIAIgIIAJgJIAIgIIAEgFIAFgEIAEgFIABgDIADgFIADgEIAEgFIACAFIABAEIADAFIAAADIAAAFIABAEIACAFIABADIACAFIAAAEIAAAFIAAADIAAAFIAAAEIAAAFIAAADIAAAFIAAAEIAAAEIgCAFIgBAEIgCAEIgBAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIgCAFIgCADIgCAFIAAAEIAAAFIAAADIAAAFIAAAEIgBAFIgDADIgBAFIAAAEIAAAFIAAADIAAAFIAAAEIgCAFIgDADIgBAFIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIgDAEIgBAEIgCAFIAAAEIgDAEIgBAEIgBAFIAAADIgDAFIgCAEIgBAEIgDAFIgBAEIgDAEIgDAEIgBAFIgDAEIgFAEIgEAEIgDAFIgBAEIgDAEIgDAEIgBAFIgDAEIgBAEIgCAFIgEADIgEAFIgFAEIgCAFIgCADIgDAFIgBAEIgBAFIgFADIgEAFIgBAEIgCAFIgEADIgEAFIgCAEIgBAFIgEADIgFAFIgEAEIgEAEIgEAFIgFAEIgBAEIgBAEIgJAJIgIAIIgJAJIgIAIIgFAFIgEAEIgEAEIgDAFIgBADIgDAFIgEAEIgFAFIgDADIgEAFIgFAEIgFAFIgDADIgBAFIgDAEIgEAFIgEADIgFAFIgEAEIgEAFIgEAEIgJAEIgFAEIgFAEIgEAFIgEAEIgEAEIgGAEIgJAFIgEAEIgHAEIgHAEIgEAFIgFAEIgEAEIgEAEIgEAFIgFAEIgHAEIgHAEIgEAEIgIAFIgJAEIgHAFIgKADIgRAGIgKADIgHADIgOAEIgKADIgIACIgIACIgOAEIgKAEIgIABIgHACIgKADIgHADIgOAEIgbAEIgNACIgmADIgNADIizAAg");
	this.shape_4.setTransform(94.9,120.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC6B").s().p("Aw7H1IgDgFIgCgEIgDgEIgEgEIgEgFIgDgEIgDgEIgBgEIgDgEIgCgFIgCgEIgBgEIgEgEIgBgFIgDgEIgBgEIgFgEIgDgFIgEgEIgBgEIgCgEIgBgFIgBgEIAAgEIAAgEIgBgFIgEgEIgBgEIgCgEIgCgFIgCgEIgBgEIgCgEIgBgFIgCgEIgCgEIgDgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIgCgFIgCgEIgBgEIgEgEIgBgFIgBgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIgBgEIgCgEIgCgFIgBgEIAAgEIAAgNIAAgIIAAgJIAAgNIAAgMIAAgJIAAgEIAAgEIABgFIACgEIACgEIABgEIAAgFIAAgEIACgEIACgEIACgFIAAgEIAAgEIAAgEIAAgFIAAgEIADgEIAAgEIADgFIACgEIACgEIABgEIAAgFIAAgEIACgEIACgEIABgFIAAgEIAEgEIABgEIABgCIAAAFIAAAqIAAAeIAAARIAAAEIABAEIAEAEIABAFIAAAIIAAAJIAAAIIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIABAEIABAFIADAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIACAFIACAEIABAEIABAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIABAEIADAEIACAFIAAAEIABAEIADAEIABAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIACAEIACAFIACAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIABAFIACAEIABAEIACAEIAAAFIAAAEIABAEIADAEIABAFIAAAEIACAEIADAEIADAFIABAEIABAEIADAEIACAFIABAEIACAEIAAAEIAAAFIAAAEIAAAEIABAEIABAFIgCgDgAIiG/IAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIACgEIADgEIACgEIAAgFIAAgEIAAgEIAAgEIACgFIABgEIACgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIACgEIADgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIACgEIABgEIACgFIACgEIAAgIIAAgNIAAgIIAAgJIAAgIIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIgCgEIgDgEIgCgEIAAgFIAAgEIAAgEIgCgEIgDgFIAAgCIAAgCIAAgEIgCgEIgBgFIgBgEIgBgEIgCgEIgBgFIgCgEIgCgEIgBgEIgBgFIAAAAIAAgBIABgEIABgFIACgEIAFgEIABgEIACgFIACgEIAAgEIAAgEIgCgFIgCgEIgBgEIgFgEIgHgFIgMgCIgLAAIgIABIgHADIgCABIgBgBIgBgEIgDgFIgDgEIgEgEIgFgEIgEgFIgHgEIgHgEIgEgEIgFgFIgGgEIgHgEIgHgDIgHgFIgFgEIgEgDIABgBIAFgEIAFgFIADgEIABgEIABgEIACgFIADgEIAEgEIAFgEIABgFIACgEIADgEIAOgNIAMgNIAIgIIAJgJIAFgEIADgEIAFgEIABgFIADgEIADgEIAEgEIACgFIACgEIAFgEIAGgEIAGgFIAFgEIAEgEIAEgEIAFgFIADgEIAFgEIAEgEIAFgFIACgEIABgEIAEgEIADgFIADgEIACgEIADgEIAEgFIADgEIABgEIADgEIABgFIAEgEIACgEIAEgEIAFgFIAEgEIADgEIACgEIACgFIADgEIABgEIADgEIABgFIADgEIADgEIAEgEIAFgFIAEgEIACgEIAEgEIAFgEIAIgFIAIgEIAEgEIAEgEIAFgFIAFgEIAIgEIAJgEIALgDIAGgDIAJgEIALAAIAAAEIAAAEIAAAEIABAFIACAEIABAEIACAEIAAAJIAAANIAAAMIAAAJIAAAIIAAAFIAAAEIAAAEIAAAEIgDAFIgCAEIgBAEIgDAEIgBAFIgBAEIAAAEIAAAEIgEAFIgEAEIgDAEIgBAEIgDAFIgBAEIgBAEIAAAEIgEAFIgBAEIgCAEIAAAEIAAAFIgBAEIgCAEIgCAEIAAAFIgCAEIgCAEIgBAEIgEAFIgBAEIgCAEIgDAEIgFAFIgBAEIgBAEIgDAEIgCAEIgCAFIAAAEIAAAEIAAAEIgBAFIgEAEIgEAEIgEAEIgCAFIgCAEIAAAEIAAAEIAAAFIAAAEIAAAEIACAEIACAFIACAEIAEAEIAGAEIANADIAIgBIAFgCIACgCIAGgFIADgEIABgEIAEgEIADgFIADgEIAGgEIAFgEIAEgFIAEgEIAEgEIAEgEIAFgFIAHgEIAGgEIAFgEIAEgFIAFgEIAFgEIAHgFIAGgEIAEgEIAGgEIAHgEIAFgEIAHgFIAHgEIAFgEIAEgFIAKgCIAFgCIACgDIAGgEIAEgEIAGgEIAJgFIAIgEIAIgEIAHgEIAFgFIAIgEIAOgEIALgDIAMgDIALgDIAGAAIADADIAEAEIADAFIABAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIACAEIABAEIABAFIACAEIgDAEIgBAEIgCAFIgEAEIgNANIgIAIIgJAJIgEAEIgFAEIgDAEIgFAFIgCAEIgDAEIgCAEIgEAFIgDAEIgCAEIgCAEIgEAFIgFAEIgEAEIgBAEIgCAFIgEAEIgEAEIgFAEIgDAFIgFAEIgEAEIgCAEIgBAFIgEADIgFAEIgEAEIgEAFIgDAEIgBAEIgDAEIgFAFIgDAEIgJAEIgGAEIgEAFIgDAEIgEAEIgGAEIgEAFIgDAEIgCAEIgCAEIgGAFIgJAEIgDAEIgFAEIgEAFIgDAEIgCAEIgBAEIAAAFIAAAEIABAEIACAEIADAFIAEAEIAGAEIAMADIAGAAIALgDIAJgEIAIgEIAJgFIALgDIAFgBIAEgDIAKgEIARgGIAYgHIALgCIARgEIALgCIAXgDIALgDIAigDIAMgDIBSgBIAFADIAHAEIADAEIAJAFIAGAEIAFAEIACAEIABAFIADAEIADAEIABAEIACAFIABAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAACIAAACIAAAFIAAAEIgDAEIgBAEIgCAFIAAAEIgCAEIgCAEIgBAFIAAAEIgDAEIgBAEIgCAFIgEAEIgEAEIgFAEIgEAFIgEAEIgFAEIgBAEIgBAFIgFAEIgIAIIgJAJIgIAIIgEAEIgFAFIgEAEIgEAEIgFAEIgJAFIgJAEIgIAEIgHAEIgKAFIgEAEIgJADIgNADIgIAEIgHAEIgKAEIgOAFIgQACIgJACIgHADIgIAEIgKADIgIABIgRAGIgRAGIgHACIgKADIgHADIgJAEIgQADIgMADIgKADIgIABIgIADIgJADIgIACIgKAEIgHACIgOAFIgQADIgMACIgbADIgiAGIgNACIgVAEIgMACIgbADIgOADIgbABIAAgBgAADFfIgKgDIgigDIgLgDIgYgDIgWgFIgMgDIgLgDIgLgDIgGgDIgLgDIgGgCIgLgDIgGgDIgGgEIgFgFIgEgEIgFgEIgFgEIgIgFIgJgEIgGgEIgEgEIgGgEIgHgFIgIgEIgIgEIgDgEIgDgFIgCgEIgDgEIgGgEIgEgFIgCgEIgGgEIgJgEIgEgFIgEgEIgEgEIgFgEIgCgFIgCgEIgDgEIgEgEIgEgFIgEgEIgEgEIgCgEIgDgFIgCgEIgFgEIgCgEIgCgFIgDgEIgFgEIgDgEIgEgFIgBgEIgCgEIgFgEIgEgFIgFgEIgDgEIgFgEIgEgFIgDgEIgDgEIgBgEIgEgFIgEgEIgCgEIgBgEIgFgFIgDgEIgCgEIgCgEIgEgFIgDgEIgDgEIgBgEIgDgFIgBgEIgDgEIgCgEIgDgFIAAgIIAAgMIAAgNIAAgEIAAgEIAAgNIAAgRIAAgRIAAgIIAAgFIACgEIABgEIACgEIABgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIADgEIABgFIACgEIAAgEIAAgJIAAgIIAAgJIAAgIIAAgJIAAgEIAAgEIAAgEIABgFIADgEIABgEIAAgEIAAgFIACgEIABgEIABgEIACgFIACgEIABgEIABgEIACgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIADgEIABgFIACgEIAAgEIACgEIABgFIACgEIAAgEIAAgEIAAgEIACgFIABgEIABgEIACgEIABgFIABgEIAEgEIABgEIACgFIACgEIAAgEIACgEIADgFIABgEIACgEIACgEIADgFIACgEIACgEIAFgEIADgFIAEgEIADgEIAAgEIACgFIAAgEIADgEIACgEIACgFIABgEIADgEIAFgEIACgFIACgEIADgEIAEgEIADgFIACgEIACgEIAEgEIAEgEIABAEIACAEIANANIAJAIIAIAJIANAMIAMANIAJAJIAIAIIAEAEIABAFIACAEIAFAEIAEAEIAEAFIAJAEIAFAEIAFAEIAEAFIAEAEIAHAEIAHAEIAFAFIAEAEIAHAEIAHAEIAFAFIADAEIAFAEIAGAEIAIAFIAIAEIAGAEIAGAEIAOAEIAFAFIAHAEIAGAEIAFAEIAIAFIAGAEIAEAEIAEAEIAFAFIAHAEIAHAEIAEAEIAEAFIAFAEIAFAEIAIAEIAEAFIAHAEIAHAEIAFAEIADAFIAFAEIAFAEIAJAEIAFAFIAHAEIAGAEIAFAEIAEAFIAHAEIAHAEIAEAEIAJAFIAFAEIAGAEIAJAEIAEAFIAEAEIAGAEIAIAEIAFAFIAGAEIAHAEIAFAEIAEAFIAFAEIAEAEIAEAEIAEAFIAIAEIAHAEIAEAEIAIAFIAGAEIAFAEIAJAEIAEAFIAEAEIAGAEIAFADIAEABIAEAFIAHAEIAHAEIAEAEIAKAFIAHAEIAIAEIADAEIAJAFIAGAEIAGAEIAMADIABABIACACIAAABIgCAEIgBAEIAAAEIAAAEIABAEIACAFIADAEIAEAEIAGAEIAMADIAJgBIAEgCIADgCIABgBIADADIAFAFIAKAEIAHAEIAGAEIAFAFIAEAEIAFAEIAFAEIAIAFIAFAEIAEAEIAFAEIADAFIAFAEIABAEIABAEIAFAFIAEAEIADADIgDADIgCAEIgCAEIgDAEIgEAFIgDAEIgCAEIgDAEIgDAFIgFAEIgEAEIgCACIgDACIgCAFIgBAEIgEAEIgGAEIgHAFIgFAEIgEAEIgFAEIgDAFIgFAEIgEAEIgFAEIgFAFIgIAEIgFAEIgEAEIgEAFIgEAEIgEAEIgIAEIgHAFIgEAEIgIAEIgJAEIgHAFIgKAEIgIAEIgGAEIgEAEIgGAFIgNAEIgGAEIgFAEIgJAFIgIAEIgIAEIgIAEIgJAFIgJAEIgIAEIgIAEIgEAFIgKADIgHACIgOAFIiSAAg");
	this.shape_5.setTransform(123.8,118.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ak/PJIgNgDIiogDIgNgDIg9gDIgNgDIgggCIgNgDIgEgDIgNgDIgKgDIgNgDIgIgEIgHgEIgKgEIgEgFIgIgEIgHgEIgFgEIgHgFIgGgEIgEgEIgFgEIgEgFIgHgEIgHgEIgEgEIgEgFIgIgEIgHgEIgEgEIgIgFIgGgEIgEgEIgFgEIgIgFIgGgEIgEgEIgEgEIgEgFIgFgEIgFgEIgJgEIgEgFIgHgEIgHgEIgEgEIgFgFIgBgEIgCgEIgEgEIgEgFIgEgEIgFgEIgEgEIgEgFIgEgEIgFgEIgEgEIgEgFIgHgEIgHgEIgEgEIgFgFIgEgEIgDgEIgBgEIgDgFIgBgEIgCgEIgDgEIgBgFIgDgEIgEgEIgEgEIgFgFIgBgEIgCgEIgCgEIgCgFIgDgEIgEgEIgEgEIgEgEIgCgFIgBgEIgEgEIgFgEIgBgFIgDgBIgIgFIgIgEIgEgEIgIgEIgGgEIgGgFIgIgEIgEgEIgFgEIgEgFIgIgIIgJgJIgIgIIgCgEIgBgFIgEgEIgFgEIgEgEIgEgFIgDgEIgBgEIgDgEIgEgFIgFgEIgEgEIgBgEIgCgFIgDgEIgBgEIgDgEIgEgFIgDgEIgBgEIgDgEIgDgFIgBgEIgDgEIgFgEIgEgFIgDgEIgBgEIgBgEIgCgFIgBgEIgCgEIgBgEIAAgFIAAgEIgDgEIgBgEIgCgFIgDgEIgBgEIgBgEIgCgFIgBgEIgCgEIgDgEIgCgFIgCgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIgBgEIgEgFIgDgEIgCgEIgBgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgEIAAgFIgDgEIgBgEIgCgEIAAgJIAAgNIAAgVIAAgRIAAgVIAAgVIAAgRIACgFIABgEIADgEIAAgEIABgFIACgEIADgEIAAgEIAAgFIAAgEIAAgEIAAgEIABgFIABgEIADgEIACgEIACgFIACgEIAAgEIAAgEIABgFIACgEIADgEIAAgEIABgFIABgDIADgEIAAgEIACgFIABgEIADgEIAAgEIAAgFIABgEIACgEIABgEIACgFIABgEIABgEIACgEIABgFIAAgEIAAgEIACgEIACgFIAFgEIADgEIABgEIADgFIABgEIAAgEIACgEIACgFIACgEIAAgEIABgEIADgFIACgEIAAgEIABgEIADgFIADgEIABgEIADgEIAAghIAAgNIABgEIACgEIADgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIABgEIABgFIACgEIABgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIACgEIABgFIABgEIACgEIAAgEIAAgFIABgEIACgEIADgEIAAgFIAAgEIABgEIABgEIACgFIABgEIAAgEIAAgEIACgFIACgEIACgEIAAgEIAAgFIAAgEIAAgEIAAgEIABgFIADgEIACgEIAAgEIAAgFIABgEIABgEIADgEIAAgFIACgEIABgEIADgEIAAgFIAAgEIABgEIACgEIABgFIADgEIABgEIADgEIAAgFIAAgEIACgEIABgEIABgFIACgEIABgEIACgEIABgFIABgEIACgEIABgEIACgFIABgEIAAgEIAAgEIACgEIACgFIACgEIADgEIACgEIAFgFIABgEIADgEIABgEIADgFIACgEIACgEIACgEIADgFIABgEIADgEIABgEIADgFIACgEIAEgEIADgEIABgFIACgEIABgEIABgEIADgFIACgEIAEgEIAEgEIAEgFIAFgEIAEgEIAEgEIAEgFIACgEIADgEIACgEIACgFIABgEIAFgEIACgEIADgFIACgEIAEgEIAEgEIAEgFIAGgEIAEgEIADgEIAEgFIAFgEIAEgEIAEgEIAEgFIACgEIADgEIACgEIAFgFIAFgEIAHgEIAGgEIAEgFIAGgEIAEgEIADgEIAEgFIAGgEIAHgEIAGgEIAEgFIAGgEIAIgEIAEgEIAFgFIAFgEIAFgEIACgEIAFgFIAEgEIAEgEIAHgFIAGgEIAGgEIAEgEIAEgEIAGgFIAFgEIAGgEIAGgEIAEgFIAGgEIAIgEIAKgEIAHgEIAJgFIAMgCIAAgBIBhAAIALADIAcADIAMADIAFADIAMACIAFADIAMADIAIAFIAHAEIAGAEIAHAEIAHAEIAEAFIAEAEIAFAEIADAEIACAFIACAEIAEAEIAEAEIAFAFIAEAEIADAEIABAEIADAFIABAEIADAEIADAEIAEAFIACAEIACAEIACAEIAAAFIAEAEIAEAEIADAEIADAFIABAEIADAEIACAEIADAFIABAEIADAEIABAEIAAAFIAAAEIACAEIABAEIABAFIACAEIADAEIADAEIACAFIACAEIABAEIAAAEIADAFIABAEIACAEIAAAEIAAAFIAEAEIADAEIABAEIACAFIABAEIACAEIABAEIADAFIABAEIADAEIADAEIAEAFIACAEIACAEIACAEIADAFIABAEIADAEIABAEIADAFIACAEIACAEIACAEIADAFIABAEIADAEIABAEIADAFIACAEIACAEIADAEIAFAFIAAAAIABABIAEAEIACAEIACAFIABACIABABIAEAEIADAEIAGAEIAEAEIABAFIADAEIADAEIAEAEIAEAFIAFAEIAEAEIAEAEIAEAFIAFAEIAEAEIAEAEIAJAJIAIAIIAEAFIADAEIAGAEIAEAEIAEAFIAFAEIAFAEIAHAFIAGAEIAEAEIAGAEIAHAFIAGAEIAHAEIAHAEIAEAEIAEAFIAIAEIAIAEIAIAEIAJAFIAIAEIAHAEIAFAEIAIAFIAGAEIAEAEIAEAEIAFAFIAEAEIAGAEIAHAFIAEADIAHAFIAHAEIAFAEIAEAFIAEAEIAGAEIAHAFIAGADIAHAFIAHAEIAEAEIAEAFIAHAEIAHAEIAFAEIAEAFIAHAEIAHAEIAEAEIAJAFIAIAEIAHAEIAFAEIAEAFIAHAEIAHAEIAEAEIAFAFIAHAEIAHAEIAEAEIAEAFIAEAEIAGAEIAHAFIAGAEIAEAEIAEAEIAFAEIAIAFIAGAEIAEAEIAEAEIAEACIAFADIAFAEIAFAEIAEAEIAIAFIAGAEIAGAEIAHAEIAGAEIAHAFIAIAEIAJAEIAIAFIAGAEIAEAEIADADIABABIAMADIAIAFIAHAEIABAAIACgCIAEgEIACgEIABgFIADgEIABgEIADgEIAEgFIAFgEIAEgEIAEgEIAEgFIAFgEIAEgEIAEgEIADgFIABgEIADgEIAEgEIAFgEIAEgFIAEgEIAEgEIAFgEIAEgFIAEgEIACgEIABgEIAEgFIAFgEIAEgEIAIgJIANgMIANgNIAMgNIACgEIABgEIAFgFIAEgEIAEgEIADgEIABgFIADgEIAEgEIADgEIACgFIACgEIAFgEIADgEIABgFIADgEIAEgEIADgEIABgFIADgEIACgEIABgEIAEgFIAEgEIAFgEIADgEIABgFIADgEIAEgEIAEgEIAFgFIAEgEIAEgEIAEgEIAFgFIAEgEIAHgEIAHgEIAEgFIAJgEIAFgEIAFgEIAEgFIAKgEIAEgDIAEgBIAKgDIAKgEIAEgDIAFgBIAIgBIAAgBIAiAAIALADIAJAEIAHAFIAGAEIAEAEIADAEIADAEIABAFIABAEIAAAEIAAAEIAAAFIACAEIABAEIACAEIABAFIAAAEIAAAEIAAAJIAAAMIAAARIAAARIAAARIAAARIAAAJIgBAEIgCAEIgDAFIAAAEIgBAEIgBAEIgDAFIAAAEIgCAEIgBAEIgDAFIgDAEIgEAEIgBAEIgDAFIAAAEIAAAEIgCAEIgBAFIABAAIAFgCIAEgEIAIgEIAGgFIAGgEIAIgEIAEgEIAFgFIAFgEIAJgEIAIgEIAGgFIAGgEIAIgEIAEgEIAIgEIAIgFIAIgEIAKgEIAFgDIAEgBIAKgEIAHgCIAIgCIAKgCIANgDIAKgDIANgDIARAAIALADIAHAEIAEAEIAFAFIACAEIACAEIADAEIAEAFIADAEIABAEIADAEIABAFIADAEIACAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIACAEIACAFIABAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAIIAAAFIgBAEIgDAEIgBAEIgFAFIgCAEIgDAEIgCAEIgEAFIgEAEIgGAEIgGAEIgCAFIgDAEIgEAEIgGAEIgGAFIgDAEIgCAEIgGAEIgEAFIgCAEIgDAEIgBAEIgEAFIgFAEIgEAEIgBAEIgDAFIgBAEIgDAEIgCAEIgEAFIgGAEIgCAEIgFAEIgEAFIgEADIgEAEIgFAEIgEAFIAEABIAQgDIANgCIAVgEIANgCIAggDIANgDIBmAAIALADIAHAEIAFAEIAIAFIAGAEIAFAEIAHAEIAGAFIAEAEIAFAEIAEAEIAEAEIADAFIABAEIADAEIACAEIACAFIACAEIADAEIABAEIACAFIAAAEIAAAEIAAAEIAAAJIAAAIIAAANIAAAFIAAAIIAAANIAAAMIgCAFIgDAEIgBAEIgDAEIgBAFIgCAEIAAAEIAAAEIgBAFIgDAEIgBAEIgFAEIgEAFIgEAEIgCAEIgCAEIgDAFIgFAEIgEAEIgEAEIgDAFIgDAEIgBAEIgEAEIgFAFIgEAEIgIAIIgJAJIgNANIgMAMIgHAEIgJAFIgIAEIgFAEIgHAEIgIAFIgJAEIgIAEIgJAFIgOAEIgIAEIgFADIgEABIgLADIgGADIgLADIgGADIgIABIgRADIgJAEIgGADIgLADIgGADIgLADIgFACIgMADIgFADIgJACIgLACIgJAFIgFACIgJACIgRADIgOAEIgGADIgLADIgGACIgIACIgMADIgOAEIgFADIgJABIgLADIgMADIgiADIgLACIgRAEIgLACIgdADIgLADIgcADIgMACIg1AAIgDAFIgCAEIgCAEIgCAEIgDAFIgBAEIgDAEIgEAEIgEAFIgDAEIgDAEIgBAEIgDAFIgCAEIgDAEIgBAEIgDAFIgDAEIgEAEIgBAEIgDAFIgDAEIgEAEIgCAEIgCAFIgCAEIgDAEIgBAEIgEAFIgDAEIgDAEIgBAEIgFAFIgEAEIgEAEIgCAEIgCAFIgDAEIgFAEIgEAEIgEAFIgEAEIgFAEIgEAEIgEAFIgEAEIgFAEIgIAJIgEAEIgFAEIgBAEIgDAFIgDAEIgEAEIgBAEIgDAFIgDAEIgEAEIgEAEIgFAFIgIAIIgJAJIgIAIIgNANIgRARIgVAVIgJAJIgHAEIgHAEIgGAEIgGAFIgGAEIgEAEIgFAEIgEAEIgEAFIgEAEIgGAEIgHAFIgGAEIgGAEIgIAEIgJAEIgIAFIgJAEIgIAEIgEADIgFABIgLADIgFADIgMADIgFADIgMADIgFACIgMADIgFADIgJACIgLACIgMADIgLADIgOAEIgFADIgLADIgGADIgIABIgdADIgLADIgoADIgLADIjGAAgAqeuMIgJAEIgFADIgMADIgFAEIgDAEIgDAEIgEAFIgFAEIgEAEIgEAEIgGAFIgIAEIgFAEIgHAEIgHAFIgEAEIgEAEIgEAEIgGAFIgJAEIgEAEIgEAEIgGAFIgIAEIgFAEIgHAEIgEAFIgBAEIgFAEIgHAEIgHAFIgEAEIgEAEIgHAEIgFAFIgBAEIgEAEIgEAEIgFAFIgEAEIgEAEIgDAEIgDAFIgBAEIgEAEIgHAFIgGAEIgDAEIgDAEIgBAEIgDAFIgCAEIgEAEIgDAEIgCAFIgCAEIgEAEIgEAEIgFAFIgEAEIgEAEIgEAEIgDAFIAAAEIgCAEIgCAEIgCAFIgDAEIgDAEIgCAEIgDAFIgDAEIgBAEIgDAEIgCAFIgDAEIgBAEIgDAEIgBAFIgDAEIgBAEIgDAEIgDAFIgCAEIgEAEIgBAEIAAAFIAAAEIgCAEIgCAEIgCAFIAAAEIAAAEIgBAEIgDAFIgCAEIAAAEIgBAEIgDAFIgBAEIAAAEIgCAEIgBAFIgDAEIgBAEIgDAEIgCAFIAAAEIAAAEIAAAEIgBAFIgBAEIgDAEIAAAEIgCAFIgBAEIgDAEIAAAEIgBAFIgCAEIgBAEIgCAEIAAAFIAAAEIAAAEIAAAEIgBAFIgBAEIgCAEIgBAEIAAAFIAAAEIgCAEIgCAEIgCAEIAAAFIAAAEIgBAEIgCAEIgDAFIAAAEIAAAEIgBAEIgBAFIgCAEIgBAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIgCAEIgBAFIgBAEIgCAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIgBAEIgCAFIgCAEIgBAYIABAAIABAEIADAFIABAEIAAAEIAAAEIgBAEIgDAFIgBAEIgBAAIAAABIAAAiIAAAiIABAiIAAAmIAAAqIAAArIABAEIADAEIABAEIAAAFIAAAEIAAAEIAAAJIAAAIIAAAJIAAAIIAAAEIAAAJIAAAIIAAAJIACAEIABAEIABAFIACAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIADAFIABAEIABAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAEIACAFIADAEIABAEIAAAEIAAAFIACAEIABAEIABAEIACAFIAAAEIAAAEIAAAEIAAAFIAAAEIABAEIACAEIABAFIABAEIAAAEIAAAEIAAAFIAAAEIAAAEIADAEIACAFIABAEIAAAEIAAAEIACAFIACAEIACAEIAAAEIAEAFIADAEIABAEIACAEIABAFIAAAEIAAAEIACAEIABAFIABAEIACAEIAAAEIABAFIADAEIABAEIAAAEIACAFIADAEIABAEIADAEIABAFIACAEIAAAEIADAEIABAFIABAEIACAEIABAEIACAFIAEAEIADAEIADAEIABAFIABAEIAAAEIADAEIACAFIABAEIACAEIAEAEIAAABIAFACIAIAEIAEAFIABAEIADAEIABAEIAAAFIAAAEIAAAEIAAACIADAEIAFAEIAEAEIABAFIADAEIABAEIADAEIACAFIAEAEIAEAEIAEAEIACAFIADAEIABAEIADAEIABAFIAFAEIAEAEIAEAEIAJAFIAFAEIAFAEIAEAEIAEAFIAEAEIAEAEIAFAEIAEAFIAEAEIADAEIADAEIABAFIAFAEIAFAEIAHAEIAGAFIAEAEIAEAEIAFAEIAIAFIAGAEIAEAEIAEAEIAJAFIAGAEIAEAEIAEAEIAEAFIAHAEIAJAEIAHAEIAGAFIAEAEIAGAEIAGAEIAGAFIADAEIAGAEIAEAEIADAEIAIAFIAHAEIADADIACABIALADIAIAEIAGADIADACIALACIAGADIALADIAoADIALADIA5ADIALACICwADIALADIC0AAIANgDIAmgDIANgCIAbgDIAOgFIAHgCIAKgDIAGgDIAIgBIAKgDIAOgFIAIgCIAIgCIAKgDIAOgEIAHgCIAKgEIARgFIAKgEIAHgFIAJgEIAIgEIAEgEIAHgFIAHgEIAFgEIAEgEIAEgFIAEgEIAFgEIAEgEIAHgFIAHgEIAEgEIAJgEIAGgFIAEgEIAEgEIAEgEIAFgFIAFgEIAJgEIAEgEIAEgFIAEgEIAFgEIAEgEIAEgFIADgEIABgEIADgEIAFgFIAFgEIAEgEIADgEIAFgFIAEgEIADgEIABgEIADgFIAEgEIAEgEIAFgEIAIgJIAJgIIAIgJIAJgIIABgFIABgEIAFgEIAEgEIAEgFIAEgEIAFgEIAEgEIABgFIACgEIAEgEIAEgEIACgFIABgEIAEgEIAFgEIABgFIABgEIADgEIACgEIACgFIAFgEIAEgEIAEgEIACgFIABgEIADgEIABgEIADgFIADgEIABgEIADgEIAEgFIAFgEIADgEIABgEIADgFIADgEIABgEIADgEIABgFIACgEIADgEIAAgEIABgEIABgFIADgEIAAgEIACgEIABgFIADgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIABgEIADgEIACgFIAAgEIAAgEIAAgEIAAgFIAAgEIABgEIADgEIABgFIAAgEIAAgEIAAgEIAAgFIAAgEIACgEIACgEIACgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIABgFIACgEIABgEIACgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIgCgEIgBgEIgCgFIgBgEIAAgEIAAgEIgDgFIgBgEIgCgEIgEAEIgDAEIgDAFIgBAEIgEAEIgFAEIgEAFIgIAIIgJAJIgIAIIgFAEIgFAFIgJAEIgEAEIgEAEIgFAFIgIAIIgJAJIgIAIIgHAEIgHAFIgEAEIgFAEIgHAEIgHAFIgNAIIgZANIgYANIgEAEIgFAEIgHAEIgOAFIgIAEIgJAEIgIAEIgHAFIgGAEIgDADIgEABIgKADIgGAEIgDADIgEABIgLADIgGADIgLADIgGADIgIABIieAAIgNgDIgggDIgNgCIgVgEIgNgCIgEgDIgNgDIgKgCIgNgDIgWgGIgFgDIgMgDIgFgDIgMgCIgJgFIgHgEIgEgEIgJgEIgFgFIgFgEIgEgEIgIgEIgJgFIgHgEIgEgEIgEgEIgHgFIgHgEIgFgEIgIgEIgGgFIgEgEIgDgEIgBgEIgDgFIgEgEIgFgEIgIgEIgGgFIgEgEIgDgEIgBgEIgDgFIgEgEIgFgEIgEgEIgEgFIgEgEIgFgEIgEgEIgBgFIgCgEIgEgEIgEgEIgFgFIgEgEIgDgEIgBgEIgDgFIgEgEIgDgEIgBgEIgDgFIgEgEIgFgEIgEgEIgEgFIgDgEIgBgEIgDgEIgFgFIgEgEIgEgEIgEgEIgFgFIgCgEIgCgEIgDgEIgEgFIgDgEIgBgEIgDgEIgBgFIgCgEIgDgEIgBgEIgDgEIgDgFIgBgEIgDgEIgBgEIgCgFIgDgEIgBgEIgBgDIAAgFIAAgMIAAgaIAAgRIAAgIIAAgWIAAgVIAAgVIAAgEIABgFIADgEIABgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIACgEIABgEIADgEIAAgFIAAgEIAAgEIAAgJIAAgIIAAgNIAAgIIAAgFIAAgEIAAgEIAAgEIABgFIADgEIACgEIAAgEIABgFIADgEIABgEIAAgEIACgFIACgEIACgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIABgEIACgEIADgEIAAgFIAAgEIABgEIABgEIACgFIABgEIAAgEIAAgEIAAgFIACgEIABgEIADgEIABgFIADgEIADgEIABgEIACgFIABgEIACgEIABgEIABgFIACgEIABgEIACgEIADgFIAEgEIABgEIAAgEIACgFIACgEIAFgEIAEgEIADgFIABgEIACgEIABgEIADgFIABgEIACgEIAEgEIAEgFIAEgEIADgEIACgEIADgFIABgEIABgEIADgEIACgFIACgEIAFgEIAEgEIAEgEIAEgFIAFgEIADgDIAAgDIgCgEIgEgEIgDgEIgBgFIgDgEIgDgEIgBgEIgDgFIgCgEIgBgEIgDgEIgBgFIgDgEIgDgEIgBgEIgDgFIgFgEIgCgEIgCgEIgDgFIgBgEIgBgEIAAgEIgDgFIgFgEIgCgEIgCgEIAAgFIAAgEIgBgEIgCgEIgBgFIgBgEIgCgEIgBgEIgCgFIgDgEIgCgEIgCgEIAAgFIgBgEIgDgEIgBgEIAAgFIgCgEIgDgEIgBgEIAAgFIgCgEIgEgEIgEgEIgEgFIgFgEIgCgEIgCgEIAAgFIgBgEIgDgEIgBgEIgDgFIgFgEIgCgEIgCgEIgDgFIgEgEIgEgEIgEgEIgFgFIgBgEIgBgEIgFgEIgIgFIgJgEIgHgEIgHgDIgBgBIgJgCIgNgCIgVgEIgMgCIhMgCIgCACgAx8ANIgBAEIgDAEIAAAEIgBAFIgCAEIgCAEIAAAEIAAAFIgCAEIgBAEIgCAEIgDAFIgBAEIgDAEIAAAEIAAAFIAAAEIAAAEIAAAEIgBAFIgCAEIgCAEIAAAEIAAAFIgCAEIgBAEIgCAEIgBAFIAAAEIAAAEIAAAJIAAAMIAAANIAAAJIAAAIIAAANIAAAEIABAEIACAFIABAEIACAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIABAEIABAFIADAEIACAEIACAEIACAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIADAEIABAEIADAEIABAFIACAEIABAEIACAEIABAFIADAEIABAEIADAEIACAFIAAAEIAAAEIABAEIABAFIACAEIABAEIADAEIAEAFIAFAEIABAEIADAEIABAFIADAEIABAEIADAEIACAFIADAEIABAEIADAEIADAEIAEAFIAEAEIADAEIABAEIADAFIADADIgBgFIgCgEIAAgEIAAgEIAAgFIAAgEIgBgEIgCgEIgBgFIgDgEIgBgEIgCgEIgDgFIgCgEIgCgEIAAgEIgBgFIgDgEIgBgEIAAgEIAAgFIgCgEIgBgEIgCgEIgBgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIgDgEIgBgFIgCgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIgBgFIgDgEIgBgEIAAgEIgCgFIgDgEIgBgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIgCgEIgBgEIgBgEIgCgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIgDgEIgBgFIgBgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgIIAAgJIAAgIIgCgFIgDgEIgBgEIAAgEIAAgRIAAgeIAAgqIAAgFIgCACgAIRAXIAMACIAHAFIAEAEIACAEIACAEIACAFIAAAEIAAAEIgCAEIgCAFIgCAEIgEAEIgCAEIgBAFIgBAEIgBABIABAAIABAFIABAEIACAEIABAEIACAFIABAEIACAEIABAEIABAFIACAEIAAAEIAAACIAAACIADAFIABAEIABAEIAAAEIAAAFIACAEIADAEIABAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAIIAAAJIAAAIIAAANIAAAIIgBAEIgCAFIgBAEIgCAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIgBAEIgDAEIgBAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIgCAEIgBAEIgDAFIAAAEIAAAEIAAAEIAAAFIgBAEIgDAEIgCAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAABIAbgBIANgDIAbgDIANgCIAVgEIANgCIAigGIAbgDIAMgCIAQgDIAOgFIAHgCIAKgEIAHgCIAKgDIAHgDIAJgBIAKgDIAMgDIAQgDIAJgEIAHgDIAJgDIAIgCIARgGIARgGIAIgBIAKgDIAIgEIAHgDIAJgCIAQgCIAOgFIAKgEIAHgEIAIgEIANgDIAIgDIAFgEIAKgFIAHgEIAIgEIAJgEIAIgFIAGgEIAEgEIAEgEIAFgFIAEgEIAIgIIAJgJIAIgIIAFgEIABgFIABgEIAFgEIAEgEIAEgFIAEgEIAFgEIAEgEIABgFIACgEIADgEIAAgEIABgFIABgEIADgEIAAgEIACgFIABgEIADgEIAAgEIAAgFIAAgCIAAgCIAAgEIAAgEIAAgFIAAgEIAAgEIgCgEIgBgFIgBgEIgDgEIgDgEIgBgFIgCgEIgGgEIgFgEIgJgFIgEgEIgHgEIgEgDIhSABIgMADIgiADIgLADIgXADIgLACIgRAEIgLACIgYAHIgRAGIgKAEIgFADIgEABIgLADIgJAFIgIAEIgJAEIgLADIgGAAIgMgDIgGgEIgEgEIgDgFIgCgEIgBgEIAAgEIAAgFIABgEIACgEIADgEIAEgFIAEgEIAEgEIAJgEIAGgFIACgEIACgEIADgEIAEgFIAGgEIAEgEIADgEIAEgFIAGgEIAIgEIAEgEIAFgFIACgDIACgEIADgEIAEgFIAEgEIAEgEIAFgEIABgFIACgEIAEgEIAEgEIAEgFIAFgEIAEgEIAEgEIABgFIACgEIAEgEIAEgEIAFgFIACgEIACgEIADgEIAEgFIABgEIADgEIADgEIAEgFIAEgEIAFgEIAEgEIAIgJIAJgIIANgNIAEgEIABgFIACgEIADgEIgCgEIgBgFIgCgEIgBgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIgBgEIgDgFIgFgEIgCgDIgGAAIgLADIgMADIgLADIgOAEIgJAEIgEAFIgHAEIgIAEIgJAEIgIAFIgGAEIgEAEIgGAEIgDADIgEACIgKACIgEAFIgFAEIgHAEIgHAFIgFAEIgHAEIgGAEIgEAEIgGAEIgHAFIgGAEIgEAEIgEAFIgFAEIgHAEIgHAEIgEAFIgEAEIgEAEIgFAEIgEAFIgEAEIgGAEIgDAEIgEAFIgDAEIgBAEIgDAEIgGAFIgDACIgEACIgIABIgNgDIgGgEIgEgEIgDgEIgBgFIgCgEIAAgEIAAgEIAAgFIAAgEIAAgEIACgEIABgFIAFgEIAEgEIAEgEIABgFIAAgEIAAgEIAAgEIACgFIABgEIADgEIACgEIABgEIAEgFIAEgEIACgEIABgEIADgFIABgEIADgEIACgEIAAgFIABgEIADgEIABgEIAAgFIAAgEIACgEIABgEIADgFIAAgEIABgEIACgEIADgFIABgEIADgEIAEgEIADgFIAAgEIAAgEIABgEIACgFIADgEIABgEIACgEIACgFIAAgEIAAgEIAAgEIAAgFIAAgIIAAgJIAAgMIAAgNIAAgJIgBgEIgBgEIgCgEIgBgFIAAgEIAAgEIAAgEIgMAAIgIAEIgGADIgLADIgJAEIgIAEIgGAEIgEAFIgEAEIgEAEIgIAEIgIAFIgGAEIgDAEIgCAEIgFAEIgEAFIgEAEIgDAEIgDAEIgBAFIgDAEIgBAEIgDAEIgCAFIgDAEIgCAEIgFAEIgEAFIgEAEIgDAEIgDAEIgBAFIgDAEIgBAEIgDAEIgFAFIgCAEIgCAEIgDAEIgEAFIgDAEIgBAEIgDAEIgEAFIgEAEIgFAEIgEAEIgEAFIgEAEIgFAEIgEAEIgGAFIgHAEIgEAEIgDAEIgBAFIgEAEIgDAEIgDAEIgBAFIgFAEIgEAEIgEAEIgJAJIgIAIIgNANIgNANIgDAEIgCAEIgCAFIgEAEIgEAEIgDAEIgCAFIgBAEIgBAEIgDAEIgGAFIgEAEIgBABIAEADIAFAEIAHAFIAGAEIAHAEIAHAEIAFAFIAEAEIAHAEIAHADIAEAFIAEAEIAFAEIADAEIACAFIACAEIABABIACgBIAHgDIAIgBIALAAgAk7oMIgEAEIgDAEIgBAEIgDAFIgEAEIgDAEIgCAEIgDAFIgEAEIgDAEIgBAEIgDAFIgBAEIgDAEIAAAEIgCAFIgBAEIgDAEIgDAEIgEAFIgEAEIgDAEIgBAEIgDAFIgCAEIgCAEIgCAEIgDAFIgBAEIAAAEIgCAEIgCAFIgCAEIgDAEIgBAEIgBAFIgCAEIgBAEIgCAEIgBAFIAAAEIAAAEIAAAEIgCAEIgBAFIgDAEIAAAEIgBAEIgCAFIgCAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIgCAFIgBAEIgCAEIgBAEIgCAFIgBAEIgBAEIgCAEIAAAFIAAAEIgBAEIgDAEIgBAFIAAAEIAAAEIAAAEIAAAJIAAAIIAAAJIAAAIIAAAJIAAAEIgCAEIgBAFIgDAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIgCAFIgBAEIgBAEIgCAEIAAAFIAAAIIAAARIAAARIAAANIAAAEIAAAEIAAANIAAANIAAAIIADAFIABAEIADAEIACADIADAFIABAEIADAEIADAEIAEAFIABAEIADAEIADAEIAEAFIACAEIACAEIADAEIAFAFIABAEIADAEIADAEIAEAFIAEAEIAEAEIAFAEIAEAFIAEAEIADAEIABAEIADAFIAEAEIAFAEIADAEIACAFIACAEIAEAEIADAEIADAFIABAEIAEAEIAFAEIAEAFIAEAEIADAEIABAEIADAFIAEAEIAFAEIAEAEIAEAFIAJAEIAFAEIADAEIAEAFIAGAEIADAEIABAEIADAFIAEAEIAIAEIAIAEIAHAFIAGAEIAEAEIAGAEIAIAEIAJAFIAFAEIAFAEIAEAEIAEAFIAHAEIAGADIALADIAGACIALADIAGADIALADIALADIAMADIAWAFIAXADIALADIAiADIALADICSAAIAOgFIAHgCIAKgDIAEgFIAHgEIAJgEIAIgEIAKgFIAHgEIAJgEIAIgEIAJgFIAFgEIAGgEIANgEIAFgFIAFgEIAFgEIAJgEIAKgEIAHgFIAIgEIAJgEIAEgEIAHgFIAHgEIAEgEIAFgEIAEgFIAEgEIAEgEIAJgEIAFgFIAFgEIAEgEIAEgEIAEgFIAFgEIAEgEIAEgEIAHgFIAHgEIADgEIACgEIACgFIADgCIACgCIAEgEIAEgEIAEgFIADgEIACgEIADgEIAEgFIADgEIABgEIADgEIADgDIgDgDIgEgEIgFgFIgBgEIgBgEIgFgEIgEgFIgEgEIgEgEIgFgEIgIgFIgGgEIgEgEIgEgEIgFgFIgHgEIgHgEIgKgEIgEgFIgDgDIgBABIgDACIgEACIgJABIgNgDIgFgEIgEgEIgDgDIgCgFIgBgEIAAgEIAAgEIABgFIACgEIAAgBIgCgCIgBgBIgNgDIgFgEIgGgEIgJgFIgEgEIgHgEIgHgEIgKgFIgEgEIgHgEIgHgEIgFgFIgDgBIgFgDIgGgEIgEgEIgEgFIgJgEIgFgEIgGgEIgJgFIgEgEIgHgEIgHgEIgEgFIgFgEIgEgEIgEgEIgEgFIgFgEIgHgEIgHgEIgEgFIgIgEIgGgEIgEgEIgFgFIgIgEIgGgEIgFgEIgJgFIgEgEIgHgEIgHgEIgFgFIgEgEIgHgEIgHgEIgEgFIgJgEIgFgEIgFgEIgEgFIgEgEIgHgEIgHgEIgEgFIgIgEIgGgEIgEgEIgEgFIgEgEIgIgEIgHgEIgEgFIgEgEIgEgEIgGgEIgJgFIgEgEIgHgEIgHgEIgEgFIgOgEIgGgEIgGgEIgIgEIgJgFIgFgEIgFgEIgEgEIgEgFIgHgEIgHgEIgEgEIgFgFIgHgEIgHgEIgEgEIgEgFIgFgEIgFgEIgJgEIgEgFIgEgEIgFgEIgCgEIgCgFIgDgEIgIgIIgJgJIgMgNIgNgMIgJgJIgIgIIgNgNIgDgEIgBgEIgDAEg");
	this.shape_6.setTransform(123.8,120.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#46B15B").s().p("AAZBzIgKgDIgEgCIgFgCIgIgFIgIgEIgFgEIgHgEIgHgEIgBgFIgDgEIgDgEIgEgEIgCgFIgCgEIgCgEIAAgEIgBgFIgDgEIgDgEIgBgEIgCgFIgBgCIgDAAIgDgBIgDgBIgBgCIgCgBIgBgCIgBgBIAAgCIgBgBIAAgBIAAgCIAAgCIAAgBIAAgBIgBgBIgDgEIgBgBIgDgCIgBgBIgCgCIgBAAIgBgBIgCgCIgBgCIgCgBIgBgBIgBgBIgCgCIgBgBIgBgCIgBgCIgBgBIgBgBIgCgCIgBgBIAAgCIgBgBIgBgCIAAgBIgBgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIgDABIAAgBIAAgCIgBgBIAAgBIgBgBIgBgCIAAgDIAAgDIAAgDIAAgEIAAgDIAAgDIABgCIABgBIABgCIAAgBIABgBIABgCIACgBIABgCIACgBIABgCIABgBIABgBIABgCIABgCIACgBIABgBIABgCIAAgBIABgBIABgCIABgCIAAgBIABgBIACgBIACgCIAIgBIADgBIACAAIABgBIACgBIAtAAIACAAIADABIACABIADACIAEABIACACIADABIADABIABACIABACIADABIADABIABAAIABABIACABIABACIADABIACACIABACIADABIADABIABABIACABIACACIABABIABACIABABIABABIABACIABABIABACIACACIADABIABABIABACIABABIACACIABABIABACIABABIACABIABACIACACIABABIACACIABABIABABIABABIABACIABACIACABIABABIABACIACABIABACIACACIAAABIAAABIABABIABACIACABIABACIACACIABABIABABIACACIABABIACACIABABIABACIAAABIABABIACACIABACIABABIgBABIACACIABABIABABIABABIABACIABACIAAAAIABABIABACIABABIABACIAAACIABABIAAABIABABIAAACIABACIAAABIAAACIAAABIAAABIAAACIABACIABABIAAABIAAABIADADIACAEIAAAEIAAAFIAAAEIAAAEIAAAEIAAAFIAAAEIAAAEIAAAEIgCAEIgEAFIgGAEIgCAFIgCADIgDAFIgEAEIAAAAIgGgBIAAAAIgLACIgGAFIgCAEIgBADIgmAAg");
	this.shape_7.setTransform(69.8,214.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhECrIgLgDIgFgDIgEgFIgDgDIgBgEIgDgEIgDgEIgCgBIgFgBIgEgCIgDgCIgHgEIgEgDIgEgFIgBgEIgBgDIAAgEIAAgEIAAgDIgDgBIgHgDIgIgFIgIgDIgKgCIgCgEIgEgDIgFgEIgHgEIgFgDIgEgFIgFgDIgGgEIgFgEIgEgDIgEgFIgEgDIgCgEIgDgEIgBgEIgEgEIgDgDIgCgFIgBgDIAAgEIAAgEIAAgDIAAgFIAAgDIABgEIABgDIABgEIACgDIAAgEIABgFIAEgDIAEgEIAEgEIADgEIAEgEIAEgDIADgEIAwAAIAMACIAUAFIAJADIALADIAJACIAMACIAEADIALADIAFAAIAIgBIAEgCIACgDIAFgDIADgEIABgDIACgFIABgEIAAgDIgBgEIgCgEIgCgEIgDgDIgCgFIAAgDIAAgIIAAgIIAAgHIAAgEIAAgEIAAgHIAAgFIAAgDIAAgEIAAgEIAAgDIACgFIABgDIACgEIAAgEIAAgEIABgEIADgDIABgFIAAgDIABgEIAJgBIAcADIAMACIACABIAEACIAHAFIADADIAEAEIAEAEIAFAEIAIAEIAEADIAEAFIACADIABAEIADAEIAEADIABAFIAAADIABAEIADAEIAEAEIADAEIAEADIAEAFIAFADIAMACIAKgCIAGgDIAEgFIABgDIADgEIABgEIADgEIABgEIADgDIABgFIABgDIABgEIADgEIADgDIACgFIABgDIAEgEIAgAAIANAEIAEADIAGAFIAHADIACAEIABAEIADADIAEAFIACADIACAEIACAEIABAEIAAAEIAAADIAAAFIACADIABAEIABAEIABADIAAAIIAAAMIAAAHIAAAIIAAAMIAAAHIAAAIIAAAHIAAAEIAAADIAAAEIAAAEIgBADIgCAFIgEADIgBAEIgCAEIgCAEIgCAEIgCADIgEAFIgCADIgCAEIgCAEIgDADIAAACIAEABIAGAEIAEAEIABAEIADADIABAFIAAADIAAAEIgBAEIgDADIgBAFIgEADIgFADIgBABIgIAEIgHAEIgEADIgEAAIgIACIgPACIgKADIgXAGIgFADIgKACIgIAEIgEADIgEABIgHABIgQADIgKADIgPACIgIAEIgFADIgIABIgZACIgJADIhDAAg");
	this.shape_8.setTransform(49.4,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABFUyIgFgDIgDgFIgBgEIgBgEIAAgEIAAgFIAAgEIABgEIACgEIAEgFIADgEIACgEIADgEIACgFIABgEIACgEIAEgFIABgDIACgFIACgEIADgFIACgDIABgFIACgEIAFgFIACgDIACgFIADgEIAEgFIADgDIABgFIAEgEIACgFIABgDIAEgFIAEgEIAEgEIAEgFIAEgEIACgEIABgBIgBAAIgFACIgMADIgIAEIgFADIgDACIgMADIgFACIgMADIgJAFIgIADIgJAFIgIAEIgJAFIgGADIgFAFIgJAEIgIAFIgGADIgEAFIgEAEIgIAFIgFADIgFAFIgEAEIgFADIgIACIgFAAIgMgEIgFgEIgEgEIgBgEIgBgFIAAgEIAAgEIABgEIADgFIAEgEIAFgEIAEgEIAEgEIAEgFIAJgEIAGgFIAFgDIAIgFIAFgEIAHgFIAGgDIAEgFIAJgEIAIgFIARgIIAPgHIACgCIAMgCIAFgDIALgDIAJgEIAFgDIADgBIAJgCIAMgDIAIgDIAIgFIAGgDIADgBIAIgBIAQgEIABgDIAAgOIAAgVIAAgVIAAgVIAAgVIAAgRIABgEIACgFIgqAAIgLgDIgGgDIgLgDIgJgDIgIgFIgJgEIgFgFIgGgDIgHgFIgFgEIgEgFIgDgDIgCgFIgCgEIgEgFIgDgEIgCgEIgCgEIgFgEIgCgFIgCgEIAAgEIAAgEIAAgFIgEgEIgEgEIgFgEIgEgFIgDgEIgBgEIgDgEIgEgFIgCgEIgCgEIgCgEIgFgEIgDgFIgBgEIgBgFIAAgDIAAgBIgBgCIgBgBIgCgBIgBgBIgBgCIgBgBIgBgCIgBgCIgBgBIgBgCIAAgBIgCgBIAAgCIgBgBIgBgCIAAgBIgBgBIAAgCIAAgBIgBgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgDIAAgDIAAgDIAAgDIAAgCIAAgCIAAgBIAAgCIABgCIAAgBIABgCIAAgBIABgBIABgCIAAgCIAAgBIACgBIAAgBIABgCIAAgBIABgCIAAgCIAAgBIABgBIAAgCIABgBIAAgCIAAgBIABgCIAAgBIAAgFIAAgFIAAgBIABgCIAAgCIAAgBIABgCIACgBIABgBIABgCIABgCIABgBIACgBIABgBIACgCIACgBIABgCIACgCIACgBIABgBIACgCIABgBIADgCIACgBIADgCIACgBIADgBIACgCIADgCIADgBIAEgBIADgBIADAAIAGAAIABgBIACAAIADgBIACAAIADgBIADAAIAAAAIAvAAIACAAIADABIAEAAIADABIAEABIADABIACABIADACIADACIACABIABABIABAAIAEABIACACIACABIABACIADABIADACIACABIACABIACACIADACIABABIACABIABABIADAAIADABIACAAIAEABIADACIACACIABABIADACIACAAIADABIADACIACABIABACIACACIABABIABABIACABIACACIACACIAEABIACACIACABIABABIACACIACACIACABIABABIABABIACACIABABIABACIACACIAAABIABACIAAABIABABIABABIAAACIABABIAAACIABABIABABIACACIACACIABABIABACIABABIAAABIACABIABACIACACIACABIABABIABACIABABIAEACIAAABIAAABIABACIAAABIABABIAAACIAAACIABABIAAACIABABIAAABIAAACIABABIAAACIABABIABABIABACIABABIAAACIAAACIAAABIABACIAAABIABABIAAABIAAACIAAACIABABIAAABIAAACIABABIAAACIAAACIABABIABABIAAABIAAACIABACIAAABIACACIABABIACABIABACIAAACIABABIABABIABABIAAACIAAABIACACIAAACIAAAJIAAAMIAAAJIAAAIIAAAJIAAAJIgCADIgCAFIgBAEIgEAFIgFADIgCAFIgDAEIgDAFIgDADIgEAFIgCAEIgCAFIgDADIgFAFIgDAEIgFAEIgCADIAAADIAAAJIAAAEIgCAEIgBAEIgEAFIAAAMIAAAWIAAAVIAAAVIAAAWIAAAIIAJgDIAGgDIAJgBIAygDIAMgDIARgDIALgCIAAAAIALAAIAKACIAGAEIACAFIADAEIACAEIAAAEIgCAFIgBAEIgDAEIgEAEIgIAFIgFACIgCACIgJABIgSADIgKADIg1ADIgOAEIgEADIgIACIgDAFIgEADIgCABIgIABIgMgCIgBAEIgEAEIgCAFIgFAEIgBAEIgDAFIgCADIgDAFIgEAEIgFAFIgEADIgDAFIgBAEIgCAFIgBADIgCAFIgBAEIgEAFIgEADIgFAFIgBAEIgDAFIgCADIgCAFIgCAEIgCAEIgCAFIgCAEIgFAEIgBAEIgBAFIgCAEIgCAEIgEAEIgEAFIgCADIgBAFIgEAEIgFAFIgFADIgKADIgMgDgAAQL5IAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAABIAAACIAAABIAAACIAAACIABABIAAABIACACIAAABIABACIABABIABACIABABIABABIABACIABACIACABIABACIABABIACABIABABIABACIACACIACABIABABIABACIABABIADACIACABIADAEIAAABIAAABIAAABIAAACIAAACIAAABIABABIAAACIABABIABACIACABIACACIADABIACABIADAAIACACIABAFIABAEIADAEIADAEIACAFIAAAEIABAEIACAEIACAFIAFAEIACAEIADAEIACAFIAHAEIAGAEIAFAEIAJAEIAIAFIAFACIAFACIAKADIAlAAIABgDIACgEIAGgFIALgCIAAAAIAHABIAAAAIADgEIAEgFIABgDIACgFIAHgEIADgFIACgEIAAgEIAAgEIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgEIgCgEIgDgDIAAgBIAAgBIAAgBIgBgCIAAgCIAAgBIAAgBIAAgCIgBgBIAAgCIgBgCIAAgBIgBgBIgBgBIAAgCIgBgCIgBgBIgBgCIAAgBIgBgBIAAgCIgBgCIgBgBIgCgBIgBgBIgCgCIABgBIgBgBIgBgCIgBgCIgBgBIgBgBIAAgCIgCgBIgCgCIgBgBIgCgCIAAgBIgBgBIgCgCIgCgCIgCgBIgBgCIgBgBIAAgBIAAgBIgBgCIgCgCIgCgBIgBgCIgBgBIgCgBIAAgCIgCgCIgBgBIgBgBIgBgBIgCgCIgBgBIgBgCIgCgCIgBgBIgCgBIgBgCIgBgBIgBgCIgBgBIgBgCIgCgBIgDgBIgCgCIgBgCIgBgBIgBgCIAAgBIgBgBIgCgCIgBgBIgCgCIgBgBIgBgBIgEgBIgDgBIgBgCIgCgCIgDgBIgBgCIgCgBIAAgBIgBAAIgEgBIgDgBIgBgCIgCgCIgCgBIgEgBIgCgCIgDgBIgEgCIgCgBIgCgBIgDAAIgtAAIgCABIgBABIgCAAIgDABIgHABIgDACIgCABIgBABIAAABIgBACIAAACIgBABIgBABIAAACIgCABIgCABIgBACIgBACIgBABIgBABIgBACIgBABIgCACIgCABIgBACIAAABIgBABIgBACIgBABIAAACIAAADIAAADIAAAEIAAADIAAADIAAADIAAACIABABIABABIAAABIABACIAAABIACgBIAAACgAjiuxIgLgCIgJgEIgGgEIgJgDIgHgEIgIgEIgGgEIgEgDIgEgFIgHgEIgGgDIgEgEIgDgEIgHgEIgGgDIgEgFIgEgDIgEgEIgDgEIgFgDIgDgFIgBgDIgBgEIgFgEIgDgEIgEgEIgDgDIgBgFIgCgDIgCgEIgBgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgIIAAgDIAAgEIAAgIIAAgHIAAgIIAAgEIABgEIACgEIACgEIAAgDIABgEIABgEIADgEIACgDIACgFIADgDIAFgEIADgEIAEgEIAEgEIAIgIIADgDIAFgEIAHgHIAEgDIADgCIAIgBIBIAAIAKADIAFADIAKABIAQADIAFgBIAAgDIAAgFIAAgDIAAgEIAAgEIAAgIIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgFIABgDIACgEIABgEIABgDIAAgFIAAgDIABgEIACgEIACgEIAAgEIAAgDIACgFIABgDIACgEIABgEIADgEIAEgEIADgDIAFgEIADgEIAGgEIAKgCIABgBIAUAAIAKADIAfADIALADIAHADIAFADIADABIAKACIAGAEIAEAEIAEAEIAEAEIADADIAFAFIADADIAGAEIAGAEIAEAEIADAEIAFAAIACgEIAEgEIAEgEIADgEIAFgDIADgFIAFgDIAMgDIA4AAIAKADIAFACIAKADIAHAEIADADIAFAFIAGADIAGAEIAEAEIAEADIADAFIAEADIACAEIABAEIAEAEIADAEIACADIABAFIADADIABAEIACAEIABADIAAAFIAAADIAAAEIABAEIACAEIACAEIAAADIAAAFIAAADIAAAIIAAALIAAAPIAAAQIAAAPIAAAPIAAAMIAAAEIAAADIAAAIIAAAEIgCAEIgBAEIgBAEIgCADIgCAFIgDADIgBAEIgCAEIgBADIgFAFIgCADIgCAEIgBAEIgFAEIgCAEIABADIAAAFIAAADIgBAEIgCAEIgCADIgEAFIgGADIgLADIgLgDIgFgDIgDgDIAGgDIADgDIABgFIAEgDIABgEIAAgEIAAgDIgBgFIgEgDIgBgEIgDgEIgHgEIgEgBIABgCIACgDIACgEIACgEIADgDIADgFIACgDIACgEIADgEIABgEIABgEIAEgDIADgFIABgDIAAgEIAAgEIAAgDIAAgFIAAgHIAAgIIAAgHIAAgMIAAgIIAAgHIAAgMIAAgIIgBgDIgCgEIgBgEIgCgDIAAgFIAAgDIAAgEIgBgEIgCgEIgBgEIgDgDIgEgFIgCgDIgBgEIgDgEIgGgDIgHgFIgEgDIgNgEIggAAIgEAEIAAADIgDAFIgDADIgCAEIgBAEIgCADIgBAFIgDADIgBAEIgCAEIgCAEIgDAEIgBADIgDAFIgHADIgKACIgLgCIgGgDIgDgFIgEgDIgDgEIgEgEIgDgEIgBgEIAAgDIgBgFIgEgDIgDgEIgBgEIgCgDIgEgFIgEgDIgIgEIgEgEIgFgEIgDgEIgEgDIgGgFIgFgCIgCgBIgLgCIgegDIgJABIgBAEIAAADIgBAFIgDADIgBAEIAAAEIAAAEIgCAEIgBADIgCAFIAAADIAAAEIAAAEIAAADIAAAFIAAAHIAAAEIAAAEIAAAHIAAAIIAAAIIAAADIACAFIADADIADAEIABAEIABAEIAAADIgBAEIgBAFIgCADIgDAEIgEADIgDADIgEACIgIABIgEAAIgMgDIgEgDIgLgCIgJgCIgMgDIgJgDIgUgFIgLgCIgxAAIgDAEIgDADIgFAEIgDAEIgEAEIgEAEIgDADIgCAFIAAAEIgCADIgBAEIgBAEIgBAEIAAADIAAAFIAAADIAAAEIAAAEIABADIACAFIAEADIADAEIABAEIADAEIADAEIADADIAEAFIAEADIAFAEIAGAEIAFADIAEAFIAFADIAHAEIAFAEIAEADIACAEIAKACIAIADIAIAFIAIADIACABIAAADIAAAEIAAAEIABADIABAEIAFAFIADADIAHAEIADACIgBACIgCAEIgBADIgFAEIgGAEIgKACIgKAAg");
	this.shape_9.setTransform(57.6,133.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hen3, new cjs.Rectangle(0,0,247.6,271.3), null);


(lib.hen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECBE65").s().p("AkaKaIgLgDIg1gKQA2gwgklfIAIAaIACAGIACAQIACAHIADAIIACAIIADAHIABAEIACAEIABAEIABADIACAIIACAEIABADIADAEIABAEIABAEIADAEIAAADIABAEIACAEIACAEIABAEIACADIADAEIACAEIACAEIACAEIADADIADAEIACAEIABAEIABADIADAEIAAAEIACAEIABAEIACADIAAAEIABAEIABAEIADAEIAEADIACAEIACAEIADAEIAAAEIADADIABAEIADAEIADAEIAAADIACAEIADAEIADAEIAEAEIAEADIADADIgCABIgGAEIgEAEIgEAEIgDADIgDAEIgBAEIgCAEIAAAEIAAADIAAAEIACAEIABAEIADADIACAEIAEAEIAIAEIALACIAeAAIAIgBIACgBIAEAEIACADIABAEIADAEIAEAEIAEAEIAHADIAGAEIAEAEIADAEIAEAEIADADIAGAEIAFADIgDABIgDAEIgHACIgIADIgLADIgJADIgLADIgJACIgMADIhnAAgAgQqLIACgCIACgEIADgEIABgEIADACIAHADIAIAEIAGAEIAHAEIADAEIAFADIADAEIAFAEIAIAEIADAEIAEADIAEAEIAEAEIAEAEIAIADIAIADIACABIACADIADAEIAFADIADAEIAEAEIAGAEIAHAEIACADIABAEIADAEIAEAEIAEADIAHAEIAFAEIABAEIADAEIADADIADAEIABAEIADAEIADAEIADADIAEAEIAEAEIAEAEIAEAEIABADIACAEIADAEIADAEIAGADIAGAEIABAEIADAEIADAEIADADIACAEIACAEIAEAEIADAEIABADIACAEIACAEIACAEIABAEIACADIAAAEIACAEIACAEIAEADIAEAEIACAEIACAEIADAEIABADIACAEIACAEIACAEIADAEIACADIACAEIADAEIACAEIACAEIABADIADAEIABAEIACAEIADADIABAEIADAEIABAEIABAEIADADIABAEIADAEIACAEIACAEIACADIABAEIACAEIACAEIABAEIACADIADAEIACAEIABAEIABADIABAEIABAEIADAEIACAEIABADIACAEIAAAEIABAEIABAEIADADIACAEIACAEIABAEIAAAEIAAADIABAEIACAEIADAEIABADIACAEIABAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIACAEIABADIACAEIAAALIAAAXIAAAXIAAATIAAAPIAAATIAAATIAAAPIAAALIAAAPIgBADIgCAEIAAAEIgCAEIAAAEIAAADIAAAEIgCAEIgBAEIgBAEIAAADIgDAEIgCAEIgBAEIAAADIAAAEIAAAEIgBAEIgBAEIgBADIgCAEIgBAEIgCAEIgBAEIgBADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIgCAEIgBAEIgCADIAAAEIgDAEIgBAEIgBAEIAAADIgCAEIgCAEIgBAEIgDAEIgBADIgCAEIgDAEIAAAEIgBAEIAAADIgCAEIgBAEIgBAEIgBADIgBAEIgBAEIgCAEIgDAEIgCADIgBAEIgEAEIgDAEIgCAEIgBADIgDAEIgBAEIgCAEIgCAEIgDADIgCAEIgEAEIgEAEIgDADIgDAEIgEAEIgFAEIgEAEIgCADIgCAEIgFAEIgFAEIgFAEIgDADIgEAEIgFAEIgHAEIgFADIgGAEIgGAEIgEAEIgEAEIgGADIgGAEIgEAEIgHAEIgGAEIgFADIgHAEIgIAEIgFAEIgFAEIgHADIgIAEIgIAEIgGAEIgJAEIgHADIgFAEIgEAEIgEAEIgIADIgHAEIgGAEIgJAEIgIAEIgFADIgFAEIgHAEIgIAEIiCBLQI3pHm6pbg");
	this.shape.setTransform(68.3,147.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F9E52").s().p("Am0LZQNulKkGoDQjpk4AYiaIAXiaIAAAEIAAADIABAEIABAEIADAEIABAEIABADIACAEIAAAEIAAAEIAAAEIABADIABAEIADAEIABAEIABAEIADADIAAAEIABAEIABAEIADADIAAAEIAAAEIAAAIIAAAHIAAAIIAAAHIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIABAEIAAAEIADAEIABAEIAAADIAAAEIAAAEIABAEIABAEIADADIABAEIABAEIADAEIAAAEIABADIABAEIADAEIAEAEIABADIABAEIACAEIACAEIABAEIACADIACAEIAEAEIAEAEIACAEIADADIACAEIADAEIAEAEIADAEIAEADIADAEIABAEIADAEIADADIAEAEIAEAEIABAEIADAEIACADIAIAIIAHAIIAIAHIAEAEIAEAEIAHAHIAIAIIADAEIAIAHIADAEIABAEIACAEIAEADIAEAEIAFAEIADAEIADAEIAEADIADAEIACAEIADAEIACADIAEAEIAEAEIAEAEIACAEIABADIADAEIABAEIADAEIACAEIAEADIAEAEIAEAEIADAEIAEAEIAEADIAEAEIACAEIADAEIACADIACAEIABAEIACAEIAEAEIADADIABAEIACAEIAEAEIAEAEIAEADIAEAEIABAEIACAEIADAEIABADIADAEIACAEIAEAEIAEADIABAEIADAEIACAEIABAEIADADIACAEIADAEIABAEIAAAEIADADIACAEIACAEIACAEIABAEIACADIACAEIAAAEIABAEIACADIACAEIABAEIADAEIADAEIACADIABAEIACAEIABAEIACAEIACADIACAEIADAEIABAEIACAEIADADIADAEIACAEIADAEIABADIABAEIADAEIAAAEIAAAEIABADIABAEIABAEIACADIABAEIABADIADAEIABAEIABAEIADAEIABADIADAEIACAEIABAEIADADIABAEIABAEIADAEIABAEIADADIABAEIABAEIAAAEIADAEIABADIAAAEIAAAEIAAAEIAAADIABAEIAAAEIADAEIABAEIAAADIAAAEIABAEIACAEIACAEIAAAHIAAAMIAAALIAAALIAAAMIAAALIAAALIAAAMIAAAHIAAAIIAAAHIAAAMIgCAEIgCADIgBAEIAAAEIAAAEIgBAEIgDADIAAAEIgBAEIAAAEIgBAEIgCADIgBAEIgBAEIAAAEIAAADIgDAEIgBAEIgBAEIAAAEIAAADIAAAEIgBAEIgCAEIgBAEIgBADIgBAEIgCAEIgBAEIgCAEIgDADIAAAEIgBAEIAAAEIgBADIgCAEIgBAEIgDAEIgCAEIAAADIgBAEIgCAEIgCAEIAAAEIgBADIgCAEIgCAEIgBAEIgEAEIgDADIgCAEIAAAEIgCAEIgBADIgCAEIgCAEIgDAEIgDAEIgCADIgCAEIgDAEIgDAEIgDAEIgBADIgEAEIgDAEIgDAEIgEAEIgFADIgEAEIgCAEIgEAEIgFADIgEAEIgCAEIgDAEIgCAEIgDADIgEAEIgDAEIgDAEIgBAEIgDADIgGAEIgGAEIgEAEIgIAEIgFADIgEAEIgDAEIgIAEIgHAEIgHADIgEAEIgDAEIgHACIgDACIgHACIgEAEIgGACIgHADIgIAEIgGAEIgEADIgIAEIgLAEIgIAEIgIAEIgIADIgIADIgDABIgHADIgHADIgIADIgIACIgHADIgIACIgLAEIgJADIgHABIgIADIgLADIgJADIgIABIhbAcQgyAOhpAAQhRAAhygIg");
	this.shape_1.setTransform(141.7,147.3);

	this.instance = new lib.beard1();
	this.instance.parent = this;
	this.instance.setTransform(132.7,69.1,0.887,0.938,17,0,0,10.6,10.5);

	this.instance_1 = new lib.beard2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.4,63.2,0.764,1,52,0,0,14.5,9.5);

	this.instance_2 = new lib.thight1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84,221,1,1,0,0,180,12.7,14.3);

	this.instance_3 = new lib.eye2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.7,48.6,1,1,0,0,0,21,4.8);

	this.instance_4 = new lib.beack();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130.9,41,0.932,1,0,23,-157,45.2,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhqC/IgMgCIg2gDIgLgCIgFgCIgHgCIgHgEIgNgEIgIgEIgHgDIgIgEIgHgEIgIgEIgHgEIgEgDIgHgEIgGgEIgEgEIgDgDIgDgEIgDgEIgCgEIgDgEIgCgDIgDgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAEgEIAEgEIAGgDIAHgEIADgEIAIgEIAIgEIAMgDIAUgFIAVgFIASgDIAMgDIAYgCIALgDIAygCIAHgBIAEgCIAFgCIAFgEIADgEIACgEIABgCIACgEIABgEIAAgEIgBgDIAAgEIgDgEIgBgEIgDgEIgEgDIgCgEIgBgEIgDgEIgCgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIACgEIADgEIATAAIAZAFIALADIAJACIALADIAEABIAEABIAEADIAIAEIAFAEIAFADIACAEIAEAEIAIAEIAKADIABABIAFACIADAEIACAEIADADIADAEIAIAEIALADIAFAAIAIgCIAGgCIAHgEIACgEIADgEIACgDIABgEIACgEIAAgEIAAgEIAAgDIAAgEIgCgEIAAgEIgCgEIgBgDIgDgEIgCgEIAAgEIAAgDIgCgEIAAgEIgCgEIgBgEIAAgDIAAgIIAAgIIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIABgEIABgEIADgEIABgEIACgDIAEgEIAEgEIAEgEIAcAAIAGAEIAEAEIAHAEIAFADIAEAEIAEAEIAEAEIADAEIACADIACAEIADAEIAEAEIAFADIACAEIAEAEIAGAEIAHAEIADADIAEAEIAEAEIAEAEIACAEIACADIACAEIAEAEIACAEIACAEIACADIABAEIADAEIACAEIACADIACAEIACAEIABAEIACAEIAAADIACAEIABAEIACAEIAAAEIACADIABAEIACAEIAAAEIAAAEIACADIABAEIABAEIABAEIACACIABAEIABAEIACAEIABAEIABADIABAEIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAACIgEgDIgFgEIgIgEIgHgDIgMgDIgngBIgEgDIgGgDIgLgDIgVAAIAAABIgHAAIgIADIgLADIgJADIgIABIgHADIgIACIgDACIgHACIgHAEIgIADIgIACIgHADIgIACIgHAEIgHAEIgIADIgEAEIgHADIgDABIgHADIgDADIgHAEIgGAEIgJAEIgEAEIgDADIgDAEIgFAEIgHAEIgFADIgFAEIgHAEIgEAEIgEAEIgFADIgIAEIgDAEIgEAEIgFAEIgIADIgEAEIgDAEIgFAEIgIAEIgEADIgEAEIgDAEIgDADIgCgCg");
	this.shape_2.setTransform(106.3,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#46B15B").s().p("AhKOgIgMgCIhfgDIgLgCIgsgDIgMgCIgSgDIgMgCIgYgDIgLgCIgOgDIgLgDIgJgCIgKgCIgFgDIgLgCIgFgDIgKgDIgFgCIgPgEIgFgEIgIgDIgHgEIgKgDIgFgCIgNgEIgHgEIgIgEIgIgDIgLgDIgEgBIgEgDIgGgDIgHgEIgHgEIgFgEIgGgEIgJgCIgDgDIgGgDIgHgEIgIgEIgIgEIgFgEIgFgDIgHgEIgEgEIgGgEIgHgEIgFgDIgEgEIgCgEIgEgEIgFgDIgGgFIgFgDIABAAIAEgBIAFgDIAHgEIANgEIAIgDIAHgEIAIgEIAJgDIAGgCIANgEIAHgEIAIgDIAHgEIAIgEIAHgEIAIgDIAIgEIAGgEIAEgEIAHgEIAIgDIAHgEIAIgEIAIgEIAFgEIAFgDIAGgEIAFgEIAGgEIAJgCIAHgDIAGgEIAEgDIAHgEIAIgEIAGgEIAEgEIAIgDIAFgEIAFgEIAHgEIAIgDIAFgEIAEgEIADgEIAEgEIAHgDIAGgEIAEgEIAHgEIAFgEIAEgDIAEgEIAHgEIAFgEIAGgDIAGgEIAFgEIAEgEIACgEIADgDIABgEIAEgEIAEgEIACgEIADgDIACgEIADgEIADgEIAEgEIAEgDIADgEIACgEIABgEIAEgDIADgEIACgEIABgEIADgEIABgDIADgEIABgEIADgEIABgEIACgDIACgEIACgEIABgEIADgEIABgDIADgEIABgEIABgEIAAgDIAAgEIACgEIACgEIAAgEIABgDIACgEIACgEIABgEIADgEIABgDIABgEIAAgEIADgEIABgEIABgDIAAgEIADgEIABgEIACgDIAAgEIAAgEIAAgEIAAgEIAAgDIACgEIABgEIACgEIAAgEIAAgDIABgEIACgEIAAgEIACgEIAAgDIAAgEIAAgEIACgEIABgDIACgEIAAgEIAAgEIACgEIABgDIACgEIAAgEIABgEIACgEIAAgDIACgEIAAgeIAAgfIAAgaIAAgXIAAgXIAAgXIAAgSIAAgQIAAgPIgCgEIAAgDIgCgEIgBgEIAAgDIAAgDIAAgEIAAgEIAAgEIAAgEIgCgDIgBgEIgCgEIAAgEIgCgEIgBgDIgCgEIAAgEIgCgEIgBgEIgCgDIAAgEIgCgEIgBgEIgCgDIgCgEIgCgEIgCgEIgCgEIgBgDIgCgEIgBgEIgBgEIgBgEIgDgDIgBgEIgDgEIgBgEIgCgEIgCgDIgBgEIAAgEIgDgEIgBgDIgCgEIgEgEIgDgEIgBgEIgCgDIgCgEIgCgEIgBgEIgDgEIgBgDIgDgEIgBgEIgDgEIgBgEIgCgDIgCgEIgCgEIgDgEIgCgDIgDgEIgCgEIgCgEIgCgEIgBgDIgDgEIgBgEIgDgEIgCgEIgEgDIgEgEIgCgEIAAgEIgCgEIgBgDIgCgEIgCgEIgCgEIgBgDIgDgEIgCgEIgEgEIgBgEIgDgDIgDgEIgDgEIgCgEIgCgEIgDgDIgDgEIgEgEIgEgEIgEgEIgEgDIgDgEIgDgEIgBgEIgDgDIgFgEIgFgEIgCgEIgDgEIgEgDIgCgEIgBgEIgDgEIgEgEIgEgDIgDgEIgEgEIgEgEIgEgEIgDgDIgEgEIgEgEIgEgEIgEgDIgDgEIgGgEIgGgEIgFgEIgEgDIgDgEIgEgEIgHgEIgGgEIgJgDIgDgEIgEgEIgEgEIgEgEIgEgDIgGgEIgGgEIgEgEIgEgDIgEgEIgFgEIgHgEIgIgEIgGgCIABgDIADgDIADgEIAHgEIAGgEIAEgEIAEgDIACgEIABgEIADgEIAEgEIAEgDIADgEIADgEIACgEIADgDIAFgEIAFgEIAFgEIAEgEIACgDIADgEIABgEIAEgEIAEgEIAEgDIADgEIAEgEIAEgEIAEgEIADgDIAEgEIAEgEIADgEIADgDIAFgEIAEgEIAEgEIAEgEIAEgDIADgEIAEgEIAEgEIAGgEIAHgDIADgEIAEgEIAGgEIAHgEIAEgDIADgEIAEgEIAEgEIAFgDIAGgEIAFgEIAGgEIAGgEIAFgDIAEgEIADgEIAEgEIAEgEIAEgDIAGgDIAEgBIAFgDIAFgDIAEgEIAEgEIADgEIAEgEIAEgDIAFgEIAGgEIAFgEIAEgEIAFgDIAGgEIAGgEIADgEIAFgDIAHgEIAFgEIAFgEIAGgEIAFgDIAEgEIAGgEIAFgEIAFgDIAHgEIAGgEIAEgEIAHgEIAFgEIAHgCIAGgDIAGgDIAEgEIAIgEIAHgEIAJgCIAGgDIAJgDIAHgCIAHgEIAJgCIAHgBIAGgDIACgBIAIAAIAFACIALADIAMgDIA0AAIAGAEIAEAEIAHAEIAFADIAEAEIAEAEIAEAEIADAEIAEADIADAEIABAEIADAEIADAEIACADIABAEIABAEIADAEIABADIABAEIADAEIAAAEIAAAEIABADIABAEIACAEIABAEIAAAEIAAADIAAAEIAAAEIABAEIABAEIACADIABAEIABAEIABAEIACADIABAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIABADIAAAEIADAEIABAEIAAAHIAAAMIAAAHIAAAIIAAAHIAAAIIAAALIAAAIIAAAHIAAAIIAAAIIAAAHIABAEIABAEIADAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIABAEIAAAEIADAEIABADIAAAEIAAAEIABAEIACAEIACADIABAEIADAEIABAEIAAADIAAAEIAAAEIABAEIACAEIACADIABAEIACAEIACAEIAAAEIACADIABAEIACAEIAAAEIAAAEIAAAHIAAAIIAAAHIAAAIIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACAEIAAAEIACADIABAEIAAAEIAAAEIAAADIACAEIABAEIACAEIACAEIABADIACAEIAAAEIACAEIABAEIADADIADAEIACAEIABAEIABAEIADADIABAEIABAEIADAEIADADIAEAEIADAEIACAEIADAEIACADIAEAEIAEAEIAEAEIACAEIACADIACAEIAEAEIAEAEIADAEIACADIACAEIADAEIAHAHIAIAIIAHAIIAEADIAEAEIAIAIIAHAHIAEAEIAIAIIACAEIABADIADAEIAEAEIADAEIAFADIADAEIAEAEIAEAEIACAEIADADIACAEIADAEIADAEIAEAEIAEADIADAEIABAEIACAEIACAEIACADIADAEIADAEIAEAEIAEADIAEAEIAEAEIADAEIAEAEIADADIACAEIADAEIABAEIABAEIADADIAEAEIACAEIABAEIADAEIAEADIAEAEIADAEIAEAEIABADIADAEIACAEIACAEIACADIADADIAEAEIADAEIACAEIACAEIADADIABAEIACAEIADAEIACADIACAEIAAAEIACAEIADAEIABADIADAEIABAEIABAEIADAEIAAADIABAEIABAEIADAEIABAEIACADIADAEIADAEIABAEIABADIABAEIADAEIABAEIADAEIACADIABAEIADAEIACAEIADAEIADADIACAEIABAEIACAEIACAEIAAADIAAAEIABAEIACAEIABADIABAEIABAEIACAEIACAEIABADIACAEIACAEIACAEIACAEIADADIABAEIACAEIACAEIABAEIACADIACAEIACAEIABAEIACADIAAAEIACAEIACAEIAAAEIAAADIAAAEIAAAEIABAEIAAAEIACADIACAEIAAAEIAAAEIABAEIABADIADAEIAAAIIAAALIAAALIAAAMIAAALIAAAMIAAALIAAALIAAAIIAAAHIAAAIIAAALIgDAEIgBAEIgBAEIAAAEIAAADIgCAEIgCAEIAAAEIgBADIAAAEIgCAEIgBAEIgBAEIgCADIAAAEIAAAEIgCAEIgBAEIgCADIAAAEIAAAEIAAAEIgBADIgBAEIgBAEIgCAEIgBAEIgBADIgBAEIgDAEIgCAEIAAAEIgCADIAAAEIgBAEIgBAEIgCAEIgCADIgDAEIAAAEIgBAEIgBADIgDAEIAAAEIgBAEIgBAEIgDADIgBAEIgEAEIgCAEIgDAEIAAADIgBAEIgBAEIgDAEIgBAEIgEADIgCAEIgDAEIgBAEIgEADIgDAEIgCAEIgBAEIgEAEIgEADIgCAEIgEAEIgFAEIgEAEIgDADIgDAEIgFAEIgEAEIgDAEIgCADIgDAEIgCAEIgEAEIgEADIgCAEIgCAEIgCAEIgHAEIgGADIgEAEIgHAEIgFAEIgEAEIgEADIgHAEIgIAEIgGAEIgEAEIgEADIgGADIgEABIgGADIgEADIgGADIgIACIgHAEIgHAEIgEAEIgHAEIgMADIgHAEIgJAEIgIAEIgHACIgEACIgGACIgIAEIgHACIgIADIgIACIgHADIgMAEIgIACIgIACIgIACIgLAEIgJACIgHACIgIACIgLAEIgJADIgIABIgHACIgIADIgEABIgGADIgFADIgOAEIgJADIgLACIgTADIgLACIgYADIgMACIgOADIgLACIhXAAg");
	this.shape_3.setTransform(121.8,128.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC6B").s().p("AoTKaIgLgDIgdgCIgLgDIgJgDIgNgDIgGgEIgJgEIgIgEIgIgCIgDgDIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIACgEIACgDIABgEIADgEIAAgEIABgEIABgDIADgEIAEgEIACgEIABgDIADgEIAEgEIACgEIACgEIACgDIAAgEIABgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIgBgEIAAgDIgCgEIgCgEIgCgEIgFgDIgHgEIgLgDIhugCIgKgDIgFgCIgLgDIgOgCIgHgEIAAgEIAAgEIAAgEIACgDIABgEIADgEIABgEIACgEIAAgDIACgEIABgEIACgEIAAgDIADgEIAEgEIADgEIAEgEIAEgDIAEgEIAEgEIADgEIADgEIACgDIAGgEIAFgEIADgEIAEgEIAEgDIAIgEIAFgEIACgEIAFgDIAJgEIAGgEIAIgEIAJgCIALgDIAigCIAMgDIAHgEIAIgDIAFgEIACgEIADgEIABgEIABgDIACgEIAAgEIgCgEIAAgEIgCgDIgBgEIgDgEIgFgEIgGgEIhDgNIgpgIQgZgEgZgGIgfgIIgDgBIgEgDIgFgDIgEgEIgCgEIgGgEIgDgDIgDgEIgFgEIgCgEIgFgEIgEgDIgDgEIgFgEIgFgEIgCgEIgDgDIgFgEIgDgEIgCgEIgBgDIgDgEIgCgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIADgEIAEgEIAEgEIAFgDIAGgEIAGgEIAGgEIAHgDIBoAAIALACIAOADIALACIAJADIAKACIAGADIAKACIAFADIAKACIABABIAGADIAIAEIAKADIABABIAFACIAFAEIAEAEIAEAEIADABIgBAEIAAAHIAAAIIACAEIABADIABAEIACAEIAAAEIAAADIAAAEIAAAEIABAEIABAEIABADIACAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIABAEIAAAEIACAEIACADIAAAEIAAAEIAAAEIABAEIABADIABAEIACAEIAAAEIABAEIAAADIACAEIACAEIAAAEIAAAEIAAADIACAIIADAHIACAIIADAIIACAHIACAEIABAEIABAEIABADIADAIIABAEIABADIADAEIABAEIACAEIACAEIAAADIABAEIACAEIACAEIABAEIADADIACAEIACAEIACAEIADAEIACADIADAEIACAEIACAEIABADIACAEIAAAEIACAEIABAEIACADIAAAEIACAEIABAEIACAEIAEADIADAEIABAEIADAEIABAEIACADIACAEIACAEIADAEIABADIABAEIADAEIAEAEIADAEIAEADIADADIgCABIgGAEIgEAEIgEAEIgDADIgDAEIgBAEIgBAEIAAAEIAAADIAAAEIABAEIABAEIADADIACAEIAEAEIAIAEIALACIAeAAIAIgBIADgBIADAEIADADIABAEIACAEIAEAEIAEAEIAIADIAFAEIAFAEIACAEIAEAEIAEADIAFAEIAFADIgDABIgDAEIgHACIgHADIgMADIgJADIgLADIgJACIgLADIhoAAgAmIH9IgCgEIgEgEIgEgDIgEgEIgCgEIgDgEIgCgEIgDgDIgDgEIgEgEIgDgEIgBgDIgBgEIgDgEIgBgEIgDgEIgBgDIgCgEIgCgEIgCgEIgBgEIgDgDIAAgEIgBgEIgCgEIgCgEIAAgDIgBgEIgCgEIgCgEIgDgDIgCgEIgEgEIgEgEIgBgEIgDgDIgBgEIgCgEIAAgEIgCgEIgBgDIgCgEIgCgEIgCgEIgBgEIgCgDIAAgEIgCgEIgBgEIgCgDIAAgEIgCgEIgCgEIAAgEIAAgDIgBgEIgBgEIgDgEIgBgEIgCgDIgCgEIAAgEIAAgEIAAgDIgBgEIgBgEIgBgEIgCgEIgBgDIgBgEIgBgEIgCgEIAAgEIAAgDIAAgEIAAgEIgBgEIgBgEIgCgDIgBgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIgBgEIAAgEIgDgEIgBgDIAAgEIAAgEIAAgEIAAgEIgBgDIAAgEIgDgEIgBgEIAAgLIAAgPIAAgMIAAgLIAAgLIAAgMIAAgLIAAgLIAAgMIAAgLIAAgLIABgDIADgEIAAgEIABgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIADgEIABgEIABgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIABgEIADgEIAAgEIABgEIAAgDIAAgEIAAgEIAAgEIACgEIABgDIABgEIABgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIACgDIABgEIABgEIABgEIAAgEIACgDIACgEIAAgEIABgEIAAgDIAAgEIAAgEIAAgEIADgEIABgDIABgEIACgEIAAgEIABgEIABgDIACgEIABgEIACgEIAAgEIACgDIABgEIACgEIAEgEIADgDIABgEIACgEIAAgEIACgEIABgDIADgEIABgEIACgEIACgEIACgDIABgEIACgEIABgEIACgEIADgDIACgEIADgEIADgEIACgDIADgEIABgEIACgEIACgEIACgDIABgEIADgEIABgEIADgEIACgDIADgEIACgEIADgEIACgEIACgDIACgEIADgEIACgEIADgDIABgEIABgEIACgEIADgEIAEgDIADgEIABgEIACgEIACgEIACgDIADgEIACgEIADgEIACgEIACgDIABgEIACgEIADgEIABgDIADgEIADgEIADgEIABgEIADgDIABgEIADgEIACgEIADgEIACgDIADgEIABgEIACgEIACgEIACgDIACgEIACgEIABgEIADgDIABgEIADgEIABgEIAEgEIADgDIAEgEIAEgEIAEgEIACgEIADgDIABgEIAEgEIACgEIADgEIABgDIAEgEIADgEIACgEIABgDIAEgEIADgEIACgEIABgEIADACIAIADIAIAEIAHAEIAGAEIAEAEIAEADIADAEIAFAEIAIAEIAEAEIAEADIADAEIAEAEIAEAEIAIADIAIADIACABIACADIAEAEIAEADIAEAEIADAEIAHAEIAGAEIADADIABAEIACAEIAEAEIAEADIAHAEIAFAEIACAEIACAEIADADIAEAEIABAEIACAEIADAEIAEADIADAEIAEAEIAEAEIAEAEIABADIADAEIACAEIAEAEIAFADIAGAEIACAEIACAEIAEAEIACADIACAEIACAEIAEAEIADAEIABADIACAEIADAEIABAEIABAEIACADIAAAEIACAEIADAEIADADIAEAEIADAEIABAEIADAEIABADIABAEIADAEIABAEIADAEIACADIADAEIACAEIADAEIABAEIABADIADAEIABAEIADAEIACADIABAEIADAEIABAEIABAEIADADIABAEIADAEIACAEIADAEIABADIABAEIACAEIACAEIABAEIADADIACAEIACAEIABAEIABADIACAEIABAEIACAEIACAEIABADIACAEIAAAEIACAEIABAEIACADIACAEIACAEIABAEIAAAEIAAADIACAEIABAEIADAEIABADIACAEIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIABAEIABADIADAEIAAALIAAAXIAAAXIAAATIAAAPIAAATIAAATIAAAPIAAALIAAAPIgCADIgCAEIAAAEIgBAEIAAAEIAAADIAAAEIgDAEIgBAEIgBAEIAAADIgDAEIgBAEIgCAEIAAADIAAAEIAAAEIgBAEIgBAEIgBADIgCAEIgBAEIgBAEIgBAEIgCADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIgCAEIgBAEIgCADIAAAEIgCAEIgBAEIgCAEIAAADIgCAEIgCAEIgBAEIgCAEIgCADIgCAEIgDAEIAAAEIgBAEIAAADIgBAEIgBAEIgCAEIgBADIgBAEIgBAEIgCAEIgCAEIgDADIgBAEIgEAEIgCAEIgDAEIgBADIgDAEIgBAEIgBAEIgDAEIgCADIgDAEIgEAEIgDAEIgDADIgDAEIgDAEIgGAEIgDAEIgDADIgCAEIgEAEIgGAEIgEAEIgEADIgEAEIgFAEIgHAEIgEADIgHAEIgGAEIgEAEIgDAEIgHADIgGAEIgEAEIgHAEIgGAEIgFADIgHAEIgIAEIgFAEIgFAEIgHADIgIAEIgHAEIgHAEIgJAEIgHADIgFAEIgEAEIgEAEIgHADIgIAEIgGAEIgJAEIgIAEIgFADIgFAEIgHAEIgIAEIgIAEIgGADIgJAEIgHAEIgIACIgIADIgHACIgIADIgHADIgEABIgGACIgEAEIgHADIgHACIgIADIgHACIgMAEIgJABIgBgBgANmioIgCgEIgBgEIgDgEIgBgDIgDgEIgCgEIgEgEIgBgEIgDgDIgCgEIgEgEIgEgEIgCgDIgCgEIgCgEIgCgEIgCgEIgDgDIgDgEIgEgEIgDgEIgBgEIgCgDIgCgEIgCgEIgDgEIgFgEIgCgDIgDgEIgBgEIgDgEIgDgDIgEgEIgEgEIgEgEIgEgEIgDgDIgDgEIgCgEIgDgEIgDgEIgDgDIgDgEIgCgEIgDgEIgCgEIgEgDIgEgEIgDgEIgBgEIgCgDIgEgEIgEgEIgCgEIgDgEIgCgDIgDgEIgEgEIgEgEIgDgEIgEgDIgEgEIgEgEIgEgEIgCgEIgBgDIgDgEIgFgEIgGgEIgFgDIgEgEIgEgEIgEgEIgCgEIgDgDIgCgEIgDgEIgFgEIgCgEIgCgDIgCgEIgDgEIgDgEIgEgEIgEgDIgEgEIgEgEIgBgEIgCgDIgDgEIgEgEIgBgEIgCgEIgDgDIgFgEIgBgEIgCgEIgBgEIgCgDIgCgEIgCgEIgBgEIgDgEIgBgDIgBgBIAFABIANACIAHACIADABIAIACIAFACIAFACIAFADIAGACIAFADIAFADIAFACIAGADIAFACIAHACIACACIAGACIAFADIACADIAFACIAEADIADACIAFADIADACIADADIACADIAFACIAEADIACACIADADIADACIACADIADADIACACIAAADIACACIADADIACADIADACIACADIADACIACADIABACIABADIADADIACACIAAADIACACIADADIACACIACADIACADIABACIACADIACACIACADIABADIACACIACADIACACIABADIABACIABADIACADIABACIABADIACACIABADIACACIABADIACADIACACIABADIABACIABADIACADIACACIADADIACACIABADIACACIACADIACADIABACIACADIABACIABADIABACIABADIACADIACACIABADIABACIAAADIABADIABACIABADIABACIABADIABACIABADIABADIABACIACADIAAACIABADIAAACIACADIABADIACACIABADIAAACIAAADIAAADIABACIACADIAAACIAAADIABACIABADIABADIAAACIABADIABACIABADIABACIAAADIABADIAAACIABADIABACIAAADIAAADIAAACIABADIABACIABADIABACIAAADIABADIAAACIABADIABACIAAADIAAACIAAADIAAADIABACIAAADIACACIABADIAAADIAAACIACADIABACIAAADIAAACIAAABIgBgDg");
	this.shape_4.setTransform(93.2,147.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACzRzIgLgCIhagDIgBAAIgKgDIgxgCIgMgCIgSgDIgLgDIgYgCIgMgDIgNgCIgMgDIgJgCIgLgDIgFgCIgKgDIgFgCIgKgDIgFgCIgKgDIgIgEIgKgDIgLgEIgIgEIgEgDIgKgCIgFgDIgKgCIgIgEIgJgEIgDgCIgEgBIgFgCIgMgCIgHgEIgEgEIgHgEIgIgEIgGgDIgDgDIgBgBIgJgDIgIgDIgCgDIgBgBIgFgBIgEACIgHADIgGACIgFAEIgHAEIgIADIgIAEIgHAEIgFADIgEABIgIABIgIACIgMADIgJADIgLACIgJADIgLACIh0AAIgMgCIgdgDIgLgCIgJgDIgLgCIgFgDIgLgCIgHgEIgDgDIgBgBIgJgDIgFgCIgKgDIgIgDIgIgEIgEgEIgEgEIgEgEIgEgDIgCgEIgDgEIgBgEIgBgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgHIAAgEIAAgEIAAgEIAAgDIABgEIABgEIADgEIABgEIADgDIABgEIABgEIAAgEIADgEIACgDIACgEIhFgDIgLgCIgFgDIgKgCIgOgDIgLgCIgJgDIgMgCIgHgEIgJgEIgEgEIgEgDIgCgEIgBgEIgCgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgIIAAgDIAAgEIAAgEIACgEIABgEIACgDIACgEIACgEIADgEIABgEIABgDIABgEIAAgEIACgEIAAgEIACgDIADgEIAEgEIADgEIAEgDIAEgEIAEgEIAHgIIAIgHIAHgIIAEgEIAMgLIADgEIAEgEIAFgDIAIgEIAEgEIACgEIgJgCIgLgDIgOgCIgLgDIgJgCIgMgDIgHgEIgJgDIgEgEIgGgEIgGgEIgEgEIgEgDIgEgEIgEgEIgDgEIgEgEIgEgDIgEgEIgDgEIgDgEIgFgDIgEgEIgEgEIgDgEIgEgEIgEgDIgEgEIgEgEIgDgEIgDgEIgBgDIgBgEIgCgEIgCgEIgDgEIgCgDIAAgEIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgIIAAgEIAAgDIAAgIIAAgEIABgDIABgEIADgEIADgEIAEgEIAEgDIAEgEIADgEIAEgEIAEgEIAGgDIAHgEIADgEIAEgEIAHgDIAHgEIAIgDIAHgCIAIgDIAHAAIAAgBIB1AAIALACIAOADIALADIAJACIAMADIAFACIAKADIAFACIAKADIAFACIAKADIAIADIAGADIABABIAJADIAAgBIAAgbIAAgeIAAgMIABgDIACgEIACgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIABgEIAAgDIADgEIABgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIABgEIACgDIACgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIABgEIACgDIABgEIABgEIAAgEIAAgEIAAgDIAAgEIABgEIAAgEIACgEIABgDIABgEIAAgEIAAgEIAAgEIACgDIABgEIABgEIABgEIAAgDIACgEIAAgEIACgEIABgEIACgDIABgEIABgEIABgEIAAgEIAAgDIAAgEIACgEIABgEIACgEIACgDIABgEIADgEIABgEIACgDIADgEIACgEIACgEIABgEIABgDIADgEIABgDIACgEIACgEIABgDIAAgEIADgEIACgEIAEgEIABgDIADgEIACgEIABgEIADgDIABgEIABgEIADgEIAEgEIACgDIACgEIACgEIABgEIADgEIACgDIACgEIACgEIADgEIAEgEIACgDIABgEIACgEIABgEIACgDIACgEIACgEIADgEIABgEIACgDIADgEIAEgEIAEgEIABgEIACgDIADgEIABgEIADgEIACgDIADgEIABgEIAAgEIADgEIACgDIAEgEIABgEIADgEIACgEIAEgDIABgEIADgEIACgEIACgEIACgDIADgEIACgEIADgEIACgDIABgEIACgEIACgEIABgEIADgDIACgEIACgEIACgEIACgEIABgDIACgEIAEgEIAEgEIAEgEIADgDIACgEIACgEIADgEIAEgDIADgEIADgEIABgEIADgEIADgDIADgEIABgEIADgEIABgEIADgDIACgEIACgCIgBgBIgBgDIgBgEIAAgEIAAgEIAAgEIABgDIABgEIADgEIACgEIAEgEIAIgDIALgCIAAgBIAGACIAAgBIAEgDIACgEIACgEIADgEIADgEIAEgDIAIgIIAEgEIADgEIAEgDIAEgEIAHgIIAIgHIAEgEIABgEIADgEIACgDIAEgEIAEgEIAEgEIAFgEIACgDIAEgEIAEgEIADgEIAEgEIAEgDIAEgEIACgEIADgEIACgDIADgEIAEgEIAEgEIAFgEIACgDIAEgEIAGgEIAHgEIADgEIAEgDIAEgEIAEgEIADgEIAEgEIAEgDIAFgEIAGgEIAFgEIAEgDIAFgEIADgEIAEgEIAGgEIAGgDIAEgEIAEgEIACgBIgDAAIgMgDIgJgCIgLgDIgIgDIgGgDIgBgBIgKgDIgIgEIgJgEIgHgDIgIgEIgGgEIgJgEIgIgDIgFgEIgDgEIgEgEIgEgEIgGgDIgHgEIgDgEIgDgEIgCgEIgDgDIgDgEIgDgEIgEgEIgDgDIgBgEIgCgEIgEgEIgDgEIgBgDIgBgEIAAgEIAAgEIAAgHIAAgIIAAgIIAAgHIAAgLIAAgMIAAgLIAAgIIAAgEIABgDIABgEIADgEIAEgEIADgEIAEgDIAEgEIAEgEIAEgEIAHgDIAFgEIAFgEIAIgEIAEgEIAHgDIAMgEIAHgDIAIgCIAHgDIAIgCIAHgDIAIgBIATgDIALgCIAOgDIAMgCIAYgDIALgCIAFgDIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIABgEIACgDIACgEIABgEIACgEIACgEIAEgDIAEgEIADgEIAEgEIAFgEIAHgDIAGgDIAEgBIAIgBIAjAAIALACIATADIAMACIAIADIAMACIAFADIAKACIAIAEIAHAEIAIABIABgCIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIABgEIAAgEIADgEIABgEIABgDIAAgEIADgEIACgEIAEgEIAEgDIACgEIACgEIACgEIAEgDIAEgEIAEgEIADgEIAEgEIAEgDIAGgDIAEgBIAIgBIAAAAIAyAAIAMACIAFADIAKACIAGAEIAFAEIAEADIAFAEIAGAEIAFAEIAEAEIAEADIAEAEIADAEIAEAEIAEAEIADADIACAEIADAEIACAEIAEAEIAHADIAGAEIADAEIAEAEIAEADIAEAEIADAEIADAEIADAEIACADIADAEIACAEIADAEIACAEIABADIADAEIABAEIADAEIABAEIADADIABAEIACAEIACAEIACADIABAEIADAEIABAEIADAEIAAADIABAEIABAEIADAEIAAAEIABADIABAEIADAEIAAAEIABAEIAAADIABAEIACAEIABAEIABADIABAEIACAEIABAEIABAEIABADIACAEIABAEIABAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIADADIABAEIABAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIACADIABAEIABAEIABAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIgBAEIgBAEIgBACIABADIABADIABAEIACAEIABAEIABAEIABADIACAEIABAEIABAEIABAEIAAADIAAAEIAAAEIAAAEIACAEIABADIABAEIABAEIACAEIABADIABAEIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACAEIABAEIACADIAAAEIAAAIIAAAEIAAADIAAAEIAAAIIAAAHIAAAMIAAALIAAALIAAAQIAAALIABAEIACAEIAAADIACAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIACAEIABADIACAEIAAAEIAAAEIAAAEIABADIABAEIADAEIABAEIADADIAAAEIABAEIAAAEIABAEIABADIACAEIABAEIABAEIABAEIACADIABAEIABAEIABAEIACAEIABADIAAAEIAAAEIAAAHIAAAEIAAAEIAAAEIAAAEIAAAHIAAAIIAAAHIAAAIIAAAFIAMAAIAIABIAMADIAIABIAEACIAHACIAGABIAHACIAFADIAGACIAFADIAFACIAFADIAFACIAFADIAJADIAFACIAFADIAFACIAGADIAEADIADACIAFADIAEACIADADIAFACIAFADIAEADIADACIACADIAFACIAEADIACACIADADIADADIACACIADADIACACIACADIABACIACADIACADIADACIACADIADACIADADIACADIADACIABADIACACIACADIACACIADAGIACACIABADIAEAFIADAFIAEAFIACADIABACIAEAGIABACIABADIACACIABADIACACIAAADIACADIADACIABADIABACIACADIADACIABADIABADIACACIABADIABACIABADIABADIACACIACADIADACIACADIACACIABADIABADIACACIABADIACACIACADIACACIABADIAAADIABACIABADIABACIACADIABADIABACIAAADIABACIABADIACACIAAACIABADIACACIACADIABACIABADIAAACIABADIABADIACACIABADIABACIAAADIABADIAAACIABADIABACIABADIABACIAAADIAAADIABACIABADIABACIAAADIAAACIABADIACADIAAACIABADIAAACIABADIAAADIABACIABADIAAACIAAADIACACIABADIABADIAAACIAAADIAAACIACADIAAACIABADIAAADIAAACIAAADIAAACIABADIACADIAAACIAAADIABACIACADIAAACIABADIAAADIAAACIAAADIAAACIAAADIAAACIAAADIAAADIAAACIABADIABACIAAADIABADIAAACIAAADIAAACIABADIACACIAAADIABADIAAACIAAADIAAACIAAADIAAACIABADIAAADIABACIABADIAAACIAAADIAAADIAAAFIAAAFIAAAFIAAAFIAAAFIAAAFIAAAGIAAAFIAAADIACADIABAEIADAEIABADIABAEIACAEIAAAEIAAADIACAEIACAEIABAEIAAAEIACADIACAEIACAEIABAEIADAEIABADIADAEIABAEIACAEIACAEIACADIACAEIACAEIABAEIADADIAAAEIABAEIABAEIADAEIAAADIABAEIAAAEIAAAEIAAAEIADADIABAEIABAEIAAAEIAAADIAAAEIABAEIACAEIABAEIABADIAAAEIAAAMIAAADIAAAMIAAAPIAAATIAAAXIAAAWIAAAbIAAAPIgBAEIgBAEIgCADIgBAEIAAAEIAAAEIAAAEIgBADIgBAEIgDAEIAAAEIAAADIgBAEIgBAEIgCAEIgBAEIAAADIgBAEIAAAEIgDAEIgBAEIAAADIAAAEIgBAEIgBAEIgDAEIAAADIgBAEIgCAEIgCAEIgBADIgDAEIgBAEIAAAEIAAAEIgBADIgCAEIgCAEIgBAEIgDAEIgBADIgBAEIAAAEIgDAEIgBAEIgCADIAAAEIgCAEIgBAEIgDADIgBAEIgDAEIgCAEIgDAEIAAADIgCAEIgBAEIgDAEIgBAEIgDADIgCAEIgEAEIgBAEIgDAEIgCADIgEAEIgBAEIgDAEIgBADIgDAEIgCAEIgDAEIgEAEIgDADIgEAEIgEAEIgEAEIgEAEIgDADIgEAEIgEAEIgFAEIgEAEIgCADIgDAEIgCAEIgDAEIgCADIgEAEIgEAEIgEAEIgEAEIgDADIgEAEIgEAEIgEAEIgGAEIgGADIgGAEIgGAEIgHAEIgHACIgGADIgEAEIgEADIgDAEIgHAEIgGACIgJADIgGAEIgJAEIgIADIgFAEIgFAEIgHAEIgIADIgMAEIgIAEIgIAEIgHAEIgNADIgHAEIgFADIgEABIgIABIgJADIgMAEIgIADIgFADIgEABIgHABIgJADIgNAEIgGACIgIACIgIACIgNAEIgGACIgIACIgJACIgKAEIgFAEIgFACIgEACIgHABIgJACIgMADIgZAFIgOADIgLACIgYACIgMADIgSADIgMACIhgAAgAENsKIgGACIgIABIgJADIgHADIgHADIgJADIgGACIgJADIgHAEIgIADIgEAEIgGAEIgGACIgHADIgFAEIgHAEIgEADIgGAEIgHAEIgFAEIgFADIgGAEIgEAEIgFAEIgGAEIgFADIgFAEIgHAEIgFAEIgDAEIgGADIgGAEIgFAEIgEAEIgFADIgGAEIgFAEIgEAEIgEAEIgDADIgEAEIgEAEIgFAEIgFACIgEACIgGACIgEAEIgEAEIgDADIgDAEIgEAEIgFAEIgGAEIgGADIgFAEIgGAEIgFAEIgEAEIgEADIgDAEIgEAEIgHAEIgGAEIgEADIgDAEIgHAEIgGAEIgEADIgEAEIgDAEIgEAEIgEAEIgEADIgEAEIgFAEIgDAEIgDAEIgEADIgEAEIgDAEIgEAEIgEAEIgEADIgDAEIgEAEIgEAEIgEADIgBAEIgDAEIgCAEIgEAEIgFADIgFAEIgFAEIgDAEIgCAEIgDADIgDAEIgEAEIgEAEIgDAEIgBADIgCAEIgEAEIgEAEIgGADIgHAEIgDAEIgDAEIgBACIAGADIAIAEIAHADIAFAEIAEAEIAEAEIAEAEIAGADIAGAEIAEAEIAEAEIAEAEIAEADIADAEIAJAEIAGAEIAHAEIAEADIADAEIAEAEIAFAEIAGAEIAGADIADAEIAEAEIAEAEIAEADIAEAEIADAEIAEAEIAEAEIAEADIADAEIAEAEIAEAEIADAEIABADIACAEIAEAEIADAEIACADIAFAEIAFAEIADAEIABAEIADADIADAEIAEAEIAEAEIAEAEIAEADIADAEIADAEIACAEIACAEIADADIADAEIADAEIABAEIAEADIACAEIADAEIAAAEIACAEIACADIACAEIABAEIACAEIAAAEIACADIAEAEIAEAEIACAEIADADIABAEIADAEIABAEIACAEIACADIACAEIADAEIACAEIADAEIACADIACAEIACAEIABAEIADAEIABADIADAEIABAEIADAEIABADIACAEIACAEIACAEIABAEIADADIAEAEIACAEIABADIADAEIAAADIABAEIACAEIACAEIABAEIADADIABAEIADAEIABAEIABADIABAEIACAEIABAEIACAEIACADIACAEIACAEIACAEIABAEIACADIAAAEIACAEIABAEIACAEIAAADIACAEIABAEIACAEIAAADIACAEIABAEIACAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIABADIACAEIAAAEIACAEIAAAPIAAAPIAAATIAAAXIAAAWIAAAXIAAAbIAAAeIAAAeIgCAEIAAAEIgCAEIgBAEIAAADIgCAEIgBAEIgCAEIAAADIAAAEIgCAEIgBAEIgCAEIAAADIAAAEIAAAEIgCAEIAAAEIgCADIgBAEIAAAEIAAAEIgCADIgBAEIgCAEIAAAEIAAAEIAAADIAAAEIAAAEIgCAEIgBAEIgDADIAAAEIgBAEIgBAEIgDAEIAAADIgBAEIgBAEIgDAEIgBADIgCAEIgCAEIgBAEIAAAEIgCADIgCAEIAAAEIAAAEIgBAEIgBADIgDAEIgBAEIgDAEIgBAEIgCADIgCAEIgCAEIgBAEIgDADIgBAEIgDAEIgBAEIgDAEIgBADIgCAEIgDAEIgEAEIgBAEIgCADIgDAEIgEAEIgEAEIgDAEIgDADIgCAEIgDAEIgCAEIgEADIgEAEIgBAEIgDAEIgCAEIgEADIgEAEIgGAEIgGAEIgFAEIgHADIgEAEIgEAEIgFAEIgHAEIgEADIgGAEIgHAEIgEAEIgDADIgEAEIgFAEIgIAEIgHAEIgFADIgFAEIgIAEIgEAEIgGADIgIAEIgHAEIgEAEIgGAEIgHACIgJADIgGAEIgFADIgGAEIgFAEIgFAEIgIAEIgIADIgHAEIgIAEIgHAEIgEADIgGAEIgIAEIgIAEIgHAEIgIADIgHAEIgIAEIgHAEIgNAEIgGACIgJADIgIADIgHAEIgIAEIgNAEIgHAEIgFACIgEABIgBABIAFADIAGAEIAFAEIAEAEIACADIAEAEIAFAEIAHAEIAGADIAEAEIAHAEIAFAEIAFAEIAIADIAIAEIAHAEIAGAEIADACIAJADIAGAEIAFADIAHAEIAHAEIAGAEIAEACIAEABIALADIAIAEIAIAEIAHADIANAEIAFADIAKACIAHAEIAIAEIAFAEIAPADIAFADIAKACIAFADIALADIAFACIAKADIAJACIALADIAOACIALADIAYACIAMACIARAEIAMACIAsACIALADIBfACIAMADIBYAAIALgDIAOgCIAMgDIAYgCIALgCIATgEIALgCIAJgCIAOgEIAFgEIAGgCIAEgCIAIgCIAHgDIAIgBIAJgDIALgDIAIgDIAHgBIAJgDIALgDIAIgDIAIgBIAIgDIAMgEIAHgCIAIgDIAIgCIAHgDIAIgDIAGgDIAEgBIAHgDIAIgDIAJgEIAHgEIAMgEIAHgEIAEgDIAHgEIAHgEIAIgDIAGgCIAEgEIAGgCIAEgCIAGgCIAEgEIAEgEIAGgDIAIgEIAHgEIAEgEIAEgEIAFgDIAHgEIAEgEIAGgEIAHgEIACgDIACgEIACgEIAEgEIAEgEIACgDIADgEIACgEIADgEIAEgEIAFgDIADgEIADgEIAEgEIAFgDIAEgEIACgEIAEgEIAEgEIABgDIACgEIADgEIAEgEIABgEIADgDIACgEIAEgEIABgEIADgEIABgDIABgEIAAgEIADgEIACgDIAEgEIABgEIADgEIABgEIABgDIAAgEIADgEIABgEIABgEIAAgDIADgEIACgEIACgEIABgEIABgDIAAgEIACgEIAAgEIACgDIADgEIABgEIABgEIABgEIACgDIABgEIABgEIABgEIAAgEIAAgDIAAgEIACgEIABgEIACgEIAAgDIAAgEIACgEIABgEIABgDIACgEIAAgEIABgEIAAgEIACgDIACgEIAAgEIAAgEIABgEIABgDIADgEIAAgMIAAgHIAAgIIAAgHIAAgMIAAgLIAAgLIAAgMIAAgLIAAgLIAAgMIAAgHIgDgEIgBgEIgBgEIAAgEIAAgDIgCgEIgCgEIAAgEIgBgEIAAgDIAAgEIAAgEIAAgEIgCgDIgCgEIAAgEIgCgEIgBgEIgCgDIgCgEIgCgEIgBgEIgCgEIgCgDIgBgEIgDgEIgCgEIgCgDIgCgEIgCgEIgBgEIgCgEIgCgDIgBgEIgBgEIgBgEIgCgEIgBgDIAAgEIAAgEIgCgEIgCgEIgBgDIgCgEIgDgEIgDgEIgCgDIgDgEIgBgEIgCgEIgDgEIgBgDIgDgEIgBgEIgBgEIgBgEIgDgDIgDgEIgCgEIgBgEIgDgEIgBgDIgBgEIAAgEIgDgEIgBgDIgBgEIgDgEIgBgEIgDgEIgCgDIAAgEIgCgEIgCgEIgDgEIgCgDIgBgEIgDgEIgCgEIgCgEIgDgDIgEgEIgDgEIgCgEIgCgDIgCgEIgDgEIgBgEIgEgEIgDgDIgEgEIgEgEIgDgEIgBgEIgCgDIgEgEIgDgEIgBgEIgBgEIgDgDIgCgEIgDgEIgEgEIgDgDIgEgEIgEgEIgEgEIgEgEIgDgDIgDgEIgCgEIgCgEIgCgEIgBgDIgDgEIgEgEIgEgEIgDgEIgDgDIgCgEIgDgEIgCgEIgEgCIgEgEIgDgEIgFgEIgDgEIgEgDIgDgEIgBgEIgCgEIgIgHIgEgEIgHgIIgIgHIgEgEIgEgEIgHgHIgIgIIgHgIIgDgDIgCgEIgCgEIgDgEIgEgEIgEgDIgCgEIgCgEIgCgEIgEgDIgEgEIgEgEIgCgEIgDgEIgCgDIgDgEIgEgEIgDgEIgDgEIgBgDIgBgEIgDgEIgBgEIgBgEIgCgDIgDgEIgDgEIgBgEIgCgDIAAgEIgCgEIgBgEIgCgEIgCgDIgBgEIgCgEIAAgEIAAgEIAAgDIgBgEIgCgEIAAgEIgCgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgHIAAgIIAAgHIAAgIIAAgEIAAgEIgCgDIgBgEIgCgEIAAgEIgCgDIgCgEIgBgEIgCgEIgCgEIgBgDIAAgEIAAgEIAAgEIgBgEIgDgDIgBgEIgCgEIgCgEIgBgEIAAgDIAAgEIgBgEIgDgEIAAgDIgBgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIgDgEIgBgEIgBgDIAAgIIAAgHIAAgIIAAgIIAAgHIAAgMIAAgHIAAgIIAAgHIAAgIIAAgLIAAgIIgBgEIgDgDIAAgEIgBgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIAAgEIgBgEIgCgEIgBgEIgBgDIgBgEIgCgEIgBgEIgBgEIAAgDIAAgEIAAgEIAAgEIgBgDIgCgEIgBgEIgBgEIAAgEIAAgDIgDgEIgBgEIgBgEIgDgEIgBgDIgBgEIgCgEIgDgEIgDgEIgBgDIgDgEIgEgEIgDgEIgEgDIgEgEIgEgEIgFgEIgHgEIgEgDIgGgEIg0AAIgMACIgLgCIgFgDIgIAAIgCACgAteGdIgGAEIgFADIgGAEIgGAEIgDAEIgEAEIgEADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIADAEIACAEIABAEIADAEIACADIAGAEIACAEIADAEIAFAEIAFADIACAEIAEAEIAFAEIADADIAFAEIACAEIAEAEIAFAEIADADIADAEIAFAEIAEADIAEABIAeAHQAZAGAaAEIAoAIIBDAOIAGAEIAGAEIACADIABAEIADAEIAAAEIABADIAAAEIgBAEIgBAEIgCAEIgCADIgDAEIgFAEIgHAEIgIAEIgLACIgiADIgMACIgJADIgHAEIgHADIgIAEIgFAEIgDAEIgFADIgIAEIgDAEIgEAEIgEAEIgFADIgFAEIgDAEIgCAEIgEAEIgEADIgDAEIgEAEIgEAEIgEADIgEAEIgCAEIAAAEIgDAEIgBADIgBAEIAAAEIgDAEIgBAEIgDADIgBAEIgBAEIAAAEIAAAEIAAADIAGAEIAOADIAMACIAFADIAKACIBuADIALACIAGAEIAFAEIADAEIABADIADAEIAAAEIABAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIgBADIAAAEIgDAEIgBAEIgDADIgDAEIgDAEIgBAEIgDAEIgEADIgCAEIgBAEIgCAEIAAAEIgCADIgBAEIgDAEIgBAEIgBADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIACACIAJADIAIAEIAIADIAHAEIAMAEIAJACIALADIAeADIALACIBnAAIAMgDIAJgCIALgDIAJgCIALgEIAIgCIAGgDIAEgEIADgBIgGgCIgFgEIgDgEIgEgEIgDgEIgFgDIgFgEIgHgEIgEgEIgEgEIgDgDIgBgEIgCgEIgEgDIgDABIgHABIgfAAIgLgDIgHgDIgEgEIgDgEIgCgEIgCgEIgBgDIAAgEIAAgEIAAgEIABgEIACgDIACgEIAEgEIAEgEIAEgDIAGgEIACgBIgDgDIgEgEIgEgEIgEgDIgCgEIgCgEIgBgEIgCgEIgDgDIgBgEIgDgEIgBgEIgCgEIgCgDIgCgEIgEgEIgDgEIgBgDIgBgEIAAgEIgDgEIgBgEIgBgDIAAgEIgDgEIgBgEIgBgEIgDgDIgCgEIgDgEIgCgEIgDgEIgBgDIgDgEIgCgEIgBgEIgDgDIgBgEIgBgEIAAgEIgDgEIgBgDIgBgEIgDgEIgBgEIgCgEIgCgHIgBgEIgCgEIgBgEIgBgDIgDgIIgCgHIgDgIIgCgIIgDgHIAAgEIAAgEIAAgEIgBgDIgDgEIAAgEIgBgEIAAgEIgBgDIgBgEIgCgEIgBgEIAAgDIAAgEIAAgEIgBgEIgDgEIAAgDIgBgEIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIAAgDIgBgEIgBgEIgCgEIgBgDIAAgEIAAgEIAAgEIAAgEIgBgDIgBgEIgCgEIgBgEIAAgHIAAgIIAAgEIgDgBIgDgEIgEgEIgFgDIgFgDIgCgBIgKgDIgHgDIgGgDIgCgBIgKgDIgFgCIgKgDIgFgCIgKgDIgJgCIgLgDIgOgDIgMgCIhnAAIgIAEgAkblGIgDADIgCAEIgEAEIgBAEIgDAEIgCADIgEAEIgCAEIgCAEIgDAEIgDADIgCAEIgCAEIgDAEIgDAEIgEADIgEAEIgEAEIgEAEIgBADIgCAEIgCAEIgCAEIgBAEIgDADIgBAEIgDAEIgBAEIgDAEIgBADIgCAEIgDAEIgCAEIgDAEIgCADIgCAEIgCAEIgCAEIgCADIgEAEIgCAEIgCAEIgCAEIgDADIgBAEIgBAEIgDAEIgCAEIgDADIgCAEIgDAEIgBAEIgDAEIgBADIgCAEIgEAEIgEAEIgBADIgBAEIgCAEIgCAEIgDAEIgCADIgDAEIgBAEIgDAEIgCAEIgDADIgCAEIgDAEIgCAEIgCADIgCAEIgBAEIgDAEIgBAEIgDADIgBAEIgCAEIgDAEIgCAEIgDADIgDAEIgCAEIgDAEIgBAEIgBACIgBAEIgDAEIgBAEIgDADIgBAEIgCAEIgCAEIgBAEIAAADIgDAEIgBAEIgCAEIgEAEIgDADIgBAEIgBAEIAAAEIgDAEIgBADIgBAEIgBAEIgCAEIAAADIgBAEIgBAEIgCAEIgCAEIAAADIAAAEIAAAEIAAAEIgBAEIAAADIgDAEIgBAEIAAAEIgBAEIgCADIgBAEIgBAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIgBADIgCAEIgBAEIgBAEIAAAEIAAADIAAAEIAAAEIgBAEIAAAEIgDADIgBAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIgCAEIgBADIgCAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIgCAEIAAADIgCAEIgBAEIAAALIAAAMIAAALIAAALIAAAMIAAALIAAAMIAAALIAAALIAAAPIAAAMIABAEIACADIAAAEIACAEIAAAEIAAAEIAAADIAAAEIABAEIACAEIAAADIACAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIABAEIABAEIACAEIABAEIAAADIAAAEIAAAEIAAAEIABADIABAEIACAEIABAEIABAEIABADIACAEIABAEIAAAEIAAAEIAAADIABAEIADAEIABAEIACAEIACADIABAEIAAAEIAAAEIABADIADAEIAAAEIABAEIABAEIADADIAAAEIABAEIABAEIADAEIABADIADAEIABAEIABAEIAAAEIADADIABAEIADAEIABAEIAEADIADAEIADAEIACAEIADAEIABADIABAEIAAAEIADAEIABAEIACADIAAAEIACAEIABAEIADAEIABADIADAEIABAEIACAEIACADIACAEIABAEIACAEIACAEIAEADIAEAEIACAEIADAEIACAEIADADIAEAEIAEAEIADAEIADAEIABABIAJgBIALgEIAIgDIAHgCIAIgDIAGgCIAEgEIAGgDIAEgBIAIgCIAHgDIAIgDIAIgCIAHgDIAIgDIAJgEIAGgEIAHgEIAIgEIAIgDIAFgEIAFgEIAHgEIAJgDIAHgEIAHgEIAIgEIADgEIAEgDIAFgEIAIgEIAJgEIAGgDIAIgEIAHgEIAIgEIAFgEIAFgEIAHgDIAIgEIAFgEIAFgEIAIgDIADgEIAHgEIAGgEIAEgEIAEgDIAGgEIAGgEIAEgEIAIgEIAFgDIADgEIAEgEIAEgEIAGgEIAEgDIADgEIACgEIAEgEIAFgDIAEgEIACgEIAEgEIAEgEIAEgDIACgEIADgEIACgEIACgEIABgDIACgEIACgEIABgEIADgEIADgDIACgEIACgEIADgEIABgDIABgEIACgEIABgEIABgEIABgDIACgEIAAgEIABgEIAAgEIACgDIADgEIABgEIADgEIABgEIABgDIADgEIAAgEIABgEIABgDIADgEIAAgEIABgEIABgEIADgDIAAgEIAAgEIAAgEIAAgEIAAgDIAAgEIABgEIABgEIACgEIABgDIABgEIABgEIACgEIABgDIAAgEIAAgEIAAgEIABgEIACgDIACgEIAAgEIABgEIACgEIACgDIAAgEIAAgEIAAgEIABgDIAAgEIADgEIABgEIAAgPIAAgLIAAgQIAAgSIAAgTIAAgQIAAgTIAAgWIAAgXIAAgLIgCgEIgCgEIgBgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgDIgBgEIgDgEIgBgEIgCgEIgCgDIgBgEIAAgEIAAgEIgBgEIgDgDIgBgEIgDgEIgBgEIgBgEIAAgDIgDgEIgBgEIgBgEIgDgDIgBgEIgBgEIgBgEIgCgEIgBgDIgDgEIgCgEIgBgEIgDgEIgBgDIgBgEIgCgEIgCgEIgDgEIgCgDIgBgEIgDgEIgBgEIgCgCIgCgEIgBgEIgDgEIgBgEIgCgDIgCgEIgBgEIgCgEIgCgEIgDgDIgCgEIgDgEIgCgEIgCgEIgCgDIgDgEIgBgEIgCgEIgCgDIgCgEIgEgEIgEgEIgCgEIgDgDIAAgEIgBgEIgBgEIgCgEIgCgDIgDgEIgBgEIgCgEIgEgDIgDgEIgBgEIgDgEIgDgEIgDgDIgBgEIgGgEIgGgEIgDgEIgDgDIgCgEIgCgEIgDgEIgEgEIgEgDIgEgEIgEgEIgCgEIgDgDIgBgEIgEgEIgCgEIgDgEIgBgDIgFgEIgIgEIgDgEIgEgEIgDgDIgBgEIgDgEIgGgEIgGgEIgEgDIgEgEIgEgEIgDgEIgDgCIgBgBIgJgDIgIgEIgDgEIgEgDIgEgEIgEgEIgDgEIgIgEIgFgDIgEgEIgEgEIgDgEIgHgDIgGgEIgJgEIgIgEIgCgBIgBAEgAIljkIACAEIACAEIABAEIADADIABAEIADAEIABAEIABAEIABADIAGAEIACAEIADAEIABADIAEAEIACAEIADAEIABAEIAEADIAEAEIADAEIAEAEIAEAEIACADIADAEIABAEIADAEIAFAEIACADIADAEIACAEIADAEIAEADIADAEIAEAEIAFAEIAHAEIAFADIACAEIABAEIADAEIAEAEIAEADIADAEIAEAEIAEAEIAEADIADAEIADAEIADAEIACAEIADADIADAEIAEAEIADAEIABAEIACADIAEAEIAEAEIADAEIACAEIADACIACAEIAEAEIACAEIADADIADAEIACAEIAEAEIAEAEIADADIAEAEIAEAEIAEAEIACAEIACADIACAEIADAEIAFAEIACAEIADADIABAEIADAEIABAEIACADIAEAEIAEAEIACAEIADAEIABADIADAEIABAEIADAEIADAEIAEADIADAEIACAEIABAEIAEAEIADADIACAEIACAEIACAEIABADIADAEIABADIAAAAIAAgDIAAgCIgBgDIgCgCIAAgDIgBgDIgBgCIgBgDIAAgCIgBgDIAAgCIAAgDIAAgDIAAgCIgBgDIgCgCIAAgDIgBgDIAAgCIgBgDIAAgCIgBgDIgBgCIAAgDIAAgDIAAgCIgBgDIgCgCIAAgDIgBgCIAAgDIAAgDIgBgCIgBgDIgBgCIgBgDIgBgDIgBgCIAAgDIAAgCIAAgDIgCgCIgBgDIgBgDIAAgCIAAgDIgBgCIgCgDIAAgCIgCgDIgBgDIgBgCIAAgDIgCgCIAAgDIgBgDIgCgCIgBgDIgBgCIgBgDIAAgCIgBgDIgBgDIgBgCIgBgDIgBgBIgBgDIgCgCIgBgDIgCgDIgBgCIAAgDIgCgCIgCgDIgCgDIgBgCIgCgDIgCgCIgBgDIgDgCIgDgDIgBgDIgBgCIgBgDIgCgCIgCgDIgBgCIgCgDIgCgDIgBgCIgBgDIgCgCIgBgDIgCgDIAAgCIgBgDIgCgCIgCgDIgBgCIgCgDIgCgDIgCgCIgBgDIgCgCIgCgDIgBgCIgCgDIgDgDIgCgCIgCgDIgBgCIgCgDIgCgDIgCgCIgBgDIgCgCIgCgDIgDgCIgCgDIgDgDIgCgCIgCgDIgBgCIgCgDIgCgCIgDgDIgCgDIgDgCIgDgDIgDgCIgFgDIgDgDIgCgCIgEgDIgFgCIgDgDIgEgCIgEgDIgDgDIgFgCIgFgDIgDgBIgGgCIgGgDIgGgCIgFgDIgFgDIgEgCIgGgDIgFgCIgGgDIgFgBIgHgCIgEgCIgHgCIgNgCIgEAAIAAAAgAAZvFIgCADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIACAEIADADIABAEIACAEIAEAEIADAEIABADIADAEIAAAEIABAEIAAAEIgBADIgCAEIgBAEIgCAEIgDAEIgFADIgFADIgEABIgHABIgxADIgLACIgYADIgMACIgSAEIgVAEIgUAFIgMAEIgIAEIgIADIgDAEIgHAEIgGAEIgEAEIgEADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIADAEIACAEIADAEIACADIADAEIADAEIADAEIAEAEIAGADIAHAEIAEAEIAHAEIAIAEIAHADIAIAEIAHAEIAIAEIANAEIAHADIAHADIAFABIALADIA2ACIAMADIABABIADgDIADgDIAEgEIAEgEIAIgEIAFgEIADgDIAEgEIAIgEIAFgEIAEgDIADgEIAIgEIAFgEIAEgEIAEgDIAHgEIAFgEIAFgEIAHgEIAFgDIAEgEIADgEIAEgEIAJgEIAGgDIAHgEIADgEIAHgCIADgCIAHgCIAEgEIAIgEIAHgDIAHgEIAIgDIAHgCIAIgDIAIgCIAHgEIAHgDIADgBIAIgDIAHgCIAIgBIAJgDIALgEIAIgCIAHgBIAAAAIAVAAIALACIAGAEIAEACIAnACIAMACIAHAEIAIAEIAFAEIAEADIAAgCIAAgEIAAgEIAAgEIAAgDIAAgEIAAgEIAAgEIAAgEIgCgDIgBgEIgBgEIgBgEIgCgDIgBgEIgBgEIgCgEIgBgEIgBgDIgBgEIgCgEIAAgEIAAgEIgCgDIgBgEIgCgEIAAgEIgCgEIgBgDIgCgEIAAgEIgCgEIgBgDIgCgEIgCgEIgCgEIgCgEIgDgDIgBgEIgCgEIgCgEIgCgEIgEgDIgCgEIgCgEIgCgEIgEgEIgEgDIgEgEIgDgEIgHgEIgGgDIgEgEIgCgEIgFgEIgEgEIgDgDIgCgEIgCgEIgDgEIgEgEIgEgDIgEgEIgFgEIgHgEIgEgEIgGgDIgcAAIgEADIgEAEIgEAEIgCAEIgBAEIgDADIgBAEIgBAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAAHIAAAIIAAAEIABAEIACADIAAAEIACAEIAAAEIAAAEIACADIADAEIABAEIACAEIAAAEIACADIAAAEIAAAEIAAAEIAAADIgCAEIgBAEIgCAEIgDAEIgCADIgHAEIgGADIgIABIgFAAIgLgDIgIgDIgDgEIgDgEIgCgEIgDgDIgFgDIgBgBIgKgDIgIgEIgEgDIgCgEIgFgEIgFgEIgIgEIgEgCIgEgBIgFgCIgLgCIgJgCIgLgDIgZgFIgTAAIgDAEg");
	this.shape_5.setTransform(95.7,113.9);

	this.instance_5 = new lib.thight1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(144.3,218.4,1,1,0,0,180,12.7,14.3);

	this.instance_6 = new lib.leg1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(145,240.8,1,1,0,0,180,22.8,26.9);

	this.instance_7 = new lib.leg1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(84.7,243.5,1,1,0,0,180,22.8,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hen2, new cjs.Rectangle(0,0,191.5,270.3), null);


(lib.hen1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.thight1();
	this.instance.parent = this;
	this.instance.setTransform(146.5,216.9,1,1,0,0,0,12.7,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.leg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(145.8,244,1,1,0,0,0,22.8,27);

	this.instance_2 = new lib.wing1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.3,109.4,1,1,0,0,0,66.3,54.6);

	this.instance_3 = new lib.beard2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(73.3,68,1,1,0,0,0,14.5,9.6);

	this.instance_4 = new lib.eye1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(66,52.5,1,1,0,0,0,15.6,11.1);

	this.instance_5 = new lib.body1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(118.5,127.6,1,1,0,0,0,87.5,97.5);

	this.instance_6 = new lib.tail1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(235.4,131,1,1,0,0,0,40.6,49);

	this.instance_7 = new lib.creast();
	this.instance_7.parent = this;
	this.instance_7.setTransform(75.4,22.1,1,1,0,0,0,33.5,22.1);

	this.instance_8 = new lib.beard1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(30.4,57.3,1,1,0,0,0,10.6,10.4);

	this.instance_9 = new lib.beack();
	this.instance_9.parent = this;
	this.instance_9.setTransform(23.6,40.3,1,1,0,0,0,23.6,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 4
	this.instance_10 = new lib.thight1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(102.7,201.9,1,1,7.9,0,0,10.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 5
	this.instance_11 = new lib.leg2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(100.4,235.7,1,1,0,0,0,22.8,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.hen1, new cjs.Rectangle(0,0,276,270.7), null);


(lib.ck2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ckL1();
	this.instance.parent = this;
	this.instance.setTransform(36.2,51.4,1,1,0,0,0,2.4,9.2);

	this.instance_1 = new lib.ckEbrow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.1,17,1,1,-28.2,0,0,4,2.5);

	this.instance_2 = new lib.ckE1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10.7,24.4,1,1,-28.2,0,0,4,4.9);

	this.instance_3 = new lib.ckB1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.9,36.1,1,1,-28.2,0,0,9.1,8.3);

	this.instance_4 = new lib.ckW1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(35.3,23.8,1,1,-28.2,0,0,15.7,15.7);

	this.instance_5 = new lib.ckB0dy1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.6,29.9,1,1,-28.2,0,0,24.1,25.4);

	this.instance_6 = new lib.ckL1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(27,49.9,1,1,0,0,0,2.4,9.2);

	this.instance_7 = new lib.ckB2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(18.2,18.1,1,1,18.9,0,0,16.7,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-28.2,x:24.6,y:29.9,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:-28.2,x:35.3,y:23.8,regX:15.7,regY:15.7}},{t:this.instance_3,p:{rotation:-28.2,x:3.9,y:36.1,regX:9.1,regY:8.3}},{t:this.instance_2,p:{regY:4.9,rotation:-28.2,x:10.7,y:24.4,regX:4}},{t:this.instance_1,p:{regX:4,rotation:-28.2,x:10.1,y:17,regY:2.5}},{t:this.instance}]}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-57.9,x:19.9,y:33.4,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:-57.9,x:26.2,y:22.8,regX:15.7,regY:15.7}},{t:this.instance_3,p:{rotation:-57.9,x:5,y:49.1,regX:9.1,regY:8.3}},{t:this.instance_2,p:{regY:4.8,rotation:-57.9,x:5.1,y:35.5,regX:4}},{t:this.instance_1,p:{regX:4.1,rotation:-57.9,x:1,y:29.4,regY:2.5}},{t:this.instance}]},4).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-44.4,x:24.1,y:30.1,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:-44.4,x:32.7,y:21.2,regX:15.7,regY:15.7}},{t:this.instance_3,p:{rotation:-44.4,x:5.9,y:41.9,regX:9.1,regY:8.3}},{t:this.instance_2,p:{regY:4.9,rotation:-44.4,x:9.2,y:28.7,regX:4}},{t:this.instance_1,p:{regX:4.1,rotation:-44.4,x:6.6,y:21.7,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-57.9,x:19.9,y:33.4,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:-57.9,x:26.4,y:22.8,regX:15.8,regY:15.8}},{t:this.instance_3,p:{rotation:-57.9,x:5,y:49.2,regX:9,regY:8.3}},{t:this.instance_2,p:{regY:4.8,rotation:-57.9,x:5.1,y:35.5,regX:4}},{t:this.instance_1,p:{regX:4.1,rotation:-57.9,x:1,y:29.4,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-44.4,x:24.1,y:30.1,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:-44.4,x:32.7,y:21.3,regX:15.7,regY:15.8}},{t:this.instance_3,p:{rotation:-44.4,x:5.9,y:41.9,regX:9.1,regY:8.3}},{t:this.instance_2,p:{regY:4.8,rotation:-44.4,x:9.1,y:28.7,regX:4}},{t:this.instance_1,p:{regX:4.1,rotation:-44.4,x:6.6,y:21.7,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-57.9,x:19.9,y:33.4,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:-57.9,x:26.4,y:22.8,regX:15.8,regY:15.8}},{t:this.instance_3,p:{rotation:-57.9,x:5,y:49.2,regX:9,regY:8.3}},{t:this.instance_2,p:{regY:4.8,rotation:-57.9,x:5.1,y:35.5,regX:4.1}},{t:this.instance_1,p:{regX:4.1,rotation:-57.9,x:1,y:29.4,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-28.2,x:24.7,y:29.9,regY:25.5,regX:24.1}},{t:this.instance_4,p:{rotation:-28.2,x:35.3,y:23.8,regX:15.7,regY:15.7}},{t:this.instance_3,p:{rotation:-28.2,x:3.9,y:36.1,regX:9.1,regY:8.2}},{t:this.instance_2,p:{regY:4.9,rotation:-28.2,x:10.7,y:24.4,regX:4}},{t:this.instance_1,p:{regX:4,rotation:-28.2,x:10.1,y:17,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:2.5,x:29.9,y:27.2,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:2.5,x:42.2,y:27.4,regX:15.7,regY:15.7}},{t:this.instance_3,p:{rotation:2.5,x:8.8,y:21.9,regX:9,regY:8.2}},{t:this.instance_2,p:{regY:4.9,rotation:2.5,x:20.8,y:15.4,regX:4.1}},{t:this.instance_1,p:{regX:4.1,rotation:2.5,x:24.1,y:8.7,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:6.7,x:31.6,y:26.8,regY:25.5,regX:24.1}},{t:this.instance_4,p:{rotation:6.7,x:43.9,y:27.8,regX:15.7,regY:15.7}},{t:this.instance_2,p:{regY:4.9,rotation:6.7,x:23.4,y:14.3,regX:4.1}},{t:this.instance_1,p:{regX:4,rotation:6.7,x:27,y:7.9,regY:2.6}},{t:this.instance},{t:this.instance_7,p:{regY:12.6,x:18.2,y:18.1}}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:5.8,x:31.2,y:26.9,regY:25.4,regX:24.2}},{t:this.instance_4,p:{rotation:5.8,x:43.6,y:27.8,regX:15.8,regY:15.7}},{t:this.instance_3,p:{rotation:5.8,x:10.4,y:20.4,regX:9,regY:8.2}},{t:this.instance_2,p:{regY:4.9,rotation:5.8,x:22.8,y:14.6,regX:4.2}},{t:this.instance_1,p:{regX:4.1,rotation:5.8,x:26.4,y:8.1,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:6.7,x:31.6,y:26.7,regY:25.4,regX:24.1}},{t:this.instance_4,p:{rotation:6.7,x:43.9,y:27.8,regX:15.7,regY:15.7}},{t:this.instance_2,p:{regY:4.9,rotation:6.7,x:23.4,y:14.3,regX:4.1}},{t:this.instance_1,p:{regX:4,rotation:6.7,x:27,y:7.9,regY:2.6}},{t:this.instance},{t:this.instance_7,p:{regY:12.5,x:18.3,y:18}}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:5.8,x:31.2,y:26.9,regY:25.4,regX:24.2}},{t:this.instance_4,p:{rotation:5.8,x:43.6,y:27.8,regX:15.8,regY:15.7}},{t:this.instance_3,p:{rotation:5.8,x:10.3,y:20.4,regX:8.9,regY:8.2}},{t:this.instance_2,p:{regY:4.9,rotation:5.8,x:22.8,y:14.6,regX:4.2}},{t:this.instance_1,p:{regX:4.1,rotation:5.8,x:26.4,y:8.1,regY:2.5}},{t:this.instance}]},5).to({state:[{t:this.instance_6},{t:this.instance_5,p:{rotation:-28.2,x:24.7,y:29.9,regY:25.5,regX:24.1}},{t:this.instance_4,p:{rotation:-28.2,x:35.3,y:23.8,regX:15.7,regY:15.7}},{t:this.instance_3,p:{rotation:-28.2,x:3.9,y:36.1,regX:9.1,regY:8.2}},{t:this.instance_2,p:{regY:4.9,rotation:-28.2,x:10.7,y:24.4,regX:4}},{t:this.instance_1,p:{regX:4,rotation:-28.2,x:10.1,y:17,regY:2.5}},{t:this.instance}]},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-4,66.6,67.6);


// stage content:
(lib.CCKCC2_2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.fifteen15.addEventListener("click", fl_ClickToGoToAndStopAtFrame_73.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_73()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.sixteen16.addEventListener("click", fl_ClickToGoToAndStopAtFrame_74.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_74()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.seventeen17.addEventListener("click", fl_ClickToGoToAndStopAtFrame_75.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_75()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.eighteen18.addEventListener("click", fl_ClickToGoToAndStopAtFrame_76.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_76()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.nineteen19.addEventListener("click", fl_ClickToGoToAndStopAtFrame_77.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_77()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.twenty20.addEventListener("click", fl_ClickToGoToAndStopAtFrame_78.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_78()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.twentyone21.addEventListener("click", fl_ClickToGoToAndStopAtFrame_79.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_79()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.twentytwo22.addEventListener("click", fl_ClickToGoToAndStopAtFrame_80.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_80()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.twentythree23.addEventListener("click", fl_ClickToGoToAndStopAtFrame_81.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_81()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.twentyfour24.addEventListener("click", fl_ClickToGoToAndStopAtFrame_82.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_82()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.twentyfive25.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(74));

	// numbers ALL
	this.twentyfive25 = new lib.twentyfive25();
	this.twentyfive25.parent = this;
	this.twentyfive25.setTransform(46.6,403.1);
	new cjs.ButtonHelper(this.twentyfive25, 0, 1, 2, false, new lib.twentyfive25(), 3);

	this.twentyfour24 = new lib._24twentyfour();
	this.twentyfour24.parent = this;
	this.twentyfour24.setTransform(38.6,302.6);
	new cjs.ButtonHelper(this.twentyfour24, 0, 1, 2, false, new lib._24twentyfour(), 3);

	this.twentythree23 = new lib._23twentythree();
	this.twentythree23.parent = this;
	this.twentythree23.setTransform(173,196.6);
	new cjs.ButtonHelper(this.twentythree23, 0, 1, 2, false, new lib._23twentythree(), 3);

	this.twentytwo22 = new lib.twentytwo22();
	this.twentytwo22.parent = this;
	this.twentytwo22.setTransform(350.5,354.1);
	new cjs.ButtonHelper(this.twentytwo22, 0, 1, 2, false, new lib.twentytwo22(), 3);

	this.twentyone21 = new lib.twentyone21();
	this.twentyone21.parent = this;
	this.twentyone21.setTransform(180,325.6);
	new cjs.ButtonHelper(this.twentyone21, 0, 1, 2, false, new lib.twentyone21(), 3);

	this.twenty20 = new lib.twenty20();
	this.twenty20.parent = this;
	this.twenty20.setTransform(474,304.1);
	new cjs.ButtonHelper(this.twenty20, 0, 1, 2, false, new lib.twenty20(), 3);

	this.nineteen19 = new lib.nineteen19();
	this.nineteen19.parent = this;
	this.nineteen19.setTransform(542.5,139.6);
	new cjs.ButtonHelper(this.nineteen19, 0, 1, 2, false, new lib.nineteen19(), 3);

	this.eighteen18 = new lib.eighteen18();
	this.eighteen18.parent = this;
	this.eighteen18.setTransform(379,218.6);
	new cjs.ButtonHelper(this.eighteen18, 0, 1, 2, false, new lib.eighteen18(), 3);

	this.seventeen17 = new lib.seventeen17();
	this.seventeen17.parent = this;
	this.seventeen17.setTransform(293,121.6);
	new cjs.ButtonHelper(this.seventeen17, 0, 1, 2, false, new lib.seventeen17(), 3);

	this.sixteen16 = new lib.sixteen16();
	this.sixteen16.parent = this;
	this.sixteen16.setTransform(577,54.6);
	new cjs.ButtonHelper(this.sixteen16, 0, 1, 2, false, new lib.sixteen16(), 3);

	this.fifteen15 = new lib.fifteen15();
	this.fifteen15.parent = this;
	this.fifteen15.setTransform(425,59.6);
	new cjs.ButtonHelper(this.fifteen15, 0, 1, 2, false, new lib.fifteen15(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fifteen15},{t:this.sixteen16},{t:this.seventeen17},{t:this.eighteen18},{t:this.nineteen19},{t:this.twenty20},{t:this.twentyone21},{t:this.twentytwo22},{t:this.twentythree23},{t:this.twentyfour24},{t:this.twentyfive25}]}).to({state:[]},12).to({state:[]},70).wait(2));

	// numbers
	this.sixteen16_1 = new lib.sixteen16();
	this.sixteen16_1.parent = this;
	this.sixteen16_1.setTransform(577,54.6);
	new cjs.ButtonHelper(this.sixteen16_1, 0, 1, 2, false, new lib.sixteen16(), 3);

	this.seventeen17_1 = new lib.seventeen17();
	this.seventeen17_1.parent = this;
	this.seventeen17_1.setTransform(293,121.6);
	new cjs.ButtonHelper(this.seventeen17_1, 0, 1, 2, false, new lib.seventeen17(), 3);

	this.eighteen18_1 = new lib.eighteen18();
	this.eighteen18_1.parent = this;
	this.eighteen18_1.setTransform(379,218.6);
	new cjs.ButtonHelper(this.eighteen18_1, 0, 1, 2, false, new lib.eighteen18(), 3);

	this.nineteen19_1 = new lib.nineteen19();
	this.nineteen19_1.parent = this;
	this.nineteen19_1.setTransform(542.5,139.6);
	new cjs.ButtonHelper(this.nineteen19_1, 0, 1, 2, false, new lib.nineteen19(), 3);

	this.twenty20_1 = new lib.twenty20();
	this.twenty20_1.parent = this;
	this.twenty20_1.setTransform(474,304.1);
	new cjs.ButtonHelper(this.twenty20_1, 0, 1, 2, false, new lib.twenty20(), 3);

	this.twentyone21_1 = new lib.twentyone21();
	this.twentyone21_1.parent = this;
	this.twentyone21_1.setTransform(180,325.6);
	new cjs.ButtonHelper(this.twentyone21_1, 0, 1, 2, false, new lib.twentyone21(), 3);

	this.twentytwo22_1 = new lib.twentytwo22();
	this.twentytwo22_1.parent = this;
	this.twentytwo22_1.setTransform(350.5,354.1);
	new cjs.ButtonHelper(this.twentytwo22_1, 0, 1, 2, false, new lib.twentytwo22(), 3);

	this.twentythree23_1 = new lib._23twentythree();
	this.twentythree23_1.parent = this;
	this.twentythree23_1.setTransform(173,196.6);
	new cjs.ButtonHelper(this.twentythree23_1, 0, 1, 2, false, new lib._23twentythree(), 3);

	this.twentyfour24_1 = new lib._24twentyfour();
	this.twentyfour24_1.parent = this;
	this.twentyfour24_1.setTransform(38.6,302.6);
	new cjs.ButtonHelper(this.twentyfour24_1, 0, 1, 2, false, new lib._24twentyfour(), 3);

	this.twentyfive25_1 = new lib.twentyfive25();
	this.twentyfive25_1.parent = this;
	this.twentyfive25_1.setTransform(46.6,403.1);
	new cjs.ButtonHelper(this.twentyfive25_1, 0, 1, 2, false, new lib.twentyfive25(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sixteen16_1}]},1).to({state:[{t:this.seventeen17_1}]},1).to({state:[{t:this.eighteen18_1}]},1).to({state:[{t:this.nineteen19_1}]},1).to({state:[{t:this.twenty20_1}]},1).to({state:[{t:this.twentyone21_1}]},1).to({state:[{t:this.twentytwo22_1}]},1).to({state:[{t:this.twentythree23_1}]},1).to({state:[{t:this.twentyfour24_1}]},1).to({state:[{t:this.twentyfive25_1}]},1).to({state:[]},2).to({state:[]},70).wait(2));

	// bird LINES
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egx/ga2IAAqpMBj/AAAMAAABK/Mhj/AAAIAAna");
	this.shape.setTransform(320,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AixZSIADAAIgDAQgAppxQIABAAIABgBIANgHIAAAAIAGgCIAGgEIAGgCIArgTIA1gZIAVgJIABgBIAFgCIADgBIBrgxIAKgEIAEgBIBJghIADgBIAAAAIASgIIANgGIAJgEIAJgEIADgCIABAAIAEgCIAKgEIA+gdIALgEIAHgEIACgBIAFgCIAFgCIADgBIAAgBIAdgNIAGgDIBPgkIAIgDIAHgEIAFgCIAXgKIAGgDIAEgCIAFgCIAggOIAAgBIANgFIAlgRICThCIApgTIAggPIAKgEIACgBIAFgDIAHgDIAEgCIAAgBQAVgFATgMIAqgTIAoAFIAQACIhBAeIgQAIIgFADIgBAAIgBABIgCAAIABACIAAAAIgMAAIgWAQIAAgCIgBgBIgJAFIgJAEIgCABIgFAAIgIgBIAAAEQgWAAgBAOIAAACIAAABIgFgBQgZAFgdAIIgFABIgBABQgpAMgxAUIgLAEIgNAGIgaALIgNAGIgjAQIgIAEIgGACIgEADIgtAWQgxAbgzAfIgVANIgDABIACAGIgsAUIgLAFIgeAOIgHADIgPAGIgRAIIgIAEIgDACIgCABIgLAFIgCABIAAAAIgDABIgGADIilBMIgNAGIgBAAIAAABIgBAAIgMAGIgmARIgWALIg1AZIgfAOIgHAEIgiAQIgCAAIgBABIgBAAgACO1SIAGgDIAAADgAJo5iIACAAIgDABg");
	this.shape_1.setTransform(445.7,218.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Egx/gWpIAAu2MBj/AAAMAAABK/Mhj/AAAIAAna");
	this.shape_2.setTransform(320,240);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAAABIgBgCIADABIgCAAIAAABIAAABIAAgBg");
	this.shape_3.setTransform(487.9,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVACQACgPAeAOIAKAFIgqgEg");
	this.shape_4.setTransform(493.8,65.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AqWZbIADAAIgDARgAxNxHIAAAAIABgBIANgGIABAAIAFgDIAHgDIAGgDIAqgTIA1gYIAVgKIACAAIAFgDIACgBIBsgwIAKgEIADgCIBKghIADgBIAAAAIASgIIANgGIAIgEIAJgEIADgBIABgBIAFgCIAJgEIA+gcIADgBIAIgEIAHgDIACgBIAFgDIAGgCIACgBIABgBIAdgNIAFgCIABAAIBQglIAHgDIAIgDIACgBIADgBIARgIIAIgEIADgBIAEgCIAGgDIAfgOIABAAIAMgGIAmgRICShCIApgTIAggPIAKgEIADgBIAFgCIAHgDIAEgCIgBgBIgBgDIgBgBIAAgBIgBgBIgBgCIgDgFIgEgFQgJgNgHgDIgDgBIgCAAQgNAAgIgDIgEgCIAAgrQAfgGAXANIAJAGQAWAQANAkIAogSIAoAEIARACIhBAfIgPAHIgGADIgBAAIgBABIgBAAIAAACIAAABIABACIADATIABAAIAAAGIABABIABAAIAqAEQBIAGA7AGIBaALIBIALQBUAPB0AiIAmAMIAtAOQAqAKBlAWQBlAUBzAkQBfAdA3AeIgxAAIhfgUIgKgDQhSgThRgXQiUgshNgVIgMgDQhNgVhZgTQhFgOhLgMIhagOQhFgKhLgJIgRgDIgCgCIgfgDIAAgCQgEgHgFgEIAAAAIgCgCIgBAAIAAAAIgDgDIgEgCIAAgBIgCAAIgBgBIgCgBIAKABIgBgBIgBgCIAAAAIAAAAIgBgCIADAAIgDgBIgBgCIgBgCIAAgBIgBgBIAAgBIgJAEIgJAEIgDABIgEAAIgIAAIgBADQgVABgBANIAAACIAAABIgFgBQgZAFgeAJIgEABIhbAgIgLAFIgOAFIgZALIgOAGIgiAQIgJAEIgFADIgEACIgtAXQgzAagyAfIgVANIgDACIABAFIgsAUIgLAFIgdAOIgHADIgPAHIgRAIIgJAEIgDABIgCABIgLAFIgBABIAAAAIgDABIgGADIimBNIgNAGIAAAAIgBAAIAAAAIgMAGIgmARIgXALIg1AZIgeAOIgHAEIgjAQIgCABIgBAAIAAAAgAlV1JIAFgCIAAACgACE5YIABAAIgDABg");
	this.shape_5.setTransform(494.2,217.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_6.setTransform(320,240);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADKZbIADAAIgDARgA+uhbIAAgCIAAACgA+uiBIABAAIACgCICuh5QECiyBVg0QBnhACHhJIAHgEIDrh7IAmgUICbhNQCRhHCmhNIBQgmIABAAIAxgXIAVgJIAFgDIAFgCIARgIIAHgDIAFgCIABgBIAAgBIAOgIQADAAADgBQAEgDAGgBIABgBIADAAIAAAAIACgBIANgGIAGgDIAHgDIAGgDIAqgTIA1gYIAVgKIA1gXIBOgkIBqgvIAIgEIAJgEIADgBIBYgoICZhFIAlgRIAmgRIAMgGIAlgRICThCIApgTIAggPIAKgEIADgBIAFgCIAHgDIAEgCIgCgEIgBgBIgBgBIAAgBIgCgCIgCgFIgEgFQgJgNgHgDIgDgBIgCAAQgNAAgIgDIgEgCIAAgrQAfgGAXANIAJAGQAVAQAOAkIApgSIAoAEIARACIhCAfIgQAHIgFADIgBAAIgBABIgBAAIAAACIABADIADATIABAAIAAAGIABABIABAAIArAEQBHAGA8AGIAHABQBbAKBAALQBUAPB0AiIAmAMIAtAOQAqAKBlAWQBlAUBzAkIB3AsIAGADIAAAAIAGADIATAJIgxAAIgtgJIgygLIgLgDQhSgThQgXQiUgshNgVIgMgDQhNgVhZgTQhpgVh6gSIgHgBQhFgKhLgJIgTgDIgBgCIgfgDIAAgCQgEgHgFgEIAAAAIgCgCIgBAAIAAAAIgDgDIgEgCIAAgBIgCAAIgBgBIgCgBIAKABIgBgBIgBgCIAAAAIAAAAIgBgCIADAAIgDgBIgBgCIgCgEIAAgBIgJAEIgJAEIgDABIgEAAIgIAAIgBADQgVABgBANIAAACIAAABIgFgBQgaAFgdAJIgEABIhbAgIgMAFIgNAFIgZALIgOAGIgwAXIgFACIgsAXQg/Ahg+AnIABAFIgsAUIgLAFIgzAYIgRAIIgJAEIgDABIgJAEIgGADIgCABIgHADIikBNIgNAGIgBAAIgNAGIglARIgXALIg1AZIgeAOIgHAEIgjAQIgCABIgBAAIgCABIAAACIgJAAIgFAEIgGABQgMAFgJAHIgBACIgBAAIgPAHIgDABIgEACIgIADIgVAKIiCA8IgzAXIhqAtIAGANIqaFLIgvAaIgGADIhzBAQicBYikBqQhXA4hZA9IgKAHIgDACIgKAHgAIL1JIAFgCIAAACgAPl5YIABAAIgDABg");
	this.shape_7.setTransform(407.7,217.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3366FF").s().p("AAUgYIARgRQgjArgmAoQAdgkAbgeg");
	this.shape_8.setTransform(348.3,206.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("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");
	this.shape_9.setTransform(405.9,217.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAPBCIgDgCIAGACIAEACIACACIgJgEgAgWhDIgBgCIADABIgDAAIABACIAAAAIAAgBg");
	this.shape_10.setTransform(490.2,72);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AitEBIgBgBIgEgEIgDgEQgFgIgDgKIgEgNIgCgGIgDgSIgBgBIAAgBIAAgDIgDgWIgBgHIAAgFIgBgPIAAgNIgBgRIgBgDIgBgSIAAgEIAAgBIgBgIIABgQIAAgHQADgdALgXIAHgNIAFgHIABgBIAEgGQAbgfAzgTQBMgbCAABIA3ABQASAJAKAPIABABIACACIAAACIADAEIAAABIABABIAAABIABABIABACIAAACIACAEIACATIAAABIAAABIAAABIAAAEIAAAEIAAACIAAAHIAAABIAAABIgBAJIgGAhIgBABIAAABIgBAEIAAACIgCAFIAAACIgEAPIgCAFIgCAGIgBACIgFAPIgCAEIgLAaIgFAKIgBACQgJASgKAPQghA0gtAYQgrAYg0AAgAg3ATIAAACIgCAbIAAAGIAAAAIgBAGIgEAWIAAACIgBANQAAANAFAIQAHALAVAQIBCAAQAigBAWgjQAIgNAFgMQAGgPAAgPIAAgCQAGgTgPgOIgBAAQgJgJgQgFQgMgEgPgBQgUgBgaABIgHAAIgiADQAAADgMAAIgCgCQgDACAAANgACmj6QABgQAfAPIALAFIgrgEg");
	this.shape_11.setTransform(475,90.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("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");
	this.shape_12.setTransform(407,217.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AvMUBIghgDQg2gIgzgIIgPgCIgXAAIABgEIAqAGIBeALIA9AGIAZACgAFORLQB2hCBmhIIAKgHQBkhIBThNQhXBVhgBHIgKAHQhyBSiAA8IAWgLgAR1x5IgDgCIAFACIAEACIACADIgIgFgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_13.setTransform(377.6,193.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A4sQpQgQgXgLgTIADgBIAAgEIAAgDQAIAAAKgEIAAgEIACAAIgCgFIAFAJIAEAGIAqA9IAIANQAAAIgGADQgEACgKAAQgHAAgagngATJpLIgBAAIgEgFIgDgEQgEgHgEgLIgEgNIgBgGIgEgSIAAgBIgBgBIAAgDIgDgVIgBgHIAAgGIgBgPIAAgNIgBgQIAAgEIgCgSIAAgDIAAgCIAAgHIAAgQIAAgHIABgFIAKgqIADgGIABgCIABgCIACgDIADgGIAFgIIABgBIAFgFQAaggAzgSQBMgcCBABIA3ACQASAJAKAOIABABIACADIABABIACAEIABACIAAAAIAAABIABACIABACIAAACIACAEIACASIAAACIAAAAIAAABIAAAEIAAAFIAAACIAAAGIAAACIAAABIAAAIIgHAjIAAAAIgBABIgBAFIAAACIgBAEIgBACIgEAPIgCAFIgCAGIAAACIgGAQIgBADIgLAaIgFAKIgCADQgJARgKAQQghAzgtAZQgrAXg1AAgAU/s5IAAACIgBAbIgBAGIAAAAIgBAGIgEAXIAAACIgBANQAAANAFAIQAHAKAVAQIBDAAQAigBAWgjQAIgMAFgMQAGgQAAgPIAAgBQAGgTgPgPIgBAAQgJgJgQgFQgMgDgPgCQgUgCgaACIgIAAIgiAEQAAACgMAAIgCgCQgDACAAANgAYdxGQABgQAfAOIALAFIgrgDg");
	this.shape_14.setTransform(335.1,175.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("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8gcIALgFIACgBIABAAIAcgNIADgBIADgBIACgBIACgBIAlgRIANgGIAlgRICThCIApgTIAggPIAKgEIACgBIAFgCIAHgDIAEgCIgCgEIAAgBIgBgBIgBgBIgBgCIgDgFIgDgFQgJgNgIgDIgCgBIgDAAQgMAAgIgDIgEgCIAAgrIABAAIACgBIAAAAIACAAIACAAIACAAIACgBIABAAIABAAQAPAAAMAEIACAAIALAFIAEACIAFAEQAWAQANAkIAqgSIAoAEIAQACIhBAfIgQAHIgFADIgBAAIgBABIgCAAIABACIAAADIAEATIAAAAIABAGIABABIABAAIArAEQBHAGA8AGQBfAKBDAMQBUAPBzAiIAnAMIAsAOQArAKBkAWQBlAUB0AkQAjALAeALQAdALAXAKIABABIAHADQAWAKARALIABAAIAEADIABABIACAAQhHAZhfAXQgrAJgvAKIgeAGIgPADIgGABIhUARQhHAOghAJIgCAAIAAAAIgCABIgCAAIgBAAIgBABIheAbIgLADIgHADIgCAAIhdAcIgKADIgPAEIgaAIIgIACIgJADIgtANIgRAFIiAAiIgqAIIABADIACARIACASIALBWIADAcQAKB1AACdIgBAmQgEBYgZBqQgYBggpBwQhzE4jJD9QiXC/i3CFIgKAIQhvBPh7A7QiiBPiwAoIkFAmIgaABIgPABQgsACgtAAQgnAAgogCgA3CINQARAIALAJIguAKQB7AoB7ADIC8gQIAGgCQAxgKA0gQIA6gUIAUgIIAMgEIBSghIAFgBQAXgJAXgLIB+hMIAEgDIABAAQBphQAkgTQAcglAbggQAngoAkgsQARgSAOgNQAbgkAYgjIAGgJQAkg2Acg2QASgkAQgkQAUgvAOguIACgJQAOguAJg2IAGgnIAHhDIACgKIACgTIADgUIAGguQAIhKAEhPIAAgMIABgSIAAgCIAAgEIAAgBIAAgEIgEACIgBABIgEACIAAAAIgQAHIgDABIgEACIgHADIgVAKIgBABIiCA7IgzAXIhpAtIAFANIqZFLIgwAaIgGADIhzBAIgKAGIgbAQIgGADIgCABIgHAEIghAUQhzBDh3BMQhXA4haA9IgKAHIgCACIgLAHQAECRA5BQIAEAFIASAXIASASQAuArBGAiIABAAQAVAAAYAMgAMkwkQgzATgbAfIgEAGIgBABIgFAHIgDAGIgCAEIgBABIgBADIgDAFIgKArIgBAEIAAAHIAAAQIAAAIIAAABIAAAEIABASIABADIABARIAAANIABAPIAAAFIABAHIADAWIAAADIABABIAAABIADASIACAGIAEANQADAKAFAIIADAEIAEAEIABABICLACQA1AAArgYQAtgZAhgzQAKgPAJgSIACgCIAEgKIAMgaIABgEIAFgPIABgCIACgGIACgFIAEgPIAAgCIACgFIAAgCIABgEIABgBIAAgBIAGgiIABgJIAAgBIAAgBIAAgHIAAgCIAAgEIAAgEIAAgBIAAgBIAAgBIgCgTIgCgEIAAgCIgBgCIgBgBIAAgBIAAgBIgBgBIgDgEIAAgCIgCgCIgBgBQgKgPgSgJIg3gBIgJAAQh7AAhJAagAQxyzIAFAWQAFAVAFAOIAFAPIABACIABAGIAGARIAGASIADABIAAABQAAAEAHAWIADAMQAJAYAHAOIADAGIAAABIADAHIADAKIABADIAAABIABABIAMAkIABABIAAACIAMAnIACAFIABAEIALAxIAAABIAAABIAIAyIAEARIAEAdIABAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIAMgDIAIgCIANgEIACAAQBwgdBigYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEIg6gMIgxgLIgLgDIg6gOQg1gNg0gPQiTgshNgVIgMgDQhOgVhYgTQhtgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgANotFQgVgQgHgLQgFgIAAgNIABgNIAAgCIAEgWIABgGIAAAAIABgGIABgbIAAgCQAAgNADgCIACACQAMAAAAgDIAigDIAIgBQAagBAUACQAPABAMAEQAQAFAJAJIABAAQAPAOgGATIAAACQAAAPgGAPQgFAMgIANQgWAjgiABgAOBukIgEACQgJAFgEAKQgEAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIACgEQAFgNACgMIABgHQgFgDgKgCIgOgBIggAAQADABAAAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAP1y/IABgBQADgDACAAIABAFIgHgBgATK0+IACAAIgDABg");
	this.shape_15.setTransform(384.7,189.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AvMUBQhHgIhDgLIgPgCIgXAAIABgEIAlAFQBSAKBOAIIAZACgAFORLQB2hCBmhIQBqhLBXhRQhbBahmBJQhyBSiAA8IAWgLgAR1x5IgDgCIAFACIAEACIACADIgIgFgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_16.setTransform(377.6,193.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A4mQpQgRgXgKgTIACgBIAAgEIAAgDQAIAAAKgEIAAgEIACAAIgBgFIAFAJIAEAGIAqA9IAIANQAAAIgGADQgEACgKAAQgIAAgZgngA5NQIIACAAIgCAAIAAgDIAHgEIAAAIQgBAFgGACgATOpLIAAAAIgEgFIgDgEQgFgHgDgLIgFgNIgBgGIgDgSIgBgBIAAgBIAAgDIgDgVIgBgHIgBgGIAAgPIAAgNIgBgQIgBgEIgBgSIAAgDIAAgCIgBgHIABgQIAAgHIABgFQACgWAIgTIAAgBIACgGIACgCIAGgLIAFgIIABgBIAEgFQAbggAzgSQBMgcCBABIA3ACQASAJAKAOIABABIABADIABABIACAEIABACIABAAIAAABIABACIABACIAAACIACAEIABASIAAACIAAAAIAAABIABAEIAAAFIAAACIAAAGIAAACIAAABIgBAIIgHAjIAAAAIAAABIgBAFIgBACIgBAEIAAACIgEAPIgCAFIgCAGIgBACIgFAQIgCADIgLAaIgFAKIgBADQgJARgKAQQgiAzgsAZQgrAXg1AAgAVFs5IAAACIgCAbIgBAGIAAAAIgBAGIgDAXIAAACIgBANQAAANAFAIQAGAKAWAQIBDAAQAigBAWgjQAIgMAEgMQAHgQgBgPIABgBQAFgTgPgPIAAAAQgKgJgQgFQgLgDgPgCQgUgCgbACIgHAAIgiAEQAAACgNAAIgBgCQgDACAAANgAYixGQACgQAfAOIAKAFIgrgDg");
	this.shape_17.setTransform(334.6,175.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("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AAIAcgNIADgBIADgBIACgBIACgBIAlgRIANgGIAlgRICThCIApgTIAggPIAKgEIACgBIAFgCIAHgDIAEgCIgCgEIAAgBIgBgBIgBgBIgBgCIgDgFIgDgFQgJgNgIgDIgCgBIgDAAQgMAAgIgDIgEgCIAAgrIABAAIACgBIAAAAIACAAIACAAIACAAIACgBIABAAIABAAQAPAAAMAEIACAAIALAFIAEACIAFAEQAWAQANAkIAqgSIAoAEIAQACIhBAfIgQAHIgFADIgBAAIgBABIgCAAIABACIAAADIAEATIAAAAIABAGIABABIABAAIArAEQBHAGA8AGQBfAKBDAMQBUAPBzAiIAnAMIAsAOQArAKBkAWQBlAUB0AkQAjALAeALQAdALAXAKIABABIAHADQAWAKARALIABAAIAEADIABABIACAAQhHAZhfAXQgrAKgvAJIgeAGIgPADIgGABIhUARQhHAOghAJIgCAAIAAAAIgCABIgCAAIgBAAIgBABIheAbIgLADIgHADIgCAAIhdAcIgKADIgPAEIgaAIIgIACIgJADIgtANIgRAFIiAAiIgqAIIABADIACARIACASIALBWIADAcQAKB1AACdIgBAmQgEBYgZBqQgYBhgpBwQhzE3jJD9QibDEi9CIQhvBPh7A7QiiBPiwAoIkFAmIgaABQhaAFhdgEIglgBIgNgBIgXgCIgSAAIAAAAIhAAAIAAAAIksAAIgHAAQhSgKhOgNIgRgDIgDgBIgDgBIgRgGIAAACIAAACIgBAAIAAJkIAUCFIALBLIDzgCQAdgEDEgJIAAgBIGGAAQAGABAHAAQAEACAAANQAAAOgEACIgNABImdACQidAJgwAEIgOACIjcAAQADADABAFIgBADIBHAFICBALIACABIAdACQC1ASFtAnIAGAMQgCAFgKAGQgLAGgOAAQiEAAksglgA3CA6QARAIALAJIguAKQB7AoB7ADIC8gQIAGgCQAxgKA0gQIA6gUIAUgIIAMgEIBSghQAagJAZgLIB+hMIAEgDIABAAQBphQAkgTQAcglAbggQAngoAkgsQARgSAOgNQAbgkAYgjIAGgJQAkg3Acg2QASgkAQgkQAUgvAOguIACgJQAOguAJg2IAGgnIAHhDIACgKIACgTIADgUIAGguQAIhKAEhPIAAgMIABgSIAAgCIAAgEIAAAAIAAgBIAAgEIgEACIgBABIgEACIAAAAIgQAHIgDABIgEACIgHADIgVAKIgBABIiCA7IgzAXIhpAtIAFANIjjBxIm2DaIgwAaIgGADIhzBAIgKAGIgbAQIgGADIgCABIgHAEIghAUQhzBDh3BNQhXA4haA9IgKAHIgCACIgLAHQAECRA5BQIAEAFIASAXQAyA2BUAoIABAAQAVAAAYAMgAMk33QgzATgbAfIgEAGIgBABIgFAHIgGALIgBADIgDAFIAAABQgIATgCAXIgBAEIAAAHIAAAQIAAAIIAAABIAAAEIABASIABADIABARIAAANIABAPIAAAFIABAHIADAWIAAADIABABIAAABIADASIACAGIAEANQADAKAFAIIADAEIAEAEIABABICLACQA1AAArgYQAtgZAhgzQAKgPAJgSIACgCIAEgKIAMgaIABgEIAFgPIABgCIACgGIACgFIAEgPIAAgCIACgFIAAgCIABgEIABgBIAAgBIAGgiIABgJIAAgBIAAgBIAAgHIAAgCIAAgEIAAgEIAAgBIAAgBIAAgBIgCgTIgCgEIAAgCIgBgCIgBgBIAAgBIAAgBIgBgBIgDgEIAAgCIgCgCIgBgBQgKgPgSgJIg3gBIgJAAQh7AAhJAagAQx6GIAFAWQAFAVAFAOIAFAPIABACIABAGIAGARIAGASIADABIAAABQAAAEAHAWIADAMQAJAYAHAOIADAGIAAABIADAHIADAKIABADIAAABIABABIAMAkIABABIAAACIAMAnIACAFIABAEIALAxIAAABIAAABIAIAyIAEARIAEAdIABAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIAMgDIAIgCIANgEIACAAQBwgdBigYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEIg6gMIgxgLIgLgDIg6gOQg1gNg0gPQiTgshNgVIgMgDQhOgVhYgTQhtgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgANo0YQgVgQgHgLQgFgIAAgNIABgNIAAgCIAEgWIABgGIAAAAIABgGIABgbIAAgCQAAgNADgCIACACQAMAAAAgDIAigDIAIgBQAagBAUACQAPABAMAEQAQAFAJAJIABAAQAPAOgGATIAAACQAAAPgGAPQgFAMgIANQgWAjgiABgAOB13IgEACQgJAFgEAKQgEAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIACgEQAFgNACgMIABgHQgFgDgKgCIgOgBIggAAQADABAAAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAP16SIABgBQADgDACAAIABAFIgHgBgATK8RIACAAIgDABg");
	this.shape_18.setTransform(384.7,235.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AvMUBQhQgJhJgMIgXAAIABgEQBzAPBrAKgAFORLQB2hCBmhIQBqhLBXhRQhbBahmBJQhyBSiAA8IAWgLgAR1x5IgDgCIAFACIAEACIACADIgIgFgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_19.setTransform(377.6,193.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("A4mQpQgRgXgKgTIACgBIAAgEIAAgDQAIAAAKgEIAAgEIACAAIgBgFIAFAJIAEAGIAqA9IAIANQAAAIgGADQgEACgKAAQgIAAgZgngA5NQIIACAAIgCAAIAAgDIAHgEIAAAIQgBAFgGACgATOpLIAAAAIgEgFIgDgEQgFgHgDgLIgFgNIgBgGIgDgSIgBgBIAAgBIAAgDIgDgVIgBgHIgBgGIAAgPIAAgNIgBgQIgBgEIgBgSIAAgDIAAgCIgBgHIABgQIAAgHIABgFQACgWAIgTIAAgBIACgGIACgCIAAgCIAGgJIAFgIIABgBIAEgFQAbggAzgSQBMgcCBABIA3ACQASAJAKAOIABABIABADIABABIACAEIABACIABAAIAAABIABACIABACIAAACIACAEIABASIAAACIAAAAIAAABIABAEIAAAFIAAACIAAAGIAAACIAAABIgBAIIgHAjIAAAAIAAABIgBAFIgBACIgBAEIAAACIgEAPIgCAFIgCAGIgBACIgFAQIgCADIgLAaIgFAKIgBADQgJARgKAQQgiAzgsAZQgrAXg1AAgAVFs5IAAACIgCAbIgBAGIAAAAIgBAGIgDAXIAAACIgBANQAAANAFAIQAGAKAWAQIBDAAQAigBAWgjQAIgMAEgMQAHgQgBgPIABgBQAFgTgPgPIAAAAQgKgJgQgFQgLgDgPgCQgUgCgbACIgHAAIgiAEQAAACgNAAIgBgCQgDACAAANgAYixGQACgQAfAOIAKAFIgrgDg");
	this.shape_20.setTransform(334.6,175.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("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gIIAMgEIBSghQAagJAZgLIB+hMIAEgDIABAAQBphQAkgTQAcglAbggQAngoAkgsQARgSAOgNQAbgkAYgjIAGgJQAkg3Acg2QASgkAQgkQAUgvAOguIACgJQAOguAJg2IAGgnIAHhDIACgKIACgTIADgUIAGguQAIhKAEhPIAAgMIABgSIAAgCIAAgEIAAAAIAAgBIAAgEIgEACIgBABIgEACIAAAAIgQAHIgDABIgEACIgHADIgVAKIgBABIiCA7IgzAXIhpAtIAFANIqZFLIgwAaIgGADIhzBAIgpAYIgEACIAAAAIgoAYQhzBDh3BNQhXA4haA9IgKAHIgCACIgLAHQAECRA5BQIAEAFIASAXQAyA2BUAoIABAAQAVAAAYAMgAMk33QgzATgbAfIgEAGIgBABIgFAHIgFAKIgBABIgBADIgDAFIAAABQgIATgCAXIgBAEIAAAHIAAAQIAAAIIAAABIAAAEIABASIABADIABARIAAANIABAPIAAAFIABAHIADAWIAAADIABABIAAABIADASIACAGIAEANQADAKAFAIIADAEIAEAEIABABICLACQA1AAArgYQAtgZAhgzQAKgPAJgSIACgCIAEgKIAMgaIABgEIAFgPIABgCIACgGIACgFIAEgPIAAgCIACgFIAAgCIABgEIABgBIAAgBIAGgiIABgJIAAgBIAAgBIAAgHIAAgCIAAgEIAAgEIAAgBIAAgBIAAgBIgCgTIgCgEIAAgCIgBgCIgBgBIAAgBIAAgBIgBgBIgDgEIAAgCIgCgCIgBgBQgKgPgSgJIg3gBIgJAAQh7AAhJAagAQx6GIAFAWQAFAVAFAOIAFAPIABACIABAGIAGARIAGASIADABIAAABQAAAEAHAWIADAMQAJAYAHAOIADAGIAAABIADAHIADAKIABADIAAABIABABIAMAkIABABIAAACIAMAnIACAFIABAEIALAxIAAABIAAABIAIAyIAEARIAEAdIABAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIAMgDIAIgCIANgEIACAAQBwgdBigYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEIg6gMIgxgLIgLgDIg6gOQg1gNg0gPQiTgshNgVIgMgDQhOgVhYgTQhtgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgAGwWiIADAAIgDARgANo0YQgVgQgHgLQgFgIAAgNIABgNIAAgCIAEgWIABgGIAAAAIABgGIABgbIAAgCQAAgNADgCIACACQAMAAAAgDIAigDIAIgBQAagBAUACQAPABAMAEQAQAFAJAJIABAAQAPAOgGATIAAACQAAAPgGAPQgFAMgIANQgWAjgiABgAOB13IgEACQgJAFgEAKQgEAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIACgEQAFgNACgMIABgHQgFgDgKgCIgOgBIggAAQADABAAAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAP16SIABgBQADgDACAAIABAFIgHgBgATK8RIACAAIgDABg");
	this.shape_21.setTransform(384.7,235.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("A5NQoIACAAIgCAAIAAgDIAHgEIAAAIQgBAFgGACgATOorIAAAAIgEgFIgDgEQgFgHgDgLIgFgNIgBgGIgDgSIgBgBIAAgBIAAgDIgDgVIgBgHIgBgGIAAgPIAAgNIgBgQIgBgEIgBgSIAAgDIAAgCIgBgHIABgQIAAgHIABgFQACgXAIgSIAAgBIACgGIACgCIAAgCIAGgJIAFgIIABgBIAEgFQAbggAzgSQBMgcCBABIA3ACQASAJAKAOIABABIABADIABABIACAEIABACIABAAIAAABIABACIABACIAAACIACAEIABASIAAACIAAAAIAAABIABAEIAAAAIAAAFIAAACIAAAGIAAACIAAABIgBAIIgHAjIAAAAIAAABIgBAFIgBACIgBAEIAAACIgEAPIgCAFIgCAGIgBACIgFAQIgCADIgLAaIgFAKIgBADQgJARgKAQQgiAzgsAZQgrAXg1AAgAVFsZIAAACIgCAbIgBAGIAAAAIgBAGIgDAXIAAACIgBANQAAANAFAIQAGAKAWAQIBDAAQAigBAWgjQAIgMAEgMQAHgQgBgPIABgBQAFgTgPgPIAAAAQgKgJgQgFQgLgDgPgCQgUgCgbACIgHAAIgiAEQAAACgNAAIgBgCQgDACAAANgAYiwmQACgQAfAOIAKAFIgrgDg");
	this.shape_22.setTransform(334.6,172.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("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AgCIgCgCIgBgBQgKgPgSgJIg3gBIgJAAQh7AAhJAagAQx6GIAFAWQAFAVAFAOIAFAPIABACIABAGIAGARIAGASIADABIAAABQAAAEAHAWIADAMQAJAYAHAOIADAGIAAABIADAHIADAKIABADIAAABIABABIAMAkIABABIAAACIAMAnIACAFIABAEIALAxIAAABIAAABIAIAyIAEARIAEAdIABAFIABAHIAVgHIARgFIAMgDQBHgVB2gfIAugMIAMgDIAIgCIANgEIACAAQBwgdBigYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEIg6gMIgxgLIgLgDIg6gOQg1gNg0gPQiTgshNgVIgMgDQhOgVhYgTQhtgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgAGwWiIADAAIgDARgANo0YQgVgQgHgLQgFgIAAgNIABgNIAAgCIAEgWIABgGIAAAAIABgGIABgbIAAgCQAAgNADgCIACACQAMAAAAgDIAigDIAIgBQAagBAUACQAPABAMAEQAQAFAJAJIABAAQAPAOgGATIAAACQAAAPgGAPQgFAMgIANQgWAjgiABgAOB13IgEACQgJAFgEAKQgEAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIACgEQAFgNACgMIABgHQgFgDgKgCIgOgBIggAAQADABAAAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAP16SIABgBQADgDACAAIABAFIgHgBgATK8RIACAAIgDABg");
	this.shape_23.setTransform(384.7,235.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.11)").s().p("AABgBQAVgTgfAeQAGgIAEgDg");
	this.shape_24.setTransform(139.2,259.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AvMUBQhQgJhJgMIgXAAIABgEQBzAPBrAKgALrMlQjBC+jyBzQEAiLCzimgAR1x5IgDgCIAFACIAEACIACADIgIgFgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_25.setTransform(377.6,193.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A8nUgIABAAIgBAAgA1DNlIAkAAIAIANQAAAIgGADQgEACgKAAQgGAAgSgagA1yM3IABAAIgBAAIAAgDIAHgDIgBAHQgBAGgFABgAWpscIgBAAIgEgFIgDgEQgEgHgEgLIgEgNIgBgFIgEgTIAAgBIgBgBIAAgDIgDgVIgBgHIAAgGIgBgPIAAgNIgBgQIAAgEIgCgRIAAgEIAAgBIAAgIIAAgQIAAgHQAEgmARgcIAFgIQBGheERANQASAJAKAOIABABIADAEIACAEIABACIAAABIAAAAIABACIABACIAAACIACAEIACASIAAACIAAASIAAACIAAABIAAAIIgHAjIAAABIgBABIgBAEIAAACIgBAFIgBACIgEAPIgCAEIgCAGIAAACIgGAQIgBAEIgLAZIgFAKIgCADQgJASgKAPQghAzgtAZQgrAXg1AAgAYfwKIAAADIgBAaIgBAGIAAAAIgBAGIgEAXIAAACIgBANQAAANAFAIQAHAKAVAQIBDAAQAigBAWgjQAIgMAFgMQAGgQAAgPIAAgBQAGgTgPgPIgBAAQgJgJgQgFQgmgLhNAKQAAACgMAAIgCgCQgDACAAANgAb90XQABgQAfAOIALAFIgrgDg");
	this.shape_26.setTransform(312.7,196.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("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");
	this.shape_27.setTransform(315.2,235.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A9BUiIgEgCIAAgsIAjgsQAkgWAjgYQglAwghAwIADABIAVgBQABAEAFANIgGASQgDAAgKAEQgLADgLAAQgNAAgIgCgA0uNVQgUgcgLgVIAAARQgCAIgKAAQgIAAgIgEIAhgeIAOgGIACAEIADgEIAGAKIAFAGIApA9IAIANQAAAIgGADQgDACgKAAQgIAAgagngAXHsfIAAAAIgFgFIgDgEQgEgHgEgLIgEgNIgBgGIgEgSIAAgBIgBgBIAAgDIgDgVIAAgHIgBgGIAAgPIgBgNIgBgQIAAgEIgCgSIAAgDIAAgCIAAgHIAAgQIAAgHQAEgmASgcIAEgIQBGheERANQASAJAKAOIABABIADAEIACAEIABACIAAAAIAAABIABACIABACIAAACIADAEIABASIAAACIABASIAAACIAAABIgBAIIgHAjIAAAAIAAABIgBAFIgBACIgBAEIgBACIgEAPIgBAFIgCAGIgBACIgGAQIgBADIgLAaIgFAKIgBADQgKARgJAQQgiAzgtAZQgrAXg1AAgAY9wNIAAACIgBAbIgBAGIAAAAIgBAGIgEAXIAAACIgBANQAAANAGAIQAGAKAWAQIBCAAQAigBAXgjQAHgMAFgMQAGgQAAgPIABgBQAFgTgPgPIAAAAQgKgJgQgFQgmgLhNAKQABACgNAAIgCgCQgCACgBANgAcb0aQACgQAeAOIALAFIgrgDg");
	this.shape_28.setTransform(309.7,196.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("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AwgKA1gQIA3gTIACgBIAVgIIAMgEIAdgLIA1gWQAagJAZgLIB9hMIAEgDIABAAIAHgGIADgCIAzgmQA4goAYgNQAcglAbggQAngoAjgsQARgSAPgNQAbgkAXgjIAHgJQA7hbAnhaQAWgzAOgzQANguAJg2IAHgnIAHhDIAEgdIADgUIAFguQAJhKAEhPIAAgNIABgcIgFACIgXALIgEACIgIADIgVAKIiCA8IgzAXIhqAtIAGANIqYFLIgwAaIgGADIhzBAQicBYijBqQhYA4hZA9IgKAHIgCACIgMAHQAEB5AoBMQAIAPAJANIAFAFIASAXIAJAKQAtAsBEAjIALAFQAWAAAZAMQAQAIAMAJIguAKQA5ATA4AKQBAAMBAACIADAAIABAAIABAAgAWJ2+IgFAHQgSAcgDAmIAAAHIgBAQIABAIIAAABIAAAEIABASIABADIAAARIABANIAAAPIABAFIABAHIADAWIAAADIAAABIABABIADASIABAGIAFANQADAKAFAIIADAEIAEAEIAAABICMACQA1AAArgYQAsgZAigzQAKgPAJgSIABgCIAFgKIALgaIACgEIAFgPIABgCIACgGIACgFIAEgPIAAgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgCgEIAAgCIgBgCIgBgBIAAgBIgBgBIgBgBIgCgEIgCgEIgBgBQgKgPgSgJIg/gBQjaAAg+BTgAbp6GIAFAWQAEAVAFAOIAGAPIACAIIAGARIAGASIADABIAAABQAAAFAKAhQAKAeAJAOIAAABIACAHIAEAKIABADIABACIAMAkIAAABIABACIAMAnIACAFIABAEIAKAxIABABIAAABIAIAyIAEARIAEAdIAAAFIABAHIAWgHIAQgFIAMgDQBHgVB3gfIAugMIAMgDIAIgCIANgEIACAAQBvgdBjgYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEQg2gLg1gMIgLgDQhSgThRgXQiTgshOgVIgMgDQhNgVhZgTQhsgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgARnWiIAEAAIgEARgAYg0YQgWgQgGgLQgFgIAAgNIABgNIAAgCIADgWIABgGIAAAAIABgGIACgbIAAgCQAAgNADgCIABACQANAAAAgDQBMgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQABAPgHAPQgEAMgIANQgWAjgiABgAY513IgFACQgIAFgFAKQgDAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIABgEQAFgNADgMIABgHQgGgDgJgCIgOgBIggAAQACABABAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAat6SIAAgBQAEgDACAAIABAFIgHgBgAeC8RIACAAIgDABg");
	this.shape_29.setTransform(315.2,235.9);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_4},{t:this.shape_3},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_4},{t:this.shape_3},{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_19},{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_8},{t:this.shape_24},{t:this.shape_6}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_25},{t:this.shape_8},{t:this.shape_24},{t:this.shape_6}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},4).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({x:315.1,alpha:0.071},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.354},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.495},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.849},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.99},0).wait(1).to({regY:220,x:315.4,y:235.7,alpha:1},0).to({_off:true},7).wait(25).to({_off:false},0).to({_off:true},15).wait(9));

	// Sound Button
	this.instance_3 = new lib.sound_noSound();
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.1,40.5,1,1,0,0,0,12.1,10.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84));

	// Border
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_30.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(84));

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