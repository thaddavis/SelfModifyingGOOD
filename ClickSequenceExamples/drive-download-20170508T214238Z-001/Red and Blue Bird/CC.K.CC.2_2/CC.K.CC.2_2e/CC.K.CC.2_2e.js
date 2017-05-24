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


(lib._19nineteen = function(mode,startPosition,loop) {
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


(lib._18eighteen = function(mode,startPosition,loop) {
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


(lib._17seventeen = function(mode,startPosition,loop) {
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


(lib._16sixteen = function(mode,startPosition,loop) {
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


(lib._15fifteen = function(mode,startPosition,loop) {
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


(lib._14fourteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape.setTransform(8.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_2.setTransform(9.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._13thirteen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgLACIACgXIAFAAQARAAAOgJQAPgKAAgTQAAgPgKgLQgLgKgPAAQgRAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQATAAAPAIQAQAIAIAOQAJAOAAAPQAAAPgJAMQgHANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._12twelve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape.setTransform(8.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_2.setTransform(9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._11eleven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgPAJQgRAKgNAEIAAgbQAYgLARgQQARgPAHgPIASAAIAADlg");
	this.shape.setTransform(7.7,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgiAMIAAgrQARgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_2.setTransform(8.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib._10ten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBdQgXgdABhAQgBgoAJgZQAIgYARgOQAQgNAYAAQASAAAPAIQANAHAJAOQAKAOAFAUQAEAUABAhQgBApgHAYQgJAZgQANQgRAOgZAAQggAAgTgYgAgehNQgPAWAAA3QAAA4AOATQAMATATAAQATAAAOgTQANgTAAg4QAAg4gNgSQgNgSgUgBQgSAAgMAQg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgQAJQgQAKgNAEIAAgbQAXgLASgQQARgPAHgPIASAAIAADlg");
	this.shape_1.setTransform(-10,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BhQgVgbAAhGQAAhEAXgeQAVgZAiAAQAjAAAUAZQAYAeAABEQAABFgYAeQgUAZgjAAQgiAAgXgbgAgOhPQgHAFgDAOQgGASAAAqQABArAEAQQAEAQAHAFQAHAGAHAAQAJAAAGgGQAGgFAEgOQAFgSAAgrQAAgqgFgQQgEgQgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgjAMIAAgrQASgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_3.setTransform(-10.8,-0.4);

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
(lib.CCKCC2_2e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.ten10.addEventListener("click", fl_ClickToGoToAndStopAtFrame_35.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_35()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.eleven11.addEventListener("click", fl_ClickToGoToAndStopAtFrame_36.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_36()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.twelve12.addEventListener("click", fl_ClickToGoToAndStopAtFrame_37.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_37()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.thirteen13.addEventListener("click", fl_ClickToGoToAndStopAtFrame_38.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_38()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.fourteen14.addEventListener("click", fl_ClickToGoToAndStopAtFrame_39.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_39()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.fifteen15.addEventListener("click", fl_ClickToGoToAndStopAtFrame_40.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_40()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.sixteen16.addEventListener("click", fl_ClickToGoToAndStopAtFrame_41.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_41()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.seventeen17.addEventListener("click", fl_ClickToGoToAndStopAtFrame_42.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_42()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.eighteen18.addEventListener("click", fl_ClickToGoToAndStopAtFrame_43.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_43()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.nineteen19.addEventListener("click", fl_ClickToGoToAndStopAtFrame_44.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_44()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.twenty20.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(76));

	// Numbers All
	this.twenty20 = new lib._20twenty();
	this.twenty20.parent = this;
	this.twenty20.setTransform(355,85.1);
	new cjs.ButtonHelper(this.twenty20, 0, 1, 2, false, new lib._20twenty(), 3);

	this.nineteen19 = new lib._19nineteen();
	this.nineteen19.parent = this;
	this.nineteen19.setTransform(423,133.1);
	new cjs.ButtonHelper(this.nineteen19, 0, 1, 2, false, new lib._19nineteen(), 3);

	this.eighteen18 = new lib._18eighteen();
	this.eighteen18.parent = this;
	this.eighteen18.setTransform(582.2,125.3);
	new cjs.ButtonHelper(this.eighteen18, 0, 1, 2, false, new lib._18eighteen(), 3);

	this.seventeen17 = new lib._17seventeen();
	this.seventeen17.parent = this;
	this.seventeen17.setTransform(443,58.1);
	new cjs.ButtonHelper(this.seventeen17, 0, 1, 2, false, new lib._17seventeen(), 3);

	this.sixteen16 = new lib._16sixteen();
	this.sixteen16.parent = this;
	this.sixteen16.setTransform(492,282.1);
	new cjs.ButtonHelper(this.sixteen16, 0, 1, 2, false, new lib._16sixteen(), 3);

	this.fifteen15 = new lib._15fifteen();
	this.fifteen15.parent = this;
	this.fifteen15.setTransform(290,201.1);
	new cjs.ButtonHelper(this.fifteen15, 0, 1, 2, false, new lib._15fifteen(), 3);

	this.fourteen14 = new lib._14fourteen();
	this.fourteen14.parent = this;
	this.fourteen14.setTransform(353,357.1);
	new cjs.ButtonHelper(this.fourteen14, 0, 1, 2, false, new lib._14fourteen(), 3);

	this.thirteen13 = new lib._13thirteen();
	this.thirteen13.parent = this;
	this.thirteen13.setTransform(267,440.1);
	new cjs.ButtonHelper(this.thirteen13, 0, 1, 2, false, new lib._13thirteen(), 3);

	this.twelve12 = new lib._12twelve();
	this.twelve12.parent = this;
	this.twelve12.setTransform(182,328.1);
	new cjs.ButtonHelper(this.twelve12, 0, 1, 2, false, new lib._12twelve(), 3);

	this.eleven11 = new lib._11eleven();
	this.eleven11.parent = this;
	this.eleven11.setTransform(109,236.1);
	new cjs.ButtonHelper(this.eleven11, 0, 1, 2, false, new lib._11eleven(), 3);

	this.ten10 = new lib._10ten();
	this.ten10.parent = this;
	this.ten10.setTransform(63,385);
	new cjs.ButtonHelper(this.ten10, 0, 1, 2, false, new lib._10ten(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ten10},{t:this.eleven11},{t:this.twelve12},{t:this.thirteen13},{t:this.fourteen14},{t:this.fifteen15},{t:this.sixteen16},{t:this.seventeen17},{t:this.eighteen18},{t:this.nineteen19},{t:this.twenty20}]}).to({state:[]},12).wait(74));

	// Numbers Individual
	this.eleven11_1 = new lib._11eleven();
	this.eleven11_1.parent = this;
	this.eleven11_1.setTransform(109,236.1);
	new cjs.ButtonHelper(this.eleven11_1, 0, 1, 2, false, new lib._11eleven(), 3);

	this.twelve12_1 = new lib._12twelve();
	this.twelve12_1.parent = this;
	this.twelve12_1.setTransform(182,328.1);
	new cjs.ButtonHelper(this.twelve12_1, 0, 1, 2, false, new lib._12twelve(), 3);

	this.thirteen13_1 = new lib._13thirteen();
	this.thirteen13_1.parent = this;
	this.thirteen13_1.setTransform(267,440.1);
	new cjs.ButtonHelper(this.thirteen13_1, 0, 1, 2, false, new lib._13thirteen(), 3);

	this.fourteen14_1 = new lib._14fourteen();
	this.fourteen14_1.parent = this;
	this.fourteen14_1.setTransform(353,357.1);
	new cjs.ButtonHelper(this.fourteen14_1, 0, 1, 2, false, new lib._14fourteen(), 3);

	this.fifteen15_1 = new lib._15fifteen();
	this.fifteen15_1.parent = this;
	this.fifteen15_1.setTransform(290,201.1);
	new cjs.ButtonHelper(this.fifteen15_1, 0, 1, 2, false, new lib._15fifteen(), 3);

	this.sixteen16_1 = new lib._16sixteen();
	this.sixteen16_1.parent = this;
	this.sixteen16_1.setTransform(492,282.1);
	new cjs.ButtonHelper(this.sixteen16_1, 0, 1, 2, false, new lib._16sixteen(), 3);

	this.seventeen17_1 = new lib._17seventeen();
	this.seventeen17_1.parent = this;
	this.seventeen17_1.setTransform(443,58.1);
	new cjs.ButtonHelper(this.seventeen17_1, 0, 1, 2, false, new lib._17seventeen(), 3);

	this.eighteen18_1 = new lib._18eighteen();
	this.eighteen18_1.parent = this;
	this.eighteen18_1.setTransform(582.2,125.3);
	new cjs.ButtonHelper(this.eighteen18_1, 0, 1, 2, false, new lib._18eighteen(), 3);

	this.nineteen19_1 = new lib._19nineteen();
	this.nineteen19_1.parent = this;
	this.nineteen19_1.setTransform(423,133.1);
	new cjs.ButtonHelper(this.nineteen19_1, 0, 1, 2, false, new lib._19nineteen(), 3);

	this.twenty20_1 = new lib._20twenty();
	this.twenty20_1.parent = this;
	this.twenty20_1.setTransform(355,85.1);
	new cjs.ButtonHelper(this.twenty20_1, 0, 1, 2, false, new lib._20twenty(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.eleven11_1}]},1).to({state:[{t:this.twelve12_1}]},1).to({state:[{t:this.thirteen13_1}]},1).to({state:[{t:this.fourteen14_1}]},1).to({state:[{t:this.fifteen15_1}]},1).to({state:[{t:this.sixteen16_1}]},1).to({state:[{t:this.seventeen17_1}]},1).to({state:[{t:this.eighteen18_1}]},1).to({state:[{t:this.nineteen19_1}]},1).to({state:[{t:this.twenty20_1}]},1).to({state:[]},2).wait(74));

	// Bird
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAyAAhRIAAEPMhj/AAAMAAAhK/MBj/AAAIAAGe");
	this.shape.setTransform(320,240);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkEEEIgEgCIAAgsIAigsQAlgWAjgYQglAwgiAwIAEABIAVgBQAAAEAGANIgGASQgEAAgKAEQgKADgLAAQgNAAgIgCgADvj5IgBARQgBAIgKAAQgIAAgIgEIAhgeIAFgDIgDAOIAOACIABABIAEAAIAAAlQgQgXgKgTg");
	this.shape_1.setTransform(150,302);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AsNIMQATgNANgVQAGgBAHgEIAEgDIgWAQQLEmZCXhTIAbgMIABgBIAAAAQBCghCciFQA3gvBCg7IADgCIChiSIggAKIAGgGQAkgoAHgLIAIgEIAlgQIgBgBQAkgDAbgYIACgBIAMAEQAEADAAANQAAAFgFAGQgIgCgQALIABADQgLAFgHAIIgMAFIgJAFIgBABIgFACIghAfQgdAcgfAhIh0CAQhZBbhpBJQgjAYgkAWQgsAYgtAXQjSBpkMCZQheA1lBC+g");
	this.shape_2.setTransform(103.5,321.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_3.setTransform(320,240);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.11)").s().p("AABgBQAVgTgfAeQAGgIAEgDg");
	this.shape_4.setTransform(139.2,259.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AsPKlIAAAAIgDgCQgDgCAAgMQAAiDHvnfQChibC+irQCLh9AtgkQAGACAHAAQAEABAAAOQAAACgFAIQCQhyDSiZIACALIAAAAIABACIACAAIAAAEIgCACIAAgDIAAgBIgFAEQgQAMgEABQgDABgcAXIgeAYQgUAPABACIAAAEIgoAiIi4CfIhjBfQgdAUggAaQhcBHhQBJIgdAbIgQAEQgRAQgKAFIgDgBIgSARIgJAJIgGAGIgQAOIgGAGIg9A8IgFAEIgIAJIgEAEIgHAGIgEAFIgHAHIgUAUIgIAJIgLAKIgFAGIgHAGIgYAaIgEADIgDAEIAAAAIgEAEIgHAHIgJAKIgNANIgEAFIgCACIkuFlIgDAEIgEAFIgBACIgRAXIgCADIgKAOIBmg8IhZA+IgWAQQLEmaCXhSIAbgOIABgBIAAAAQBCghCciEQA3gvBCg7IADgCICGh5IAbgZIggALIAGgHQAkgoAHgLIAIgEIAlgQIgBgBQAkgDAbgYIACgBIAMAEQAEADAAANQAAAFgFAHQgIgDgQALIABADQgLAFgHAIIgMAFIgJAFIgBABIgFADIghAeIgkAkIgYAaIh0B/QhZBbhpBIQgjAYgkAWQgsAZgtAXQjSBpkMCaQheA1lBC9gAFunWQgGAEgFAHIATgTIgIAIg");
	this.shape_5.setTransform(102.7,306.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkhEGIgEgCIAAgsIAjgsQAkgWAjgYQglAwghAwIADABIAVgBQABAEAFAMIgGATQgDAAgKAEQgLACgLAAQgNAAgIgBgADxjGIgEgHQgRgYgKgSIAAAQQgCAJgKgBQgIAAgIgDIAhgfIABAAIAEgCIAAAAIAJgDIACAEIADgEIAGAKIAFAFIApA9IAIAOQAAAIgGADQgDABgKABQgIAAgagng");
	this.shape_6.setTransform(152.9,301.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AyPLTIAAAAIgDgCQgDgCAAgMQAAiDHvnfQChibC/iqQCLh+AtgkQAGACAHAAQAEABAAAOQAAACgFAJQCPhyDSiaIAAAAIAAgFIgCgcIAAgDQgDgZgBgbIAGgEIAbAAIAGBFIAAAAIAAgBIABgBIAAABQgBAIACAHIgBABIAAABIAAADIADAVIACATIALA4QAUBkApBVIALAUIANAZIAFgDIAZgMIACAAIAMADQAEADAAANQAAAGgFAGQgIgDgQALIABADIACADIgCACIAeAqIAOATQDgETIQBnIAAAaQgQgBgJACQnyhmjlj6IgSgVIgpg9IgFgGIgGgKIgDAEIgCgEIgJADIAAAAIgEACIgBABIghAeIgkAkIgYAaIh0B/QhZBbhoBIQgjAZgkAVQgsAZgtAYQjTBokMCaQheA1lBC9gAxUKqIgWAQQLEmaCYhSIAbgOIABgBIAAAAQBCggCciFQA2gvBCg7IADgBICGh6IAbgYIggAKIAGgHQAkgnAHgMIAIgDIAlgRIgCgDIgBgBIgBgCIgDgGIgLgUQgthbgXhqIgFgZIgBgHIgBgCIgBgIIgCgSIgEgaIAAAAIAAgEIAAAAIgFADQgQAMgEACQgDAAgcAXIgeAZQgUAOABACIAAAEIgoAiIi3CfIhjBfQgdAVggAZQhcBHhRBJIgdAbIgQAEQgRAQgKAEIgDAAIgSARIgJAIIgGAGIgQAPIgGAGIg9A8IgFAEIgIAJIgEAEIgHAGIgEAFIgHAHIgUAUIgIAJIgLALIgFAFIgHAGIgYAaIgEADIgDAEIAAAAIgEAEIgHAHIgJAKIgNAOIgEAEIgCACIkuFlIgDAEIgEAFIgBACIgRAXIgCADIgKAOIBmg7IhZA9gAgRmoQgGAEgFAHIATgTIgIAIgASTAsIADgCIAAAGIgDgEg");
	this.shape_7.setTransform(141.1,301.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ARGOQIhTgLQi1gXhYgSQg/AHiTAVIi/AbQgNAAgEgCIgCgCQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgDgBAAgNQAAgdC2gVQBZgKCPgMIgXjiIAApzIgCAAIAAgGIgEgBQgQgCgJADQkqg+jKhyQiHhNhbhlIgSgVIgpg9IgEgFIgHgKIgDAEIgCgEIgJADIAAAAIgDACIgCAAIghAfIgjAkIgYAZIh1CAQhZBbhpBJQgjAYgkAWQgsAZgtAXQjTBokMCZIgbAQQhrA9kZCmIgsAAIAAAAIgCgCQgEgCAAgNQAAhqFIlRQBLhMBchaQCiibC+irQCMh+AtgkQAFACAHAAQAEACAAANQAAADgFAIIBahGIAtgiQBjhLB4hZIABAAIgBgFIgCgbIAAgDQgDgZAAgbIAFgFIAcAAIAFBFIAAABIAAgBIABgBIAAABQAAAIABAHIgBABIAAAAIAAADIADAVIADAUIAKA4QAIAoALAlIAJAcQAPApASAmIALAVIANAYIAFgCIAZgMIACgBIAMAEQAEADAAANQAAAFgFAGQgHgCgRALIACADIABADIgCACIAeApIAOAUQBYBtCKBTQDPB9E+A+IAEABIACAAIAAhqIgGgLIgCgEIACgCQAMgHAPgLQAJALADANIAABxIgiAGIAjAFIAAAfIgBAAIAAJjIAUCGIALBKID0gCQAcgEDEgIIAAgCIGHAAQAGACAGAAQAFABAAANQAAAOgFACIgMABImeACQidAJgwAFIgNABIjdAAQADADACAFIgBADQBDADCFANIACABIAcACQC1ASFtAnIAGAMQgBAFgKAGQgMAGgOAAQiDAAktgkgA4tHJIgWAQIFdjJQGSjnBtg7IAcgNIAAgBIABAAQBBghCciFQA3gvBDg7IACgCICGh5IAbgZIggAKIAGgGQAkgoAHgLIAIgEIAlgQIgCgEIAAgBIgBgBIgEgHIgLgUQgZgygSg3IgHgVQgKgigIglIgEgZIgBgGIgBgDIgBgIIgDgSIgDgZIAAAAIgBgEIAAgBIgFAEQgQAMgEABQgDAAgcAYIgeAYQgUAPABABIAAAFIgoAhIgpAjIggAcIhvBgIhjBgQgdAUggAaQhbBHhSBJIgdAbIgQADQgRARgKAFIgDgCIgSASIgJAJIgGAFIgQAQIgGAFIg8A8IgFAFIgJAIIgEAFIgGAGIgFAEIgHAIIgTATIgJAJIgLALIgFAFIgGAHIgZAZIgDADIgDADIgBABIgEAEIgGAHIgJAJIgOAOIgDAEIgDADIkuFlIgDAEIgEAFIgBACIgRAWIgCAEIgKANIBmg7IhZA9gAnqqJQgFAFgGAHIAUgTIgJAHg");
	this.shape_8.setTransform(188.4,324);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ABAANQhOgKhKgLIgXAAIACgEQBxAPBsAKg");
	this.shape_9.setTransform(273.9,320);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ALPOQIhTgLQi1gXhZgSQg/AHiTAVIi+AbQgNAAgEgCIgCgCQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQgEgBAAgNQAAgdC2gVQBYgKCPgMIgXjiIAApzIgCAAIAAgGIgEgBQgQgCgJADIgDgBIgGgBIgFgCIgGgBIgEgBIgFgBIgFgBIgHgBQkKg8i6hoIgFgDIgFgCQgzgegughQhGg0g3g9IgSgVIgqg9IgEgFIgGgKIgDAEIgDgEIgIADIAAAAIgEACIgBAAIgiAfIgjAkIgYAZIhnBxIgNAPQhaBbhpBJQgjAYgkAWQgrAZguAXQjSBokNCZIgbAQQhrA9kYCmIgtAAIAAAAIgCgCQgEgCAAgNQAAhqFIlRQBLhMBchaQCiibC+irQBkhaA0gsIAhgcQAFACAHAAQAEACABANQgBADgFAIIBahGIAtgiQBjhLB5hZIAAAAIAAgFIgDgbIAAgDQgDgZAAgbIAGgFIAbAAIAFBFIAAABIAAgBIABgBIAAABQAAAIABAHIgBABIAAAAIABADIADAVIACAUIAKA4QAIAoAMAlIAJAcQAOApATAmIAKAVIAOAYIAEgCIAagMIABgBIAMAEQAEADABANQgBAFgFAGQgHgCgQALIABADIABADIgBACIAdApIAPAUQBKBcBtBJIArAbQDPB9E9A+IAEABIACAAIAAhqIgGgLIgCgEIACgCQANgHAOgLQAJALAEANIAABxIgjAGIAjAFIAEABIgBADIAWAAQBKAMBPAKIAwAAIAtAEQCbANCLACIAAAPIgJAAIAAFBIAaCuIALBMIErABIBRgGIGtgDQAngCB8gFIAQAAQACAUAEAOIg0ACIijAHImrACIhQAHIkLAAIAAANQAzgNCAASQBWALBSASQBlAJBEAJIAaAEIClAWQAaADC/AyIBZAYIgEAfIgqgLQjGg3gzgHIiwgXQjcgdjzgdIgCAEQgJABgxAEQg1AGgoAGIj6AAIgKgEIgHgHQATgYAagHQAOgFAYgDIDaAAIgHgcIgLgMQABgDADgDIADgDQgLhCgHh9IgFkKIABhuIAAgGIAAAAIAAgCIk9AAQhggJhZgPQgIgFgOgDIAAADIgBAAIAAJjIAUCGIALBKIDzgCQAcgEDEgIIAAgCIGHAAQAGACAHAAQAEABAAANQAAAOgEACIgNABImeACQidAJgvAFIgOABIjcAAQADADABAFIgBADQBEADCEANIACABIAdACQC0ASFtAnIAGAMQgBAFgKAGQgMAGgNAAQiEAAksgkgA+kHJIgXAQIFdjJQGSjnBug7IAbgNIABgBIAAAAQBBghCciFIBYhMIAigeIACgCICGh5IAbgZIggAKIAGgGQAkgoAHgLIAJgEIAkgQIgBgEIgBgBIgBgBIgEgHIgLgUQgZgygSg3IgGgVQgLgigIglIgEgZIgBgGIgBgDIgBgIIgDgSIgDgZIAAAAIAAgEIAAgBIgGAEQgQAMgEABQgDAAgbAYIgfAYQgUAPABABIAAAFIgnAhIgpAjIggAcIhwBgIhIBGIgbAaQgdAUggAaQhbBHhSBJIgdAbIgQADQgQARgLAFIgDgCIgSASIgJAJIgGAFIgQAQIgFAFIg9A8IgFAFIgIAIIgFAFIgGAGIgFAEIgHAIIgTATIgJAJIgKALIgGAFIgGAHIgYAZIgEADIgDADIgBABIgDAEIgHAHIgJAJIgNAOIgEAEIgDADIkuFlIgDAEIgEAFIgBACIgQAWIgDAEIgKANIBmg7IhYA9gAthqJQgGAFgFAHIATgTIgIAHgAfjIyIAEAAIgEAQg");
	this.shape_10.setTransform(226,324);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3366FF").s().p("AAUgYIARgRQgjArgmAoQAdgkAbgeg");
	this.shape_11.setTransform(348.3,206.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AkhEGIgEgCIAAgsIAjgsQAkgWAjgYQglAwghAwIADABIAVgBQABAEAFAMIgGATQgDAAgKAEQgLACgLAAQgNAAgIgBgADxjGIgEgHQgRgYgKgSIAAAQQgCAJgKgBQgIAAgIgDIAhgfIABAAIACgBIACgBIAAAAIAFgCIAEgBIACAEIADgEIAGAKIAFAFIApA9IAIAOQAAAIgGADQgDABgKABQgIAAgagng");
	this.shape_12.setTransform(152.9,301.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(226,259.8);

	this.seventeen17_2 = new lib._17seventeen();
	this.seventeen17_2.parent = this;
	this.seventeen17_2.setTransform(443,58.1);
	new cjs.ButtonHelper(this.seventeen17_2, 0, 1, 2, false, new lib._17seventeen(), 3);

	this.seventeen17_3 = new lib._17seventeen();
	this.seventeen17_3.parent = this;
	this.seventeen17_3.setTransform(443,58.1);
	new cjs.ButtonHelper(this.seventeen17_3, 0, 1, 2, false, new lib._17seventeen(), 3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AsDDuQhPgJhKgNIgXAAIACgDQByAPBrAKgAO0jtQjBC+jxByQEAiKCyimg");
	this.shape_14.setTransform(357.5,297.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AGDYSIhTgLQi1gXhYgRQg+AHiTAVIi/AbQgNAAgEgDIgCgCQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBgBQgDgBAAgMQAAgdC2gWQBZgKCOgLIgXjiIAAp0IgBAAIAAgHIgEgBQgQgBgJACIgDgBIgGgBIgGgBIgFgBIgFgBIgEgBIgFgBIgHgCQkLg7i6hpIgFgCIgFgDQg0gegtghQhHg0g3g8IgSgVIgpg9IgEgGIgHgKIgDAEIgCgEIgJADIAAAAIgDACIgCABIghAeIgjAkIgYAaIhnBwIgOAPQhZBchpBIQgjAZgkAVQgsAZgtAYIhkAyQitBajOB2IgbAPQhrA+kZClIgsAAIAAAAIgCgCQgEgCAAgMQAAhqFIlRQBLhOBchZQCgiaC9iqIADgCQBkhbA0grIAhgcQAFACAHAAQAEABAAAOQAAACgFAJIBahFIAtgjQBjhLB4hYIABAAIgBgFIgCgcIAAgDIgDgiIAAgSIAFgEIAcAAIAAALIAFA6IAAAAIAAgBIABgBIAAABQAAAIABAHIgBABIAAABIAAADIADAVIADATIAKA4QAIAoALAmIAJAcQAPAoASAmIALAUIANAZIAFgDIAZgMIACAAIAMADQAEADAAANQAAAGgFAGQgHgDgRALIACADIABADIgCACIAeAqIAOATQBLBcBtBJIArAbQDPB9E+A+IAEABIABAAIAAhpIgFgLIgCgEIACgCQALgHAPgLQAJALADAMIAAByIghAGIAiAEIAEABIgCAEIAXAAQBKAMBPAJIAwAAIAsAEQBWAIBRAEQBCADA+ABIBNAAIAFAAIAZAAQB4gDBqgLQCDgOBvgdQB0gdBdgtQA0gaAygaIANgIQDyhzDAi+IB8iGQCkjDBojrIAeAAQhrD2ikDNQj1E2lMCgQiiBOiyApIkFAlQhmAHhqgEIgRgBIg4gDIgiAAIAAFAIAaCvIALBLIEqABIBRgFIGugDQAngCB8gFIAQAAQACATADAOIgzADIikAGImqADIhRAGIkKAAIAAAOQAzgNCAARQBWAMBSASQBlAIBEAKIAaADIClAXQAaADC/AxIBYAYIgDAgIgqgMQjHg2gzgIIivgXQjcgcjzgeIgCAFQgJAAgxAFQg1AFgpAHIj5AAIgLgFIgGgGQATgYAagIQAOgEAYgEIDaAAIgHgcIgLgLQABgEADgDIADgCQgLhCgHh9IgDiMIAAgfIgBgRIgChLIAAgBIAAgCIABhuIABgHIgBAAIAAgBIk9AAQhfgLhZgPQgJgEgOgEIAAAEIgBAAIAAJkIAUCFIALBLID0gCQAcgEDEgJIAAgBIGHAAQAGABAGAAQAFACAAANQAAAOgFACIgMABImeACQidAIgwAFIgNABIjdAAQADAEACAEIgBAEQBDADCFANIACAAIAcADQC1ARFtAnIAGANQgBAFgKAGQgMAFgOAAQiDAAktgkgEgjwARMIgWAQIFdjKQE9i2CHhLIA7ghIAcgOIAAgBIABAAQBBggCciFIBYhNIAigeIACgBICGh6IAbgYIggAKIAGgHQAkgnAHgMIAIgDIAlgRIgCgDIAAgBIgBgCIgEgGIgLgUQgZgzgSg1IgHgVQgKgjgIgkIgEgZIgBgHIgBgCIgBgIIgDgTIgDgZIAAAAIgBgEIAAAAIgFADQgQAMgEACQgDAAgcAXIgeAZQgUAOABACIAAAEIgoAiIgpAjIggAcIhvBfIhIBFIgbAaQgdAVggAZIhDA2Qg3AtgzAtIgdAbIgQAEQgRAQgKAFIgDgBIgSASIgJAIIgGAGIgQAPIgGAGIg8A8IgFAEIgJAJIgEAEIgGAGIgFAFIgHAHIgTAUIgJAJIgLALIgFAFIgGAGIgZAaIgDADIgDAEIgBAAIgEAEIgGAHIgJAKIgOAOIgDAEIgDACIkuFlIgDAEIgEAFIgBACIgRAXIgCADIgKAOIBmg7IhZA9gAytgGQgFAEgGAGIAUgSIgJAIgAaYS0IADAAIgDAQgAgxhYQhIgPg9gTIgIAAQhRgYgTgUIAAgBQhTgpgzg6IgJgKIgJgMIgBgCQg+hTgJiQIAAgsIgBAAIAAAAIABgvIAkAAIgCAQIgCAcIABANIABgBIADALIgEACQAECRA5BQIAEAFIATAXIAJAKQAwAwBMAlQAWAAAZAMQAQAIALAIIgtALQC0A6C0gUQAngFAogIQAwgKA0gRIA6gUIAUgHIANgEIBSghIAlgPIAOgGIB+hMIAEgDQBphQAlgUIAEgEIAyhAQAogpAjgsQARgRAPgNQAbgkAXgjIAGgJQA8hcAmhZQAXg0AOgzQANgtAJg2IAGgnIAIhEIAEgcIADgVIAFgtQAJhKADhPIABgNIAAgXIAEgHQACgdgDgbIgCgGIgBgLIAAAAQAAgMgCgMQgBgHgDgIIAZgKIANgGIACAAIAAAjIAAAUIAAAAIAAAOIAAACIACgBIAAArIgCABIAAACIAAAEIgCAmIAAANQgDBJgHBAIgFAtIgIA6IgBAHQgRBqgeBgQgRA3gVA0QgVA2gaAxQgWAtgaApIgBABIgBACIgWAhQgiAzgoAvQgiAogmAmIgnAkIgJAJIgHAGIgDACQgYAVgZATIgBABIgDACIAAABQhqBRiBBAIgLAGQgiARgkAPIgxAVQgsARgvAPQg/AVhDATg");
	this.shape_15.setTransform(259.1,259.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("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");
	this.shape_16.setTransform(266.1,235.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Au2UBQhPgJhKgMIgXAAIACgEQByAPBsAKgAMBMlQjAC+jyBzQEAiLCyimgARlz+IgBgDIADABIgDAAIABACIAAABIAAgBg");
	this.shape_17.setTransform(375.4,193.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A9BUiIgEgCIAAgsIAjgsQAkgWAjgYQglAwghAwIADABIAVgBQABAEAFANIgGASQgDAAgKAEQgLADgLAAQgNAAgIgCgA0uNVIgEgHQgRgXgKgTIAAARQgCAIgKAAQgIAAgIgEIAhgeIABgBIACgBIACgBIAAAAIAFgCIAEgBIACAEIADgEIAGAKIAFAGIApA9IAIANQAAAIgGADQgDACgKAAQgIAAgagngAcb0aQACgQAeAOIALAFIgrgDg");
	this.shape_18.setTransform(309.7,196.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("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");
	this.shape_19.setTransform(315.2,235.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AvMUBQhQgJhJgMIgXAAIABgEQBzAPBrAKgALrMlQjBC+jyBzQEAiLCzimgAR1x5IgDgCIAFACIAEACIACADIgIgFgAROz+IgBgDIADABIgCAAIAAACIAAABIAAgBg");
	this.shape_20.setTransform(377.6,193.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A9BUiIgEgCIAAgsIAjgsQAkgWAjgYQglAwghAwIADABIAVgBQABAEAFANIgGASQgDAAgKAEQgLADgLAAQgNAAgIgCgA0uNVIgEgHQgRgXgKgTIAAARQgCAIgKAAQgIAAgIgEIAhgeIABgBIACgBIACgBIAAAAIAFgCIAEgBIACAEIADgEIAGAKIAFAGIApA9IAIANQAAAIgGADQgDACgKAAQgIAAgagngAXHsfIAAAAIgFgFIgDgEQgEgHgEgLIgEgNIgBgGIgEgSIAAgBIgBgBIAAgDIgDgVIAAgHIgBgGIAAgPIgBgNIgBgQIAAgEIgCgSIAAgDIAAgCIAAgHIAAgQIAAgHQAEgmASgcIAEgIQBGheERANQASAJAKAOIABABIADAEIACAEIABACIAAAAIAAABIABACIABACIAAACIADAEIABASIAAACIABASIAAACIAAABIgBAIIgHAjIAAAAIAAABIgBAFIgBACIgBAEIgBACIgEAPIgBAFIgCAGIgBACIgGAQIgBADIgLAaIgFAKIgBADQgKARgJAQQgiAzgtAZQgrAXg1AAgAY9wNIAAACIgBAbIgBAGIAAAAIgBAGIgEAXIAAACIgBANQAAANAGAIQAGAKAWAQIBCAAQAigBAXgjQAHgMAFgMQAGgQAAgPIABgBQAFgTgPgPIAAAAQgKgJgQgFQgmgLhNAKQABACgNAAIgCgCQgCACgBANgAcb0aQACgQAeAOIALAFIgrgDg");
	this.shape_21.setTransform(309.7,196.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiscAIhTgKQi1gYhZgRQg/AHiTAVIi/AbQgNAAgEgDIgCgCQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgEgBAAgNQAAgdC3gVQBYgKCPgMIgXjiIAAp0IgCAAIAAgHIgEAAQgQgCgJACIgDAAIgGgBIgFgCIgGgBIgEgBIgFgBIgFgBIgHgBQkLg8i6hoIgFgDIgFgCQgzgegugiQhGgzg3g9IgIgJIgKgMIgqg9IgEgFIgGgLIgDAEIgDgEIgDACIgFACIAAAAIgCABIgCABIgBAAIgiAfIgjAkIgYAZIhnBwIgNAPQhaBchpBIQgjAZgkAWQgrAZguAXQjSBokNCaIgbAQIh6BGIgFAEIjKB2IglAWIgVANIgtAAIAAAAIgCgCQgEgDAAgMQAAhoE8lHIAMgMQBLhNBchaQCiibC+irIBlhaIAzgsIAhgcQAFACAHAAQAEACABANQgBADgFAIIBahGIAkgcIAAAAIADgCIAogeIAJgHIAJgHIBihJIAKgHIADgCIACgCIABAAIA2goIAAAAIAAgFIgDgaIAAgDQgDgaAAgbIAGgEIAbAAIAFBEIAAAAIAAAAIABgBIAAAAQAAAJABAHIgBAAIAAABIABADIADAVIACAUIAKA4QAIAoAMAlIAJAcIADAKIACAEIADAIQALAdAOAcIAKAVIAIAOIAGAKIAEgCIARgIIAJgEIABgBIAMADIACACQACAEABAJIAAACQgBAFgFAGQgHgDgQAMIABADIABADIgBABIAdAqIAHAJIAIAKQBKBcBtBJIArAcQDQB8E9A/IAEAAIACABIAAhqIgGgLIgCgEIACgCQANgHAOgLQAJALAEANIAABxIgjAGIAjAFIAEAAIgBAEIAWAAQBKAMBPAKIAwAAIAnADIAGABQCbANCKACQFRAFDug9QB0geBdgtQA0gaAygaIANgHQDyh0DBi+IB7iFQCkjFBojpQAXgzAUg0QAqhzAYhpIABgCIAUhxQAHg2ABgzIAAgCIAAgCIAAgGIAAgDIAAgCQAAipgGhRIgDgkIgCgNIgBgMIgIg8IgDgaIgEgWIgZAAIgDgCQgDgCAAgNQAAgDAZgIIABgBIAAAAIgBgIIgDgOIAAgEIgJgyIAAgDIgBgCIgDgUIAAgBIgPhEIgBgDIgHgbIgBgDIAAgCIgBgFIAAACIgBADIAAABIAAABIgsBkIgCADIgBACQgeAugrAeQhVA7iDAAQgsAAgdgNIgCgBIgDgCIgCgBIgNgIIgXgbIgEgHIAAAAIgBgDIgBgCIgFgMIgCgGIAAAAIAAgBIgCgHIgBgEIAAgBIgCgiIABgLIAAgCIADgbIAAgEIAAgyIAAgTIABgIQACggALgaQAGgNAHgLQAhgtBNgaIAPgFQAlgLAsgGQAngGAsgDIASABIA9ALIAHADIADABIAJAFIgCgDIAFACIACABIgBgDIAAgCIgFgMIgIgWIAAgCIgBgCIAAgCIgBgBIgMgiIgDgGIgEgMIAAgBIAAgPQgEgFgEgEIgCgCIAAAAIgCgCIAAAAIAAAAIgEgDIgCgBIAAgDIADAAIgBgBIgBgCIAAAAIAAAAIgBgCIADAAIgDgBIAAgCIgDgEIAAgBIgCABQgFgPgIgNIABAAIgBgCIgBgCIAAgBIgBgBIgCgDIgDgFIgDgFQgJgNgIgDIgDgBIgCAAQgMAAgJgDIgDgCIAAgrQAlgHAZAUIAIAHQAKAJAHAOIAIARIAAAAIAAAAIACAFQABASAHAOIABADIAAABIAAAAIABACIADAQIAAAAIAAAGIABABIABAAIArAEIADAAIADAAIADABIBGAGIAKABIAKABIAhADQBfAKBDAMQBTAPB0AiIAmAMIAtAOQArAKBkAWQBlAUB0AkQByAkA5AkQhHAZheAXQgrAKgvAJIgeAGIgPADIgGABIhUARQhHAOghAJIgCAAIAAAAIgCABIgCAAIgCAAIgBABIhdAbIgLADIgHADIgDAAIhcAcIgKADIgQAEIgaAIIgIACIgIADIgtANIgRAFIiAAiIgqAIIAAAAIABADIABARIADASIALBWIADAcQAKB1AACdQAABMgQBZQgGAggIAjQgZBhgpBwQgVA6gYA4QhrD0ikDOQj1E2lMCgQiiBPiyAoIkFAmQhlAGhrgEIhJgEIgiAAIAAFAIAaCvIALBLIErACIBRgGIGtgDQAngCB8gFIAQAAQACAUAEAOIg0ACIijAHImrACIhQAGIkLAAIAAAOQAzgNCAASQBWALBSASQBlAJBEAJIAaADIClAXQAaADC/AyIBZAXIgEAgIgqgMQjGg2gzgHIiwgXQjcgdjzgeIgCAFQgJAAgxAFQg1AGgnAGIj6AAIgKgFIgHgGQATgYAagHQAOgFAYgDIDZAAIgHgdIgLgLQABgEADgDIADgCQgLhCgHh9IgDi8IgBhOIABhuIAAgGIAAAAIAAgCIk9AAQhggLhZgPQgIgEgOgEIAAAEIgBAAIAAJkIAUCFIAKBLID0gCQAcgEDEgJIAAgBIGGAAQAGABAHAAQAEACAAANQAAAOgEACIgNABImdACQidAJgvAEIgOACIjcAAQADADABAFIgBADQBEADCEANIACABIAdACQC0ASFsAnIAGAMQgBAFgKAGQgMAGgNAAQiEAAkrglgEgsgAU6IgXAQIERieIBMgrQGSjnBug8IAbgOIABAAIAAAAQBBghCciFIBYhNIAigeIACgBICGh6IAbgYIggAKIAGgGQAkgoAHgMIAJgDIAkgQIgBgEIgBgBIgBgCIgEgGIgBgBIgHgNIgDgGIgEgJIgBgCIgNgdIgNggIgEgLIgEgMIgCgGIgIgZQgLgjgIgkIgEgZIgBgHIgBgCIgBgIIgDgSIgDgZIAAgBIAAgDIAAgBIgGAEQgQAMgEABQgDAAgbAYIgBABIgeAXQgUAPABABIAAAFIgnAhIgBABIgIAHIgBAAIgcAZIgDACIgPANIgFAEIgMALIhwBgIgTASIg1A0IgbAaQgdAUggAZQhbBHhSBKIgdAbIgQADQgQARgLAEIgDgBIgSASIgJAJIgGAFIgQAQIgFAFIg9A8IgFAFIgIAIIgFAFIgGAGIgFAEIgHAIIgTATIgJAJIgKALIgGAFIgGAHIgYAZIgEAEIgDADIgBABIgDADIgHAIIgJAJIgNAOIgEAEIgDADIkuFlIgDADIgEAGIgBABIgQAXIgDADIgKAOIBmg7IhYA9gA7dDnQgGAEgFAIIATgTIgIAHgAWJ2+IgFAHQgSAcgDAmIAAAHIgBAQIABAIIAAABIAAAEIABASIABADIAAARIABANIAAAPIABAFIABAHIADAWIAAADIAAABIABABIADASIABAGIAFANQADAKAFAIIADAEIAEAEIAAABICMACQA1AAArgYQAsgZAigzQAKgPAJgSIABgCIAFgKIALgaIACgEIAFgPIABgCIACgGIACgFIAEgPIAAgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgCgEIAAgCIgBgCIgBgBIAAgBIgBgBIgBgBIgCgEIgCgEIgBgBQgKgPgSgJIg/gBQjaAAg+BTgAbp6GIAAACIABABIAAABIABAIIABACIAAACIABADIAAACIABABIAAAAQAEAVAFAOIAGAPIACAIIAGARIAGASIADABIAAABQAAAFAKAhQAKAeAJAOIAAABIACAHIAEAKIABADIABACIAMAkIAAABIABACIAMAnIACAFIABAEIAKAxIABABIAAABIAIAyIAEARIAEAdIAAAFIABAHIAWgHIAQgFIAMgDQBHgVB3gfIAugMIAMgDIAIgCIANgEIACAAQBvgdBjgYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEQg2gLg1gMIgLgDQhSgThRgXQiTgshOgVIgMgDQhNgVhZgTQhsgWh9gSIhggNIgxgGIgYgDIgCgBIAAAAIABAGgARnWiIAEAAIgEARgApiCVQhIgPg9gTIgIABQhRgZgTgTIAAgBQhDgigugrIgUgWIgKgKIgJgMIgBgBQg+hUgIiPIAAgsIgBAAIAAgBIABgvIAjAAIgCAQIgCAcIABANIABgBIADALIgEACQAFCRA4BQIAFAFIASAXIAJAKQARAQAUAQQAmAcAxAYQAWAAAZAMQAQAIAMAJIguAKQC0A6C2gUQAngFAngIQAwgKA1gQIA5gUIAVgIIAMgEIBSghQAagJAZgLIB9hMIAEgDQBqhQAkgTIAEgFIAzhAQAngoAjgsQARgSAPgNQAbgkAXgjIAHgJQArhDAhhCIAWgwQAWgzAOgzQANguAJg2IAHgnIAHhDIAEgdIADgUIAFguQAJhKAEhPIAAgNIAAgWIAEgHQACgegDgaIgBgHIgBgKIAAgBQgBgMgCgLQgBgIgDgIIAagKIAMgFIACgBIAAAjIAAAUIAAABIAAANIAAACIADAAIAAAqIgDABIAAACIAAAEIgCAmIAAANQgDBJgHBAIgEAtIgJA6IgBAIQgRBpgeBgQgQA3gWA0IgUAwQgMAcgOAcQgXAsgaApIAAABIgCADIgVAhQgjAygnAvQgjApgmAlIgnAlIgJAIIgHAGIgDACQgXAVgZAUIgBAAIgDADIgBAAQhVBChkA2IgxAZQgnATgqASIgxAVQgsARguAQQg/AVhEASgAYg0YQgWgQgGgLQgFgIAAgNIABgNIAAgCIADgWIABgGIAAAAIABgGIACgbIAAgCQAAgNADgCIABACQANAAAAgDQBMgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQABAPgHAPQgEAMgIANQgWAjgiABgAY513IgFACQgIAFgFAKQgDAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIABgEQAFgNADgMIABgHQgGgDgJgCIgOgBIggAAQACABABAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAWQ5CIACAAIgCAAgAeC8RIACAAIgDABg");
	this.shape_22.setTransform(315.2,235.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A9BUiIgEgCIAAgsIAjgsQAkgWAjgYQglAwghAwIADABIAVgBQABAEAFANIgGASQgDAAgKAEQgLADgLAAQgNAAgIgCgA0uNVQgUgcgLgVIAAARQgCAIgKAAQgIAAgIgEIAhgeIAOgGIACAEIADgEIAGAKIAFAGIApA9IAIANQAAAIgGADQgDACgKAAQgIAAgagngAXHsfIAAAAIgFgFIgDgEQgEgHgEgLIgEgNIgBgGIgEgSIAAgBIgBgBIAAgDIgDgVIAAgHIgBgGIAAgPIgBgNIgBgQIAAgEIgCgSIAAgDIAAgCIAAgHIAAgQIAAgHQAEgmASgcIAEgIQBGheERANQASAJAKAOIABABIADAEIACAEIABACIAAAAIAAABIABACIABACIAAACIADAEIABASIAAACIABASIAAACIAAABIgBAIIgHAjIAAAAIAAABIgBAFIgBACIgBAEIgBACIgEAPIgBAFIgCAGIgBACIgGAQIgBADIgLAaIgFAKIgBADQgKARgJAQQgiAzgtAZQgrAXg1AAgAY9wNIAAACIgBAbIgBAGIAAAAIgBAGIgEAXIAAACIgBANQAAANAGAIQAGAKAWAQIBCAAQAigBAXgjQAHgMAFgMQAGgQAAgPIABgBQAFgTgPgPIAAAAQgKgJgQgFQgmgLhNAKQABACgNAAIgCgCQgCACgBANgAcb0aQACgQAeAOIALAFIgrgDg");
	this.shape_23.setTransform(309.7,196.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("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BSghQAagJAZgLIB9hMIAEgDQBqhQAkgTQAcglAbggQAngoAjgsQARgSAPgNQAbgkAXgjIAHgJQA7hbAnhaQAWgzAOgzQANguAJg2IAHgnIAHhDIAEgdIADgUIAFguQAJhKAEhPIAAgNIABgcIgFACIgXALIgEACIgIADIgVAKIiCA8IgzAXIhqAtIAGANIqYFLIgwAaIgGADIhzBAQicBYijBqQhYA4hZA9IgKAHIgCACIgMAHQAFCRA4BQIAFAFIASAXIAJAKQAwAvBMAlIACAAQAVAAAYAMgAWJ2+IgFAHQgSAcgDAmIAAAHIgBAQIABAIIAAABIAAAEIABASIABADIAAARIABANIAAAPIABAFIABAHIADAWIAAADIAAABIABABIADASIABAGIAFANQADAKAFAIIADAEIAEAEIAAABICMACQA1AAArgYQAsgZAigzQAKgPAJgSIABgCIAFgKIALgaIACgEIAFgPIABgCIACgGIACgFIAEgPIAAgCIABgFIABgCIABgEIAAgBIAAgBIAHgiIABgJIAAgBIAAgBIgBgTIAAgBIgBgTIgCgEIAAgCIgBgCIgBgBIAAgBIgBgBIgBgBIgCgEIgCgEIgBgBQgKgPgSgJIg/gBQjaAAg+BTgAbp6GIAFAWQAEAVAFAOIAGAPIACAIIAGARIAGASIADABIAAABQAAAFAKAhQAKAeAJAOIAAABIACAHIAEAKIABADIABACIAMAkIAAABIABACIAMAnIACAFIABAEIAKAxIABABIAAABIAIAyIAEARIAEAdIAAAFIABAHIAWgHIAQgFIAMgDQBHgVB3gfIAugMIAMgDIAIgCIANgEIACAAQBvgdBjgYIAEgBIBNgTQCEgfBqgVIALgCIAGgBIAEgBIACAAIAKgCIA6gLIAIgBIAIgEQg2gLg1gMIgLgDQhSgThRgXQiTgshOgVIgMgDQhNgVhZgTQhsgWh9gSQhGgKhLgJIgYgDIgCgBIABAGgARnWiIAEAAIgEARgAYg0YQgWgQgGgLQgFgIAAgNIABgNIAAgCIADgWIABgGIAAAAIABgGIACgbIAAgCQAAgNADgCIABACQANAAAAgDQBMgKAmAMQAQAFAKAJIAAAAQAPAOgFATIgBACQABAPgHAPQgEAMgIANQgWAjgiABgAY513IgFACQgIAFgFAKQgDAHgCAKQgCALAAAOIBNgCIAQgRIADgGIACgDIABgEQAFgNADgMIABgHQgGgDgJgCIgOgBIggAAQACABABAKIAAACIAAABIgCgBIgBAAQgHgDgGAAIgJABgAat6SIAAgBQAEgDACAAIABAFIgHgBgAeC8RIACAAIgDABg");
	this.shape_24.setTransform(315.2,235.9);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_9},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_9},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_15},{t:this.shape_6},{t:this.shape_14},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.seventeen17_3},{t:this.seventeen17_2}]},1).to({state:[{t:this.shape_16},{t:this.shape_12},{t:this.shape_14},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.seventeen17_3},{t:this.seventeen17_2}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_20},{t:this.shape_11},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},4).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({x:315.1,alpha:0.071},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.212},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.354},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.495},0).wait(1).to({alpha:0.566},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.849},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.99},0).wait(1).to({regY:220,x:315.4,y:235.7,alpha:1},0).to({_off:true},7).wait(25).to({_off:false},0).to({_off:true},15).wait(10));

	// Sound Button
	this.instance_3 = new lib.sound_noSound();
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.1,40.5,1,1,0,0,0,12.1,10.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86));

	// Border
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_25.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,239,642,482);
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