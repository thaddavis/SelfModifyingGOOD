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


(lib.fortytwo42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AhLBzQAAgKAEgKQAGgPAMgPQANgPAYgTQAkgfAOgRQANgSAAgQQAAgQgMgMQgMgMgTAAQgUAAgMANQgMALAAAWIgdgDQADggATgRQATgRAgAAQAhAAATATQAUARAAAcQAAAOgGANQgGANgNAOQgNAOgeAaIggAdQgHAIgEAHIBvAAIAAAbg");
	this.shape.setTransform(8.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AhRB6QADgYANgWQANgWAoglQAegcAHgLQAKgOAAgOQAAgQgIgIQgJgIgPAAQgNAAgJAIQgIAJgCAVIgugFQAEgnAWgQQAWgRAgAAQAkAAAUATQAVAUAAAdQAAAQgGAPQgGAPgNAPQgIALgWAUIgbAbIgKANIBcAAIAAArg");
	this.shape_2.setTransform(9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortythree43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgLACIACgXIAFAAQARAAAOgJQAPgKAAgTQAAgPgKgLQgLgKgPAAQgRAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQATAAAPAIQAQAIAIAOQAJAOAAAPQAAAPgJAMQgHANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortysix46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BbQgWgaAAg7QAAhCAZgdQAVgbAjAAQAcAAARAPQARAQADAaIgbACQgEgQgHgIQgMgMgQAAQgNAAgKAHQgNAKgIATQgHASgBAjQAKgPAPgIQAPgHAPAAQAcgBAUAVQAUAUAAAgQAAAWgKATQgJASgQAKQgRAKgUAAQgiAAgXgagAgdADQgNAOAAAWQAAAPAGAMQAGAOALAHQALAHALAAQASAAANgOQANgPAAgZQAAgYgNgNQgNgMgTAAQgSAAgNAMg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BgQgXgdAAhBQAAhCAYgeQAZgdAnAAQAbAAATAPQASAQAFAdIgtAFQgCgNgHgHQgHgHgLAAQgOAAgKAOQgKANgDAqQARgVAZAAQAeAAAUAWQAVAWAAAjQAAAlgWAXQgWAWgiAAQgkAAgYgcgAgTAHQgJALAAAUQAAAXAKAMQALANAMAAQANAAAJgKQAJgLAAgXQAAgXgKgLQgJgKgOAAQgMAAgKAJg");
	this.shape_2.setTransform(9.6,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortyseven47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgpBxQAAgbALgmQAKgnATgiQASgkAVgYIhvAAIAAgbICTAAIAAAWQgWAXgVAmQgWAmgKApQgJAdgCAig");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AguB4QABgzAUg0QATgzAggpIhpAAIAAgsICfAAIAAAiQgUATgUAlQgVAjgKApQgKApAAAgg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortyone41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAOBzIAAiyQgKAKgPAJQgRAKgNAEIAAgbQAYgLARgQQARgPAHgPIASAAIAADlg");
	this.shape.setTransform(7.7,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAHB6IAAivQgZAYgiAMIAAgrQARgGAWgQQAUgRAJgWIAmAAIAADzg");
	this.shape_2.setTransform(8.1,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortynine49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgyBmQgRgPgDgbIAbgDQADAUAKAIQAKAJAPAAQAMAAAKgGQAJgGAHgKQAGgKAEgRQAEgQAAgSIAAgGQgIAOgPAIQgPAJgQAAQgcAAgUgWQgTgTAAgiQAAgiAUgWQAVgVAfAAQAVAAATAMQASAMAKAXQAJAVAAArQAAAqgJAbQgKAZgTAOQgTAOgYAAQgbAAgRgPgAgghOQgOAQAAAYQAAAWAOAOQANANATAAQATAAAMgNQANgOAAgYQAAgYgNgOQgNgPgSAAQgSAAgOAPg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BtQgSgPgFgfIAtgEQACANAHAHQAHAHALAAQAOAAAKgOQAKgNADgqQgSAVgZAAQgdAAgVgWQgUgWAAgjQAAglAWgXQAWgXAiAAQAkABAXAdQAYAcAABBQAABCgZAeQgYAegngBQgdAAgRgPgAgahKQgJAJAAAYQAAAYAKAKQAJALAOAAQAMAAAKgKQAJgLAAgUQAAgXgLgMQgKgMgNAAQgNgBgIALg");
	this.shape_2.setTransform(9.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortyfour44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape.setTransform(8.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_2.setTransform(9.4,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortyfive45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag0BiQgUgSgDgdIAegDQADAWAMALQAMALARAAQATAAAOgQQAOgPAAgZQAAgYgNgNQgOgOgVAAQgNAAgLAGQgLAGgHAJIgagEIAWh0IBxAAIAAAbIhaAAIgNA9QAVgOAWAAQAeAAAUAVQAVAUAAAhQAAAegSAXQgWAcglAAQggAAgTgRg");
	this.shape.setTransform(8.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag4BoQgVgSgEgeIAugGQACAQALAKQAJAJANAAQANAAALgMQAKgMAAgYQAAgXgKgKQgKgKgQAAQgTAAgRAQIglgGIAXh9IB7AAIAAAsIhXAAIgHApQAQgIAOAAQAfAAAWAWQAWAXAAAkQAAAdgSAYQgXAggqAAQghAAgWgSg");
	this.shape_2.setTransform(9.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fortyeight48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BhQgWgUAAgeQAAgWAMgPQALgPAVgFQgSgGgIgNQgJgLAAgRQAAgZASgRQATgRAdAAQAdAAATASQASARAAAZQAAAQgIALQgIANgSAGQAVAGAMAPQALAQgBAVQAAAdgUAUQgVAUgiAAQghAAgUgUgAghAOQgMANAAAUQgBAMAGALQAGAMALAFQAMAHAMAAQATAAAOgNQANgNAAgUQAAgVgOgNQgOgNgTAAQgUAAgNANgAgahTQgKALAAAOQAAAQAKAKQAKALAQAAQARAAAKgKQAKgLAAgPQAAgPgKgKQgMgLgPAAQgQAAgKAKg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BrQgagUAAgkQAAgUAJgRQALgPAVgKQgTgHgIgNQgIgNAAgRQAAgbATgSQATgSAjAAQAiAAATASQATASAAAbQAAASgJANQgJAMgQAHQAVAJALAPQAKAPAAAVQAAAhgWAVQgVAWgkgBQggAAgWgRgAgZAVQgIALAAAOQAAATAJALQALALANAAQAOAAAKgKQAKgLAAgUQAAgQgKgLQgKgLgOAAQgQABgJAMgAgVhPQgIAJAAANQAAAOAIAHQAIAJANgBQAMABAIgJQAIgHAAgOQAAgNgIgJQgHgHgNAAQgNAAgIAHg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.forty40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBdQgXgdABhAQgBgoAJgZQAIgYARgOQAQgNAYAAQASAAAPAIQANAHAJAOQAKAOAFAUQAEAUABAhQgBApgHAYQgJAZgQANQgRAOgZAAQggAAgTgYgAgehNQgPAWAAA3QAAA4AOATQAMATATAAQATAAAOgTQANgTAAg4QAAg4gNgSQgNgSgUgBQgSAAgMAQg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AAUBzIAAg3IhiAAIAAgaIBniUIAXAAIAACUIAfAAIAAAaIgfAAIAAA3gAgzAiIBHAAIAAhng");
	this.shape_1.setTransform(-9.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BhQgVgbAAhGQAAhEAXgeQAVgZAiAAQAjAAAUAZQAYAeAABEQAABFgYAeQgUAZgjAAQgiAAgXgbgAgOhPQgHAFgDAOQgGASAAAqQABArAEAQQAEAQAHAFQAHAGAHAAQAJAAAGgGQAGgFAEgOQAFgSAAgrQAAgqgFgQQgEgQgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("AAMB6IAAgxIhjAAIAAgpIBpiZIAnAAIAACZIAfAAIAAApIgfAAIAAAxgAgrAgIA3AAIAAhSg");
	this.shape_3.setTransform(-9.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fifty50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBdQgXgdABhAQgBgoAJgZQAIgYARgOQAQgNAYAAQASAAAPAIQANAHAJAOQAKAOAFAUQAEAUABAhQgBApgHAYQgJAZgQANQgRAOgZAAQggAAgTgYgAgehNQgPAWAAA3QAAA4AOATQAMATATAAQATAAAOgTQANgTAAg4QAAg4gNgSQgNgSgUgBQgSAAgMAQg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("Ag0BiQgUgSgDgdIAegDQADAWAMALQAMALARAAQATAAAOgQQAOgPAAgZQAAgYgNgNQgOgOgVAAQgNAAgLAGQgLAGgHAJIgagEIAWh0IBxAAIAAAbIhaAAIgNA9QAVgOAWAAQAeAAAUAVQAVAUAAAhQAAAegSAXQgWAcglAAQggAAgTgRg");
	this.shape_1.setTransform(-8.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BhQgVgbAAhGQAAhEAXgeQAVgZAiAAQAjAAAUAZQAYAeAABEQAABFgYAeQgUAZgjAAQgiAAgXgbgAgOhPQgHAFgDAOQgGASAAAqQABArAEAQQAEAQAHAFQAHAGAHAAQAJAAAGgGQAGgFAEgOQAFgSAAgrQAAgqgFgQQgEgQgGgFQgGgFgJAAQgIAAgGAFg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("Ag4BoQgVgSgEgeIAugGQACAQALAKQAJAJANAAQANAAALgMQAKgMAAgYQAAgXgKgKQgKgKgQAAQgTAAgRAQIglgGIAXh9IB7AAIAAAsIhXAAIgHApQAQgIAOAAQAfAAAWAWQAWAXAAAkQAAAdgSAYQgXAggqAAQghAAgWgSg");
	this.shape_3.setTransform(-9.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.fishTransition01Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyeLeft
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape.setTransform(450.6,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AEyDLQgWAnggAjQhoByiUAAQiTAAhohyQhphyAAijQAAihBphzQBohyCTAAQCUAABoByQAdAgAVAkQA3BcAAB0QAABygzBZg");
	this.shape_1.setTransform(449,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BFQgagcAAgoQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAogbAcQgaAbglAAQgkAAgbgbg");
	this.shape_2.setTransform(450.6,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj7EVQhphyAAijQAAihBphzQBohyCTAAQCUAABoByQAdAgAVAkQA3BcAAB0QAABygzBZQgWAnggAjQhoByiUAAQiTAAhohygAgvgJQgaAcAAAoQAAAoAaAcQAbAbAjAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQgjAAgbAcg");
	this.shape_3.setTransform(449,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("AklhZQAAhvBYgwQBLhEBoAJQBwAZBYBsQAmA1AcAxQAqBJAGBYQASBtgiA/QgQAegngGQhYAvh8gsQh7gthYhvQhYhtABhwg");
	this.shape_4.setTransform(469.2,-8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0099FF").ss(4.7,1,1).p("AhKgZQAAgcAWgMQAWgLAeALQAfALAWAbQAWAbAAAbQAAAbgWAMQgWALgfgLQgegLgXgbQgVgbAAgag");
	this.shape_5.setTransform(471.8,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAABCQgegLgXgbQgVgbAAgaQAAgcAWgMQAWgLAeALQAfALAWAbQAWAbAAAbQAAAbgWAMQgLAGgOAAQgNAAgPgGg");
	this.shape_6.setTransform(471.8,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAFEgQh7gthYhvQhYhtABhwQAAhvBYgwQBLhEBoAJQBwAZBYBsQAmA1AcAxQAqBJAGBYQASBtgiA/QgQAegngGQgtAYg3AAQg0AAg8gVgAgbAHQgWAMAAAcQAAAbAWAbQAWAbAeALQAgALAVgLQAXgMAAgbQAAgcgWgbQgWgbgggLQgPgGgMAAQgNAAgMAGg");
	this.shape_7.setTransform(469.2,-8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0099FF").ss(3.4,1,1).p("Ag8g0QABgPARAEQASAFAYAXQAZAWASAZQASAagBAPQAAAPgSgEQgRgFgZgWQgZgWgRgaQgSgaAAgPg");
	this.shape_8.setTransform(493,-7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1.5,1,1).p("AjsjhQABg9BHAUQAtgWA9ATQBNAwBIBnQAuBJAkA/QAeA1ALA7QAjBrgRAkQgIAUgvgvQhHgThlhaQhkhZhHhqQhGhqAAg9g");
	this.shape_9.setTransform(490,-11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAqA/QgRgEgZgXQgZgVgRgaQgSgaAAgPQABgPARAEQASAFAYAXQAZAVASAaQASAagBAPQAAAMgKAAIgIgCg");
	this.shape_10.setTransform(493,-7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACxD2QhHgThlhaQhkhZhHhqQhGhqAAg9QABg9BHAUQAtgWA9ATQBNAwBIBnQAuBJAkA/QAeA1ALA7QAjBrgRAkQgDAGgGAAQgNAAghghgAgegLQAAAOASAaQAQAaAZAWQAaAWARAFQASAFAAgPQABgPgSgaQgSgbgZgVQgZgWgRgFIgHgBQgLAAAAAMg");
	this.shape_11.setTransform(490,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0099FF").ss(2,1,1).p("AABgFQATAgAOAZQAMAZAAACQAAADgOgVQgNgVgTghQgSgggOgaQgNgZAAgDQABgCANAVQAOAWASAhg");
	this.shape_12.setTransform(514.1,-13.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1.5,1,1).p("ABjCTQASAiAQAeQA2BngBAKQgBAKg3hXQg2hWhNiHQhNiFg2hnQg2hmABgKQABgLA3BXQAPAYARAdQAsBJA3BhQA2BcArBOg");
	this.shape_13.setTransform(511.4,-18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAgA9Iggg2Iggg6QgNgZAAgDQABgCANAVIAgA3IAhA5QAMAZAAACIAAABQgCAAgMgTg");
	this.shape_14.setTransform(514.1,-13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACCD3Qg2hWhNiHQhNiFg2hnQg2hmABgLQABgKA3BXIAgA1QAsBIA3BiQA2BcArBOIAiBAQA2BngBAJIgBACQgGAAgxhOgAgRgfQAAACANAaIAfA5IAhA2QANAVAAgDQABgCgNgZIggg5Iggg2QgMgUgCAAIAAABg");
	this.shape_15.setTransform(511.4,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).wait(2));

	// finBottom01
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1.5,1,1).p("AMRAbQg9AfiOAzQi3BCjDA0QoyCWmqgaQEShuERkOQBlhlBLhjQBChXANgmQB4CBD+B+QD7B8COACg");
	this.shape_16.setTransform(215,139.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("AsQFfQEShuERkOQBlhlBLhjQBChXANgmQB4CBD+B+QD7B8COACQg9AfiOAzQi3BCjDA0QngCAl9AAQhBAAg+gEg");
	this.shape_17.setTransform(215,139.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1.5,1,1).p("ArUGOQD9iqDbj/QBMhVA6hTQBJiAAEhKQCNBPDnBMQElBEBlAFQhHBeimBpQiMA9iWA1QnbC7m/BDg");
	this.shape_18.setTransform(241.6,149.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("Aj8gbQBMhVA6hUQBJh/AEhKQCNBODnBMQElBFBlAEQhHBfimBpQiMA9iWA0QnbC8m/BDQD9iqDbj/g");
	this.shape_19.setTransform(241.6,149.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1.5,1,1).p("AqYG6QDojlCljwQAzhGAohDQBPipgFhsQCjAbDRAaQFQANA7AGQhSCei9CgQhgA4hqA1QmEDinUCeg");
	this.shape_20.setTransform(268.3,159.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AkLgbQA0hGAnhDQBQipgGhsQCjAbDRAaQFPANA8AGQhSCei9CgQhgA4hqA1QmEDinUCeQDpjlCkjwg");
	this.shape_21.setTransform(268.3,159.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1.5,1,1).p("AJdoPQhcDejVDWQg2A1g8A0QktEInpD7QDTkiBvjhQAbg2AVgzQBWjRgOiQIFzgvQF6gsASAIg");
	this.shape_22.setTransform(294.9,164.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("AkaAOQAbg2AWgzQBVjRgOiQIF0gvQF5gsASAIQhcDejVDWQg2A1g8A0QktEInpD7QDTkiBvjhg");
	this.shape_23.setTransform(294.9,164.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).wait(3));

	// gill
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFCC02").ss(3,1,1).p("AhE0YQm/EuigHeQiUG2CCHBQCBG+FbEQQFzEkJZhY");
	this.shape_24.setTransform(323,6.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFCC02").ss(3,1,1).p("Agh0SQlkFRiNGWQiPGbBYGJQBaGPErEfQExEgH+BM");
	this.shape_25.setTransform(328.2,5.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFCC02").ss(3,1,1).p("AgE0cQykZ9aYO8");
	this.shape_26.setTransform(334,6.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFCC02").ss(3,1,1).p("AHcySQ54SiTKSD");
	this.shape_27.setTransform(390,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(3));

	// mouth
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1.5,1,1).p("ACjABIlFgB");
	this.shape_28.setTransform(390.4,47.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1.5,1,1).p("AiEAAIEJAB");
	this.shape_29.setTransform(439.3,47.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1.5,1,1).p("AhlAAIDLAB");
	this.shape_30.setTransform(488.2,47.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1.5,1,1).p("ABHABIiNgB");
	this.shape_31.setTransform(537.1,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(3));

	// tail
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1.5,1,1).p("Aj2tqQC2KlFuDOQmkEAh2JiQh9uLBztKg");
	this.shape_32.setTransform(128.1,21.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC02").s().p("Aj2tqQC2KlFuDOQmkEAh2JiQh9uLBztKg");
	this.shape_33.setTransform(128.1,21.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1.5,1,1).p("AlmuQQE0J9G+ERQniEbkJJ4QhTumBMt7g");
	this.shape_34.setTransform(118.3,22);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC02").s().p("AlmuQQE0J9G+ERQniEbkJJ4QhTumBMt7g");
	this.shape_35.setTransform(118.3,22);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1.5,1,1).p("AnWu2QGxJWIOFRQofE4mdKOQgpvBAmusg");
	this.shape_36.setTransform(108.6,22.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC02").s().p("AnWu2QGxJWIOFRQofE3mdKPQgpvBAmusg");
	this.shape_37.setTransform(108.6,22.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1.5,1,1).p("ApGvcQIvIuJeGTQpcFUoxKkg");
	this.shape_38.setTransform(98.9,23.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC02").s().p("ApGvcQIvIuJeGSQpcFUoxKlg");
	this.shape_39.setTransform(98.9,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32}]}).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).wait(3));

	// eye01
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAbQgaAcglAAQglAAgagcQgagbAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape_40.setTransform(292,4.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1.5,1,1).p("AFlAAQAAAigFAgQgRB5hTBaQhoByiUAAQiTAAhohyQhThagRh5QgFggAAgiQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChg");
	this.shape_41.setTransform(292.8,-1.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag/BEQgagcAAgnQAAgnAagdQAbgcAkAAQAlAAAaAcQAbAdAAAnQAAAngbAcQgaAcglAAQgkAAgbgcg");
	this.shape_42.setTransform(292,4.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Aj7EVQhThagRh5QgFggAAgiQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChQAAAigFAgQgRB5hTBaQhoByiUAAQiTAAhohygAhHgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAlAAAagbQAbgcAAgoQAAgogbgcQgagcglAAQgkAAgbAcg");
	this.shape_43.setTransform(292.8,-1.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0099FF").ss(6,1,1).p("AhZABQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAoQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgog");
	this.shape_44.setTransform(351.4,3.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1.5,1,1).p("Al5AAQAAibBohxQB4h6CZAAQCaAABtBuQAFAGAGAGQBoBwAACcQAAAkgFAhQgTByhRBXQgEAFgGAFQhtBviaAAQiZAAhshuQgGgGgGgGQhRhXgShyQgFggAAgjg");
	this.shape_45.setTransform(344.3,-2.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag/BFQgagcAAgoQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAogbAcQgaAbglAAQgkAAgbgbg");
	this.shape_46.setTransform(351.4,3.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkFEZIgMgMQhRhXgShyQgFggAAgjIAAgBQAAibBohxQB4h6CZAAQCaAABtBuIALAMQBoBwAACcQAAAkgFAhQgTByhRBXIgKAKQhtBviaAAQiZAAhshugAAHgFQgZAcAAAoQAAAoAZAcQAaAbAlAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQglAAgaAcg");
	this.shape_47.setTransform(344.3,-2.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1.5,1,1).p("AmOAAQAAifByhxQB9h2CfAAQCgAAByBrQAGAFAFAFQByByAACfQAAAlgGAiQgUBzhYBXQgFAFgFAFQhzBsigAAQieAAhyhqQgGgGgGgGQhZhYgUh0QgFghAAgig");
	this.shape_48.setTransform(395.9,-3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AkPEdIgNgMQhYhYgVh0QgFghAAgiIAAgCQAAifByhxQB+h2CeAAQCgAAByBrIAMAKQBxByAACfQAAAlgGAiQgUBzhXBXIgLAKQhzBsigAAQieAAhxhqgABVgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAnAAAZgbQAbgcAAgoQAAgogbgcQgZgcgnAAQgkAAgbAcg");
	this.shape_49.setTransform(395.9,-3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape_50.setTransform(470.2,2.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1.5,1,1).p("AGkAAQAACjh7ByQh7ByiuAAQitAAh6hyQh8hyAAijQAAihB8hzQB6hyCtAAQCuAAB7ByQB7BzAAChg");
	this.shape_51.setTransform(447.4,-3.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag/BEQgagbAAgoQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAogbAbQgaAcglAAQgkAAgbgcg");
	this.shape_52.setTransform(470.2,2.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AknEVQh8hyAAijQAAihB8hzQB6hyCtAAQCuAAB7ByQB7BzAAChQAACjh7ByQh7ByiuAAQitAAh6hygACkgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQgkAAgbAcg");
	this.shape_53.setTransform(447.4,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42,p:{x:292,y:4.5}},{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:351.4,y:3.9}}]},1).to({state:[{t:this.shape_49},{t:this.shape_42,p:{x:410.8,y:3.3}},{t:this.shape_48},{t:this.shape_44,p:{x:410.8,y:3.3}}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).wait(3));

	// body
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBAQRn6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxQg");
	this.shape_54.setTransform(319.6,16.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxQQRn6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_55.setTransform(319.6,16.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1.5,1,1).p("A6oAzQSr60S/DWQEXA9DfC3QAWAaAVAaQC3DtBmEiQBaDyAjDoQA4D0gQCLQgBATgEAQQgnC0jiDQQi3DskvCaQg0Aag1AbQwyIRpvjOQq0jiibx0g");
	this.shape_56.setTransform(329.3,16.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6600").s().p("AtZWKQq0jiibx0IAAgBQSr60S/DWQEXA9DfC3IArA0QC3DtBmEiQBaDyAjDoQA4D0gQCLQgBATgEAQQgnC0jiDQQi3DskvCaIhpA1QsFF9obAAQjSAAivg6g");
	this.shape_57.setTransform(329.3,16.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.5,1,1).p("A8ZAnQTv7TTOEiQETBGD1C1QAUAdASAdQCtEPByEIQB1D/BBDOQBsESAGBiQACAPgCAJQgUBfljDvQjSC4lHCuQg4Aeg5AeQw4Iwp+iyQrcjKifyYg");
	this.shape_58.setTransform(340.4,17.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6600").s().p("AueWJQrcjKifyYIAAAAQTv7TTOEiQETBGD1C1IAmA6QCtEPByEIQB1D/BBDOQBsESAGBiQACAPgCAJQgUBfljDvQjSC4lHCuIhxA8Qs0Gpo1AAQizAAiagrg");
	this.shape_59.setTransform(340.4,17.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1.5,1,1).p("A+OAcUAZVgh0AXWAPzQLyWFAAAPQgBAPyqKTUglCAUJgEwgi+g");
	this.shape_60.setTransform(351.8,17.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6600").s().p("A+OAcUAZVgh0AXWAPzQLzWFgBAPQAAAPyrKTQtiHXpOAAQwBAAjB2Mg");
	this.shape_61.setTransform(351.8,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).wait(3));

	// finBotoom
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1.5,1,1).p("Ar1ltQDuAfEGCVQBBAmBDAsQFNDeImDEQoDBSj1gwQg8gMg3gHQjggciIA0IiPlcQiNlfAEgUg");
	this.shape_62.setTransform(414.9,112);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC00").s().p("AgCFdQg8gMg3gHQjggciIA0IiPlcQiNlfAEgUQDuAfEGCVQBBAmBDAsQFNDeImDEQlEAzjZAAQiBAAhagRg");
	this.shape_63.setTransform(414.9,112);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1.5,1,1).p("AoolgQCtAdDACRQAwAkAwAqQDzDWGSC+Ql4BOizguQgsgLgogHQikgbhjAyIholPQhnlTADgTg");
	this.shape_64.setTransform(398.9,107.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC00").s().p("AgBFQQgsgLgogHQikgbhjAyIholPQhnlTADgTQCtAdDACRQAwAkAwAqQDzDWGSC+QjtAxieAAQheAAhCgRg");
	this.shape_65.setTransform(398.9,107.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1.5,1,1).p("AlclTQBtAdB5CKQAeAjAfApQCZDOD9C3QjtBLhwgsQgcgLgZgHQhogag+AwIhClCQhBlGACgTg");
	this.shape_66.setTransform(383,103.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC00").s().p("AAAFEQgcgLgZgHQhogag+AwIhClCQhBlGACgTQBtAdB5CKQAeAjAfApQCZDOD9C3QiVAvhkAAQg7AAgpgQg");
	this.shape_67.setTransform(383,103.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1.5,1,1).p("AiPlGQAtAbAyCGQANAhAMAoQA/DGBpCvQhiBJgvgrQgLgKgKgHQgrgZgaAuIgbk2Qgbk5ABgSg");
	this.shape_68.setTransform(367,99.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC00").s().p("AAAE3QgLgKgKgHQgrgZgaAuIgbk2Qgbk5ABgSQAtAcAyCFQANAhAMAoQA/DGBpCvQg+AugpAAQgZAAgRgQg");
	this.shape_69.setTransform(367,99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62}]}).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).wait(3));

	// topFins
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1.5,1,1).p("ADTxeQFCILA/IKQlKmIp7kJQFeGnBfG4Qm+lOnmg9QFtFlC3GKQmJi+oIguQGeEcDOFAQkFiimogfII0HHILpsDIG7i8QEEhlCxhFQBMgbE0hTQmYobqcnLg");
	this.shape_70.setTransform(258.1,-100.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC00").s().p("A0GKYQGpAfEECiQjNk/mfkdQIIAvGJC9Qi3mKlslkQHmA8G9FPQhfm5ldmmQJ6EIFKGIQg/oKlCoLQKcHLGYIbQk0BThMAbIm1CrIm7C7IrpMDg");
	this.shape_71.setTransform(258.1,-100.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1.5,1,1).p("A0pKlQFvAwEYB2QALACAKADQjjkslakXQgHgKgHgKQHpBLGbCiQAHAAAGABQjlmFldlsQAJgEAKgFQHSB2G6EaQAKgaAHgaQiEmSkJmIQAZgEAXgEQITEeFlFnQAHgPAGgPQhVnsjlntQgBgGgCgGQJTHAG+HuQAJAPgCAYQj/AwiVAyQiLAzi2BJQg/AahDAaInEDBIiGBqIp6KdIg2gLg");
	this.shape_72.setTransform(261.9,-102.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC00").s().p("AsnRNIoCmpQFvAxEYB2IAVAFQjjkslakYIgOgTQHpBLGbCiIANAAQjlmFldlsIATgHQHSB0G6EbQAKgaAHgbQiEmRkJmIIAwgIQITEeFlFnIANgeQhVnsjlntIgDgMQJTHAG+HuQAJAPgCAYQj/AxiVAyQiLAyi2BJIiCA0InEDBIiGBqIp6Kdg");
	this.shape_73.setTransform(261.9,-102.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1.5,1,1).p("A1kKpQFiBFE2BnQgGgLgIgLQkEkulBkkQAOAAAOAAQHfBpG5CUQgDgHgDgHQkTmBlPlzQgDgLgDgLQHXCkHLD3QAfgCAcgCQibmfjdmbQACgcABgbQHwE+GaFhQARAEARADQhjn/isn/QAHAEAGADQI8HYHwHtQgOgIgiAHQjJAPjgBJQiRAyi7BMQhAAbhDAcInNDGIiYBZIp/KzIg1AXg");
	this.shape_74.setTransform(268.1,-103.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC00").s().p("A1kKpQFiBFE2BnIgOgWQkEkulBkkIAcAAQHfBpG5CUIgGgOQkTmBlPlzIgGgWQHXCkHLD3IA7gEQibmfjdmbIADg3QHwE+GaFhIAiAHQhjn/isn/IANAHQI8HYHwHtQgOgIgiAHQjJAPjgBJQiRAyi7BMIiDA3InNDGIiYBZIp/KzIg1AXg");
	this.shape_75.setTransform(268.1,-103.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1.5,1,1).p("AFAx0IDkQjIvTrmIGNPBIwdnTIK5M4IvykiIKAKTIqriyIIPHHIK5sCIMDlMQLZkxCjCNg");
	this.shape_76.setTransform(274.6,-104.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC00").s().p("A2jKuIKrCyIqAqTIPyEiIq5s4IQdHTImNvBIPTLmIjkwjIRkP3QijiNrZExIsDFMIq5MCg");
	this.shape_77.setTransform(274.6,-104.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70}]}).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.9,-213.4,394.9,389.4);


(lib.fishTransition01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyeLeft
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099FF").ss(2,1,1).p("AARgEQAMAlAEAdQADAbgHACQgHADgOgZQgMgZgMgmQgMglgEgdQgDgcAHgDQAHgCANAZQANAaAMAmg");
	this.shape.setTransform(493.5,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("AB5CvQAHAnAFAiQAOB0gcAJQgcAJg2hnQg2hlgyibQgyiagPh0QgOhzAcgJQAcgJA3BmQAPAdAPAgQAmBWAjBvQAjBrASBYg");
	this.shape_1.setTransform(491.5,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIBFQgMgZgMgmQgMglgEgdQgDgcAHgDQAHgCANAZQANAaAMAmQAMAlAEAdQADAbgHACIgBABQgHAAgNgXg");
	this.shape_2.setTransform(493.5,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkEXQg1hmgyiaQgyibgPhzQgOhzAcgJQAcgJA2BlQAQAdAPAhQAlBVAkBwQAjBrARBYQAIAnAFAiQAOB0gcAJIgFAAQgbAAgzhegAgIgkQgHADAEAcQAEAcALAmQAMAlANAaQAOAYAHgCQAHgCgEgcQgDgcgMgmQgMgmgOgZQgMgXgGAAIgCAAg");
	this.shape_3.setTransform(491.5,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("Ajxh7QgHiLBDg+QBCg9BlAzQBQAOA8BJQAiA7AcBKQAtBkAJBmQADBMgXA+QgEBNgdAWQhDA9hlgzQhkgzhNiGQhNiHgIiKg");
	this.shape_4.setTransform(469.9,-4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0099FF").ss(4,1,1).p("Ag9gdQgBgiAQgQQARgPAZANQAZAMATAiQAUAhABAhQACAigRAPQgQAPgagMQgYgNgTghQgTghgDghg");
	this.shape_5.setTransform(472.1,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAEBTQgYgNgTghQgTghgDghQgBgiAQgQQARgPAZANQAZAMATAiQAUAhABAhQACAigRAPQgJAIgMAAQgJAAgMgFg");
	this.shape_6.setTransform(472.1,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVFPQhkgzhNiGQhNiHgIiKQgHiLBDg+QBCg9BlAzQBQAOA8BJQAiA7AcBKQAtBkAJBmQADBMgXA+QgEBNgdAWQglAhguAAQgnAAgugXgAgYgWQgRAPACAhQACAjATAhQASAgAZANQAaAMARgPQARgPgCghQgCgjgTghQgTgggagNQgMgFgIAAQgMAAgJAIg");
	this.shape_7.setTransform(469.9,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape_8.setTransform(450.6,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1.5,1,1).p("AEyDLQgWAnggAjQhoByiUAAQiTAAhohyQhphyAAijQAAihBphzQBohyCTAAQCUAABoByQAdAgAVAkQA3BcAAB0QAABygzBZg");
	this.shape_9.setTransform(449,-1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag/BFQgagcAAgoQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAogbAcQgaAbglAAQgkAAgbgbg");
	this.shape_10.setTransform(450.6,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Aj7EVQhphyAAijQAAihBphzQBohyCTAAQCUAABoByQAdAgAVAkQA3BcAAB0QAABygzBZQgWAnggAjQhoByiUAAQiTAAhohygAgvgJQgaAcAAAoQAAAoAaAcQAbAbAjAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQgjAAgbAcg");
	this.shape_11.setTransform(449,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(2));

	// finBottom01
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.5,1,1).p("AJdoPQhcDejVDWQg2A1g8A0QktEInpD7QDTkiBvjhQAbg2AVgzQBWjRgOiQIFzgvQF6gsASAIg");
	this.shape_12.setTransform(294.9,164.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AkaAOQAbg2AWgzQBVjRgOiQIF0gvQF5gsASAIQhcDejVDWQg2A1g8A0QktEInpD7QDTkiBvjhg");
	this.shape_13.setTransform(294.9,164.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1.5,1,1).p("AqYG6QDojlCljwQAzhGAohDQBPipgFhsQCjAbDRAaQFQANA7AGQhSCei9CgQhgA4hqA1QmEDinUCeg");
	this.shape_14.setTransform(268.3,159.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AkLgbQA0hGAnhDQBQipgGhsQCjAbDRAaQFPANA8AGQhSCei9CgQhgA4hqA1QmEDinUCeQDpjlCkjwg");
	this.shape_15.setTransform(268.3,159.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1.5,1,1).p("ArUGOQD9iqDbj/QBMhVA6hTQBJiAAEhKQCNBPDnBMQElBEBlAFQhHBeimBpQiMA9iWA1QnbC7m/BDg");
	this.shape_16.setTransform(241.6,149.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("Aj8gbQBMhVA6hUQBJh/AEhKQCNBODnBMQElBFBlAEQhHBfimBpQiMA9iWA0QnbC8m/BDQD9iqDbj/g");
	this.shape_17.setTransform(241.6,149.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1.5,1,1).p("AMRAbQg9AfiOAzQi3BCjDA0QoyCWmqgaQEShuERkOQBlhlBLhjQBChXANgmQB4CBD+B+QD7B8COACg");
	this.shape_18.setTransform(215,139.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("AsQFfQEShuERkOQBlhlBLhjQBChXANgmQB4CBD+B+QD7B8COACQg9AfiOAzQi3BCjDA0QngCAl9AAQhBAAg+gEg");
	this.shape_19.setTransform(215,139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).wait(2));

	// gill
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFCC02").ss(3,1,1).p("AHcySQ54SiTKSD");
	this.shape_20.setTransform(390,7.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFCC02").ss(3,1,1).p("AgE0cQykZ9aYO8");
	this.shape_21.setTransform(334,6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFCC02").ss(3,1,1).p("Agl0VQlkFRiOGXQiPGaBZGJQBZGPEsEfQEzEkIFBO");
	this.shape_22.setTransform(328.7,6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFCC02").ss(3,1,1).p("AhE0YQm/EuigHeQiUG2CCHBQCBG+FbEQQFzEkJZhY");
	this.shape_23.setTransform(323,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(2));

	// mouth
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1.5,1,1).p("ABHABIiNgB");
	this.shape_24.setTransform(537.1,47.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1.5,1,1).p("AhlAAIDLAB");
	this.shape_25.setTransform(488.2,47.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1.5,1,1).p("AiEAAIEJAB");
	this.shape_26.setTransform(439.3,47.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1.5,1,1).p("ACjABIlFgB");
	this.shape_27.setTransform(390.4,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(2));

	// tail
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1.5,1,1).p("ApGvcQIvIuJeGTQpcFUoxKkg");
	this.shape_28.setTransform(98.9,23.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC02").s().p("ApGvcQIvIuJeGSQpcFUoxKlg");
	this.shape_29.setTransform(98.9,23.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1.5,1,1).p("AnWu2QGxJWIOFRQofE4mdKOQgpvBAmusg");
	this.shape_30.setTransform(108.6,22.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC02").s().p("AnWu2QGxJWIOFRQofE3mdKPQgpvBAmusg");
	this.shape_31.setTransform(108.6,22.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1.5,1,1).p("AlmuQQE0J9G+ERQniEbkJJ4QhTumBMt7g");
	this.shape_32.setTransform(118.3,22);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC02").s().p("AlmuQQE0J9G+ERQniEbkJJ4QhTumBMt7g");
	this.shape_33.setTransform(118.3,22);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1.5,1,1).p("Aj2tqQC2KlFuDOQmkEAh2JiQh9uLBztKg");
	this.shape_34.setTransform(128.1,21.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC02").s().p("Aj2tqQC2KlFuDOQmkEAh2JiQh9uLBztKg");
	this.shape_35.setTransform(128.1,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(2));

	// eye01
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape_36.setTransform(470.2,2.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1.5,1,1).p("AGkAAQAACjh7ByQh7ByiuAAQitAAh6hyQh8hyAAijQAAihB8hzQB6hyCtAAQCuAAB7ByQB7BzAAChg");
	this.shape_37.setTransform(447.4,-3.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag/BEQgagbAAgoQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAogbAbQgaAcglAAQgkAAgbgcg");
	this.shape_38.setTransform(470.2,2.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AknEVQh8hyAAijQAAihB8hzQB6hyCtAAQCuAAB7ByQB7BzAAChQAACjh7ByQh7ByiuAAQitAAh6hygACkgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQgkAAgbAcg");
	this.shape_39.setTransform(447.4,-3.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0099FF").ss(6,1,1).p("AhZABQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAoQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgog");
	this.shape_40.setTransform(410.8,3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1.5,1,1).p("AmOAAQAAifByhxQB9h2CfAAQCgAAByBrQAGAFAFAFQByByAACfQAAAlgGAiQgUBzhYBXQgFAFgFAFQhzBsigAAQieAAhyhqQgGgGgGgGQhZhYgUh0QgFghAAgkg");
	this.shape_41.setTransform(395.9,-3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag/BEQgagcAAgnQAAgnAagdQAbgcAkAAQAlAAAaAcQAbAdAAAnQAAAngbAcQgaAcglAAQgkAAgbgcg");
	this.shape_42.setTransform(410.8,3.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AkPEdIgNgMQhYhYgVh0QgFghAAgkQAAifByhxQB+h2CeAAQCgAAByBrIAMAKQBxByAACfQAAAlgGAiQgUBzhXBXIgLAKQhzBsigAAQieAAhxhqgABVgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAnAAAZgbQAbgcAAgoQAAgogbgcQgZgcgnAAQgkAAgbAcg");
	this.shape_43.setTransform(395.9,-3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1.5,1,1).p("Al5AAQAAibBohxQB4h6CZAAQCaAABtBuQAFAGAGAGQBoBwAACcQAAAkgFAhQgTByhRBXQgEAFgGAFQhtBviaAAQiZAAhshuQgGgGgGgGQhRhXgShyQgFghAAgjg");
	this.shape_44.setTransform(344.3,-2.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag/BFQgagcAAgoQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAogbAcQgaAbglAAQgkAAgbgbg");
	this.shape_45.setTransform(351.4,3.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AkFEZIgMgMQhRhXgShyQgFghAAgjQAAibBohxQB4h6CZAAQCaAABtBuIALAMQBoBwAACcQAAAkgFAhQgTByhRBXIgKAKQhtBviaAAQiZAAhshugAAHgFQgZAcAAAoQAAAoAZAcQAaAbAlAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQglAAgaAcg");
	this.shape_46.setTransform(344.3,-2.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAbQgaAcglAAQglAAgagcQgagbAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape_47.setTransform(292,4.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1.5,1,1).p("AFlAAQAAAigFAgQgRB5hTBaQhoByiUAAQiTAAhohyQhThagRh5QgFggAAgiQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChg");
	this.shape_48.setTransform(292.8,-1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Aj7EVQhThagRh5QgFggAAgiQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChQAAAigFAgQgRB5hTBaQhoByiUAAQiTAAhohygAhHgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAlAAAagbQAbgcAAgoQAAgogbgcQgagcglAAQgkAAgbAcg");
	this.shape_49.setTransform(292.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).to({state:[{t:this.shape_43},{t:this.shape_42,p:{x:410.8,y:3.3}},{t:this.shape_41},{t:this.shape_40,p:{x:410.8,y:3.3}}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_40,p:{x:351.4,y:3.9}}]},1).to({state:[{t:this.shape_49},{t:this.shape_42,p:{x:292,y:4.5}},{t:this.shape_48},{t:this.shape_47}]},1).wait(2));

	// body
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1.5,1,1).p("A+OAcUAZVgh0AXWAPzQLyWFAAAPQgBAPyqKTUglCAUJgEwgi+g");
	this.shape_50.setTransform(351.8,17.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6600").s().p("A+OAcUAZVgh0AXWAPzQLzWFgBAPQAAAPyrKTQtiHXpOAAQwBAAjB2Mg");
	this.shape_51.setTransform(351.8,17.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1.5,1,1).p("A8ZAnQTv7TTOEiQETBGD1C1QAUAdASAdQCtEPByEIQB1D/BBDOQBsESAGBiQACAPgCAJQgUBfljDvQjSC4lHCuQg4Aeg5AeQw4Iwp+iyQrcjKifyYg");
	this.shape_52.setTransform(340.4,17.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6600").s().p("AueWJQrcjKifyYIAAAAQTv7TTOEiQETBGD1C1IAmA6QCtEPByEIQB1D/BBDOQBsESAGBiQACAPgCAJQgUBfljDvQjSC4lHCuIhxA8Qs0Gpo1AAQizAAiagrg");
	this.shape_53.setTransform(340.4,17.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1.5,1,1).p("A6oAzQSr60S/DWQEXA9DfC3QAWAaAVAaQC3DtBmEiQBaDyAjDoQA4D0gQCLQgBATgEAQQgnC0jiDQQi3DskvCaQg0Aag1AbQwyIRpvjOQq0jiibx0g");
	this.shape_54.setTransform(329.3,16.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF6600").s().p("AtZWKQq0jiibx0IAAgBQSr60S/DWQEXA9DfC3IArA0QC3DtBmEiQBaDyAjDoQA4D0gQCLQgBATgEAQQgnC0jiDQQi3DskvCaIhpA1QsFF9obAAQjSAAivg6g");
	this.shape_55.setTransform(329.3,16.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBAQRn6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxQg");
	this.shape_56.setTransform(319.6,16.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxQQRn6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_57.setTransform(319.6,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50}]}).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).wait(2));

	// finBotoom
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.5,1,1).p("AiPlGQAtAbAyCGQANAhAMAoQA/DGBpCvQhiBJgvgrQgLgKgKgHQgrgZgaAuIgbk2Qgbk5ABgSg");
	this.shape_58.setTransform(367,99.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC00").s().p("AAAE3QgLgKgKgHQgrgZgaAuIgbk2Qgbk5ABgSQAtAcAyCFQANAhAMAoQA/DGBpCvQg+AugpAAQgZAAgRgQg");
	this.shape_59.setTransform(367,99.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1.5,1,1).p("AlclTQBtAdB5CKQAeAjAfApQCZDOD9C3QjtBLhwgsQgcgLgZgHQhogag+AwIhClCQhBlGACgTg");
	this.shape_60.setTransform(383,103.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC00").s().p("AAAFEQgcgLgZgHQhogag+AwIhClCQhBlGACgTQBtAdB5CKQAeAjAfApQCZDOD9C3QiVAvhkAAQg7AAgpgQg");
	this.shape_61.setTransform(383,103.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1.5,1,1).p("AoolgQCtAdDACRQAwAkAwAqQDzDWGSC+Ql4BOizguQgsgLgogHQikgbhjAyIholPQhnlTADgTg");
	this.shape_62.setTransform(398.9,107.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC00").s().p("AgBFQQgsgLgogHQikgbhjAyIholPQhnlTADgTQCtAdDACRQAwAkAwAqQDzDWGSC+QjtAxieAAQheAAhCgRg");
	this.shape_63.setTransform(398.9,107.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1.5,1,1).p("Ar1ltQDuAfEGCVQBBAmBDAsQFNDeImDEQoDBSj1gwQg8gMg3gHQjggciIA0IiPlcQiNlfAEgUg");
	this.shape_64.setTransform(414.9,112);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC00").s().p("AgCFdQg8gMg3gHQjggciIA0IiPlcQiNlfAEgUQDuAfEGCVQBBAmBDAsQFNDeImDEQlEAzjZAAQiBAAhagRg");
	this.shape_65.setTransform(414.9,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58}]}).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).wait(2));

	// topFins
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1.5,1,1).p("AFAx0IDkQjIvTrmIGNPBIwdnTIK5M4IvykiIKAKTIqriyIIPHHIK5sCIMDlMQLZkxCjCNg");
	this.shape_66.setTransform(274.6,-104.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC00").s().p("A2jKuIKrCyIqAqTIPyEiIq5s4IQdHTImNvBIPTLmIjkwjIRkP3QijiNrZExIsDFMIq5MCg");
	this.shape_67.setTransform(274.6,-104.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1.5,1,1).p("A1kKpQFiBFE2BnQgGgLgIgLQkEkulBkkQAOAAAOAAQHfBpG5CUQgDgHgDgHQkTmBlPlzQgDgLgDgLQHXCkHLD3QAfgCAcgCQibmfjdmbQACgcABgbQHwE+GaFhQARAEARADQhjn/isn/QAHAEAGADQI8HYHwHtQgOgIgiAHQjJAPjgBJQiRAyi7BMQhAAbhDAcInNDGIiYBZIp/KzIg1AXg");
	this.shape_68.setTransform(268.1,-103.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC00").s().p("A1kKpQFiBFE2BnIgOgWQkEkulBkkIAcAAQHfBpG5CUIgGgOQkTmBlPlzIgGgWQHXCkHLD3IA7gEQibmfjdmbIADg3QHwE+GaFhIAiAHQhjn/isn/IANAHQI8HYHwHtQgOgIgiAHQjJAPjgBJQiRAyi7BMIiDA3InNDGIiYBZIp/KzIg1AXg");
	this.shape_69.setTransform(268.1,-103.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1.5,1,1).p("A0pKlQFvAwEYB2QALACAKADQjjkslakXQgHgKgHgKQHpBLGbCiQAHAAAGABQjlmFldlsQAJgEAKgFQHSB2G6EaQAKgaAHgaQiEmSkJmIQAZgEAXgEQITEeFlFnQAHgPAGgPQhVnsjlntQgBgGgCgGQJTHAG+HuQAJAPgCAYQj/AwiVAyQiLAzi2BJQg/AahDAaInEDBIiGBqIp6KdIg2gLg");
	this.shape_70.setTransform(261.9,-102.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC00").s().p("AsnRNIoCmpQFvAxEYB2IAVAFQjjkslakYIgOgTQHpBLGbCiIANAAQjlmFldlsIATgHQHSB0G6EbQAKgaAHgbQiEmRkJmIIAwgIQITEeFlFnIANgeQhVnsjlntIgDgMQJTHAG+HuQAJAPgCAYQj/AxiVAyQiLAyi2BJIiCA0InEDBIiGBqIp6Kdg");
	this.shape_71.setTransform(261.9,-102.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1.5,1,1).p("ADTxeQFCILA/IKQlKmIp7kJQFeGnBfG4Qm+lOnmg9QFtFlC3GKQmJi+oIguQGeEcDOFAQkFiimogfII0HHILpsDIG7i8QEEhlCxhFQBMgbE0hTQmYobqcnLg");
	this.shape_72.setTransform(258.1,-100.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC00").s().p("A0GKYQGpAfEECiQjNk/mfkdQIIAvGJC9Qi3mKlslkQHmA8G9FPQhfm5ldmmQJ6EIFKGIQg/oKlCoLQKcHLGYIbQk0BThMAbIm1CrIm7C7IrpMDg");
	this.shape_73.setTransform(258.1,-100.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66}]}).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).wait(2));

	// finBottom01back
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1.5,1,1).p("AHPpQQgkDnicDtQgoA6gsA8QjnEnmiEwQCIk4A2jrQANg5AIg2QAijZgyiNIFghZQFmhWAUAGg");
	this.shape_74.setTransform(337.2,151.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC00").s().p("AkRAuQANg5AJg2QAhjZgxiNIFghZQFmhWATAGQgjDnicDtQgoA6gtA8QjnEnmhEwQCIk4A1jrg");
	this.shape_75.setTransform(337.2,151.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74}]}).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.6,-219.6,506.7,438.4);


(lib.fishSwimmingLookingAtYou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finBottom01
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AMRAbQg9AfiOAzQi3BCjDA0QoyCWmqgaQEShuERkOQBlhlBLhjQBChXANgmQB4CBD+B+QD7B8COACg");
	this.shape.setTransform(-96.8,131.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AsQFfQEShuERkOQBlhlBLhjQBChXANgmQB4CBD+B+QD7B8COACQg9AfiOAzQi3BCjDA0QngCAl9AAQhBAAg+gEg");
	this.shape_1.setTransform(-96.8,131.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AsNFlQEKh5ESkPQBnhlBKhhQBChWANgmQB4CBD+B+QD7B8COACQg8AfiOAyQizBAjHA0QoyCVmlgNg");
	this.shape_2.setTransform(-96.5,132);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AsNFlQELh5ESkPQBmhlBKhhQBChWANgmQB4CBD+B+QD7B8COACQg8AfiOAyQi0BAjGA0QoECJmOAAIhFgBg");
	this.shape_3.setTransform(-96.5,132);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("AsKFqQEDiEETkPQBohmBJhfQBDhWAMglQB4CBD+B+QD7B8COACQg7AeiOAyQiwA+jJA0QoyCVmhgBg");
	this.shape_4.setTransform(-96.3,132.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AsKFqQEDiEETkPQBohmBJhfQBDhWAMglQB4CBD+B+QD7B8COACQg7AeiOAyQiwA+jJA0QowCUmgAAIgDAAg");
	this.shape_5.setTransform(-96.3,132.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("AsIFvQD9iQEUkPQBphnBIhcQBEhVAMgmQB4CCD+B9QD7B8COADQg6AdiQAxQisA9jMA0QoyCUmdAMg");
	this.shape_6.setTransform(-96,132.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("Aj4gwQBqhnBIhcQBEhVAMgmQB4CCD9B9QD8B8CNADQg5AdiQAxQisA9jMA0QoyCUmcAMQD7iQEUkPg");
	this.shape_7.setTransform(-96,132.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,1,1).p("AsFFzQD1ibEVkPQBrhoBHhaQBEhUAMglQB4CBD+B+QD7B8COACQg5AdiQAxQipA6jOA1QozCTmYAYg");
	this.shape_8.setTransform(-95.7,133.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("Aj7g3QBrhoBHhaQBEhUAMglQB4CBD+B+QD7B8COACQg5AdiQAxQipA6jOA1QozCTmYAYQD1ibEVkPg");
	this.shape_9.setTransform(-95.7,133.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1.5,1,1).p("AsCF4QDtimEXkPQBshpBGhYQBFhUALgkQB4CBD+B+QD7B8COACQg4AdiQAwQimA4jRA1QoyCTmUAkg");
	this.shape_10.setTransform(-95.4,133.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("Aj+g+QBshoBGhYQBEhUAMglQB4CCD+B+QD7B7COADQg4AciRAwQilA5jRA1QozCSmTAlQDtimEXkQg");
	this.shape_11.setTransform(-95.4,133.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.5,1,1).p("Ar/F8QDmixEXkPQBuhqBFhWQBFhTALgkQB4CBD+B+QD7B8COADQg3AbiRAwQiiA3jTA1QozCSmPAwg");
	this.shape_12.setTransform(-95.2,134.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AkChEQBuhqBFhWQBFhTALgkQB4CBD+B+QD7B8COACQg3AciRAwQiiA2jTA2QozCRmPAxQDmiwEXkQg");
	this.shape_13.setTransform(-95.2,134.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1.5,1,1).p("Ar9GAQDgi8EYkPQBvhrBEhTQBGhTAMgkQB3CCD+B9QD7B9COADQg2AaiSAvQieA1jXA2QoyCRmMA8g");
	this.shape_14.setTransform(-94.9,134.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AkFhLQBvhrBEhTQBGhSAMglQB3CCD+B+QD7B8COADQg2AaiSAvQieA1jXA2QoyCRmMA9QDgi9EYkPg");
	this.shape_15.setTransform(-94.9,134.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1.5,1,1).p("Ar6GFQDYjHEZkQQBxhrBDhSQBGhSAMgjQB3CBD+B+QD7B9COACQg1AaiSAuQicA0jYA1QozCRmHBJg");
	this.shape_16.setTransform(-94.6,135.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("AkJhSQBxhrBDhRQBGhSAMgkQB3CBD+B+QD7B9COACQg1AaiTAuQiaA0jZA1QozCRmHBJQDYjHEZkQg");
	this.shape_17.setTransform(-94.6,135.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1.5,1,1).p("Ar3GJQDRjSEakQQByhsBChPQBHhRALgjQB3CBD+B+QD7B9COACQg0AaiTAtQiXAyjcA1QozCQmCBVg");
	this.shape_18.setTransform(-94.4,135.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("AkMhZQByhsBChPQBHhRALgkQB3CCD+B+QD7B8COADQg0AZiTAuQiXAxjcA2QozCQmCBWQDRjTEakQg");
	this.shape_19.setTransform(-94.4,135.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1.5,1,1).p("Ar1GOQDKjdEbkQQB0htBBhNQBHhRALgjQB3CCD+B9QD8B9COADQg0AZiTAsQiUAwjfA3QozCOl+Big");
	this.shape_20.setTransform(-94.1,136);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC00").s().p("AkPhgQBzhtBBhMQBHhRAMgjQB3CBD9B+QD8B9CNACQgzAZiTAtQiUAwjeA3Qo0COl9BiQDJjdEckRg");
	this.shape_21.setTransform(-94.1,136);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1.5,1,1).p("AryGTQDCjpEdkRQB1htBAhLQBHhQAMgjQB3CCD+B9QD7B9COADQgyAYiVAsQiQAujhA3QozCPl6Bug");
	this.shape_22.setTransform(-93.8,136.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC00").s().p("AkThmQB1huBAhLQBHhQAMgjQB3CCD+B+QD7B8COADQgyAYiVAtQiQAtjhA3QozCPl6BuQDCjpEdkQg");
	this.shape_23.setTransform(-93.8,136.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1.5,1,1).p("ArvGXQC7j0EekRQB3huA9hJQBIhPAMgiQB3CBD+B+QD7B9COACQgxAYiVAsQiNAsjkA3QozCNl1B7g");
	this.shape_24.setTransform(-93.5,136.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC00").s().p("AkWhtQB3hvA9hJQBIhPAMgiQB3CBD+B+QD7B9COACQgxAYiVAsQiMAsjkA3Qo0COl1B6QC7j0EekQg");
	this.shape_25.setTransform(-93.5,136.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1.5,1,1).p("ArsGbQCzj+EfkRQB4hvA+hHQBIhPALghQB3CBD+B+QD7B9COACQgwAZiVApQiKArjmA3Qo0CNlwCGg");
	this.shape_26.setTransform(-93.3,137.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC00").s().p("Akah0QB4hvA+hHQBIhPALghQB3CBD+B+QD7B9COACQgwAZiVApQiKArjmA3Qo0CNlwCGQCzj+EfkRg");
	this.shape_27.setTransform(-93.3,137.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1.5,1,1).p("ArqGgQCtkKEgkRQB5hwA8hFQBJhOAMghQB3CCD+B9QD7B9COADQgwAYiVApQiGApjpA3Qo1CMlsCTg");
	this.shape_28.setTransform(-93,137.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC00").s().p("Akdh7QB5hwA9hFQBIhOAMghQB3CCD9B9QD8B9CNADQgvAYiWApQiFApjqA3QozCMltCTQCtkKEgkRg");
	this.shape_29.setTransform(-93,137.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1.5,1,1).p("ArnGkQClkVEikRQB6hxA7hCQBKhNALghQB3CBD+B+QD7B9COACQgvAYiWAoQiCAnjsA4Qo0CLloCfg");
	this.shape_30.setTransform(-92.7,138.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("AkgiCQB6hxA7hCQBKhNALghQB3CBD+B+QD7B9COACQgvAYiWAoQiCAnjsA4Qo0CLloCfQClkVEikRg");
	this.shape_31.setTransform(-92.7,138.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1.5,1,1).p("ArkGpQCdkgEjkSQB9hxA6hBQBJhMALghQB3CCD+B9QD7B9COADQgtAXiXAoQh/AljuA4Qo1CKljCsg");
	this.shape_32.setTransform(-92.4,138.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("AkkiJQB8hxA6hBQBKhMALghQB3CCD+B9QD7B9COADQgtAXiXAoQh/AljvA4Qo0CKljCsQCekgEikSg");
	this.shape_33.setTransform(-92.4,138.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1.5,1,1).p("ArhGtQCWkrEkkRQB+hzA4g+QBLhMAKggQB3CBD+B+QD7B9COACQgsAXiYAnQh7AjjxA5Qo1CJleC4g");
	this.shape_34.setTransform(-92.2,139.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("AkniPQB+hzA4g+QBLhMAKggQB3CBD+B+QD7B9COACQgsAXiYAnQh7AjjxA5Qo1CJleC4QCWkrEkkRg");
	this.shape_35.setTransform(-92.2,139.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1.5,1,1).p("ArfGyQCPk3ElkRQB/h0A4g8QBLhLAKggQB3CCD+B9QD8B9CNADQgrAWiYAmQh4Aij0A4Qo1CJlaDFg");
	this.shape_36.setTransform(-91.9,139.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC00").s().p("AkriWQCAh0A3g8QBLhLALggQB3CCD9B9QD8B9CNADQgrAWiYAmQh4Aij0A4Qo1CJlZDFQCOk3ElkRg");
	this.shape_37.setTransform(-91.9,139.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1.5,1,1).p("ArcG2QCIlCEmkRQCBh1A2g5QBLhLALgfQB3CBD+B+QD7B9COACQgrAWiZAmQh0Agj2A4Qo1CJlWDQg");
	this.shape_38.setTransform(-91.6,140);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC00").s().p("AkuidQCBh1A3g5QBKhLALgfQB3CBD+B+QD7B9COACQgrAWiYAmQh1Agj2A4Qo0CJlXDQQCIlCEmkRg");
	this.shape_39.setTransform(-91.6,140);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1.5,1,1).p("ArZG7QCBlNEnkSQCCh1A1g4QBMhKAKgfQB3CCD+B9QD7B9COADQgpAViaAmQhwAdj5A5Qo1CIlSDdg");
	this.shape_40.setTransform(-91.4,140.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC00").s().p("AkxikQCCh1A1g4QBMhKAKgfQB3CCD+B9QD7B9COADQgpAViaAmQhwAdj5A5Qo1CIlSDdQCBlNEnkSg");
	this.shape_41.setTransform(-91.4,140.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1.5,1,1).p("ArXG/QB6lYEokSQCEh2A0g1QBMhKAKgeQB3CBD+B+QD8B9COACQgpAViaAlQhtAcj8A5Qo1CHlODpg");
	this.shape_42.setTransform(-91.1,140.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC00").s().p("Ak1irQCEh1A0g2QBMhJALgfQB3CBD9B+QD8B9CNACQgoAViaAmQhtAbj8A5Qo1CHlODpQB6lYEokSg");
	this.shape_43.setTransform(-91.1,140.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1.5,1,1).p("ArUHDQBzljEpkSQCFh3AzgzQBNhJAKgeQB3CCD+B9QD7B9COADQgoAUiaAlQhqAZj+A6Qo2CGlJD1g");
	this.shape_44.setTransform(-90.8,141.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC00").s().p("Ak4ixQCFh3AzgzQBNhJAKgfQB3CCD+B+QD7B8COADQgoAUiaAlQhqAaj+A5Qo2CGlJD2QBzlkEpkRg");
	this.shape_45.setTransform(-90.8,141.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1.5,1,1).p("ArRHIQBrluEqkSQCHh4AygxQBNhIAKgeQB3CBD+B+QD7B9COADQgmATicAkQhmAZkBA5Qo2CFlEECg");
	this.shape_46.setTransform(-90.5,141.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC00").s().p("Ak8i4QCHh4AygxQBNhIAKgeQB3CBD+B+QD7B9COACQgnAUibAlQhmAXkBA6Qo1CGlFEBQBrluEqkSg");
	this.shape_47.setTransform(-90.5,141.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1.5,1,1).p("ArOHNQBkl6ErkSQCIh5AxguQBOhIAJgdQB3CBD+B+QD7B9COACQglATicAkQhjAWkDA6Qo2CFlAEOg");
	this.shape_48.setTransform(-90.3,142.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC00").s().p("Ak/i/QCIh5AxguQBOhIAJgeQB3CCD+B+QD7B8COADQglATicAkQhjAWkDA6Qo2CFlAEOQBkl6ErkSg");
	this.shape_49.setTransform(-90.3,142.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1.5,1,1).p("ALNhSQglATicAjQhfAVkHA5Qo2CFk8EaQBdmEEtkTQCJh6AwgsQBOhHAKgdQB3CBD+B+QD7B9COACg");
	this.shape_50.setTransform(-90,142.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC00").s().p("AlCjGQCJh5AwgtQBOhHAKgdQB3CBD9B+QD8B9CNACQgkATicAjIlmBOQo2CFk7EaQBcmFEtkSg");
	this.shape_51.setTransform(-90,142.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1.5,1,1).p("ArNHPQBgl/EskTQCJh5AwgtQBOhIAKgdQB3CCD+B9QD7B9COADQglATicAjQhhAWkFA5Qo2CEk+EVg");
	this.shape_52.setTransform(-90.1,142.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC00").s().p("AlBjDQCJh5AwgtQBOhIAKgdQB3CCD+B9QD7B9COADQglATicAjIlmBPQo2CEk+EVQBgl/EskTg");
	this.shape_53.setTransform(-90.1,142.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1.5,1,1).p("ArQHKQBnlzErkTQCIh4AxgwQBOhIAJgdQB3CBD+B+QD8B9CNACQglATicAkQhlAYkCA5Qo2CFlCEIg");
	this.shape_54.setTransform(-90.4,142);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC00").s().p("Ak9i8QCHh4AxgwQBOhIAKgdQB3CBD9B+QD8B9CNACQglATicAkQhkAYkDA5Qo2CFlCEIQBolzErkTg");
	this.shape_55.setTransform(-90.4,142);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1.5,1,1).p("ArSHGQBulpEqkSQCGh3AzgyQBMhJAKgeQB3CCD+B9QD7B9COADQgnAUibAkQhoAZj/A5Qo2CGlGD8g");
	this.shape_56.setTransform(-90.7,141.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC00").s().p("Ak6i1QCGh3AzgyQBMhJAKgeQB3CCD+B9QD7B9COADQgnAUibAkQhoAZj/A5Qo2CGlGD8QBulpEqkSg");
	this.shape_57.setTransform(-90.7,141.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.5,1,1).p("ArVHBQB2ldEpkSQCEh3Azg0QBNhJAKgeQB3CBD+B+QD7B9COACQgoAUiaAmQhrAaj+A6Qo1CGlLDvg");
	this.shape_58.setTransform(-90.9,141.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC00").s().p("Ak3iuQCFh3A0g0QBMhJAKgeQB3CBD+B+QD7B9COACQgoAUibAmQhrAaj9A6Qo1CGlLDvQB2ldEokSg");
	this.shape_59.setTransform(-90.9,141.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1.5,1,1).p("ArYG9QB9lSEokTQCDh1A1g3QBMhKAKgeQB3CBD+B+QD7B9COACQgpAViaAmQhvAcj6A6Qo1CHlQDjg");
	this.shape_60.setTransform(-91.2,140.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC00").s().p("AkzinQCDh2A1g3QBMhJAKgfQB3CBD+B+QD7B9COACQgpAViaAmQhvAdj6A4Qo1CHlQDkQB9lTEokRg");
	this.shape_61.setTransform(-91.2,140.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1.5,1,1).p("ArbG5QCFlIEmkRQCCh1A2g5QBLhKALgfQB3CBD+B+QD7B9COACQgqAWiZAlQhzAfj3A5Qo2CIlUDXg");
	this.shape_62.setTransform(-91.5,140.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC00").s().p("AkwihQCCh0A2g5QBLhKALggQB3CCD9B+QD8B8CNADQgpAWiaAlQhyAfj4A4Qo1CIlTDXQCElHEmkSg");
	this.shape_63.setTransform(-91.5,140.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1.5,1,1).p("ArdG0QCLk8EmkSQCAh0A3g7QBLhLAKgfQB3CBD+B+QD7B9COADQgrAViYAnQh2Ahj1A4Qo1CIlYDLg");
	this.shape_64.setTransform(-91.8,139.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC00").s().p("AksiaQCAhzA3g7QBLhLAKggQB3CBD+B+QD7B9COACQgrAWiYAmQh2Ahj1A5Qo1CJlYDKQCLk8EmkSg");
	this.shape_65.setTransform(-91.8,139.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1.5,1,1).p("ArgGvQCTkxEkkRQB+hzA5g9QBLhMAKggQB3CCD+B9QD7B9COADQgsAWiYAnQh6AjjxA4Qo2CJlcC+g");
	this.shape_66.setTransform(-92,139.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC00").s().p("AkpiTQB+hzA5g9QBLhLAKghQB3CCD+B+QD7B8COADQgsAWiYAnQh6AjjyA4Qo0CKldC9QCTkwEkkSg");
	this.shape_67.setTransform(-92,139.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1.5,1,1).p("ArjGrQCbkmEjkRQB9hzA5g/QBKhMALggQB3CBD+B+QD7B9COACQgtAXiXAnQh9AljwA4Qo1CKlhCyg");
	this.shape_68.setTransform(-92.3,138.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC00").s().p("AkliMQB9hyA5g/QBKhNALggQB3CBD+B+QD7B9COACQgtAXiXAnQh9AljwA4Qo1CKlhCyQCbkmEjkRg");
	this.shape_69.setTransform(-92.3,138.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1.5,1,1).p("ArmGnQCikbEikRQB7hyA7hBQBJhNALghQB3CCD+B9QD8B9COADQgvAXiWAoQiBAnjtA3Qo0CLlmCmg");
	this.shape_70.setTransform(-92.6,138.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC00").s().p("AkiiFQB8hyA6hBQBJhNAMghQB3CCD9B+QD8B8CNADQgtAYiXAnQiBAnjsA3Qo1CLlmClQCikaEikRg");
	this.shape_71.setTransform(-92.6,138.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1.5,1,1).p("AroGiQCpkPEgkRQB7hxA7hDQBJhOALghQB3CCD+B9QD7B9COADQgvAXiWApQiEAojqA4Qo0CLlqCZg");
	this.shape_72.setTransform(-92.9,138);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC00").s().p("Akfh+QB7hxA7hEQBJhNALghQB3CBD+B+QD7B9COACQgvAYiWApQiEAojqA3Qo0CMlqCZQCpkQEgkQg");
	this.shape_73.setTransform(-92.9,138);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1.5,1,1).p("ArrGdQCwkEEgkQQB4hwA9hGQBJhOALghQB3CBD+B+QD7B9COACQgwAYiWAqQiHAqjoA3Qo0CMluCMg");
	this.shape_74.setTransform(-93.1,137.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC00").s().p("Akbh3QB4hwA9hGQBJhOALgiQB3CCD+B+QD7B8COADQgwAYiVApQiIAqjnA4Qo1CMluCMQCwkEEgkQg");
	this.shape_75.setTransform(-93.1,137.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1.5,1,1).p("AruGZQC3j5EfkRQB3hvA+hHQBIhPALgiQB3CBD+B+QD8B9CNACQgwAZiVAqQiLAsjlA3Qo0CNlzCAg");
	this.shape_76.setTransform(-93.4,137.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC00").s().p("AkYhxQB4hvA9hHQBIhPAMgiQB3CBD9B+QD8B9CNACQgwAZiVAqQiLAsjlA3Qo0CNlzCAQC4j5EekRg");
	this.shape_77.setTransform(-93.4,137.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1.5,1,1).p("ArwGVQC+jvEdkQQB2huA/hKQBIhQALgiQB3CCD+B9QD7B9COADQgxAYiVAsQiOAtjjA3QozCNl3B1g");
	this.shape_78.setTransform(-93.7,136.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC00").s().p("AkVhqQB2huA/hKQBIhQALgiQB3CCD+B9QD7B9COADQgxAYiVAsQiOAtjjA3QozCNl3B1QC+jvEdkQg");
	this.shape_79.setTransform(-93.7,136.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1.5,1,1).p("ArzGQQDFjjEdkQQB0htBAhMQBHhRAMgiQB3CBD+B+QD7B9COACQgyAZiUAsQiSAvjgA3QozCOl8Bog");
	this.shape_80.setTransform(-93.9,136.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC00").s().p("AkRhjQB0htBAhMQBHhRAMgiQB3CBD+B+QD7B9COACQgzAZiTAsQiSAvjgA3Qo0COl7BoQDGjjEckQg");
	this.shape_81.setTransform(-93.9,136.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1.5,1,1).p("Ar2GMQDNjYEbkQQBzhtBBhOQBHhRAMgjQB3CCD+B9QD7B9COADQg0AZiTAtQiWAxjdA2QozCPmABcg");
	this.shape_82.setTransform(-94.2,135.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC00").s().p("AkOhcQBzhtBBhOQBHhRAMgjQB3CCD+B9QD7B9COADQg0AZiTAtQiWAxjdA2QozCPmABcQDNjYEbkQg");
	this.shape_83.setTransform(-94.2,135.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1.5,1,1).p("Ar5GHQDVjMEZkQQByhsBChQQBGhSANgjQB3CBD+B+QD7B9COACQg1AaiTAuQiZAyjaA2QozCQmFBPg");
	this.shape_84.setTransform(-94.5,135.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC00").s().p("AkKhVQBxhsBDhQQBFhSANgjQB3CBD9B+QD8B9CNACQg0AaiTAuQiZAyjaA2QozCQmEBPIHuncg");
	this.shape_85.setTransform(-94.5,135.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1.5,1,1).p("Ar7GDQDbjCEZkPQBwhrBDhTQBGhSAMgkQB3CCD+B9QD7B9COADQg1AaiSAuQidA0jYA2QoyCRmJBDg");
	this.shape_86.setTransform(-94.8,134.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC00").s().p("AkHhOQBwhrBDhTQBGhSAMgkQB3CCD+B9QD7B9COADQg1AaiSAuQidA0jYA2QoyCRmJBDQDbjCEZkPg");
	this.shape_87.setTransform(-94.8,134.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1.5,1,1).p("Ar+F+QDji2EXkQQBvhqBEhUQBGhTALgkQB4CBD+B+QD7B9COABQg2AciSAvQigA2jVA1QozCSmNA2g");
	this.shape_88.setTransform(-95,134.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC00").s().p("AkEhIQBvhqBEhUQBGhTALgkQB4CBD+B+QD7B9COABQg2AciSAvQigA2jVA1QoyCSmOA2QDji2EXkQg");
	this.shape_89.setTransform(-95,134.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1.5,1,1).p("AsBF6QDqirEXkQQBthpBFhXQBGhTALglQB4CCD+B9QD7B8COADQg4AciRAvQijA4jTA2QoyCSmSAqg");
	this.shape_90.setTransform(-95.3,133.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC00").s().p("AkAhBQBthpBFhXQBGhTALglQB4CCD+B9QD7B8COADQg4AciRAvQijA4jTA2QoyCSmSAqQDqirEXkQg");
	this.shape_91.setTransform(-95.3,133.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1.5,1,1).p("AsEF1QDyigEVkPQBshoBGhZQBFhUALglQB4CBD+B+QD8B8COACQg5AdiRAwQinA6jPA1QozCTmWAdg");
	this.shape_92.setTransform(-95.6,133.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC00").s().p("Aj9g6QBshoBHhZQBEhUAMglQB4CBD9B+QD8B8CNACQg4AdiQAwQioA6jPA1QoyCTmXAdQDyigEVkPg");
	this.shape_93.setTransform(-95.6,133.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1.5,1,1).p("AsGFxQD4iVEVkQQBqhnBIhbQBEhVALglQB4CBD+B+QD7B8COACQg5AeiQAwQirA8jMA0QozCUmaASg");
	this.shape_94.setTransform(-95.9,133.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC00").s().p("Aj5gzQBqhoBIhbQBEhVALglQB4CBD+B+QD7B8COACQg5AeiQAwQirA8jMA0QozCUmaASQD4iVEVkPg");
	this.shape_95.setTransform(-95.9,133.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1.5,1,1).p("AsJFsQEAiKETkPQBphmBIheQBEhVAMgmQB4CCD+B9QD7B8COADQg7AdiPAyQiuA9jKA1QoyCUmfAFg");
	this.shape_96.setTransform(-96.1,132.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC00").s().p("Aj1gsQBohnBIheQBEhVAMgmQB4CCD+B+QD7B7COADQg6AeiQAxQiuA9jKA1QoyCUmfAFQEAiKEUkOg");
	this.shape_97.setTransform(-96.1,132.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1.5,1,1).p("AsMFoQEIh/ESkPQBnhmBKhfQBChWANgmQB4CBD+B+QD7B8COACQg8AfiOAyQiyA+jHA1QoyCVmkgHg");
	this.shape_98.setTransform(-96.4,132.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC00").s().p("AsMFoQEIh/ESkPQBnhmBKhfQBChWANgmQB4CBD+B+QD7B8COACQg8AfiOAyQiyA+jHA1QoZCOmXAAIgmAAg");
	this.shape_99.setTransform(-96.4,132.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1.5,1,1).p("AsPFiQEPhzERkPQBmhlBLhiQBChWANgnQB4CCD+B9QD7B8COADQg9AeiOAzQi1BBjFA0QoyCWmogUg");
	this.shape_100.setTransform(-96.7,131.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC00").s().p("AsPFiQEPhzERkPQBmhlBLhiQBBhWAOgnQB4CCD9B9QD8B8CNADQg8AeiOAzQi1BBjFA0QnxCFmFAAQgzAAgxgDg");
	this.shape_101.setTransform(-96.7,131.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFCC02").ss(3,1,1).p("AhE0YQgGAEgGAEQgUAOgUAOQmUEniXHBQiUG2CCHBQCBG+FbEQQFzEkJZhY");
	this.shape_102.setTransform(11.1,-1.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#0099FF").ss(6,1,1).p("ANyAAQAAAngbAcQgaAbgmAAQglAAgagbQgagcAAgnQAAgpAagcQAagcAlAAQAmAAAaAcQAbAcAAApgAq9ADQAAAogbAcQgaAbgmAAQglAAgagbQgagcAAgoQAAgoAagcQAagcAlAAQAmAAAaAcQAbAcAAAog");
	this.shape_103.setTransform(59.4,-3.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(2,1,1).p("ADshAQjxEIjmkK");
	this.shape_104.setTransform(58.2,43.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1.5,1,1).p("ALzx7QlwmkoYlxQERG8BWG8QABAGABAGQEOhoERgHQBwgDBxANQE+A6DWDhQDBDLBaE8QAoCOARCZAFbCpQAAAigFAgQgRB5hTBaQhoByiTAAQiUAAhohyQhThagRh5QgFggAAgiQAAiiBphyQBohyCUAAQCTAABoByQBpByAACigAdAF0QgWAnggAjQhoByiUAAQiUAAhohyQhphyAAijQAAiiBphyQBohyCUAAQCUAABoByQAdAgAVAjQA3BcAAB1QAABygzBZQgJBagRBTQg8EohoDBQhxDQixB/QhEAxhOAlQjDBfi1BIACEvrQATgJATgIQAVgIAVgIAkrrvQDWidDZhfQk+k/ofjiQFDGGBrGXgAriloQASgTARgSQC3i6C3iMQmmksnJg5QFMFGC1FlAyzDLQBPhtBQhkQANgSAOgRQCLitCMiSQlxiinagqQFpD4DLETAlRrTQATgOATgOAwUgGQjyh5lpgaIG8FkAu1XAQA3g8Atg8QBDhXANgmQB4CBD+B+QD7B9COACQg9AfiOAzQiMAyiTAqQgtANguANQozCWmqgaQEShuERkPQAogoAkgoQktllhgrBQBIhrBHhkA9tnZQC2KkFvDPQmlD/h2JiQh9uMBztIgAVgVZQD8B/FJB1QoDBSj2gwQg8gMg3gHQiAgQhjAKQs+FJoEio");
	this.shape_105.setTransform(-18,-26.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AtXBGQgagcAAgnQAAgoAagcQAagcAlAAQAmAAAaAcQAbAcAAAoQAAAngbAcQgaAcgmAAQglAAgagcgALYBDQgagcAAgnQAAgpAagcQAagcAlAAQAmAAAaAcQAbAcAAApQAAAngbAcQgaAbgmAAQglAAgagbg");
	this.shape_106.setTransform(59.4,-3.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AIQEVQhphyAAijQAAihBphzQBohyCUAAQCUAABoByQAdAgAVAkQA3BcAAB0QAABygzBZQgWAnggAjQhoByiUAAQiUAAhohygALcgJQgaAcAAAoQAAAoAaAcQAbAbAkAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQgkAAgbAcgAwHEVQhThagRh5QgFggAAgiQAAihBphzQBohyCUAAQCUAABoByQBpBzAAChQAAAigFAgQgRB5hTBaQhoByiUAAQiUAAhohygAtTgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQgkAAgbAcg");
	this.shape_107.setTransform(59,-9.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF6600").s().p("ArrWeQCUgqCMgyQCNgzA9gfQiOgDj7h9Qj+h9h4iCQgNAnhCBXQguA7g3A9QkslmhgrBQBHhqBIhjQBPhuBPhlIAbgiQCLiuCMiSIAkglQC2i6C4iLIAlgcQDXieDZhfIAngQQmUEmiXHBQhPDpAADsQAADPA9DUQCBG+FbEQIACABIAJAIQEaDXGbAAIABAAIAAAAQB+AACKgVIADAAIgDAAQiKAVh+AAIAAAAIgBAAQmbAAkajXIgJgIIgCgBQlbkQiBm+Qg9jUAAjPQAAjsBPjpQCXnBGUkmIAqgRQEMhnESgIQBwgDBxANQE9A7DXDhQDBDLBaE8QAoCNARCaQgVgkgdggQhphyiTAAQiUAAhoByQhpBzAACjQAACjBpBwQBoBzCUAAQCTAABphzQAfgiAWgnQgIBagRBTQg9EohoDAQhxDQiwB/QhEAxhOAmQjEBfi0BHQomDbmcAAQjSAAivg5gAH6GjQB1gBB4iCIABgBIgBABQh4CCh1ABIAAAAIAAAAQh1gBhziDIgCgDIACADQBzCDB1ABIAAAAIAAAAgAoDnFQhpBzAACjQAAAiAEAgQASB3BTBaQBoBzCUAAQCTAABphzQBRhaASh3QAEggAAgiQAAijhnhzQhphyiTAAQiUAAhoBygAhT1VIAAAAg");
	this.shape_108.setTransform(7.4,8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCC00").s().p("A6/eNQEThuEQkPQAogoAkgoQA3g8Aug8QBChXANgmQB4CBD+B+QD7B9COACQg9AfiOAzQiMAyiTAqIhbAaQnhCAl9AAQhBAAg+gEgAQSZvQg9gMg3gHQh/gQhjAKQC0hIDEhfQBNglBFgxQD7B/FJB1QlEAzjZAAQiAAAhbgRgA8JiZQFoAaDyB5QhPBkhQBtgA7Io0QHaAqFxCiQiMCSiLCtQjKkTlqj4gA1bw4QHJA5GnEsQi4CMi2C6Qi2lllMlGgAt04MQIfDiE/E/QjZBfjXCdQhrmXlDmGgAA3wYQhUm8kTm8QIYFxFxGkQkSAHkNBoIgDgMgAA3wYIANgIIgNAIg");
	this.shape_109.setTransform(-2.5,-26.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCC02").s().p("Aj2tqQC2KlFuDOQmkEAh2JiQh9uLBztKg");
	this.shape_110.setTransform(-183.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).wait(1));

	// gill
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFCC02").ss(3,1,1).p("AhE0YQm/EuigHeQiUG2CCHBQCBG+FbEQQFzEkJZhY");
	this.shape_111.setTransform(11.1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_111).to({_off:true},76).wait(1));

	// pupil02
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAngbAcQgaAcglAAQglAAgagcQgagcAAgnQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape_112.setTransform(138.6,-3.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag/BFQgagcAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAoQAAAogbAcQgaAbglAAQglAAgagbg");
	this.shape_113.setTransform(138.6,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112}]}).to({state:[]},76).wait(1));

	// pupil01
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgoQAAgnAagdQAagcAlAAQAlAAAaAcQAbAdAAAng");
	this.shape_114.setTransform(-19.8,-3.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("Ag/BEQgagcAAgnQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAoQAAAngbAcQgaAcglAAQglAAgagcg");
	this.shape_115.setTransform(-19.8,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114}]}).to({state:[]},76).wait(1));

	// eye02
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1.5,1,1).p("AFlAAQAACjhpByQhoByiUAAQiTAAhohyQhphyAAijQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChg");
	this.shape_116.setTransform(137,-9.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("Aj7EVQhphyAAijQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChQAACjhpByQhoByiUAAQiTAAhohyg");
	this.shape_117.setTransform(137,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116}]}).to({state:[]},76).wait(1));

	// eye01
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1.5,1,1).p("AFlAAQAAAigFAgQgRB5hTBaQhoByiUAAQiTAAhohyQhThagRh5QgFggAAgiQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChg");
	this.shape_118.setTransform(-19,-9.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("Aj7EVQhThagRh5QgFggAAgiQAAihBphzQBohyCTAAQCUAABoByQBpBzAAChQAAAigFAgQgRB5hTBaQhoByiUAAQiTAAhohyg");
	this.shape_119.setTransform(-19,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118}]}).to({state:[]},76).wait(1));

	// mouth
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(2,1,1).p("ADshAQjxEIjmkK");
	this.shape_120.setTransform(58.2,43.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(77));

	// body
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBAQRn6VSvCKQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxQg");
	this.shape_121.setTransform(7.9,8.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxQQRn6VSvCKQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_122.setTransform(7.9,8.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1.5,1,1).p("A5EBAQRl6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iVxQg");
	this.shape_123.setTransform(8,8.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF6600").s().p("AskWLQqLj7iVxQQRl6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_124.setTransform(8,8.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1.5,1,1).p("A5CBBQRi6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iSxPg");
	this.shape_125.setTransform(8.1,8.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF6600").s().p("AslWLQqLj7iSxPQRi6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCojAAQjxAAjDhMg");
	this.shape_126.setTransform(8.1,8.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1.5,1,1).p("A5BBCQRg6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iQxOg");
	this.shape_127.setTransform(8.2,8.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF6600").s().p("AsmWLQqLj7iQxOQRg6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_128.setTransform(8.2,8.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1.5,1,1).p("A5ABCQRe6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iOxOg");
	this.shape_129.setTransform(8.3,8.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF6600").s().p("AsnWLQqLj7iOxOQRe6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_130.setTransform(8.3,8.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1.5,1,1).p("A4/BDQRc6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iLxNg");
	this.shape_131.setTransform(8.4,8.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF6600").s().p("AsoWLQqMj7iLxNQRc6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_132.setTransform(8.4,8.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1.5,1,1).p("A4+BDQRa6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iJxNg");
	this.shape_133.setTransform(8.5,8.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF6600").s().p("AspWLQqMj7iJxNQRa6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_134.setTransform(8.5,8.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1.5,1,1).p("A49BEQRY6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iHxMg");
	this.shape_135.setTransform(8.6,8.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF6600").s().p("AsqWLQqMj7iHxMQRY6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_136.setTransform(8.6,8.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1.5,1,1).p("A48BEQRW6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iFxMg");
	this.shape_137.setTransform(8.7,8.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF6600").s().p("AsrWLQqMj7iFxMQRW6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_138.setTransform(8.7,8.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(1.5,1,1).p("A47BFQRU6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iDxLg");
	this.shape_139.setTransform(8.8,8.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF6600").s().p("AssWLQqMj7iDxLQRU6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_140.setTransform(8.8,8.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(1.5,1,1).p("A46BGQRR6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iBxKg");
	this.shape_141.setTransform(9,8.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF6600").s().p("AsuWLQqLj7iBxKQRR6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_142.setTransform(9,8.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1.5,1,1).p("A45BGQRP6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7h/xKg");
	this.shape_143.setTransform(9.1,8.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF6600").s().p("AsvWLQqLj7h/xKQRP6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_144.setTransform(9.1,8.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1.5,1,1).p("A44BFQRO6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7h9xLg");
	this.shape_145.setTransform(9.1,8.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF6600").s().p("AsvWLQqMj7h9xLQRO6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_146.setTransform(9.1,8.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(1.5,1,1).p("A43BFQRM6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7h7xLg");
	this.shape_147.setTransform(9.2,8.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF6600").s().p("AswWLQqMj7h7xLQRM6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_148.setTransform(9.2,8.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(1.5,1,1).p("A42BEQRK6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7h5xMg");
	this.shape_149.setTransform(9.3,8.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF6600").s().p("AsxWLQqMj7h5xMQRK6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_150.setTransform(9.3,8.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1.5,1,1).p("A41BDQRI6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7h3xNg");
	this.shape_151.setTransform(9.4,8.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF6600").s().p("AsyWLQqMj7h3xNQRI6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_152.setTransform(9.4,8.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(1.5,1,1).p("A40BCQRG6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7h2xOg");
	this.shape_153.setTransform(9.5,8.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF6600").s().p("AszWLQqLj7h2xOQRG6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_154.setTransform(9.5,8.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(1.5,1,1).p("A4zBBQRE6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7h0xPg");
	this.shape_155.setTransform(9.6,8.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF6600").s().p("As0WLQqLj7h0xPQRE6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCojAAQjxAAjDhMg");
	this.shape_156.setTransform(9.6,8.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1.5,1,1).p("A4zBAQRD6VSvCKQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7hzxQg");
	this.shape_157.setTransform(9.7,8.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF6600").s().p("As1WLQqLj7hzxQQRD6VSvCKQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_158.setTransform(9.7,8.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1.5,1,1).p("A40BBQRG6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7h1xPg");
	this.shape_159.setTransform(9.5,8.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF6600").s().p("AszWLQqMj7h1xPQRG6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGCojAAQjyAAjChMg");
	this.shape_160.setTransform(9.5,8.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(1.5,1,1).p("A42BCQRJ6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7h5xOg");
	this.shape_161.setTransform(9.4,8.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF6600").s().p("AsyWLQqLj7h5xOQRJ6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_162.setTransform(9.4,8.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(1.5,1,1).p("A43BDQRM6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7h7xNg");
	this.shape_163.setTransform(9.2,8.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF6600").s().p("AswWLQqMj7h7xNQRM6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_164.setTransform(9.2,8.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(1.5,1,1).p("A45BEQRP6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7h/xMg");
	this.shape_165.setTransform(9.1,8.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF6600").s().p("AsvWLQqLj7h/xMQRP6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_166.setTransform(9.1,8.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1.5,1,1).p("A46BEQRS6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iBxMg");
	this.shape_167.setTransform(8.9,8.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF6600").s().p("AstWLQqMj7iBxMQRS6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_168.setTransform(8.9,8.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(1.5,1,1).p("A48BFQRV6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iFxLg");
	this.shape_169.setTransform(8.8,8.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF6600").s().p("AssWLQqLj7iFxLQRV6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_170.setTransform(8.8,8.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(1.5,1,1).p("A49BGQRY6cSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iHxKg");
	this.shape_171.setTransform(8.6,8.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF6600").s().p("AsqWLQqMj7iHxKQRY6cSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_172.setTransform(8.6,8.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(1.5,1,1).p("A4/BHQRb6dSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iLxJg");
	this.shape_173.setTransform(8.5,8.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF6600").s().p("AspWLQqLj7iLxJQRb6dSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_174.setTransform(8.5,8.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(1.5,1,1).p("A4/BGQRc6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iMxKg");
	this.shape_175.setTransform(8.4,8.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF6600").s().p("AsoWLQqLj7iMxKQRc6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_176.setTransform(8.4,8.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(1.5,1,1).p("A5ABFQRe6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iNxLg");
	this.shape_177.setTransform(8.3,8.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF6600").s().p("AsnWLQqMj7iNxLQRe6bSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_178.setTransform(8.3,8.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(1.5,1,1).p("A5BBEQRg6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iPxMg");
	this.shape_179.setTransform(8.2,8.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF6600").s().p("AsmWLQqMj7iPxMQRg6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_180.setTransform(8.2,8.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(1.5,1,1).p("A5CBDQRh6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iRxNg");
	this.shape_181.setTransform(8.2,8.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF6600").s().p("AsmWLQqLj7iRxNQRh6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_182.setTransform(8.2,8.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(1.5,1,1).p("A5CBCQRi6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iSxOg");
	this.shape_183.setTransform(8.1,8.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF6600").s().p("AslWLQqLj7iSxOQRi6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_184.setTransform(8.1,8.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(1.5,1,1).p("A5DBCQRk6YSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iTxOg");
	this.shape_185.setTransform(8,8.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF6600").s().p("AskWLQqMj7iTxOQRk6YSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_186.setTransform(8,8.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(1.5,1,1).p("A5EBBQRm6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iVxPg");
	this.shape_187.setTransform(7.9,8.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF6600").s().p("AsjWLQqMj7iVxPQRm6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGCojAAQjyAAjChMg");
	this.shape_188.setTransform(7.9,8.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(1.5,1,1).p("A5DBBQRj6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iTxPg");
	this.shape_189.setTransform(8.1,8.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF6600").s().p("AslWLQqLj7iTxPQRj6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_190.setTransform(8.1,8.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(1.5,1,1).p("A5CBCQRh6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iRxOg");
	this.shape_191.setTransform(8.2,8.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF6600").s().p("AsmWLQqLj7iRxOQRh6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_192.setTransform(8.2,8.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(1.5,1,1).p("A5BBDQRf6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iPxNg");
	this.shape_193.setTransform(8.3,8.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF6600").s().p("AsnWLQqLj7iPxNQRf6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_194.setTransform(8.3,8.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(1.5,1,1).p("A5ABDQRd6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iNxNg");
	this.shape_195.setTransform(8.4,8.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF6600").s().p("AsoWLQqLj7iNxNQRd6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_196.setTransform(8.4,8.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(1.5,1,1).p("A4/BEQRb6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iLxMg");
	this.shape_197.setTransform(8.5,8.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF6600").s().p("AspWLQqLj7iLxMQRb6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_198.setTransform(8.5,8.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(1.5,1,1).p("A4+BFQRZ6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iJxLg");
	this.shape_199.setTransform(8.6,8.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF6600").s().p("AsqWLQqLj7iJxLQRZ6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_200.setTransform(8.6,8.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(1.5,1,1).p("A49BGQRX6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iHxKg");
	this.shape_201.setTransform(8.7,8.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF6600").s().p("AsrWLQqLj7iHxKQRX6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_202.setTransform(8.7,8.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(1.5,1,1).p("A48BGQRV6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iFxKg");
	this.shape_203.setTransform(8.8,8.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF6600").s().p("AssWLQqLj7iFxKQRV6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_204.setTransform(8.8,8.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(1.5,1,1).p("A47BGQRU6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iExKg");
	this.shape_205.setTransform(8.8,8.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF6600").s().p("AssWLQqLj7iExKQRU6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_206.setTransform(8.8,8.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(1.5,1,1).p("A47BEQRT6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iDxMg");
	this.shape_207.setTransform(8.9,8.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF6600").s().p("AstWLQqLj7iDxMQRT6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_208.setTransform(8.9,8.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(1.5,1,1).p("A46BEQRS6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iCxMg");
	this.shape_209.setTransform(8.9,8.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF6600").s().p("AstWLQqLj7iCxMQRS6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_210.setTransform(8.9,8.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(1.5,1,1).p("A46BDQRS6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iBxNg");
	this.shape_211.setTransform(8.9,8.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF6600").s().p("AstWLQqMj7iBxNQRS6ZSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_212.setTransform(8.9,8.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(1.5,1,1).p("A46BCQRR6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iBxOg");
	this.shape_213.setTransform(9,8.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF6600").s().p("AsuWLQqLj7iBxOQRR6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_214.setTransform(9,8.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(1.5,1,1).p("A45BBQRQ6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7h/xPg");
	this.shape_215.setTransform(9,8.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FF6600").s().p("AsuWLQqMj7h/xPQRQ6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGCojAAQjyAAjChMg");
	this.shape_216.setTransform(9,8.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(1.5,1,1).p("A45BAQRP6VSvCKQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7h/xQg");
	this.shape_217.setTransform(9.1,8.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF6600").s().p("AsvWLQqLj7h/xQQRP6VSvCKQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_218.setTransform(9.1,8.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(1.5,1,1).p("A46BBQRR6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iBxPg");
	this.shape_219.setTransform(9,8.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF6600").s().p("AsuWLQqLj7iBxPQRR6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_220.setTransform(9,8.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(1.5,1,1).p("A47BBQRU6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iDxPg");
	this.shape_221.setTransform(8.8,8.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF6600").s().p("AssWLQqMj7iDxPQRU6XSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGCojAAQjyAAjChMg");
	this.shape_222.setTransform(8.8,8.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(1.5,1,1).p("A48BCQRW6YSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iFxOg");
	this.shape_223.setTransform(8.7,8.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF6600").s().p("AsrWLQqMj7iFxOQRW6YSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_224.setTransform(8.7,8.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(1.5,1,1).p("A49BCQRY6YSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iHxOg");
	this.shape_225.setTransform(8.6,8.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF6600").s().p("AsqWLQqMj7iHxOQRY6YSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_226.setTransform(8.6,8.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(1.5,1,1).p("A4/BEQRc6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQxzIrp7j1QqMj7iLxMg");
	this.shape_227.setTransform(8.4,8.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF6600").s().p("AsoWLQqMj7iLxMQRc6aSvCLQE9A6DXDhQDBDLBaE8QBADkAFEBQADDXglC0Qg9EohoDBQicEgkXCFQsXGBojABQjyAAjChMg");
	this.shape_228.setTransform(8.4,8.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(1.5,1,1).p("A5ABEQRe6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iOxMg");
	this.shape_229.setTransform(8.3,8.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF6600").s().p("AsnWLQqLj7iOxMQRe6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_230.setTransform(8.3,8.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(1.5,1,1).p("A5BBFQRg6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iQxLg");
	this.shape_231.setTransform(8.2,8.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF6600").s().p("AsmWLQqLj7iQxLQRg6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_232.setTransform(8.2,8.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(1.5,1,1).p("A5CBFQRi6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iSxLg");
	this.shape_233.setTransform(8.1,8.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF6600").s().p("AslWLQqLj7iSxLQRi6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBojABQjxAAjDhMg");
	this.shape_234.setTransform(8.1,8.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(1.5,1,1).p("A5EBGQRl6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iVxKg");
	this.shape_235.setTransform(8,8.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF6600").s().p("AskWLQqLj7iVxKQRl6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_236.setTransform(8,8.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBGQRn6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxKg");
	this.shape_237.setTransform(7.9,8.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxKQRn6cSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_238.setTransform(7.9,8.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBFQRn6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxLg");
	this.shape_239.setTransform(7.9,8.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxLQRn6bSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_240.setTransform(7.9,8.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBEQRn6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxMg");
	this.shape_241.setTransform(7.9,8.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxMQRn6aSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_242.setTransform(7.9,8.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBDQRn6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxNg");
	this.shape_243.setTransform(7.9,8.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxNQRn6ZSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_244.setTransform(7.9,8.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBCQRn6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxOg");
	this.shape_245.setTransform(7.9,8.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxOQRn6YSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGBoiABQjyAAjDhMg");
	this.shape_246.setTransform(7.9,8.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBBQRn6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxPg");
	this.shape_247.setTransform(7.9,8.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxPQRn6XSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_248.setTransform(7.9,8.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(1.5,1,1).p("A5FBAQRn6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQxzIrp7j1QqLj7iXxQg");
	this.shape_249.setTransform(7.9,8.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF6600").s().p("AsjWLQqLj7iXxQQRn6WSvCLQE+A6DWDhQDBDLBaE8QBBDkAEEBQAEDXgmC0Qg8EohoDBQidEgkXCFQsXGCoiAAQjyAAjDhMg");
	this.shape_250.setTransform(7.9,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.shape_121}]}).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_164},{t:this.shape_163}]},1).to({state:[{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_180},{t:this.shape_179}]},1).to({state:[{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_188},{t:this.shape_187}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_194},{t:this.shape_193}]},1).to({state:[{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[]},1).wait(1));

	// topFins
	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(1.5,1,1).p("ADTxeQFCILA/IKQlJmIp7kJQFdGnBgG4Qm+lOnmg9QFsFlC3GKQmJi+oIguQGeEdDOE/QkEiimpgfII0HHILpsDIG7i8QEFhlCxhFQBMgbEzhTQmYobqcnLg");
	this.shape_251.setTransform(-54.1,-108.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFCC00").s().p("A0GKYQGpAfEECiQjOk/mdkdQIHAuGJC+Qi3mKltllQHnA9G+FOQhgm4lemnQJ8EJFJGIQg/oKlCoLQKcHLGYIbQk0BThLAbIm2CqIm7C8IrpMDg");
	this.shape_252.setTransform(-54.1,-108.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(1.5,1,1).p("A0FKYQGlAhEGChQjPlAmbkeQIFAyGKC8Qi5mKlplmQHkA/G/FNQhhm4lbmoQJ6ELFJGHQhBoLk+oLQKYHMGaIbQkzBShMAcQixBFkEBlIm7C8IrqMCQkajhkYjmg");
	this.shape_253.setTransform(-54,-108.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFCC00").s().p("A0GKYQGmAhEGCgQjPk/mbkeQIFAyGLC7Qi6mKlpllQHlA+G+FOQhhm4lbmoQJ5ELFKGHQhBoLk+oLQKXHMGcIbQk0BThMAbIm1CqIm8C8IroMCQkajikajlg");
	this.shape_254.setTransform(-54,-108.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(1.5,1,1).p("A0FKYQGjAjEICfQjSlAmXkeQIDAzGLC7Qi7mLlmlmQHiBBHAFNQhim4lZmqQJ4EOFKGFQhEoLk6oMQKUHPGdIZQkzBThMAbQixBFkFBmIm7C8IrpMCQkajgkYjog");
	this.shape_255.setTransform(-54,-108.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFCC00").s().p("A0FKXQGjAkEICfQjSlAmXkfQIDA0GLC7Qi7mLlmlmQHiBBHAFMQhim3lZmqQJ4EOFKGFQhEoLk6oMQKUHOGdIaQkzBThMAbIm2CqIm7C8IrpMDQkajhkYjog");
	this.shape_256.setTransform(-54,-108.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(1.5,1,1).p("A0FKXQGhAmEKCeQjUlAmUkhQIAA3GNC6Qi9mLlkloQHhBDHAFMQhjm2lWmtQJ2EQFKGEQhGoLk2oMQKPHQGhIYQk0BThMAbQixBFkEBmIm7C8IrpMCQkbjfkXjqg");
	this.shape_257.setTransform(-54,-108.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFCC00").s().p("A0FKXQGhAmEKCdQjUk/mUkgQIAA2GNC5Qi9mKlkloQHhBEHAFLQhjm2lWmsQJ2EPFKGFQhGoMk2oMQKPHQGhIZQk0BThMAbIm1CqIm7C8IrpMCQkbjfkXjqg");
	this.shape_258.setTransform(-54,-108.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(1.5,1,1).p("A0EKXQGeAoELCcQjWlAmRkhQH/A4GNC5Qi/mLlglpQHfBGHBFKQhlm1lTmuQJ1ERFKGEQhKoMkyoNQKMHSGjIYQkzBThMAbQixBFkFBmIm7C8IrpMCQkbjekVjsg");
	this.shape_259.setTransform(-53.9,-108.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFCC00").s().p("A0EKWQGeApELCcQjWlAmRkhQH/A5GNC4Qi/mKlglpQHfBFHBFKQhlm1lTmuQJ1ESFKGDQhKoMkyoMQKMHRGjIYQkzBThMAbIm2CqIm7C8IrpMDQkbjekVjtg");
	this.shape_260.setTransform(-53.9,-108.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(1.5,1,1).p("A0EKXQGbApEOCbQjYlAmOkiQH9A7GOC3QjBmKlelrQHeBIHCFKQhmm0lRmxQJzEUFLGCQhNoMktoNQKHHTGmIXQkzBThMAbQixBFkFBmIm7C8IrpMCQkbjckVjug");
	this.shape_261.setTransform(-53.9,-108.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFCC00").s().p("A0EKWQGcArENCaQjZlAmNkiQH8A7GPC3QjBmKldlrQHdBJHCFJQhnm0lQmxQJzEUFLGDQhNoNktoNQKGHTGnIYQk0BThLAbIm2CqIm7C8IrpMCQkbjckVjvg");
	this.shape_262.setTransform(-53.9,-108.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(1.5,1,1).p("A0EKWQGZAsEQCaQjblAmKkkQH6A+GQC2QjDmLlblsQHcBLHCFJQhnmzlOmzQJyEVFKGCQhPoNkpoOQKDHVGpIXQk0BThMAbQixBFkEBmIm7C8IrqMCQkajbkVjxg");
	this.shape_263.setTransform(-53.8,-108.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFCC00").s().p("A0EKWQGZAsEPCaQjalAmKkkQH6A+GQC2QjDmLlblrQHbBKHDFIQhomzlNmyQJyEVFKGCQhPoNkqoNQKDHUGqIXQk0BThMAbIm1CqIm8C8IroMDQkbjbkVjxg");
	this.shape_264.setTransform(-53.8,-108.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(1.5,1,1).p("A0DKWQGWAuERCZQjdlBmHkkQH4BAGRC1QjFmLlYltQHaBNHDFHQhomxlMm2QJxEYFLGBQhSoOkmoOQJ/HWGsIWQkzBThMAbQixBGkFBlIm7C8IrpMCQkcjZkSjzg");
	this.shape_265.setTransform(-53.8,-108.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFCC00").s().p("A0DKVQGWAvERCYQjdlAmGklQH3BBGRC0QjFmKlYltQHaBNHEFHQhpmylMm1QJxEYFLGBQhToOkloOQJ/HWGsIXQk0BThLAbIm2CqIm7C8IrpMCQkbjZkTj0g");
	this.shape_266.setTransform(-53.8,-108.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(1.5,1,1).p("A0DKWQGUAwETCXQjglBmDklQH2BDGSCzQjHmLlVluQHYBPHEFHQhqmxlIm4QJuEbFLF/QhVoOkhoPQJ7HYGvIWQk0BThMAbQixBFkEBmIm7C8IrpMCQkcjYkSj1g");
	this.shape_267.setTransform(-53.8,-108.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFCC00").s().p("A0DKWQGUAwETCXQjglBmDklQH2BDGSCzQjHmLlVluQHYBPHEFGQhqmwlIm4QJuEbFLF/QhVoOkhoPQJ7HYGvIWQk0BThMAbIm1CqIm7C8IrpMDQkcjYkSj1g");
	this.shape_268.setTransform(-53.8,-108.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(1.5,1,1).p("A0CKVQGRAzEUCWQjhlBmAkoQHzBHGTCxQjImLlSlvQHWBRHFFGQhsmwlFm5QJsEdFMF9QhYoOkdoPQJ2HZGyIVQkzBThMAbQixBFkFBmIm7C8IrpMCQkbjWkRj4g");
	this.shape_269.setTransform(-53.7,-108.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFCC00").s().p("A0CKVQGRAzEUCVQjhlAmAknQHzBFGTCyQjImLlSluQHWBRHFFFQhsmvlFm6QJsEdFMF+QhYoPkdoPQJ2HZGyIWQkzBThMAbIm2CqIm7C8IrpMCQkbjXkRj3g");
	this.shape_270.setTransform(-53.7,-108.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(1.5,1,1).p("A0CKVQGOA0EXCVQjklCl8knQHwBIGVCxQjLmMlPlwQHVBUHGFEQhtmulEm8QJsEfFMF9QhboPkZoPQJzHaG0IVQkzBThMAbQixBFkFBlIm7C8IrpMCQkcjVkQj5g");
	this.shape_271.setTransform(-53.7,-108.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFCC00").s().p("A0CKVQGOA0EXCVQjklCl8knQHxBIGUCxQjKmMlQlwQHVBUHGFEQhtmulDm8QJrEfFMF9QhboPkZoPQJzHaG0IVQk0BThLAbIm2CqIm7C8IrpMCQkcjVkQj5g");
	this.shape_272.setTransform(-53.7,-108.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(1.5,1,1).p("A0CKUQGMA3EZCTQjnlBl5kpQHvBLGWCvQjNmLlMlyQHTBWHGFEQhumulAm+QJpEhFMF8QhdoPkVoQQJuHcG4IUQk0BThMAbQixBFkEBmIm7C8IrqMCQkcjUkPj8g");
	this.shape_273.setTransform(-53.6,-108.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFCC00").s().p("A0BKUQGLA3EYCTQjmlBl4kpQHuBLGWCvQjNmLlMlyQHTBWHGFEQhumulBm+QJqEhFMF8QhdoPkVoQQJuHcG4IUQk0BThMAbIm1CrIm8C8IroMCQkcjUkPj8g");
	this.shape_274.setTransform(-53.6,-108.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(1.5,1,1).p("A0BKUQGJA5EaCSQjplCl0kqQHrBOGXCuQjPmMlJlyQHSBYHHFCQhvmsk/nBQJpEkFMF7QhhoQkQoQQJqHdG6IUQkzBThMAbQixBFkFBlIm7C8IrpMCQkcjSkOj+g");
	this.shape_275.setTransform(-53.6,-108.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFCC00").s().p("A0BKUQGJA5EaCSQjolCl2kqQHsBOGXCuQjPmMlJlyQHRBYHIFCQhvmsk/nBQJoEkFNF7QhhoQkQoQQJpHdG7IUQk0BThLAbIm2CqIm7C8IrpMCQkdjSkNj+g");
	this.shape_276.setTransform(-53.6,-108.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(1.5,1,1).p("A0BKUQGHA7EcCQQjrlClykrQHqBQGYCtQjRmMlGlzQHQBaHHFCQhwmsk8nCQJnElFMF6QhjoQkMoRQJmHfG9ITQk0BThMAbQixBFkEBmIm7C8IrpMCQkdjRkNkAg");
	this.shape_277.setTransform(-53.6,-109);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFCC00").s().p("A0BKUQGHA7EcCQQjrlClykrQHqBQGYCtQjRmMlGlzQHQBaHHFCQhwmsk8nCQJnElFMF6QhjoQkMoRQJmHfG9ITQk0BThMAbIm1CrIm7C8IrpMCQkdjRkNkAg");
	this.shape_278.setTransform(-53.6,-109);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(1.5,1,1).p("A0AKTQGEA+EdCPQjtlCluktQHnBTGZCsQjSmMlEl1QHPBdHIFAQhymqk5nFQJlEoFNF5QhmoRkJoRQJiHhHAISQkzBThMAbQixBFkFBlIm7C8IrpMCQkcjPkMkDg");
	this.shape_279.setTransform(-53.5,-109);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFCC00").s().p("A0AKTQGEA+EdCPQjtlCluktQHnBTGZCsQjSmMlEl1QHPBdHIFAQhymqk5nFQJlEoFNF5QhmoRkJoRQJiHhHAISQkzBThMAbIm2CqIm7C8IrpMCQkcjPkMkDg");
	this.shape_280.setTransform(-53.5,-109);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(1.5,1,1).p("A0AKTQGBBAEgCNQjvlClsktQHmBVGaCqQjVmMlAl2QHMBfHJFAQhzmqk2nGQJjEpFNF4QhpoRkEoSQJeHjHDIRQk0BThMAbQixBFkEBmIm7C8IrpMCQkdjOkLkFg");
	this.shape_281.setTransform(-53.5,-109.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFCC00").s().p("A0AKTQGBBAEgCNQjvlClsktQHmBVGaCqQjVmMlAl2QHMBfHJFAQhzmqk2nGQJjEpFNF4QhpoRkEoSQJeHjHDIRQk0BThMAbIm1CrIm7C8IrpMCQkdjOkLkFg");
	this.shape_282.setTransform(-53.5,-109.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(1.5,1,1).p("A0AKTQF/BCEhCMQjxlDlokuQHkBYGaCpQjWmNk9l3QHLBiHJE+Qh1mokznJQJiEsFNF3QhsoSj/oSQJZHkHGIRQk0BThMAbQixBFkEBlIm7C8IrqMCQkdjMkKkHg");
	this.shape_283.setTransform(-53.4,-109.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFCC00").s().p("A0AKTQF/BCEhCMQjxlDlokuQHjBYGcCpQjXmNk+l3QHLBiHKE+Qh1mokznJQJiEsFNF3QhsoSj/oSQJYHkHHIRQk0BThMAbIm1CqIm8C8IroMCQkejMkKkHg");
	this.shape_284.setTransform(-53.4,-109.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(1.5,1,1).p("Az/KSQF8BEEjCLQj0lClkkwQHgBbGdCnQjZmMk6l4QHJBjHLE+Qh2mokxnLQJgEuFOF2QhvoSj8oTQJWHmHIIQQkzBThMAbQixBFkFBmIm7C8IrpMCQkdjMkJkJg");
	this.shape_285.setTransform(-53.4,-109.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFCC00").s().p("Az/KSQF8BEEjCLQjzlCllkwQHhBbGcCnQjYmMk7l4QHJBjHLE+Qh2mokxnLQJgEuFOF2QhvoSj8oTQJVHmHJIQQk0BThLAbIm2CrIm7C8IrpMCQkdjMkJkJg");
	this.shape_286.setTransform(-53.4,-109.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(1.5,1,1).p("Az/KSQF6BGElCKQj3lDlgkxQHeBdGeCnQjbmNk3l5QHHBmHLE8Qh3mmkunNQJfEwFNF1QhxoTj4oTQJRHnHMIQQk0BThMAbQixBFkEBlIm7C8IrqMCQkdjKkIkLg");
	this.shape_287.setTransform(-53.3,-109.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFCC00").s().p("Az+KSQF4BGElCKQj1lDlikxQHfBdGeCnQjbmNk3l5QHHBmHLE8Qh3mmkvnNQJfEwFOF1QhxoTj4oTQJRHnHMIQQk0BThMAbIm1CqIm8C8IroMCQkejKkHkLg");
	this.shape_288.setTransform(-53.3,-109.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(1.5,1,1).p("Az+KSQF3BIEmCIQj4lDldkyQHcBgGeClQjcmNk1l6QHGBpHME7Qh5mlkrnQQJdEzFOFzQh1oTjzoUQJNHpHOIPQkzBThMAbQixBFkFBmIm7C8IrpMCQkdjJkHkNg");
	this.shape_289.setTransform(-53.3,-109.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFCC00").s().p("Az+KSQF3BIEmCIQj4lDldkyQHcBgGeClQjcmNk1l6QHGBpHME7Qh5mlkrnQQJdEzFOFzQh1oTjzoUQJNHpHOIPQkzBThMAbIm2CrIm7C8IrpMCQkdjJkHkNg");
	this.shape_290.setTransform(-53.3,-109.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(1.5,1,1).p("Az+KRQF0BLEpCHQj7lDlakzQHaBiGgCkQjemNkyl8QHEBrHME6Qh5mkkqnSQJcE1FOFzQh3oUjvoUQJIHqHSIPQk0BThMAbQixBFkEBlIm7C8IrpMCQkejHkGkQg");
	this.shape_291.setTransform(-53.3,-109.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFCC00").s().p("Az+KRQF0BLEpCHQj7lDlakzQHaBiGgCkQjemNkyl8QHEBrHME6Qh5mkkqnSQJcE1FOFzQh3oUjvoUQJIHqHSIPQk0BThMAbIm1CqIm7C8IrpMCQkejHkGkQg");
	this.shape_292.setTransform(-53.3,-109.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(1.5,1,1).p("Az9KRQFxBNEqCFQj8lDlXk0QHXBlGhCiQjgmNkvl8QHCBtHOE5Qh7mjknnUQJaE3FPFxQh6oUjsoVQJFHsHUIOQkzBThMAbQixBFkFBmIm7C8IrpMCQkejGkEkSg");
	this.shape_293.setTransform(-53.2,-109.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFCC00").s().p("Az9KRQFxBNEqCFQj8lDlXk0QHXBlGhCiQjgmNkvl8QHCBtHOE5Qh7mjknnUQJaE3FPFxQh6oUjsoVQJFHsHUIOQkzBThMAbIm2CrIm7C8IrpMCQkejGkEkSg");
	this.shape_294.setTransform(-53.2,-109.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(1.5,1,1).p("Az9KRQFvBPEsCEQj/lElTk1QHVBnGiCiQjimOksl9QHABvHPE4Qh9mikknWQJZE5FPFxQh9oVjnoVQJAHtHXIOQkzBThMAaQixBGkFBlIm7C8IrpMCQkejEkEkUg");
	this.shape_295.setTransform(-53.2,-109.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFCC00").s().p("Az9KRQFvBPEsCEQj/lElTk1QHVBnGiCiQjimOksl9QHBBvHOE4Qh9mikjnWQJYE5FPFxQh+oVjnoVQJBHtHXIOQk0BThLAaIm2CrIm7C8IrpMCQkejEkEkUg");
	this.shape_296.setTransform(-53.2,-109.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(1.5,1,1).p("Az9KQQFsBSEvCCQkClDlQk3QHTBqGkCgQjkmNkql/QG/ByHPE3Qh9mhkinZQJXE8FPFvQiAoVjioWQI8HvHaINQk0BThMAaQixBGkEBmIm7C8IrqMCQkejDkDkXg");
	this.shape_297.setTransform(-53.1,-109.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFCC00").s().p("Az9KQQFtBSEtCCQkAlDlRk3QHUBqGjCgQjkmNkql/QG/ByHPE3Qh9mhkinZQJXE8FPFvQiAoVjioWQI8HvHaINQk0BThMAaIm1CsIm8C8IroMCQkfjDkDkXg");
	this.shape_298.setTransform(-53.1,-109.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(1.5,1,1).p("Az8KQQFpBUEwCBQkDlElNk4QHRBtGkCfQjmmOkmmAQG9B0HQE2Qh/mgkfnaQJWE9FPFvQiDoWjfoWQI4HxHdIMQkzBThMAaQixBGkFBlIm7C8IrpMCQkfjBkBkZg");
	this.shape_299.setTransform(-53.1,-109.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFCC00").s().p("Az8KQQFqBUEvCBQkDlElNk4QHRBtGkCfQjmmOkmmAQG9B0HQE2Qh/mgkfnaQJWE9FPFvQiEoWjeoWQI4HxHdIMQk0BThLAaIm2CrIm7C8IrpMCQkfjBkBkZg");
	this.shape_300.setTransform(-53.1,-109.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(1.5,1,1).p("Az8KQQFnBVEyCAQkGlElJk5QHOBwGmCdQjomNkjmCQG7B3HQE1QiAmfkcndQJUFAFPFtQiFoWjboXQI0HzHgILQk0BThMAaQixBGkEBmIm7C8IrpMCQkfjAkBkbg");
	this.shape_301.setTransform(-53.1,-109.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFCC00").s().p("Az8KQQFnBVEyCAQkGlElJk5QHOBwGmCdQjomNkjmCQG7B3HQE1QiAmfkcndQJUFAFPFtQiFoWjboXQI0HzHgILQk0BThMAaIm1CsIm7C8IrpMCQkfjAkBkbg");
	this.shape_302.setTransform(-53.1,-109.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(1.5,1,1).p("Az7KPQFkBYEzB/QkIlElFk6QHMByGmCcQjqmOkgmCQG6B4HRE0QiCmekZnfQJSFCFQFtQiJoXjWoXQIwH0HiILQkzBThMAaQixBGkFBlIm7C8IrpMCQkfi/j/kdg");
	this.shape_303.setTransform(-53,-109.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFCC00").s().p("Az7KPQFkBYEzB/QkIlElFk6QHMByGmCcQjqmOkgmCQG6B4HRE0QiCmekZnfQJSFCFQFtQiJoXjWoXQIwH0HiILQkzBThMAaIm2CrIm7C8IrpMCQkfi/j/kdg");
	this.shape_304.setTransform(-53,-109.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(1.5,1,1).p("Az7KPQFiBaE1B9QkKlElDk7QHKB0GoCbQjsmOkdmDQG4B7HREzQiDmdkWnhQJQFEFQFrQiLoXjSoYQIrH2HmIKQk0BThMAaQixBGkEBmIm7C8IrpMCQkfi+j/kfg");
	this.shape_305.setTransform(-53,-109.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFCC00").s().p("Az7KPQFiBaE1B9QkKlElDk7QHKB0GoCbQjsmOkdmDQG4B7HREzQiDmdkWnhQJQFEFQFrQiLoXjSoYQIrH2HmIKQk0BThMAaIm1CsIm7C8IrpMCQkfi+j/kfg");
	this.shape_306.setTransform(-53,-109.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(1.5,1,1).p("Az7KPQFfBcE3B8QkMlFk/k8QHHB3GpCaQjumOkamGQG2B+HTEyQiEmckVnjQJQFGFQFrQiOoYjOoYQIoH2HoIKQk0BThMAbQixBGkEBlIm7C8IrqMCQkfi8j+khg");
	this.shape_307.setTransform(-52.9,-109.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFCC00").s().p("Az7KOQFfBcE3B8QkMlEk/k8QHHB3GqCZQjvmNkamFQG3B9HSEyQiEmckUnjQJPFGFQFrQiOoYjOoYQIoH3HoIKQk0BThMAaIm1CrIm8C8IroMCQkgi8j+kig");
	this.shape_308.setTransform(-52.9,-109.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(1.5,1,1).p("Az6KOQFcBfE5B6QkOlEk8k+QHFB6GqCYQjwmOkXmGQG1CAHTExQiGmbkRnmQJNFIFRFqQiRoYjKoZQIjH4HrIKQkzBThMAaQixBGkFBmIm7C8IrpMCQkgi7j8kkg");
	this.shape_309.setTransform(-52.9,-109.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFCC00").s().p("Az6KOQFcBeE5B7QkPlEk7k+QHFB5GqCZQjwmOkYmGQG2CAHTEwQiGmakRnmQJNFJFRFpQiRoYjLoZQIkH5HrIJQk0BThLAaIm2CrIm7C8IrpMDQkgi7j8kkg");
	this.shape_310.setTransform(-52.9,-109.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(1.5,1,1).p("Az6KOQFaBhE7B5QkRlFk4k/QHDB9GrCWQjymOkVmHQGzCCHUEwQiHmakOnoQJMFLFQFoQiUoYjFoZQIfH6HuIIQk0BThMAaQixBGkEBmIm7C8IrpMCQkgi5j8kmg");
	this.shape_311.setTransform(-52.9,-109.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFCC00").s().p("Az6KOQFaBgE7B5QkRlEk4k/QHDB9GrCWQjymOkVmHQGzCCHUEwQiHmakOnoQJMFLFQFpQiUoZjFoZQIfH6HuIJQk0BThMAaIm1CrIm7C8IrpMCQkgi5j8kmg");
	this.shape_312.setTransform(-52.9,-109.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(1.5,1,1).p("Az5KOQFXBjE8B3QkTlFk1k/QHBB+GsCWQjzmPkSmIQGxCEHVEvQiImYkNnqQJLFNFRFnQiXoZjCoaQIbH8HxIIQkzBThMAaQixBGkFBlIm7C8IrpMDQkgi5j6kng");
	this.shape_313.setTransform(-52.8,-109.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFCC00").s().p("Az5KOQFXBiE8B4QkTlFk1lAQHBCAGsCVQjzmOkSmJQGxCFHVEuQiImYkNnqQJLFNFRFnQiXoZjCoaQIbH8HxIIQkzBThMAaIm2CrIm7C8IrpMDQkgi5j6kng");
	this.shape_314.setTransform(-52.8,-109.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(1.5,1,1).p("Az5KNQFVBlE+B3QkWlFkxlBQG+CBGuCVQj2mPkPmJQGwCGHVEuQiJmXkKntQJJFPFRFnQiZoai+oaQIXH9H0IIQk0BShMAbQixBGkEBlIm7C8IrpMCQkgi2j6krg");
	this.shape_315.setTransform(-52.8,-109.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFCC00").s().p("Az5KNQFVBlE+B2QkWlFkxlAQG+CBGuCUQj2mOkPmKQGwCHHVEuQiJmXkKntQJJFPFRFnQiZoai+oaQIXH9H0IIQk0BThMAaIm1CrIm7C8IrpMCQkgi2j6krg");
	this.shape_316.setTransform(-52.8,-109.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(1.5,1,1).p("Az5KNQFSBnFAB1QkXlFkulDQG8CFGuCTQj3mPkMmLQGuCJHWEuQiLmXkHnuQJIFRFRFlQicoai5obQISH/H3IHQk0BThMAaQixBGkEBmIm7C8IrqMCQkgi1j5ktg");
	this.shape_317.setTransform(-52.7,-109.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFCC00").s().p("Az4KNQFRBnFAB1QkXlFkulCQG8CEGvCTQj4mPkMmKQGuCJHWEsQiLmWkGnvQJHFSFRFlQicoai6oaQITH+H3IHQk0BThMAaIm1CrIm8C8IroMDQkhi2j4ksg");
	this.shape_318.setTransform(-52.7,-109.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(1.5,1,1).p("Az4KNQFQBpFBB0QkalGkrlDQG6CHGwCSQj6mPkImMQGrCLHYEsQiMmWkFnwQJGFUFSFjQigoai1obQIPIAH5IGQkzBThMAaQixBGkFBmIm7C8IrpMCQkhizj3kvg");
	this.shape_319.setTransform(-52.7,-110);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFCC00").s().p("Az4KNQFPBpFCBzQkalFkrlDQG7CHGvCRQj5mOkJmMQGsCLHXEsQiNmWkEnwQJGFUFSFkQigobi1obQIOIAH6IHQk0BThLAaIm2CrIm7C8IrpMCQkhizj3kvg");
	this.shape_320.setTransform(-52.7,-110);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(1.5,1,1).p("Az4KMQFNBsFEByQkclFkolFQG4CJGxCRQj8mPkGmNQGqCNHYErQiNmUkCnzQJEFWFSFjQiiobixocQIKIDH9IFQk0BThMAaQixBGkEBmIm7C8IrqMCQkgizj3kxg");
	this.shape_321.setTransform(-52.6,-110);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFCC00").s().p("Az4KMQFNBsFDByQkblGkolEQG4CKGxCQQj8mPkGmNQGrCNHXErQiNmUkCnzQJEFWFSFjQiiobixobQIKIBH9IGQk0BThMAaIm1CrIm8C8IroMDQkhizj3kxg");
	this.shape_322.setTransform(-52.6,-110);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(1.5,1,1).p("Az3KMQFKBtFFBxQkelFkklGQG1CMGyCPQj9mPkDmOQGoCQHZEqQiPmTj/n2QJDFYFSFiQilobitocQIGIDH/IFQkzBThMAaQixBGkFBmIm7C8IrpMCQkhixj1kzg");
	this.shape_323.setTransform(-52.6,-110.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFCC00").s().p("Az3KMQFKBtFFBxQkelGkklFQG1CMGyCPQj9mPkDmNQGoCPHZEqQiPmUj/n1QJDFZFSFiQilocitocQIGIEH/IFQkzBThMAaIm2CrIm7C8IrpMCQkhixj1kzg");
	this.shape_324.setTransform(-52.6,-110.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(1.5,1,1).p("AD0xwIFQQ5QlSlhpBlaQD8H3CQGTQnZkqmniSIIAMfItmkcIJBKMIqPjfQD1E1EhCwILpsCIG7i8QEEhmCxhGQBMgaE0hTg");
	this.shape_325.setTransform(-52.6,-110.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFCC00").s().p("Az3KLIKPDgIpBqNINmEdIoAsfQGnCSHZEpQiQmSj8n3QJBFaFSFhIlQw5IQEQKQk0BThMAaIm1CrIm7C8IrpMDQkhiwj1k2g");
	this.shape_326.setTransform(-52.6,-110.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(1.5,1,1).p("Az4KMQFNBsFEByQkclFknlFQG2CJGyCRQj8mPkGmNQGqCNHYErQiNmUkCnzQJEFWFSFjQiiobixocQIKIDH9IFQk0BThMAaQixBGkEBmIm7C8IrqMCQkgiyj3kyg");
	this.shape_327.setTransform(-52.6,-110);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFCC00").s().p("Az4KMQFNBsFDByQkblGknlEQG2CKGyCQQj8mPkGmNQGrCNHXErQiNmUkCnzQJEFWFSFjQiiobixobQIKIBH9IGQk0BThMAaIm1CrIm8C8IroMDQkhizj3kxg");
	this.shape_328.setTransform(-52.6,-110);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFCC00").s().p("Az4KNQFPBpFCBzQkalFkrlDQG7CHGvCRQj6mOkImMQGsCLHXEsQiNmWkEnwQJGFUFSFkQigobi1obQIOIAH6IHQk0BThLAaIm2CrIm7C8IrpMCQkhizj3kvg");
	this.shape_329.setTransform(-52.7,-110);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(1.5,1,1).p("Az4KNQFRBnFAB1QkYlFktlDQG8CFGuCTQj4mPkLmLQGuCJHWEuQiLmXkHnuQJHFRFSFlQidoai5obQISH/H3IHQkzBThMAaQixBGkFBmIm7C8IrpMCQkgi1j4ktg");
	this.shape_330.setTransform(-52.7,-109.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFCC00").s().p("Az4KMQFRBoFAB1QkYlFktlCQG8CEGuCTQj4mPkLmKQGuCJHWEsQiLmWkHnvQJHFSFSFlQidoai5oaQISH+H3IHQkzBThMAaIm2CrIm7C8IrpMDQkgi2j4ktg");
	this.shape_331.setTransform(-52.7,-109.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(1.5,1,1).p("Az5KNQFUBmE/B2QkWlFkxlBQG+CCGuCUQj2mPkOmJQGvCGHVEuQiJmXkKntQJJFQFRFmQiaoai9oaQIXH9H0IIQk0BThMAaQixBGkEBlIm7C8IrpMCQkgi2j6krg");
	this.shape_332.setTransform(-52.8,-109.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFCC00").s().p("Az5KNQFUBmE/B2QkWlFkxlBQG+CCGuCUQj2mPkOmJQGvCGHVEuQiJmXkKntQJJFQFRFmQiaoai9oaQIXH9H0IIQk0BThMAaIm1CrIm7C8IrpMCQkgi2j6krg");
	this.shape_333.setTransform(-52.8,-109.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(1.5,1,1).p("Az5KOQFXBjE8B3QkTlFk0lAQHACAGsCVQj0mOkRmJQGxCFHVEvQiJmZkLnqQJKFNFRFnQiYoZjAoaQIaH8HxIIQkzBThMAaQixBGkFBmIm7C8IrpMCQkgi4j6kog");
	this.shape_334.setTransform(-52.8,-109.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFCC00").s().p("Az5KOQFXBjE8B3QkTlFk0lAQHACAGsCVQj0mOkRmJQGxCFHVEvQiJmZkLnqQJKFNFRFnQiYoZjAoaQIaH8HxIIQkzBThMAaIm2CsIm7C8IrpMCQkgi4j6kog");
	this.shape_335.setTransform(-52.8,-109.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(1.5,1,1).p("Az6KOQFZBhE8B5QkRlFk5k/QHDB9GsCXQjzmPkUmHQGzCCHUEwQiHmZkOnoQJLFLFRFoQiUoZjFoZQIeH6HvIJQk0BThMAaQixBGkEBlIm7C8IrqMCQkfi5j8kmg");
	this.shape_336.setTransform(-52.8,-109.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFCC00").s().p("Az5KOQFYBhE7B5QkQlFk5k/QHDB9GsCXQjzmPkUmHQGzCCHUEwQiHmZkPnoQJMFLFRFoQiVoZjEoZQIeH6HvIJQk0BThMAaIm1CrIm8C8IroMCQkgi5j7kmg");
	this.shape_337.setTransform(-52.8,-109.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(1.5,1,1).p("Az6KOQFcBfE5B6QkPlEk7k+QHFB6GqCYQjwmOkXmGQG0CAHUExQiGmbkRnmQJNFJFRFpQiSoYjJoZQIjH5HrIJQkzBThMAaQixBGkFBmIm7C8IrpMCQkgi7j8kkg");
	this.shape_338.setTransform(-52.9,-109.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFCC00").s().p("Az6KOQFcBfE5B6QkPlEk7k+QHFB6GqCYQjwmOkXmGQG0CAHUExQiHmbkQnmQJNFJFRFpQiSoYjJoZQIiH5HsIJQk0BThLAaIm2CsIm7C8IrpMCQkgi7j8kkg");
	this.shape_339.setTransform(-52.9,-109.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(1.5,1,1).p("Az6KOQFeBdE3B8QkNlFk+k8QHHB3GpCaQjumOkamFQG2B9HTEyQiFmbkTnkQJPFHFQFqQiPoYjNoYQImH3HpIKQkzBThMAaQixBGkFBlIm7C8IrpMCQkfi7j9kjg");
	this.shape_340.setTransform(-52.9,-109.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFCC00").s().p("Az6KOQFeBdE3B8QkNlFk+k8QHHB3GpCaQjumOkamFQG2B9HTEyQiFmbkTnkQJPFHFQFqQiPoYjNoYQImH3HpIKQkzBThMAaIm2CrIm7C8IrpMCQkfi7j9kjg");
	this.shape_341.setTransform(-52.9,-109.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(1.5,1,1).p("Az7KPQFhBaE2B9QkLlElBk7QHJB1GoCaQjtmOkcmEQG3B8HSEzQiDmdkWniQJQFFFQFrQiMoXjRoYQIrH2HmIKQk0BThMAaQixBGkEBmIm7C8IrpMCQkfi9j/kgg");
	this.shape_342.setTransform(-53,-109.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFCC00").s().p("Az7KPQFhBaE2B9QkLlElBk7QHJB1GoCaQjtmOkcmEQG3B8HSEzQiDmdkWniQJQFFFQFrQiMoXjRoYQIrH2HmIKQk0BThMAaIm1CsIm7C8IrpMCQkfi9j/kgg");
	this.shape_343.setTransform(-53,-109.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(1.5,1,1).p("Az7KPQFkBZEzB+QkIlElFk7QHLBzGnCcQjqmOkgmDQG6B5HRE0QiCmdkZngQJSFDFQFsQiKoXjVoXQIvH0HjILQkzBThMAaQixBGkFBlIm7C8IrpMCQkfi+j/keg");
	this.shape_344.setTransform(-53,-109.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFCC00").s().p("Az7KPQFkBZEzB+QkIlElFk7QHLBzGnCcQjqmOkgmDQG6B5HRE0QiCmdkZngQJSFDFQFsQiKoXjVoXQIvH0HjILQkzBThMAaIm2CrIm7C8IrpMCQkfi+j/keg");
	this.shape_345.setTransform(-53,-109.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(1.5,1,1).p("Az8KPQFmBXEyB/QkGlElIk5QHOBwGlCdQjomOkjmBQG7B3HRE1QiBmfkbndQJTFAFQFtQiGoWjaoXQIzHzHhILQk0BThMAaQixBGkEBmIm7C8IrqMCQkfjAkAkcg");
	this.shape_346.setTransform(-53,-109.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFCC00").s().p("Az8KPQFmBXEyB/QkGlElIk5QHOBwGmCdQjpmOkjmBQG7B3HRE1QiBmfkbndQJTFAFQFtQiGoWjaoXQIzHzHhILQk0BThMAaIm1CsIm8C8IroMCQkgjAkAkcg");
	this.shape_347.setTransform(-53,-109.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(1.5,1,1).p("Az8KQQFpBUEwCBQkElElLk4QHQBuGkCeQjmmOkmmAQG9B0HQE2QiAmfkdncQJUE/FQFuQiEoWjdoWQI3HxHdIMQkzBThMAaQixBGkFBlIm7C8IrpMCQkfjBkBkZg");
	this.shape_348.setTransform(-53.1,-109.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFCC00").s().p("Az8KQQFoBUExCBQkElElLk4QHPBuGlCeQjnmOklmAQG8B0HRE2QiAmfkdncQJUE/FQFuQiEoWjeoWQI4HxHdIMQk0BThLAaIm2CrIm7C8IrpMCQkfjBkBkZg");
	this.shape_349.setTransform(-53.1,-109.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(1.5,1,1).p("Az8KQQFrBSEuCCQkClDlOk3QHSBrGjCfQjlmNkomAQG/BzHPE3Qh+mhkhnZQJXE8FPFvQiBoVjhoWQI6HwHbIMQkzBThMAaQixBGkFBmIm7C8IrpMCQkejDkCkXg");
	this.shape_350.setTransform(-53.1,-109.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFCC00").s().p("Az8KQQFrBSEuCCQkClDlOk3QHSBrGjCfQjlmNkomAQG/BzHPE3Qh+mhkhnZQJXE8FPFvQiBoVjhoWQI6HwHbIMQkzBThMAaIm2CsIm7C8IrpMCQkejDkCkXg");
	this.shape_351.setTransform(-53.1,-109.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(1.5,1,1).p("Az9KRQFuBQEtCDQkAlDlSk2QHUBpGjCgQjjmNkrl/QHABxHOE4Qh9mikinXQJXE6FPFwQh+oVjloWQI/HvHYINQk0BThMAaQixBGkEBmIm7C8IrpMCQkejEkEkVg");
	this.shape_352.setTransform(-53.2,-109.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFCC00").s().p("Az9KQQFuBREtCDQkAlElSk2QHUBqGjCgQjjmNkrl/QHABxHOE3Qh9mhkinXQJXE6FPFwQh+oVjloVQI/HuHYINQk0BThMAaIm1CrIm7C8IrpMDQkejFkEkVg");
	this.shape_353.setTransform(-53.2,-109.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(1.5,1,1).p("Az9KRQFwBOErCFQj9lElWk0QHXBmGhCiQjhmNktl+QHBBuHOE5Qh8miklnVQJZE3FPFyQh8oVjpoVQJDHsHVIPQkzBShMAbQixBGkFBlIm7C8IrpMCQkejFkEkTg");
	this.shape_354.setTransform(-53.2,-109.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFCC00").s().p("Az9KRQFwBNErCFQj9lDlWk1QHXBnGhChQjhmMktl+QHBBuHOE5Qh8mjklnVQJZE5FPFxQh8oVjpoVQJDHsHVIPQkzBThMAaIm2CrIm7C8IrpMCQkejFkEkTg");
	this.shape_355.setTransform(-53.2,-109.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(1.5,1,1).p("Az+KRQFzBMEpCGQj7lDlZk0QHZBkGgCjQjfmNkwl8QHDBrHNE6Qh6mjkonTQJbE2FOFyQh4oUjuoVQJHHrHTIPQk0BThMAbQixBFkEBlIm7C8IrqMDQkejHkFkRg");
	this.shape_356.setTransform(-53.2,-109.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFCC00").s().p("Az9KRQFyBMEpCGQj7lDlYk0QHZBkGgCjQjgmNkwl8QHDBsHNE5Qh6mjkonTQJbE2FOFyQh5oUjtoVQJHHrHTIPQk0BThMAbIm1CqIm8C8IroMDQkfjHkEkRg");
	this.shape_357.setTransform(-53.2,-109.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(1.5,1,1).p("Az+KSQF1BJEoCIQj5lDlckzQHbBhGfCkQjdmNk0l7QHFBqHME7Qh5mlkqnRQJcE0FPFzQh3oTjxoUQJLHpHQIPQkzBThMAbQixBFkFBmIm7C8IrpMCQkdjIkHkOg");
	this.shape_358.setTransform(-53.3,-109.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFCC00").s().p("Az+KRQF1BKEoCHQj5lClckzQHbBhGfCkQjdmNk0l7QHGBqHME7Qh5mkkrnSQJdE0FOF0Qh2oUjxoUQJKHpHQIQQk0BThLAbIm2CqIm7C8IrpMCQkejIkGkPg");
	this.shape_359.setTransform(-53.3,-109.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(1.5,1,1).p("Az+KSQF4BIElCIQj3lClfkyQHdBfGeClQjbmMk2l7QHGBoHME8Qh4mmktnPQJeEyFOF0QhzoTj2oUQJPHpHNIPQkzBThMAbQixBFkFBmIm7C8IrpMCQkdjJkHkNg");
	this.shape_360.setTransform(-53.3,-109.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFCC00").s().p("Az+KSQF4BIElCIQj3lDlfkxQHdBfGeClQjbmMk2l6QHGBnHME7Qh4mlktnPQJeEyFOF0QhzoTj2oUQJPHoHNIQQkzBThMAbIm2CqIm7C8IrpMDQkdjKkHkMg");
	this.shape_361.setTransform(-53.3,-109.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(1.5,1,1).p("Az/KSQF7BGEkCKQj1lDljkwQHgBcGdCnQjamNk5l4QHIBlHLE8Qh2mnkwnMQJgEvFNF2QhwoTj6oTQJUHmHKIQQk0BThMAbQixBGkEBlIm7C8IrpMCQkejKkIkLg");
	this.shape_362.setTransform(-53.4,-109.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFCC00").s().p("Az/KSQF7BFEkCKQj1lCljkwQHgBbGdCnQjamMk5l5QHIBmHLE8Qh2mnkwnMQJgEvFNF2QhwoTj6oTQJUHmHKIRQk0BThMAbIm1CqIm7C8IrpMCQkejKkIkLg");
	this.shape_363.setTransform(-53.4,-109.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(1.5,1,1).p("Az/KTQF9BDEiCLQjylClmkvQHhBZGcCoQjXmMk8l4QHKBjHKE+Qh1mokznLQJhEuFOF2QhuoSj9oTQJXHlHHIRQkzBThMAbQixBFkFBmIm7C8IrpMCQkdjMkJkIg");
	this.shape_364.setTransform(-53.4,-109.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFCC00").s().p("Az/KTQF9BDEiCLQjylDlmkvQHhBaGcCoQjXmNk8l3QHKBjHKE9Qh1mnkznLQJhEuFOF2QhuoSj9oSQJXHkHHIRQkzBThMAbIm2CqIm7C8IrpMDQkdjNkJkHg");
	this.shape_365.setTransform(-53.4,-109.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(1.5,1,1).p("A0AKTQGABBEgCMQjwlClpkuQHkBXGaCpQjVmMk/l2QHMBgHJE/Qh0mpk1nIQJjErFNF3QhqoRkCoSQJbHjHFIRQk0BThMAbQixBFkEBmIm7C8IrqMCQkdjNkKkGg");
	this.shape_366.setTransform(-53.4,-109.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFCC00").s().p("A0AKSQGABCEgCMQjwlClpkuQHkBXGbCpQjWmMk/l2QHMBhHJE+Qh0mpk1nIQJjErFNF4QhqoSkCoSQJbHjHFISQk0BThMAbIm1CqIm8C8IroMCQkejNkKkHg");
	this.shape_367.setTransform(-53.4,-109.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(1.5,1,1).p("A0AKTQGDA/EeCOQjvlClsktQHmBUGaCrQjUmMlCl2QHOBfHIE/Qhympk4nHQJlEpFNF5QhooRkGoSQJfHiHCISQkzBThMAbQixBFkFBmIm7C8IrpMCQkdjPkLkEg");
	this.shape_368.setTransform(-53.5,-109);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFCC00").s().p("A0AKTQGDA/EeCOQjvlClrktQHlBUGaCrQjTmMlCl2QHNBfHJE/Qhzmqk4nFQJlEpFNF4QhooRkGoRQJfHhHCISQk0BThLAbIm2CqIm7C8IrpMDQkdjPkLkEg");
	this.shape_369.setTransform(-53.5,-109);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(1.5,1,1).p("A0AKUQGEA8EdCQQjslClwksQHpBSGYCsQjRmMlFl0QHPBcHIFAQhymrk5nDQJlEmFNF6QhloRkKoRQJjHgG/ITQkzBThMAbQixBFkEBlIm7C8IrqMCQkcjQkMkBg");
	this.shape_370.setTransform(-53.5,-109);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFCC00").s().p("A0BKUQGGA8EcCQQjrlClwksQHoBSGZCsQjSmMlFl0QHPBcHIFAQhxmrk6nDQJmEmFMF6QhloRkKoRQJkHgG/ITQk0BThMAbIm1CqIm8C8IroMCQkdjQkNkBg");
	this.shape_371.setTransform(-53.5,-109);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(1.5,1,1).p("A0BKUQGIA7EbCQQjqlBlzkrQHqBPGYCtQjQmMlHlzQHQBaHHFCQhwmsk8nCQJnElFMF6QhioQkOoRQJnHfG9ITQk0BThMAbQixBFkEBmIm7C8IrpMCQkdjSkNj/g");
	this.shape_372.setTransform(-53.6,-109);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFCC00").s().p("A0BKUQGIA7EbCQQjqlBlzkrQHqBPGYCtQjQmMlHlzQHQBaHHFCQhwmsk8nCQJnElFMF6QhioQkOoRQJnHfG9ITQk0BThMAbIm1CrIm7C8IrpMCQkdjSkNj/g");
	this.shape_373.setTransform(-53.6,-109);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(1.5,1,1).p("A0BKUQGKA5EZCSQjnlCl3kqQHtBNGWCvQjOmMlKlyQHSBYHHFCQhvmtk/m/QJpEiFMF8QhgoQkSoQQJsHdG5IUQkzBThMAbQixBFkFBlIm7C8IrpMCQkcjSkOj+g");
	this.shape_374.setTransform(-53.6,-108.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFCC00").s().p("A0BKUQGKA5EZCSQjnlCl3kqQHtBNGWCvQjOmMlKlyQHSBYHHFCQhvmtk/m/QJpEiFMF8QhgoQkSoQQJsHdG5IUQkzBThMAbIm2CqIm7C8IrpMCQkcjSkOj+g");
	this.shape_375.setTransform(-53.6,-108.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(1.5,1,1).p("A0CKUQGMA3EZCTQjmlBl6kpQHvBLGWCvQjNmLlMlxQHTBVHGFEQhtmulCm+QJqEhFMF8QhcoPkWoQQJvHcG3IUQk0BThMAbQixBFkEBmIm7C8IrqMCQkcjUkPj8g");
	this.shape_376.setTransform(-53.6,-108.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFCC00").s().p("A0BKUQGLA3EYCTQjllBl5kpQHuBLGWCvQjNmLlMlxQHTBVHGFEQhtmulCm+QJqEhFMF8QhdoPkVoQQJvHcG3IUQk0BThMAbIm1CrIm8C8IroMCQkcjUkPj8g");
	this.shape_377.setTransform(-53.6,-108.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(1.5,1,1).p("A0CKVQGPA0EWCVQjklBl9koQHyBIGUCxQjKmMlQlvQHWBTHFFEQhtmvlEm7QJsEeFMF+QhaoPkaoPQJzHaG0IVQkzBThMAbQixBFkFBlIm7C8IrpMCQkcjVkQj5g");
	this.shape_378.setTransform(-53.7,-108.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFCC00").s().p("A0CKVQGPA0EWCVQjklBl8koQHxBIGUCxQjKmMlQlvQHWBTHFFEQhtmvlDm7QJrEeFMF+QhboPkaoPQJ0HaG0IVQk0BThLAbIm2CqIm7C8IrpMCQkcjVkQj5g");
	this.shape_379.setTransform(-53.7,-108.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(1.5,1,1).p("A0DKVQGSAyEUCWQjhlBmAkmQHzBFGTCyQjImLlTlvQHXBRHFFGQhrmwlHm5QJuEcFLF+QhXoOkeoPQJ4HZGxIVQk0BThMAbQixBFkEBmIm7C8IrqMCQkbjXkSj3g");
	this.shape_380.setTransform(-53.7,-108.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFCC00").s().p("A0CKVQGRAyEUCWQjhlBmAkmQH0BFGTCyQjImLlTlvQHWBRHFFGQhrmwlHm5QJtEcFMF+QhXoOkeoPQJ4HZGxIVQk0BThMAbIm1CrIm8C8IroMCQkcjXkRj3g");
	this.shape_381.setTransform(-53.7,-108.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(1.5,1,1).p("A0DKVQGUAwETCYQjflBmEklQH2BCGSC0QjHmLlVluQHZBPHDFGQhpmxlKm3QJvEaFLGAQhUoOkioOQJ7HXGvIWQk0BThMAbQixBFkEBlIm7C8IrpMCQkcjYkSj1g");
	this.shape_382.setTransform(-53.8,-108.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFCC00").s().p("A0DKVQGUAwETCYQjflBmEklQH2BCGSC0QjHmLlVluQHZBPHDFGQhpmxlKm3QJvEaFLGAQhUoOkioOQJ7HXGvIWQk0BThMAbIm1CqIm7C8IrpMCQkcjYkSj1g");
	this.shape_383.setTransform(-53.8,-108.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(1.5,1,1).p("A0DKWQGXAuEQCYQjdlAmGklQH4BAGQC1QjEmLlZlsQHbBMHDFIQhpmylLm1QJwEYFLGAQhSoNkmoOQKAHWGrIWQkzBThMAbQixBFkFBmIm7C8IrpMCQkbjakTjyg");
	this.shape_384.setTransform(-53.8,-108.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFCC00").s().p("A0DKWQGXAuEQCYQjdlAmGklQH4BAGQC1QjEmLlZlsQHbBMHDFIQhpmylLm1QJwEYFLGAQhSoNkmoOQKAHWGrIWQkzBThMAbIm2CrIm7C8IrpMCQkbjakTjyg");
	this.shape_385.setTransform(-53.8,-108.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(1.5,1,1).p("A0EKWQGZAsEQCaQjblBmKkjQH6A+GQC2QjDmLlblrQHcBKHCFIQhnmzlOmyQJyEVFKGCQhOoNkroNQKEHUGpIXQk0BThMAbQixBFkEBlIm7C8IrqMCQkajbkVjwg");
	this.shape_386.setTransform(-53.8,-108.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFCC00").s().p("A0EKWQGaAsEOCaQjalBmKkjQH6A+GQC2QjDmLlclrQHdBKHCFIQhnmzlOmyQJxEVFLGCQhOoNkroNQKEHUGpIXQk0BThMAbIm1CqIm8C8IroMCQkbjbkVjwg");
	this.shape_387.setTransform(-53.8,-108.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(1.5,1,1).p("A0EKWQGcAqENCbQjYlAmOkiQH9A7GOC3QjAmKlflrQHeBIHCFKQhmm0lRmxQJ0EUFKGCQhMoMkuoNQKHHTGmIXQkzBThMAbQixBFkFBmIm7C8IrpMCQkbjckVjvg");
	this.shape_388.setTransform(-53.9,-108.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFCC00").s().p("A0EKWQGcAqENCbQjZlAmNkiQH8A7GPC3QjBmKlelrQHeBIHCFKQhnm0lQmxQJzEUFLGCQhNoMktoNQKHHTGmIXQk0BThLAbIm2CrIm7C8IrpMCQkbjckVjvg");
	this.shape_389.setTransform(-53.9,-108.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(1.5,1,1).p("A0FKXQGfAoELCcQjVlAmSkhQH/A4GNC5Qi+mLlhlpQHfBGHBFKQhkm1lUmuQJ1ERFKGEQhJoMkyoNQKMHSGjIYQk0BThMAbQixBFkEBmIm7C8IrqMCQkajekXjsg");
	this.shape_390.setTransform(-53.9,-108.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFCC00").s().p("A0FKXQGfAnELCdQjWlAmQkhQH+A5GOC4Qi/mKlhlpQHfBFHBFKQhlm1lTmuQJ1ESFKGDQhJoMkyoMQKLHRGkIYQk0BThMAbIm1CqIm8C8IroMDQkbjekXjsg");
	this.shape_391.setTransform(-53.9,-108.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(1.5,1,1).p("A0FKXQGhAmEKCeQjUlAmUkhQIAA3GNC6Qi9mLlkloQHhBDHAFMQhjm2lWmtQJ2EQFKGEQhGoLk2oMQKPHPGhIZQk0BThMAbQixBFkEBmIm7C8IrpMCQkbjfkXjqg");
	this.shape_392.setTransform(-54,-108.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFCC00").s().p("A0FKXQGhAmEKCdQjUk/mUkgQIAA2GNC5Qi9mKlkloQHhBEHAFLQhjm2lWmsQJ2EPFKGFQhGoMk2oMQKPHPGhIaQk0BThMAbIm1CqIm7C8IrpMCQkbjfkXjqg");
	this.shape_393.setTransform(-54,-108.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(1.5,1,1).p("A0FKYQGjAjEICfQjSlAmXkeQIDAzGLC7Qi7mLlmlmQHiBBHAFNQhim4lZmpQJ4ENFKGFQhEoLk6oMQKUHPGdIZQkzBThMAbQixBFkFBmIm7C8IrpMCQkajhkYjng");
	this.shape_394.setTransform(-54,-108.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFCC00").s().p("A0FKXQGjAkEICfQjSlAmXkfQIDA0GLC7Qi7mLlmlmQHiBBHAFMQhim2lZmrQJ4ENFKGGQhEoLk6oMQKUHOGdIaQkzBThMAbIm2CqIm7C8IrpMDQkajhkYjog");
	this.shape_395.setTransform(-54,-108.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_252},{t:this.shape_251}]}).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_316},{t:this.shape_315}]},1).to({state:[{t:this.shape_318},{t:this.shape_317}]},1).to({state:[{t:this.shape_320},{t:this.shape_319}]},1).to({state:[{t:this.shape_322},{t:this.shape_321}]},1).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[{t:this.shape_326},{t:this.shape_325}]},1).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[{t:this.shape_328},{t:this.shape_327}]},1).to({state:[{t:this.shape_329},{t:this.shape_319}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_381},{t:this.shape_380}]},1).to({state:[{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_391},{t:this.shape_390}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_395},{t:this.shape_394}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[]},1).wait(1));

	// finBottom01b
	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(1.5,1,1).p("Ar1ltQDuAfEGCVQBBAmBDAsQFNDeImDEQoDBSj1gwQg8gMg3gHQjggciIA0IiPlcQiNlfAEgUg");
	this.shape_396.setTransform(101.9,103.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFCC00").s().p("AgCFdQg8gMg3gHQjggciIA0IiPlcQiNlfAEgUQDuAfEGCVQBBAmBDAsQFNDeImDEQlEAzjZAAQiBAAhagRg");
	this.shape_397.setTransform(101.9,103.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(1.5,1,1).p("AryluQDuAfEGCWQBBAlBLAvQFJDZIdDQQn/BHjyguQhAgMg5gIQjcgciIA0IiPlbQiNlgAEgUg");
	this.shape_398.setTransform(101.6,103.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFCC00").s().p("AADFdQhAgMg5gIQjcgciIA0IiPlbQiNlgAEgUQDuAfEGCWQBBAlBLAvQFJDZIdDQQk1ArjTAAQiJAAhggSg");
	this.shape_399.setTransform(101.6,103.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(1.5,1,1).p("ArwlvQDuAfEHCWQBBAlBSAxQFGDVITDcQn6A8jvgtQhEgMg8gIQjYgciHA0IiPlbQiNlgADgUg");
	this.shape_400.setTransform(101.3,103.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFCC00").s().p("AAIFcQhEgMg8gIQjYgciHA0IiPlbQiNlgADgUQDuAfEHCWICTBWQFGDVITDcQkhAjjKAAQiXAAhngUg");
	this.shape_401.setTransform(101.3,103.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(1.5,1,1).p("ArtlvQDuAfEHCVQBBAmBZAzQFDDRIJDnQn1AyjsgsQhIgNg+gIQjUgbiHA0IiPlcQiNlfADgUg");
	this.shape_402.setTransform(101,103.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFCC00").s().p("AANFcQhIgNg+gIQjUgbiHA0IiPlcQiNlfADgUQDuAfEHCVICaBZQFDDRIJDnQkKAajAAAQioAAhvgUg");
	this.shape_403.setTransform(101,103.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(1.5,1,1).p("ArqlwQDuAfEHCVQBBAmBgA2QFADLH/DzQnvAojpgrQhMgNhBgJQjQgaiHA0IiPlcQiNlfADgUg");
	this.shape_404.setTransform(100.7,103.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFCC00").s().p("AATFbQhMgNhBgJQjQgaiHA0IiPlcQiNlfADgUQDuAfEHCVIChBcQFADLH/DzQjtATixAAQjBAAh5gWg");
	this.shape_405.setTransform(100.7,103.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(1.5,1,1).p("ArnlyQDuAfEGCWQBBAlBoA5QE9DHH1D+QnrAejlgqQhRgOhDgJQjLgaiIA0IiPlbQiNlgAEgUg");
	this.shape_406.setTransform(100.5,103.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFCC00").s().p("AAYFaQhRgOhDgJQjLgaiIA0IiPlbQiNlgAEgUQDuAfEGCWQBBAlBoA5QE9DHH1D+QjKANieAAQjhAAiHgZg");
	this.shape_407.setTransform(100.5,103.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(1.5,1,1).p("ArklzQDuAfEGCVQBBAmBwA7QE5DCHsEKQnmATjjgpQhUgNhGgKQjHgZiIA0IiPlcQiNlfAEgUg");
	this.shape_408.setTransform(100.2,103.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFCC00").s().p("AAdFYQhUgNhGgKQjHgZiIA0IiPlcQiNlfAEgUQDuAfEGCVQBBAmBwA7QE5DCHsEKQiaAGiAAAQkUAAibgcg");
	this.shape_409.setTransform(100.2,103.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(1.5,1,1).p("Arhl2QDuAfEGCWQBBAlB3A+QE2C+HiEWQnhAIjfgoQhZgOhIgJQjDgaiIA0IiPlaQiNlhAEgUg");
	this.shape_410.setTransform(99.9,104.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFCC00").s().p("AAjFWQhZgOhIgJQjDgaiIA0IiPlaQiNlhAEgUQDuAfEGCWQBBAlB3A+QE2C+HiEWIibABQlsAAi5ghg");
	this.shape_411.setTransform(99.9,104.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(1.5,1,1).p("Arfl6QDuAfEHCWQBBAlB+BBQEzC5HYEhQncgCjcgnQhdgOhLgKQi/gZiHA0IiPlaQiNlhADgUg");
	this.shape_412.setTransform(99.6,104.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFCC00").s().p("AAoFSIiogYQi/gZiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmB+BAQEzC5HYEiQncgCjcgng");
	this.shape_413.setTransform(99.6,104.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(1.5,1,1).p("Arcl/QDuAfEHCWQBBAlCGBDQEvC1HOEtQnXgNjZglQhhgPhNgKQi7gZiHA0IiPlaQiNlhADgUg");
	this.shape_414.setTransform(99.3,105);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFCC00").s().p("AAtFOIiugZQi7gZiHA0IiPlaQiNlhADgUQDuAfEHCWQBBAlCGBDQEvC1HOEtQnXgNjZglg");
	this.shape_415.setTransform(99.3,105);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(1.5,1,1).p("ArZmDQDuAeEGCWQBBAmCNBFQEtCvHEE5QnTgWjVglQhlgPhQgLQi2gYiIA1IiPlbQiNlgAEgUg");
	this.shape_416.setTransform(99.1,105.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFCC00").s().p("AAyFJIi1gaQi2gXiIA0IiPlbQiNlhAEgTQDuAeEGCWQBBAmCNBFQEtCwHEE5QnTgYjVgkg");
	this.shape_417.setTransform(99.1,105.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(1.5,1,1).p("ArWmIQDuAfEGCVQBBAmCVBIQEpCrG6FEQnNghjSgjQhqgPhSgMQiygXiIA0IiPlbQiNlgAEgUg");
	this.shape_418.setTransform(98.8,106);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFCC00").s().p("AA4FFIi8gbQiygXiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmCVBIQEpCrG6FEQnNghjSgjg");
	this.shape_419.setTransform(98.8,106);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(1.5,1,1).p("ArTmNQDuAfEGCVQBBAmCcBLQEmCmGxFQQnJgsjPgiQhtgPhVgMQiugXiIA0IiPlaQiNlhAEgUg");
	this.shape_420.setTransform(98.5,106.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFCC00").s().p("AA9FAIjCgbQiugXiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmCcBLQEmCmGxFQQnJgsjPgig");
	this.shape_421.setTransform(98.5,106.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(1.5,1,1).p("ArRmSQDuAfEHCWQBBAlCiBNQEkCiGnFcQnEg2jMghQhxgQhYgMQiqgXiHA0IiPlaQiNlhADgUg");
	this.shape_422.setTransform(98.2,106.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFCC00").s().p("ABCE8IjJgcQiqgXiHA0IiPlaQiNlhADgUQDuAfEHCWQBBAlCiBNQEkCiGnFcQnEg2jMghg");
	this.shape_423.setTransform(98.2,106.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(1.5,1,1).p("ArOmXQDuAfEHCWQBBAlCqBQQEgCdGdFoQm/hBjIggQh2gQhagMQimgXiHA1IiPlbQiNlhADgUg");
	this.shape_424.setTransform(97.9,107.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFCC00").s().p("ABIE3IjQgdQimgViHA0IiPlbQiNlhADgTQDuAeEHCWQBBAlCqBQQEgCeGdFmQm/hAjIggg");
	this.shape_425.setTransform(97.9,107.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(1.5,1,1).p("ArLmbQDuAfEHCVQBBAmCxBSQEdCZGTFyQm6hLjFgeQh6gRhdgNQihgViHA0IiPlbQiNlgADgUg");
	this.shape_426.setTransform(97.6,107.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFCC00").s().p("ABNEzIjXgeQihgViHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmCxBSQEdCZGTFyQm6hLjFgeg");
	this.shape_427.setTransform(97.6,107.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(1.5,1,1).p("ArImgQDuAfEGCVQBBAmC5BUQEaCUGJF/Qm1hWjCgdQh+gQhfgOQidgViIA0IiPlbQiNlgAEgUg");
	this.shape_428.setTransform(97.4,108.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFCC00").s().p("ABSEuIjdgeQidgViIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmC5BVQEaCUGJF+Qm1hVjCgeg");
	this.shape_429.setTransform(97.4,108.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(1.5,1,1).p("ArFmlQDuAfEGCWQBBAlDABXQEXCQGAGKQmxhgi+gcQiCgRhigOQiZgViIA0IiPlaQiNlhAEgUg");
	this.shape_430.setTransform(97.1,108.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFCC00").s().p("ABYEqIjkgfQiZgViIA0IiPlaQiNlhAEgUQDuAfEGCWQBBAlDABXQEXCQGAGKQmxhgi+gcg");
	this.shape_431.setTransform(97.1,108.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(1.5,1,1).p("ArDmpQDuAeEHCWQBBAmDHBZQETCLF3GVQmshpi7gcQiHgRhkgPQiVgUiHA1IiPlbQiNlgADgUg");
	this.shape_432.setTransform(96.8,109.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFCC00").s().p("ABdElQiHgRhkgPQiVgTiHA0IiPlbQiNlhADgTQDuAeEHCWQBBAmDHBZQETCLF3GVQmshqi7gbg");
	this.shape_433.setTransform(96.8,109.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(1.5,1,1).p("ArAmuQDuAeEHCWQBBAmDPBcQEQCGFsGhQmnh0i4gaQiKgShngPQiRgUiHA1IiPlbQiNlgADgUg");
	this.shape_434.setTransform(96.5,109.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFCC00").s().p("ABiEhQiKgShngPQiRgTiHA0IiPlbQiNlhADgTQDuAeEHCWQBBAmDPBcQEQCGFsGhQmnh1i4gZg");
	this.shape_435.setTransform(96.5,109.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(1.5,1,1).p("Aq9mzQDuAfEHCVQBBAmDWBfQENCBFiGtQmih/i0gZQiPgShqgPQiMgTiHA0IiPlbQiNlgADgUg");
	this.shape_436.setTransform(96.2,110.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFCC00").s().p("ABoEcQiPgShqgPQiMgTiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmDWBfQENCBFiGtQmih/i0gZg");
	this.shape_437.setTransform(96.2,110.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(1.5,1,1).p("Aq6m4QDuAfEGCVQBBAmDeBiQEKB8FYG5QmdiKixgYQiTgShsgPQiIgTiIA0IiPlaQiNlhAEgUg");
	this.shape_438.setTransform(96,110.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFCC00").s().p("ABtEXQiTgShsgPQiIgTiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmDeBhQEKB9FYG5QmdiKixgYg");
	this.shape_439.setTransform(96,110.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(1.5,1,1).p("Aq3m9QDuAfEGCWQBBAlDlBkQEHB5FPHEQmZiViugWQiXgThvgPQiDgTiIA0IiPlaQiNlhAEgUg");
	this.shape_440.setTransform(95.7,111.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFCC00").s().p("AByETQiXgThvgPQiDgTiIA0IiPlaQiNlhAEgUQDuAfEGCWQBBAlDlBkQEHB5FPHEQmZiViugWg");
	this.shape_441.setTransform(95.7,111.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(1.5,1,1).p("Aq0nCQDuAfEGCWQBBAlDtBnQEDB0FFHQQmUifiqgVQibgUhygQQh/gSiIA1IiPlbQiNlhAEgUg");
	this.shape_442.setTransform(95.4,111.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFCC00").s().p("AB4EPQibgUhygPQh/gTiIA1IiPlbQiNlhAEgTQDuAeEGCWQBBAlDtBnQEDB0FFHQQmUifiqgVg");
	this.shape_443.setTransform(95.4,111.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(1.5,1,1).p("AqynGQDuAfEHCVQBBAmD0BpQEABwE7HaQmPipingUQiggTh0gRQh7gRiHA0IiPlbQiNlgADgUg");
	this.shape_444.setTransform(95.1,112.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFCC00").s().p("AB9EKQiggTh0gRQh7gRiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmD0BpQEABwE7HaQmPipingUg");
	this.shape_445.setTransform(95.1,112.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(1.5,1,1).p("AqvnLQDuAfEHCVQBBAmD7BrQD8BsEyHmQmKizikgUQijgTh3gRQh3gRiHA0IiPlbQiNlgADgUg");
	this.shape_446.setTransform(94.8,112.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFCC00").s().p("ACCEFQijgTh3gRQh3gRiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmD7BrQD8BsEyHmQmKizikgUg");
	this.shape_447.setTransform(94.8,112.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(1.5,1,1).p("AqwnJQDuAfEGCWQBBAlD4BqQD+BuE3HhQmNivimgTQihgUh1gQQh5gSiIA1IiPlbQiNlhAEgUg");
	this.shape_448.setTransform(95,112.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFCC00").s().p("AB/EIQihgTh1gRQh5gSiIA1IiPlbQiNlhAEgTQDuAeEGCWQBBAmD4BqQD+BuE3HfQmNitimgUg");
	this.shape_449.setTransform(95,112.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(1.5,1,1).p("AqznEQDuAfEGCWQBBAlDxBoQEBByFAHVQmRikipgVQidgThzgQQh9gSiIA0IiPlaQiNlhAEgUg");
	this.shape_450.setTransform(95.3,111.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFCC00").s().p("AB6EMQidgThzgQQh9gSiIA0IiPlaQiNlhAEgUQDuAfEGCWQBBAlDxBoQEBByFAHVQmRikipgVg");
	this.shape_451.setTransform(95.3,111.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(1.5,1,1).p("Aq2m/QDuAfEHCVQBBAmDpBlQEEB3FKHJQmWiZisgWQiZgThwgQQiCgSiHA0IiPlaQiNlhADgUg");
	this.shape_452.setTransform(95.5,111.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFCC00").s().p("AB1ERQiZgThwgQQiCgSiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmDpBlQEEB3FKHJQmWiZisgWg");
	this.shape_453.setTransform(95.5,111.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(1.5,1,1).p("Aq5m6QDuAfEHCVQBBAmDhBiQEIB8FUG9QmbiPivgXQiVgShugQQiGgSiHA0IiPlbQiNlgADgUg");
	this.shape_454.setTransform(95.8,111);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFCC00").s().p("ABwEVQiVgShugQQiGgSiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmDhBiQEIB8FUG9QmbiPivgXg");
	this.shape_455.setTransform(95.8,111);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(1.5,1,1).p("Aq8m1QDuAeEHCWQBBAmDaBfQELCAFeGyQmgiEizgYQiRgShrgQQiKgTiHA1IiPlbQiNlgADgUg");
	this.shape_456.setTransform(96.1,110.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFCC00").s().p("ABqEaQiRgShrgPQiKgUiHA1IiPlbQiNlhADgTQDuAeEHCWQBBAlDaBgQELCAFeGyQmgiEizgYg");
	this.shape_457.setTransform(96.1,110.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(1.5,1,1).p("Aq+mxQDuAfEGCWQBBAlDTBeQEOCEFoGnQmlh6i2gaQiNgRhogPQiOgUiIA0IiPlaQiNlhAEgUg");
	this.shape_458.setTransform(96.4,110);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFCC00").s().p("ABlEeQiNgRhogPQiOgUiIA0IiPlaQiNlhAEgUQDuAfEGCWQBBAlDTBeQEOCEFoGnQmlh6i2gag");
	this.shape_459.setTransform(96.4,110);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(1.5,1,1).p("ArBmsQDuAfEGCWQBBAlDMBbQERCJFxGbQmphvi5gbQiJgRhmgPQiSgUiIA0IiPlaQiNlhAEgUg");
	this.shape_460.setTransform(96.7,109.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFCC00").s().p("ABgEjQiJgShmgOQiSgUiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmDMBbQERCIFxGcQmphvi5gbg");
	this.shape_461.setTransform(96.7,109.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(1.5,1,1).p("ArEmnQDuAfEHCVQBBAmDEBYQEUCNF7GQQmuhli9gcQiEgRhjgOQiXgUiHA0IiPlbQiNlgADgUg");
	this.shape_462.setTransform(96.9,109.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFCC00").s().p("ABaEnIjngfQiXgUiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmDEBYQEUCNF7GQQmuhli9gcg");
	this.shape_463.setTransform(96.9,109.1);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(1.5,1,1).p("ArHmjQDuAfEHCWQBBAlC8BWQEYCSGFGFQmzhcjAgcQiAgRhhgNQibgWiHA1IiPlbQiNlhADgUg");
	this.shape_464.setTransform(97.2,108.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFCC00").s().p("ABVEsIjhgfQibgUiHA0IiPlbQiNlhADgTQDuAeEHCWQBBAmC8BVQEYCSGFGFQmzhcjAgcg");
	this.shape_465.setTransform(97.2,108.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(1.5,1,1).p("ArKmeQDuAfEHCWQBBAlC1BUQEbCWGPF5Qm4hRjEgeQh7gQhfgNQifgWiHA0IiPlaQiNlhADgUg");
	this.shape_466.setTransform(97.5,108.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFCC00").s().p("ABPEwIjagdQifgWiHA0IiPlaQiNlhADgUQDuAfEHCWQBBAlC1BUQEbCWGPF5Qm4hRjEgeg");
	this.shape_467.setTransform(97.5,108.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(1.5,1,1).p("ArMmZQDuAfEGCVQBBAmCuBRQEeCbGZFtQm9hGjGgfQh4gQhcgNQijgWiIA0IiPlbQiNlgAEgUg");
	this.shape_468.setTransform(97.8,107.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFCC00").s().p("ABLE1IjUgdQijgWiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmCuBRQEeCbGZFtIqDhlg");
	this.shape_469.setTransform(97.8,107.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(1.5,1,1).p("ArPmUQDuAfEGCVQBBAmCmBOQEiCgGiFhQnBg7jKghQh0gQhZgMQingWiIA0IiPlbQiNlgAEgUg");
	this.shape_470.setTransform(98.1,107.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFCC00").s().p("ABFE5IjNgcQingWiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmCmBOQEiCgGiFhQnBg7jKghg");
	this.shape_471.setTransform(98.1,107.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(1.5,1,1).p("ArSmQQDuAfEGCWQBBAlCfBMQElCkGsFXQnGgyjNghQhwgQhWgLQisgYiIA1IiPlbQiNlhAEgUg");
	this.shape_472.setTransform(98.4,106.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFCC00").s().p("ABAE+IjGgcQisgWiIA0IiPlbQiNlhAEgTQDuAeEGCWQBBAmCfBLQElCkGsFXQnGgyjNghg");
	this.shape_473.setTransform(98.4,106.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(1.5,1,1).p("ArVmLQDuAfEHCWQBBAlCYBJQEnCpG2FLQnLgnjQgjQhsgPhUgLQiwgYiHA1IiPlbQiNlhADgUg");
	this.shape_474.setTransform(98.6,106.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFCC00").s().p("AA7FCIjAgbQiwgWiHA0IiPlbQiNlhADgTQDuAeEHCWQBBAlCYBKQEnCoG2FKQnLgmjQgjg");
	this.shape_475.setTransform(98.6,106.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(1.5,1,1).p("ArYmGQDuAfEHCWQBBAlCRBHQEqCtHAE/QnQgcjUgkQhngPhSgLQi0gYiHA0IiPlaQiNlhADgUg");
	this.shape_476.setTransform(98.9,105.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFCC00").s().p("AA1FHIi5gaQi0gYiHA0IiPlaQiNlhADgUQDuAfEHCWQBBAlCRBHQEqCtHAE/QnQgcjUgkg");
	this.shape_477.setTransform(98.9,105.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(1.5,1,1).p("AramBQDuAfEGCWQBBAlCKBEQEtCyHKEzQnVgSjXgkQhjgPhPgLQi4gYiIA0IiPlaQiNlhAEgUg");
	this.shape_478.setTransform(99.2,105.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFCC00").s().p("AAwFMIiygaQi4gYiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmCKBEQEtCyHKEzQnVgRjXglg");
	this.shape_479.setTransform(99.2,105.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(1.5,1,1).p("Ardl8QDuAfEGCVQBBAmCCBBQExC3HTEnQnZgHjbgmQhegOhNgLQi8gYiIA0IiPlbQiNlgAEgUg");
	this.shape_480.setTransform(99.5,104.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFCC00").s().p("AAqFQIirgZQi8gYiIA0IiPlbQiNlgAEgUQDuAfEGCVQBBAmCCBBQExC3HTEnQnZgHjbgmg");
	this.shape_481.setTransform(99.5,104.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(1.5,1,1).p("Argl4QDuAfEGCWQBBAlB7A/QE0C8HdEbQnfADjdgnQhbgOhJgKQjBgZiIA0IiPlaQiNlhAEgUg");
	this.shape_482.setTransform(99.8,104.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFCC00").s().p("AAlFUIikgYQjBgZiIA0IiPlaQiNlhAEgUQDuAfEGCWQBBAlB7A/QE0C8HdEbIhDABQmrAAjOglg");
	this.shape_483.setTransform(99.8,104.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(1.5,1,1).p("Arjl0QDuAfEHCVQBBAmBzA8QE3DAHnEQQnjAOjhgpQhXgNhHgKQjFgZiHA0IiPlbQiNlgADgUg");
	this.shape_484.setTransform(100,104);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFCC00").s().p("AAgFXQhXgNhHgKQjFgZiHA0IiPlbQiNlgADgUQDuAfEHCVQBBAmBzA8QE3DAHnEQQh5ADhpAAQk6AAiogeg");
	this.shape_485.setTransform(100,104);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(1.5,1,1).p("ArmlyQDuAfEHCVQBBAmBsA6QE6DEHxEFQnpAYjjgqQhTgNhEgJQjKgaiHA0IiPlcQiNlfADgUg");
	this.shape_486.setTransform(100.3,103.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFCC00").s().p("AAbFZQhTgNhEgJQjKgaiHA0IiPlcQiNlfADgUQDuAfEHCVQBBAmBsA6QE6DEHxEFQizAIiQAAQj5AAiQgag");
	this.shape_487.setTransform(100.3,103.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(1.5,1,1).p("ArolxQDuAfEGCWQBBAlBlA4QE+DJH6D5QntAijogrQhOgNhCgIQjNgbiIA0IiPlbQiNlgAEgUg");
	this.shape_488.setTransform(100.6,103.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFCC00").s().p("AAVFaQhOgNhCgIQjNgbiIA0IiPlbQiNlgAEgUQDuAfEGCWQBBAlBlA4QE+DJH6D5QjcAPioAAQjRAAiAgYg");
	this.shape_489.setTransform(100.6,103.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(1.5,1,1).p("ArrlwQDuAfEGCWQBBAlBdA1QFBDOIFDtQnyAtjrgsQhKgMhAgJQjRgbiIA0IiPlbQiNlgAEgUg");
	this.shape_490.setTransform(100.9,103.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFCC00").s().p("AAQFbQhKgMhAgJQjRgbiIA0IiPlbQiNlgAEgUQDuAfEGCWICeBaQFBDOIFDtQj8AXi5AAQi0AAh0gWg");
	this.shape_491.setTransform(100.9,103.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(1.5,1,1).p("ArulvQDuAfEGCWQBBAlBWAzQFEDSIODiQn3A3jtgtQhGgMg9gIQjWgciIA0IiPlbQiNlgAEgUg");
	this.shape_492.setTransform(101.2,103.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFCC00").s().p("AALFcQhGgMg9gIQjWgciIA0IiPlbQiNlgAEgUQDuAfEGCWICXBYQFEDSIODiQkUAejFAAQigAAhrgUg");
	this.shape_493.setTransform(101.2,103.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(1.5,1,1).p("ArxluQDuAfEHCVQBBAmBOAwQFIDXIXDWQn7BBjyguQhBgMg7gHQjagciHA0IiPlcQiNlfADgUg");
	this.shape_494.setTransform(101.4,103.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFCC00").s().p("AAFFcQhBgMg7gHQjagciHA0IiPlcQiNlfADgUQDuAfEHCVQBBAmBOAwQFIDXIXDWQkqAmjOAAQiRAAhkgTg");
	this.shape_495.setTransform(101.4,103.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(1.5,1,1).p("Ar0luQDuAfEHCWQBBAlBGAuQFLDbIiDLQoBBMj0gwQg+gLg3gHQjfgdiHA0IiPlbQiNlgADgUg");
	this.shape_496.setTransform(101.7,103.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFCC00").s().p("AAAFcQg+gLg3gHQjfgdiHA0IiPlbQiNlgADgUQDuAfEHCWQBBAlBGAuQFLDbIiDLQk8AvjVAAQiGAAhegTg");
	this.shape_497.setTransform(101.7,103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_397},{t:this.shape_396}]}).to({state:[{t:this.shape_399},{t:this.shape_398}]},1).to({state:[{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_403},{t:this.shape_402}]},1).to({state:[{t:this.shape_405},{t:this.shape_404}]},1).to({state:[{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_409},{t:this.shape_408}]},1).to({state:[{t:this.shape_411},{t:this.shape_410}]},1).to({state:[{t:this.shape_413},{t:this.shape_412}]},1).to({state:[{t:this.shape_415},{t:this.shape_414}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_429},{t:this.shape_428}]},1).to({state:[{t:this.shape_431},{t:this.shape_430}]},1).to({state:[{t:this.shape_433},{t:this.shape_432}]},1).to({state:[{t:this.shape_435},{t:this.shape_434}]},1).to({state:[{t:this.shape_437},{t:this.shape_436}]},1).to({state:[{t:this.shape_439},{t:this.shape_438}]},1).to({state:[{t:this.shape_441},{t:this.shape_440}]},1).to({state:[{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_445},{t:this.shape_444}]},1).to({state:[{t:this.shape_447},{t:this.shape_446}]},1).to({state:[{t:this.shape_449},{t:this.shape_448}]},1).to({state:[{t:this.shape_445},{t:this.shape_444}]},1).to({state:[{t:this.shape_451},{t:this.shape_450}]},1).to({state:[{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_453},{t:this.shape_452}]},1).to({state:[{t:this.shape_441},{t:this.shape_440}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_439},{t:this.shape_438}]},1).to({state:[{t:this.shape_457},{t:this.shape_456}]},1).to({state:[{t:this.shape_437},{t:this.shape_436}]},1).to({state:[{t:this.shape_459},{t:this.shape_458}]},1).to({state:[{t:this.shape_435},{t:this.shape_434}]},1).to({state:[{t:this.shape_461},{t:this.shape_460}]},1).to({state:[{t:this.shape_433},{t:this.shape_432}]},1).to({state:[{t:this.shape_463},{t:this.shape_462}]},1).to({state:[{t:this.shape_431},{t:this.shape_430}]},1).to({state:[{t:this.shape_465},{t:this.shape_464}]},1).to({state:[{t:this.shape_429},{t:this.shape_428}]},1).to({state:[{t:this.shape_467},{t:this.shape_466}]},1).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_469},{t:this.shape_468}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_471},{t:this.shape_470}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_475},{t:this.shape_474}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_477},{t:this.shape_476}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_479},{t:this.shape_478}]},1).to({state:[{t:this.shape_415},{t:this.shape_414}]},1).to({state:[{t:this.shape_481},{t:this.shape_480}]},1).to({state:[{t:this.shape_413},{t:this.shape_412}]},1).to({state:[{t:this.shape_483},{t:this.shape_482}]},1).to({state:[{t:this.shape_411},{t:this.shape_410}]},1).to({state:[{t:this.shape_485},{t:this.shape_484}]},1).to({state:[{t:this.shape_409},{t:this.shape_408}]},1).to({state:[{t:this.shape_487},{t:this.shape_486}]},1).to({state:[{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_489},{t:this.shape_488}]},1).to({state:[{t:this.shape_405},{t:this.shape_404}]},1).to({state:[{t:this.shape_491},{t:this.shape_490}]},1).to({state:[{t:this.shape_403},{t:this.shape_402}]},1).to({state:[{t:this.shape_493},{t:this.shape_492}]},1).to({state:[{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_495},{t:this.shape_494}]},1).to({state:[{t:this.shape_399},{t:this.shape_398}]},1).to({state:[{t:this.shape_497},{t:this.shape_496}]},1).to({state:[{t:this.shape_397},{t:this.shape_396}]},1).to({state:[]},1).wait(1));

	// tail
	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(1.5,1,1).p("Aj2tqQC2KlFuDOQmkEAh2JiQh9uLBztKg");
	this.shape_498.setTransform(-183.5,13.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFCC02").s().p("Aj2tqQC2KlFuDOQmkEAh2JiQh9uLBztKg");
	this.shape_499.setTransform(-183.5,13.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(1.5,1,1).p("AjptqQCtKlFZDOQmNEAhvJiQh2uLBstKg");
	this.shape_500.setTransform(-181.7,13.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFCC02").s().p("AjptqQCtKlFZDOQmNEAhvJiQh2uLBstKg");
	this.shape_501.setTransform(-181.7,13.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(1.5,1,1).p("AjbtqQCjKlFFDOQl2EAhpJiQhvuKBmtLg");
	this.shape_502.setTransform(-179.8,13.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFCC02").s().p("AjbtqQCjKlFFDOQl2EAhpJiQhvuKBmtLg");
	this.shape_503.setTransform(-179.8,13.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(1.5,1,1).p("AjNtqQCYKlExDOQleEAhjJiQhouKBgtLg");
	this.shape_504.setTransform(-178,13.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFCC02").s().p("AjNtqQCYKlExDOQleEAhjJiQhouKBgtLg");
	this.shape_505.setTransform(-178,13.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(1.5,1,1).p("AjAtqQCPKlEdDOQlIEAhcJiQhhuJBZtMg");
	this.shape_506.setTransform(-176.1,13.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFCC02").s().p("AjAtqQCPKlEdDOQlIEAhcJiQhhuJBZtMg");
	this.shape_507.setTransform(-176.1,13.5);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(1.5,1,1).p("AiytqQCEKlEJDOQkxEAhVJiQhauJBTtMg");
	this.shape_508.setTransform(-174.2,13.5);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFCC02").s().p("AiytqQCEKlEJDOQkxEAhVJiQhauJBTtMg");
	this.shape_509.setTransform(-174.2,13.5);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(1.5,1,1).p("AiltqQB7KlD1DOQkaEAhPJiQhTuJBMtMg");
	this.shape_510.setTransform(-172.4,13.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFCC02").s().p("AiltqQB7KlD1DOQkaEAhPJiQhTuJBMtMg");
	this.shape_511.setTransform(-172.4,13.5);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(1.5,1,1).p("AiXtqQBwKlDhDOQkDEAhIJiQhNuIBHtNg");
	this.shape_512.setTransform(-170.5,13.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFCC02").s().p("AiXtqQBwKlDhDOQkDEAhIJiQhNuIBHtNg");
	this.shape_513.setTransform(-170.5,13.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").ss(1.5,1,1).p("AiKtqQBnKlDMDOQjrEAhCJiQhGuIBAtNg");
	this.shape_514.setTransform(-168.6,13.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFCC02").s().p("AiKtqQBnKlDMDOQjrEAhCJiQhGuIBAtNg");
	this.shape_515.setTransform(-168.6,13.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").ss(1.5,1,1).p("Ah8tqQBcKlC5DOQjVEAg7JiQg/uHA6tOg");
	this.shape_516.setTransform(-166.8,13.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFCC02").s().p("Ah8tqQBcKlC5DOQjVEAg7JiQg/uHA6tOg");
	this.shape_517.setTransform(-166.8,13.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(1.5,1,1).p("AhutqQBSKlCkDOQi9EAg1JiQg4uHA0tOg");
	this.shape_518.setTransform(-164.9,13.5);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFCC02").s().p("AhutqQBSKlCkDOQi9EAg1JiQg4uHA0tOg");
	this.shape_519.setTransform(-164.9,13.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").ss(1.5,1,1).p("AhhtqQBJKlCQDOQimEAgvJiQgxuGAttPg");
	this.shape_520.setTransform(-163.1,13.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFCC02").s().p("AhhtqQBJKlCQDOQimEAgvJiQgxuGAttPg");
	this.shape_521.setTransform(-163.1,13.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").ss(1.5,1,1).p("AhctqQBFKlCJDOQieEAgtJiQguuHArtOg");
	this.shape_522.setTransform(-162.3,13.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFCC02").s().p("AhctqQBFKlCJDOQieEAgtJiQguuHArtOg");
	this.shape_523.setTransform(-162.3,13.5);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").ss(1.5,1,1).p("AhYtqQBCKlCDDOQiXEAgqJiQgtuJAptMg");
	this.shape_524.setTransform(-161.5,13.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFCC02").s().p("AhYtqQBCKlCDDOQiXEAgqJiQgtuJAptMg");
	this.shape_525.setTransform(-161.5,13.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").ss(1.5,1,1).p("AhUtqQA/KlB8DOQiPEAgoJiQgruKAntLg");
	this.shape_526.setTransform(-160.7,13.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFCC02").s().p("AhUtqQA/KlB8DOQiPEAgoJiQgruKAntLg");
	this.shape_527.setTransform(-160.7,13.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").ss(1.5,1,1).p("AhPtqQA7KkB2DPQiIEAgmJiQgpuLAmtKg");
	this.shape_528.setTransform(-159.9,13.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFCC02").s().p("AhPtqQA7KkB2DPQiIEAgmJiQgpuLAmtKg");
	this.shape_529.setTransform(-159.9,13.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").ss(1.5,1,1).p("AhLtqQA4KkBwDPQiBEAgkJiQgmuMAjtJg");
	this.shape_530.setTransform(-159.1,13.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFCC02").s().p("AhLtqQA4KkBwDPQiBEAgkJiQgmuMAjtJg");
	this.shape_531.setTransform(-159.1,13.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").ss(1.5,1,1).p("AhGtqQA1KkBpDPQh5EAgiJiQgluNAitIg");
	this.shape_532.setTransform(-158.3,13.5);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFCC02").s().p("AhGtqQA1KkBpDPQh5EAgiJiQgluNAitIg");
	this.shape_533.setTransform(-158.3,13.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").ss(1.5,1,1).p("AhCtqQAyKkBiDPQhxEAggJiQgiuOAftHg");
	this.shape_534.setTransform(-157.5,13.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFCC02").s().p("AhCtqQAyKkBiDPQhxEAggJiQgiuOAftHg");
	this.shape_535.setTransform(-157.5,13.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").ss(1.5,1,1).p("AhGtqQA0KkBpDPQh5EAghJiQgkuNAhtIg");
	this.shape_536.setTransform(-158.3,13.5);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFCC02").s().p("AhGtqQA0KkBpDPQh5EAghJiQgkuNAhtIg");
	this.shape_537.setTransform(-158.3,13.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").ss(1.5,1,1).p("AhKtqQA3KkBuDPQh+EAgkJiQgmuMAjtJg");
	this.shape_538.setTransform(-159.2,13.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFCC02").s().p("AhKtqQA3KkBuDPQh+EAgkJiQgmuMAjtJg");
	this.shape_539.setTransform(-159.2,13.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").ss(1.5,1,1).p("AhOtqQA6KkB0DPQiFEAgmJiQgnuLAktKg");
	this.shape_540.setTransform(-160,13.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFCC02").s().p("AhOtqQA6KkB0DPQiFEAgmJiQgnuLAktKg");
	this.shape_541.setTransform(-160,13.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").ss(1.5,1,1).p("AhRtqQA9KlB5DOQiMEAgnJiQgquKAntLg");
	this.shape_542.setTransform(-160.9,13.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFCC02").s().p("AhRtqQA9KlB5DOQiMEAgnJiQgquKAntLg");
	this.shape_543.setTransform(-160.9,13.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").ss(1.5,1,1).p("AhVtqQBAKlB/DOQiTEAgpJiQgruJAotMg");
	this.shape_544.setTransform(-161.7,13.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFCC02").s().p("AhVtqQBAKlB/DOQiTEAgpJiQgruJAotMg");
	this.shape_545.setTransform(-161.7,13.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").ss(1.5,1,1).p("AhZtqQBDKlCEDOQiZEAgqJiQguuIAqtNg");
	this.shape_546.setTransform(-162.6,13.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFCC02").s().p("AhZtqQBDKlCEDOQiZEAgqJiQguuIAqtNg");
	this.shape_547.setTransform(-162.6,13.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").ss(1.5,1,1).p("AhdtqQBFKlCLDOQigEAgtJiQgvuHAstOg");
	this.shape_548.setTransform(-163.4,13.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFCC02").s().p("AhdtqQBFKlCLDOQigEAgtJiQgvuHAstOg");
	this.shape_549.setTransform(-163.4,13.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").ss(1.5,1,1).p("Ah0tqQBWKlCsDOQjGEAg3JiQg6uHA1tOg");
	this.shape_550.setTransform(-166.5,13.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFCC02").s().p("Ah0tqQBWKlCsDOQjGEAg3JiQg6uHA1tOg");
	this.shape_551.setTransform(-166.5,13.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").ss(1.5,1,1).p("AiGtqQBjKlDIDOQjmEAhAJiQhEuHA/tOg");
	this.shape_552.setTransform(-168.7,13.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFCC02").s().p("AiGtqQBjKlDIDOQjmEAhAJiQhEuHA/tOg");
	this.shape_553.setTransform(-168.7,13.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").ss(1.5,1,1).p("AiZtqQBxKlDkDOQkGEAhJJiQhNuHBHtOg");
	this.shape_554.setTransform(-171,13.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFCC02").s().p("AiZtqQBxKlDkDOQkGEAhJJiQhNuHBHtOg");
	this.shape_555.setTransform(-171,13.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").ss(1.5,1,1).p("AistqQCAKlD/DOQkmEAhSJiQhWuIBPtNg");
	this.shape_556.setTransform(-173.2,13.5);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFCC02").s().p("AistqQCAKlD/DOQkmEAhSJiQhWuIBPtNg");
	this.shape_557.setTransform(-173.2,13.5);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").ss(1.5,1,1).p("Ai+tqQCNKlEaDOQlFEAhbJiQhfuIBYtNg");
	this.shape_558.setTransform(-175.5,13.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFCC02").s().p("Ai+tqQCNKlEaDOQlFEAhbJiQhfuIBYtNg");
	this.shape_559.setTransform(-175.5,13.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").ss(1.5,1,1).p("AjRtqQCbKlE2DOQllEAhjJiQhquIBhtNg");
	this.shape_560.setTransform(-177.7,13.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFCC02").s().p("AjRtqQCbKlE2DOQllEAhjJiQhquIBhtNg");
	this.shape_561.setTransform(-177.7,13.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(1.5,1,1).p("AjktqQCpKlFSDOQmFEAhsJiQhzuJBptMg");
	this.shape_562.setTransform(-180,13.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFCC02").s().p("AjktqQCpKlFSDOQmFEAhsJiQhzuJBptMg");
	this.shape_563.setTransform(-180,13.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(1.5,1,1).p("Aj2tqQC2KlFuDOQmlEAh1JiQh8uJBytMg");
	this.shape_564.setTransform(-182.2,13.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFCC02").s().p("Aj2tqQC2KlFuDOQmlEAh1JiQh8uJBytMg");
	this.shape_565.setTransform(-182.2,13.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").ss(1.5,1,1).p("Aj+uBQC8K3F6DUQmzEGh5JyQiAuhB2tig");
	this.shape_566.setTransform(-183.1,13.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFCC02").s().p("Aj+uBQC8K3F6DUQmzEGh5JyQiAuhB2tig");
	this.shape_567.setTransform(-183.1,13.5);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").ss(1.5,1,1).p("AkGuYQDCLIGGDZQnAENh+KDQiEu5B6t4g");
	this.shape_568.setTransform(-184,13.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFCC02").s().p("AkGuYQDCLJGGDYQnAENh+KDQiEu5B6t4g");
	this.shape_569.setTransform(-184,13.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").ss(1.5,1,1).p("AkOuvQDILbGRDeQnNEUiBKSQiIvQB9uPg");
	this.shape_570.setTransform(-184.9,13.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFCC02").s().p("AkOuvQDILbGRDeQnNEUiBKSQiIvQB9uPg");
	this.shape_571.setTransform(-184.9,13.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").ss(1.5,1,1).p("AkWvGQDOLsGdDkQnbEbiFKiQiMvnCBumg");
	this.shape_572.setTransform(-185.8,13.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFCC02").s().p("AkWvGQDOLsGdDkQnbEbiFKiQiMvnCBumg");
	this.shape_573.setTransform(-185.8,13.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").ss(1.5,1,1).p("AkfveQDUL/GqDqQnpEhiJKzQiQwACEu9g");
	this.shape_574.setTransform(-186.7,13.6);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFCC02").s().p("AkfveQDUL/GqDpQnpEiiJKyQiQv/CEu9g");
	this.shape_575.setTransform(-186.7,13.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").ss(1.5,1,1).p("Aknv1QDaMQG2DvQn3EpiNLDQiUwYCIvTg");
	this.shape_576.setTransform(-187.6,13.6);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFCC02").s().p("Aknv1QDaMRG2DuQn3EpiNLDQiUwYCIvTg");
	this.shape_577.setTransform(-187.6,13.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").ss(1.5,1,1).p("AkuwMQDgMjHBD0QoFEviQLTQiYwvCMvqg");
	this.shape_578.setTransform(-188.5,13.5);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFCC02").s().p("AkuwMQDgMjHBD0QoFEviQLTQiYwvCMvqg");
	this.shape_579.setTransform(-188.5,13.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").ss(1.5,1,1).p("Ak2wjQDmM0HND6QoSE2iVLjQicxHCQwAg");
	this.shape_580.setTransform(-189.4,13.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFCC02").s().p("Ak3wjQDnM0HMD6QoRE2iVLjQicxHCPwAg");
	this.shape_581.setTransform(-189.4,13.6);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").ss(1.5,1,1).p("Ak/w6QDsNGHZEAQogE8iYLzQigxeCTwXg");
	this.shape_582.setTransform(-190.3,13.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFCC02").s().p("Ak/w6QDsNGHZD/QogE9iYLzQigxeCTwXg");
	this.shape_583.setTransform(-190.3,13.6);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#000000").ss(1.5,1,1).p("Ak2xBQDgNZHSD0QobE4iKL+QicxmCPwdg");
	this.shape_584.setTransform(-189.3,13.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFCC02").s().p("Ak2xBQDgNZHSDzQobE5iKL+QicxmCPwdg");
	this.shape_585.setTransform(-189.3,13.6);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#000000").ss(1.5,1,1).p("AktxIQDUNrHKDpQoVE0h9MJQiYxuCMwjg");
	this.shape_586.setTransform(-188.3,13.5);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFCC02").s().p("AktxIQDUNrHKDpQoVE0h9MJQiYxuCMwjg");
	this.shape_587.setTransform(-188.3,13.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#000000").ss(1.5,1,1).p("AklxPQDIN9HDDdQoQExhvMUQiTx2CHwpg");
	this.shape_588.setTransform(-187.2,13.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFCC02").s().p("AklxPQDIN9HDDdQoQExhvMUQiTx2CHwpg");
	this.shape_589.setTransform(-187.2,13.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").ss(1.5,1,1).p("AkcxVQC8OOG8DTQoLEshhMeQiPx8CDwvg");
	this.shape_590.setTransform(-186.2,13.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFCC02").s().p("AkcxVQC8OOG8DTQoLEshhMeQiPx8CDwvg");
	this.shape_591.setTransform(-186.2,13.5);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").ss(1.5,1,1).p("AkTxcQCwOhG0DHQoFEphUMoQiKyDB/w2g");
	this.shape_592.setTransform(-185.2,13.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFCC02").s().p("AkTxcQCwOhG0DHQoFEphUMoQiKyDB/w2g");
	this.shape_593.setTransform(-185.2,13.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#000000").ss(1.5,1,1).p("AkKxjQCkOzGsC8QoAElhFMzQiHyLB8w8g");
	this.shape_594.setTransform(-184.2,13.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFCC02").s().p("AkKxjQCkOzGsC8QoAElhFMzQiHyLB8w8g");
	this.shape_595.setTransform(-184.2,13.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#000000").ss(1.5,1,1).p("AkBxqQCYPGGlCwQn7Ehg4M+QiCySB4xDg");
	this.shape_596.setTransform(-183.2,13.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFCC02").s().p("AkBxqQCYPGGlCwQn7Ehg4M+QiCySB4xDg");
	this.shape_597.setTransform(-183.2,13.5);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#000000").ss(1.5,1,1).p("Aj5xxQCMPYGeClQn2EdgqNJQh9yaBzxJg");
	this.shape_598.setTransform(-182.2,13.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFCC02").s().p("Aj5xxQCMPYGeClQn2EdgqNJQh9yaBzxJg");
	this.shape_599.setTransform(-182.2,13.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#000000").ss(1.5,1,1).p("Ajwx3QCAPpGWCaQnwEZgcNTQh6yhBwxOg");
	this.shape_600.setTransform(-181.2,13.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFCC02").s().p("Ajwx3QCAPpGWCaQnwEZgcNTQh6yhBwxOg");
	this.shape_601.setTransform(-181.2,13.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#000000").ss(1.5,1,1).p("Ajnx+QB0P8GPCOQnrEVgPNeQh1yoBsxVg");
	this.shape_602.setTransform(-180.2,13.5);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFCC02").s().p("Ajnx+QB0P8GPCOQnrEVgPNeQh1yoBsxVg");
	this.shape_603.setTransform(-180.2,13.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#000000").ss(1.5,1,1).p("Ajvx4QB/PrGVCZQnwEZgbNUQh5yiBwxPg");
	this.shape_604.setTransform(-181.2,13.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFCC02").s().p("Ajvx4QB/PrGVCZQnwEYgbNVQh5yiBwxPg");
	this.shape_605.setTransform(-181.2,13.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#000000").ss(1.5,1,1).p("Aj3xyQCKPbGcCjQn1EcgnNLQh9ybBzxKg");
	this.shape_606.setTransform(-182.2,13.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFCC02").s().p("Aj3xyQCKPbGcCjQn1EcgnNLQh9ybBzxKg");
	this.shape_607.setTransform(-182.2,13.5);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#000000").ss(1.5,1,1).p("Aj/xsQCVPKGjCuQn5Egg0NBQiByVB2xEg");
	this.shape_608.setTransform(-183.3,13.5);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFCC02").s().p("Aj/xrQCVPKGjCtQn5Egg0NAQiByUB2xDg");
	this.shape_609.setTransform(-183.3,13.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#000000").ss(1.5,1,1).p("AkHxmQCgO6GpC4Qn+EkhAM3QiFyOB6w/g");
	this.shape_610.setTransform(-184.3,13.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFCC02").s().p("AkHxmQCgO7GpC3Qn+EkhAM3QiFyOB6w/g");
	this.shape_611.setTransform(-184.3,13.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#000000").ss(1.5,1,1).p("AkPxfQCrOpGwDCQoDEnhNMtQiJyHB+w4g");
	this.shape_612.setTransform(-185.3,13.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFCC02").s().p("AkPxfQCrOpGwDCQoDEnhNMtQiJyHB+w4g");
	this.shape_613.setTransform(-185.3,13.5);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#000000").ss(1.5,1,1).p("AkXxZQC2OZG3DMQoIErhaMjQiMyACBwzg");
	this.shape_614.setTransform(-186.3,13.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFCC02").s().p("AkXxZQC2OZG3DMQoIEqhaMkQiMyACBwzg");
	this.shape_615.setTransform(-186.3,13.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#000000").ss(1.5,1,1).p("AkfxTQDBOIG+DXQoNEuhmMaQiRx6CFwtg");
	this.shape_616.setTransform(-187.4,13.5);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFCC02").s().p("AkfxTQDBOIG+DXQoNEuhmMaQiRx6CFwtg");
	this.shape_617.setTransform(-187.4,13.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#000000").ss(1.5,1,1).p("AknxNQDLN4HFDhQoSExhyMRQiVxzCJwog");
	this.shape_618.setTransform(-188.4,13.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFCC02").s().p("AknxNQDLN4HFDhQoSExhyMRQiVxzCJwog");
	this.shape_619.setTransform(-188.4,13.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#000000").ss(1.5,1,1).p("AkvxHQDWNoHMDrQoWE1h/MHQiZxsCMwjg");
	this.shape_620.setTransform(-189.4,13.6);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFCC02").s().p("AkvxHQDWNoHMDqQoWE2h/MHQiZxsCMwjg");
	this.shape_621.setTransform(-189.4,13.6);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#000000").ss(1.5,1,1).p("Ak3xAQDiNXHSD1QobE5iML8QicxlCPwcg");
	this.shape_622.setTransform(-190.5,13.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFCC02").s().p("Ak3xAQDiNXHSD1QobE5iML8QicxlCPwcg");
	this.shape_623.setTransform(-190.5,13.5);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#000000").ss(1.5,1,1).p("Ak4wnQDnM3HPD7QoUE3iVLmQidxLCQwEg");
	this.shape_624.setTransform(-190.8,13.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFCC02").s().p("Ak4wnQDnM4HPD6QoUE3iVLmQidxLCQwEg");
	this.shape_625.setTransform(-190.8,13.6);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#000000").ss(1.5,1,1).p("AkywUQDjMoHFD3QoJEyiSLYQiaw4CNvxg");
	this.shape_626.setTransform(-190,13.6);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFCC02").s().p("AkywUQDjMoHFD3QoJExiSLZQiaw4CNvxg");
	this.shape_627.setTransform(-190,13.6);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#000000").ss(1.5,1,1).p("AkrwBQDeMaG7DyQn+EsiPLLQiWwkCKvfg");
	this.shape_628.setTransform(-189.3,13.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFCC02").s().p("AkrwBQDeMaG7DyQn+EsiPLLQiWwkCKvfg");
	this.shape_629.setTransform(-189.3,13.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#000000").ss(1.5,1,1).p("AkkvuQDYMLGyDuQnzEmiMK+QiTwRCIvMg");
	this.shape_630.setTransform(-188.6,13.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFCC02").s().p("AkkvuQDYMLGyDuQnzEmiMK+QiTwRCIvMg");
	this.shape_631.setTransform(-188.6,13.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#000000").ss(1.5,1,1).p("AkevbQDUL9GoDpQnnEgiJKxQiQv+CEu5g");
	this.shape_632.setTransform(-187.9,13.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFCC02").s().p("AkevbQDUL9GoDpQnnEgiJKxQiQv+CEu5g");
	this.shape_633.setTransform(-187.9,13.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#000000").ss(1.5,1,1).p("AkXvJQDOLvGfDkQndEciFKkQiNvsCCung");
	this.shape_634.setTransform(-187.1,13.6);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFCC02").s().p("AkXvJQDPLvGeDkQndEciFKkQiMvsCBung");
	this.shape_635.setTransform(-187.1,13.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#000000").ss(1.5,1,1).p("AkRu2QDKLgGVDgQnREWiCKXQiKvYB+uVg");
	this.shape_636.setTransform(-186.4,13.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFCC02").s().p("AkRu2QDKLgGVDgQnREViCKYQiKvYB+uVg");
	this.shape_637.setTransform(-186.4,13.6);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#000000").ss(1.5,1,1).p("AkKujQDFLRGLDbQnGERh/KKQiGvGB7uBg");
	this.shape_638.setTransform(-185.7,13.6);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFCC02").s().p("AkKuiQDFLQGLDbQnGERh/KKQiGvGB7uAg");
	this.shape_639.setTransform(-185.7,13.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#000000").ss(1.5,1,1).p("AkDuQQDALDGBDXQm7EKh8J9QiDuyB5tvg");
	this.shape_640.setTransform(-185,13.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFCC02").s().p("AkDuQQDALDGBDXQm7EKh8J9QiDuyB5tvg");
	this.shape_641.setTransform(-185,13.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#000000").ss(1.5,1,1).p("Aj9t9QC8K0F3DSQmvEGh5JvQiAufB1tcg");
	this.shape_642.setTransform(-184.3,13.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFCC02").s().p("Aj9t9QC8K0F3DSQmvEGh5JvQiAufB1tcg");
	this.shape_643.setTransform(-184.3,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_499},{t:this.shape_498}]}).to({state:[{t:this.shape_501},{t:this.shape_500}]},1).to({state:[{t:this.shape_503},{t:this.shape_502}]},1).to({state:[{t:this.shape_505},{t:this.shape_504}]},1).to({state:[{t:this.shape_507},{t:this.shape_506}]},1).to({state:[{t:this.shape_509},{t:this.shape_508}]},1).to({state:[{t:this.shape_511},{t:this.shape_510}]},1).to({state:[{t:this.shape_513},{t:this.shape_512}]},1).to({state:[{t:this.shape_515},{t:this.shape_514}]},1).to({state:[{t:this.shape_517},{t:this.shape_516}]},1).to({state:[{t:this.shape_519},{t:this.shape_518}]},1).to({state:[{t:this.shape_521,p:{x:-163.1}},{t:this.shape_520,p:{x:-163.1}}]},1).to({state:[{t:this.shape_523},{t:this.shape_522}]},1).to({state:[{t:this.shape_525},{t:this.shape_524}]},1).to({state:[{t:this.shape_527},{t:this.shape_526}]},1).to({state:[{t:this.shape_529},{t:this.shape_528}]},1).to({state:[{t:this.shape_531},{t:this.shape_530}]},1).to({state:[{t:this.shape_533},{t:this.shape_532}]},1).to({state:[{t:this.shape_535},{t:this.shape_534}]},1).to({state:[{t:this.shape_537},{t:this.shape_536}]},1).to({state:[{t:this.shape_539},{t:this.shape_538}]},1).to({state:[{t:this.shape_541},{t:this.shape_540}]},1).to({state:[{t:this.shape_543},{t:this.shape_542}]},1).to({state:[{t:this.shape_545},{t:this.shape_544}]},1).to({state:[{t:this.shape_547},{t:this.shape_546}]},1).to({state:[{t:this.shape_549},{t:this.shape_548}]},1).to({state:[{t:this.shape_521,p:{x:-164.3}},{t:this.shape_520,p:{x:-164.3}}]},1).to({state:[{t:this.shape_551},{t:this.shape_550}]},1).to({state:[{t:this.shape_553},{t:this.shape_552}]},1).to({state:[{t:this.shape_555},{t:this.shape_554}]},1).to({state:[{t:this.shape_557},{t:this.shape_556}]},1).to({state:[{t:this.shape_559},{t:this.shape_558}]},1).to({state:[{t:this.shape_561},{t:this.shape_560}]},1).to({state:[{t:this.shape_563},{t:this.shape_562}]},1).to({state:[{t:this.shape_565},{t:this.shape_564}]},1).to({state:[{t:this.shape_567},{t:this.shape_566}]},1).to({state:[{t:this.shape_569},{t:this.shape_568}]},1).to({state:[{t:this.shape_571},{t:this.shape_570}]},1).to({state:[{t:this.shape_573},{t:this.shape_572}]},1).to({state:[{t:this.shape_575},{t:this.shape_574}]},1).to({state:[{t:this.shape_577},{t:this.shape_576}]},1).to({state:[{t:this.shape_579},{t:this.shape_578}]},1).to({state:[{t:this.shape_581},{t:this.shape_580}]},1).to({state:[{t:this.shape_583,p:{x:-190.3}},{t:this.shape_582,p:{x:-190.3}}]},1).to({state:[{t:this.shape_585},{t:this.shape_584}]},1).to({state:[{t:this.shape_587},{t:this.shape_586}]},1).to({state:[{t:this.shape_589},{t:this.shape_588}]},1).to({state:[{t:this.shape_591},{t:this.shape_590}]},1).to({state:[{t:this.shape_593},{t:this.shape_592}]},1).to({state:[{t:this.shape_595},{t:this.shape_594}]},1).to({state:[{t:this.shape_597},{t:this.shape_596}]},1).to({state:[{t:this.shape_599},{t:this.shape_598}]},1).to({state:[{t:this.shape_601},{t:this.shape_600}]},1).to({state:[{t:this.shape_603},{t:this.shape_602}]},1).to({state:[{t:this.shape_605},{t:this.shape_604}]},1).to({state:[{t:this.shape_607},{t:this.shape_606}]},1).to({state:[{t:this.shape_609},{t:this.shape_608}]},1).to({state:[{t:this.shape_611},{t:this.shape_610}]},1).to({state:[{t:this.shape_613},{t:this.shape_612}]},1).to({state:[{t:this.shape_615},{t:this.shape_614}]},1).to({state:[{t:this.shape_617},{t:this.shape_616}]},1).to({state:[{t:this.shape_619},{t:this.shape_618}]},1).to({state:[{t:this.shape_621},{t:this.shape_620}]},1).to({state:[{t:this.shape_623},{t:this.shape_622}]},1).to({state:[{t:this.shape_583,p:{x:-191.5}},{t:this.shape_582,p:{x:-191.5}}]},1).to({state:[{t:this.shape_625},{t:this.shape_624}]},1).to({state:[{t:this.shape_627},{t:this.shape_626}]},1).to({state:[{t:this.shape_629},{t:this.shape_628}]},1).to({state:[{t:this.shape_631},{t:this.shape_630}]},1).to({state:[{t:this.shape_633},{t:this.shape_632}]},1).to({state:[{t:this.shape_635},{t:this.shape_634}]},1).to({state:[{t:this.shape_637},{t:this.shape_636}]},1).to({state:[{t:this.shape_639},{t:this.shape_638}]},1).to({state:[{t:this.shape_641},{t:this.shape_640}]},1).to({state:[{t:this.shape_643},{t:this.shape_642}]},1).to({state:[{t:this.shape_499},{t:this.shape_498}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.7,-221.2,393.5,389.4);


(lib.fish01Swimming02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tail
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("Ao/vhISLPLIyXP4g");
	this.shape.setTransform(-212.5,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC02").s().p("ApAviISMPMIyXP4g");
	this.shape_1.setTransform(-212.5,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("ApCPcIAL+3IR6PGg");
	this.shape_2.setTransform(-211.5,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC02").s().p("Ao3vbIR6PFIyFPyg");
	this.shape_3.setTransform(-211.5,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("Ao5PVIAL+pIRoO/g");
	this.shape_4.setTransform(-210.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC02").s().p("AovvUIRpO+IxzPrg");
	this.shape_5.setTransform(-210.4,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("AowPOIAL+bIRWO3g");
	this.shape_6.setTransform(-209.5,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC02").s().p("AolvNIRWO4IxhPjg");
	this.shape_7.setTransform(-209.5,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,1,1).p("AooPGIAL+LIRGOwg");
	this.shape_8.setTransform(-208.4,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC02").s().p("AodvFIRGOwIxRPbg");
	this.shape_9.setTransform(-208.4,17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1.5,1,1).p("AofPAIAL9/IQ0Oqg");
	this.shape_10.setTransform(-207.4,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC02").s().p("AoUu/IQ0OqIw/PUg");
	this.shape_11.setTransform(-207.4,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.5,1,1).p("AoWO4IAK9vIQjOig");
	this.shape_12.setTransform(-206.4,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC02").s().p("AoLu3IQiOiIwtPNg");
	this.shape_13.setTransform(-206.4,16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1.5,1,1).p("AoNOxIAK9hIQRObg");
	this.shape_14.setTransform(-205.4,16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC02").s().p("AoDuwIQRObIwbPGg");
	this.shape_15.setTransform(-205.4,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1.5,1,1).p("AoEOqIAK9TIP/OUg");
	this.shape_16.setTransform(-204.4,16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC02").s().p("An6upIP/OUIwJO/g");
	this.shape_17.setTransform(-204.4,16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1.5,1,1).p("An8OjIAK9FIPvOOg");
	this.shape_18.setTransform(-203.4,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC02").s().p("AnyuiIPvOOIv5O3g");
	this.shape_19.setTransform(-203.4,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1.5,1,1).p("AnzOcIAK83IPdOHg");
	this.shape_20.setTransform(-202.3,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC02").s().p("AnpubIPdOHIvnOwg");
	this.shape_21.setTransform(-202.3,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1.5,1,1).p("AnqOVIAJ8pIPMOAg");
	this.shape_22.setTransform(-201.3,16.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC02").s().p("AnhuUIPMOAIvVOpg");
	this.shape_23.setTransform(-201.3,16.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1.5,1,1).p("AniOOIAK8bIO7N5g");
	this.shape_24.setTransform(-200.3,16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC02").s().p("AnYuNIO7N5IvFOig");
	this.shape_25.setTransform(-200.3,16.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1.5,1,1).p("AnYOHIAJ8NIOpNyg");
	this.shape_26.setTransform(-199.3,16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC02").s().p("AnPuGIOpNzIuzOag");
	this.shape_27.setTransform(-199.3,16.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1.5,1,1).p("AnQOAIAK7/IOXNsg");
	this.shape_28.setTransform(-198.3,16.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC02").s().p("AnGt/IOXNsIuhOTg");
	this.shape_29.setTransform(-198.3,16.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1.5,1,1).p("AnHN5IAJ7xIOGNlg");
	this.shape_30.setTransform(-197.3,16.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC02").s().p("Am+t4IOGNlIuPOMg");
	this.shape_31.setTransform(-197.3,16.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1.5,1,1).p("Am/NyIAK7jIN1Neg");
	this.shape_32.setTransform(-196.2,16.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC02").s().p("Am2txIN2NeIt/OFg");
	this.shape_33.setTransform(-196.2,16.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1.5,1,1).p("Am2NrIAJ7VINkNXg");
	this.shape_34.setTransform(-195.2,16.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC02").s().p("AmttqINkNXIttN+g");
	this.shape_35.setTransform(-195.2,16.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1.5,1,1).p("AmtNkIAJ7HINSNQg");
	this.shape_36.setTransform(-194.2,16.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC02").s().p("AmktjINSNQItbN3g");
	this.shape_37.setTransform(-194.2,16.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1.5,1,1).p("AmkNdIAI65INBNKg");
	this.shape_38.setTransform(-193.2,16.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC02").s().p("AmctcINBNKItJNvg");
	this.shape_39.setTransform(-193.2,16.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1.5,1,1).p("AmcNWIAJ6rIMwNDg");
	this.shape_40.setTransform(-192.2,16.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC02").s().p("AmTtVIMwNDIs5Nog");
	this.shape_41.setTransform(-192.2,16.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1.5,1,1).p("AmTNPIAJ6dIMeM8g");
	this.shape_42.setTransform(-191.2,16.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC02").s().p("AmKtOIMeM8IsnNgg");
	this.shape_43.setTransform(-191.2,16.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1.5,1,1).p("AmKNIIAJ6PIMMM1g");
	this.shape_44.setTransform(-190.2,16.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC02").s().p("AmBtHIMMM1IsVNag");
	this.shape_45.setTransform(-190.2,16.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1.5,1,1).p("AmBNBIAI6BIL7Mug");
	this.shape_46.setTransform(-189.1,16.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFCC02").s().p("Al4tAIL6MvIsDNRg");
	this.shape_47.setTransform(-189.1,16.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1.5,1,1).p("Al4M5IAI5xILpMmg");
	this.shape_48.setTransform(-188.1,16.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC02").s().p("Alws4ILpMmIrxNLg");
	this.shape_49.setTransform(-188.1,16.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1.5,1,1).p("AlvMzIAH5lILYMgg");
	this.shape_50.setTransform(-187.1,16.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC02").s().p("AlnsyILYMgIrgNEg");
	this.shape_51.setTransform(-187.1,16.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1.5,1,1).p("AlnMrIAI5VILHMZg");
	this.shape_52.setTransform(-186.1,16.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC02").s().p("AlfsqILHMZIrPM8g");
	this.shape_53.setTransform(-186.1,16.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1.5,1,1).p("AleMkIAI5HIK1MSg");
	this.shape_54.setTransform(-185.1,16.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC02").s().p("AlWsjIK1MSIq9M1g");
	this.shape_55.setTransform(-185.1,16.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1.5,1,1).p("AlVMdIAI45IKjMLg");
	this.shape_56.setTransform(-184.1,16.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC02").s().p("AlNscIKjMLIqrMug");
	this.shape_57.setTransform(-184.1,16.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.5,1,1).p("AlMMWIAH4rIKTMEg");
	this.shape_58.setTransform(-183,16.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC02").s().p("AlFsVIKTMEIqaMng");
	this.shape_59.setTransform(-183,16.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1.5,1,1).p("AlEMPIAI4dIKBL9g");
	this.shape_60.setTransform(-182,16.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC02").s().p("Ak8sOIKBL+IqJMfg");
	this.shape_61.setTransform(-182,16.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1.5,1,1).p("Ak7MIIAH4PIJwL3g");
	this.shape_62.setTransform(-181,16.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC02").s().p("Ak0sHIJwL3Ip3MYg");
	this.shape_63.setTransform(-181,16.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1.5,1,1).p("AkyMBIAH4BIJeLwg");
	this.shape_64.setTransform(-180,16.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC02").s().p("AkrsAIJeLwIplMRg");
	this.shape_65.setTransform(-180,16.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1.5,1,1).p("AkpL6IAG3zIJNLpg");
	this.shape_66.setTransform(-179,16.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC02").s().p("Akjr5IJOLpIpVMKg");
	this.shape_67.setTransform(-179,16.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1.5,1,1).p("AkhLzIAH3lII8Lig");
	this.shape_68.setTransform(-178,16.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC02").s().p("AkaryII8LiIpDMDg");
	this.shape_69.setTransform(-178,16.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1.5,1,1).p("AkYLsIAH3XIIqLcg");
	this.shape_70.setTransform(-176.9,16.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC02").s().p("AkRrrIIqLbIoxL8g");
	this.shape_71.setTransform(-176.9,16.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1.5,1,1).p("AkPLlIAG3JIIZLVg");
	this.shape_72.setTransform(-175.9,16);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC02").s().p("AkJrkIIZLVIofL0g");
	this.shape_73.setTransform(-175.9,16);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1.5,1,1).p("AkHLeIAH27IIHLOg");
	this.shape_74.setTransform(-174.9,16);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC02").s().p("AkArdIIILOIoPLtg");
	this.shape_75.setTransform(-174.9,16);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1.5,1,1).p("Aj+LXIAH2tIH2LHg");
	this.shape_76.setTransform(-173.9,16);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFCC02").s().p("Aj3rWIH2LHIn9Lmg");
	this.shape_77.setTransform(-173.9,16);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1.5,1,1).p("AjurPIHkLAInrLfg");
	this.shape_78.setTransform(-172.9,15.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC02").s().p("AjurPIHkLAInrLfg");
	this.shape_79.setTransform(-172.9,15.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1.5,1,1).p("Aj+LXIAH2tIH1LHg");
	this.shape_80.setTransform(-173.6,16);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC02").s().p("Aj3rWIH1LHIn7Llg");
	this.shape_81.setTransform(-173.6,16);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1.5,1,1).p("AkGLeIAG27IIHLOg");
	this.shape_82.setTransform(-174.4,16);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC02").s().p("AkArdIIHLOIoNLsg");
	this.shape_83.setTransform(-174.4,16);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1.5,1,1).p("AkPLkIAI3HIIXLUg");
	this.shape_84.setTransform(-175.1,16);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC02").s().p("AkIrjIIYLUIofLzg");
	this.shape_85.setTransform(-175.1,16);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1.5,1,1).p("AkXLrIAH3VIIoLbg");
	this.shape_86.setTransform(-175.9,16);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC02").s().p("AkQrqIIoLbIovL6g");
	this.shape_87.setTransform(-175.9,16);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1.5,1,1).p("AkgLyIAH3jII6Lhg");
	this.shape_88.setTransform(-176.6,16);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC02").s().p("AkZrxII6LhIpBMCg");
	this.shape_89.setTransform(-176.6,16);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1.5,1,1).p("AkoL5IAH3xIJKLpg");
	this.shape_90.setTransform(-177.4,16);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC02").s().p("Akhr4IJKLoIpRMJg");
	this.shape_91.setTransform(-177.4,16);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1.5,1,1).p("AkxMAIAI3/IJbLvg");
	this.shape_92.setTransform(-178.1,16);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC02").s().p("Akpr/IJbLvIpjMQg");
	this.shape_93.setTransform(-178.1,16);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1.5,1,1).p("Ak5MHIAH4NIJsL2g");
	this.shape_94.setTransform(-178.9,16);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC02").s().p("AkysGIJsL2IpzMXg");
	this.shape_95.setTransform(-178.9,16);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1.5,1,1).p("AlCMOIAI4bIJ9L9g");
	this.shape_96.setTransform(-179.6,16.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC02").s().p("Ak6sNIJ9L9IqFMeg");
	this.shape_97.setTransform(-179.6,16.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1.5,1,1).p("AlKMUIAH4nIKOMDg");
	this.shape_98.setTransform(-180.6,16.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC02").s().p("AlDsTIKOMDIqVMkg");
	this.shape_99.setTransform(-180.6,16.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1.5,1,1).p("AlTMbIAI41IKfMKg");
	this.shape_100.setTransform(-181.5,16.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC02").s().p("AlLsaIKfMKIqnMrg");
	this.shape_101.setTransform(-181.5,16.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1.5,1,1).p("AlbMiIAH5DIKwMQg");
	this.shape_102.setTransform(-182.5,16.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC02").s().p("AlTshIKvMQIq4Mzg");
	this.shape_103.setTransform(-182.5,16.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1.5,1,1).p("AlkMpIAI5RILBMXg");
	this.shape_104.setTransform(-183.4,16.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC02").s().p("AlcsoILBMXIrJM6g");
	this.shape_105.setTransform(-183.4,16.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1.5,1,1).p("AltMwIAI5fILSMeg");
	this.shape_106.setTransform(-184.4,16.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCC02").s().p("AlksvILRMeIraNBg");
	this.shape_107.setTransform(-184.4,16.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1.5,1,1).p("Al1M3IAI5tILjMlg");
	this.shape_108.setTransform(-185.4,16.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCC02").s().p("Alts2ILjMlIrrNIg");
	this.shape_109.setTransform(-185.4,16.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1.5,1,1).p("Al+M+IAI57IL1Msg");
	this.shape_110.setTransform(-186.3,16.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCC02").s().p("Al2s9IL0MsIr8NPg");
	this.shape_111.setTransform(-186.3,16.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1.5,1,1).p("AmGNFIAI6JIMFMzg");
	this.shape_112.setTransform(-187.3,16.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCC02").s().p("Al+tDIMFMxIsNNWg");
	this.shape_113.setTransform(-187.3,16.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1.5,1,1).p("AmPNMIAJ6XIMWM6g");
	this.shape_114.setTransform(-188.3,16.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFCC02").s().p("AmGtKIMWM4IsfNdg");
	this.shape_115.setTransform(-188.3,16.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1.5,1,1).p("AmXNSIAI6jIMnM/g");
	this.shape_116.setTransform(-189.2,16.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC02").s().p("AmPtRIMnM/IsvNkg");
	this.shape_117.setTransform(-189.2,16.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1.5,1,1).p("AmgNZIAJ6xIM4NGg");
	this.shape_118.setTransform(-190.3,16.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCC02").s().p("AmXtYIM4NGItBNrg");
	this.shape_119.setTransform(-190.3,16.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1.5,1,1).p("AmoNgIAJ6/INJNNg");
	this.shape_120.setTransform(-191.3,16.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCC02").s().p("AmgtfINKNNItTNyg");
	this.shape_121.setTransform(-191.3,16.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1.5,1,1).p("AmxNnIAJ7NINaNUg");
	this.shape_122.setTransform(-192.4,16.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC02").s().p("AmotmINaNUItjN5g");
	this.shape_123.setTransform(-192.4,16.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1.5,1,1).p("Am5NuIAJ7bINqNbg");
	this.shape_124.setTransform(-193.5,16.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFCC02").s().p("AmwttINqNbItzOAg");
	this.shape_125.setTransform(-193.5,16.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1.5,1,1).p("AnCN1IAJ7pIN8Nig");
	this.shape_126.setTransform(-194.5,16.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCC02").s().p("Am5t0IN8NhIuFOIg");
	this.shape_127.setTransform(-194.5,16.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1.5,1,1).p("AnKN8IAJ73IONNog");
	this.shape_128.setTransform(-195.6,16.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCC02").s().p("AnBt7IOMNoIuWOOg");
	this.shape_129.setTransform(-195.6,16.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1.5,1,1).p("AnTODIAJ8FIOeNvg");
	this.shape_130.setTransform(-196.6,16.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCC02").s().p("AnJuCIOdNvIunOVg");
	this.shape_131.setTransform(-196.6,16.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1.5,1,1).p("AncOJIAK8RIOuN1g");
	this.shape_132.setTransform(-197.7,16.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFCC02").s().p("AnSuIIOvN1Iu4Ocg");
	this.shape_133.setTransform(-197.7,16.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1.5,1,1).p("AnkOQIAK8fIO/N8g");
	this.shape_134.setTransform(-198.8,16.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCC02").s().p("AnauPIO/N7IvJOkg");
	this.shape_135.setTransform(-198.8,16.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1.5,1,1).p("AntOXIAK8tIPRODg");
	this.shape_136.setTransform(-199.8,16.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFCC02").s().p("AnjuWIPROCIvbOrg");
	this.shape_137.setTransform(-199.8,16.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1.5,1,1).p("An1OeIAJ87IPiOJg");
	this.shape_138.setTransform(-200.9,16.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFCC02").s().p("AnrudIPhOJIvrOyg");
	this.shape_139.setTransform(-200.9,16.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1.5,1,1).p("An+OlIAK9JIPyOQg");
	this.shape_140.setTransform(-201.9,16.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCC02").s().p("An0ukIPyOQIv7O5g");
	this.shape_141.setTransform(-201.9,16.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1.5,1,1).p("AoGOsIAK9XIQDOWg");
	this.shape_142.setTransform(-203,16.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFCC02").s().p("An8uqIQDOWIwNPAg");
	this.shape_143.setTransform(-203,16.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1.5,1,1).p("AoPOyIAK9jIQVOcg");
	this.shape_144.setTransform(-204.1,16.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFCC02").s().p("AoFuxIQVOcIwfPHg");
	this.shape_145.setTransform(-204.1,16.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1.5,1,1).p("AoXO5IAK9xIQlOjg");
	this.shape_146.setTransform(-205.1,16.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFCC02").s().p("AoNu4IQlOjIwvPOg");
	this.shape_147.setTransform(-205.1,16.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1.5,1,1).p("AogPAIAL9/IQ2Oqg");
	this.shape_148.setTransform(-206.2,16.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFCC02").s().p("AoWu/IQ3OqIxBPVg");
	this.shape_149.setTransform(-206.2,16.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1.5,1,1).p("AopPHIAL+NIRIOxg");
	this.shape_150.setTransform(-207.2,16.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFCC02").s().p("AoevGIRHOxIxSPcg");
	this.shape_151.setTransform(-207.2,16.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1.5,1,1).p("AoxPOIAL+bIRYO3g");
	this.shape_152.setTransform(-208.3,16.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFCC02").s().p("AomvNIRYO4IxjPjg");
	this.shape_153.setTransform(-208.3,16.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1.5,1,1).p("Ao5PVIAK+pIRpO+g");
	this.shape_154.setTransform(-209.4,16.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(1.5,1,1).p("ApCPcIAL+3IR6PFg");
	this.shape_155.setTransform(-210.4,16.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1.5,1,1).p("ApEPjIAL/FIR+PNg");
	this.shape_156.setTransform(-210.8,16.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFCC02").s().p("Ao5viIR+PNIyJP4g");
	this.shape_157.setTransform(-210.8,16.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1.5,1,1).p("Ao+PkIAL/HIRyPQg");
	this.shape_158.setTransform(-210.1,16.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFCC02").s().p("AozvjIRyPPIx9P4g");
	this.shape_159.setTransform(-210.1,16.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1.5,1,1).p("Ao4PlIAM/JIRlPSg");
	this.shape_160.setTransform(-209.4,16.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFCC02").s().p("AosvkIRkPSIxwP3g");
	this.shape_161.setTransform(-209.4,16.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1.5,1,1).p("AoxPlIAL/JIRYPTg");
	this.shape_162.setTransform(-208.7,16.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFCC02").s().p("AomvkIRYPTIxjP2g");
	this.shape_163.setTransform(-208.7,16.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1.5,1,1).p("AorPmIAL/LIRMPVg");
	this.shape_164.setTransform(-208,16.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFCC02").s().p("AogvlIRMPVIxXP2g");
	this.shape_165.setTransform(-208,16.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1.5,1,1).p("AokPnIAL/NIQ/PXg");
	this.shape_166.setTransform(-207.3,16);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFCC02").s().p("AoZvmIQ/PXIxKP2g");
	this.shape_167.setTransform(-207.3,16);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1.5,1,1).p("AoePnIAM/NIQxPYg");
	this.shape_168.setTransform(-206.7,15.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFCC02").s().p("AoSvmIQxPYIw9P2g");
	this.shape_169.setTransform(-206.7,15.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1.5,1,1).p("AoYPoIAM/PIQlPbg");
	this.shape_170.setTransform(-206,15.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFCC02").s().p("AoMvnIQlPbIwxP0g");
	this.shape_171.setTransform(-206,15.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1.5,1,1).p("AoSPpIAN/RIQYPdg");
	this.shape_172.setTransform(-205.3,15.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFCC02").s().p("AoFvoIQXPdIwkP0g");
	this.shape_173.setTransform(-205.3,15.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1.5,1,1).p("AoLPqIAM/TIQLPfg");
	this.shape_174.setTransform(-204.6,15.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFCC02").s().p("An/vpIQLPfIwXP0g");
	this.shape_175.setTransform(-204.6,15.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1.5,1,1).p("AoFPqIAM/TIP/Pgg");
	this.shape_176.setTransform(-203.9,15.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFCC02").s().p("An4vpIP+PgIwLPzg");
	this.shape_177.setTransform(-203.9,15.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1.5,1,1).p("An/PrIAM/VIPyPjg");
	this.shape_178.setTransform(-203.2,15.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFCC02").s().p("AnzvqIPzPjIv+Pyg");
	this.shape_179.setTransform(-203.2,15.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1.5,1,1).p("An4PsIAM/XIPlPlg");
	this.shape_180.setTransform(-202.5,15.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFCC02").s().p("AnsvrIPlPlIvxPyg");
	this.shape_181.setTransform(-202.5,15.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1.5,1,1).p("AnyPsIAN/XIPYPmg");
	this.shape_182.setTransform(-201.8,15.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFCC02").s().p("AnlvrIPYPmIvlPyg");
	this.shape_183.setTransform(-201.8,15.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1.5,1,1).p("AnsPtIAN/ZIPMPog");
	this.shape_184.setTransform(-201.1,15);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFCC02").s().p("AnfvsIPLPoIvXPxg");
	this.shape_185.setTransform(-201.1,15);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(1.5,1,1).p("AnlPuIAM/bIO/Pqg");
	this.shape_186.setTransform(-200.4,14.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFCC02").s().p("AnZvtIO/PqIvLPxg");
	this.shape_187.setTransform(-200.4,14.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1.5,1,1).p("AnfPvIAN/dIOyPsg");
	this.shape_188.setTransform(-199.7,14.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFCC02").s().p("AnSvtIOyPrIu/Pwg");
	this.shape_189.setTransform(-199.7,14.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1.5,1,1).p("AnYPvIAM/dIOmPug");
	this.shape_190.setTransform(-199,14.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFCC02").s().p("AnMvuIOlPuIuyPvg");
	this.shape_191.setTransform(-199,14.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1.5,1,1).p("AnSPwIAN/fIOYPvg");
	this.shape_192.setTransform(-198.4,14.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFCC02").s().p("AnFvvIOYPvIulPwg");
	this.shape_193.setTransform(-198.4,14.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1.5,1,1).p("AnMPxIAN/hIOMPxg");
	this.shape_194.setTransform(-197.5,14.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFCC02").s().p("Am/vwIOMPxIuZPwg");
	this.shape_195.setTransform(-197.5,14.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1.5,1,1).p("AnGPxIAN/hIN/Pyg");
	this.shape_196.setTransform(-196.6,14.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFCC02").s().p("Am5vwIN/PyIuMPvg");
	this.shape_197.setTransform(-196.6,14.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1.5,1,1).p("Am/PyIAN/jINyP1g");
	this.shape_198.setTransform(-195.8,14.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFCC02").s().p("AmyvxINyP1It/Pug");
	this.shape_199.setTransform(-195.8,14.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(1.5,1,1).p("Am5PzIAN/lINmP3g");
	this.shape_200.setTransform(-194.9,14.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFCC02").s().p("AmsvyINmP3ItzPug");
	this.shape_201.setTransform(-194.9,14.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1.5,1,1).p("AmyP0IAN/nINZP5g");
	this.shape_202.setTransform(-194,14);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFCC02").s().p("AmlvyINZP4ItnPtg");
	this.shape_203.setTransform(-194,14);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1.5,1,1).p("AmsP0IAN/nINMP6g");
	this.shape_204.setTransform(-193.2,13.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFCC02").s().p("AmfvzINMP6ItZPtg");
	this.shape_205.setTransform(-193.2,13.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(1.5,1,1).p("AmmP1IAO/pIM/P9g");
	this.shape_206.setTransform(-192.3,13.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFCC02").s().p("AmZv0INAP9ItNPsg");
	this.shape_207.setTransform(-192.3,13.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(1.5,1,1).p("AmgP2IAO/rIMyP/g");
	this.shape_208.setTransform(-191.4,13.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFCC02").s().p("AmRv1IMyP/ItBPsg");
	this.shape_209.setTransform(-191.4,13.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(1.5,1,1).p("AmZP2IAO/rIMlP/g");
	this.shape_210.setTransform(-190.6,13.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFCC02").s().p("AmLv1IMlQAIszPrg");
	this.shape_211.setTransform(-190.6,13.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1.5,1,1).p("AmTP3IAO/tIMZQCg");
	this.shape_212.setTransform(-189.7,13.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFCC02").s().p("AmFv2IMZQCIsnPrg");
	this.shape_213.setTransform(-189.7,13.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(1.5,1,1).p("AmNP4IAP/vIMMQEg");
	this.shape_214.setTransform(-188.8,13.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFCC02").s().p("Al+v3IMLQEIsaPrg");
	this.shape_215.setTransform(-188.8,13.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(1.5,1,1).p("AmGP5IAO/xIL/QGg");
	this.shape_216.setTransform(-188,13.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFCC02").s().p("Al4v3IL/QFIsNPrg");
	this.shape_217.setTransform(-188,13.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(1.5,1,1).p("AmAP5IAO/xILzQHg");
	this.shape_218.setTransform(-187.1,13.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFCC02").s().p("Alyv4ILzQHIsBPqg");
	this.shape_219.setTransform(-187.1,13.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1.5,1,1).p("Al5P6IAO/zILlQKg");
	this.shape_220.setTransform(-186.2,13.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFCC02").s().p("Alrv5ILlQJIr0Pqg");
	this.shape_221.setTransform(-186.2,13.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(1.5,1,1).p("AlzP7IAO/1ILZQMg");
	this.shape_222.setTransform(-185.4,12.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFCC02").s().p("Allv6ILZQMIrnPpg");
	this.shape_223.setTransform(-185.4,12.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(1.5,1,1).p("AltP7IAO/1ILNQNg");
	this.shape_224.setTransform(-184.5,12.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFCC02").s().p("Alfv7ILNQOIrbPpg");
	this.shape_225.setTransform(-184.5,12.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(1.5,1,1).p("AlnP8IAP/3IK/QPg");
	this.shape_226.setTransform(-183.6,12.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFCC02").s().p("AlYv7ILAQPIrPPog");
	this.shape_227.setTransform(-183.6,12.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(1.5,1,1).p("AlgP9IAO/5IKzQRg");
	this.shape_228.setTransform(-182.8,12.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFCC02").s().p("AlSv8IKzQRIrBPog");
	this.shape_229.setTransform(-182.8,12.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(1.5,1,1).p("AlaP+IAP/7IKmQUg");
	this.shape_230.setTransform(-181.9,12.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFCC02").s().p("AlLv8IKmQTIq1Png");
	this.shape_231.setTransform(-181.9,12.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(1.5,1,1).p("AlTP+IAP/7IKZQVg");
	this.shape_232.setTransform(-181,12.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFCC02").s().p("AlEv9IKZQVIqpPmg");
	this.shape_233.setTransform(-181,12.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(1.5,1,1).p("Ak+v+IKMQXIqbPmg");
	this.shape_234.setTransform(-180.2,12.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFCC02").s().p("Ak+v+IKMQXIqbPmg");
	this.shape_235.setTransform(-180.2,12.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(1.5,1,1).p("AlTP/IAO/9IKZQWg");
	this.shape_236.setTransform(-180.9,12.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFCC02").s().p("AlFv9IKZQVIqnPng");
	this.shape_237.setTransform(-180.9,12.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(1.5,1,1).p("AlZP+IAP/7IKkQUg");
	this.shape_238.setTransform(-181.7,12.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFCC02").s().p("AlKv8IKkQTIqzPng");
	this.shape_239.setTransform(-181.7,12.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(1.5,1,1).p("AlfP9IAO/5IKxQRg");
	this.shape_240.setTransform(-182.5,12.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFCC02").s().p("AlRv8IKxQSIq/Png");
	this.shape_241.setTransform(-182.5,12.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(1.5,1,1).p("AllP8IAO/3IK9QPg");
	this.shape_242.setTransform(-183.2,12.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFCC02").s().p("AlXv7IK9QPIrLPog");
	this.shape_243.setTransform(-183.2,12.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(1.5,1,1).p("AlrP8IAO/3ILJQPg");
	this.shape_244.setTransform(-184,12.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFCC02").s().p("Aldv7ILJQPIrXPog");
	this.shape_245.setTransform(-184,12.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(1.5,1,1).p("AlxP7IAO/1ILWQNg");
	this.shape_246.setTransform(-184.8,12.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFCC02").s().p("Aljv6ILVQNIrkPog");
	this.shape_247.setTransform(-184.8,12.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(1.5,1,1).p("Al3P6IAN/zILjQKg");
	this.shape_248.setTransform(-185.5,13);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFCC02").s().p("Alpv5ILiQKIrxPpg");
	this.shape_249.setTransform(-185.5,13);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(1.5,1,1).p("Al+P6IAP/zILuQJg");
	this.shape_250.setTransform(-186.3,13.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFCC02").s().p("Alvv5ILtQJIr8Pqg");
	this.shape_251.setTransform(-186.3,13.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(1.5,1,1).p("AmDP5IAN/xIL6QHg");
	this.shape_252.setTransform(-187.1,13.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFCC02").s().p("Al2v4IL7QHIsJPqg");
	this.shape_253.setTransform(-187.1,13.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(1.5,1,1).p("AmKP4IAP/vIMGQFg");
	this.shape_254.setTransform(-187.9,13.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFCC02").s().p("Al7v3IMGQFIsVPqg");
	this.shape_255.setTransform(-187.9,13.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(1.5,1,1).p("AmQP4IAO/vIMSQDg");
	this.shape_256.setTransform(-188.6,13.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFCC02").s().p("AmCv3IMTQDIsgPsg");
	this.shape_257.setTransform(-188.6,13.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(1.5,1,1).p("AmWP3IAO/tIMfQBg");
	this.shape_258.setTransform(-189.4,13.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFCC02").s().p("AmIv2IMeQBIsrPsg");
	this.shape_259.setTransform(-189.4,13.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(1.5,1,1).p("AmcP2IAO/rIMrP/g");
	this.shape_260.setTransform(-190.2,13.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFCC02").s().p("AmOv1IMrP/Is5Psg");
	this.shape_261.setTransform(-190.2,13.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(1.5,1,1).p("AmiP2IAO/rIM2P+g");
	this.shape_262.setTransform(-190.9,13.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFCC02").s().p("AmUv0IM2P9ItEPtg");
	this.shape_263.setTransform(-190.9,13.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(1.5,1,1).p("AmoP1IAO/pINDP8g");
	this.shape_264.setTransform(-191.7,13.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFCC02").s().p("Amav0INDP8ItRPtg");
	this.shape_265.setTransform(-191.7,13.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(1.5,1,1).p("AmuP0IAO/nINPP6g");
	this.shape_266.setTransform(-192.5,13.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFCC02").s().p("AmgvzINPP6ItdPtg");
	this.shape_267.setTransform(-192.5,13.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(1.5,1,1).p("Am0P0IAO/nINbP4g");
	this.shape_268.setTransform(-193.3,14.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFCC02").s().p("AmmvzINbP4ItpPug");
	this.shape_269.setTransform(-193.3,14.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(1.5,1,1).p("Am6PzIAN/lINoP3g");
	this.shape_270.setTransform(-194,14.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFCC02").s().p("AmtvyINoP3It1Pug");
	this.shape_271.setTransform(-194,14.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(1.5,1,1).p("AnAPyIAO/jINzP0g");
	this.shape_272.setTransform(-194.8,14.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFCC02").s().p("AmyvxINzP0IuBPvg");
	this.shape_273.setTransform(-194.8,14.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(1.5,1,1).p("AnGPxIAN/hIOAPyg");
	this.shape_274.setTransform(-195.6,14.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFCC02").s().p("Am5vwIOAPyIuNPvg");
	this.shape_275.setTransform(-195.6,14.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(1.5,1,1).p("AnYPwIAN/fIOkPvg");
	this.shape_276.setTransform(-197.9,14.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFCC02").s().p("AnLvvIOkPvIuxPvg");
	this.shape_277.setTransform(-197.9,14.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(1.5,1,1).p("AnePvIAN/dIOwPsg");
	this.shape_278.setTransform(-198.6,14.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFCC02").s().p("AnRvuIOwPsIu9Pxg");
	this.shape_279.setTransform(-198.6,14.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(1.5,1,1).p("AnkPuIAM/bIO9Pqg");
	this.shape_280.setTransform(-199.4,14.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFCC02").s().p("AnYvtIO9PqIvJPxg");
	this.shape_281.setTransform(-199.4,14.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(1.5,1,1).p("AnqPtIAM/ZIPJPog");
	this.shape_282.setTransform(-200.2,15);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFCC02").s().p("AndvsIPIPoIvVPxg");
	this.shape_283.setTransform(-200.2,15);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(1.5,1,1).p("AnwPtIAM/ZIPVPng");
	this.shape_284.setTransform(-200.9,15.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFCC02").s().p("AnjvsIPUPnIvhPyg");
	this.shape_285.setTransform(-200.9,15.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(1.5,1,1).p("An2PsIAM/XIPhPlg");
	this.shape_286.setTransform(-201.7,15.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFCC02").s().p("AnqvrIPhPlIvtPyg");
	this.shape_287.setTransform(-201.7,15.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(1.5,1,1).p("An8PrIAM/VIPtPjg");
	this.shape_288.setTransform(-202.5,15.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFCC02").s().p("AnwvqIPtPjIv5Pyg");
	this.shape_289.setTransform(-202.5,15.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(1.5,1,1).p("AoCPrIAM/VIP5Pig");
	this.shape_290.setTransform(-203.3,15.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFCC02").s().p("An2vqIP5PiIwFPzg");
	this.shape_291.setTransform(-203.3,15.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(1.5,1,1).p("AoIPqIAM/TIQFPgg");
	this.shape_292.setTransform(-204,15.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFCC02").s().p("An8vpIQFPgIwRPzg");
	this.shape_293.setTransform(-204,15.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(1.5,1,1).p("AoOPpIAL/RIQSPdg");
	this.shape_294.setTransform(-204.8,15.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFCC02").s().p("AoCvoIQRPdIwdP0g");
	this.shape_295.setTransform(-204.8,15.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(1.5,1,1).p("AoUPpIAM/RIQdPcg");
	this.shape_296.setTransform(-205.6,15.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFCC02").s().p("AoIvoIQdPcIwpP1g");
	this.shape_297.setTransform(-205.6,15.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(1.5,1,1).p("AoaPoIAL/PIQqPag");
	this.shape_298.setTransform(-206.3,15.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFCC02").s().p("AoPvnIQqPaIw1P1g");
	this.shape_299.setTransform(-206.3,15.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(1.5,1,1).p("AogPnIAM/NIQ1PYg");
	this.shape_300.setTransform(-207.1,15.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFCC02").s().p("AoUvmIQ1PYIxBP1g");
	this.shape_301.setTransform(-207.1,15.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(1.5,1,1).p("AomPnIAL/NIRCPWg");
	this.shape_302.setTransform(-207.9,16);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFCC02").s().p("AobvmIRCPWIxNP2g");
	this.shape_303.setTransform(-207.9,16);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(1.5,1,1).p("AotPmIAM/LIROPUg");
	this.shape_304.setTransform(-208.6,16.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFCC02").s().p("AohvlIROPUIxaP3g");
	this.shape_305.setTransform(-208.6,16.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(1.5,1,1).p("AoyPlIAL/JIRaPTg");
	this.shape_306.setTransform(-209.4,16.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFCC02").s().p("AonvkIRaPTIxlP2g");
	this.shape_307.setTransform(-209.4,16.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(1.5,1,1).p("Ao4PlIAL/JIRmPRg");
	this.shape_308.setTransform(-210.2,16.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFCC02").s().p("AotvjIRmPQIxxP3g");
	this.shape_309.setTransform(-210.2,16.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(1.5,1,1).p("Ao/PkIAM/HIRyPPg");
	this.shape_310.setTransform(-210.9,16.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFCC02").s().p("AozvjIRzPPIx+P4g");
	this.shape_311.setTransform(-210.9,16.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(1.5,1,1).p("ApEPjIAL/FIR/PNg");
	this.shape_312.setTransform(-211.7,16.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFCC02").s().p("Ao5viIR+PNIyKP4g");
	this.shape_313.setTransform(-211.7,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:-212.5,y:17.1}},{t:this.shape,p:{x:-212.5,y:17.1}}]}).to({state:[{t:this.shape_3,p:{x:-211.5,y:17.1}},{t:this.shape_2}]},1).to({state:[{t:this.shape_5,p:{x:-210.4,y:17.1}},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_5,p:{x:-209.4,y:16.6}},{t:this.shape_154}]},1).to({state:[{t:this.shape_3,p:{x:-210.4,y:16.6}},{t:this.shape_155}]},1).to({state:[{t:this.shape_1,p:{x:-211.5,y:16.6}},{t:this.shape,p:{x:-211.5,y:16.6}}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193,p:{x:-198.4}},{t:this.shape_192,p:{x:-198.4}}]},1).to({state:[{t:this.shape_195,p:{x:-197.5,y:14.4}},{t:this.shape_194,p:{x:-197.5,y:14.4}}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_195,p:{x:-196.3,y:14.5}},{t:this.shape_194,p:{x:-196.3,y:14.5}}]},1).to({state:[{t:this.shape_193,p:{x:-197.1}},{t:this.shape_192,p:{x:-197.1}}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_297},{t:this.shape_296}]},1).to({state:[{t:this.shape_299},{t:this.shape_298}]},1).to({state:[{t:this.shape_301},{t:this.shape_300}]},1).to({state:[{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_307},{t:this.shape_306}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},1).to({state:[{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_313},{t:this.shape_312}]},1).to({state:[{t:this.shape_1,p:{x:-212.5,y:16.6}},{t:this.shape,p:{x:-212.5,y:16.6}}]},1).wait(1));

	// finBottom01
	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(1.5,1,1).p("AJdoPQhcDejVDWQg1A1g8A0QkuEInpD7QDTkiBvjhQAbg2AVgzQBWjRgOiQIFzgvQF6gsASAIg");
	this.shape_314.setTransform(-14.1,158.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFCC00").s().p("AkaAOQAbg2AWgzQBVjRgOiQIFzgvQF6gsASAIQhcDejVDWQg1A1g8A0QkuEInpD7QDUkiBujhg");
	this.shape_315.setTransform(-14.1,158.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(1.5,1,1).p("ApcILQDTkfBvjeQAbg2AVgyQBWjPgOiOIFzguQF6gsASAIQhcDbjVDUQg1A0g8A0QkuEEnpD5g");
	this.shape_316.setTransform(-14.1,158.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFCC00").s().p("AkaAOQAbg2AWgyQBVjPgOiOIFzguQF6gsASAIQhcDbjVDUQg1A0g8A0QkuEEnpD5QDUkfBujeg");
	this.shape_317.setTransform(-14.1,158.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(1.5,1,1).p("ApcIEQDTkaBvjcQAbg1AVgyQBWjMgOiNIFzguQF6grASAJQhcDYjVDRQg1A0g8AzQkuEBnpD1g");
	this.shape_318.setTransform(-14.1,157.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFCC00").s().p("AkaAOQAbg1AWgyQBVjMgOiNIFzguQF6grASAJQhcDYjVDRQg1A0g8AzQkuEBnpD1QDUkaBujcg");
	this.shape_319.setTransform(-14.1,157.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(1.5,1,1).p("ApcH+QDTkXBvjZQAbg1AVgxQBWjKgOiLIFzgtQF6gqASAIQhcDWjVDOQg1Azg8AzQkuD+npDyg");
	this.shape_320.setTransform(-14.1,157.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFCC00").s().p("AkaAOQAbg1AWgxQBVjKgOiLIFzgtQF6gqASAIQhcDWjVDOQg1Azg8AzQkuD+npDyQDUkXBujZg");
	this.shape_321.setTransform(-14.1,157.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(1.5,1,1).p("ApcH4QDTkUBvjWQAbg0AVgxQBWjHgOiJIFzgtQF6gqASAIQhcDTjVDMQg1Azg8AyQkuD7npDvg");
	this.shape_322.setTransform(-14.1,156.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFCC00").s().p("AkaAOQAbg0AWgxQBVjHgOiJIFzgtQF6gqASAIQhcDTjVDMQg1Azg8AyQkuD7npDvQDUkUBujWg");
	this.shape_323.setTransform(-14.1,156.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHyQDTkRBvjUQAbgzAVgwQBWjEgOiIIFzgsQF6gqASAIQhcDRjVDJQg1Ayg8AxQkuD4npDtg");
	this.shape_324.setTransform(-14.1,155.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFCC00").s().p("AkaANQAbgzAWgwQBVjEgOiIIFzgsQF6gqASAIQhcDRjVDJQg1Ayg8AxQkuD4npDtQDUkRBujUg");
	this.shape_325.setTransform(-14.1,155.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHsQDTkOBvjRQAbgyAVgwQBWjCgOiGIFzgrQF6gpASAIQhcDNjVDHQg1Ayg8AwQkuD1npDqg");
	this.shape_326.setTransform(-14.1,155.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFCC00").s().p("AkaANQAbgyAWgwQBVjCgOiGIFzgrQF6gpASAIQhcDNjVDHQg1Ayg8AwQkuD1npDqQDUkOBujRg");
	this.shape_327.setTransform(-14.1,155.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHlQDTkJBvjPQAbgyAVgvQBWi/gOiFIFzgrQF6goASAIQhcDLjVDEQg1Axg8AwQkuDynpDmg");
	this.shape_328.setTransform(-14.1,154.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFCC00").s().p("AkaANQAbgyAWgvQBVi/gOiFIFzgrQF6goASAIQhcDLjVDEQg1Axg8AwQkuDynpDmQDUkJBujPg");
	this.shape_329.setTransform(-14.1,154.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHfQDTkGBvjMQAbgxAVgvQBWi9gOiCIFzgrQF6goASAIQhcDJjVDBQg1Axg8AvQkuDvnpDjg");
	this.shape_330.setTransform(-14.1,154.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFCC00").s().p("AkaANQAbgxAWgvQBVi9gOiCIFzgrQF6goASAIQhcDJjVDBQg1Axg8AvQkuDvnpDjQDUkGBujMg");
	this.shape_331.setTransform(-14.1,154.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHZQDTkDBvjJQAbgxAVgtQBWi7gOiBIFzgqQF6gnASAHQhcDGjVDAQg1Avg8AvQkuDrnpDhg");
	this.shape_332.setTransform(-14.1,153.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFCC00").s().p("AkaANQAbgxAWgtQBVi7gOiBIFzgqQF6gnASAHQhcDGjVDAQg1Avg8AvQkuDrnpDhQDUkDBujJg");
	this.shape_333.setTransform(-14.1,153.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHTQDTkABvjGQAbgwAVgtQBWi5gOh/IFzgpQF6gnASAHQhcDEjVC9Qg1Aug8AvQkuDonpDeg");
	this.shape_334.setTransform(-14.1,152.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFCC00").s().p("AkaANQAbgwAWgtQBVi5gOh/IFzgpQF6gnASAHQhcDEjVC9Qg1Aug8AvQkuDonpDeQDUkABujGg");
	this.shape_335.setTransform(-14.1,152.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHMQDTj8BvjDQAbgwAVgsQBWi2gOh+IFzgpQF6gmASAIQhcDBjVC6Qg1Aug8AuQkuDlnpDag");
	this.shape_336.setTransform(-14.1,152.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFCC00").s().p("AkaANQAbgwAWgsQBVi2gOh+IFzgpQF6gmASAIQhcDBjVC6Qg1Aug8AuQkuDlnpDaQDUj8BujDg");
	this.shape_337.setTransform(-14.1,152.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHGQDTj4BvjCQAbguAVgsQBWi0gOh7IFzgpQF6glASAHQhcC+jVC4Qg1Atg8AtQkuDjnpDXg");
	this.shape_338.setTransform(-14.1,151.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFCC00").s().p("AkaAMQAbguAWgsQBVi0gOh7IFzgpQF6glASAHQhcC+jVC4Qg1Atg8AtQkuDjnpDXQDUj4BujCg");
	this.shape_339.setTransform(-14.1,151.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHAQDTj1Bvi/QAbguAVgrQBWixgOh6IFzgoQF6glASAHQhcC8jVC1Qg1Atg8AsQkuDfnpDVg");
	this.shape_340.setTransform(-14.1,151.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFCC00").s().p("AkaAMQAbguAWgrQBVixgOh6IFzgoQF6glASAHQhcC8jVC1Qg1Atg8AsQkuDfnpDVQDUj1Bui/g");
	this.shape_341.setTransform(-14.1,151.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG6QDTjyBvi8QAbgtAVgrQBWivgOh4IFzgnQF6glASAHQhcC5jVCzQg1Asg8AsQkuDcnpDSg");
	this.shape_342.setTransform(-14.1,150.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFCC00").s().p("AkaAMQAbgtAWgrQBVivgOh4IFzgnQF6glASAHQhcC5jVCzQg1Asg8AsQkuDcnpDSQDUjyBui8g");
	this.shape_343.setTransform(-14.1,150.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG0QDTjvBvi5QAbgtAVgqQBWisgOh3IFzgmQF6gkASAHQhcC2jVCwQg1Asg8ArQkuDZnpDPg");
	this.shape_344.setTransform(-14.1,149.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFCC00").s().p("AkaAMQAbgtAWgqQBVisgOh3IFzgmQF6gkASAHQhcC2jVCwQg1Asg8ArQkuDZnpDPQDUjvBui5g");
	this.shape_345.setTransform(-14.1,149.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGtQDTjrBvi2QAbgsAVgqQBWipgOh1IFzgnQF6gjASAHQhcC0jVCtQg1Arg8ArQkuDWnpDLg");
	this.shape_346.setTransform(-14.1,149.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFCC00").s().p("AkaAMQAbgsAWgqQBVipgOh1IFzgnQF6gjASAHQhcC0jVCtQg1Arg8ArQkuDWnpDLQDUjrBui2g");
	this.shape_347.setTransform(-14.1,149.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGnQDTjnBvi0QAbgsAVgpQBWingOhzIFzgmQF6gjASAHQhcCxjVCrQg1Arg8AqQkuDSnpDJg");
	this.shape_348.setTransform(-14.1,148.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFCC00").s().p("AkaAMQAbgsAWgpQBVingOhzIFzgmQF6gjASAHQhcCxjVCrQg1Arg8AqQkuDSnpDJQDUjnBui0g");
	this.shape_349.setTransform(-14.1,148.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGhQDTjkBviyQAbgqAVgpQBWikgOhyIFzglQF6giASAGQhcCvjVCoQg1Aqg8ApQkuDQnpDGg");
	this.shape_350.setTransform(-14.1,148.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFCC00").s().p("AkaALQAbgqAWgpQBVikgOhyIFzglQF6giASAGQhcCvjVCoQg1Aqg8ApQkuDQnpDGQDUjkBuiyg");
	this.shape_351.setTransform(-14.1,148.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGbQDTjhBvivQAbgqAVgoQBWiigOhwIFzgkQF6giASAGQhcCsjVCmQg1Aqg8AoQkuDNnpDDg");
	this.shape_352.setTransform(-14.1,147.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFCC00").s().p("AkaALQAbgqAWgoQBViigOhwIFzgkQF6giASAGQhcCsjVCmQg1Aqg8AoQkuDNnpDDQDUjhBuivg");
	this.shape_353.setTransform(-14.1,147.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGVQDTjeBvisQAbgpAVgnQBWiggOhuIFzgkQF6giASAHQhcCpjVCkQg1Aog8AoQkuDKnpDAg");
	this.shape_354.setTransform(-14.1,146.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgnQBViggOhuIFzgkQF6giASAHQhcCpjVCkQg1Aog8AoQkuDKnpDAQDUjeBuisg");
	this.shape_355.setTransform(-14.1,146.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGOQDTjaBvipQAbgpAVgmQBWiegOhsIFzgkQF6ghASAHQhcCnjVChQg1Aog8AnQkuDGnpC9g");
	this.shape_356.setTransform(-14.1,146.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgmQBViegOhsIFzgkQF6ghASAHQhcCnjVChQg1Aog8AnQkuDGnpC9QDUjaBuipg");
	this.shape_357.setTransform(-14.1,146.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGIQDTjXBvimQAbgoAVgmQBWibgOhrIFzgjQF6ggASAGQhcCkjVCfQg1Ang8AnQkuDDnpC6g");
	this.shape_358.setTransform(-14.1,145.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFCC00").s().p("AkaALQAbgoAWgmQBVibgOhrIFzgjQF6ggASAGQhcCkjVCfQg1Ang8AnQkuDDnpC6QDUjXBuimg");
	this.shape_359.setTransform(-14.1,145.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGCQDTjUBvikQAbgnAVgmQBWiYgOhpIFzgiQF6ggASAGQhcChjVCcQg1Ang8AmQkuDAnpC4g");
	this.shape_360.setTransform(-14.1,145.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFCC00").s().p("AkaAKQAbgnAWgmQBViYgOhpIFzgiQF6ggASAGQhcChjVCcQg1Ang8AmQkuDAnpC4QDUjUBuikg");
	this.shape_361.setTransform(-14.1,145.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(1.5,1,1).p("ApcF8QDTjQBvihQAbgnAVglQBWiWgOhnIFzgiQF6ggASAGQhcCgjVCZQg1Amg8AmQkuC9npC0g");
	this.shape_362.setTransform(-14.1,144.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFCC00").s().p("AkaALQAbgnAWglQBViWgOhnIFzgiQF6ggASAGQhcCgjVCZQg1Amg8AmQkuC9npC0QDUjQBuihg");
	this.shape_363.setTransform(-14.1,144.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(1.5,1,1).p("ApcF1QDTjMBvifQAbgmAVglQBWiTgOhmIFzghQF6gfASAGQhcCdjVCWQg1Amg8AlQkuC6npCxg");
	this.shape_364.setTransform(-14.1,143.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFCC00").s().p("AkaAKQAbgmAWglQBViTgOhmIFzghQF6gfASAGQhcCdjVCWQg1Amg8AlQkuC6npCxQDUjMBuifg");
	this.shape_365.setTransform(-14.1,143.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFvQDTjJBvicQAbglAVgkQBWiRgOhkIFzghQF6geASAGQhcCajVCUQg1Alg8AkQkuC3npCug");
	this.shape_366.setTransform(-14.1,143.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFCC00").s().p("AkaAKQAbglAWgkQBViRgOhkIFzghQF6geASAGQhcCajVCUQg1Alg8AkQkuC3npCuQDUjJBuicg");
	this.shape_367.setTransform(-14.1,143.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFpQDTjGBviZQAbglAVgjQBWiOgOhjIFzggQF6geASAGQhcCXjVCSQg1Alg8AjQkuC0npCrg");
	this.shape_368.setTransform(-14.1,142.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFCC00").s().p("AkaAKQAbglAWgjQBViPgOhiIFzggQF6geASAGQhcCXjVCSQg1Akg8AkQkuCznpCsQDUjGBuiZg");
	this.shape_369.setTransform(-14.1,142.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFjQDTjDBviXQAbgkAVgiQBWiMgOhhIFzgfQF6geASAGQhcCUjVCQQg1Akg8AiQkuCxnpCpg");
	this.shape_370.setTransform(-14.1,142.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFCC00").s().p("AkaAJQAbgkAWgiQBViMgOhhIFzgfQF6geASAGQhcCUjVCQQg1Akg8AiQkuCxnpCpQDUjDBuiXg");
	this.shape_371.setTransform(-14.1,142.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFcQDTi/BviUQAbgjAVgiQBWiKgOhfIFzgfQF6gcASAFQhcCSjVCNQg1Ajg8AiQkuCunpClg");
	this.shape_372.setTransform(-14.1,141.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFCC00").s().p("AkaAJQAbgjAWgiQBViKgOhfIFzgfQF6gcASAFQhcCSjVCNQg1Ajg8AiQkuCunpClQDUi/BuiUg");
	this.shape_373.setTransform(-14.1,141.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFWQDTi7BviSQAbgjAVghQBWiHgOhdIFzgfQF6gcASAFQhcCQjVCKQg1Aig8AiQkuCrnpCig");
	this.shape_374.setTransform(-14.1,140.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFCC00").s().p("AkaAJQAbgjAWghQBViHgOhdIFzgfQF6gcASAFQhcCQjVCKQg1Aig8AiQkuCrnpCiQDUi7BuiSg");
	this.shape_375.setTransform(-14.1,140.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFQQDTi4BviPQAbgiAVghQBWiFgOhbIFzgeQF6gcASAGQhcCMjVCIQg1Aig8AhQkuCnnpCgg");
	this.shape_376.setTransform(-14.1,140.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFCC00").s().p("AkaAJQAbgiAWghQBViFgOhbIFzgeQF6gcASAGQhcCMjVCIQg1Aig8AhQkuCnnpCgQDUi4BuiPg");
	this.shape_377.setTransform(-14.1,140.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFKQDTi1BviMQAbgiAVggQBWiCgOhaIFzgdQF6gbASAFQhcCKjVCFQg1Ahg8AhQkuCknpCdg");
	this.shape_378.setTransform(-14.1,139.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFCC00").s().p("AkaAJQAbgiAWggQBViCgOhaIFzgdQF6gbASAFQhcCKjVCFQg1Ahg8AhQkuCknpCdQDUi1BuiMg");
	this.shape_379.setTransform(-14.1,139.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFEQDTixBviKQAbghAVgfQBWiAgOhYIFzgdQF6gbASAFQhcCIjVCDQg1Agg8AgQkuChnpCag");
	this.shape_380.setTransform(-14.1,139.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFCC00").s().p("AkaAJQAbghAWgfQBViAgOhYIFzgdQF6gbASAFQhcCIjVCDQg1Agg8AgQkuChnpCaQDUixBuiKg");
	this.shape_381.setTransform(-14.1,139.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(1.5,1,1).p("ApcE9QDTiuBviGQAbghAVgfQBWh9gOhWIFzgdQF6gaASAFQhcCFjVCAQg1Agg8AgQkuCenpCWg");
	this.shape_382.setTransform(-14.1,138.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFCC00").s().p("AkaAJQAbghAWgfQBVh9gOhWIFzgdQF6gaASAFQhcCFjVCAQg1Agg8AgQkuCenpCWQDUiuBuiGg");
	this.shape_383.setTransform(-14.1,138.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(1.5,1,1).p("ApcE3QDTirBviEQAbgfAVgfQBWh6gOhVIFzgcQF6gaASAFQhcCDjVB9Qg1Agg8AeQkuCbnpCUg");
	this.shape_384.setTransform(-14.1,137.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFCC00").s().p("AkaAIQAbgfAWgfQBVh6gOhVIFzgcQF6gaASAFQhcCDjVB9Qg1Agg8AeQkuCbnpCUQDUirBuiEg");
	this.shape_385.setTransform(-14.1,137.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(1.5,1,1).p("ApcExQDTinBviCQAbgfAVgeQBWh4gOhTIFzgbQF6gZASAFQhcB/jVB7Qg1Afg8AeQkuCYnpCRg");
	this.shape_386.setTransform(-14.1,137.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFCC00").s().p("AkaAIQAbgfAWgeQBVh4gOhTIFzgbQF6gZASAFQhcB/jVB7Qg1Afg8AeQkuCYnpCRQDUinBuiCg");
	this.shape_387.setTransform(-14.1,137.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(1.5,1,1).p("ApcErQDTikBvh/QAbgeAVgdQBWh2gOhSIFzgaQF6gZASAFQhcB9jVB5Qg1Aeg8AdQkuCVnpCOg");
	this.shape_388.setTransform(-14.1,136.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFCC00").s().p("AkaAIQAbgeAWgdQBVh2gOhSIFzgaQF6gZASAFQhcB9jVB5Qg1Aeg8AdQkuCVnpCOQDUikBuh/g");
	this.shape_389.setTransform(-14.1,136.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(1.5,1,1).p("ApcEkQDTigBvh8QAbgeAVgcQBWh0gOhPIFzgbQF6gYASAFQhcB7jVB2Qg1Adg8AdQkuCSnpCKg");
	this.shape_390.setTransform(-14.1,136.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFCC00").s().p("AkaAIQAbgeAWgcQBVh0gOhPIFzgbQF6gYASAFQhcB7jVB2Qg1Adg8AdQkuCSnpCKQDUigBuh8g");
	this.shape_391.setTransform(-14.1,136.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(1.5,1,1).p("AJdkdQhcB4jVB0Qg1Adg8AcQkuCOnpCIQDTidBvh5QAbgdAVgcQBWhxgOhOIFzgaQF6gXASAEg");
	this.shape_392.setTransform(-14.1,135.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFCC00").s().p("AkaAIQAbgdAWgcQBVhxgOhOIFzgaQF6gXASAEQhcB4jVB0Qg1Adg8AcQkuCOnpCIQDUidBuh5g");
	this.shape_393.setTransform(-14.1,135.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(1.5,1,1).p("ApcEoQDTijBvh9QAbgeAVgdQBWh1gOhQIFzgaQF6gZASAFQhcB8jVB3Qg1Aeg8AdQkuCTnpCNg");
	this.shape_394.setTransform(-14.1,136.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFCC00").s().p("AkaAIQAbgeAWgdQBVh1gOhQIFzgaQF6gZASAFQhcB8jVB3Qg1Aeg8AdQkuCTnpCNQDUijBuh9g");
	this.shape_395.setTransform(-14.1,136.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(1.5,1,1).p("ApcE6QDTisBviGQAbgfAVgfQBWh8gOhWIFzgcQF6gaASAFQhcCEjVB/Qg1Agg8AeQkuCdnpCVg");
	this.shape_396.setTransform(-14.1,138.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFCC00").s().p("AkaAIQAbgfAWgfQBVh8gOhWIFzgcQF6gaASAFQhcCEjVB/Qg1Agg8AeQkuCdnpCVQDUisBuiGg");
	this.shape_397.setTransform(-14.1,138.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFNQDTi3BviNQAbgiAVggQBWiEgOhbIFzgdQF6gcASAGQhcCLjVCHQg1Ahg8AhQkuCmnpCeg");
	this.shape_398.setTransform(-14.1,140);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFCC00").s().p("AkaAJQAbgiAWggQBViEgOhbIFzgdQF6gcASAGQhcCLjVCHQg1Ahg8AhQkuCmnpCeQDUi3BuiNg");
	this.shape_399.setTransform(-14.1,140);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFgQDTjBBviVQAbgkAVgiQBWiLgOhgIFzgfQF6gdASAFQhcCUjVCOQg1Ajg8AjQkuCvnpCng");
	this.shape_400.setTransform(-14.1,141.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFCC00").s().p("AkaAKQAbgkAWgiQBViLgOhgIFzgfQF6gdASAFQhcCUjVCOQg1Ajg8AjQkuCvnpCnQDUjBBuiVg");
	this.shape_401.setTransform(-14.1,141.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFyQDTjLBvidQAbgmAVgkQBWiSgOhlIFzghQF6gfASAGQhcCbjVCWQg1Alg8AlQkuC4npCwg");
	this.shape_402.setTransform(-14.1,143.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFCC00").s().p("AkaAKQAbgmAWgkQBViSgOhlIFzghQF6gfASAGQhcCbjVCWQg1Alg8AlQkuC4npCwQDUjLBuidg");
	this.shape_403.setTransform(-14.1,143.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGFQDTjVBvilQAbgoAVgmQBWiZgOhqIFzgjQF6ggASAGQhcCjjVCdQg1Ang8AnQkuDBnpC5g");
	this.shape_404.setTransform(-14.1,145.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFCC00").s().p("AkaALQAbgoAWgmQBViZgOhqIFzgjQF6ggASAGQhcCjjVCdQg1Ang8AnQkuDBnpC5QDUjVBuilg");
	this.shape_405.setTransform(-14.1,145.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGYQDTjfBviuQAbgpAVgoQBWihgOhvIFzgkQF6giASAHQhcCqjVClQg1Apg8AoQkuDLnpDCg");
	this.shape_406.setTransform(-14.1,147.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgoQBVihgOhvIFzgkQF6giASAHQhcCqjVClQg1Apg8AoQkuDLnpDCQDUjfBuiug");
	this.shape_407.setTransform(-14.1,147.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGqQDTjpBvi1QAbgsAVgpQBWipgOh0IFzgmQF6gjASAHQhcCyjVCtQg1Arg8AqQkuDUnpDKg");
	this.shape_408.setTransform(-14.1,149);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFCC00").s().p("AkaAMQAbgsAWgpQBVipgOh0IFzgmQF6gjASAHQhcCyjVCtQg1Arg8AqQkuDUnpDKQDUjpBui1g");
	this.shape_409.setTransform(-14.1,149);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG9QDTj0Bvi9QAbguAVgrQBWivgOh5IFzgoQF6glASAHQhcC7jVCzQg1Atg8AsQkuDenpDTg");
	this.shape_410.setTransform(-14.1,150.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFCC00").s().p("AkaAMQAbguAWgrQBVivgOh5IFzgoQF6glASAHQhcC7jVCzQg1Atg8AsQkuDenpDTQDUj0Bui9g");
	this.shape_411.setTransform(-14.1,150.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHQQDTj+BvjFQAbgwAVgtQBWi3gOh+IFzgpQF6gnASAIQhcDCjVC7Qg1Avg8AuQkuDnnpDcg");
	this.shape_412.setTransform(-14.1,152.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFCC00").s().p("AkaANQAbgwAWgtQBVi3gOh+IFzgpQF6gnASAIQhcDCjVC7Qg1Avg8AuQkuDnnpDcQDUj+BujFg");
	this.shape_413.setTransform(-14.1,152.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHiQDTkIBvjNQAbgxAVgvQBWi/gOiDIFzgrQF6goASAIQhcDKjVDDQg1Awg8AwQkuDwnpDlg");
	this.shape_414.setTransform(-14.1,154.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFCC00").s().p("AkaANQAbgxAWgvQBVi/gOiDIFzgrQF6goASAIQhcDKjVDDQg1Awg8AwQkuDwnpDlQDUkIBujNg");
	this.shape_415.setTransform(-14.1,154.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(1.5,1,1).p("ApcH1QDTkSBvjVQAbg0AVgwQBWjGgOiJIFzgsQF6gqASAIQhcDSjVDLQg1Ayg8AyQkuD5npDug");
	this.shape_416.setTransform(-14.1,156.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFCC00").s().p("AkaAOQAbg0AWgwQBVjGgOiJIFzgsQF6gqASAIQhcDSjVDLQg1Ayg8AyQkuD5npDuQDUkSBujVg");
	this.shape_417.setTransform(-14.1,156.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(1.5,1,1).p("ApcIHQDTkcBvjdQAbg2AVgyQBWjNgOiNIFzgvQF6grASAJQhcDZjVDSQg1A0g8A0QkuEDnpD2g");
	this.shape_418.setTransform(-14.1,158);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFCC00").s().p("AkaAOQAbg2AWgyQBVjNgOiNIFzgvQF6grASAJQhcDZjVDSQg1A0g8A0QkuEDnpD2QDUkcBujdg");
	this.shape_419.setTransform(-14.1,158);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(1.5,1,1).p("ApcIHQDTkcBvjdQAbg1AVgyQBWjNgOiNIFzgvQF6grASAJQhcDZjVDSQg1A0g8AzQkuEDnpD2g");
	this.shape_420.setTransform(-14.1,157.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFCC00").s().p("AkaAOQAbg1AWgyQBVjNgOiNIFzgvQF6grASAJQhcDZjVDSQg1A0g8AzQkuEDnpD2QDUkcBujdg");
	this.shape_421.setTransform(-14.1,157.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(1.5,1,1).p("ApcH9QDTkXBvjYQAbg1AVgxQBWjJgOiKIFzgtQF6grASAIQhcDWjVDNQg1Azg8AzQkuD9npDyg");
	this.shape_422.setTransform(-14.1,156.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFCC00").s().p("AkaAOQAbg1AWgxQBVjJgOiKIFzgtQF6grASAIQhcDWjVDNQg1Azg8AzQkuD9npDyQDUkXBujYg");
	this.shape_423.setTransform(-14.1,156.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHzQDTkRBvjUQAbg0AVgwQBWjFgOiHIFzgtQF6gpASAIQhcDRjVDJQg1Ayg8AyQkuD4npDtg");
	this.shape_424.setTransform(-14.1,155.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFCC00").s().p("AkaAOQAbg0AWgwQBVjFgOiHIFzgtQF6gpASAIQhcDRjVDJQg1Ayg8AyQkuD4npDtQDUkRBujUg");
	this.shape_425.setTransform(-14.1,155.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHoQDTkLBvjQQAbgyAVgvQBWjBgOiFIFzgsQF6goASAIQhcDMjVDGQg1Axg8AwQkuD0npDng");
	this.shape_426.setTransform(-14.1,155);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFCC00").s().p("AkaANQAbgyAWgvQBVjBgOiFIFzgsQF6goASAIQhcDMjVDGQg1Axg8AwQkuD0npDnQDUkLBujQg");
	this.shape_427.setTransform(-14.1,155);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHeQDTkGBvjLQAbgxAVgvQBWi9gOiCIFzgqQF6goASAIQhcDIjVDBQg1Awg8AwQkuDunpDjg");
	this.shape_428.setTransform(-14.1,154);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFCC00").s().p("AkaANQAbgxAWgvQBVi9gOiCIFzgqQF6goASAIQhcDIjVDBQg1Awg8AwQkuDunpDjQDUkGBujLg");
	this.shape_429.setTransform(-14.1,154);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHUQDTkABvjHQAbgwAVguQBWi5gOh/IFzgqQF6gnASAIQhcDEjVC9Qg1Avg8AvQkuDpnpDeg");
	this.shape_430.setTransform(-14.1,153);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFCC00").s().p("AkaANQAbgwAWguQBVi5gOh/IFzgqQF6gnASAIQhcDEjVC9Qg1Avg8AvQkuDpnpDeQDUkABujHg");
	this.shape_431.setTransform(-14.1,153);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHKQDTj6BvjDQAbgvAVgtQBWi1gOh8IFzgpQF6gmASAHQhcDAjVC5Qg1Aug8AuQkuDknpDZg");
	this.shape_432.setTransform(-14.1,152);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFCC00").s().p("AkaANQAbgvAWgtQBVi1gOh8IFzgpQF6gmASAHQhcDAjVC5Qg1Aug8AuQkuDknpDZQDUj6BujDg");
	this.shape_433.setTransform(-14.1,152);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG2QDTjwBvi6QAbgtAVgqQBWitgOh3IFzgnQF6glASAHQhcC4jVCxQg1Asg8ArQkuDanpDQg");
	this.shape_434.setTransform(-14.1,150.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFCC00").s().p("AkaAMQAbgtAWgqQBVitgOh3IFzgnQF6glASAHQhcC4jVCxQg1Asg8ArQkuDanpDQQDUjwBui6g");
	this.shape_435.setTransform(-14.1,150.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGsQDTjqBvi2QAbgsAVgqQBWipgOh0IFzgmQF6gkASAHQhcCzjVCtQg1Arg8ArQkuDVnpDLg");
	this.shape_436.setTransform(-14.1,149.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFCC00").s().p("AkaAMQAbgsAWgqQBVipgOh0IFzgmQF6gkASAHQhcCzjVCtQg1Arg8ArQkuDVnpDLQDUjqBui2g");
	this.shape_437.setTransform(-14.1,149.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGiQDTjlBviyQAbgrAVgoQBWilgOhyIFzglQF6gjASAHQhcCvjVCpQg1Aqg8ApQkuDQnpDHg");
	this.shape_438.setTransform(-14.1,148.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFCC00").s().p("AkaALQAbgrAWgoQBVilgOhyIFzglQF6gjASAHQhcCvjVCpQg1Aqg8ApQkuDQnpDHQDUjlBuiyg");
	this.shape_439.setTransform(-14.1,148.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGNQDTjZBvipQAbgpAVgmQBWidgOhtIFzgjQF6ghASAGQhcCnjVChQg1Aog8AnQkuDGnpC8g");
	this.shape_440.setTransform(-14.1,146.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgmQBVidgOhtIFzgjQF6ghASAGQhcCnjVChQg1Aog8AnQkuDGnpC8QDUjZBuipg");
	this.shape_441.setTransform(-14.1,146.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGDQDTjUBvilQAbgnAVgmQBWiZgOhpIFzgjQF6ggASAGQhcCjjVCcQg1Ang8AmQkuDBnpC4g");
	this.shape_442.setTransform(-14.1,145.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFCC00").s().p("AkaAKQAbgnAWgmQBViZgOhpIFzgjQF6ggASAGQhcCjjVCcQg1Ang8AmQkuDBnpC4QDUjUBuilg");
	this.shape_443.setTransform(-14.1,145.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(1.5,1,1).p("ApcF5QDTjOBvihQAbgmAVglQBWiVgOhnIFzghQF6gfASAGQhcCejVCYQg1Amg8AlQkuC8npCzg");
	this.shape_444.setTransform(-14.1,144.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFCC00").s().p("AkaAKQAbgmAWglQBViVgOhnIFzghQF6gfASAGQhcCejVCYQg1Amg8AlQkuC8npCzQDUjOBuihg");
	this.shape_445.setTransform(-14.1,144.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFlQDTjEBviXQAbglAVgiQBWiNgOhiIFzgfQF6geASAGQhcCVjVCRQg1Akg8AjQkuCynpCpg");
	this.shape_446.setTransform(-14.1,142.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFCC00").s().p("AkaAKQAbglAWgiQBViNgOhiIFzgfQF6geASAGQhcCVjVCRQg1Akg8AjQkuCynpCpQDUjEBuiXg");
	this.shape_447.setTransform(-14.1,142.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFbQDTi+BviUQAbgjAVgiQBWiJgOheIFzgfQF6gdASAGQhcCRjVCMQg1Ajg8AiQkuCtnpClg");
	this.shape_448.setTransform(-14.1,141.4);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFCC00").s().p("AkaAJQAbgjAWgiQBViJgOheIFzgfQF6gdASAGQhcCRjVCMQg1Ajg8AiQkuCtnpClQDUi+BuiUg");
	this.shape_449.setTransform(-14.1,141.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFRQDTi5BviPQAbgiAVghQBWiFgOhcIFzgeQF6gbASAFQhcCNjVCIQg1Aig8AhQkuConpCgg");
	this.shape_450.setTransform(-14.1,140.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFCC00").s().p("AkaAJQAbgiAWghQBViFgOhcIFzgeQF6gbASAFQhcCNjVCIQg1Aig8AhQkuConpCgQDUi5BuiPg");
	this.shape_451.setTransform(-14.1,140.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFHQDTizBviLQAbghAVggQBWiBgOhZIFzgdQF6gbASAFQhcCJjVCEQg1Ahg8AgQkuCinpCcg");
	this.shape_452.setTransform(-14.1,139.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFCC00").s().p("AkaAJQAbghAWggQBViBgOhZIFzgdQF6gbASAFQhcCJjVCEQg1Ahg8AgQkuCinpCcQDUizBuiLg");
	this.shape_453.setTransform(-14.1,139.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(1.5,1,1).p("ApcE9QDTiuBviGQAbggAVgfQBWh9gOhXIFzgcQF6gaASAFQhcCFjVCAQg1Agg8AfQkuCdnpCXg");
	this.shape_454.setTransform(-14.1,138.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFCC00").s().p("AkaAJQAbggAWgfQBVh9gOhXIFzgcQF6gaASAFQhcCFjVCAQg1Agg8AfQkuCdnpCXQDUiuBuiGg");
	this.shape_455.setTransform(-14.1,138.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(1.5,1,1).p("ApcEyQDTioBviCQAbgfAVgeQBWh5gOhTIFzgcQF6gZASAFQhcCAjVB8Qg1Afg8AeQkuCZnpCRg");
	this.shape_456.setTransform(-14.1,137.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFCC00").s().p("AkaAIQAbgfAWgeQBVh5gOhTIFzgcQF6gZASAFQhcCAjVB8Qg1Afg8AeQkuCZnpCRQDUioBuiCg");
	this.shape_457.setTransform(-14.1,137.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(1.5,1,1).p("ApcEpQDTijBvh+QAbgeAVgdQBWh1gOhRIFzgaQF6gYASAEQhcB9jVB3Qg1Aeg8AdQkuCUnpCNg");
	this.shape_458.setTransform(-14.1,136.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFCC00").s().p("AkaAIQAbgeAWgdQBVh1gOhRIFzgaQF6gYASAEQhcB9jVB3Qg1Aeg8AdQkuCUnpCNQDUijBuh+g");
	this.shape_459.setTransform(-14.1,136.5);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(1.5,1,1).p("ApcE4QDTirBviEQAbggAVgfQBWh7gOhVIFzgbQF6gaASAFQhcCDjVB9Qg1Agg8AfQkuCbnpCUg");
	this.shape_460.setTransform(-14.1,138);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFCC00").s().p("AkaAJQAbggAWgfQBVh7gOhVIFzgbQF6gaASAFQhcCDjVB9Qg1Agg8AfQkuCbnpCUQDUirBuiEg");
	this.shape_461.setTransform(-14.1,138);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFFQDTiyBviKQAbghAVggQBWiAgOhYIFzgdQF6gbASAFQhcCIjVCDQg1Ahg8AgQkuCinpCag");
	this.shape_462.setTransform(-14.1,139.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFCC00").s().p("AkaAJQAbghAWggQBViAgOhYIFzgdQF6gbASAFQhcCIjVCDQg1Ahg8AgQkuCinpCaQDUiyBuiKg");
	this.shape_463.setTransform(-14.1,139.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFRQDTi4BviQQAbgiAVghQBWiFgOhcIFzgeQF6gcASAFQhcCOjVCIQg1Aig8AhQkuConpCgg");
	this.shape_464.setTransform(-14.1,140.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFCC00").s().p("AkaAJQAbgiAWghQBViFgOhcIFzgeQF6gcASAFQhcCOjVCIQg1Aig8AhQkuConpCgQDUi4BuiQg");
	this.shape_465.setTransform(-14.1,140.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFeQDTjABviVQAbgjAVgiQBWiLgOhfIFzgfQF6gdASAGQhcCSjVCOQg1Ajg8AiQkuCvnpCmg");
	this.shape_466.setTransform(-14.1,141.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFCC00").s().p("AkaAJQAbgjAWgiQBViLgOhfIFzgfQF6gdASAGQhcCSjVCOQg1Ajg8AiQkuCvnpCmQDUjABuiVg");
	this.shape_467.setTransform(-14.1,141.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFrQDTjHBviaQAbglAVgjQBWiQgOhiIFzghQF6geASAGQhcCYjVCTQg1Akg8AkQkuC1npCsg");
	this.shape_468.setTransform(-14.1,142.9);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFCC00").s().p("AkaAKQAbglAWgkQBViPgOhjIFzggQF6geASAGQhcCYjVCSQg1Alg8AkQkuC0npCtQDUjHBuiag");
	this.shape_469.setTransform(-14.1,142.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(1.5,1,1).p("ApcF4QDTjOBvigQAbgmAVglQBWiUgOhmIFzgiQF6gfASAGQhcCejVCXQg1Amg8AlQkuC7npCzg");
	this.shape_470.setTransform(-14.1,144.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFCC00").s().p("AkaAKQAbgmAWglQBViUgOhmIFzgiQF6gfASAGQhcCejVCXQg1Amg8AlQkuC7npCzQDUjOBuigg");
	this.shape_471.setTransform(-14.1,144.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGFQDTjVBvilQAbgoAVgmQBWiZgOhqIFzgiQF6ghASAHQhcCijVCdQg1Ang8AnQkuDBnpC5g");
	this.shape_472.setTransform(-14.1,145.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFCC00").s().p("AkaALQAbgoAWgmQBViZgOhqIFzgiQF6ghASAHQhcCijVCdQg1Ang8AnQkuDBnpC5QDUjVBuilg");
	this.shape_473.setTransform(-14.1,145.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGRQDTjcBviqQAbgpAVgnQBWifgOhtIFzgjQF6giASAHQhcCojVCiQg1Aog8AoQkuDInpC+g");
	this.shape_474.setTransform(-14.1,146.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgnQBVifgOhtIFzgjQF6giASAHQhcCojVCiQg1Aog8AoQkuDInpC+QDUjcBuiqg");
	this.shape_475.setTransform(-14.1,146.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGeQDTjiBviwQAbgrAVgoQBWijgOhxIFzglQF6giASAGQhcCujVCnQg1Aqg8ApQkuDOnpDEg");
	this.shape_476.setTransform(-14.1,147.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFCC00").s().p("AkaAMQAbgrAWgoQBVijgOhxIFzglQF6giASAGQhcCujVCnQg1Aqg8ApQkuDOnpDEQDUjiBuiwg");
	this.shape_477.setTransform(-14.1,147.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGrQDTjqBvi1QAbgsAVgpQBWipgOh0IFzgmQF6gjASAGQhcCzjVCtQg1Arg8AqQkuDUnpDLg");
	this.shape_478.setTransform(-14.1,149);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFCC00").s().p("AkaAMQAbgsAWgpQBVipgOh0IFzgmQF6gjASAGQhcCzjVCtQg1Arg8AqQkuDUnpDLQDUjqBui1g");
	this.shape_479.setTransform(-14.1,149);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG4QDTjxBvi7QAbgtAVgqQBWiugOh4IFzgnQF6gkASAHQhcC4jVCyQg1Asg8ArQkuDbnpDRg");
	this.shape_480.setTransform(-14.1,150.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFCC00").s().p("AkaAMQAbgtAWgqQBViugOh4IFzgnQF6gkASAHQhcC4jVCyQg1Asg8ArQkuDbnpDRQDUjxBui7g");
	this.shape_481.setTransform(-14.1,150.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHEQDTj3BvjBQAbguAVgsQBWiygOh8IFzgoQF6glASAHQhcC9jVC3Qg1Aug8AsQkuDinpDWg");
	this.shape_482.setTransform(-14.1,151.5);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFCC00").s().p("AkaAMQAbguAWgsQBViygOh8IFzgoQF6glASAHQhcC9jVC3Qg1Aug8AsQkuDinpDWQDUj3BujBg");
	this.shape_483.setTransform(-14.1,151.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHRQDTj+BvjGQAbgwAVgtQBWi3gOh/IFzgpQF6gnASAHQhcDDjVC8Qg1Avg8AuQkuDonpDcg");
	this.shape_484.setTransform(-14.1,152.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFCC00").s().p("AkaANQAbgwAWgtQBVi3gOh/IFzgpQF6gnASAHQhcDDjVC8Qg1Avg8AuQkuDonpDcQDUj+BujGg");
	this.shape_485.setTransform(-14.1,152.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHeQDTkGBvjLQAbgxAVgvQBWi8gOiCIFzgrQF6goASAIQhcDIjVDBQg1Awg8AwQkuDunpDjg");
	this.shape_486.setTransform(-14.1,154);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFCC00").s().p("AkaANQAbgxAWgvQBVi8gOiCIFzgrQF6goASAIQhcDIjVDBQg1Awg8AwQkuDunpDjQDUkGBujLg");
	this.shape_487.setTransform(-14.1,154);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHrQDTkNBvjRQAbgyAVgvQBWjCgOiGIFzgsQF6goASAIQhcDNjVDHQg1Axg8AwQkuD1npDpg");
	this.shape_488.setTransform(-14.1,155.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFCC00").s().p("AkaANQAbgyAWgvQBVjCgOiGIFzgsQF6goASAIQhcDNjVDHQg1Axg8AwQkuD1npDpQDUkNBujRg");
	this.shape_489.setTransform(-14.1,155.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(1.5,1,1).p("ApcH3QDTkTBvjXQAbgzAVgxQBWjHgOiJIFzgtQF6gpASAIQhcDSjVDMQg1Azg8AxQkuD7npDvg");
	this.shape_490.setTransform(-14.1,156.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFCC00").s().p("AkaANQAbgzAWgxQBVjHgOiJIFzgtQF6gpASAIQhcDSjVDMQg1Azg8AxQkuD7npDvQDUkTBujXg");
	this.shape_491.setTransform(-14.1,156.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(1.5,1,1).p("ApcIEQDTkaBvjcQAbg1AVgyQBWjMgOiMIFzguQF6grASAIQhcDYjVDRQg1A0g8AzQkuEBnpD1g");
	this.shape_492.setTransform(-14.1,157.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFCC00").s().p("AkaAOQAbg1AWgyQBVjMgOiMIFzguQF6grASAIQhcDYjVDRQg1A0g8AzQkuEBnpD1QDUkaBujcg");
	this.shape_493.setTransform(-14.1,157.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(1.5,1,1).p("ApcIIQDTkdBvjdQAbg2AVgyQBWjOgOiNIFzgvQF6grASAJQhcDajVDSQg1A0g8A0QkuEDnpD3g");
	this.shape_494.setTransform(-14.1,158.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFCC00").s().p("AkaAOQAbg2AWgyQBVjOgOiNIFzgvQF6grASAJQhcDajVDSQg1A0g8A0QkuEDnpD3QDUkdBujdg");
	this.shape_495.setTransform(-14.1,158.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(1.5,1,1).p("ApcIAQDTkYBvjaQAbg1AVgxQBWjKgOiMIFzgtQF6grASAIQhcDXjVDPQg1Azg8AzQkuD/npDzg");
	this.shape_496.setTransform(-14.1,157.2);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFCC00").s().p("AkaAOQAbg1AWgxQBVjKgOiMIFzgtQF6grASAIQhcDXjVDPQg1Azg8AzQkuD/npDzQDUkYBujag");
	this.shape_497.setTransform(-14.1,157.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(1.5,1,1).p("ApcH4QDTkUBvjXQAbgzAVgxQBWjHgOiJIFzgtQF6gqASAIQhcDTjVDMQg1Ayg8AyQkuD7npDwg");
	this.shape_498.setTransform(-14.1,156.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFCC00").s().p("AkaANQAbgzAWgxQBVjHgOiJIFzgtQF6gqASAIQhcDTjVDMQg1Ayg8AyQkuD7npDwQDUkUBujXg");
	this.shape_499.setTransform(-14.1,156.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHwQDTkQBvjSQAbgzAVgwQBWjEgOiHIFzgsQF6gpASAIQhcDPjVDJQg1Ayg8AxQkuD2npDsg");
	this.shape_500.setTransform(-14.1,155.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFCC00").s().p("AkaAOQAbgzAWgwQBVjEgOiHIFzgsQF6gpASAIQhcDPjVDJQg1Ayg8AxQkuD2npDsQDUkQBujSg");
	this.shape_501.setTransform(-14.1,155.6);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHnQDTkKBvjQQAbgyAVgvQBWjAgOiFIFzgrQF6gpASAIQhcDMjVDFQg1Axg8AwQkuDznpDng");
	this.shape_502.setTransform(-14.1,154.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFCC00").s().p("AkaANQAbgyAWgvQBVjAgOiFIFzgrQF6gpASAIQhcDMjVDFQg1Axg8AwQkuDznpDnQDUkKBujQg");
	this.shape_503.setTransform(-14.1,154.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHfQDTkGBvjMQAbgxAVguQBWi+gOiCIFzgqQF6goASAIQhcDIjVDCQg1Awg8AvQkuDvnpDjg");
	this.shape_504.setTransform(-14.1,154);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFCC00").s().p("AkaANQAbgxAWguQBVi+gOiCIFzgqQF6goASAIQhcDIjVDCQg1Awg8AvQkuDvnpDjQDUkGBujMg");
	this.shape_505.setTransform(-14.1,154);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHWQDTkBBvjIQAbgxAVgtQBWi6gOiAIFzgqQF6gnASAIQhcDFjVC+Qg1Avg8AvQkuDqnpDfg");
	this.shape_506.setTransform(-14.1,153.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFCC00").s().p("AkaANQAbgxAWgtQBVi6gOiAIFzgqQF6gnASAIQhcDFjVC+Qg1Avg8AvQkuDqnpDfQDUkBBujIg");
	this.shape_507.setTransform(-14.1,153.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHOQDTj9BvjEQAbgwAVgtQBWi2gOh+IFzgpQF6gmASAHQhcDCjVC6Qg1Avg8AuQkuDmnpDbg");
	this.shape_508.setTransform(-14.1,152.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFCC00").s().p("AkaANQAbgwAWgtQBVi2gOh+IFzgpQF6gmASAHQhcDCjVC6Qg1Avg8AuQkuDmnpDbQDUj9BujEg");
	this.shape_509.setTransform(-14.1,152.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHGQDTj5BvjBQAbguAVgsQBWizgOh8IFzgoQF6gmASAHQhcC+jVC4Qg1Atg8AtQkuDinpDYg");
	this.shape_510.setTransform(-14.1,151.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFCC00").s().p("AkaAMQAbguAWgsQBVizgOh8IFzgoQF6gmASAHQhcC+jVC4Qg1Atg8AtQkuDinpDYQDUj5BujBg");
	this.shape_511.setTransform(-14.1,151.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG9QDTj0Bvi9QAbguAVgrQBWiwgOh5IFzgoQF6gkASAHQhcC6jVC0Qg1Atg8AsQkuDenpDTg");
	this.shape_512.setTransform(-14.1,150.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFCC00").s().p("AkaAMQAbguAWgrQBViwgOh5IFzgoQF6gkASAHQhcC6jVC0Qg1Atg8AsQkuDenpDTQDUj0Bui9g");
	this.shape_513.setTransform(-14.1,150.8);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG1QDTjvBvi6QAbgtAVgqQBWisgOh3IFzgnQF6glASAHQhcC3jVCxQg1Asg8ArQkuDanpDPg");
	this.shape_514.setTransform(-14.1,150);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFCC00").s().p("AkaAMQAbgtAWgqQBVisgOh3IFzgnQF6glASAHQhcC3jVCxQg1Asg8ArQkuDanpDPQDUjvBui6g");
	this.shape_515.setTransform(-14.1,150);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGtQDTjrBvi2QAbgsAVgpQBWiqgOh0IFzgnQF6gjASAHQhcCzjVCuQg1Arg8AqQkuDVnpDMg");
	this.shape_516.setTransform(-14.1,149.2);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFCC00").s().p("AkaAMQAbgsAWgpQBViqgOh0IFzgnQF6gjASAHQhcCzjVCuQg1Arg8AqQkuDVnpDMQDUjrBui2g");
	this.shape_517.setTransform(-14.1,149.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGkQDTjmBviyQAbgrAVgpQBWimgOhyIFzgmQF6gjASAHQhcCwjVCqQg1Aqg8AqQkuDRnpDHg");
	this.shape_518.setTransform(-14.1,148.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFCC00").s().p("AkaAMQAbgrAWgpQBVimgOhyIFzgmQF6gjASAHQhcCwjVCqQg1Aqg8AqQkuDRnpDHQDUjmBuiyg");
	this.shape_519.setTransform(-14.1,148.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGcQDTjiBvivQAbgqAVgoQBWiigOhwIFzglQF6giASAGQhcCtjVCmQg1Aqg8AoQkuDNnpDEg");
	this.shape_520.setTransform(-14.1,147.6);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFCC00").s().p("AkaALQAbgqAWgoQBViigOhwIFzglQF6giASAGQhcCtjVCmQg1Aqg8AoQkuDNnpDEQDUjiBuivg");
	this.shape_521.setTransform(-14.1,147.6);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGUQDTjdBvisQAbgpAVgnQBWiggOhuIFzgjQF6giASAHQhcCpjVCjQg1Aog8AoQkuDJnpDAg");
	this.shape_522.setTransform(-14.1,146.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgnQBViggOhuIFzgjQF6giASAHQhcCpjVCjQg1Aog8AoQkuDJnpDAQDUjdBuisg");
	this.shape_523.setTransform(-14.1,146.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGLQDTjYBvioQAbgpAVgmQBWicgOhsIFzgjQF6ggASAGQhcCljVCgQg1Aog8AnQkuDFnpC7g");
	this.shape_524.setTransform(-14.1,146);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgmQBVicgOhsIFzgjQF6ggASAGQhcCljVCgQg1Aog8AnQkuDFnpC7QDUjYBuiog");
	this.shape_525.setTransform(-14.1,146);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGDQDTjUBvikQAbgoAVgmQBWiYgOhqIFzgiQF6ggASAGQhcCijVCcQg1Ang8AnQkuDAnpC4g");
	this.shape_526.setTransform(-14.1,145.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFCC00").s().p("AkaALQAbgoAWgmQBViYgOhqIFzgiQF6ggASAGQhcCijVCcQg1Ang8AnQkuDAnpC4QDUjUBuikg");
	this.shape_527.setTransform(-14.1,145.2);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").ss(1.5,1,1).p("ApcF6QDTjPBvihQAbgmAVglQBWiWgOhnIFzghQF6gfASAGQhcCejVCZQg1Amg8AlQkuC9npCzg");
	this.shape_528.setTransform(-14.1,144.4);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFCC00").s().p("AkaAKQAbgmAWglQBViWgOhnIFzghQF6gfASAGQhcCejVCZQg1Amg8AlQkuC9npCzQDUjPBuihg");
	this.shape_529.setTransform(-14.1,144.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFyQDTjLBvidQAbgmAVgkQBWiSgOhlIFzggQF6gfASAGQhcCbjVCVQg1Amg8AkQkuC4npCwg");
	this.shape_530.setTransform(-14.1,143.6);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFCC00").s().p("AkaAKQAbgmAWgkQBViSgOhlIFzggQF6gfASAGQhcCbjVCVQg1Amg8AkQkuC4npCwQDUjLBuidg");
	this.shape_531.setTransform(-14.1,143.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFqQDTjHBviZQAbglAVgjQBWiPgOhjIFzggQF6geASAGQhcCYjVCSQg1Akg8AkQkuC0npCsg");
	this.shape_532.setTransform(-14.1,142.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFCC00").s().p("AkaAKQAbglAWgjQBViPgOhiIFzghQF6geASAHQhcCXjVCSQg1Alg8AjQkuC0npCsQDUjGBuiag");
	this.shape_533.setTransform(-14.1,142.8);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFhQDTjBBviXQAbgkAVgiQBWiLgOhhIFzgfQF6gdASAFQhcCUjVCPQg1Akg8AiQkuCwnpCog");
	this.shape_534.setTransform(-14.1,142);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFCC00").s().p("AkaAJQAbgkAWgiQBViLgOhhIFzgfQF6gdASAFQhcCUjVCPQg1Akg8AiQkuCwnpCoQDUjBBuiXg");
	this.shape_535.setTransform(-14.1,142);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFZQDTi9BviTQAbgjAVgiQBWiIgOheIFzgeQF6gdASAGQhcCQjVCLQg1Ajg8AiQkuCsnpCkg");
	this.shape_536.setTransform(-14.1,141.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFCC00").s().p("AkaAJQAbgjAWgiQBViIgOheIFzgeQF6gdASAGQhcCQjVCLQg1Ajg8AiQkuCsnpCkQDUi9BuiTg");
	this.shape_537.setTransform(-14.1,141.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFRQDTi5BviPQAbgiAVghQBWiEgOhcIFzgeQF6gcASAFQhcCNjVCIQg1Aig8AhQkuConpCgg");
	this.shape_538.setTransform(-14.1,140.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFCC00").s().p("AkaAJQAbgiAWghQBViEgOhcIFzgeQF6gcASAFQhcCNjVCIQg1Aig8AhQkuConpCgQDUi5BuiPg");
	this.shape_539.setTransform(-14.1,140.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFIQDTi0BviLQAbghAVggQBWiCgOhZIFzgdQF6gbASAFQhcCJjVCFQg1Ahg8AgQkuCjnpCcg");
	this.shape_540.setTransform(-14.1,139.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFCC00").s().p("AkaAJQAbghAWggQBViCgOhZIFzgdQF6gbASAFQhcCJjVCFQg1Ahg8AgQkuCjnpCcQDUi0BuiLg");
	this.shape_541.setTransform(-14.1,139.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFAQDTivBviIQAbghAVgfQBWh+gOhXIFzgdQF6gaASAFQhcCGjVCBQg1Agg8AgQkuCfnpCYg");
	this.shape_542.setTransform(-14.1,138.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFCC00").s().p("AkaAJQAbghAWgfQBVh+gOhXIFzgdQF6gaASAFQhcCGjVCBQg1Agg8AgQkuCfnpCYQDUivBuiIg");
	this.shape_543.setTransform(-14.1,138.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").ss(1.5,1,1).p("ApcE3QDTiqBviEQAbggAVgeQBWh7gOhVIFzgcQF6gaASAFQhcCDjVB+Qg1Afg8AfQkuCbnpCTg");
	this.shape_544.setTransform(-14.1,137.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFCC00").s().p("AkaAJQAbggAWgeQBVh7gOhVIFzgcQF6gaASAFQhcCDjVB+Qg1Afg8AfQkuCbnpCTQDUiqBuiEg");
	this.shape_545.setTransform(-14.1,137.9);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").ss(1.5,1,1).p("ApcEvQDTimBviBQAbgeAVgeQBWh4gOhSIFzgbQF6gZASAFQhcB/jVB6Qg1Afg8AdQkuCXnpCQg");
	this.shape_546.setTransform(-14.1,137.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFCC00").s().p("AkaAIQAbgeAWgeQBVh4gOhSIFzgbQF6gZASAFQhcB/jVB6Qg1Afg8AdQkuCXnpCQQDUimBuiBg");
	this.shape_547.setTransform(-14.1,137.1);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").ss(1.5,1,1).p("ApcEnQDTiiBvh9QAbgeAVgdQBWh0gOhQIFzgaQF6gZASAFQhcB7jVB3Qg1Aeg8AdQkuCTnpCMg");
	this.shape_548.setTransform(-14.1,136.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFCC00").s().p("AkaAIQAbgeAWgdQBVh0gOhQIFzgaQF6gZASAFQhcB7jVB3Qg1Aeg8AdQkuCTnpCMQDUiiBuh9g");
	this.shape_549.setTransform(-14.1,136.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").ss(1.5,1,1).p("ApcEqQDTijBvh/QAbgeAVgdQBWh2gOhRIFzgaQF6gZASAFQhcB9jVB4Qg1Aeg8AdQkuCUnpCOg");
	this.shape_550.setTransform(-14.1,136.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFCC00").s().p("AkaAIQAbgeAWgdQBVh2gOhRIFzgaQF6gZASAFQhcB9jVB4Qg1Aeg8AdQkuCUnpCOQDUijBuh/g");
	this.shape_551.setTransform(-14.1,136.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").ss(1.5,1,1).p("ApcE2QDTiqBviDQAbggAVgeQBWh6gOhUIFzgcQF6gZASAEQhcCCjVB9Qg1Afg8AfQkuCanpCTg");
	this.shape_552.setTransform(-14.1,137.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFCC00").s().p("AkaAJQAbggAWgeQBVh6gOhUIFzgcQF6gZASAEQhcCCjVB9Qg1Afg8AfQkuCanpCTQDUiqBuiDg");
	this.shape_553.setTransform(-14.1,137.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFBQDTiwBviIQAbghAVgfQBWh/gOhYIFzgcQF6gbASAGQhcCGjVCCQg1Agg8AgQkuCfnpCZg");
	this.shape_554.setTransform(-14.1,138.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFCC00").s().p("AkaAJQAbghAWgfQBVh/gOhYIFzgcQF6gbASAGQhcCGjVCCQg1Agg8AgQkuCfnpCZQDUiwBuiIg");
	this.shape_555.setTransform(-14.1,138.9);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFMQDTi2BviNQAbgiAVggQBWiEgOhaIFzgeQF6gbASAFQhcCLjVCHQg1Ahg8AhQkuCmnpCdg");
	this.shape_556.setTransform(-14.1,140);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFCC00").s().p("AkaAJQAbgiAWggQBViEgOhaIFzgeQF6gbASAFQhcCLjVCHQg1Ahg8AhQkuCmnpCdQDUi2BuiNg");
	this.shape_557.setTransform(-14.1,140);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFYQDTi8BviTQAbgjAVghQBWiIgOheIFzgeQF6gdASAGQhcCQjVCLQg1Ajg8AhQkuCsnpCjg");
	this.shape_558.setTransform(-14.1,141.1);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFCC00").s().p("AkaAJQAbgjAWghQBViIgOheIFzgeQF6gdASAGQhcCQjVCLQg1Ajg8AhQkuCsnpCjQDUi8BuiTg");
	this.shape_559.setTransform(-14.1,141.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").ss(1.5,1,1).p("ApcFkQDTjDBviXQAbgkAVgjQBWiMgOhhIFzggQF6gdASAFQhcCVjVCQQg1Akg8AjQkuCxnpCpg");
	this.shape_560.setTransform(-14.1,142.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFCC00").s().p("AkaAKQAbgkAWgjQBViMgOhhIFzggQF6gdASAFQhcCVjVCQQg1Akg8AjQkuCxnpCpQDUjDBuiXg");
	this.shape_561.setTransform(-14.1,142.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(1.5,1,1).p("ApcF7QDTjQBvihQAbgnAVgkQBWiWgOhnIFzgiQF6gfASAGQhcCfjVCZQg1Amg8AlQkuC9npC0g");
	this.shape_562.setTransform(-14.1,144.4);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFCC00").s().p("AkaAKQAbgnAWgkQBViWgOhnIFzgiQF6gfASAGQhcCfjVCZQg1Amg8AlQkuC9npC0QDUjQBuihg");
	this.shape_563.setTransform(-14.1,144.4);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGGQDTjWBvilQAbgoAVgmQBWiagOhrIFzgiQF6ghASAHQhcCjjVCeQg1Ang8AnQkuDCnpC5g");
	this.shape_564.setTransform(-14.1,145.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFCC00").s().p("AkaALQAbgoAWgmQBViagOhrIFzgiQF6ghASAHQhcCjjVCeQg1Ang8AnQkuDCnpC5QDUjWBuilg");
	this.shape_565.setTransform(-14.1,145.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGSQDTjcBvirQAbgpAVgnQBWifgOhtIFzgkQF6ghASAGQhcCpjVCiQg1Aog8AoQkuDInpC/g");
	this.shape_566.setTransform(-14.1,146.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFCC00").s().p("AkaALQAbgpAWgnQBVifgOhtIFzgkQF6ghASAGQhcCpjVCiQg1Aog8AoQkuDInpC/QDUjcBuirg");
	this.shape_567.setTransform(-14.1,146.6);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGeQDTjjBviwQAbgqAVgoQBWijgOhxIFzglQF6giASAHQhcCtjVCnQg1Aqg8AoQkuDOnpDFg");
	this.shape_568.setTransform(-14.1,147.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFCC00").s().p("AkaALQAbgqAWgoQBVijgOhxIFzglQF6giASAHQhcCtjVCnQg1Aqg8AoQkuDOnpDFQDUjjBuiwg");
	this.shape_569.setTransform(-14.1,147.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").ss(1.5,1,1).p("ApcGpQDTjoBvi1QAbgsAVgpQBWiogOhzIFzgmQF6gjASAGQhcCyjVCsQg1Arg8AqQkuDUnpDJg");
	this.shape_570.setTransform(-14.1,148.8);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFCC00").s().p("AkaAMQAbgsAWgpQBViogOhzIFzgmQF6gjASAGQhcCyjVCsQg1Arg8AqQkuDUnpDJQDUjoBui1g");
	this.shape_571.setTransform(-14.1,148.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").ss(1.5,1,1).p("ApcG0QDTjvBvi5QAbgtAVgqQBWitgOh2IFzgnQF6gkASAGQhcC3jVCxQg1Asg8ArQkuDZnpDPg");
	this.shape_572.setTransform(-14.1,150);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFCC00").s().p("AkaAMQAbgtAWgqQBVitgOh2IFzgnQF6gkASAGQhcC4jVCwQg1Asg8ArQkuDanpDOQDUjvBui5g");
	this.shape_573.setTransform(-14.1,150);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHMQDTj8BvjDQAbgwAVgsQBWi2gOh9IFzgpQF6gmASAIQhcDAjVC6Qg1Aug8AuQkuDlnpDag");
	this.shape_574.setTransform(-14.1,152.2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFCC00").s().p("AkaANQAbgwAWgsQBVi2gOh9IFzgpQF6gmASAIQhcDAjVC6Qg1Aug8AuQkuDlnpDaQDUj8BujDg");
	this.shape_575.setTransform(-14.1,152.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHXQDTkCBvjIQAbgwAVguQBWi6gOiAIFzgqQF6gnASAHQhcDGjVC+Qg1Avg8AvQkuDrnpDfg");
	this.shape_576.setTransform(-14.1,153.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFCC00").s().p("AkaANQAbgwAWguQBVi6gOiAIFzgqQF6gnASAHQhcDGjVC+Qg1Avg8AvQkuDrnpDfQDUkCBujIg");
	this.shape_577.setTransform(-14.1,153.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHjQDTkJBvjNQAbgyAVguQBWi/gOiDIFzgrQF6goASAHQhcDLjVDDQg1Awg8AwQkuDwnpDmg");
	this.shape_578.setTransform(-14.1,154.4);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFCC00").s().p("AkaANQAbgyAWguQBVi/gOiDIFzgrQF6goASAHQhcDLjVDDQg1Awg8AwQkuDwnpDmQDUkJBujNg");
	this.shape_579.setTransform(-14.1,154.4);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").ss(1.5,1,1).p("ApcHuQDTkOBvjTQAbgyAVgwQBWjDgOiHIFzgsQF6gpASAIQhcDPjVDIQg1Axg8AxQkuD3npDqg");
	this.shape_580.setTransform(-14.1,155.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFCC00").s().p("AkaANQAbgyAWgwQBVjDgOiHIFzgsQF6gpASAIQhcDPjVDIQg1Axg8AxQkuD3npDqQDUkOBujTg");
	this.shape_581.setTransform(-14.1,155.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").ss(1.5,1,1).p("ApcH6QDTkVBvjXQAbg0AVgxQBWjIgOiKIFzgtQF6gqASAJQhcDTjVDNQg1Azg8AyQkuD8npDwg");
	this.shape_582.setTransform(-14.1,156.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFCC00").s().p("AkaAOQAbg0AWgxQBVjIgOiKIFzgtQF6gqASAJQhcDTjVDNQg1Azg8AyQkuD8npDwQDUkVBujXg");
	this.shape_583.setTransform(-14.1,156.6);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#000000").ss(1.5,1,1).p("ApcIFQDTkbBvjcQAbg1AVgyQBWjNgOiNIFzguQF6grASAJQhcDYjVDSQg1Azg8A0QkuECnpD1g");
	this.shape_584.setTransform(-14.1,157.8);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFCC00").s().p("AkaAOQAbg1AWgyQBVjNgOiNIFzguQF6grASAJQhcDYjVDSQg1Azg8A0QkuECnpD1QDUkbBujcg");
	this.shape_585.setTransform(-14.1,157.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_315},{t:this.shape_314}]}).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_381},{t:this.shape_380}]},1).to({state:[{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_391},{t:this.shape_390}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_395},{t:this.shape_394}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_397},{t:this.shape_396}]},1).to({state:[{t:this.shape_381},{t:this.shape_380}]},1).to({state:[{t:this.shape_399},{t:this.shape_398}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_403},{t:this.shape_402}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_405},{t:this.shape_404}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_409},{t:this.shape_408}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_411},{t:this.shape_410}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_413},{t:this.shape_412}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_415},{t:this.shape_414}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_429},{t:this.shape_428}]},1).to({state:[{t:this.shape_431},{t:this.shape_430}]},1).to({state:[{t:this.shape_433},{t:this.shape_432}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_435},{t:this.shape_434}]},1).to({state:[{t:this.shape_437},{t:this.shape_436}]},1).to({state:[{t:this.shape_439},{t:this.shape_438}]},1).to({state:[{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_441},{t:this.shape_440}]},1).to({state:[{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_445},{t:this.shape_444}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_447},{t:this.shape_446}]},1).to({state:[{t:this.shape_449},{t:this.shape_448}]},1).to({state:[{t:this.shape_451},{t:this.shape_450}]},1).to({state:[{t:this.shape_453},{t:this.shape_452}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_457},{t:this.shape_456}]},1).to({state:[{t:this.shape_459},{t:this.shape_458}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_461},{t:this.shape_460}]},1).to({state:[{t:this.shape_463},{t:this.shape_462}]},1).to({state:[{t:this.shape_465},{t:this.shape_464}]},1).to({state:[{t:this.shape_467},{t:this.shape_466}]},1).to({state:[{t:this.shape_469},{t:this.shape_468}]},1).to({state:[{t:this.shape_471},{t:this.shape_470}]},1).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_475},{t:this.shape_474}]},1).to({state:[{t:this.shape_477},{t:this.shape_476}]},1).to({state:[{t:this.shape_479},{t:this.shape_478}]},1).to({state:[{t:this.shape_481},{t:this.shape_480}]},1).to({state:[{t:this.shape_483},{t:this.shape_482}]},1).to({state:[{t:this.shape_485},{t:this.shape_484}]},1).to({state:[{t:this.shape_487},{t:this.shape_486}]},1).to({state:[{t:this.shape_489},{t:this.shape_488}]},1).to({state:[{t:this.shape_491},{t:this.shape_490}]},1).to({state:[{t:this.shape_493},{t:this.shape_492}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_495},{t:this.shape_494}]},1).to({state:[{t:this.shape_497},{t:this.shape_496}]},1).to({state:[{t:this.shape_499},{t:this.shape_498}]},1).to({state:[{t:this.shape_501},{t:this.shape_500}]},1).to({state:[{t:this.shape_503},{t:this.shape_502}]},1).to({state:[{t:this.shape_505},{t:this.shape_504}]},1).to({state:[{t:this.shape_507},{t:this.shape_506}]},1).to({state:[{t:this.shape_509},{t:this.shape_508}]},1).to({state:[{t:this.shape_511},{t:this.shape_510}]},1).to({state:[{t:this.shape_513},{t:this.shape_512}]},1).to({state:[{t:this.shape_515},{t:this.shape_514}]},1).to({state:[{t:this.shape_517},{t:this.shape_516}]},1).to({state:[{t:this.shape_519},{t:this.shape_518}]},1).to({state:[{t:this.shape_521},{t:this.shape_520}]},1).to({state:[{t:this.shape_523},{t:this.shape_522}]},1).to({state:[{t:this.shape_525},{t:this.shape_524}]},1).to({state:[{t:this.shape_527},{t:this.shape_526}]},1).to({state:[{t:this.shape_529},{t:this.shape_528}]},1).to({state:[{t:this.shape_531},{t:this.shape_530}]},1).to({state:[{t:this.shape_533},{t:this.shape_532}]},1).to({state:[{t:this.shape_535},{t:this.shape_534}]},1).to({state:[{t:this.shape_537},{t:this.shape_536}]},1).to({state:[{t:this.shape_539},{t:this.shape_538}]},1).to({state:[{t:this.shape_541},{t:this.shape_540}]},1).to({state:[{t:this.shape_543},{t:this.shape_542}]},1).to({state:[{t:this.shape_545},{t:this.shape_544}]},1).to({state:[{t:this.shape_547},{t:this.shape_546}]},1).to({state:[{t:this.shape_549},{t:this.shape_548}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_551},{t:this.shape_550}]},1).to({state:[{t:this.shape_553},{t:this.shape_552}]},1).to({state:[{t:this.shape_555},{t:this.shape_554}]},1).to({state:[{t:this.shape_557},{t:this.shape_556}]},1).to({state:[{t:this.shape_559},{t:this.shape_558}]},1).to({state:[{t:this.shape_561},{t:this.shape_560}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_563},{t:this.shape_562}]},1).to({state:[{t:this.shape_565},{t:this.shape_564}]},1).to({state:[{t:this.shape_567},{t:this.shape_566}]},1).to({state:[{t:this.shape_569},{t:this.shape_568}]},1).to({state:[{t:this.shape_571},{t:this.shape_570}]},1).to({state:[{t:this.shape_573},{t:this.shape_572}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_575},{t:this.shape_574}]},1).to({state:[{t:this.shape_577},{t:this.shape_576}]},1).to({state:[{t:this.shape_579},{t:this.shape_578}]},1).to({state:[{t:this.shape_581},{t:this.shape_580}]},1).to({state:[{t:this.shape_583},{t:this.shape_582}]},1).to({state:[{t:this.shape_585},{t:this.shape_584}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).wait(4));

	// gill
	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#FFCC02").ss(3,1,1).p("AHXynQ5lS7S7SU");
	this.shape_586.setTransform(78.8,2.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#FFCC02").ss(3,1,1).p("AAsSoQy6yQZky/");
	this.shape_587.setTransform(78.9,2.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#FFCC02").ss(3,1,1).p("AAsSoQy5yMZkzD");
	this.shape_588.setTransform(78.9,2.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#FFCC02").ss(3,1,1).p("AAsSoQy5yHZjzI");
	this.shape_589.setTransform(78.9,2.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#FFCC02").ss(3,1,1).p("AAsSoQy5yDZjzM");
	this.shape_590.setTransform(78.9,2.6);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#FFCC02").ss(3,1,1).p("AAsSoQy4x+ZizR");
	this.shape_591.setTransform(78.9,2.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#FFCC02").ss(3,1,1).p("AArSoQy3x6ZizV");
	this.shape_592.setTransform(79,2.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#FFCC02").ss(3,1,1).p("AArSoQy3x2ZizZ");
	this.shape_593.setTransform(79,2.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#FFCC02").ss(3,1,1).p("AArSnQy2xxZhzc");
	this.shape_594.setTransform(79,2.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#FFCC02").ss(3,1,1).p("AArSnQy2xsZhzh");
	this.shape_595.setTransform(79,2.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSnQy1xoZhzl");
	this.shape_596.setTransform(79.1,2.8);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSnQy1xjZhzq");
	this.shape_597.setTransform(79.1,2.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSnQy0xfZgzu");
	this.shape_598.setTransform(79.1,2.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSnQy0xbZgzy");
	this.shape_599.setTransform(79.1,2.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSnQy0xXZgz2");
	this.shape_600.setTransform(79.1,2.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSnQyzxSZfz7");
	this.shape_601.setTransform(79.1,2.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#FFCC02").ss(3,1,1).p("AApSnQyyxNZe0A");
	this.shape_602.setTransform(79.2,2.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#FFCC02").ss(3,1,1).p("AApSnQyyxJZf0E");
	this.shape_603.setTransform(79.2,2.9);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#FFCC02").ss(3,1,1).p("AApSnQyyxFZf0I");
	this.shape_604.setTransform(79.2,3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#FFCC02").ss(3,1,1).p("AAoSnQyxxBZe0M");
	this.shape_605.setTransform(79.2,3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#FFCC02").ss(3,1,1).p("AAoSmQyww7Zd0Q");
	this.shape_606.setTransform(79.2,3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#FFCC02").ss(3,1,1).p("AAoSnQyww3Zd0W");
	this.shape_607.setTransform(79.3,3);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#FFCC02").ss(3,1,1).p("AAoSmQywwyZd0Z");
	this.shape_608.setTransform(79.3,3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#FFCC02").ss(3,1,1).p("AAoSmQyvwuZc0d");
	this.shape_609.setTransform(79.3,3.1);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#FFCC02").ss(3,1,1).p("AAoSmQyvwpZc0i");
	this.shape_610.setTransform(79.3,3.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#FFCC02").ss(3,1,1).p("AAnSmQyuwlZc0m");
	this.shape_611.setTransform(79.3,3.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#FFCC02").ss(3,1,1).p("AAnSmQytwgZb0r");
	this.shape_612.setTransform(79.3,3.1);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#FFCC02").ss(3,1,1).p("AAnSmQytwcZb0v");
	this.shape_613.setTransform(79.4,3.1);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#FFCC02").ss(3,1,1).p("AAnSmQytwYZb0z");
	this.shape_614.setTransform(79.4,3.1);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#FFCC02").ss(3,1,1).p("AAmSmQyswUZb03");
	this.shape_615.setTransform(79.4,3.2);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#FFCC02").ss(3,1,1).p("AAmSmQyrwQZa07");
	this.shape_616.setTransform(79.4,3.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#FFCC02").ss(3,1,1).p("AAmSmQyrwLZa1A");
	this.shape_617.setTransform(79.4,3.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#FFCC02").ss(3,1,1).p("AAmSlQyqwFZZ1E");
	this.shape_618.setTransform(79.4,3.2);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#FFCC02").ss(3,1,1).p("AAmSmQyqwCZZ1J");
	this.shape_619.setTransform(79.5,3.3);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#FFCC02").ss(3,1,1).p("AHVykQ5ZVMSqP9");
	this.shape_620.setTransform(79.5,3.3);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#FFCC02").ss(3,1,1).p("AAlSlQyowCZX1H");
	this.shape_621.setTransform(79.5,3.3);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#FFCC02").ss(3,1,1).p("AAlSlQymwIZV1B");
	this.shape_622.setTransform(79.5,3.3);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#FFCC02").ss(3,1,1).p("AAlSlQylwNZT08");
	this.shape_623.setTransform(79.6,3.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#FFCC02").ss(3,1,1).p("AAkSlQyjwTZR02");
	this.shape_624.setTransform(79.6,3.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#FFCC02").ss(3,1,1).p("AAkSlQyhwZZP0w");
	this.shape_625.setTransform(79.6,3.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#FFCC02").ss(3,1,1).p("AAkSlQygweZO0r");
	this.shape_626.setTransform(79.6,3.4);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#FFCC02").ss(3,1,1).p("AAkSlQyfwjZM0m");
	this.shape_627.setTransform(79.7,3.4);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSlQycwpZJ0g");
	this.shape_628.setTransform(79.7,3.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSlQybwuZI0b");
	this.shape_629.setTransform(79.7,3.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSlQyZw0ZG0V");
	this.shape_630.setTransform(79.7,3.4);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSlQyYw5ZE0Q");
	this.shape_631.setTransform(79.8,3.4);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSlQyXw/ZD0K");
	this.shape_632.setTransform(79.8,3.5);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSlQyUxEZA0F");
	this.shape_633.setTransform(79.8,3.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSlQyTxKY/z/");
	this.shape_634.setTransform(79.8,3.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSkQyRxOY9z5");
	this.shape_635.setTransform(79.9,3.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSkQyPxUY7zz");
	this.shape_636.setTransform(79.9,3.5);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSkQyOxZY5zu");
	this.shape_637.setTransform(79.9,3.5);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSkQyMxfY3zo");
	this.shape_638.setTransform(79.9,3.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSkQyKxkY1zj");
	this.shape_639.setTransform(80,3.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSkQyJxqY0zd");
	this.shape_640.setTransform(80,3.6);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSkQyIxvYyzY");
	this.shape_641.setTransform(80,3.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSkQyGx1YwzS");
	this.shape_642.setTransform(80,3.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyEx6YuzN");
	this.shape_643.setTransform(80.1,3.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyCyAYszH");
	this.shape_644.setTransform(80.1,3.6);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyByFYqzC");
	this.shape_645.setTransform(80.1,3.6);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyAyLYpy8");
	this.shape_646.setTransform(80.1,3.6);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeSkQx9yQYmy3");
	this.shape_647.setTransform(80.2,3.6);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeSkQx8yWYlyx");
	this.shape_648.setTransform(80.2,3.7);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#FFCC02").ss(3,1,1).p("AHGyjQ4jSsR7Sb");
	this.shape_649.setTransform(80.2,3.7);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeSkQx+yQYny3");
	this.shape_650.setTransform(80.2,3.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeSkQx/yKYpy9");
	this.shape_651.setTransform(80.1,3.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyByEYqzD");
	this.shape_652.setTransform(80.1,3.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSlQyDx/YtzK");
	this.shape_653.setTransform(80.1,3.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSlQyEx5YuzQ");
	this.shape_654.setTransform(80,3.5);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSlQyGxzYwzW");
	this.shape_655.setTransform(80,3.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSlQyHxuYyzb");
	this.shape_656.setTransform(80,3.4);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSlQyJxoY0zh");
	this.shape_657.setTransform(79.9,3.4);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSmQyKxjY1zo");
	this.shape_658.setTransform(79.9,3.4);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSmQyMxdY4zu");
	this.shape_659.setTransform(79.9,3.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSmQyNxXY5z0");
	this.shape_660.setTransform(79.8,3.3);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSmQyPxRY7z6");
	this.shape_661.setTransform(79.8,3.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSnQyQxMY80B");
	this.shape_662.setTransform(79.8,3.3);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSnQySxHY/0G");
	this.shape_663.setTransform(79.7,3.2);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSnQyUxBZA0M");
	this.shape_664.setTransform(79.7,3.2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSnQyVw7ZC0S");
	this.shape_665.setTransform(79.6,3.2);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSnQyXw1ZE0Y");
	this.shape_666.setTransform(79.6,3.1);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSoQyYwwZG0f");
	this.shape_667.setTransform(79.6,3.1);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSoQyZwqZH0l");
	this.shape_668.setTransform(79.6,3.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSoQycwkZK0r");
	this.shape_669.setTransform(79.5,3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSoQydweZL0x");
	this.shape_670.setTransform(79.5,3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSoQyewZZM02");
	this.shape_671.setTransform(79.5,3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSpQygwUZP09");
	this.shape_672.setTransform(79.4,3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#FFCC02").ss(3,1,1).p("AAkSpQyiwOZR1D");
	this.shape_673.setTransform(79.4,2.9);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSpQyiwIZS1J");
	this.shape_674.setTransform(79.4,2.9);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#FFCC02").ss(3,1,1).p("AAkSpQylwCZV1P");
	this.shape_675.setTransform(79.3,2.9);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#FFCC02").ss(3,1,1).p("AHUyoQ5WVVSmP8");
	this.shape_676.setTransform(79.3,2.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSpQyjwIZT1J");
	this.shape_677.setTransform(79.4,2.9);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSoQyhwNZR1C");
	this.shape_678.setTransform(79.4,3);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSoQyfwSZP09");
	this.shape_679.setTransform(79.5,3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSnQyewXZO02");
	this.shape_680.setTransform(79.5,3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSnQydwdZN0w");
	this.shape_681.setTransform(79.5,3.1);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSnQybwiZL0r");
	this.shape_682.setTransform(79.6,3.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSmQyZwnZJ0k");
	this.shape_683.setTransform(79.6,3.1);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSmQyYwtZI0e");
	this.shape_684.setTransform(79.6,3.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSlQyWwyZG0X");
	this.shape_685.setTransform(79.7,3.2);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSlQyVw3ZF0S");
	this.shape_686.setTransform(79.7,3.2);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyTw8ZD0L");
	this.shape_687.setTransform(79.8,3.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyRxCZB0F");
	this.shape_688.setTransform(79.8,3.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSkQyQxIZAz/");
	this.shape_689.setTransform(79.8,3.4);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeSjQyOxMY+z5");
	this.shape_690.setTransform(79.9,3.4);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeSjQyNxSY9zz");
	this.shape_691.setTransform(79.9,3.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#FFCC02").ss(3,1,1).p("AAdSiQyKxXY6zs");
	this.shape_692.setTransform(80,3.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#FFCC02").ss(3,1,1).p("AAdSiQyJxdY5zm");
	this.shape_693.setTransform(80,3.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#FFCC02").ss(3,1,1).p("AAdSiQyIxiY4zh");
	this.shape_694.setTransform(80,3.6);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#FFCC02").ss(3,1,1).p("AAcShQyGxnY2za");
	this.shape_695.setTransform(80.1,3.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#FFCC02").ss(3,1,1).p("AAcShQyFxtY1zU");
	this.shape_696.setTransform(80.1,3.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#FFCC02").ss(3,1,1).p("AAbSgQyCxyYyzN");
	this.shape_697.setTransform(80.2,3.7);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#FFCC02").ss(3,1,1).p("AAbSgQyBx3YxzI");
	this.shape_698.setTransform(80.2,3.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#FFCC02").ss(3,1,1).p("AAbSfQyAx8YwzB");
	this.shape_699.setTransform(80.2,3.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#FFCC02").ss(3,1,1).p("AAaSfQx+yCYuy7");
	this.shape_700.setTransform(80.3,3.8);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#FFCC02").ss(3,1,1).p("AAaSfQx9yIYty1");
	this.shape_701.setTransform(80.3,3.8);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#FFCC02").ss(3,1,1).p("AAZSeQx6yNYqyu");
	this.shape_702.setTransform(80.4,3.9);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#FFCC02").ss(3,1,1).p("AAZSeQx5ySYpyp");
	this.shape_703.setTransform(80.4,3.9);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#FFCC02").ss(3,1,1).p("AHJycQ4oSiR4SX");
	this.shape_704.setTransform(80.4,3.9);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#FFCC02").ss(3,1,1).p("AAaSeQx8yNYryu");
	this.shape_705.setTransform(80.4,3.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#FFCC02").ss(3,1,1).p("AAbSfQx/yCYuy7");
	this.shape_706.setTransform(80.3,3.8);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#FFCC02").ss(3,1,1).p("AAcSfQyBx8YwzB");
	this.shape_707.setTransform(80.2,3.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#FFCC02").ss(3,1,1).p("AAcSgQyDx3YyzI");
	this.shape_708.setTransform(80.2,3.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#FFCC02").ss(3,1,1).p("AAcSgQyExxYzzO");
	this.shape_709.setTransform(80.2,3.7);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#FFCC02").ss(3,1,1).p("AAdSgQyGxrY1zU");
	this.shape_710.setTransform(80.1,3.7);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeShQyIxnY2za");
	this.shape_711.setTransform(80.1,3.7);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#FFCC02").ss(3,1,1).p("AAeShQyKxhY4zg");
	this.shape_712.setTransform(80.1,3.7);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSiQyMxcY6zn");
	this.shape_713.setTransform(80,3.6);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#FFCC02").ss(3,1,1).p("AAfSiQyNxWY7zt");
	this.shape_714.setTransform(80,3.6);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSiQyPxQY9zz");
	this.shape_715.setTransform(79.9,3.6);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#FFCC02").ss(3,1,1).p("AAgSjQyRxMY/z5");
	this.shape_716.setTransform(79.9,3.6);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSjQyTxFZA0A");
	this.shape_717.setTransform(79.9,3.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#FFCC02").ss(3,1,1).p("AAhSjQyUxAZC0F");
	this.shape_718.setTransform(79.8,3.5);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#FFCC02").ss(3,1,1).p("AAiSkQyWw7ZD0M");
	this.shape_719.setTransform(79.8,3.5);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSkQyZw0ZG0T");
	this.shape_720.setTransform(79.7,3.4);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSkQyawvZH0Y");
	this.shape_721.setTransform(79.7,3.4);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#FFCC02").ss(3,1,1).p("AAjSlQybwqZI0f");
	this.shape_722.setTransform(79.7,3.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#FFCC02").ss(3,1,1).p("AAkSlQyewkZL0l");
	this.shape_723.setTransform(79.6,3.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#FFCC02").ss(3,1,1).p("AAlSmQygwfZM0s");
	this.shape_724.setTransform(79.6,3.3);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#FFCC02").ss(3,1,1).p("AAlSmQyhwaZN0x");
	this.shape_725.setTransform(79.6,3.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#FFCC02").ss(3,1,1).p("AAmSmQykwUZQ03");
	this.shape_726.setTransform(79.5,3.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#FFCC02").ss(3,1,1).p("AAmSnQylwPZR0+");
	this.shape_727.setTransform(79.5,3.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#FFCC02").ss(3,1,1).p("AAnSnQynwJZT1E");
	this.shape_728.setTransform(79.4,3.2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#FFCC02").ss(3,1,1).p("AAnSoQypwEZV1L");
	this.shape_729.setTransform(79.4,3.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#FFCC02").ss(3,1,1).p("AHTynQ5WVRSrP+");
	this.shape_730.setTransform(79.4,3.1);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("#FFCC02").ss(3,1,1).p("AAoSoQyswKZY1F");
	this.shape_731.setTransform(79.3,3.1);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#FFCC02").ss(3,1,1).p("AApSoQytwVZY06");
	this.shape_732.setTransform(79.3,3);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#FFCC02").ss(3,1,1).p("AApSoQyuwhZZ0u");
	this.shape_733.setTransform(79.2,3);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#FFCC02").ss(3,1,1).p("AApSoQyvwtZa0i");
	this.shape_734.setTransform(79.2,3);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSoQyxw4Zb0X");
	this.shape_735.setTransform(79.2,2.9);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSoQyyxEZd0L");
	this.shape_736.setTransform(79.1,2.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSoQyzxPZe0A");
	this.shape_737.setTransform(79.1,2.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#FFCC02").ss(3,1,1).p("AAqSoQy0xbZfz0");
	this.shape_738.setTransform(79.1,2.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#FFCC02").ss(3,1,1).p("AArSoQy1xmZgzp");
	this.shape_739.setTransform(79,2.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#FFCC02").ss(3,1,1).p("AArSoQy2xyZhzd");
	this.shape_740.setTransform(79,2.7);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#FFCC02").ss(3,1,1).p("AAsSoQy4x9ZizS");
	this.shape_741.setTransform(78.9,2.7);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#FFCC02").ss(3,1,1).p("AAsSoQy5yJZjzG");
	this.shape_742.setTransform(78.9,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_586}]}).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648,p:{y:3.7}}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_648,p:{y:3.6}}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701,p:{y:3.8}}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_701,p:{y:3.9}}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_586}]},1).wait(1));

	// pupil01
	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgoQAAgnAagdQAagcAlAAQAlAAAaAcQAbAdAAAng");
	this.shape_743.setTransform(158.2,-3.4);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#000000").s().p("Ag/BEQgagcAAgnQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAngbAcQgaAcglAAQgkAAgbgcg");
	this.shape_744.setTransform(158.2,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_744},{t:this.shape_743}]}).wait(162));

	// eye01
	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#000000").ss(1.5,1,1).p("AGkAAQAACjh7ByQh7ByiuAAQitAAh7hyQh7hyAAijQAAihB7hzQB7hyCtAAQCuAAB7ByQB7BzAAChg");
	this.shape_745.setTransform(135.4,-9.6);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AkoEVQh7hyAAijQAAihB7hzQB7hyCtAAQCuAAB7ByQB7BzAAChQAACjh7ByQh7ByiuAAQitAAh7hyg");
	this.shape_746.setTransform(135.4,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_746},{t:this.shape_745}]}).wait(162));

	// mouth
	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#000000").ss(1.5,1,1).p("ABIABIiOgB");
	this.shape_747.setTransform(227,41.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_747).to({_off:true},9).wait(20).to({_off:false},0).wait(41).to({_off:true},1).wait(8).to({_off:false},0).wait(29).to({_off:true},1).wait(8).to({_off:false},0).wait(45));

	// mouthOpen
	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#000000").ss(1.5,1,1).p("Ar00FQGAA2F2D+QLzWFgBAPQAAAPyqKSQijBZibBJ");
	this.shape_748.setTransform(158.7,-3.1);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FF6600").s().p("Ar00FQGAA2F3D+QLyWFgBAPQAAAPypKSQikBZibBJg");
	this.shape_749.setTransform(158.7,-3.1);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#000000").ss(1.5,1,1).p("Aq80FQGDA0F6D/QGlMTDDFxQgEBdAFBLQAEAdAEAXQAEAOACAJQAFAKgBAIQAAAFABAEQABAGgVATQgXAvgsA5QkyCuqiF0QgJAFgKAFQibBUiRBFQgIgNgHgN");
	this.shape_750.setTransform(152.1,-3.3);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FF6600").s().p("Aq8TsMAAAgnxQGDA0F6D/QGlMTDDFyQgEBcAFBKIAIA1IAGAXQAFAJgBAKIABAIQABAHgVARQgXAwgsA5QkyCuqiF0IgTAKQibBUiRBFIgPgag");
	this.shape_751.setTransform(152.1,-3.3);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#000000").ss(1.5,1,1).p("Aq70EQGHAxF9EBQGnMRDMGFQhMA3gbBOQgIAbgBAaQgBAOACAKQACAGgCAQQAAAJACAIQABALgHAQQAEBAAoAoQlAC2qRFqQgKAGgKAFQibBUiTBGQgPgBgOgB");
	this.shape_752.setTransform(151,-3.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FF6600").s().p("Aq7UDMAAAgoHQGHAxF9EBQGnMRDMGFQhMA3gbBOQgIAbgBAaQgBAOACAKQACAGgCAQIACARQABALgHAQQAEBAAoAoQlAC2qRFqIgUALQibBUiTBGIgdgCg");
	this.shape_753.setTransform(151,-3.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#000000").ss(1.5,1,1).p("ArE0OQGPAwGFEIQGfMJDWGXQiVATg7BRQgTAZgHAdQgEAPAAALQAAABgCAYQAAAcAKAZQAgBRB8AXQlUDCqPFpQi0BiioBO");
	this.shape_754.setTransform(150.9,-2.6);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FF6600").s().p("ArE0OQGPAwGFEIQGfMJDWGXQiVATg7BRQgTAZgHAdQgEAPAAALIgCAZQAAAcAKAZQAgBRB8AXQlUDCqPFpQi0BiioBOg");
	this.shape_755.setTransform(150.9,-2.6);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#000000").ss(1.5,1,1).p("AA9x0QAKAGAKAHQALAVAMAWQGPLsDLGAQhqApgoBPQgLAbgEAbQAAAdgCATQAAAKACAKQACANgCAOQAPBHBKAiQlEC4qFFkQgPAIgPAIQigBXiXBHQgOADgPAC");
	this.shape_756.setTransform(150.8,11.8);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FF6600").s().p("ArBx0IL+AAIAUANIAXArQGPLsDLGAQhqApgoBPQgLAbgEAbQAAAdgCATQAAAKACAKQACANgCAOQAPBHBKAiQlEC4qFFkIgeAQQigBXiXBHIgdAFg");
	this.shape_757.setTransform(150.8,11.8);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#000000").ss(1.5,1,1).p("Aq90IQGMAxGDEFQGhMODLGBQg+A/gUBNQgFAcgBAaQAFAegBAPQAAAIABAHQABAKgKAQQgBA9AXAsQk8CzqPFqQgPAIgPAIQigBXiXBHQgKgDgLgD");
	this.shape_758.setTransform(150.6,-3.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FF6600").s().p("Aq9UDMAAAgoLQGMAxGDEFQGhMODLGBQg+A/gUBNQgFAcgBAaQAFAegBAPIABAPQABAKgKAQQgBA9AXAsQk8CzqPFqIgeAQQigBXiXBHIgVgGg");
	this.shape_759.setTransform(150.6,-3.2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#000000").ss(1.5,1,1).p("AA3x3QAOAJANAJQGkMPDFF3QgTBVgBBLQACAdADAYQAJAggBALQAAAFABAFQABAHgSASQgSAzgcA1Qk0CwqaFvQgOAIgPAIQigBXiWBGQgIgJgHgI");
	this.shape_760.setTransform(150.5,11.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FF6600").s().p("Aq6RnMAAAgjeILxAAIAbASQGkMPDFF3QgTBVgBBLIAFA1QAJAggBALIABAKQABAHgSASQgSAzgcA1Qk0CwqaFvIgdAQQigBXiWBGIgPgRg");
	this.shape_761.setTransform(150.5,11.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#000000").ss(1.5,1,1).p("AAsxwQACABABABQGlMRC/FrQAZBrASBKQAJAfAHAWQANAhAAAGQAAADAAADQABAEgaAUQgiAphQA/QkrCrqlF1QgPAIgOAIQigBWiWBGQgEgOgDgO");
	this.shape_762.setTransform(153.9,12.4);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FF6600").s().p("AraRVMAAAgjFIMGAAIADACQGlMRC/FrIArC1IAQA1QANAhAAAGIAAAGQABAEgaAUQgiAphQA/QkrCrqlF1IgdAQQigBWiWBGIgHgcg");
	this.shape_763.setTransform(153.9,12.4);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#000000").ss(1.5,1,1).p("AAqxwQADAEABACQGkMPC/FqQAbBrATBJQAJAeAHAWQAOAhAAAGQAAADAAADQABAFgYASQgEAFgEAFQghAkhKA5QkpCpqqF4QgOAIgPAIQgBABgBAAQigBWiWBHQgDgMgEgM");
	this.shape_764.setTransform(154.2,12.4);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FF6600").s().p("ArcRaMgABgjLILqAAIAdACIAEAFQGlMQC+FpIAvC0IAQA0QANAiAAAGIABAFQABAGgYASIgJAKQggAkhLA5QkpCpqpF4IgdAQIgDABQifBWiWBGIgIgXg");
	this.shape_765.setTransform(154.2,12.4);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#000000").ss(1.5,1,1).p("AAoxvQADAEAAABQGlMRC+FpQAdBqAVBJQAKAeAHAVQANAgABAHQAAAEABACQABAGgWAQQgEAFgEAFQgeAhhQA7QkmCoquF6QgPAIgOAIQgCABgDABQifBXiWBGQgFgKgEgK");
	this.shape_766.setTransform(154.5,12.4);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FF6600").s().p("ArfRdMAAAgjNILrAAIAcADIAEAFQGlMRC+FoIAxCzIARA0QAOAgAAAHIABAGQABAFgWARIgIAJQgdAhhRA8QklCnqvF7IgdAQIgEACQifBWiXBGIgJgUg");
	this.shape_767.setTransform(154.5,12.3);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#000000").ss(1.5,1,1).p("AAmxuQADAEABABQGlMSC9FnQAgBrAVBHQAKAeAIAVQANAgABAIQAAADABACQACAHgUAPQgEAEgDAEQgbAfhWA9QkjCmqzF9QgPAIgOAIQgDACgDABQigBXiWBGQgFgIgGgJ");
	this.shape_768.setTransform(154.8,12.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FF6600").s().p("ArhRgMgABgjQILsAAIAcAEIAEAGQGlMRC9FnIA2CzIARAzQANAfACAIIABAGQABAGgUAPIgHAJQgbAehWA9QkjCmqzF+IgdAQIgGADQifBWiXBGIgKgRg");
	this.shape_769.setTransform(154.7,12.2);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#000000").ss(1.5,1,1).p("AAIxxQAaAFACABQADAEABABQGlMTC9FnQAiBpAWBHQALAeAIAVQANAfACAIQAAADABADQACAHgSAOQgDADgEAFQgYAbhcBAQkfCkq4GBQgPAHgOAIQgEACgEACQigBXiWBHQgGgIgGgH");
	this.shape_770.setTransform(155,12.2);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FF6600").s().p("ArjRjQAWxfgXx1ILtAAIAbAGIAEAFQGmMUC8FmIA5CwIASAzQANAfACAIIABAGQACAHgSAOIgGAHQgYAchcBAQkgClq4F/IgcAQIgIAEQigBXiXBHIgLgPg");
	this.shape_771.setTransform(155,12.2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#000000").ss(1.5,1,1).p("AAAxxQAZAHACABQADAEABABQGmMUC8FmQAkBpAYBHQALAdAIAVQANAeACAJQABADABADQACAHgQAMQgDAEgDADQgVAahiBBQkdCjq8GDQgPAHgOAIQgFADgFACQifBXiXBH");
	this.shape_772.setTransform(156,12.1);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FF6600").s().p("ArmRmMgABgjXILuAAIAbAIIAEAFQGmMUC8FmIA8CvIATAzQANAeACAIIACAHQACAHgQAMIgGAHQgVAahiBBQkdCjq8GDIgdAPIgKAFQifBXiXBHIgNgMg");
	this.shape_773.setTransform(155.3,12.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#000000").ss(1.5,1,1).p("AgBxxQAYAIACABQADAEAAABQGnMWC7FkQAmBpAZBGQAMAdAIAVQANAdADAJQABAEABACQACAIgOALQgCADgDADQgSAXhnBEQkaChrCGFQgOAIgOAIQgGADgGADQigBXiXBH");
	this.shape_774.setTransform(156.3,12);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FF6600").s().p("ArpRoMAAAgjZILvAAIAaAJIAEAFQGmMWC8FkIA/CvIAUAxQANAdADAKIABAGQADAIgOALIgFAGQgTAXhnBDQkaCirBGFIgdAPIgLAHQigBWiXBHIgPgJg");
	this.shape_775.setTransform(155.5,12);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#000000").ss(1.5,1,1).p("AgDxxQAXAJACABQADAFABABQGmMWC7FjQApBpAaBFQALAcAJAVQANAdADAKQABADABADQAEAJgMAJQgDADgCACQgQAUhtBGQkXCgrGGIQgOAIgOAIQgHADgGAEQihBXiXBH");
	this.shape_776.setTransform(156.6,11.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FF6600").s().p("ArsRsMAAAgjdILwAAIAaAKIAEAGQGmMWC7FjIBDCuIAUAxQANAdADAKIACAGQAEAJgMAJIgFAFQgQAUhtBGQkXCgrGGIIgcAQIgNAHQihBXiXBHIgQgGg");
	this.shape_777.setTransform(155.8,11.9);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#000000").ss(1.5,1,1).p("AgGxxQAXAKACABQADAFABABQGnMYC6FiQArBoAbBEQAMAcAJAVQANAcAEALQABADABADQAEAJgKAIQgCACgCACQgOAShyBIQkUCerLGKQgOAIgOAIQgHAEgIAEQihBXiXBI");
	this.shape_778.setTransform(157,11.9);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FF6600").s().p("AruRuMgABgjfILxAAQAYAKACABIAEAGQGnMYC6FiIBGCsIAVAxQANAcAEALIACAGQAEAJgKAIIgEAEQgOAShyBIQkUCerLGKIgcAQIgPAIQihBXiXBIIgRgEg");
	this.shape_779.setTransform(156.1,11.9);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#000000").ss(1.5,1,1).p("AgIxxQAWALACACQADAFABABQGnMZC6FgQAtBpAcBDQANAcAJAUQANAbAEAMQABADACADQAEAKgIAGQgCACgBACQgLAPh4BKQkRCcrQGNQgOAIgOAIQgIAFgJAEQigBXiYBI");
	this.shape_780.setTransform(157.3,11.8);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FF6600").s().p("ArxRxMAAAgjiILyAAQAXALACACIADAGQGoMZC5FgIBKCsIAVAwIASAnIACAGQAEAKgIAGIgDAEQgLAPh3BKQkSCcrPGNIgdAQIgQAJQihBXiYBIIgSgBg");
	this.shape_781.setTransform(156.4,11.8);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#000000").ss(1.5,1,1).p("AgKxxQAWAMABACQADAFABABQGoMaC5FgQAvBnAdBDQANAcAKAUQANAaAFAMQABAEABADQAFAKgGAFQgBABgCACQgIAMh9BMQkOCbrVGQQgOAIgOAIQgJAFgJAFQihBXiYBI");
	this.shape_782.setTransform(157.7,11.7);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FF6600").s().p("Ar0xyIL0AAQAWAMABACIAEAGQGoMaC5FfIBMCqIAXAxIASAmIACAGQAFAKgGAGIgDACQgIANh9BMQkOCbrVGQIgcAQIgSAKQihBXiYBHIgUADg");
	this.shape_783.setTransform(156.7,11.9);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#000000").ss(1.5,1,1).p("AgNxxQAWANABACQAEAGAAABQGoMaC4FfQAyBoAfBBQANAcAKAUQAMAaAGANQACADABADQAFALgEAEQgBAAgBABQgFAKiDBOQkMCarZGSQgOAHgOAJQgKAFgKAGQihBXiYBI");
	this.shape_784.setTransform(158,11.7);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FF6600").s().p("Ar3x0IL1AAQAVAOACACIAEAGQGoMbC4FfIBQCpIAXAwIATAmIACAGQAFALgEAEIgBACQgGAJiDBOQkLCarZGSIgcAQIgUALQiiBYiYBIIgVAEg");
	this.shape_785.setTransform(157,11.9);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#000000").ss(1.5,1,1).p("AgEx1QAVAOABADQADAFABABQGoMcC4FeQA0BnAfBBQAOAbAKAUQANAZAGANQACAEABADQAFALgCACQAAABgBAAQgCAIiJBQQkICYreGVQgOAHgOAIQgLAGgLAGQihBYiZBIQgLAEgLAE");
	this.shape_786.setTransform(157.3,12);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FF6600").s().p("Ar6x1IL2AAQAVAPABACIAEAGQGoMcC4FeIBTCoIAYAvIATAmIADAHQAFALgCACIgBABQgCAHiJBQQkICYreGWIgcAPIgWAMQihBYiZBIIgWAIg");
	this.shape_787.setTransform(157.3,12);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#000000").ss(1.5,1,1).p("AgHx2QAJAGAKAHQAEAGADAGQLsV5gBAPQAAAPyqKTQiuBfikBL");
	this.shape_788.setTransform(157.7,12);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FF6600").s().p("Ar+x2IL3AAIAUANIAGAMQLsV5gBAPQAAAPypKTQivBfikBLg");
	this.shape_789.setTransform(157.7,12);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#000000").ss(1.5,1,1).p("AAAx0QAGAEAGAFQLzWFgBAPQAAAPyqKSQiuBfikBM");
	this.shape_790.setTransform(157.7,12.3);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FF6600").s().p("Ar+x0IL+AAIANAJQLyWFgBAPQAAAPypKSQivBfikBMg");
	this.shape_791.setTransform(157.7,12.3);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#000000").ss(1.5,1,1).p("AgZx1QAOAKANAJQLzWGgBAPQAAAPyqKSQijBZibBJ");
	this.shape_792.setTransform(158.7,11.3);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FF6600").s().p("Ar0x1ILbAAIAcATQLyWGgBAOQAAAQypKSQikBZibBJg");
	this.shape_793.setTransform(158.7,11.3);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#000000").ss(1.5,1,1).p("AA/xsQABABABABQGlMSDDFyQgEBcAFBLQAEAdAEAYQAEANACAJQAFAKgBAJQAAAEABAEQABAHgVASQgXAvgsA5QkyCuqiF0QgJAFgKAFQibBUiRBFQgIgNgHgN");
	this.shape_794.setTransform(152.1,12);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FF6600").s().p("Aq8RTMAAAgi/IL7AAIACACQGlMSDDFyQgEBcAFBLIAIA1IAGAWQAFAKgBAJIABAIQABAHgVASQgXAvgsA5QkyCuqiF0IgTAKQibBUiRBFIgPgag");
	this.shape_795.setTransform(152.1,12);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#000000").ss(1.5,1,1).p("ABJxrQGnMRDMGFQhMA3gbBNQgIAcgBAaQgBAOACAKQACAGgCAQQAAAJACAIQABALgHAQQAEBAAoAoQlAC2qRFqQgKAGgKAFQibBUiTBGQgPgBgOgB");
	this.shape_796.setTransform(151,11.9);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FF6600").s().p("Aq7RqMAAAgjVIMEAAQGnMRDMGFQhMA2gbBPQgIAbgBAaQgBAOACAKQACAFgCARIACARQABAKgHARQAEA/AoAoQlAC3qRFqIgUALQibBUiTBGIgdgCg");
	this.shape_797.setTransform(151,11.9);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#000000").ss(1.5,1,1).p("ABKx0QADACADACQGfMJDWGXQiVATg7BRQgTAZgHAdQgEAPAAALQAAABgCAYQAAAcAKAZQAgBRB8AXQlUDCqPFpQi0BiioBO");
	this.shape_798.setTransform(150.9,12.8);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FF6600").s().p("ArEx0IMOAAIAGAEQGfMJDWGXQiVATg7BRQgTAZgHAdQgEAPAAALIgCAZQAAAcAKAZQAgBRB8AXQlUDCqPFpQi0BiioBOg");
	this.shape_799.setTransform(150.9,12.8);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#000000").ss(1.5,1,1).p("ABMxvQADABACACQGgMMDRGLQhqApgoBPQgLAbgEAbQAAAdgCATQAAAKACAKQACANgCAOQAPBHBKAiQlEC4qFFkQgPAIgPAIQigBXiXBHQgOADgPAC");
	this.shape_800.setTransform(150.8,12.3);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FF6600").s().p("ArBxvIMNAAIAFADQGgMMDRGLQhqApgoBPQgLAbgEAbQAAAdgCATQAAAKACAKQACANgCAOQAPBHBKAiQlEC4qFFkIgeAQQigBXiXBHIgdAFg");
	this.shape_801.setTransform(150.8,12.3);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#000000").ss(1.5,1,1).p("ABHxxQAFAEAGAEQGhMODLGAQg+A/gUBOQgFAcgBAaQAFAegBAPQAAAHABAIQABAKgKAQQgBA9AXAsQk8CzqPFqQgPAHgPAJQigBXiXBHQgKgDgLgD");
	this.shape_802.setTransform(150.6,12);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FF6600").s().p("Aq9RrMAAAgjbIMDAAIAMAHQGhMODLGAQg+BAgUBNQgFAcgBAZQAFAegBAPIABAQQABAKgKAQQgBA9AXArQk8C0qPFpIgeAQQigBXiXBIIgVgHg");
	this.shape_803.setTransform(150.6,12);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#000000").ss(1.5,1,1).p("ABHxyQAGAEAFAEQGkMPDFF2QgTBVgBBMQACAdADAYQAJAggBAKQAAAFABAFQABAIgSARQgSAzgcA2Qk0CwqaFvQgOAIgPAIQigBXiWBGQgIgJgHgI");
	this.shape_804.setTransform(150.5,12.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FF6600").s().p("Aq6RhMAAAgjSIMBAAIALAHQGkMPDFF2QgTBWgBBLIAFA1QAJAggBALIABAJQABAIgSASQgSAzgcA1Qk0CwqaFvIgdAQQigBWiWBHIgPgSg");
	this.shape_805.setTransform(150.5,12.1);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#000000").ss(1.5,1,1).p("AAlxzQAFAEAFADQGlMRC/FsQAZBrASBKQAJAeAHAWQANAiAAAGQAAADAAACQABAFgaATQgiAphQBAQkrCqqlF2QgPAIgOAIQigBWiWBGQgEgOgDgO");
	this.shape_806.setTransform(153.9,12.2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FF6600").s().p("AraRYMAAAgjLIL/AAIAKAHQGlMRC/FsIArC1IAQA0QANAiAAAGIAAAFQABAFgaATQgiAphQBAQkrCqqlF2IgdAQQigBWiWBGIgHgcg");
	this.shape_807.setTransform(153.9,12.2);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#000000").ss(1.5,1,1).p("AgHx2QAJAGAKAHQLzWFgBAPQAAAPyqKTQiuBfikBL");
	this.shape_808.setTransform(157.7,12);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FF6600").s().p("Ar+x2IL3AAIAUANQLyWFgBAPQAAAPypKTQivBfikBLg");
	this.shape_809.setTransform(157.7,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_749},{t:this.shape_748}]}).to({state:[{t:this.shape_749},{t:this.shape_748}]},9).to({state:[{t:this.shape_751},{t:this.shape_750}]},1).to({state:[{t:this.shape_753},{t:this.shape_752}]},1).to({state:[{t:this.shape_755},{t:this.shape_754}]},1).to({state:[{t:this.shape_757},{t:this.shape_756}]},1).to({state:[{t:this.shape_759},{t:this.shape_758}]},1).to({state:[{t:this.shape_761},{t:this.shape_760}]},1).to({state:[{t:this.shape_763},{t:this.shape_762}]},1).to({state:[{t:this.shape_765},{t:this.shape_764}]},1).to({state:[{t:this.shape_767},{t:this.shape_766}]},1).to({state:[{t:this.shape_769},{t:this.shape_768}]},1).to({state:[{t:this.shape_771},{t:this.shape_770}]},1).to({state:[{t:this.shape_773},{t:this.shape_772}]},1).to({state:[{t:this.shape_775},{t:this.shape_774}]},1).to({state:[{t:this.shape_777},{t:this.shape_776}]},1).to({state:[{t:this.shape_779},{t:this.shape_778}]},1).to({state:[{t:this.shape_781},{t:this.shape_780}]},1).to({state:[{t:this.shape_783},{t:this.shape_782}]},1).to({state:[{t:this.shape_785},{t:this.shape_784}]},1).to({state:[{t:this.shape_787},{t:this.shape_786}]},1).to({state:[{t:this.shape_789},{t:this.shape_788}]},1).to({state:[{t:this.shape_791},{t:this.shape_790}]},41).to({state:[{t:this.shape_793},{t:this.shape_792}]},1).to({state:[{t:this.shape_795},{t:this.shape_794}]},1).to({state:[{t:this.shape_797},{t:this.shape_796}]},1).to({state:[{t:this.shape_799},{t:this.shape_798}]},1).to({state:[{t:this.shape_801},{t:this.shape_800}]},1).to({state:[{t:this.shape_803},{t:this.shape_802}]},1).to({state:[{t:this.shape_805},{t:this.shape_804}]},1).to({state:[{t:this.shape_807},{t:this.shape_806}]},1).to({state:[{t:this.shape_809},{t:this.shape_808}]},1).to({state:[{t:this.shape_791},{t:this.shape_790}]},29).to({state:[{t:this.shape_793},{t:this.shape_792}]},1).to({state:[{t:this.shape_795},{t:this.shape_794}]},1).to({state:[{t:this.shape_797},{t:this.shape_796}]},1).to({state:[{t:this.shape_799},{t:this.shape_798}]},1).to({state:[{t:this.shape_801},{t:this.shape_800}]},1).to({state:[{t:this.shape_803},{t:this.shape_802}]},1).to({state:[{t:this.shape_805},{t:this.shape_804}]},1).to({state:[{t:this.shape_807},{t:this.shape_806}]},1).to({state:[{t:this.shape_809},{t:this.shape_808}]},1).wait(45));

	// body
	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#000000").ss(1.5,1,1).p("AbXIGQknCloUEmUglCAUJgEwgi+UAZVgh0AXWAPzQDjGrCfEr");
	this.shape_810.setTransform(22.4,11.6);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FF6600").s().p("A7WAcUAZVgh0AXWAPzIGCLWIAAOVQknCloUEmQtjHXpNAAQwBAAjB2Mg");
	this.shape_811.setTransform(22.4,11.6);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#000000").ss(1.5,1,1).p("A7VAcUAZOgh0AXcAPzQDjGpCeErIAAOXQknCloTElUglEAUKgEtgi+g");
	this.shape_812.setTransform(22.5,11.7);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FF6600").s().p("A7VAcUAZNgh0AXdAPzIGBLUIAAOXQknCloTElQtkHYpNAAQwBAAi/2Mg");
	this.shape_813.setTransform(22.5,11.7);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#000000").ss(1.5,1,1).p("A7UAcUAZGgh0AXjAPzQDiGoCeEqIAAOZQkmCmoTEkUglFAULgErgi/g");
	this.shape_814.setTransform(22.5,11.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FF6600").s().p("A7UAcUAZGgh0AXjAPzIGALSIAAOZQknCmoSEkQtkHYpOAAQwAAAi+2Mg");
	this.shape_815.setTransform(22.5,11.7);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#000000").ss(1.5,1,1).p("A7TAbUAY/gh0AXoAPzQDiGnCeEqIAAObQknCmoSEkUglGAUMgEogjBg");
	this.shape_816.setTransform(22.5,11.7);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FF6600").s().p("A7TAbUAZAgh0AXnAPzIGALRIAAObQknCmoSEkQtlHZpNAAQwAAAi82Og");
	this.shape_817.setTransform(22.5,11.7);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#000000").ss(1.5,1,1).p("A7SAbUAY4gh0AXuAPzQDhGmCeEqIAAOdQknCloREkUglHAUNgEmgjCg");
	this.shape_818.setTransform(22.5,11.7);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FF6600").s().p("A7SAbUAY4gh0AXuAPzIF/LQIAAOdQknCloREkQtlHZpOAAQv/AAi72Og");
	this.shape_819.setTransform(22.5,11.7);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#000000").ss(1.5,1,1).p("A7RAbUAYxgh0AX0APzQDgGlCeEoIAAOgQknCloQEjUglIAUPgEkgjDg");
	this.shape_820.setTransform(22.6,11.8);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FF6600").s().p("A7RAbUAYxgh0AX0APzIF9LNIAAOgQkmCloQEjQtmHapOAAQv/AAi52Og");
	this.shape_821.setTransform(22.6,11.8);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#000000").ss(1.5,1,1).p("A7QAbUAYqgh0AX6APzQDgGjCdEpIAAOhQkmCloQEjUglJAUQgEigjEg");
	this.shape_822.setTransform(22.6,11.8);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FF6600").s().p("A7QAbUAYqgh0AX6APzIF9LMIAAOhQkmCloQEjQtnHapNAAQv/AAi42Og");
	this.shape_823.setTransform(22.6,11.8);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#000000").ss(1.5,1,1).p("A7PAaUAYjgh0AX/APzQDfGjCeEoIAAOjQknCloPEjUglJAUQgEggjFg");
	this.shape_824.setTransform(22.6,11.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FF6600").s().p("A7OAaUAYhgh0AYAAPzIF8LLIAAOjQkmCloPEjQtnHapNAAQv/AAi12Pg");
	this.shape_825.setTransform(22.6,11.8);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#000000").ss(1.5,1,1).p("A7NAaUAYagh0AYGAPzQDeGiCdEnIAAOmQkmCloOEiUglLAURgEcgjGg");
	this.shape_826.setTransform(22.6,11.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FF6600").s().p("A7NAaUAYagh0AYGAPzIF7LJIAAOmQkmCloOEiQtoHbpNAAQv+AAi02Qg");
	this.shape_827.setTransform(22.6,11.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#000000").ss(1.5,1,1).p("A7MAaUAYTgh0AYMAPzQDeGgCcEnIAAOoQkmCloOEhUglMAUTgEZgjHg");
	this.shape_828.setTransform(22.7,11.9);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FF6600").s().p("A7MAaUAYTgh0AYMAPzIF6LHIAAOoQkmCloNEhQtpHcpNAAQv+AAiy2Qg");
	this.shape_829.setTransform(22.7,11.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#000000").ss(1.5,1,1).p("A7LAaUAYMgh0AYSAPzQDdGfCcEmIAAOqQklCloOEhUglNAUUgEXgjIg");
	this.shape_830.setTransform(22.7,11.9);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FF6600").s().p("A7LAaUAYMgh0AYSAPzIF5LFIAAOqQkmCloMEhQtpHcpOAAQv9AAix2Qg");
	this.shape_831.setTransform(22.7,11.9);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#000000").ss(1.5,1,1).p("A7KAZUAYFgh0AYXAPzQDdGeCcEmIAAOsQkmCloMEhUglOAUVgEVgjKg");
	this.shape_832.setTransform(22.7,11.9);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FF6600").s().p("A7KAZUAYFgh0AYXAPzIF5LEIAAOsQkmCloMEhQtpHcpOABQv9AAiv2Sg");
	this.shape_833.setTransform(22.7,11.9);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#000000").ss(1.5,1,1).p("A7JAZUAX+gh0AYdAPzQDcGdCcElIAAOvQkmCkoLEhUglPAUWgETgjLg");
	this.shape_834.setTransform(22.7,11.9);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FF6600").s().p("A7JAZUAX+gh0AYdAPzIF4LCIAAOvQkmCkoLEhQtqHdpNAAQv9AAiu2Sg");
	this.shape_835.setTransform(22.7,11.9);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#000000").ss(1.5,1,1).p("A7IAZUAX2gh0AYkAPzQDbGbCcElIAAOxQkmCkoKEgUglRAUXgEQgjLg");
	this.shape_836.setTransform(22.8,12);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FF6600").s().p("A7IAZUAX2gh0AYkAPzIF2LAIAAOxQklCkoKEgQtrHepNAAQv8AAit2Sg");
	this.shape_837.setTransform(22.8,12);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#000000").ss(1.5,1,1).p("A7HAZUAXvgh0AYqAPzQDbGaCbElIAAOyQkmCloJEfUglSAUYgEOgjMg");
	this.shape_838.setTransform(22.8,12);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FF6600").s().p("A7HAZUAXwgh0AYpAPzIF1K/IAAOyQklCloJEfQtrHepOAAQv8AAir2Sg");
	this.shape_839.setTransform(22.8,12);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#000000").ss(1.5,1,1).p("A7GAYUAXpgh0AYuAPzQDbGaCbEjIAAO1QkmCloJEfUglTAUZgELgjOg");
	this.shape_840.setTransform(22.8,12);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FF6600").s().p("A7GAYUAXogh0AYvAPzIF2K9IAAO1QkmCloJEfQtsHfpNAAQv7AAiq2Ug");
	this.shape_841.setTransform(22.8,12);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#000000").ss(1.5,1,1).p("A7EAYUAXggh0AY1APzQDaGYCaEkIAAO3QklCkoIEfUglUAUagEIgjPg");
	this.shape_842.setTransform(22.8,12);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FF6600").s().p("A7EAYUAXggh0AY1APzIF0K8IAAO3QklCkoIEfQtsHfpOAAQv7AAin2Ug");
	this.shape_843.setTransform(22.8,12);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#000000").ss(1.5,1,1).p("A7DAYUAXZgh0AY7APzQDZGXCaEjIAAO5QklCkoIEeUglUAUcgEGgjQg");
	this.shape_844.setTransform(22.9,12.1);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FF6600").s().p("A7DAYUAXZgh0AY7APzIFzK6IAAO5QklCkoHEeQttHgpOAAQv6AAim2Ug");
	this.shape_845.setTransform(22.9,12.1);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#000000").ss(1.5,1,1).p("A7CAYUAXSgh0AZBAPzQDYGWCaEiIAAO7QklCloGEdUglWAUdgEEgjRg");
	this.shape_846.setTransform(22.9,12.1);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FF6600").s().p("A7CAYUAXSgh0AZBAPzIFyK4IAAO7QklCloGEdQtuHgpNAAQv6AAil2Ug");
	this.shape_847.setTransform(22.9,12.1);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#000000").ss(1.5,1,1).p("A7BAXUAXLgh0AZGAPzQDYGVCaEiIAAO9QklCkoGEeUglWAUdgECgjSg");
	this.shape_848.setTransform(22.9,12.1);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FF6600").s().p("A7BAXUAXLgh0AZGAPzIFyK3IAAO9QklCkoGEeQtuHgpNAAQv6ABij2Wg");
	this.shape_849.setTransform(22.9,12.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#000000").ss(1.5,1,1).p("A7AAXUAXEgh0AZMAPzQDXGTCaEiIAAO/QklCkoFEdUglYAUfgD/gjTg");
	this.shape_850.setTransform(22.9,12.2);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FF6600").s().p("A7AAXUAXEgh0AZMAPzIFxK1IAAO/QklCkoFEdQtvHipNAAQv6AAih2Wg");
	this.shape_851.setTransform(22.9,12.2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#000000").ss(1.5,1,1).p("A6/AXUAW9gh0AZSAPzQDWGSCaEhIAAPCQklCkoEEcUglZAUggD9gjUg");
	this.shape_852.setTransform(23,12.2);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FF6600").s().p("A6+AXUAW7gh0AZTAPzIFvKzIAAPCQkkCkoEEcQtwHipNAAQv5AAif2Wg");
	this.shape_853.setTransform(23,12.2);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#000000").ss(1.5,1,1).p("A69AXUAW0gh0AZZAPzQDWGRCYEgIAAPEQkkCkoDEcUglbAUhgD5gjVg");
	this.shape_854.setTransform(23,12.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FF6600").s().p("A69AXUAW0gh0AZZAPzIFuKxIAAPEQkkCkoDEcQtwHipOAAQv4AAie2Wg");
	this.shape_855.setTransform(23,12.2);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#000000").ss(1.5,1,1).p("A68AWUAWtgh0AZeAPzQDWGQCYEgIAAPGQkkCkoDEcUglbAUigD3gjXg");
	this.shape_856.setTransform(23,12.2);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FF6600").s().p("A68AWUAWtgh0AZeAPzIFuKwIAAPGQkkCkoDEcQtwHjpNAAQv5AAic2Yg");
	this.shape_857.setTransform(23,12.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#000000").ss(1.5,1,1).p("A67AWUAWmgh0AZkAPzQDVGPCYEfIAAPJQkkCkoCEbUglcAUjgD1gjYg");
	this.shape_858.setTransform(23,12.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FF6600").s().p("A67AWUAWmgh0AZkAPzIFtKuIAAPJQkkCkoCEbQtxHjpNAAQv4AAib2Yg");
	this.shape_859.setTransform(23,12.2);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#000000").ss(1.5,1,1).p("A66AWUAWfgh0AZqAPzQDUGOCYEeIAAPLQkkCkoBEaUgleAUkgDygjYg");
	this.shape_860.setTransform(23.1,12.3);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FF6600").s().p("A66AWUAWegh0AZrAPzIFsKsIAAPLQkkCkoBEaQtyHkpNAAQv4AAiZ2Yg");
	this.shape_861.setTransform(23.1,12.3);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#000000").ss(1.5,1,1).p("A65AVUAWYgh0AZwAPzQDTGNCYEeIAAPNQkkCjoAEbUglfAUlgDwgjag");
	this.shape_862.setTransform(23.1,12.3);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FF6600").s().p("A65AVUAWYgh0AZwAPzIFrKrIAAPNQkkCjoAEbQtzHkpNAAQv3AAiY2Zg");
	this.shape_863.setTransform(23.1,12.3);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#000000").ss(1.5,1,1).p("A64AVUAWRgh0AZ1APzQDTGMCYEeIAAPOQkkCkoAEaUglfAUmgDugjbg");
	this.shape_864.setTransform(23.1,12.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FF6600").s().p("A64AVUAWRgh0AZ1APzIFrKqIAAPOQkkCkoAEaQtyHlpOAAQv3AAiW2ag");
	this.shape_865.setTransform(23.1,12.3);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#000000").ss(1.5,1,1).p("A63AVUAWJgh0AZ8APzQDSGLCYEdIAAPRQkkCjn/EaUglhAUngDrgjcg");
	this.shape_866.setTransform(23.1,12.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FF6600").s().p("A63AVUAWJgh0AZ8APzIFqKoIAAPRQkkCjn/EZQt0HmpNAAQv2AAiV2ag");
	this.shape_867.setTransform(23.1,12.3);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#000000").ss(1.5,1,1).p("A62AVUAWCgh0AaCAPzQDSGJCXEdIAAPTQkkCjn/EZUglhAUpgDpgjdg");
	this.shape_868.setTransform(23.2,12.4);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FF6600").s().p("A61AVUAWBgh0AaCAPzIFpKmIAAPTQklCjn9EZQt0HmpNAAQv3AAiS2ag");
	this.shape_869.setTransform(23.2,12.4);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#000000").ss(1.5,1,1).p("A61AVUAV7gh0AaIAPzQDRGICXEcIAAPVQkkCkn+EYUgliAUqgDngjeg");
	this.shape_870.setTransform(23.2,12.4);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FF6600").s().p("A60AVUAV6gh0AaIAPzQDRGICXEcIAAPVQkkCkn9EYQt1HmpNAAQv2AAiR2ag");
	this.shape_871.setTransform(23.2,12.4);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#000000").ss(1.5,1,1).p("A6zAUUAVzgh0AaNAPzQDRGHCWEcIAAPXQkjCkn9EYUgljAUqgDkgjfg");
	this.shape_872.setTransform(23.2,12.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FF6600").s().p("A6zAUUAVzgh0AaNAPzIFnKjIAAPXQkjCkn9EYQt1HmpNABQv1AAiQ2cg");
	this.shape_873.setTransform(23.2,12.4);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#000000").ss(1.5,1,1).p("A6yAUUAVsgh0AaTAPzQDQGGCWEbIAAPZQkkCkn7EXUgllAUsgDhgjgg");
	this.shape_874.setTransform(23.2,12.5);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FF6600").s().p("A6yAUUAVsgh0AaTAPzIFmKhIAAPZQkkCkn7EXQt2HopNAAQv1AAiO2cg");
	this.shape_875.setTransform(23.2,12.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#000000").ss(1.5,1,1).p("A6xAUUAVkgh0AaaAPzQDPGECWEbIAAPcQkjCjn7EXUglnAUtgDegjhg");
	this.shape_876.setTransform(23.3,12.5);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FF6600").s().p("A6xAUUAVkgh0AaaAPzIFlKfIAAPcQkkCjn6EXQt3HopNAAQv0AAiN2cg");
	this.shape_877.setTransform(23.3,12.5);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#000000").ss(1.5,1,1).p("A6wATUAVdgh0AagAPzQDPGECVEaIAAPeQkjCjn6EXUgloAUugDcgjjg");
	this.shape_878.setTransform(23.3,12.5);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FF6600").s().p("A6wATUAVegh0AafAPzIFkKeIAAPeQkkCjn5EXQt3HopNAAQv1AAiL2dg");
	this.shape_879.setTransform(23.3,12.5);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#000000").ss(1.5,1,1).p("A6vATUAVWgh0AalAPzQDOGDCWEZIAAPgQkjCjn6EXUgloAUvgDagjkg");
	this.shape_880.setTransform(23.3,12.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FF6600").s().p("A6vATUAVWgh0AalAPzIFkKcIAAPgQkjCjn6EXQt3HppNAAQv0AAiK2eg");
	this.shape_881.setTransform(23.3,12.5);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#000000").ss(1.5,1,1).p("A6uATUAVPgh0AarAPzQDNGBCWEaIAAPiQkjCjn5EWUglpAUwgDYgjlg");
	this.shape_882.setTransform(23.3,12.5);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FF6600").s().p("A6uATUAVPgh0AarAPzIFiKbIAAPiQkiCjn5EWQt4HppNAAQvzAAiJ2eg");
	this.shape_883.setTransform(23.3,12.5);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#000000").ss(1.5,1,1).p("A6tATUAVIgh0AaxAPzQDNGACVEYIAAPlQkkCjn4EVUglqAUygDVgjmg");
	this.shape_884.setTransform(23.4,12.6);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FF6600").s().p("A6tATUAVIgh0AaxAPzIFiKYIAAPlQkkCjn3EVQt5HqpNAAQvzAAiH2eg");
	this.shape_885.setTransform(23.4,12.6);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#000000").ss(1.5,1,1).p("A6sASUAVBgh0Aa3APzQDMF/CVEYIAAPnQkjCjn3EVUglsAUygDTgjng");
	this.shape_886.setTransform(23.4,12.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FF6600").s().p("A6sASUAVBgh0Aa3APzIFhKXIAAPnQkkCjn2EVQt6HqpNAAQvzAAiF2fg");
	this.shape_887.setTransform(23.4,12.6);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#000000").ss(1.5,1,1).p("A6qASUAU5gh0Aa8APzQDMF+CUEYIAAPoQkiCjn3EVUglsAUzgDQgjog");
	this.shape_888.setTransform(23.4,12.6);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FF6600").s().p("A6qASUAU5gh0Aa8APzIFgKWIAAPoQkiCjn3EVQt6HrpNAAQvyAAiD2gg");
	this.shape_889.setTransform(23.4,12.6);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#000000").ss(1.5,1,1).p("A6pASUAUxgh0AbDAPzQDLF8CUEXIAAPrQkjCjn1EUUgluAU1gDNgjpg");
	this.shape_890.setTransform(23.4,12.7);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FF6600").s().p("A6pASUAUxgh0AbDAPzIFfKTIAAPrQkjCjn1EUQt6HspNAAQvyAAiC2gg");
	this.shape_891.setTransform(23.4,12.7);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#000000").ss(1.5,1,1).p("A6oASUAUqgh0AbJAPzQDKF7CUEXIAAPtQkjCin0EUUglvAU2gDLgjqg");
	this.shape_892.setTransform(23.5,12.7);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FF6600").s().p("A6oASUAUqgh0AbJAPzIFeKSIAAPtQkjCin0EUQt7HspNAAQvyAAiA2gg");
	this.shape_893.setTransform(23.5,12.7);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#000000").ss(1.5,1,1).p("A6nASUAUjgh0AbPAPzQDJF6CUEWIAAPvQkiCjn0ETUglwAU3gDJgjrg");
	this.shape_894.setTransform(23.5,12.7);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FF6600").s().p("A6nASUAUjgh0AbPAPzIFdKQIAAPvQkjCjnzETQt8HspNAAQvxAAh/2gg");
	this.shape_895.setTransform(23.5,12.7);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#000000").ss(1.5,1,1).p("A6mARUAUcgh0AbUAPzQDKF5CTEWIAAPxQkjCjnzETUglxAU4gDGgjtg");
	this.shape_896.setTransform(23.5,12.7);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FF6600").s().p("A6mARUAUcgh0AbUAPzQDKF5CTEWIAAPxQkjCjnzETQt8HtpNAAQvxAAh92ig");
	this.shape_897.setTransform(23.5,12.7);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#000000").ss(1.5,1,1).p("A6lARUAUVgh0AbaAPzQDJF4CTEVIAAPzQkiCjnzESUglyAU5gDEgjtg");
	this.shape_898.setTransform(23.5,12.8);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FF6600").s().p("A6kARUAUUgh0AbaAPzQDJF4CTEVIAAPzQkjCjnyESQt9HupNAAQvwAAh72ig");
	this.shape_899.setTransform(23.5,12.8);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#000000").ss(1.5,1,1).p("A6kARUAUNgh0AbhAPzQDIF3CTEUIAAP2QkjCinxESUgl0AU6gDBgjug");
	this.shape_900.setTransform(23.6,12.8);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FF6600").s().p("A6kARUAUNgh0AbhAPzIFaKLIAAP2QkiCinxESQt+HupNAAQvwAAh62ig");
	this.shape_901.setTransform(23.6,12.8);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#000000").ss(1.5,1,1).p("A6jAQUAUHgh0AbmAPzQDHF2CTEUIAAP4QkiCinxESUgl1AU7gC/gjwg");
	this.shape_902.setTransform(23.6,12.8);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FF6600").s().p("A6jAQUAUHgh0AbmAPzIFaKKIAAP4QkjCinwESQt+HupNAAQvwAAh52jg");
	this.shape_903.setTransform(23.6,12.8);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#000000").ss(1.5,1,1).p("A6hAQUAT+gh0AbsAPzQDHF1CSETIAAP6QkiCjnwERUgl1AU8gC8gjxg");
	this.shape_904.setTransform(23.6,12.8);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FF6600").s().p("A6hAQUAT+gh0AbsAPzIFZKIIAAP6QkiCjnwERQt+HvpNAAQvvAAh32kg");
	this.shape_905.setTransform(23.6,12.8);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#000000").ss(1.5,1,1).p("A6gAQUAT3gh0AbyAPzQDGF0CSETIAAP8QkhCinwERUgl2AU9gC6gjyg");
	this.shape_906.setTransform(23.6,12.8);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FF6600").s().p("A6gAQUAT3gh0AbyAPzIFYKHIAAP7QkiCinvERQt/HwpNAAQvvAAh12kg");
	this.shape_907.setTransform(23.6,12.8);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#000000").ss(1.5,1,1).p("A6fAQUATwgh0Ab4APzQDFFyCSETIAAP+QkiCinvEQUgl3AU/gC3gjzg");
	this.shape_908.setTransform(23.7,12.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FF6600").s().p("A6fAQUATwgh0Ab4APzIFXKFIAAP+QkiCinuEQQuAHwpNAAQvvAAhz2kg");
	this.shape_909.setTransform(23.7,12.9);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#000000").ss(1.5,1,1).p("A6eAPUATpgh0Ab+APzQDFFxCRESIAAQBQkiCinuEQUgl4AU/gC1gj0g");
	this.shape_910.setTransform(23.7,12.9);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FF6600").s().p("A6eAPUATpgh0Ab+APzIFWKDIAAQBQkhCinuEQQuBHwpNAAQvuABhy2mg");
	this.shape_911.setTransform(23.7,12.9);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#000000").ss(1,1,1).p("AAAICIAAwD");
	this.shape_912.setTransform(193.1,14.6);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#000000").ss(1.5,1,1).p("AaeISQkiCintEQUgl5AVAgCzgj1UATigh0AcDAPzQDFFwCRER");
	this.shape_913.setTransform(23.7,12.9);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FF6600").s().p("A6dAPUATigh0AcDAPzIFWKBIAAQDQkiCintEQQuBHxpMAAQvuAAhx2mg");
	this.shape_914.setTransform(23.7,12.9);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("#000000").ss(1.5,1,1).p("A6fAQUATtgh0Ab7APzQDFFxCSETIAAP/QkiCinuEQUgl5AU/gC2gjzg");
	this.shape_915.setTransform(23.7,12.9);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FF6600").s().p("A6eAQUATrgh0Ab8APzIFXKEIAAP/QkjCintEQQuBHwpMAAQvvAAhy2kg");
	this.shape_916.setTransform(23.7,12.9);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("#000000").ss(1.5,1,1).p("A6gAQUAT2gh0AbzAPzQDGFzCSETIAAP8QkhCinwERUgl3AU+gC5gjyg");
	this.shape_917.setTransform(23.6,12.9);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FF6600").s().p("A6gAQUAT3gh0AbyAPzIFYKGIAAP8QkiCinvERQt/HwpNAAQvvAAh12kg");
	this.shape_918.setTransform(23.6,12.9);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("#000000").ss(1.5,1,1).p("A6iAQUAUCgh0AbpAPzQDHF1CTEUIAAP5QkiCinxESUgl0AU7gC+gjwg");
	this.shape_919.setTransform(23.6,12.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FF6600").s().p("A6iAQUAUCgh0AbpAPzIFaKJIAAP5QkiCinxESQt+HupNAAQvvAAh42jg");
	this.shape_920.setTransform(23.6,12.8);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("#000000").ss(1.5,1,1).p("A6jARUAUMgh0AbhAPzQDIF2CSEVIAAP2QkiCinxESUglzAU6gDBgjug");
	this.shape_921.setTransform(23.5,12.8);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FF6600").s().p("A6jARUAUMgh0AbhAPzIFaKLIAAP2QkiCinxESQt+HupMAAQvxAAh52ig");
	this.shape_922.setTransform(23.5,12.8);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("#000000").ss(1.5,1,1).p("A6lARUAUWgh0AbZAPzQDJF5CTEVIAAPzQkiCinzETUglyAU4gDEgjtg");
	this.shape_923.setTransform(23.5,12.7);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FF6600").s().p("A6lARUAUWgh0AbZAPzIFcKOIAAPzQkjCinyETQt9HtpMAAQvxAAh82ig");
	this.shape_924.setTransform(23.5,12.7);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("#000000").ss(1.5,1,1).p("A6nARUAUhgh0AbRAPzQDJF6CUEWIAAPwQkiCin0EUUglxAU3gDIgjsg");
	this.shape_925.setTransform(23.5,12.7);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FF6600").s().p("A6mARUAUggh0AbRAPzQDKF6CSEWIAAPwQkhCin0EUQt8HspNAAQvxABh+2ig");
	this.shape_926.setTransform(23.5,12.7);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("#000000").ss(1.5,1,1).p("A6oASUAUsgh0AbHAPzQDKF7CUEXIAAPtQkiCin1EUUglvAU2gDLgjqg");
	this.shape_927.setTransform(23.4,12.7);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FF6600").s().p("A6oASUAUsgh0AbHAPzIFeKSIAAPtQkiCin1EUQt7HspNAAQvyAAiA2gg");
	this.shape_928.setTransform(23.4,12.7);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("#000000").ss(1.5,1,1).p("A6qASUAU3gh0Aa+APzQDMF+CUEXIAAPpQkjCjn2EVUgltAU0gDPgjpg");
	this.shape_929.setTransform(23.4,12.6);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FF6600").s().p("A6qASUAU3gh0Aa+APzIFgKVIAAPpQkjCjn2EVQt6HrpNAAQvyAAiD2gg");
	this.shape_930.setTransform(23.4,12.6);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("#000000").ss(1.5,1,1).p("A6sATUAVCgh0Aa2APzQDMF/CVEYIAAPmQkjCjn3EVUglsAUygDTgjmg");
	this.shape_931.setTransform(23.4,12.6);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FF6600").s().p("A6sATUAVBgh0Aa3APzIFhKXIAAPmQkkCjn2EVQt5HqpOAAQvyAAiG2eg");
	this.shape_932.setTransform(23.4,12.6);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("#000000").ss(1.5,1,1).p("A6tATUAVLgh0AauAPzQDNGACVEZIAAPjQkjCjn4EWUglqAUxgDWgjlg");
	this.shape_933.setTransform(23.3,12.6);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FF6600").s().p("A6tATUAVLgh0AauAPzIFiKZIAAPjQkjCjn4EWQt4HqpNAAQv0AAiH2eg");
	this.shape_934.setTransform(23.3,12.6);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("#000000").ss(1.5,1,1).p("A6vATUAVXgh0AakAPzQDOGDCWEZIAAPgQkjCjn6EXUgloAUvgDagjkg");
	this.shape_935.setTransform(23.3,12.5);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FF6600").s().p("A6vATUAVXgh0AakAPzIFkKcIAAPgQkjCjn6EXQt3HppNAAQv0AAiK2eg");
	this.shape_936.setTransform(23.3,12.5);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("#000000").ss(1.5,1,1).p("A6xAUUAVhgh0AadAPzQDPGECWEaIAAPdQkkCjn6EXUglnAUugDegjig");
	this.shape_937.setTransform(23.3,12.5);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FF6600").s().p("A6xAUUAVhgh0AadAPzIFkKeIAAPdQkjCjn6EXQt3HopNAAQv1AAiM2cg");
	this.shape_938.setTransform(23.3,12.5);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("#000000").ss(1.5,1,1).p("A6yAUUAVsgh0AaTAPzQDQGFCWEcIAAPZQkjCkn8EXUgllAUsgDhgjgg");
	this.shape_939.setTransform(23.2,12.5);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FF6600").s().p("A6yAUUAVsgh0AaTAPzIFmKhIAAPZQkjCkn8EXQt2HopNAAQv1AAiO2cg");
	this.shape_940.setTransform(23.2,12.5);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("#000000").ss(1.5,1,1).p("A60AUUAV2gh0AaLAPzQDRGICXEcIAAPWQkkCjn9EZUgljAUqgDlgjfg");
	this.shape_941.setTransform(23.2,12.4);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FF6600").s().p("A60AUUAV2gh0AaLAPzIFoKkIAAPWQkkCjn9EZQt1HmpNABQv1AAiR2cg");
	this.shape_942.setTransform(23.2,12.4);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("#000000").ss(1.5,1,1).p("A62AVUAWBgh0AaDAPzQDSGJCXEcIAAPUQkkCjn/EZUglhAUpgDpgjdg");
	this.shape_943.setTransform(23.2,12.4);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FF6600").s().p("A61AVUAWAgh0AaDAPzIFpKlIAAPUQklCjn9EZQt0HmpNAAQv3AAiS2ag");
	this.shape_944.setTransform(23.2,12.4);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f().s("#000000").ss(1.5,1,1).p("A63AVUAWMgh0AZ5APzQDTGLCXEdIAAPRQkkCjn/EaUglgAUngDsgjcg");
	this.shape_945.setTransform(23.1,12.3);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FF6600").s().p("A63AVUAWMgh0AZ5APzIFqKoIAAPRQkkCjn/EaQtzHlpNAAQv3AAiV2ag");
	this.shape_946.setTransform(23.1,12.3);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f().s("#000000").ss(1.5,1,1).p("A65AVUAWWgh0AZxAPzQDUGNCYEeIAAPNQklCkoAEaUgleAUlgDwgjag");
	this.shape_947.setTransform(23.1,12.3);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FF6600").s().p("A65AVUAWWgh0AZxAPzIFsKrIAAPNQklCkoAEaQtyHkpNAAQv3AAiY2Zg");
	this.shape_948.setTransform(23.1,12.3);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().s("#000000").ss(1.5,1,1).p("A66AWUAWggh0AZpAPzQDUGOCYEfIAAPKQkkCjoBEbUgldAUkgDzgjYg");
	this.shape_949.setTransform(23,12.3);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FF6600").s().p("A66AWUAWggh0AZpAPzIFsKtIAAPKQkkCjoBEbQtyHkpNAAQv4AAiZ2Yg");
	this.shape_950.setTransform(23,12.3);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f().s("#000000").ss(1.5,1,1).p("A68AWUAWrgh0AZgAPzQDWGQCYEgIAAPGQkkCkoDEcUglcAUigD2gjXg");
	this.shape_951.setTransform(23,12.2);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FF6600").s().p("A68AWUAWrgh0AZgAPzIFuKwIAAPGQkkCkoDEcQtxHjpNAAQv4AAic2Yg");
	this.shape_952.setTransform(23,12.2);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f().s("#000000").ss(1.5,1,1).p("A69AXUAW1gh0AZYAPzQDWGRCYEhIAAPDQkkCkoDEcUglbAUhgD5gjVg");
	this.shape_953.setTransform(23,12.2);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FF6600").s().p("A69AXUAW1gh0AZYAPzIFuKyIAAPDQkkCkoDEcQtwHipOAAQv4AAie2Wg");
	this.shape_954.setTransform(23,12.2);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f().s("#000000").ss(1.5,1,1).p("A6/AXUAXAgh0AZPAPzQDXGTCZEhIAAPAQklCloEEcUglYAUfgD+gjTg");
	this.shape_955.setTransform(22.9,12.2);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FF6600").s().p("A6/AXUAXAgh0AZPAPzIFwK0IAAPAQklCloEEcQtvHipNAAQv6AAig2Wg");
	this.shape_956.setTransform(22.9,12.2);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("#000000").ss(1.5,1,1).p("A7BAXUAXLgh0AZGAPzQDYGVCaEiIAAO9QklCkoGEeUglXAUdgEBgjSg");
	this.shape_957.setTransform(22.9,12.1);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#000000").ss(1.5,1,1).p("A7DAYUAXWgh0AY+APzQDZGWCaEjIAAO6QklCkoHEeUglWAUcgEFgjQg");
	this.shape_958.setTransform(22.9,12.1);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FF6600").s().p("A7DAYUAXWgh0AY+APzIFzK5IAAO6QkmCkoGEeQtuHgpNAAQv6AAim2Ug");
	this.shape_959.setTransform(22.9,12.1);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#000000").ss(1.5,1,1).p("A7GAYUAXrgh0AYsAPzQDbGaCbEkIAAO0QkmCloJEfUglSAUZgEMgjOg");
	this.shape_960.setTransform(22.8,12);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FF6600").s().p("A7GAYUAXrgh0AYsAPzIF2K+IAAO0QkmCloJEfQtrHepOAAQv7ABiq2Ug");
	this.shape_961.setTransform(22.8,12);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#000000").ss(1.5,1,1).p("A7IAZUAX2gh0AYkAPzQDbGbCcElIAAOxQkmCkoKEgUglRAUYgEQgjMg");
	this.shape_962.setTransform(22.8,12);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FF6600").s().p("A7IAZUAX2gh0AYkAPzIF2LAIAAOxQklCkoKEgQtrHepNAAQv9AAis2Sg");
	this.shape_963.setTransform(22.8,12);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#000000").ss(1.5,1,1).p("A7JAZUAYAgh0AYbAPzQDdGdCbEmIAAOuQklCkoMEhUglPAUVgETgjKg");
	this.shape_964.setTransform(22.7,11.9);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FF6600").s().p("A7JAZUAYAgh0AYbAPzIF4LDIAAOuQklCkoMEhQtpHdpOAAQv8AAiv2Sg");
	this.shape_965.setTransform(22.7,11.9);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#000000").ss(1.5,1,1).p("A7LAaUAYLgh0AYSAPzQDeGfCcEmIAAOqQkmCloNEhUglNAUUgEXgjIg");
	this.shape_966.setTransform(22.7,11.9);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FF6600").s().p("A7LAaUAYLgh0AYSAPzIF6LFIAAOqQkmCloNEhQtoHcpOAAQv9AAix2Qg");
	this.shape_967.setTransform(22.7,11.9);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#000000").ss(1.5,1,1).p("A7NAaUAYWgh0AYKAPzQDeGgCdEnIAAOoQknCloOEhUglLAUTgEbgjHg");
	this.shape_968.setTransform(22.7,11.9);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FF6600").s().p("A7MAaUAYVgh0AYKAPzIF7LHIAAOoQknCloNEhQtoHcpOAAQv9AAiz2Qg");
	this.shape_969.setTransform(22.7,11.9);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#000000").ss(1.5,1,1).p("A7OAaUAYggh0AYBAPzQDfGiCdEoIAAOkQkmCloPEjUglKAURgEegjGg");
	this.shape_970.setTransform(22.6,11.8);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FF6600").s().p("A7OAaUAYggh0AYBAPzIF8LKIAAOkQkmCloPEjQtnHbpNAAQv/AAi12Qg");
	this.shape_971.setTransform(22.6,11.8);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#000000").ss(1.5,1,1).p("A7QAbUAYrgh0AX4APzQDgGkCeEoIAAOhQknCloQEjUglIAUQgEigjEg");
	this.shape_972.setTransform(22.6,11.8);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FF6600").s().p("A7QAbUAYrgh0AX4APzIF+LMIAAOhQknCloQEjQtmHapNAAQv/AAi42Og");
	this.shape_973.setTransform(22.6,11.8);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#000000").ss(1.5,1,1).p("A7RAbUAY1gh0AXwAPzQDhGlCdEqIAAOdQkmCmoREjUglHAUOgElgjCg");
	this.shape_974.setTransform(22.5,11.8);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FF6600").s().p("A7RAbUAY1gh0AXwAPzIF+LPIAAOdQkmCmoREjQtmHapNAAQwAAAi52Og");
	this.shape_975.setTransform(22.5,11.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#000000").ss(1.5,1,1).p("A7TAbUAZAgh0AXnAPzQDiGnCeEqIAAObQknCmoSEkUglFAUMgEpgjBg");
	this.shape_976.setTransform(22.5,11.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FF6600").s().p("A7TAbUAZAgh0AXnAPzIGALRIAAObQknCmoSEkQtkHYpOAAQwAAAi82Ng");
	this.shape_977.setTransform(22.5,11.7);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#000000").ss(1.5,1,1).p("A7VAcUAZLgh0AXfAPzQDiGpCfEqIAAOYQknCloTElUglEAULgEtgi/g");
	this.shape_978.setTransform(22.5,11.7);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FF6600").s().p("A7UAcUAZKgh0AXfAPzIGALTIAAOYQkmCloTElQtkHYpNAAQwBAAi+2Mg");
	this.shape_979.setTransform(22.5,11.7);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#000000").ss(1.5,1,1).p("A6eAQUATqgh0Ab9APzQDFFxCRESIAAQAQkiCinuEQUgl4AU/gC1gjzg");
	this.shape_980.setTransform(23.7,12.9);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FF6600").s().p("A6eAQUATrgh0Ab8APzIFWKDIAAQAQkhCinuEQQuBHwpMAAQvvAAhy2kg");
	this.shape_981.setTransform(23.7,12.9);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#000000").ss(1.5,1,1).p("A6gAQUAT0gh0Ab1APzQDGFzCSESIAAP9QkiCjnvEQUgl3AU+gC5gjyg");
	this.shape_982.setTransform(23.6,12.9);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FF6600").s().p("A6gAQUAT0gh0Ab1APzIFYKFIAAP9QkiCjnvEQQt/HwpNAAQvvAAh12kg");
	this.shape_983.setTransform(23.6,12.9);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#000000").ss(1.5,1,1).p("A6hAQUAT9gh0AbtAPzQDHF1CSETIAAP6QkiCjnwERUgl2AU8gC7gjxg");
	this.shape_984.setTransform(23.6,12.8);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FF6600").s().p("A6hAQUAT9gh0AbtAPzIFZKIIAAP6QkiCjnwERQt/HvpNAAQvvAAh22kg");
	this.shape_985.setTransform(23.6,12.8);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#000000").ss(1.5,1,1).p("A6kARUAUQgh0AbeAPzQDIF3CTEVIAAP1QkiCinyESUglzAU6gDCgjug");
	this.shape_986.setTransform(23.5,12.8);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FF6600").s().p("A6kARUAUQgh0AbeAPzIFbKMIAAP1QkiCinyESQt9HupNAAQvwAAh72ig");
	this.shape_987.setTransform(23.5,12.8);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#000000").ss(1.5,1,1).p("A6lARUAUZgh0AbWAPzQDJF5CTEVIAAPyQkiCjnzETUglxAU4gDFgjtg");
	this.shape_988.setTransform(23.5,12.7);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FF6600").s().p("A6lARUAUZgh0AbWAPzIFcKOIAAPyQkiCjnzETQt8HtpNAAQvxAAh82ig");
	this.shape_989.setTransform(23.5,12.7);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#000000").ss(1.5,1,1).p("A6nARUAUjgh0AbPAPzQDJF6CUEXIAAPvQkiCin0EUUglxAU3gDIgjsg");
	this.shape_990.setTransform(23.5,12.7);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FF6600").s().p("A6nARUAUjgh0AbPAPzIFdKRIAAPvQkjCinzEUQt8HspNAAQvyABh+2ig");
	this.shape_991.setTransform(23.5,12.7);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#000000").ss(1.5,1,1).p("A6qASUAU2gh0Aa/APzQDMF9CUEYIAAPqQkjCin2EVUgltAU0gDPgjpg");
	this.shape_992.setTransform(23.4,12.6);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FF6600").s().p("A6qASUAU2gh0Aa/APzIFgKVIAAPqQkjCin2EVQt6HrpNAAQvyAAiD2gg");
	this.shape_993.setTransform(23.4,12.6);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#000000").ss(1.5,1,1).p("A6rASUAU+gh0Aa4APzQDNF/CUEYIAAPnQkjCjn3EVUglrAUygDSgjng");
	this.shape_994.setTransform(23.4,12.6);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FF6600").s().p("A6rASUAU+gh0Aa4APzIFhKXIAAPnQkjCjn3EVQt5HqpNAAQvzAAiE2fg");
	this.shape_995.setTransform(23.4,12.6);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#000000").ss(1.5,1,1).p("A6tATUAVIgh0AaxAPzQDNGACVEYIAAPlQkkCjn4EVUglqAUxgDVgjlg");
	this.shape_996.setTransform(23.4,12.6);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("#000000").ss(1.5,1,1).p("A6uATUAVRgh0AapAPzQDOGCCVEZIAAPiQkjCjn5EWUglpAUwgDYgjlg");
	this.shape_997.setTransform(23.3,12.5);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FF6600").s().p("A6uATUAVRgh0AapAPzIFjKbIAAPiQkjCjn5EWQt4HppNAAQv0AAiI2eg");
	this.shape_998.setTransform(23.3,12.5);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f().s("#000000").ss(1.5,1,1).p("A6vATUAVagh0AahAPzQDPGDCVEaIAAPfQkjCjn6EXUglnAUugDbgjjg");
	this.shape_999.setTransform(23.3,12.5);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FF6600").s().p("A6vATUAVagh0AahAPzIFkKdIAAPfQkjCjn6EXQt3HopNAAQv0ABiK2eg");
	this.shape_1000.setTransform(23.3,12.5);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("#000000").ss(1.5,1,1).p("A6xAUUAVjgh0AabAPzQDPGECWEbIAAPcQkjCjn7EXUglnAUtgDegjhg");
	this.shape_1001.setTransform(23.3,12.5);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FF6600").s().p("A6xAUUAVjgh0AabAPzIFlKfIAAPcQkkCjn6EXQt3HopNAAQv0AAiN2cg");
	this.shape_1002.setTransform(23.3,12.5);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().s("#000000").ss(1.5,1,1).p("A6yAUUAVsgh0AaTAPzQDQGGCWEbIAAPaQkjCjn8EYUgllAUrgDhgjgg");
	this.shape_1003.setTransform(23.2,12.4);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FF6600").s().p("A6yAUUAVsgh0AaTAPzIFmKhIAAPaQkjCjn8EYQt2HnpNAAQv1AAiO2cg");
	this.shape_1004.setTransform(23.2,12.4);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f().s("#000000").ss(1.5,1,1).p("A61AVUAV/gh0AaEAPzQDRGJCXEcIAAPUQkjCjn+EZUgliAUpgDogjdg");
	this.shape_1005.setTransform(23.1,12.4);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FF6600").s().p("A61AVUAV/gh0AaEAPzIFoKlIAAPUQkjCjn+EZQt0HmpOAAQv2AAiS2ag");
	this.shape_1006.setTransform(23.1,12.4);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FF6600").s().p("A63AVUAWJgh0AZ8APzIFpKoIAAPRQkjCjn/EZQtzHmpNAAQv3AAiV2ag");
	this.shape_1007.setTransform(23.1,12.3);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#000000").ss(1.5,1,1).p("A64AVUAWSgh0AZ0APzQDTGMCYEeIAAPOQkkCkoAEaUglfAUmgDugjbg");
	this.shape_1008.setTransform(23.1,12.3);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FF6600").s().p("A64AVUAWSgh0AZ0APzIFrKqIAAPOQkkCkoAEaQtyHkpNAAQv3ABiX2ag");
	this.shape_1009.setTransform(23.1,12.3);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#000000").ss(1.5,1,1).p("A66AWUAWcgh0AZtAPzQDTGNCZEfIAAPLQklCkoBEaUgldAUlgDygjZg");
	this.shape_1010.setTransform(23.1,12.3);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FF6600").s().p("A66AWUAWcgh0AZtAPzIFsKsIAAPLQklCkoAEaQtyHkpNAAQv4AAiZ2Yg");
	this.shape_1011.setTransform(23.1,12.3);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#000000").ss(1.5,1,1).p("A67AWUAWlgh0AZlAPzQDVGOCYEgIAAPIQklCkoBEbUgldAUkgD0gjYg");
	this.shape_1012.setTransform(23,12.3);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FF6600").s().p("A67AWUAWlgh0AZlAPzQDVGOCYEgIAAPIQklCkoBEbQtxHkpOAAQv3AAib2Yg");
	this.shape_1013.setTransform(23,12.3);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#000000").ss(1.5,1,1).p("A69AWUAWugh0AZeAPzQDWGQCZEgIAAPGQklCkoDEcUglbAUigD4gjXg");
	this.shape_1014.setTransform(23,12.2);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FF6600").s().p("A69AWUAWvgh0AZdAPzIFvKwIAAPGQklCkoDEcQtwHjpOAAQv4AAid2Yg");
	this.shape_1015.setTransform(23,12.2);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#000000").ss(1.5,1,1).p("A6+AXUAW3gh0AZWAPzQDXGRCZEhIAAPDQklCkoEEcUglZAUhgD7gjVg");
	this.shape_1016.setTransform(23,12.2);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FF6600").s().p("A6+AXUAW3gh0AZWAPzIFwKyIAAPDQklCkoEEcQtvHipNAAQv5AAif2Wg");
	this.shape_1017.setTransform(23,12.2);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#000000").ss(1.5,1,1).p("A7BAXUAXKgh0AZHAPzQDYGVCaEiIAAO9QklCloGEdUglXAUegEBgjTg");
	this.shape_1018.setTransform(22.9,12.1);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FF6600").s().p("A7AAXUAXJgh0AZHAPzIFxK3IAAO9QklCloFEdQtuHhpNAAQv6AAii2Wg");
	this.shape_1019.setTransform(22.9,12.1);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#000000").ss(1.5,1,1).p("A7CAYUAXTgh0AZAAPzQDYGWCaEiIAAO7QklCkoGEeUglWAUdgEEgjRg");
	this.shape_1020.setTransform(22.9,12.1);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FF6600").s().p("A7CAYUAXTgh0AZAAPzIFyK4IAAO7QklCkoGEeQtuHgpNAAQv6AAil2Ug");
	this.shape_1021.setTransform(22.9,12.1);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#000000").ss(1.5,1,1).p("A7EAYUAXdgh0AY4APzQDZGXCbEjIAAO5QkmCkoHEeUglUAUbgEIgjPg");
	this.shape_1022.setTransform(22.8,12.1);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FF6600").s().p("A7EAYUAXdgh0AY4APzIF0K6IAAO5QkmCkoHEeQttHgpNAAQv7AAin2Ug");
	this.shape_1023.setTransform(22.8,12.1);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#000000").ss(1.5,1,1).p("A7FAYUAXmgh0AYwAPzQDaGZCbEkIAAO1QklCloJEfUglTAUZgEKgjOg");
	this.shape_1024.setTransform(22.8,12);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FF6600").s().p("A7FAYUAXlgh0AYxAPzIF1K9IAAO1QkmCloIEfQtsHfpNAAQv7AAip2Ug");
	this.shape_1025.setTransform(22.8,12);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#000000").ss(1.5,1,1).p("A7HAYUAXvgh0AYqAPzQDbGbCbEkIAAOzQkmCkoJEgUglSAUYgEOgjNg");
	this.shape_1026.setTransform(22.8,12);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FF6600").s().p("A7HAYUAXwgh0AYpAPzIF1K/IAAOzQklCkoJEgQtsHepNAAQv8AAir2Tg");
	this.shape_1027.setTransform(22.8,12);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#000000").ss(1.5,1,1).p("A7IAZUAX4gh0AYiAPzQDcGcCbElIAAOwQkmCkoKEgUglRAUXgEQgjLg");
	this.shape_1028.setTransform(22.8,12);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FF6600").s().p("A7IAZUAX4gh0AYiAPzIF3LBIAAOwQkmCkoKEgQtrHepNAAQv8AAit2Sg");
	this.shape_1029.setTransform(22.8,12);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#000000").ss(1.5,1,1).p("A7JAZUAYBgh0AYaAPzQDcGeCcElIAAOtQkmCloLEhUglPAUVgETgjKg");
	this.shape_1030.setTransform(22.7,11.9);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FF6600").s().p("A7JAZUAYBgh0AYaAPzIF4LDIAAOtQkmCloLEhQtqHdpNAAQv9AAiu2Sg");
	this.shape_1031.setTransform(22.7,11.9);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#000000").ss(1.5,1,1).p("A7MAaUAYTgh0AYMAPzQDeGgCcEnIAAOoQkmCloOEhUglLAUTgEagjHg");
	this.shape_1032.setTransform(22.7,11.9);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FF6600").s().p("A7MAaUAYTgh0AYMAPzIF6LHIAAOoQkmCloNEhQtoHcpOAAQv9AAiz2Qg");
	this.shape_1033.setTransform(22.7,11.9);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#000000").ss(1.5,1,1).p("A7OAaUAYegh0AYDAPzQDfGiCdEoIAAOlQknCloOEiUglLAURgEdgjGg");
	this.shape_1034.setTransform(22.6,11.8);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FF6600").s().p("A7OAaUAYegh0AYDAPzIF8LKIAAOlQknCloOEiQtoHbpNAAQv+AAi12Qg");
	this.shape_1035.setTransform(22.6,11.8);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#000000").ss(1.5,1,1).p("A7PAaUAYngh0AX7APzQDgGjCdEpIAAOiQkmCloQEjUglJAUQgEggjFg");
	this.shape_1036.setTransform(22.6,11.8);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FF6600").s().p("A7PAaUAYmgh0AX8APzIF9LMIAAOiQkmCloQEjQtmHapOAAQv+AAi32Pg");
	this.shape_1037.setTransform(22.6,11.8);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#000000").ss(1.5,1,1).p("A7RAbUAYwgh0AX1APzQDgGkCeEpIAAOgQknCloQEjUglIAUPgEkgjDg");
	this.shape_1038.setTransform(22.6,11.8);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FF6600").s().p("A7RAbUAYwgh0AX1APzIF9LNIAAOgQkmCloQEjQtmHapOAAQv/AAi52Og");
	this.shape_1039.setTransform(22.6,11.8);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#000000").ss(1.5,1,1).p("A7SAbUAY5gh0AXtAPzQDhGmCeEqIAAOdQkmCloSEkUglGAUNgEngjCg");
	this.shape_1040.setTransform(22.5,11.7);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FF6600").s().p("A7SAbUAY5gh0AXtAPzIF/LQIAAOdQknCloREkQtlHZpNAAQwAAAi72Og");
	this.shape_1041.setTransform(22.5,11.7);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#000000").ss(1.5,1,1).p("A7TAbUAZCgh0AXlAPzQDiGoCeEqIAAOaQkmCloTElUglFAUMgEpgjBg");
	this.shape_1042.setTransform(22.5,11.7);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FF6600").s().p("A7TAbUAZCgh0AXlAPzIGALSIAAOaQkmCloTElQtkHYpOAAQwAAAi82Ng");
	this.shape_1043.setTransform(22.5,11.7);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#000000").ss(1.5,1,1).p("A7VAcUAZMgh0AXeAPzQDiGpCfErIAAOXQknCloTElUglEAULgEtgi/g");
	this.shape_1044.setTransform(22.5,11.7);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FF6600").s().p("A7VAcUAZMgh0AXeAPzIGBLUIAAOXQknCloTElQtkHYpNAAQwBAAi/2Mg");
	this.shape_1045.setTransform(22.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_811},{t:this.shape_810}]}).to({state:[{t:this.shape_813},{t:this.shape_812}]},1).to({state:[{t:this.shape_815},{t:this.shape_814}]},1).to({state:[{t:this.shape_817},{t:this.shape_816}]},1).to({state:[{t:this.shape_819},{t:this.shape_818}]},1).to({state:[{t:this.shape_821},{t:this.shape_820}]},1).to({state:[{t:this.shape_823},{t:this.shape_822}]},1).to({state:[{t:this.shape_825},{t:this.shape_824}]},1).to({state:[{t:this.shape_827},{t:this.shape_826}]},1).to({state:[{t:this.shape_829},{t:this.shape_828}]},1).to({state:[{t:this.shape_831},{t:this.shape_830}]},1).to({state:[{t:this.shape_833},{t:this.shape_832}]},1).to({state:[{t:this.shape_835},{t:this.shape_834}]},1).to({state:[{t:this.shape_837},{t:this.shape_836}]},1).to({state:[{t:this.shape_839},{t:this.shape_838}]},1).to({state:[{t:this.shape_841},{t:this.shape_840}]},1).to({state:[{t:this.shape_843},{t:this.shape_842}]},1).to({state:[{t:this.shape_845},{t:this.shape_844}]},1).to({state:[{t:this.shape_847},{t:this.shape_846}]},1).to({state:[{t:this.shape_849},{t:this.shape_848}]},1).to({state:[{t:this.shape_851},{t:this.shape_850}]},1).to({state:[{t:this.shape_853},{t:this.shape_852}]},1).to({state:[{t:this.shape_855},{t:this.shape_854}]},1).to({state:[{t:this.shape_857},{t:this.shape_856}]},1).to({state:[{t:this.shape_859},{t:this.shape_858}]},1).to({state:[{t:this.shape_861},{t:this.shape_860}]},1).to({state:[{t:this.shape_863},{t:this.shape_862}]},1).to({state:[{t:this.shape_865},{t:this.shape_864}]},1).to({state:[{t:this.shape_867},{t:this.shape_866}]},1).to({state:[{t:this.shape_869},{t:this.shape_868}]},1).to({state:[{t:this.shape_871},{t:this.shape_870}]},1).to({state:[{t:this.shape_873},{t:this.shape_872}]},1).to({state:[{t:this.shape_875},{t:this.shape_874}]},1).to({state:[{t:this.shape_877},{t:this.shape_876}]},1).to({state:[{t:this.shape_879},{t:this.shape_878}]},1).to({state:[{t:this.shape_881},{t:this.shape_880}]},1).to({state:[{t:this.shape_883},{t:this.shape_882}]},1).to({state:[{t:this.shape_885},{t:this.shape_884}]},1).to({state:[{t:this.shape_887},{t:this.shape_886}]},1).to({state:[{t:this.shape_889},{t:this.shape_888}]},1).to({state:[{t:this.shape_891},{t:this.shape_890}]},1).to({state:[{t:this.shape_893},{t:this.shape_892}]},1).to({state:[{t:this.shape_895},{t:this.shape_894}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_899},{t:this.shape_898}]},1).to({state:[{t:this.shape_901},{t:this.shape_900}]},1).to({state:[{t:this.shape_903},{t:this.shape_902}]},1).to({state:[{t:this.shape_905},{t:this.shape_904}]},1).to({state:[{t:this.shape_907},{t:this.shape_906}]},1).to({state:[{t:this.shape_909},{t:this.shape_908}]},1).to({state:[{t:this.shape_911},{t:this.shape_910}]},1).to({state:[{t:this.shape_914},{t:this.shape_913},{t:this.shape_912}]},1).to({state:[{t:this.shape_916},{t:this.shape_915}]},1).to({state:[{t:this.shape_918},{t:this.shape_917}]},1).to({state:[{t:this.shape_920},{t:this.shape_919}]},1).to({state:[{t:this.shape_922},{t:this.shape_921}]},1).to({state:[{t:this.shape_924},{t:this.shape_923}]},1).to({state:[{t:this.shape_926},{t:this.shape_925}]},1).to({state:[{t:this.shape_928},{t:this.shape_927}]},1).to({state:[{t:this.shape_930},{t:this.shape_929}]},1).to({state:[{t:this.shape_932},{t:this.shape_931}]},1).to({state:[{t:this.shape_934},{t:this.shape_933}]},1).to({state:[{t:this.shape_936},{t:this.shape_935}]},1).to({state:[{t:this.shape_938},{t:this.shape_937}]},1).to({state:[{t:this.shape_940},{t:this.shape_939}]},1).to({state:[{t:this.shape_942},{t:this.shape_941}]},1).to({state:[{t:this.shape_944},{t:this.shape_943}]},1).to({state:[{t:this.shape_946},{t:this.shape_945}]},1).to({state:[{t:this.shape_948},{t:this.shape_947}]},1).to({state:[{t:this.shape_950},{t:this.shape_949}]},1).to({state:[{t:this.shape_952},{t:this.shape_951}]},1).to({state:[{t:this.shape_954},{t:this.shape_953}]},1).to({state:[{t:this.shape_956},{t:this.shape_955}]},1).to({state:[{t:this.shape_849},{t:this.shape_957}]},1).to({state:[{t:this.shape_959},{t:this.shape_958}]},1).to({state:[{t:this.shape_843},{t:this.shape_842}]},1).to({state:[{t:this.shape_961},{t:this.shape_960}]},1).to({state:[{t:this.shape_963},{t:this.shape_962}]},1).to({state:[{t:this.shape_965},{t:this.shape_964}]},1).to({state:[{t:this.shape_967},{t:this.shape_966}]},1).to({state:[{t:this.shape_969},{t:this.shape_968}]},1).to({state:[{t:this.shape_971},{t:this.shape_970}]},1).to({state:[{t:this.shape_973},{t:this.shape_972}]},1).to({state:[{t:this.shape_975},{t:this.shape_974}]},1).to({state:[{t:this.shape_977},{t:this.shape_976}]},1).to({state:[{t:this.shape_979},{t:this.shape_978}]},1).to({state:[{t:this.shape_811},{t:this.shape_810}]},1).to({state:[{t:this.shape_979},{t:this.shape_978}]},1).to({state:[{t:this.shape_977},{t:this.shape_976}]},1).to({state:[{t:this.shape_975},{t:this.shape_974}]},1).to({state:[{t:this.shape_973},{t:this.shape_972}]},1).to({state:[{t:this.shape_971},{t:this.shape_970}]},1).to({state:[{t:this.shape_969},{t:this.shape_968}]},1).to({state:[{t:this.shape_967},{t:this.shape_966}]},1).to({state:[{t:this.shape_965},{t:this.shape_964}]},1).to({state:[{t:this.shape_963},{t:this.shape_962}]},1).to({state:[{t:this.shape_961},{t:this.shape_960}]},1).to({state:[{t:this.shape_843},{t:this.shape_842}]},1).to({state:[{t:this.shape_959},{t:this.shape_958}]},1).to({state:[{t:this.shape_849},{t:this.shape_957}]},1).to({state:[{t:this.shape_956},{t:this.shape_955}]},1).to({state:[{t:this.shape_954},{t:this.shape_953}]},1).to({state:[{t:this.shape_952},{t:this.shape_951}]},1).to({state:[{t:this.shape_950},{t:this.shape_949}]},1).to({state:[{t:this.shape_948},{t:this.shape_947}]},1).to({state:[{t:this.shape_946},{t:this.shape_945}]},1).to({state:[{t:this.shape_944},{t:this.shape_943}]},1).to({state:[{t:this.shape_942},{t:this.shape_941}]},1).to({state:[{t:this.shape_940},{t:this.shape_939}]},1).to({state:[{t:this.shape_938},{t:this.shape_937}]},1).to({state:[{t:this.shape_936},{t:this.shape_935}]},1).to({state:[{t:this.shape_934},{t:this.shape_933}]},1).to({state:[{t:this.shape_932},{t:this.shape_931}]},1).to({state:[{t:this.shape_930},{t:this.shape_929}]},1).to({state:[{t:this.shape_928},{t:this.shape_927}]},1).to({state:[{t:this.shape_926},{t:this.shape_925}]},1).to({state:[{t:this.shape_924},{t:this.shape_923}]},1).to({state:[{t:this.shape_922},{t:this.shape_921}]},1).to({state:[{t:this.shape_920},{t:this.shape_919}]},1).to({state:[{t:this.shape_918},{t:this.shape_917}]},1).to({state:[{t:this.shape_916},{t:this.shape_915}]},1).to({state:[{t:this.shape_914},{t:this.shape_913},{t:this.shape_912}]},1).to({state:[{t:this.shape_981},{t:this.shape_980}]},1).to({state:[{t:this.shape_983},{t:this.shape_982}]},1).to({state:[{t:this.shape_985},{t:this.shape_984}]},1).to({state:[{t:this.shape_903},{t:this.shape_902}]},1).to({state:[{t:this.shape_987},{t:this.shape_986}]},1).to({state:[{t:this.shape_989},{t:this.shape_988}]},1).to({state:[{t:this.shape_991},{t:this.shape_990}]},1).to({state:[{t:this.shape_928},{t:this.shape_927}]},1).to({state:[{t:this.shape_993},{t:this.shape_992}]},1).to({state:[{t:this.shape_995},{t:this.shape_994}]},1).to({state:[{t:this.shape_885},{t:this.shape_996}]},1).to({state:[{t:this.shape_998},{t:this.shape_997}]},1).to({state:[{t:this.shape_1000},{t:this.shape_999}]},1).to({state:[{t:this.shape_1002},{t:this.shape_1001}]},1).to({state:[{t:this.shape_1004},{t:this.shape_1003}]},1).to({state:[{t:this.shape_942},{t:this.shape_941}]},1).to({state:[{t:this.shape_1006},{t:this.shape_1005}]},1).to({state:[{t:this.shape_1007},{t:this.shape_866}]},1).to({state:[{t:this.shape_1009},{t:this.shape_1008}]},1).to({state:[{t:this.shape_1011},{t:this.shape_1010}]},1).to({state:[{t:this.shape_1013},{t:this.shape_1012}]},1).to({state:[{t:this.shape_1015},{t:this.shape_1014}]},1).to({state:[{t:this.shape_1017},{t:this.shape_1016}]},1).to({state:[{t:this.shape_956},{t:this.shape_955}]},1).to({state:[{t:this.shape_1019},{t:this.shape_1018}]},1).to({state:[{t:this.shape_1021},{t:this.shape_1020}]},1).to({state:[{t:this.shape_1023},{t:this.shape_1022}]},1).to({state:[{t:this.shape_1025},{t:this.shape_1024}]},1).to({state:[{t:this.shape_1027},{t:this.shape_1026}]},1).to({state:[{t:this.shape_1029},{t:this.shape_1028}]},1).to({state:[{t:this.shape_1031},{t:this.shape_1030}]},1).to({state:[{t:this.shape_967},{t:this.shape_966}]},1).to({state:[{t:this.shape_1033},{t:this.shape_1032}]},1).to({state:[{t:this.shape_1035},{t:this.shape_1034}]},1).to({state:[{t:this.shape_1037},{t:this.shape_1036}]},1).to({state:[{t:this.shape_1039},{t:this.shape_1038}]},1).to({state:[{t:this.shape_1041},{t:this.shape_1040}]},1).to({state:[{t:this.shape_1043},{t:this.shape_1042}]},1).to({state:[{t:this.shape_1045},{t:this.shape_1044}]},1).to({state:[{t:this.shape_811},{t:this.shape_810}]},1).wait(1));

	// topFins
	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#000000").ss(1.5,1,1).p("AFAx0IDkQjIvTrmIGNPBIwdnTIK5M4IvykiIKAKTIqriyIIPHHIK5sCIMDlMQLZkxCjCNg");
	this.shape_1046.setTransform(-35.4,-110.6);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FFCC00").s().p("A2jKuIKrCyIqAqTIPyEiIq5s4IQdHTImNvBIPTLmIjkwjIRkP3QijiNrZExIsDFMIq5MCg");
	this.shape_1047.setTransform(-35.4,-110.6);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#000000").ss(1.5,1,1).p("A2jKuIKrCyIqAqTIPyEiIq5s5IQdHUImMvBIPTLmIjkwjIRjP4QiiiNrZEwIsEFMIq5MCg");
	this.shape_1048.setTransform(-35.4,-110.6);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FFCC00").s().p("A2jKuIKrCyIqAqUIPyEjIq5s5IQdHUImNvBIPTLmIjjwiIRjP3QiiiNrZEwIsEFMIq5MBg");
	this.shape_1049.setTransform(-35.4,-110.6);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#000000").ss(1.5,1,1).p("A2jKtIKqCzIp/qUIPyEjIq4s5IQcHUImMvBIPTLnIjjwjIRiP4QiiiNrZEwIsEFLIq6MBg");
	this.shape_1050.setTransform(-35.4,-110.6);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FFCC00").s().p("A2jKtIKqCyIp/qTIPyEiIq4s4IQcHUImMvBIPTLnIjjwjIRiP4QiiiNrZEwIsEFLIq6MBg");
	this.shape_1051.setTransform(-35.4,-110.6);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#000000").ss(1.5,1,1).p("A2jKsIKqCzIp/qUIPxEjIq3s5IQcHVImLvBIPSLnIjiwjIRhP5QiiiNrZEvIsEFLIq6MBg");
	this.shape_1052.setTransform(-35.4,-110.7);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FFCC00").s().p("A2jKsIKqCzIp/qUIPxEjIq3s5IQcHVImLvBIPSLnIjiwjIRhP5QiiiNrZEvIsEFLIq6MBg");
	this.shape_1053.setTransform(-35.4,-110.7);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKsIKqCzIp+qUIPyEkIq4s6IQcHVImLvBIPSLoIjhwjIRhP5QiiiNraEvIsEFKIq7MAg");
	this.shape_1054.setTransform(-35.4,-110.7);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FFCC00").s().p("A2kKsIKrCzIp/qUIPxEkIq2s6IQbHVImKvBIPRLoIjhwjIRgP5QihiNraEvIsFFKIq5MAg");
	this.shape_1055.setTransform(-35.4,-110.7);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKrIKqC0Ip+qVIPxElIq3s7IQcHWImKvBIPRLoIjhwjIRhP5QiiiNraEvIsFFKIq7MAg");
	this.shape_1056.setTransform(-35.4,-110.7);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FFCC00").s().p("A2kKrIKqC0Ip+qVIPxElIq2s7IQbHWImKvBIPRLoIjgwjIRgP5QiiiMraEuIsFFKIq7MAg");
	this.shape_1057.setTransform(-35.4,-110.7);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKqIKqC1Ip+qWIPxElIq2s6IQbHWImJvBIPRLpIjhwkIRgP7QiiiNraEuIsEFJIq8MAg");
	this.shape_1058.setTransform(-35.5,-110.8);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FFCC00").s().p("A2kKqIKqC0Ip+qUIPxEkIq2s6IQbHXImJvCIPRLpIjhwjIRgP6QiiiNraEuIsEFJIq8MAg");
	this.shape_1059.setTransform(-35.5,-110.8);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKpIKpC1Ip9qVIPxElIq2s7IQbHYImJvCIPRLpIjgwjIRfP7QiiiNraEtIsFFJIq7L/g");
	this.shape_1060.setTransform(-35.5,-110.8);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FFCC00").s().p("A2kKpIKpC1Ip9qVIPxElIq2s7IQbHYImJvCIPRLpIjgwjIRfP7QiiiNraEtIsFFJIq7L/g");
	this.shape_1061.setTransform(-35.5,-110.8);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKpIKqC1Ip9qWIPxEmIq2s7IQcHYImJvCIPQLqIjfwkIRfP8QiiiNraEtIsFFIIq9L/g");
	this.shape_1062.setTransform(-35.5,-110.9);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FFCC00").s().p("A2lKpIKqC1Ip9qWIPwEmIq1s7IQbHYImIvCIPQLqIjfwkIRfP8QiiiNraEtIsFFIIq9L/g");
	this.shape_1063.setTransform(-35.5,-110.9);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKoIKqC2Ip9qWIPxEmIq1s7IQbHYImIvCIPPLqIjewkIReP9QiiiNrbEsIsFFIIq8L/g");
	this.shape_1064.setTransform(-35.5,-110.9);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FFCC00").s().p("A2lKoIKqC1Ip9qWIPxEnIq1s8IQbHZImIvCIPPLqIjewjIReP8QiiiOrbEtIsFFIIq8L/g");
	this.shape_1065.setTransform(-35.5,-110.9);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKoIKqC2Ip8qXIPwEoIq1s9IQbHaImHvEIPPLsIjewkIRdP9QihiNrbEsIsFFIIq+L9g");
	this.shape_1066.setTransform(-35.5,-110.9);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FFCC00").s().p("A2lKnIKqC2Ip8qWIPwEoIq1s9IQbHZImIvDIPQLsIjfwkIReP9QihiNrcEsIsFFHIq9L+g");
	this.shape_1067.setTransform(-35.5,-110.9);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKnIKpC2Ip7qXIPwEoIq1s8IQbHZImHvDIPPLsIjdwkIRcP+QihiOrbEsIsGFHIq9L+g");
	this.shape_1068.setTransform(-35.5,-111);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FFCC00").s().p("A2lKnIKpC2Ip7qXIPwEoIq1s8IQbHZImHvDIPPLsIjewkIRdP+QihiOrcEsIsFFHIq9L+g");
	this.shape_1069.setTransform(-35.5,-111);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKmIKpC3Ip7qXIPvEoIqzs9IQaHbImGvEIPOLtIjdwkIRcP+QihiOrbEsIsGFGIq+L9g");
	this.shape_1070.setTransform(-35.6,-111);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FFCC00").s().p("A2lKmIKpC3Ip7qXIPvEoIqzs9IQaHbImGvEIPOLtIjdwkIRcP+QihiOrbEsIsGFGIq+L9g");
	this.shape_1071.setTransform(-35.6,-111);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#000000").ss(1.5,1,1).p("A2mKmIKpC3Ip7qYIPwEpIqzs9IQaHbImGvEIPOLtIjcwkIRcP/QiiiOrbErIsGFGIq+L9g");
	this.shape_1072.setTransform(-35.6,-111);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FFCC00").s().p("A2mKmIKpC2Ip7qXIPwEpIqzs+IQaHbImGvDIPOLtIjcwkIRcP/QiiiOrbErIsGFHIq+L8g");
	this.shape_1073.setTransform(-35.6,-111);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#000000").ss(1.5,1,1).p("A2mKlIKpC4Ip7qYIPwEpIqys9IQZHbImFvEIPNLuIjbwlIRbQAQihiOrcErIsGFGIq/L8g");
	this.shape_1074.setTransform(-35.6,-111.1);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FFCC00").s().p("A2mKlIKpC4Ip7qYIPwEpIqys9IQZHbImFvEIPNLuIjbwkIRbP/QiiiOrbErIsGFFIq/L8g");
	this.shape_1075.setTransform(-35.6,-111.1);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#000000").ss(1.5,1,1).p("A2mKkIKpC4Ip7qYIPwEqIqys+IQZHcImEvEIPMLuIjawkIRaQAQihiOrcEqIsGFFIrAL8g");
	this.shape_1076.setTransform(-35.6,-111.1);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FFCC00").s().p("A2mKkIKpC4Ip7qYIPvEqIqxs+IQZHcImFvEIPNLuIjawkIRaQAQiiiOrbEqIsGFFIrAL8g");
	this.shape_1077.setTransform(-35.6,-111.1);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#000000").ss(1.5,1,1).p("A2mKjIKoC5Ip5qZIPvErIqys/IQZHdImEvEIPNLvIjbwlIRaQBQihiOrcEqIsGFFIrAL7g");
	this.shape_1078.setTransform(-35.6,-111.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FFCC00").s().p("A2mKjIKoC5Ip5qZIPvErIqys/IQZHdImEvEIPNLvIjbwlIRaQBQihiOrcEqIsGFFIrAL7g");
	this.shape_1079.setTransform(-35.6,-111.2);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKjIKpC5Ip5qZIPvErIqxs/IQYHdImDvEIPMLvIjZwlIRZQCQihiOrcEpIsHFFIrAL7g");
	this.shape_1080.setTransform(-35.6,-111.2);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FFCC00").s().p("A2mKjIKoC4Ip5qYIPvErIqxs/IQYHeImDvFIPMLvIjZwkIRYQBQihiOrcEpIsGFEIrAL8g");
	this.shape_1081.setTransform(-35.6,-111.2);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKiIKpC6Ip5qaIPvEsIqxs/IQYHdImCvEIPLLwIjZwlIRZQCQihiOrcEpIsHFEIrBL6g");
	this.shape_1082.setTransform(-35.7,-111.2);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FFCC00").s().p("A2nKiIKpC6Ip5qaIPvEsIqxs/IQYHdImCvEIPLLwIjZwlIRZQCQihiOrcEpIsHFEIrBL6g");
	this.shape_1083.setTransform(-35.7,-111.2);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKhIKoC6Ip4qaIPvEtIqxtAIQZHfImDvFIPMLwIjZwlIRYQDQigiOrdEoIsHFEIrBL6g");
	this.shape_1084.setTransform(-35.7,-111.3);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FFCC00").s().p("A2nKhIKpC6Ip5qaIPuEtIqvtAIQXHfImCvFIPLLwIjYwlIRYQDQihiOrcEoIsHFEIrBL6g");
	this.shape_1085.setTransform(-35.7,-111.3);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKhIKoC6Ip4qaIPvEtIqwtAIQYHfImCvFIPLLxIjYwlIRXQDQigiOrdEoIsHFDIrBL5g");
	this.shape_1086.setTransform(-35.7,-111.3);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FFCC00").s().p("A2nKhIKoC6Ip4qaIPuEtIqvtAIQXHfImBvFIPKLxIjXwlIRXQDQihiOrcEoIsHFDIrBL5g");
	this.shape_1087.setTransform(-35.7,-111.3);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKgIKoC7Ip4qbIPuEuIqvtBIQYHgImBvGIPKLyIjXwlIRWQEQigiOrdEnIsHFDIrCL5g");
	this.shape_1088.setTransform(-35.7,-111.3);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FFCC00").s().p("A2nKgIKoC7Ip4qbIPuEtIqvtAIQYHgImBvFIPKLxIjXwlIRWQEQigiOrdEnIsHFDIrCL5g");
	this.shape_1089.setTransform(-35.7,-111.3);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#000000").ss(1.5,1,1).p("A2oKgIKoC7Ip3qbIPuEuIqutBIQXHhImBvGIPKLyIjXwmIRXQFQihiPrdEoIsHFCIrDL5g");
	this.shape_1090.setTransform(-35.7,-111.4);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FFCC00").s().p("A2oKfIKoC7Ip3qbIPuEvIqutBIQXHgImBvFIPKLyIjXwlIRXQEQihiPrdEoIsHFCIrDL5g");
	this.shape_1091.setTransform(-35.7,-111.4);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#000000").ss(1.5,1,1).p("A2oKfIKoC7Ip3qbIPuEvIqutCIQWHhIl/vFIPJLyIjVwlIRVQFQigiPrdEnIsIFCIrDL4g");
	this.shape_1092.setTransform(-35.7,-111.4);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFCC00").s().p("A2oKfIKoC7Ip3qbIPuEvIqutCIQXHhImAvFIPJLyIjWwlIRWQFQihiPrdEnIsHFCIrDL4g");
	this.shape_1093.setTransform(-35.7,-111.4);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#000000").ss(1.5,1,1).p("A2oKeIKnC8Ip2qcIPtEwIqttCIQWHiIl/vGIPJLzIjVwmIRVQGQigiPrdEnIsJFBIrDL4g");
	this.shape_1094.setTransform(-35.7,-111.5);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FFCC00").s().p("A2oKeIKoC8Ip3qcIPtEwIqttCIQXHiImAvGIPJLzIjVwmIRVQGQihiPrdEnIsHFBIrEL4g");
	this.shape_1095.setTransform(-35.7,-111.5);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#000000").ss(1.5,1,1).p("A2oKeIKnC8Ip2qcIPuEwIqttDIQWHjIl/vHIPIL0IjUwmIRUQHQigiPrdEmIsIFBIrEL4g");
	this.shape_1096.setTransform(-35.8,-111.5);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FFCC00").s().p("A2oKdIKnC9Ip2qcIPuEvIqttCIQWHiIl/vFIPILzIjUwlIRUQGQigiPrdEmIsIFBIrEL3g");
	this.shape_1097.setTransform(-35.8,-111.5);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKdIKoC8Ip2qdIPtExIqstCIQWHjIl/vHIPJL1IjUwmIRUQHQigiPreEmIsJFAIrEL3g");
	this.shape_1098.setTransform(-35.8,-111.5);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FFCC00").s().p("A2oKcIKnC9Ip2qdIPuEyIqttDIQWHjIl+vHIPIL1IjUwmIRUQHQigiOrfElIsIFAIrEL3g");
	this.shape_1099.setTransform(-35.8,-111.5);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKcIKoC9Ip1qdIPtExIqstDIQVHkIl+vHIPIL1IjTwmIRTQIQigiPreElIsIFAIrFL3g");
	this.shape_1100.setTransform(-35.8,-111.6);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FFCC00").s().p("A2pKcIKoC9Ip1qdIPtExIqstDIQVHkIl+vHIPIL1IjTwmIRTQIQigiPreElIsIFAIrFL3g");
	this.shape_1101.setTransform(-35.8,-111.6);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKbIKnC+Ip0qeIPsEyIqrtDIQVHkIl9vHIPHL2IjTwmIRTQIQigiPreElIsJE/IrFL2g");
	this.shape_1102.setTransform(-35.8,-111.6);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FFCC00").s().p("A2pKbIKnC+Ip0qeIPsEyIqrtDIQVHkIl9vHIPHL2IjTwmIRTQIQigiPreElIsJE/IrFL2g");
	this.shape_1103.setTransform(-35.8,-111.6);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKbIKnC9Ip1qdIPtEzIqrtEIQVHkIl9vHIPIL2IjTwmIRSQKQifiQrfEkIsJE/IrFL2g");
	this.shape_1104.setTransform(-35.8,-111.6);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FFCC00").s().p("A2pKaIKnC+Ip0qdIPsEzIqrtEIQVHkIl9vHIPIL2IjTwmIRSQJQifiPrfEkIsIE/IrGL2g");
	this.shape_1105.setTransform(-35.8,-111.6);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKaIKnC+Ip0qeIPtE0IqrtFIQVHmIl8vIIPHL3IjSwnIRSQLQigiQrfEkIsJE/IrGL1g");
	this.shape_1106.setTransform(-35.8,-111.7);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FFCC00").s().p("A2qKaIKnC+IpzqeIPsEzIqrtEIQVHlIl8vGIPHL2IjSwmIRRQKQigiQreEkIsIE/IrGL1g");
	this.shape_1107.setTransform(-35.8,-111.7);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl7vIIPGL3IjRwmIRRQKQigiPrfEjIsJE+IrGL1g");
	this.shape_1108.setTransform(-35.9,-111.7);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FFCC00").s().p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl7vIIPGL3IjRwmIRRQKQigiPrfEjIsJE+IrGL1g");
	this.shape_1109.setTransform(-35.9,-111.7);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl7vIIPGL4IjQwnIRQQLQigiPrfEjIsJE9IrHL1g");
	this.shape_1110.setTransform(-35.9,-111.8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FFCC00").s().p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl7vIIPGL4IjQwnIRQQLQigiPrfEjIsJE9IrHL1g");
	this.shape_1111.setTransform(-35.9,-111.8);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKYIKmC/IpyqfIPrE1IqptGIQUHoIl6vIIPFL4IjPwnIRPQMQifiPrfEiIsKE+IrHL0g");
	this.shape_1112.setTransform(-35.9,-111.8);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FFCC00").s().p("A2qKYIKnC/IpzqfIPsE1IqqtFIQUHnIl6vIIPFL4IjQwmIRQQLQifiQrgEjIsJE+IrHL0g");
	this.shape_1113.setTransform(-35.9,-111.8);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKYIKmC/IpyqfIPsE1IqptGIQUHoIl6vIIPEL5IjPwnIRPQNQifiQrfEiIsKE9IrILzg");
	this.shape_1114.setTransform(-35.9,-111.8);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FFCC00").s().p("A2qKXIKmDAIpyqgIPsE2IqptGIQUHoIl6vIIPEL5IjPwnIRPQNQifiQrfEiIsKE8IrIL0g");
	this.shape_1115.setTransform(-35.9,-111.8);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#000000").ss(1.5,1,1).p("A2rKXIKnDAIpyqgIPrE2IqotGIQUHoIl6vIIPFL5IjPwnIRPQNQigiQrfEiIsKE8IrIL0g");
	this.shape_1116.setTransform(-35.9,-111.9);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FFCC00").s().p("A2qKXIKmDAIpyqgIPrE2IqntGIQTHoIl5vIIPEL5IjOwnIRNQNQifiQrfEiIsKE8IrIL0g");
	this.shape_1117.setTransform(-35.9,-111.9);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#000000").ss(1.5,1,1).p("A2rKWIKnDAIpyqgIPsE3IqotHIQTHpIl5vIIPEL6IjOwnIROQOQifiQrgEhIsKE8IrILyg");
	this.shape_1118.setTransform(-36,-111.9);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FFCC00").s().p("A2rKWIKnDAIpyqgIPsE3IqotHIQTHpIl5vIIPEL6IjOwnIROQOQifiQrgEhIsKE8IrILyg");
	this.shape_1119.setTransform(-36,-111.9);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#000000").ss(1.5,1,1).p("A2rKVIKmDBIpxqgIPrE3IqntHIQTHqIl4vJIPDL6IjNwnIRNQPQifiQrgEgIsKE8IrJLyg");
	this.shape_1120.setTransform(-36,-111.9);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FFCC00").s().p("A2rKVIKmDBIpxqgIPrE3IqntIIQTHrIl4vJIPDL6IjNwnIRNQPQifiRrgEhIsKE7IrJLzg");
	this.shape_1121.setTransform(-36,-111.9);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#000000").ss(1.5,1,1).p("A2rKVIKmDBIpxqhIPrE4IqntIIQTHrIl4vKIPDL8IjMwoIRMQPQifiQrgEhIsKE7IrKLyg");
	this.shape_1122.setTransform(-36,-112);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFCC00").s().p("A2rKUIKmDCIpxqhIPrE4IqntIIQTHrIl4vKIPDL8IjMwnIRMQOQifiPrgEgIsKE6IrJLyg");
	this.shape_1123.setTransform(-36,-112);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKUIKmDCIpwqiIPrE5IqntIIQTHrIl3vJIPDL7IjMwnIRMQPQigiQrfEgIsLE7IrKLxg");
	this.shape_1124.setTransform(-36,-112);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFCC00").s().p("A2sKUIKmDCIpwqiIPrE5IqntIIQTHrIl3vJIPCL7IjLwnIRMQPQigiQrgEgIsKE7IrKLxg");
	this.shape_1125.setTransform(-36,-112);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKTIKmDCIpwqhIPrE5IqmtJIQSHsIl2vJIPCL8IjMwoIRMQRQifiRrgEgIsLE6IrLLxg");
	this.shape_1126.setTransform(-36,-112.1);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FFCC00").s().p("A2sKTIKmDCIpwqhIPrE5IqmtJIQSHsIl2vJIPCL8IjMwoIRMQRQifiRrgEgIsLE6IrLLxg");
	this.shape_1127.setTransform(-36,-112.1);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKTIKmDCIpwqiIPrE6IqmtJIQSHsIl2vJIPCL8IjLwoIRLQSQifiRrgEfIsLE6IrLLxg");
	this.shape_1128.setTransform(-36,-112.1);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFCC00").s().p("A2sKSIKmDDIpwqiIPrE6IqmtJIQSHsIl2vKIPCL9IjLwnIRLQRQifiRrgEfIsLE5IrLLxg");
	this.shape_1129.setTransform(-36,-112.1);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKSIKlDDIpvqiIPqE6IqltJIQSHtIl1vLIPBL+IjKwoIRKQSQifiRrgEfIsLE5IrMLwg");
	this.shape_1130.setTransform(-36,-112.1);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFCC00").s().p("A2sKSIKmDDIpvqjIPqE7IqltJIQRHsIl1vJIPBL9IjKwoIRKQRQifiQrgEfIsLE5IrLLwg");
	this.shape_1131.setTransform(-36,-112.1);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKRIKlDDIpuqiIPqE7IqltKIQRHtIl0vKIPAL+IjJwoIRJQTQieiRrhEeIsLE5IrMLwg");
	this.shape_1132.setTransform(-36.1,-112.2);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFCC00").s().p("A2sKRIKlDDIpuqiIPqE7IqltKIQRHtIl0vKIPAL+IjJwoIRJQTQieiRrhEeIsLE5IrMLwg");
	this.shape_1133.setTransform(-36.1,-112.2);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKRIKmDDIpvqjIPqE8IqktKIQRHuIl0vLIPAL/IjIwoIRJQTQifiRrhEeIsLE4IrNLvg");
	this.shape_1134.setTransform(-36.1,-112.2);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFCC00").s().p("A2sKRIKlDDIpvqjIPqE8IqktKIQSHuIl0vLIO/L/IjIwoIRJQTQifiRrhEeIsLE4IrNLvg");
	this.shape_1135.setTransform(-36.1,-112.2);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKQIKlDEIpuqjIPqE8IqjtLIQQHvIlzvLIO/L/IjIwoIRJQUQifiSrhEeIsME4IrMLvg");
	this.shape_1136.setTransform(-36.1,-112.2);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFCC00").s().p("A2sKQIKkDEIpuqjIPqE7IqjtKIQRHvIl0vLIO/L/IjIwoIRJQTQifiQrhEdIsLE4IrNLvg");
	this.shape_1137.setTransform(-36.1,-112.2);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKPIKlDFIptqkIPpE9IqjtLIQRHvIlzvLIO/MAIjIwpIRIQVQieiRriEdIsLE3IrNLvg");
	this.shape_1138.setTransform(-36.1,-112.3);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFCC00").s().p("A2tKPIKlDEIptqjIPpE8IqjtKIQRHvIlzvLIO/MAIjIwoIRIQUQieiRriEdIsLE3IrNLvg");
	this.shape_1139.setTransform(-36.1,-112.3);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKOIKlDFIptqkIPpE9IqjtLIQRHwIlzvLIO/MAIjHwoIRHQVQieiRriEcIsLE3IrOLug");
	this.shape_1140.setTransform(-36.1,-112.3);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFCC00").s().p("A2tKOIKlDFIptqkIPpE9IqjtLIQRHwIlzvLIO/MAIjHwoIRHQVQieiRriEcIsLE3IrOLug");
	this.shape_1141.setTransform(-36.1,-112.3);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#000000").ss(1.5,1,1).p("A2uKOIKlDFIpsqkIPpE+IqitMIQQHwIlyvLIO/MBIjHwpIRHQWQifiRrhEcIsNE2IrNLug");
	this.shape_1142.setTransform(-36.1,-112.4);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFCC00").s().p("A2uKOIKlDFIpsqkIPpE+IqitMIQPHwIlxvLIO/MBIjHwpIRGQWQieiRrhEcIsNE2IrOLug");
	this.shape_1143.setTransform(-36.1,-112.4);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#000000").ss(1.5,1,1).p("A2uKNIKlDGIptqlIPpE/IqhtNIQQHyIlyvMIO/MBIjGwpIRGQXQifiSrhEcIsNE2IrOLug");
	this.shape_1144.setTransform(-36.1,-112.4);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFCC00").s().p("A2uKNIKlDGIptqlIPqE+IqitMIQPHyIlxvMIO/MBIjGwoIRFQVQieiRrhEcIsNE2IrOLtg");
	this.shape_1145.setTransform(-36.1,-112.4);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#000000").ss(1.5,1,1).p("A2uKNIKlDGIpsqlIPpE/IqhtNIQPHxIlxvLIO+MCIjFwpIRFQXQieiRriEbIsNE2IrPLsg");
	this.shape_1146.setTransform(-36.2,-112.4);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFCC00").s().p("A2uKNIKlDGIpsqmIPpFAIqhtNIQPHxIlxvLIO+MCIjFwpIRFQXQieiSriEcIsNE2IrPLsg");
	this.shape_1147.setTransform(-36.2,-112.4);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#000000").ss(1.5,1,1).p("AFqxhIDFQpIu9sCIFwPMIwPnzIKgNNIvok/IJrKlIqkjGIIBHWILPrtIMNk1QLikbCeCSg");
	this.shape_1148.setTransform(-36.2,-112.5);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFCC00").s().p("A2uKMIKlDGIpsqlIPoE/IqgtNIQPHzIlwvMIO9MCIjEwpIREQYQieiSriEbIsME1IrQLtg");
	this.shape_1149.setTransform(-36.2,-112.5);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#000000").ss(1.5,1,1).p("A2uKNIKlDGIpsqlIPpE+IqitMIQQHyIlxvMIO+MCIjGwpIRGQWQieiRriEcIsME1IrPLtg");
	this.shape_1150.setTransform(-36.2,-112.4);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFCC00").s().p("A2uKNIKlDGIpsqlIPpE+IqitMIQQHyIlxvMIO+MCIjGwpIRGQWQieiRriEcIsME1IrPLtg");
	this.shape_1151.setTransform(-36.2,-112.4);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#000000").ss(1.5,1,1).p("A2uKOIKlDFIpsqkIPpE9IqitLIQQHwIlyvLIO/MBIjHwpIRHQWQifiRrhEcIsNE2IrNLug");
	this.shape_1152.setTransform(-36.1,-112.4);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FFCC00").s().p("A2uKOIKlDFIpsqkIPpE9IqitLIQPHwIlxvLIO/MBIjHwpIRGQWQieiRrhEcIsNE2IrOLug");
	this.shape_1153.setTransform(-36.1,-112.4);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKOIKlDGIptqlIPpE+IqjtMIQRHwIlyvLIO/MAIjIwpIRHQVQieiRrhEdIsME3IrNLvg");
	this.shape_1154.setTransform(-36.1,-112.3);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FFCC00").s().p("A2tKOIKlDFIptqkIPpE9IqitLIQQHwIlzvLIPAMAIjIwoIRHQUQieiRrhEdIsME3IrOLvg");
	this.shape_1155.setTransform(-36.1,-112.3);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKQIKmDEIpuqjIPpE8IqjtLIQRHvIl0vLIPAL/IjIwoIRIQUQifiRrhEeIsLE3IrNLvg");
	this.shape_1156.setTransform(-36.1,-112.2);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFCC00").s().p("A2tKPIKmDFIpuqjIPpE7IqjtKIQRHvIl0vLIPAMAIjIwpIRIQTQifiQrhEdIsLE4IrNLvg");
	this.shape_1157.setTransform(-36.1,-112.2);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKRIKlDDIpvqiIPqE7IqktLIQRHvIl0vLIPAL/IjJwpIRJQUQieiRrhEdIsLE5IrMLwg");
	this.shape_1158.setTransform(-36.1,-112.2);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FFCC00").s().p("A2sKRIKlDDIpvqiIPqE7IqktKIQRHuIl0vLIPAL+IjJwnIRJQTQieiSrhEfIsLE4IrMLwg");
	this.shape_1159.setTransform(-36.1,-112.2);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKSIKlDDIpvqiIPqE6IqktJIQRHtIl1vLIPBL+IjKwoIRKQSQifiRrgEfIsLE5IrMLwg");
	this.shape_1160.setTransform(-36,-112.1);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FFCC00").s().p("A2sKRIKmDDIpvqiIPqE6IqltIIQRHsIl1vJIPBL9IjKwoIRKQSQifiRrgEfIsLE5IrMLwg");
	this.shape_1161.setTransform(-36,-112.1);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKTIKmDCIpwqhIPrE5IqmtJIQSHsIl2vJIPCL8IjLwoIRLQSQifiRrgEfIsLE6IrLLxg");
	this.shape_1162.setTransform(-36,-112.1);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FFCC00").s().p("A2sKSIKmDDIpwqhIPrE5IqmtJIQSHsIl2vKIPCL9IjLwnIRLQRQifiRrgEfIsLE6IrLLwg");
	this.shape_1163.setTransform(-36,-112.1);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKTIKmDDIpwqiIPrE5IqntJIQTHsIl3vJIPDL7IjMwnIRMQQQifiQrgEfIsLE7IrLLxg");
	this.shape_1164.setTransform(-36,-112);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FFCC00").s().p("A2sKUIKmDBIpwqgIPrE4IqntIIQTHrIl3vJIPCL8IjLwoIRMQQQifiQrhEfIsKE7IrLLxg");
	this.shape_1165.setTransform(-36,-112);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#000000").ss(1.5,1,1).p("A2rKVIKmDBIpxqhIPrE4IqntIIQTHrIl4vJIPDL7IjMwoIRMQPQifiQrgEhIsKE6IrKLzg");
	this.shape_1166.setTransform(-36,-112);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FFCC00").s().p("A2rKVIKmDBIpxqhIPrE4IqntIIQTHrIl4vJIPDL7IjMwoIRMQPQifiQrgEhIsKE6IrJLzg");
	this.shape_1167.setTransform(-36,-112);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#000000").ss(1.5,1,1).p("A2rKWIKnDAIpyqgIPrE3IqntHIQTHpIl4vIIPDL6IjNwnIRNQOQifiQrgEhIsKE7IrJLzg");
	this.shape_1168.setTransform(-36,-111.9);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FFCC00").s().p("A2rKWIKnDAIpyqgIPrE3IqntHIQTHpIl4vIIPDL6IjNwnIRNQOQifiQrgEhIsKE7IrJLzg");
	this.shape_1169.setTransform(-36,-111.9);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKYIKmC/IpyqfIPsE1IqptGIQUHoIl6vIIPEL5IjPwnIRPQMQifiQrfEjIsKE8IrHL0g");
	this.shape_1170.setTransform(-35.9,-111.8);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FFCC00").s().p("A2qKYIKmC/IpyqfIPsE1IqptGIQUHoIl6vIIPEL5IjPwnIRPQMQifiQrfEjIsKE8IrHL0g");
	this.shape_1171.setTransform(-35.9,-111.8);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl7vIIPGL4IjQwnIRQQLQigiPreEjIsKE9IrHL1g");
	this.shape_1172.setTransform(-35.9,-111.8);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FFCC00").s().p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl6vIIPFL4IjQwnIRQQLQigiPrfEjIsJE9IrHL1g");
	this.shape_1173.setTransform(-35.9,-111.8);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKaIKnC+Ip0qeIPtEzIqrtEIQVHmIl7vIIPGL3IjRwmIRRQKQigiPrfEjIsJE+IrGL1g");
	this.shape_1174.setTransform(-35.8,-111.7);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FFCC00").s().p("A2qKaIKnC+IpzqeIPsEzIqrtEIQVHmIl8vIIPHL3IjRwmIRQQKQigiPreEjIsJE+IrGL1g");
	this.shape_1175.setTransform(-35.8,-111.7);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKbIKnC9Ip1qdIPtEyIqrtEIQVHlIl8vHIPHL2IjTwmIRSQKQifiQrfEkIsJE/IrFL2g");
	this.shape_1176.setTransform(-35.8,-111.6);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FFCC00").s().p("A2pKaIKnC+Ip0qdIPsEyIqrtEIQVHlIl8vHIPHL2IjTwmIRSQJQifiPrfEkIsIE/IrGL2g");
	this.shape_1177.setTransform(-35.8,-111.6);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKcIKnC9Ip0qdIPsEyIqrtEIQVHkIl9vHIPHL2IjTwnIRTQJQigiPreElIsIE/IrFL3g");
	this.shape_1178.setTransform(-35.8,-111.6);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FFCC00").s().p("A2pKcIKnC9Ip0qeIPsEyIqrtDIQVHkIl9vGIPHL1IjTwmIRTQIQigiPreEkIsIFAIrFL2g");
	this.shape_1179.setTransform(-35.8,-111.6);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKdIKoC8Ip2qdIPtExIqstDIQWHkIl+vHIPIL1IjUwmIRUQHQigiPreEmIsJFAIrEL3g");
	this.shape_1180.setTransform(-35.8,-111.5);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FFCC00").s().p("A2oKcIKnC9Ip2qdIPuEyIqttEIQWHkIl+vHIPIL1IjUwmIRUQHQigiOrfElIsIFAIrEL3g");
	this.shape_1181.setTransform(-35.8,-111.5);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FFCC00").s().p("A2oKdIKnC9Ip2qcIPuEvIqttBIQWHhIl/vFIPILzIjUwlIRUQGQigiPrdEmIsIFBIrEL3g");
	this.shape_1182.setTransform(-35.8,-111.5);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f().s("#000000").ss(1.5,1,1).p("A2oKfIKoC7Ip3qcIPuEwIqutCIQWHiIl/vHIPJL0IjVwmIRVQFQigiOrdEmIsJFCIrDL4g");
	this.shape_1183.setTransform(-35.7,-111.4);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#FFCC00").s().p("A2oKfIKoC7Ip3qcIPuEvIqutBIQXHiImAvHIPJLzIjWwlIRWQGQihiPrdEnIsHFBIrEL4g");
	this.shape_1184.setTransform(-35.7,-111.4);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKgIKoC7Ip4qbIPuEuIqvtBIQYHgImCvFIPLLxIjYwlIRXQDQigiOrdEoIsHFDIrCL5g");
	this.shape_1185.setTransform(-35.7,-111.3);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FFCC00").s().p("A2nKgIKoC7Ip4qbIPuEuIqvtBIQYHgImCvFIPLLxIjYwlIRXQDQigiOrdEoIsHFDIrCL5g");
	this.shape_1186.setTransform(-35.7,-111.3);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKhIKoC6Ip4qaIPuEtIqwtAIQYHfImCvFIPLLwIjYwlIRYQDQihiOrcEoIsHFEIrBL6g");
	this.shape_1187.setTransform(-35.7,-111.3);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#FFCC00").s().p("A2nKhIKoC6Ip4qaIPuEtIqwtAIQYHfImCvFIPLLwIjYwlIRYQDQihiOrcEoIsHFEIrBL6g");
	this.shape_1188.setTransform(-35.7,-111.3);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKiIKpC5Ip5qZIPvEsIqxs/IQYHdImDvEIPMLvIjZwkIRZQCQihiPrcEpIsHFFIrAL6g");
	this.shape_1189.setTransform(-35.6,-111.2);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#FFCC00").s().p("A2mKiIKoC5Ip5qZIPvEsIqxs/IQYHdImDvEIPMLvIjZwkIRYQCQihiPrcEpIsGFFIrAL6g");
	this.shape_1190.setTransform(-35.6,-111.2);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#000000").ss(1.5,1,1).p("A2mKkIKpC4Ip7qYIPwEqIqys+IQZHcImFvEIPNLuIjbwkIRbQAQihiOrcEqIsGFGIq/L7g");
	this.shape_1191.setTransform(-35.6,-111.1);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#FFCC00").s().p("A2mKkIKpC4Ip7qYIPwEqIqys+IQZHcImFvEIPNLuIjbwkIRbQAQiiiOrbEqIsGFGIq/L7g");
	this.shape_1192.setTransform(-35.6,-111.1);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f().s("#000000").ss(1.5,1,1).p("A2mKlIKpC4Ip7qYIPwEpIqzs9IQaHbImGvEIPOLtIjcwkIRcP/QiiiOrbErIsGFHIq+L8g");
	this.shape_1193.setTransform(-35.6,-111.1);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FFCC00").s().p("A2mKlIKpC4Ip7qYIPwEpIqzs9IQaHbImGvEIPOLtIjcwkIRcP/QiiiOrbErIsGFHIq+L8g");
	this.shape_1194.setTransform(-35.6,-111.1);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKnIKpC2Ip7qXIPvEoIqzs9IQaHbImHvDIPPLrIjdwkIRcP+QihiNrbEsIsGFGIq9L+g");
	this.shape_1195.setTransform(-35.6,-111);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#FFCC00").s().p("A2lKnIKpC2Ip7qYIPvEpIqzs8IQaHaImHvDIPPLsIjdwkIRcP9QihiNrbErIsGFHIq9L9g");
	this.shape_1196.setTransform(-35.6,-111);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKoIKqC2Ip8qXIPwEnIq1s8IQbHaImHvEIPPLsIjewkIRdP9QihiNrbEsIsFFHIq+L+g");
	this.shape_1197.setTransform(-35.5,-110.9);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FFCC00").s().p("A2lKnIKqC2Ip8qWIPwEnIq1s8IQbHZImIvDIPQLsIjewkIRdP9QihiNrcEsIsFFHIq9L+g");
	this.shape_1198.setTransform(-35.5,-110.9);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKpIKqC1Ip9qWIPxEnIq1s8IQbHYImIvCIPPLqIjewkIReP8QiiiMrbEsIsFFIIq8L/g");
	this.shape_1199.setTransform(-35.5,-110.9);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FFCC00").s().p("A2lKpIKqC1Ip9qXIPxEnIq1s8IQbHZImIvCIPPLqIjewjIReP7QiiiNrbEtIsFFIIq8L/g");
	this.shape_1200.setTransform(-35.5,-110.9);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKqIKqC1Ip9qWIPxEmIq2s7IQcHXImJvCIPQLqIjfwkIRfP7QiiiNraEuIsFFIIq8L/g");
	this.shape_1201.setTransform(-35.5,-110.8);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FFCC00").s().p("A2lKqIKqC1Ip9qXIPxEnIq2s7IQbHXImIvCIPQLpIjgwjIRgP7QiiiNraEuIsFFIIq8L/g");
	this.shape_1202.setTransform(-35.5,-110.8);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKrIKpC0Ip9qWIPxElIq3s6IQcHWImKvBIPSLoIjhwjIRgP7QiiiNraEtIsFFKIq7MAg");
	this.shape_1203.setTransform(-35.4,-110.8);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#FFCC00").s().p("A2kKqIKqC0Ip+qUIPxEkIq2s6IQbHXImKvCIPSLpIjhwjIRgP6QiiiNraEtIsFFKIq7MAg");
	this.shape_1204.setTransform(-35.4,-110.8);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKsIKqCzIp+qUIPxEkIq3s6IQcHVImLvBIPSLoIjhwjIRhP5QijiNrZEvIsFFKIq6MAg");
	this.shape_1205.setTransform(-35.4,-110.7);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#FFCC00").s().p("A2kKsIKqCzIp+qVIPxElIq3s6IQcHVImLvBIPSLoIjhwjIRhP5QijiMrZEuIsFFKIq6MAg");
	this.shape_1206.setTransform(-35.4,-110.7);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f().s("#000000").ss(1.5,1,1).p("A2jKsIKqCzIp/qUIPxEkIq3s6IQcHVImLvBIPSLnIjiwjIRhP5QiiiNrZEvIsEFLIq6MBg");
	this.shape_1207.setTransform(-35.4,-110.7);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FFCC00").s().p("A2jKsIKqCzIp/qUIPxEkIq3s6IQcHVImLvBIPSLnIjiwjIRhP5QiiiNrZEvIsEFLIq6MBg");
	this.shape_1208.setTransform(-35.4,-110.7);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f().s("#000000").ss(1.5,1,1).p("A2jKtIKrCzIqAqUIPyEjIq5s5IQdHUImMvBIPTLmIjjwiIRiP3QiiiMrZEvIsEFMIq6MBg");
	this.shape_1209.setTransform(-35.4,-110.6);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FFCC00").s().p("A2jKtIKrCzIqAqUIPyEjIq5s5IQdHUImNvBIPTLmIjiwiIRiP3QiiiMrZEvIsEFMIq6MBg");
	this.shape_1210.setTransform(-35.4,-110.6);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKPIKlDEIptqkIPpE9IqjtLIQRHwIlzvLIO/MAIjHwoIRHQVQieiSriEdIsLE3IrOLug");
	this.shape_1211.setTransform(-36.1,-112.3);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#FFCC00").s().p("A2tKPIKlDEIptqkIPpE9IqjtLIQRHwIlzvLIO/MAIjHwoIRHQVQieiSriEdIsLE3IrOLug");
	this.shape_1212.setTransform(-36.1,-112.3);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKQIKmDEIpuqkIPpE9IqjtLIQRHvIlzvLIO/MAIjIwpIRIQUQifiRrhEeIsLE3IrNLvg");
	this.shape_1213.setTransform(-36.1,-112.3);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FFCC00").s().p("A2tKQIKmDEIpuqkIPpE9IqjtLIQRHvIlzvLIO/MAIjIwpIRIQUQifiRrhEeIsLE3IrNLvg");
	this.shape_1214.setTransform(-36.1,-112.3);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#000000").ss(1.5,1,1).p("A2tKQIKmDEIpvqjIPqE8IqktLIQRHvIl0vLIPAL/IjIwoIRJQTQifiRrhEeIsLE4IrNLvg");
	this.shape_1215.setTransform(-36.1,-112.2);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#FFCC00").s().p("A2sKQIKlDEIpvqjIPqE8IqktLIQSHvIl0vLIO/L/IjIwoIRJQTQifiRrhEeIsLE4IrNLvg");
	this.shape_1216.setTransform(-36.1,-112.2);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKRIKlDEIpuqjIPqE7IqltKIQRHuIl0vLIPAL+IjJwoIRJQSQieiQrhEeIsLE5IrMLwg");
	this.shape_1217.setTransform(-36.1,-112.2);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#FFCC00").s().p("A2sKRIKlDEIpuqjIPqE7IqltKIQRHuIl0vLIPAL+IjJwoIRJQSQieiQrhEeIsLE5IrMLwg");
	this.shape_1218.setTransform(-36.1,-112.2);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKSIKmDDIpwqiIPqE6IqltJIQSHsIl1vJIPBL9IjLwoIRLQRQifiRrgEgIsLE5IrLLwg");
	this.shape_1219.setTransform(-36,-112.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#FFCC00").s().p("A2sKSIKmDDIpvqiIPqE6IqltJIQRHsIl1vJIPBL9IjLwoIRLQRQifiRrgEgIsLE5IrLLwg");
	this.shape_1220.setTransform(-36,-112.1);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#000000").ss(1.5,1,1).p("A2sKUIKmDCIpwqhIPrE4IqntIIQTHrIl3vJIPDL7IjNwnIRNQPQigiQrfEgIsLE7IrKLxg");
	this.shape_1221.setTransform(-36,-112);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#FFCC00").s().p("A2sKUIKmDCIpwqhIPrE4IqntIIQTHrIl3vJIPCL7IjMwnIRNQPQigiQrgEgIsKE7IrKLxg");
	this.shape_1222.setTransform(-36,-112);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#000000").ss(1.5,1,1).p("A2rKWIKmDBIpxqgIPrE2IqotHIQTHqIl4vKIPEL7IjOwoIROQOQifiQrgEiIsKE8IrJLzg");
	this.shape_1223.setTransform(-35.9,-111.9);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#FFCC00").s().p("A2qKWIKlDAIpxqgIPrE3IqntHIQSHpIl4vJIPEL6IjOwmIRNQNQieiQrgEhIsKE9IrJLyg");
	this.shape_1224.setTransform(-35.9,-111.9);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKXIKmDAIpyqgIPrE2IqotGIQUHoIl6vIIPEL5IjOwnIROQNQifiQrfEiIsKE9IrILzg");
	this.shape_1225.setTransform(-35.9,-111.8);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#FFCC00").s().p("A2qKXIKmDAIpyqgIPrE2IqotGIQUHoIl6vIIPEL5IjOwnIROQNQifiQrfEiIsKE8IrIL0g");
	this.shape_1226.setTransform(-35.9,-111.8);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl7vIIPGL3IjRwmIRRQLQigiQrfEkIsJE9IrHL1g");
	this.shape_1227.setTransform(-35.9,-111.7);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#FFCC00").s().p("A2qKZIKnC/IpzqfIPsE0IqqtFIQUHnIl7vIIPGL3IjRwmIRRQLQigiQrfEkIsJE9IrHL1g");
	this.shape_1228.setTransform(-35.9,-111.7);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f().s("#000000").ss(1.5,1,1).p("A2qKaIKnC+Ip0qeIPtEzIqrtFIQVHnIl7vIIPGL3IjSwnIRSQLQigiQrfEkIsJE+IrGL2g");
	this.shape_1229.setTransform(-35.8,-111.7);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#FFCC00").s().p("A2qKZIKnC/IpzqeIPsEzIqrtFIQVHmIl8vHIPHL3IjSwmIRRQKQigiQreEkIsIE+IrHL2g");
	this.shape_1230.setTransform(-35.8,-111.7);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f().s("#000000").ss(1.5,1,1).p("A2pKbIKnC+Ip1qeIPtEzIqrtEIQVHlIl9vIIPIL2IjTwmIRSQJQifiPrfEkIsJE/IrFL2g");
	this.shape_1231.setTransform(-35.8,-111.6);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FFCC00").s().p("A2pKaIKnC+Ip0qdIPsEzIqrtEIQVHlIl9vIIPIL2IjTwmIRSQJQifiPrfEkIsIE/IrGL2g");
	this.shape_1232.setTransform(-35.8,-111.6);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f().s("#000000").ss(1.5,1,1).p("A2oKgIKoC6Ip3qbIPuEvIqutBIQXHgImBvFIPKLyIjXwmIRXQGQihiQrdEoIsHFCIrDL5g");
	this.shape_1233.setTransform(-35.7,-111.4);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FFCC00").s().p("A2oKfIKoC7Ip3qbIPuEvIqutBIQXHgImBvFIPKLyIjXwlIRXQEQihiOrdEnIsHFCIrDL5g");
	this.shape_1234.setTransform(-35.7,-111.4);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKhIKoC6Ip4qbIPuEuIqvtBIQYHgImCvFIPLLxIjXwlIRWQEQigiOrdEnIsHFDIrCL5g");
	this.shape_1235.setTransform(-35.7,-111.3);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#FFCC00").s().p("A2nKgIKoC7Ip4qbIPuEuIqvtAIQYHfImCvFIPLLxIjXwlIRWQEQigiOrdEnIsHFDIrCL5g");
	this.shape_1236.setTransform(-35.7,-111.3);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKiIKoC5Ip4qaIPvEtIqwtAIQYHfImDvFIPMLwIjYwlIRXQDQigiOrdEoIsHFEIrBL6g");
	this.shape_1237.setTransform(-35.7,-111.3);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#FFCC00").s().p("A2nKiIKpC5Ip5qaIPuEtIqvtAIQXHfImCvFIPLLxIjYwlIRYQCQihiOrcEoIsHFEIrBL6g");
	this.shape_1238.setTransform(-35.7,-111.3);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f().s("#000000").ss(1.5,1,1).p("A2nKjIKpC5Ip5qZIPvErIqys/IQZHdImDvEIPMLvIjawlIRaQBQihiNrcEpIsHFFIrAL7g");
	this.shape_1239.setTransform(-35.6,-111.2);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#FFCC00").s().p("A2mKjIKoC5Ip5qZIPvErIqys/IQZHeImDvFIPMLvIjawkIRZQBQihiPrcEqIsGFEIrAL8g");
	this.shape_1240.setTransform(-35.6,-111.2);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f().s("#000000").ss(1.5,1,1).p("A2mKkIKpC4Ip6qYIPvEqIqys+IQZHcImEvDIPMLuIjawlIRaQBQihiPrcErIsGFFIq/L7g");
	this.shape_1241.setTransform(-35.6,-111.1);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FFCC00").s().p("A2mKkIKpC4Ip6qZIPvErIqys+IQZHcImEvDIPMLtIjawkIRaQAQihiNrcEqIsGFFIq/L7g");
	this.shape_1242.setTransform(-35.6,-111.1);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKmIKpC3Ip7qYIPvEpIqzs9IQaHbImGvEIPOLtIjcwkIRbP+QihiNrbErIsGFGIq+L9g");
	this.shape_1243.setTransform(-35.6,-111);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#FFCC00").s().p("A2lKmIKpC3Ip7qYIPvEpIqzs9IQaHbImGvEIPOLtIjcwkIRbP+QihiNrbErIsGFGIq+L9g");
	this.shape_1244.setTransform(-35.6,-111);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f().s("#000000").ss(1.5,1,1).p("A2lKoIKpC2Ip8qXIPxEnIq1s8IQaHZImHvDIPPLrIjewjIReP8QiiiNrbEsIsFFIIq9L+g");
	this.shape_1245.setTransform(-35.5,-110.9);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#FFCC00").s().p("A2lKoIKpC2Ip8qXIPxEnIq1s8IQaHZImHvDIPPLrIjewjIReP8QiiiNrbEsIsFFIIq9L+g");
	this.shape_1246.setTransform(-35.5,-110.9);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKqIKpC0Ip9qVIPxElIq2s6IQbHXImJvCIPRLpIjgwjIRfP7QiiiNraEtIsFFJIq7L/g");
	this.shape_1247.setTransform(-35.5,-110.8);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FFCC00").s().p("A2kKqIKpC0Ip9qVIPxElIq2s6IQbHXImJvCIPRLpIjgwjIRfP7QiiiNraEtIsFFJIq7L/g");
	this.shape_1248.setTransform(-35.5,-110.8);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKqIKpC1Ip9qVIPxEkIq3s6IQcHXImKvCIPSLoIjiwjIRhP6QiiiNraEuIsFFKIq7MAg");
	this.shape_1249.setTransform(-35.4,-110.8);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FFCC00").s().p("A2kKqIKqC1Ip+qVIPxEkIq2s6IQbHXImKvCIPSLoIjhwjIRgP6QiiiNraEuIsFFKIq7MAg");
	this.shape_1250.setTransform(-35.4,-110.8);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f().s("#000000").ss(1.5,1,1).p("A2kKrIKqC0Ip+qUIPyEkIq4s6IQcHVImLvBIPSLoIjhwjIRhP5QiiiNraEvIsEFKIq7MAg");
	this.shape_1251.setTransform(-35.4,-110.7);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FFCC00").s().p("A2kKrIKrC0Ip/qUIPxEkIq2s6IQbHVImKvBIPRLoIjhwjIRgP5QihiNraEvIsFFKIq5MAg");
	this.shape_1252.setTransform(-35.4,-110.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1047},{t:this.shape_1046}]}).to({state:[{t:this.shape_1049},{t:this.shape_1048}]},1).to({state:[{t:this.shape_1051},{t:this.shape_1050}]},1).to({state:[{t:this.shape_1053},{t:this.shape_1052}]},1).to({state:[{t:this.shape_1055},{t:this.shape_1054}]},1).to({state:[{t:this.shape_1057},{t:this.shape_1056}]},1).to({state:[{t:this.shape_1059},{t:this.shape_1058}]},1).to({state:[{t:this.shape_1061},{t:this.shape_1060}]},1).to({state:[{t:this.shape_1063},{t:this.shape_1062}]},1).to({state:[{t:this.shape_1065},{t:this.shape_1064}]},1).to({state:[{t:this.shape_1067},{t:this.shape_1066}]},1).to({state:[{t:this.shape_1069},{t:this.shape_1068}]},1).to({state:[{t:this.shape_1071},{t:this.shape_1070}]},1).to({state:[{t:this.shape_1073},{t:this.shape_1072}]},1).to({state:[{t:this.shape_1075},{t:this.shape_1074}]},1).to({state:[{t:this.shape_1077},{t:this.shape_1076}]},1).to({state:[{t:this.shape_1079},{t:this.shape_1078}]},1).to({state:[{t:this.shape_1081},{t:this.shape_1080}]},1).to({state:[{t:this.shape_1083},{t:this.shape_1082}]},1).to({state:[{t:this.shape_1085},{t:this.shape_1084}]},1).to({state:[{t:this.shape_1087},{t:this.shape_1086}]},1).to({state:[{t:this.shape_1089},{t:this.shape_1088}]},1).to({state:[{t:this.shape_1091},{t:this.shape_1090}]},1).to({state:[{t:this.shape_1093},{t:this.shape_1092}]},1).to({state:[{t:this.shape_1095},{t:this.shape_1094}]},1).to({state:[{t:this.shape_1097},{t:this.shape_1096}]},1).to({state:[{t:this.shape_1099},{t:this.shape_1098}]},1).to({state:[{t:this.shape_1101},{t:this.shape_1100}]},1).to({state:[{t:this.shape_1103},{t:this.shape_1102}]},1).to({state:[{t:this.shape_1105},{t:this.shape_1104}]},1).to({state:[{t:this.shape_1107},{t:this.shape_1106}]},1).to({state:[{t:this.shape_1109},{t:this.shape_1108}]},1).to({state:[{t:this.shape_1111},{t:this.shape_1110}]},1).to({state:[{t:this.shape_1113},{t:this.shape_1112}]},1).to({state:[{t:this.shape_1115},{t:this.shape_1114}]},1).to({state:[{t:this.shape_1117},{t:this.shape_1116}]},1).to({state:[{t:this.shape_1119},{t:this.shape_1118}]},1).to({state:[{t:this.shape_1121},{t:this.shape_1120}]},1).to({state:[{t:this.shape_1123},{t:this.shape_1122}]},1).to({state:[{t:this.shape_1125},{t:this.shape_1124}]},1).to({state:[{t:this.shape_1127},{t:this.shape_1126}]},1).to({state:[{t:this.shape_1129},{t:this.shape_1128}]},1).to({state:[{t:this.shape_1131},{t:this.shape_1130}]},1).to({state:[{t:this.shape_1133},{t:this.shape_1132}]},1).to({state:[{t:this.shape_1135},{t:this.shape_1134}]},1).to({state:[{t:this.shape_1137},{t:this.shape_1136}]},1).to({state:[{t:this.shape_1139},{t:this.shape_1138}]},1).to({state:[{t:this.shape_1141},{t:this.shape_1140}]},1).to({state:[{t:this.shape_1143},{t:this.shape_1142}]},1).to({state:[{t:this.shape_1145},{t:this.shape_1144}]},1).to({state:[{t:this.shape_1147},{t:this.shape_1146}]},1).to({state:[{t:this.shape_1149},{t:this.shape_1148}]},1).to({state:[{t:this.shape_1151},{t:this.shape_1150}]},1).to({state:[{t:this.shape_1153},{t:this.shape_1152}]},1).to({state:[{t:this.shape_1155},{t:this.shape_1154}]},1).to({state:[{t:this.shape_1157},{t:this.shape_1156}]},1).to({state:[{t:this.shape_1159},{t:this.shape_1158}]},1).to({state:[{t:this.shape_1161},{t:this.shape_1160}]},1).to({state:[{t:this.shape_1163},{t:this.shape_1162}]},1).to({state:[{t:this.shape_1165},{t:this.shape_1164}]},1).to({state:[{t:this.shape_1167},{t:this.shape_1166}]},1).to({state:[{t:this.shape_1169},{t:this.shape_1168}]},1).to({state:[{t:this.shape_1117},{t:this.shape_1116}]},1).to({state:[{t:this.shape_1171},{t:this.shape_1170}]},1).to({state:[{t:this.shape_1173},{t:this.shape_1172}]},1).to({state:[{t:this.shape_1175},{t:this.shape_1174}]},1).to({state:[{t:this.shape_1177},{t:this.shape_1176}]},1).to({state:[{t:this.shape_1179},{t:this.shape_1178}]},1).to({state:[{t:this.shape_1181},{t:this.shape_1180}]},1).to({state:[{t:this.shape_1182},{t:this.shape_1096}]},1).to({state:[{t:this.shape_1184},{t:this.shape_1183}]},1).to({state:[{t:this.shape_1091},{t:this.shape_1090}]},1).to({state:[{t:this.shape_1186},{t:this.shape_1185}]},1).to({state:[{t:this.shape_1188},{t:this.shape_1187}]},1).to({state:[{t:this.shape_1190},{t:this.shape_1189}]},1).to({state:[{t:this.shape_1079},{t:this.shape_1078}]},1).to({state:[{t:this.shape_1192},{t:this.shape_1191}]},1).to({state:[{t:this.shape_1194},{t:this.shape_1193}]},1).to({state:[{t:this.shape_1196},{t:this.shape_1195}]},1).to({state:[{t:this.shape_1198},{t:this.shape_1197}]},1).to({state:[{t:this.shape_1200},{t:this.shape_1199}]},1).to({state:[{t:this.shape_1202},{t:this.shape_1201}]},1).to({state:[{t:this.shape_1204},{t:this.shape_1203}]},1).to({state:[{t:this.shape_1206},{t:this.shape_1205}]},1).to({state:[{t:this.shape_1208},{t:this.shape_1207}]},1).to({state:[{t:this.shape_1210},{t:this.shape_1209}]},1).to({state:[{t:this.shape_1047},{t:this.shape_1046}]},1).to({state:[{t:this.shape_1210},{t:this.shape_1209}]},1).to({state:[{t:this.shape_1208},{t:this.shape_1207}]},1).to({state:[{t:this.shape_1206},{t:this.shape_1205}]},1).to({state:[{t:this.shape_1204},{t:this.shape_1203}]},1).to({state:[{t:this.shape_1202},{t:this.shape_1201}]},1).to({state:[{t:this.shape_1200},{t:this.shape_1199}]},1).to({state:[{t:this.shape_1198},{t:this.shape_1197}]},1).to({state:[{t:this.shape_1196},{t:this.shape_1195}]},1).to({state:[{t:this.shape_1194},{t:this.shape_1193}]},1).to({state:[{t:this.shape_1192},{t:this.shape_1191}]},1).to({state:[{t:this.shape_1079},{t:this.shape_1078}]},1).to({state:[{t:this.shape_1190},{t:this.shape_1189}]},1).to({state:[{t:this.shape_1188},{t:this.shape_1187}]},1).to({state:[{t:this.shape_1186},{t:this.shape_1185}]},1).to({state:[{t:this.shape_1091},{t:this.shape_1090}]},1).to({state:[{t:this.shape_1184},{t:this.shape_1183}]},1).to({state:[{t:this.shape_1182},{t:this.shape_1096}]},1).to({state:[{t:this.shape_1181},{t:this.shape_1180}]},1).to({state:[{t:this.shape_1179},{t:this.shape_1178}]},1).to({state:[{t:this.shape_1177},{t:this.shape_1176}]},1).to({state:[{t:this.shape_1175},{t:this.shape_1174}]},1).to({state:[{t:this.shape_1173},{t:this.shape_1172}]},1).to({state:[{t:this.shape_1171},{t:this.shape_1170}]},1).to({state:[{t:this.shape_1117},{t:this.shape_1116}]},1).to({state:[{t:this.shape_1169},{t:this.shape_1168}]},1).to({state:[{t:this.shape_1167},{t:this.shape_1166}]},1).to({state:[{t:this.shape_1165},{t:this.shape_1164}]},1).to({state:[{t:this.shape_1163},{t:this.shape_1162}]},1).to({state:[{t:this.shape_1161},{t:this.shape_1160}]},1).to({state:[{t:this.shape_1159},{t:this.shape_1158}]},1).to({state:[{t:this.shape_1157},{t:this.shape_1156}]},1).to({state:[{t:this.shape_1155},{t:this.shape_1154}]},1).to({state:[{t:this.shape_1153},{t:this.shape_1152}]},1).to({state:[{t:this.shape_1151},{t:this.shape_1150}]},1).to({state:[{t:this.shape_1149},{t:this.shape_1148}]},1).to({state:[{t:this.shape_1151},{t:this.shape_1150}]},1).to({state:[{t:this.shape_1153},{t:this.shape_1152}]},1).to({state:[{t:this.shape_1212},{t:this.shape_1211}]},1).to({state:[{t:this.shape_1214},{t:this.shape_1213}]},1).to({state:[{t:this.shape_1216},{t:this.shape_1215}]},1).to({state:[{t:this.shape_1218},{t:this.shape_1217}]},1).to({state:[{t:this.shape_1220},{t:this.shape_1219}]},1).to({state:[{t:this.shape_1127},{t:this.shape_1126}]},1).to({state:[{t:this.shape_1222},{t:this.shape_1221}]},1).to({state:[{t:this.shape_1121},{t:this.shape_1120}]},1).to({state:[{t:this.shape_1224},{t:this.shape_1223}]},1).to({state:[{t:this.shape_1226},{t:this.shape_1225}]},1).to({state:[{t:this.shape_1113},{t:this.shape_1112}]},1).to({state:[{t:this.shape_1228},{t:this.shape_1227}]},1).to({state:[{t:this.shape_1230},{t:this.shape_1229}]},1).to({state:[{t:this.shape_1232},{t:this.shape_1231}]},1).to({state:[{t:this.shape_1179},{t:this.shape_1178}]},1).to({state:[{t:this.shape_1181},{t:this.shape_1180}]},1).to({state:[{t:this.shape_1182},{t:this.shape_1096}]},1).to({state:[{t:this.shape_1184},{t:this.shape_1183}]},1).to({state:[{t:this.shape_1234},{t:this.shape_1233}]},1).to({state:[{t:this.shape_1236},{t:this.shape_1235}]},1).to({state:[{t:this.shape_1238},{t:this.shape_1237}]},1).to({state:[{t:this.shape_1083},{t:this.shape_1082}]},1).to({state:[{t:this.shape_1240},{t:this.shape_1239}]},1).to({state:[{t:this.shape_1242},{t:this.shape_1241}]},1).to({state:[{t:this.shape_1075},{t:this.shape_1074}]},1).to({state:[{t:this.shape_1244},{t:this.shape_1243}]},1).to({state:[{t:this.shape_1069},{t:this.shape_1068}]},1).to({state:[{t:this.shape_1246},{t:this.shape_1245}]},1).to({state:[{t:this.shape_1063},{t:this.shape_1062}]},1).to({state:[{t:this.shape_1248},{t:this.shape_1247}]},1).to({state:[{t:this.shape_1250},{t:this.shape_1249}]},1).to({state:[{t:this.shape_1252},{t:this.shape_1251}]},1).to({state:[{t:this.shape_1208},{t:this.shape_1207}]},1).to({state:[{t:this.shape_1210},{t:this.shape_1209}]},1).to({state:[{t:this.shape_1047},{t:this.shape_1046}]},1).wait(4));

	// finBottom01back
	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f().s("#000000").ss(1.5,1,1).p("AHPpQQgkDnicDtQgoA6gtA8QjnEnmhEwQCIk4A1jrQANg5AJg2QAhjZgyiNIFhhZQFmhWAUAGg");
	this.shape_1253.setTransform(27.2,144.1);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FFCC00").s().p("AkQAuQANg5AIg2QAhjZgyiNIFhhZQFlhWAVAGQgkDnicDtQgoA6gsA8QjnEnmhEwQCHk4A2jrg");
	this.shape_1254.setTransform(27.2,144.1);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f().s("#000000").ss(1.5,1,1).p("AnQJMQGiktDokkQAtg8Apg6QCdjrAkjlQgUgGlmBUIlhBYQAyCMgjDYQgIA1gOA5Qg2DqiJE1g");
	this.shape_1255.setTransform(27.1,143.8);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FFCC00").s().p("AkRAtQAOg5AIg1QAjjYgyiMIFhhYQFmhUAUAGQgkDlidDrQgpA6gtA8QjoEkmiEtQCJk1A2jqg");
	this.shape_1256.setTransform(27.1,143.8);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f().s("#000000").ss(1.5,1,1).p("AnTJIQGjkrDrkiQAtg7Aog6QCfjqAljjQgUgGlnBUIlhBWQAxCLgkDXQgJA1gNA5Qg4DoiKEzg");
	this.shape_1257.setTransform(27,143.4);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FFCC00").s().p("AkRAtQAOg5AJg1QAjjXgxiLIFhhWQFnhUAUAGQgmDjieDqQgoA6guA7QjpEimkErQCKkzA4jog");
	this.shape_1258.setTransform(27,143.4);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f().s("#000000").ss(1.5,1,1).p("AnWJEQGlkpDrkgQAug7Apg5QCfjoAnjiQgUgGlnBTIliBVQAwCLgkDVQgJA1gOA4Qg5DmiMEyg");
	this.shape_1259.setTransform(26.9,143.1);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FFCC00").s().p("AkRAsQAOg4AJg1QAkjVgwiLIFihVQFnhTAUAGQgnDiifDoQgpA5guA7QjrEgmlEpQCMkyA5jmg");
	this.shape_1260.setTransform(26.9,143.1);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f().s("#000000").ss(1.5,1,1).p("AnZJAQGnkmDtkeQAtg6Apg5QChjmAojhQgUgGloBRIliBUQAvCKglDUQgKA1gOA4Qg6DliNEvg");
	this.shape_1261.setTransform(26.9,142.7);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FFCC00").s().p("AkSAsQAPg4AJg1QAljUguiKIFhhUQFnhRAUAGQgoDhigDmQgpA5gtA6QjtEemnEmQCOkvA5jlg");
	this.shape_1262.setTransform(26.9,142.7);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f().s("#000000").ss(1.5,1,1).p("AncI7QGokjDukcQAug6Aqg4QCijlApjfQgUgGlpBRIliBTQAvCJgnDSQgJA0gPA4Qg7DjiPEtg");
	this.shape_1263.setTransform(26.8,142.3);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FFCC00").s().p("AkSArQAPg4AKg0QAmjSgviJIFihTQFohRAVAGQgpDfiiDlQgpA4gvA6QjtEcmoEjQCOktA7jjg");
	this.shape_1264.setTransform(26.8,142.3);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f().s("#000000").ss(1.5,1,1).p("AneI3QGpkhDwkZQAug6Apg4QCjjjAqjeQgUgGloBQIliBSQAuCIgoDRQgKA0gPA3Qg8DiiQErg");
	this.shape_1265.setTransform(26.7,142);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FFCC00").s().p("AkSAqQAPg3AKg0QAojRguiIIFihSQFohQAUAGQgqDeijDjQgpA4guA6QjwEZmpEhQCQkrA8jig");
	this.shape_1266.setTransform(26.7,142);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("#000000").ss(1.5,1,1).p("AnhIzQGrkfDxkXQAug5Aqg4QCkjhArjcQgUgGloBOIlkBRQAuCHgpDQQgKAzgPA3Qg9DhiSEpg");
	this.shape_1267.setTransform(26.6,141.6);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FFCC00").s().p("AkSApQAPg3AKgzQApjQgtiHIFihRQFphOAUAGQgrDcikDhQgqA4guA5QjxEXmrEfQCSkpA9jhg");
	this.shape_1268.setTransform(26.6,141.6);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f().s("#000000").ss(1.5,1,1).p("AnkIuQGtkcDykVQAug4Arg4QCkjfAtjbQgUgGlpBNIlkBQQAtCHgqDOQgKAzgPA3Qg/DfiTEmg");
	this.shape_1269.setTransform(26.5,141.3);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FFCC00").s().p("AkSApQAPg3AKgzQAqjOgtiHIFkhQQFphNAUAGQgtDbikDfQgrA4guA4QjyEVmtEcQCTkmA/jfg");
	this.shape_1270.setTransform(26.5,141.3);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f().s("#000000").ss(1.5,1,1).p("AnnIqQGukZD0kUQAug4Arg2QCmjeAujaQgUgGlqBMIlkBPQAsCGgrDNQgKAzgQA2Qg/DdiVElg");
	this.shape_1271.setTransform(26.5,140.9);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FFCC00").s().p("AkSAoQAPg2ALgzQArjNgsiGIFjhPQFphMAVAGQguDaimDeQgrA2gvA4QjzEUmuEZQCVklBAjdg");
	this.shape_1272.setTransform(26.5,140.9);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f().s("#000000").ss(1.5,1,1).p("AnpImQGvkXD1kRQAvg4Arg2QCnjdAujYQgTgGlqBLIlkBOQArCFgrDMQgMAygQA2QhADciWEjg");
	this.shape_1273.setTransform(26.4,140.6);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FFCC00").s().p("AkSAnQAQg2ALgyQArjMgriFIFjhOQFrhLATAGQguDYinDdQgrA2gvA4Qj1ERmvEXQCWkjBBjcg");
	this.shape_1274.setTransform(26.4,140.6);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("#000000").ss(1.5,1,1).p("AnsIhQGxkUD2kPQAvg3Arg2QCpjbAvjWQgUgGlqBKIlkBMQAqCEgsDLQgMAygQA1QhBDbiYEgg");
	this.shape_1275.setTransform(26.3,140.2);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FFCC00").s().p("AkTAmQAQg1AMgyQAsjLgqiEIFkhMQFqhKAUAGQgvDWipDbQgrA2gvA3Qj2EPmxEUQCYkgBBjbg");
	this.shape_1276.setTransform(26.3,140.2);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("#000000").ss(1.5,1,1).p("AnvIdQGykRD4kNQAwg3Arg1QCqjZAwjWQgUgGlrBJIllBLQAqCEgtDJQgMAygQA1QhDDZiZEeg");
	this.shape_1277.setTransform(26.2,139.8);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FFCC00").s().p("AkTAmQARg1ALgyQAujJgriEIFlhLQFrhJAUAGQgwDWiqDZQgsA1gvA3Qj4ENmxERQCZkeBCjZg");
	this.shape_1278.setTransform(26.2,139.8);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f().s("#000000").ss(1.5,1,1).p("AnxIZQGzkQD5kKQAwg3Arg1QCrjXAxjUQgTgGlrBIIllBKQApCDgvDIQgMAxgQA1QhEDXiaEdg");
	this.shape_1279.setTransform(26.1,139.5);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FFCC00").s().p("AkTAlQAQg1AMgxQAvjIgpiDIFlhKQFrhIATAGQgxDUirDXQgrA1gwA3Qj5EKmzEQQCakdBEjXg");
	this.shape_1280.setTransform(26.1,139.5);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f().s("#000000").ss(1.5,1,1).p("An0IUQG0kND7kIQAwg2Asg1QCrjVAzjSQgTgGlsBGIlmBJQApCCgwDHQgMAxgRA0QhFDWibEag");
	this.shape_1281.setTransform(26.1,139.2);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FFCC00").s().p("AkUAkQASg0ALgxQAwjHgpiCIFmhJQFrhGAUAGQgzDSirDVQgsA1gwA2Qj7EIm0ENQCbkaBFjWg");
	this.shape_1282.setTransform(26.1,139.2);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f().s("#000000").ss(1.5,1,1).p("An3IQQG2kKD8kGQAxg2Asg0QCtjUAzjRQgTgGlsBGIlmBIQAoCBgxDFQgMAxgRA0QhGDUieEYg");
	this.shape_1283.setTransform(26,138.8);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FFCC00").s().p("AkUAkQARg0ANgxQAxjFgoiBIFlhIQFthGATAGQgzDRitDUQgsA0gxA2Qj8EGm2EKQCekYBFjUg");
	this.shape_1284.setTransform(26,138.8);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f().s("#000000").ss(1.5,1,1).p("An6IMQG4kID9kFQAxg1AsgzQCujTA1jPQgUgGlsBEIlmBHQAnCBgyDEQgMAwgSAzQhHDTifEXg");
	this.shape_1285.setTransform(25.9,138.5);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#FFCC00").s().p("AkUAiQASgzAMgwQAyjEgniBIFmhHQFshEAUAGQg1DPiuDTQgsAzgxA1Qj9EFm4EIQCfkXBHjTg");
	this.shape_1286.setTransform(25.9,138.5);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f().s("#000000").ss(1.5,1,1).p("An9IIQG5kGD/kCQAxg0Atg0QCvjQA2jOQgUgGlsBDIloBGQAnCAgzDCQgMAwgSAzQhIDSihEUg");
	this.shape_1287.setTransform(25.8,138.1);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FFCC00").s().p("AkUAiQASgzANgwQAzjCgoiAIFnhGQFthDAUAGQg2DOivDQQgtA0gxA0Qj+ECm5EGQCgkUBIjSg");
	this.shape_1288.setTransform(25.8,138.1);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f().s("#000000").ss(1.5,1,1).p("An/IDQG6kCEAkBQAxg0AtgyQCwjPA3jNQgTgGltBCIlnBFQAmB/g0DBQgNAwgSAyQhKDQihESg");
	this.shape_1289.setTransform(25.7,137.7);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFCC00").s().p("AkUAhQASgyANgwQA0jBgmh/IFnhFQFthCATAGQg3DNiwDPQgtAygxA0QkAEBm6ECQChkSBKjQg");
	this.shape_1290.setTransform(25.7,137.7);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("#000000").ss(1.5,1,1).p("AoCH/QG7kAECj/QAxgyAugzQCxjNA4jLQgTgGluBBIloBDQAmB/g1DAQgNAvgTAyQhKDPijEPg");
	this.shape_1291.setTransform(25.7,137.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFCC00").s().p("AkUAhQASgyANgvQA1jAglh/IFnhEQFuhAATAGQg4DLixDNQguAzgxAyQkBD/m8EAQCjkPBLjPg");
	this.shape_1292.setTransform(25.7,137.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("#000000").ss(1.5,1,1).p("AoFH7QG9j+EDj9QAygyAtgyQCzjMA5jJQgUgGltBAIloBCQAkB+g2C+QgNAvgSAyQhMDNilEOg");
	this.shape_1293.setTransform(25.6,137);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFCC00").s().p("AkUAgQASgyANgvQA2i+gkh+IFohCQFthAAUAGQg5DJizDMQgtAygyAyQkDD9m9D+QClkOBMjNg");
	this.shape_1294.setTransform(25.6,137);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("#000000").ss(1.5,1,1).p("AoIH3QG/j8EEj6QAzgyAtgyQC0jKA6jIQgUgGluA/IlpBBQAkB9g3C9QgNAvgTAyQhNDLimEMg");
	this.shape_1295.setTransform(25.5,136.6);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFCC00").s().p("AkVAgQATgyAOgvQA2i9gjh9IFohBQFug/AUAGQg7DIizDKQguAygyAyQkED6m/D8QCmkMBNjLg");
	this.shape_1296.setTransform(25.5,136.6);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("#000000").ss(1.5,1,1).p("AoKHyQG/j4EGj5QAzgxAtgxQC1jJA7jGQgTgGlvA9IloBAQAjB9g4C7QgOAvgTAxQhODKinEJg");
	this.shape_1297.setTransform(25.4,136.3);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFCC00").s().p("AkVAfQATgxAOgvQA4i7gjh9IFohAQFvg9ATAGQg7DGi1DJQgtAxgzAxQkGD5m/D4QCnkJBOjKg");
	this.shape_1298.setTransform(25.4,136.3);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("#000000").ss(1.5,1,1).p("AoNHuQHBj2EHj2QAzgxAugxQC2jHA8jFQgTgGlwA9IlpA+QAjB8g5C6QgOAugTAxQhQDJioEHg");
	this.shape_1299.setTransform(25.4,135.9);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFCC00").s().p("AkVAeQATgxAOguQA5i6gjh8IFqg+QFvg9ATAGQg8DFi2DHQguAxgzAxQkHD2nBD2QCpkHBPjJg");
	this.shape_1300.setTransform(25.4,135.9);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("#000000").ss(1.5,1,1).p("AoQHqQHDj0EIj0QAzgxAvgwQC2jFA+jEQgUgGlvA8IlqA9QAiB7g6C5QgOAugTAwQhRDHiqEGg");
	this.shape_1301.setTransform(25.3,135.6);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFCC00").s().p("AkVAdQATgwAOguQA6i5gih7IFqg9QFvg8AUAGQg+DEi2DFQgvAwgzAxQkID0nDD0QCqkGBRjHg");
	this.shape_1302.setTransform(25.3,135.6);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f().s("#000000").ss(1.5,1,1).p("AoTHlQHEjxEKjyQA0gwAugwQC4jDA/jDQgUgGlvA7IlqA9QAhB6g7C3QgPAtgTAxQhSDFisEDg");
	this.shape_1303.setTransform(25.2,135.2);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FFCC00").s().p("AkVAdQATgxAPgtQA7i3ghh6IFqg9QFvg7AUAGQg/DDi4DDQguAwg0AwQkKDynEDxQCskDBSjFg");
	this.shape_1304.setTransform(25.2,135.2);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f().s("#000000").ss(1.5,1,1).p("AoWHhQHGjvELjwQA0gvAvgwQC5jBBAjBQgUgGlwA5IlrA8QAiB5g9C2QgPAtgUAwQhSDEiuEBg");
	this.shape_1305.setTransform(25.1,134.9);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FFCC00").s().p("AkWAcQAVgwAOgtQA8i2ghh5IFrg8QFwg5AUAGQhADBi5DBQgvAwg0AvQkLDwnGDvQCukBBSjEg");
	this.shape_1306.setTransform(25.1,134.9);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f().s("#000000").ss(1.5,1,1).p("AoYHdQHHjtEMjtQA0gwAvgvQC6jABBi/QgTgGlxA4IlqA7QAgB4g+C1QgPAtgUAvQhUDCiuEAg");
	this.shape_1307.setTransform(25,134.5);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FFCC00").s().p("AkWAbQAUgvAPgtQA+i1ggh4IFqg7QFxg4ATAGQhBC/i6DAQgvAvg0AwQkMDtnHDtQCukABUjCg");
	this.shape_1308.setTransform(25,134.5);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("#000000").ss(1.5,1,1).p("AobHYQHIjpEOjsQA0gvAwguQC7i/BCi+QgTgGlxA3IlsA6QAgB4g/CzQgPAsgUAvQhVDBiwD9g");
	this.shape_1309.setTransform(25,134.2);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FFCC00").s().p("AkWAaQAVgvAPgsQA+izggh4IFsg6QFxg3ATAGQhCC+i7C/QgvAug1AvQkODsnIDpQCwj9BVjBg");
	this.shape_1310.setTransform(25,134.2);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f().s("#000000").ss(1.5,1,1).p("AoeHUQHKjnEPjqQA1guAvguQC9i9BDi8QgUgGlxA2IlrA4QAeB3g/CyQgQAsgUAuQhWDAiyD7g");
	this.shape_1311.setTransform(24.9,133.8);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FFCC00").s().p("AkWAZQAUguAQgsQA/iygeh3IFrg4QFxg2AUAGQhDC8i9C9QgvAug1AuQkPDqnKDnQCyj7BWjAg");
	this.shape_1312.setTransform(24.9,133.8);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f().s("#000000").ss(1.5,1,1).p("AogHQQHLjlEQjnQA1guAwguQC+i7BDi7QgTgGlxA1IlsA3QAeB3hACwQgQAsgVAuQhXC+izD5g");
	this.shape_1313.setTransform(24.8,133.4);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FFCC00").s().p("AkWAZQAVguAQgsQBAiwgeh3IFsg3QFxg1ATAGQhDC7i+C7QgwAug1AuQkQDnnLDlQCzj5BXi+g");
	this.shape_1314.setTransform(24.8,133.4);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f().s("#000000").ss(1.5,1,1).p("AojHLQHMjiESjlQA2guAwgtQC/i5BEi6QgTgGlyA0IlsA2QAdB1hBCwQgRArgVAuQhYC8i0D3g");
	this.shape_1315.setTransform(24.7,133.1);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FFCC00").s().p("AkWAYQAUguARgrQBBiwgdh1IFsg2QFyg0ATAGQhFC6i/C5QgwAtg1AuQkSDlnMDiQC0j3BZi8g");
	this.shape_1316.setTransform(24.7,133.1);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f().s("#000000").ss(1.5,1,1).p("AomHHQHOjfETjjQA2gtAwgtQDAi4BGi4QgTgGlzAzIlsA0QAcB1hCCuQgQArgWAuQhZC7i2D0g");
	this.shape_1317.setTransform(24.6,132.7);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FFCC00").s().p("AkXAYQAWguAQgrQBCiugch1IFsg0QFzgzATAGQhGC4jAC4QgwAtg2AtQkTDjnODfQC2j0BZi7g");
	this.shape_1318.setTransform(24.6,132.7);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f().s("#000000").ss(1.5,1,1).p("AopHDQHPjdEVjhQA2gtAxgsQDAi2BIi3QgTgGlzAyIluAzQAcB0hDCtQgQArgWAtQhbC5i3Dzg");
	this.shape_1319.setTransform(24.6,132.4);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FFCC00").s().p("AkXAXQAWgtAQgrQBDitgbh0IFtgzQFygyAUAGQhHC3jBC2QgxAsg2AtQkVDhnODdQC2jzBbi5g");
	this.shape_1320.setTransform(24.6,132.4);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f().s("#000000").ss(1.5,1,1).p("AorG/QHQjbEWjfQA2gsAxgsQDCi0BIi2QgTgGlzAxIltAyQAbB0hECrQgRAqgWAtQhcC4i4Dxg");
	this.shape_1321.setTransform(24.5,132);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FFCC00").s().p("AkXAWQAWgtARgqQBEirgbh0IFtgyQFzgxATAGQhIC2jCC0QgxAsg2AsQkWDfnQDbQC4jxBci4g");
	this.shape_1322.setTransform(24.5,132);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("#000000").ss(1.5,1,1).p("AouG6QHSjYEXjcQA3gsAxgsQDDizBJizQgTgGlzAvIluAyQAbByhGCqQgRAqgWAsQhdC3i6Dug");
	this.shape_1323.setTransform(24.4,131.7);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FFCC00").s().p("AkXAVQAWgsARgqQBGiqgbhyIFugyQFzgvATAGQhJCzjDCzQgxAsg3AsQkXDcnSDYQC6juBdi3g");
	this.shape_1324.setTransform(24.4,131.7);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("#000000").ss(1.5,1,1).p("AoxG2QHTjWEZjaQA3grAygsQDEixBKiyQgTgGl0AuIluAxQAaBxhHCpQgRApgXAtQhdC1i8Dsg");
	this.shape_1325.setTransform(24.3,131.3);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FFCC00").s().p("AkYAVQAXgtASgpQBGipgahxIFugxQF0guATAGQhKCyjECxQgyAsg3ArQkZDanTDWQC8jsBdi1g");
	this.shape_1326.setTransform(24.3,131.3);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f().s("#000000").ss(1.5,1,1).p("Ao0GxQHVjTEajYQA3grAygrQDFivBMixQgTgGl0AtIlvAwQAZBxhHCnQgSApgXAsQhfCzi9Dqg");
	this.shape_1327.setTransform(24.2,131);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FFCC00").s().p("AkYAUQAXgsASgpQBHingZhxIFvgwQF0gtATAGQhMCxjFCvQgyArg3ArQkaDYnVDTQC9jqBfizg");
	this.shape_1328.setTransform(24.2,131);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("#000000").ss(1.5,1,1).p("Ao3GtQHWjQEcjXQA3gqAygqQDHiuBNiwQgTgGl1AtIlvAuQAYBwhICmQgSApgXArQhgCyi/Dog");
	this.shape_1329.setTransform(24.2,130.6);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FFCC00").s().p("AkYATQAXgrASgpQBJimgZhwIFvguQF0gtAUAGQhNCwjHCuQgxAqg3AqQkcDXnWDQQC+joBgiyg");
	this.shape_1330.setTransform(24.2,130.6);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().s("#000000").ss(1.5,1,1).p("AI6mnQhNCujICsQgyAqg4AqQkdDUnXDOQDAjmBhixQAXgrASgoQBKilgYhvIFvgtQF1grATAGg");
	this.shape_1331.setTransform(24.1,130.3);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FFCC00").s().p("AkYASQAXgrASgoQBKilgYhvIFvgtQF1grATAGQhNCujICsQgyAqg4AqQkdDUnXDOQDAjmBhixg");
	this.shape_1332.setTransform(24.1,130.3);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f().s("#000000").ss(1.5,1,1).p("Ao1GvQHVjSEbjXQA3grAzgqQDFivBMiwQgTgGl0AtIlwAuQAZBxhICnQgRApgXArQhgCzi9Dpg");
	this.shape_1333.setTransform(24.2,130.8);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FFCC00").s().p("AkYATQAXgrASgpQBIingZhxIFvguQF0gtATAGQhMCwjFCvQgzAqg3ArQkbDXnVDSQC+jpBfizg");
	this.shape_1334.setTransform(24.2,130.8);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f().s("#000000").ss(1.5,1,1).p("AotG8QHRjZEXjeQA2gsAygsQDCizBJi1QgTgGl0AwIltAyQAbBzhFCrQgRAqgWAsQhcC4i6Dvg");
	this.shape_1335.setTransform(24.4,131.9);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FFCC00").s().p("AkXAVQAWgsARgqQBFirgbhzIFtgyQF0gwATAGQhJC1jCCzQgyAsg2AsQkXDenRDZQC6jvBci4g");
	this.shape_1336.setTransform(24.4,131.9);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f().s("#000000").ss(1.5,1,1).p("AolHJQHOjhETjkQA1gtAwgtQDAi5BFi5QgTgGlyA0IltA1QAdB1hCCvQgQArgWAuQhYC8i2D1g");
	this.shape_1337.setTransform(24.7,132.9);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FFCC00").s().p("AkXAYQAWguAQgrQBCivgdh1IFsg1QFzg0ASAGQhFC5i/C5QgxAtg1AtQkTDknNDhQC2j1BYi8g");
	this.shape_1338.setTransform(24.7,132.9);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f().s("#000000").ss(1.5,1,1).p("AocHWQHIjoEPjrQA0guAwgvQC8i9BCi9QgTgGlxA2IlsA5QAfB3g+CzQgQAsgUAvQhWDAiwD8g");
	this.shape_1339.setTransform(24.9,134);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FFCC00").s().p("AkWAaQAUgvAQgsQA+izgfh3IFsg5QFxg2ATAGQhCC9i8C9QgwAvg0AuQkPDrnIDoQCwj8BWjAg");
	this.shape_1340.setTransform(24.9,134);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f().s("#000000").ss(1.5,1,1).p("AoUHjQHEjwELjwQAzgwAwgwQC4jDA/jBQgTgGlwA6IlrA8QAhB6g7C2QgPAtgUAwQhSDFisECg");
	this.shape_1341.setTransform(25.2,135);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FFCC00").s().p("AkWAcQAUgwAPgtQA8i2ghh6IFpg8QFwg6AUAGQg/DBi4DDQgwAwgzAwQkKDwnFDwQCtkCBRjFg");
	this.shape_1342.setTransform(25.2,135);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f().s("#000000").ss(1.5,1,1).p("AoMHwQHBj4EGj3QAzgxAugxQC1jIA8jFQgUgGluA9IlpA/QAjB8g5C7QgOAugTAxQhPDJioEJg");
	this.shape_1343.setTransform(25.4,136.1);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FFCC00").s().p("AkVAeQATgxAOguQA5i7gjh8IFpg/QFug9AUAGQg8DFi1DIQguAxgzAxQkGD3nBD4QCokJBPjJg");
	this.shape_1344.setTransform(25.4,136.1);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f().s("#000000").ss(1.5,1,1).p("AoDH9QG8j/ECj+QAygyAtgyQCyjNA4jKQgTgGluBAIlnBDQAlB+g2C/QgNAvgSAzQhMDNijEPg");
	this.shape_1345.setTransform(25.6,137.2);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FFCC00").s().p("AkUAhQASgzANgvQA2i/glh+IFnhDQFuhAATAGQg4DKiyDNQgtAygyAyQkCD+m8D/QCjkPBMjNg");
	this.shape_1346.setTransform(25.6,137.2);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f().s("#000000").ss(1.5,1,1).p("An7IKQG4kHD+kDQAxg1AtgzQCujSA1jPQgTgGltBEIlnBGQAnCBgyDDQgNAwgRAzQhIDTifEVg");
	this.shape_1347.setTransform(25.9,138.3);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FFCC00").s().p("AkUAiQASgzAMgwQAyjDgmiBIFmhGQFshEAUAGQg1DPiuDSQgtAzgxA1Qj+EDm4EHQCgkVBHjTg");
	this.shape_1348.setTransform(25.9,138.3);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f().s("#000000").ss(1.5,1,1).p("AnzIXQG0kOD6kKQAwg2Asg1QCrjWAyjTQgUgGlrBHIllBJQApCDgwDHQgLAxgRA1QhFDWibEcg");
	this.shape_1349.setTransform(26.1,139.3);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FFCC00").s().p("AkTAlQARg1ALgxQAwjHgpiDIFlhJQFrhHAUAGQgyDTirDWQgsA1gwA2Qj6EKm0EOQCbkcBFjWg");
	this.shape_1350.setTransform(26.1,139.3);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f().s("#000000").ss(1.5,1,1).p("AnrIkQGxkWD1kQQAwg3Aqg2QCojcAvjXQgUgGlqBKIlkBNQArCFgtDLQgLAygQA2QhBDbiXEig");
	this.shape_1351.setTransform(26.3,140.4);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FFCC00").s().p("AkTAnQAQg2ALgyQAtjLgriFIFkhNQFqhKATAGQguDXioDcQgqA2gwA3Qj1EQmxEWQCXkiBBjbg");
	this.shape_1352.setTransform(26.3,140.4);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f().s("#000000").ss(1.5,1,1).p("AniIwQGrkdDxkWQAvg5Aqg3QCkjhAsjbQgUgGlpBNIljBQQAtCIgpDPQgKAzgPA3Qg+DfiSEog");
	this.shape_1353.setTransform(26.6,141.5);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FFCC00").s().p("AkSApQAPg3AKgzQApjPgtiIIFjhQQFphNAUAGQgsDbikDhQgqA3gvA5QjxEWmrEdQCSkoA+jfg");
	this.shape_1354.setTransform(26.6,141.5);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f().s("#000000").ss(1.5,1,1).p("AnaI9QGokkDtkdQAug6Apg5QChjlAojgQgUgGlnBRIliBTQAvCKgmDTQgKA0gOA4Qg7DkiOEug");
	this.shape_1355.setTransform(26.8,142.5);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FFCC00").s().p("AkRArQAOg4AJg0QAnjTgwiKIFjhTQFnhRAUAGQgoDgihDlQgqA5gtA6QjuEdmnEkQCOkuA7jkg");
	this.shape_1356.setTransform(26.8,142.5);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f().s("#000000").ss(1.5,1,1).p("AnSJKQGkksDpkjQAtg7Aog6QCejrAljkQgUgGlnBUIlgBXQAxCMgjDXQgJA1gOA5Qg3DpiKE0g");
	this.shape_1357.setTransform(27,143.6);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FFCC00").s().p("AkRAtQAOg5AJg1QAjjXgxiMIFghXQFnhUAUAGQglDkieDrQgoA6gtA7QjpEjmkEsQCKk0A3jpg");
	this.shape_1358.setTransform(27,143.6);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f().s("#000000").ss(1.5,1,1).p("AnSJKQGjksDqkjQAtg7Aog6QCejqAljkQgTgGlnBUIlhBWQAxCMgkDXQgIA1gOA5Qg3DpiKE0g");
	this.shape_1359.setTransform(27,143.5);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FFCC00").s().p("AkRAtQAOg5AJg1QAjjXgxiMIFghWQFnhUAUAGQglDkieDqQgoA6guA7QjoEjmkEsQCKk0A3jpg");
	this.shape_1360.setTransform(27,143.5);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f().s("#000000").ss(1.5,1,1).p("AnXJDQGmkoDskgQAtg6Apg5QCgjoAnjiQgUgGloBTIlhBVQAwCKglDVQgKA1gNA4Qg6DmiMExg");
	this.shape_1361.setTransform(26.9,143);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FFCC00").s().p("AkRAsQANg4AKg1QAljVgwiKIFhhVQFnhTAVAGQgnDiigDoQgpA5guA6QjrEgmmEoQCMkxA6jmg");
	this.shape_1362.setTransform(26.9,143);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("#000000").ss(1.5,1,1).p("AnbI8QGokkDukcQAug6Apg4QCijlAojfQgTgGloBQIljBTQAvCKgmDSQgKA0gOA4Qg7DkiPEtg");
	this.shape_1363.setTransform(26.8,142.4);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FFCC00").s().p("AkSArQAPg4AKg0QAmjSgviKIFihTQFphQATAGQgoDfiiDlQgqA4gtA6QjuEcmoEkQCPktA6jkg");
	this.shape_1364.setTransform(26.8,142.4);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("#000000").ss(1.5,1,1).p("AngI1QGqkgDwkZQAvg5Aqg4QCjjiArjdQgUgGlpBPIljBRQAuCIgoDRQgKAzgPA3Qg9DiiREqg");
	this.shape_1365.setTransform(26.7,141.8);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FFCC00").s().p("AkSApQAPg3AKgzQAojRguiIIFjhRQFphPATAGQgqDdikDiQgpA4gvA5QjwEZmqEgQCRkqA9jig");
	this.shape_1366.setTransform(26.7,141.8);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f().s("#000000").ss(1.5,1,1).p("AnkIuQGtkcDykVQAvg4Aqg3QCljgAsjbQgUgGlpBOIljBPQAsCHgqDOQgKAzgPA3Qg/DeiTEng");
	this.shape_1367.setTransform(26.5,141.2);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FFCC00").s().p("AkSApQAPg3AKgzQArjOgtiHIFjhPQFphOAUAGQgsDbilDgQgrA3guA4QjzEVmsEcQCTknA/jeg");
	this.shape_1368.setTransform(26.5,141.2);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("#000000").ss(1.5,1,1).p("AnpInQGvkYD1kRQAvg4Arg3QCnjcAtjZQgUgGlpBMIlkBNQAsCGgsDMQgLAygQA2QhADdiWEjg");
	this.shape_1369.setTransform(26.4,140.7);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FFCC00").s().p("AkTAnQAQg2ALgyQArjMgriGIFkhNQFqhMATAGQgtDZinDcQgrA3gvA4Qj1ERmvEYQCWkjBAjdg");
	this.shape_1370.setTransform(26.4,140.7);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("#000000").ss(1.5,1,1).p("AntIgQGxkUD2kOQAxg3Aqg1QCpjaAwjWQgTgGlrBJIllBMQArCEguDKQgLAygQA1QhCDaiYEgg");
	this.shape_1371.setTransform(26.3,140.1);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FFCC00").s().p("AkSAmQAQg1ALgyQAtjKgqiEIFkhMQFqhJAUAGQgwDWipDaQgrA1gvA3Qj3EOmxEUQCYkgBDjag");
	this.shape_1372.setTransform(26.3,140.1);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("#000000").ss(1.5,1,1).p("An2ISQG1kLD8kIQAwg1Atg1QCsjUAzjRQgUgGlrBFIlmBJQAoCCgxDFQgMAxgRA0QhFDVidEZg");
	this.shape_1373.setTransform(26,138.9);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FFCC00").s().p("AkTAkQAQg0ANgxQAwjFgoiCIFmhJQFrhFAUAGQg0DRisDUQgsA1gwA1Qj8EIm1ELQCdkZBGjVg");
	this.shape_1374.setTransform(26,138.9);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#000000").ss(1.5,1,1).p("An6ILQG3kID+kDQAxg1Asg0QCujSA1jPQgTgGlsBEIlnBHQAnCAgyDEQgMAwgSAzQhHDTifEWg");
	this.shape_1375.setTransform(25.9,138.4);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FFCC00").s().p("AkUAiQASgzAMgwQAyjEgniAIFnhHQFshEATAGQg1DPiuDSQgsA0gxA1Qj+EDm3EIQCfkWBHjTg");
	this.shape_1376.setTransform(25.9,138.4);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("#000000").ss(1.5,1,1).p("An/IEQG6kDEAkBQAyg0AsgzQCwjPA3jNQgUgGlsBDIloBEQAmCAg0DBQgNAwgRAyQhKDRihESg");
	this.shape_1377.setTransform(25.8,137.8);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FFCC00").s().p("AkUAiQASgzAMgvQA1jCgmiAIFnhEQFshDAUAHQg3DMiwDQQgsAygyA0QkAEBm6EDQCikSBJjQg");
	this.shape_1378.setTransform(25.8,137.8);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("#000000").ss(1.5,1,1).p("AoIH2QG/j7EEj6QAygyAugyQC0jKA6jHQgTgGlvA+IloBBQAkB9g3C9QgOAugTAyQhNDLimEMg");
	this.shape_1379.setTransform(25.5,136.6);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FFCC00").s().p("AkVAfQATgyAOguQA3i9gkh9IFohBQFvg+ATAGQg6DHi0DKQguAygyAyQkED6m/D7QCmkMBNjLg");
	this.shape_1380.setTransform(25.5,136.6);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("#000000").ss(1.5,1,1).p("AoNHvQHBj3EHj3QAzgxAugxQC2jHA8jFQgUgGlvA9IlpA/QAjB8g5C6QgOAugTAxQhPDJipEIg");
	this.shape_1381.setTransform(25.4,136);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FFCC00").s().p("AkVAeQATgxAOguQA5i6gjh8IFpg/QFvg9AUAGQg8DFi2DHQguAxgzAxQkGD3nBD3QCokIBPjJg");
	this.shape_1382.setTransform(25.4,136);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("#000000").ss(1.5,1,1).p("AoRHoQHDjzEJjzQAzgxAvgwQC3jEA+jDQgTgGlwA7IlqA9QAiB7g6C4QgPAtgTAxQhRDGirEFg");
	this.shape_1383.setTransform(25.2,135.5);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FFCC00").s().p("AkVAdQATgxAPgtQA6i4gih7IFqg9QFwg7ATAGQg+DDi3DEQgvAwgzAxQkJDznDDzQCrkFBRjGg");
	this.shape_1384.setTransform(25.2,135.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#000000").ss(1.5,1,1).p("AoaHaQHIjqENjtQA0gvAwgvQC7i/BBi+QgUgGlwA4IlrA5QAfB4g9C0QgQAtgUAvQhUDBiwD+g");
	this.shape_1385.setTransform(25,134.3);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FFCC00").s().p("AkWAbQAUgvAQgtQA9i0gfh4IFrg5QFwg4AUAGQhBC+i7C/QgwAvg0AvQkNDtnIDqQCwj+BUjBg");
	this.shape_1386.setTransform(25,134.3);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#000000").ss(1.5,1,1).p("AofHTQHKjnEQjoQA1gvAwguQC9i8BDi8QgUgGlxA2IlsA3QAeB3g/CyQgQAsgVAuQhWDAiyD6g");
	this.shape_1387.setTransform(24.9,133.7);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FFCC00").s().p("AkWAZQAUguAQgsQBAiygfh3IFsg3QFxg2ATAGQhCC8i9C8QgwAug1AvQkPDonLDnQCyj6BXjAg");
	this.shape_1388.setTransform(24.9,133.7);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#000000").ss(1.5,1,1).p("AojHMQHMjjESjlQA1guAxgtQC+i6BFi5QgTgGlyAzIltA3QAeB1hBCwQgQArgWAuQhYC9i0D3g");
	this.shape_1389.setTransform(24.7,133.2);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFCC00").s().p("AkXAYQAWguAQgrQBBiwgeh1IFtg3QFygzATAGQhFC5i+C6QgxAtg1AuQkSDlnMDjQC0j3BYi9g");
	this.shape_1390.setTransform(24.7,133.2);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("#000000").ss(1.5,1,1).p("AonHFQHOjeEUjiQA2gtAxgtQDAi3BGi3QgTgGlyAyIltA0QAcB1hDCtQgQArgWAtQhaC6i2D0g");
	this.shape_1391.setTransform(24.6,132.6);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FFCC00").s().p("AkXAXQAWgtAQgrQBDitgch1IFtg0QFygyATAGQhGC3jAC3QgxAtg2AtQkUDinODeQC2j0Bai6g");
	this.shape_1392.setTransform(24.6,132.6);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("#000000").ss(1.5,1,1).p("AosG+QHRjbEWjeQA2gsAxgsQDCi0BJi1QgTgGl0AwIltAyQAbB0hECrQgRAqgWAtQhcC3i5Dxg");
	this.shape_1393.setTransform(24.5,132);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FFCC00").s().p("AkXAWQAWgtARgqQBEirgbh0IFtgyQF0gwATAGQhJC1jCC0QgxAsg2AsQkWDenRDbQC5jxBci3g");
	this.shape_1394.setTransform(24.5,132);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("#000000").ss(1.5,1,1).p("AowG3QHTjWEYjbQA3gsAxgrQDEiyBKiyQgTgGlzAuIlvAxQAaByhGCpQgRApgXAtQhdC1i7Dtg");
	this.shape_1395.setTransform(24.3,131.4);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FFCC00").s().p("AkYAVQAXgtARgpQBGipgahyIFvgxQFzguATAGQhKCyjECyQgxArg3AsQkYDbnTDWQC7jtBdi1g");
	this.shape_1396.setTransform(24.3,131.4);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("#000000").ss(1.5,1,1).p("Ao1GwQHVjSEbjYQA3gqAygrQDGivBMiwQgUgGl0AtIlvAvQAZBwhHCnQgSApgXAsQhfCzi+Dpg");
	this.shape_1397.setTransform(24.2,130.8);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FFCC00").s().p("AkYAUQAXgsASgpQBHingZhwIFvgvQF0gtAUAGQhMCwjGCvQgyArg3AqQkbDYnVDSQC+jpBfizg");
	this.shape_1398.setTransform(24.2,130.8);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#000000").ss(1.5,1,1).p("Ao1GwQHWjSEbjYQA3grAygqQDFivBMixQgUgGlzAtIlwAvQAZBxhHCnQgSApgXArQhfC0i+Dpg");
	this.shape_1399.setTransform(24.2,130.9);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FFCC00").s().p("AkYATQAXgrASgpQBIingZhxIFvgvQFzgtATAGQhLCxjFCvQgzAqg3ArQkbDYnUDSQC9jpBfi0g");
	this.shape_1400.setTransform(24.2,130.9);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("#000000").ss(1.5,1,1).p("AowG3QHTjWEYjbQA3gsAxgrQDEiyBKizQgTgGl0AvIluAxQAaByhGCpQgRApgXAtQhdC1i7Dtg");
	this.shape_1401.setTransform(24.4,131.5);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FFCC00").s().p("AkXAVQAWgtARgpQBGipgahyIFugxQFzgvAUAGQhKCzjECyQgyArg2AsQkYDbnTDWQC7jtBei1g");
	this.shape_1402.setTransform(24.4,131.5);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("#000000").ss(1.5,1,1).p("AorG/QHQjbEWjfQA2gsAxgsQDCi1BIi1QgTgGlzAwIltAzQAbBzhECsQgRAqgWAtQhcC4i4Dxg");
	this.shape_1403.setTransform(24.5,132.1);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FFCC00").s().p("AkXAWQAWgtARgqQBEisgbhzIFtgzQFzgwATAGQhIC1jCC1QgxAsg2AsQkWDfnQDbQC4jxBci4g");
	this.shape_1404.setTransform(24.5,132.1);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("#000000").ss(1.5,1,1).p("AonHGQHOjfEUjjQA2gsAwgtQDBi4BGi3QgUgGlyAyIltA1QAdB0hDCuQgQArgWAtQhZC7i3D0g");
	this.shape_1405.setTransform(24.6,132.7);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFCC00").s().p("AkXAXQAWgtAQgrQBDiugdh0IFtg1QFzgyASAGQhGC3jAC4QgwAtg2AsQkTDjnODfQC2j0BZi7g");
	this.shape_1406.setTransform(24.6,132.7);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("#000000").ss(1.5,1,1).p("AoiHNQHMjjERjmQA1guAxgtQC9i6BFi7QgTgGlyA1IltA2QAeB2hBCwQgQArgVAuQhXC+i0D3g");
	this.shape_1407.setTransform(24.8,133.3);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FFCC00").s().p("AkXAYQAVguARgrQBAiwgeh2IFtg2QFxg1AUAGQhEC7i+C6QgxAtg1AuQkRDmnMDjQC0j3BXi+g");
	this.shape_1408.setTransform(24.8,133.3);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("#000000").ss(1.5,1,1).p("AodHVQHJjoEPjqQA1guAvguQC9i9BCi9QgTgGlxA2IlsA4QAfB4g/CyQgPAsgVAvQhWC/ixD8g");
	this.shape_1409.setTransform(24.9,133.9);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FFCC00").s().p("AkWAaQAVgvAPgsQA/iygfh4IFsg4QFxg2ATAGQhCC9i9C9QgvAug1AuQkPDqnJDoQCxj8BWi/g");
	this.shape_1410.setTransform(24.9,133.9);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("#000000").ss(1.5,1,1).p("AoZHcQHHjsENjtQA1gvAvgvQC6jABBi/QgTgGlxA4IlrA6QAgB4g+C1QgPAtgUAvQhUDCivD/g");
	this.shape_1411.setTransform(25,134.5);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FFCC00").s().p("AkWAbQAUgvAPgtQA+i1ggh4IFrg6QFxg4ATAGQhBC/i7DAQgvAvg0AvQkNDtnGDsQCvj/BTjCg");
	this.shape_1412.setTransform(25,134.5);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("#000000").ss(1.5,1,1).p("AoUHjQHFjwEKjxQA0gwAvgvQC4jDA/jCQgTgGlwA6IlqA8QAhB6g8C3QgPAtgTAwQhSDFitECg");
	this.shape_1413.setTransform(25.1,135.1);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FFCC00").s().p("AkVAcQATgwAPgtQA8i3ghh6IFqg8QFwg6ATAGQg/DCi4DDQgvAvg0AwQkKDxnFDwQCtkCBSjFg");
	this.shape_1414.setTransform(25.1,135.1);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("#000000").ss(1.5,1,1).p("AoPHrQHCj1EIj0QAzgxAvgwQC2jGA9jEQgTgGlvA8IlqA+QAiB7g6C5QgOAugTAwQhQDIiqEGg");
	this.shape_1415.setTransform(25.3,135.7);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FFCC00").s().p("AkVAdQATgwAOguQA6i5gih7IFqg+QFvg8ATAGQg9DEi2DGQgvAwgzAxQkID0nCD1QCqkGBQjIg");
	this.shape_1416.setTransform(25.3,135.7);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("#000000").ss(1.5,1,1).p("AoLHyQHBj5EFj4QAzgxAugxQC0jJA8jGQgUgGluA9IlpBAQAjB9g4C7QgOAugTAyQhODKioEJg");
	this.shape_1417.setTransform(25.4,136.3);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FFCC00").s().p("AkVAfQATgyAOguQA4i7gjh9IFohAQFvg9AUAGQg7DGi2DJQgtAxgzAxQkFD4nAD5QCnkJBOjKg");
	this.shape_1418.setTransform(25.4,136.3);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("#000000").ss(1.5,1,1).p("AoGH5QG+j9EDj7QAygzAugxQCzjMA5jJQgUgGltBAIloBCQAkB9g2C+QgOAvgSAyQhNDMilENg");
	this.shape_1419.setTransform(25.5,136.9);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FFCC00").s().p("AkUAgQASgyAOgvQA2i+gkh9IFohCQFthAAUAGQg5DJizDMQguAxgyAzQkDD7m+D9QClkNBNjMg");
	this.shape_1420.setTransform(25.5,136.9);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("#000000").ss(1.5,1,1).p("AoBIBQG7kBEBkAQAygzAtgzQCwjNA4jMQgTgGluBCIlnBDQAmB/g1DAQgNAwgSAyQhKDPijERg");
	this.shape_1421.setTransform(25.7,137.5);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FFCC00").s().p("AkVAhQATgyANgwQA1jAgnh/IFohDQFthCAUAGQg4DMixDNQgtAzgxAzQkBEAm7EAQCikQBKjPg");
	this.shape_1422.setTransform(25.7,137.5);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("#000000").ss(1.5,1,1).p("An8IIQG4kFD/kDQAxg0Atg0QCujQA2jOQgTgGltBDIlnBGQAnCAgzDCQgMAwgSAzQhIDSigEUg");
	this.shape_1423.setTransform(25.8,138.1);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#FFCC00").s().p("AkUAiQASgzAMgwQAzjCgniAIFnhGQFthDATAGQg2DOiuDQQgtA0gxA0Qj/EDm4EFQCgkUBIjSg");
	this.shape_1424.setTransform(25.8,138.1);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("#000000").ss(1.5,1,1).p("An4IPQG2kJD9kGQAwg2Asg0QCujTA0jRQgUgGlsBGIlmBHQAoCCgxDEQgNAxgRA0QhGDUieEXg");
	this.shape_1425.setTransform(26,138.7);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FFCC00").s().p("AkUAkQARg0ANgxQAxjEgoiCIFmhHQFshGAUAGQg0DRitDTQgsA0gxA2Qj9EGm1EJQCdkXBGjUg");
	this.shape_1426.setTransform(26,138.7);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("#000000").ss(1.5,1,1).p("AnzIWQG0kOD6kJQAwg2Asg1QCrjWAyjTQgUgGlrBHIlmBJQAqCDgwDHQgMAxgRA0QhEDXibEbg");
	this.shape_1427.setTransform(26.1,139.3);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#FFCC00").s().p("AkTAkQARg0ALgxQAwjHgpiDIFlhJQFrhHAUAGQgyDTisDWQgrA1gxA2Qj5EJm0EOQCbkbBFjXg");
	this.shape_1428.setTransform(26.1,139.3);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("#000000").ss(1.5,1,1).p("AnuIeQGxkSD4kNQAvg3Asg2QCpjZAwjVQgUgGlqBJIllBLQAqCEgtDJQgMAygQA1QhDDZiYEfg");
	this.shape_1429.setTransform(26.2,139.9);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#FFCC00").s().p("AkTAmQAQg1AMgyQAtjJgqiEIFlhLQFqhJAUAGQgwDVipDZQgsA2gvA3Qj4ENmxESQCYkfBDjZg");
	this.shape_1430.setTransform(26.2,139.9);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("#000000").ss(1.5,1,1).p("AnqIlQGvkXD2kQQAvg4Arg2QCnjcAvjYQgUgGlqBLIlkBNQArCFgsDMQgLAygQA2QhBDciWEig");
	this.shape_1431.setTransform(26.4,140.5);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#FFCC00").s().p("AkSAnQAPg2ALgyQAsjMgriFIFkhNQFqhLAUAGQgvDYinDcQgrA2gvA4Qj1EQmvEXQCWkiBBjcg");
	this.shape_1432.setTransform(26.4,140.5);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("#000000").ss(1.5,1,1).p("AnlIsQGtkbDzkUQAvg4Aqg3QCljfAtjaQgUgGlpBMIljBPQAsCHgqDOQgLAzgPA2Qg/DeiUEmg");
	this.shape_1433.setTransform(26.5,141.1);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#FFCC00").s().p("AkSAoQAPg2ALgzQAqjOgsiHIFjhPQFphMAUAGQgtDailDfQgqA3gvA4QjzEUmtEbQCUkmA/jeg");
	this.shape_1434.setTransform(26.5,141.1);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f().s("#000000").ss(1.5,1,1).p("AngI0QGqkfDxkYQAug5Aqg4QCjjhArjdQgUgGloBOIljBRQAtCIgoDRQgKAzgPA3Qg9DhiREpg");
	this.shape_1435.setTransform(26.6,141.7);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#FFCC00").s().p("AkSAqQAPg3AKgzQAojRgtiIIFjhRQFohOAUAGQgrDdijDhQgqA4guA5QjxEYmqEfQCRkpA9jhg");
	this.shape_1436.setTransform(26.6,141.7);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f().s("#000000").ss(1.5,1,1).p("AncI7QGokjDukcQAug6Aqg4QCijlApjfQgUgGlpBRIliBSQAvCKgnDSQgJA0gPA4Qg7DjiPEtg");
	this.shape_1437.setTransform(26.8,142.3);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#FFCC00").s().p("AkSArQAPg4AKg0QAmjSgviKIFihSQFohRAVAGQgpDfiiDlQgpA4gvA6QjtEcmoEjQCOktA7jjg");
	this.shape_1438.setTransform(26.8,142.3);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f().s("#000000").ss(1.5,1,1).p("AnXJCQGmknDskgQAtg6Apg5QCgjoAnjhQgUgGlnBSIliBVQAwCKglDVQgJA1gOA4Qg5DmiNEwg");
	this.shape_1439.setTransform(26.9,142.9);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#FFCC00").s().p("AkRAsQAOg4AJg1QAljVgwiKIFihVQFnhSAUAGQgnDhigDoQgpA5gtA6QjsEgmmEnQCNkwA5jmg");
	this.shape_1440.setTransform(26.9,142.9);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f().s("#000000").ss(1.5,1,1).p("AnSJJQGjkrDpkjQAtg7Apg6QCejqAljkQgUgGlnBUIlgBWQAxCMgkDXQgIA1gOA5Qg3DoiKE0g");
	this.shape_1441.setTransform(27,143.5);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#FFCC00").s().p("AkRAtQAOg5AIg1QAkjXgxiMIFghWQFnhUAUAGQglDkieDqQgpA6gtA7QjpEjmjErQCKk0A3jog");
	this.shape_1442.setTransform(27,143.5);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f().s("#000000").ss(1.5,1,1).p("AnRJLQGiktDqkjQAtg8Aog6QCdjrAljkQgUgGlnBUIlgBXQAxCMgjDYQgJA1gNA5Qg3DpiJE1g");
	this.shape_1443.setTransform(27.1,143.7);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#FFCC00").s().p("AkRAtQANg5AJg1QAjjYgxiMIFhhXQFmhUAUAGQglDkieDrQgoA6gsA8QjqEjmiEtQCJk1A3jpg");
	this.shape_1444.setTransform(27.1,143.7);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f().s("#000000").ss(1.5,1,1).p("AnVJGQGlkqDrkhQAtg6Apg6QCejpAnjiQgUgGloBTIlhBVQAxCMgkDVQgKA1gNA5Qg5DniLEyg");
	this.shape_1445.setTransform(27,143.2);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#FFCC00").s().p("AkRAtQANg5AKg1QAkjVgwiMIFghVQFohTATAGQgmDiifDpQgpA6gsA6QjrEhmkEqQCLkyA4jng");
	this.shape_1446.setTransform(27,143.2);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f().s("#000000").ss(1.5,1,1).p("AnYJAQGmkmDtkeQAtg7Apg4QChjnAnjhQgTgGloBSIlhBUQAvCKgmDUQgJA1gOA4Qg6DliNEvg");
	this.shape_1447.setTransform(26.8,142.7);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#FFCC00").s().p("AkRAsQAOg4AJg1QAmjUgviKIFhhUQFohSATAGQgnDhihDnQgpA4gtA7QjtEemmEmQCNkvA6jlg");
	this.shape_1448.setTransform(26.8,142.7);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f().s("#000000").ss(1.5,1,1).p("AncI6QGokjDvkbQAug6Apg4QCijkApjfQgUgGloBQIliBTQAuCJgnDSQgJA0gPA4Qg7DjiPEsg");
	this.shape_1449.setTransform(26.8,142.3);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#FFCC00").s().p("AkSArQAPg4AKg0QAnjSgviJIFihTQFohQAUAGQgpDfiiDkQgpA4gvA6QjtEbmpEjQCPksA7jjg");
	this.shape_1450.setTransform(26.8,142.3);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f().s("#000000").ss(1.5,1,1).p("AnjIvQGrkcDzkWQAug4Arg4QCkjgAsjbQgUgGlpBOIljBPQAtCIgqDOQgKAzgPA3Qg/DfiSEng");
	this.shape_1451.setTransform(26.6,141.3);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#FFCC00").s().p("AkSApQAPg3ALgzQApjOgtiIIFjhPQFphOAUAGQgsDbilDgQgqA4gvA4QjxEWmsEcQCTknA+jfg");
	this.shape_1452.setTransform(26.6,141.3);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#000000").ss(1.5,1,1).p("AnnIqQGukZD0kTQAvg4Aqg3QCmjeAujZQgUgGlqBMIljBOQAsCGgrDNQgLAzgPA2QhADdiVElg");
	this.shape_1453.setTransform(26.4,140.9);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#FFCC00").s().p("AkSAoQAPg2ALgzQArjNgsiGIFjhOQFqhMAUAGQguDZimDeQgqA3gvA4Qj0ETmuEZQCVklBAjdg");
	this.shape_1454.setTransform(26.4,140.9);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#000000").ss(1.5,1,1).p("AnqIkQGvkWD2kQQAvg4Arg2QCojbAujYQgTgGlqBLIllBNQArCFgsDLQgLAygQA2QhBDbiWEig");
	this.shape_1455.setTransform(26.3,140.4);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#FFCC00").s().p("AkTAnQAQg2ALgyQAsjLgriFIFlhNQFqhLATAGQguDYioDbQgrA2gvA4Qj2EQmvEWQCWkiBBjbg");
	this.shape_1456.setTransform(26.3,140.4);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().s("#000000").ss(1.5,1,1).p("AnuIeQGykSD3kOQAwg3Arg1QCpjaAwjVQgUgGlqBJIllBLQAqCEgtDKQgMAygQA1QhCDZiZEfg");
	this.shape_1457.setTransform(26.2,140);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#FFCC00").s().p("AkTAmQAQg1AMgyQAtjKgqiEIFlhLQFqhJAUAGQgwDVipDaQgrA1gwA3Qj3EOmyESQCZkfBCjZg");
	this.shape_1458.setTransform(26.2,140);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f().s("#000000").ss(1.5,1,1).p("An1ITQG1kMD7kIQAwg1Atg1QCsjVAyjSQgTgGlsBGIlmBJQApCCgxDGQgMAxgQA0QhGDWicEZg");
	this.shape_1459.setTransform(26,139);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#FFCC00").s().p("AkTAkQAQg0ANgxQAwjGgoiCIFlhJQFrhGAUAGQgzDSisDVQgsA1gwA1Qj7EIm1EMQCdkZBFjWg");
	this.shape_1460.setTransform(26,139);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f().s("#000000").ss(1.5,1,1).p("An5IOQG3kJD9kFQAxg1Asg0QCtjTA1jQQgUgGlsBFIlmBHQAnCBgxDEQgMAwgSA0QhHDUieEXg");
	this.shape_1461.setTransform(25.9,138.6);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#FFCC00").s().p("AkUAjQASg0AMgwQAxjEgniBIFmhHQFshFAUAGQg1DQitDTQgsA0gxA1Qj9EFm3EJQCekXBHjUg");
	this.shape_1462.setTransform(25.9,138.6);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f().s("#000000").ss(1.5,1,1).p("An8IIQG4kGD/kCQAxg1AtgzQCujRA2jOQgTgGltBEIlnBFQAnCAgzDDQgMAwgSAzQhIDSigEUg");
	this.shape_1463.setTransform(25.8,138.1);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#FFCC00").s().p("AkUAiQASgzAMgwQAzjDgniAIFnhFQFthEATAGQg2DOiuDRQgtAzgxA1Qj/ECm4EGQCgkUBIjSg");
	this.shape_1464.setTransform(25.8,138.1);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f().s("#000000").ss(1.5,1,1).p("AoAICQG7kCEAkAQAxg0AtgyQCxjPA3jMQgUgGltBCIlnBEQAmB/g0DBQgNAwgSAyQhKDQiiERg");
	this.shape_1465.setTransform(25.7,137.7);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#FFCC00").s().p("AkUAiQASgzANgwQA0jAgmiAIFnhEQFthCAUAGQg3DMixDPQgtAzgxAzQkAEAm7ECQCikRBKjPg");
	this.shape_1466.setTransform(25.7,137.7);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f().s("#000000").ss(1.5,1,1).p("AoHH3QG+j7EEj7QAzgyAtgyQCzjKA6jJQgTgGluA/IlpBCQAkB9g3C9QgNAvgTAxQhMDMimEMg");
	this.shape_1467.setTransform(25.5,136.7);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#FFCC00").s().p("AkVAfQATgxAOgvQA2i9gjh9IFohCQFug/ATAGQg6DJizDKQguAygyAyQkED7m+D7QCmkMBMjMg");
	this.shape_1468.setTransform(25.5,136.7);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f().s("#000000").ss(1.5,1,1).p("AoLHyQHBj5EFj4QAzgxAugyQC0jIA8jGQgUgGluA9IlpBAQAjB9g4C7QgOAugTAxQhODKioEKg");
	this.shape_1469.setTransform(25.4,136.3);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#FFCC00").s().p("AkVAeQATgxAOguQA4i7gjh9IFohAQFvg9AUAGQg7DGi2DIQgtAygzAxQkFD4nAD5QCnkKBOjKg");
	this.shape_1470.setTransform(25.4,136.3);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f().s("#000000").ss(1.5,1,1).p("AoOHsQHBj1EIj1QAzgxAvgxQC2jGA8jEQgTgGlvA8IlqA+QAjB8g6C5QgOAugTAxQhQDIipEGg");
	this.shape_1471.setTransform(25.3,135.8);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#FFCC00").s().p("AkVAeQATgxAOguQA6i5gjh8IFqg+QFvg8ATAGQg8DEi3DGQguAxgzAxQkID1nBD1QCpkGBQjIg");
	this.shape_1472.setTransform(25.3,135.8);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f().s("#000000").ss(1.5,1,1).p("AoSHnQHEjyEJjzQAzgwAvgwQC3jEA/jDQgUgGlvA7IlqA9QAhB6g6C4QgPAtgUAxQhRDGirEEg");
	this.shape_1473.setTransform(25.2,135.3);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#FFCC00").s().p("AkWAdQAUgxAPgtQA6i4ghh6IFqg9QFvg7AUAGQg/DDi3DEQgvAwgzAwQkJDznEDyQCrkEBRjGg");
	this.shape_1474.setTransform(25.2,135.3);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f().s("#000000").ss(1.5,1,1).p("AoZHbQHHjrENjtQA0gvAwgvQC6jABBi/QgTgGlxA4IlrA6QAgB5g+C0QgPAsgUAwQhUDCivD+g");
	this.shape_1475.setTransform(25,134.4);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#FFCC00").s().p("AkWAbQAUgwAPgsQA+i0ggh5IFrg6QFxg4ATAGQhBC/i7DAQgvAvg0AvQkNDtnHDrQCvj+BUjCg");
	this.shape_1476.setTransform(25,134.4);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f().s("#000000").ss(1.5,1,1).p("AodHWQHJjoEPjqQA1gvAwguQC7i+BDi9QgUgGlxA3IlrA4QAfB4g/CyQgQAsgUAvQhWDAixD8g");
	this.shape_1477.setTransform(24.9,133.9);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#FFCC00").s().p("AkWAaQAVgvAPgsQA/iygfh4IFrg4QFxg3ATAGQhCC9i8C+QgvAug1AvQkPDqnJDoQCxj8BWjAg");
	this.shape_1478.setTransform(24.9,133.9);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f().s("#000000").ss(1.5,1,1).p("AogHQQHLjlEQjnQA1guAwguQC+i7BDi7QgTgGlxA1IlsA3QAeB2hACxQgRAsgUAuQhYC+iyD5g");
	this.shape_1479.setTransform(24.8,133.5);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#FFCC00").s().p("AkXAZQAWguAPgsQBBixgeh2IFrg3QFyg1ATAGQhDC7i+C7QgwAug1AuQkQDnnLDlQCzj5BWi+g");
	this.shape_1480.setTransform(24.8,133.5);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f().s("#000000").ss(1.5,1,1).p("AokHLQHNjiESjlQA2gtAwgtQC/i5BFi6QgTgGlyA0IltA2QAdB1hBCvQgQArgWAuQhYC8i1D3g");
	this.shape_1481.setTransform(24.7,133);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#FFCC00").s().p("AkXAYQAWguAQgrQBBivgdh1IFtg2QFyg0ATAGQhFC6i/C5QgwAtg2AtQkSDlnNDiQC1j3BYi8g");
	this.shape_1482.setTransform(24.7,133);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f().s("#000000").ss(1.5,1,1).p("AorG/QHQjbEWjfQA2gsAxgtQDCi0BIi2QgTgGlzAxIluAzQAcBzhECsQgRAqgWAtQhbC4i5Dxg");
	this.shape_1483.setTransform(24.5,132.1);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#FFCC00").s().p("AkXAWQAWgtARgqQBEisgchzIFugzQFzgxATAGQhIC2jCC0QgxAtg2AsQkWDfnQDbQC5jxBbi4g");
	this.shape_1484.setTransform(24.5,132.1);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f().s("#000000").ss(1.5,1,1).p("AovG6QHTjYEXjcQA3gsAxgsQDDiyBKi0QgUgGlzAwIluAxQAaByhFCqQgRAqgXAsQhcC3i7Dug");
	this.shape_1485.setTransform(24.4,131.6);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#FFCC00").s().p("AkYAVQAXgsARgqQBFiqgahyIFtgxQF0gwAUAGQhKC0jDCyQgxAsg3AsQkXDcnTDYQC7juBci3g");
	this.shape_1486.setTransform(24.4,131.6);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#000000").ss(1.5,1,1).p("AoyG0QHUjUEZjaQA3grAygrQDEiwBLiyQgTgGl0AuIluAwQAZBxhHCoQgRApgXAsQheC1i8Drg");
	this.shape_1487.setTransform(24.3,131.2);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#FFCC00").s().p("AkYAUQAXgsARgpQBHiogZhxIFugwQF0guATAGQhLCyjECwQgyArg3ArQkZDanUDUQC8jrBei1g");
	this.shape_1488.setTransform(24.3,131.2);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f().s("#000000").ss(1.5,1,1).p("Ao2GuQHWjREbjXQA3gqAzgrQDGiuBMiwQgTgGl1AtIlvAuQAZBxhICmQgSApgXArQhgCzi+Dog");
	this.shape_1489.setTransform(24.2,130.7);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#FFCC00").s().p("AkYATQAXgrASgpQBIimgZhxIFvguQF1gtATAGQhMCwjGCuQgzArg3AqQkbDXnWDRQC+joBgizg");
	this.shape_1490.setTransform(24.2,130.7);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#000000").ss(1.5,1,1).p("AozGzQHVjUEajZQA2grAygrQDFiwBLiyQgTgGl0AuIlvAwQAaBxhHCoQgRApgYAsQheC0i9Drg");
	this.shape_1491.setTransform(24.3,131.1);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#FFCC00").s().p("AkXAUQAWgsARgpQBHiogZhxIFugwQF1guATAGQhLCyjFCwQgyArg2ArQkaDZnVDUQC9jrBfi0g");
	this.shape_1492.setTransform(24.3,131.1);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f().s("#000000").ss(1.5,1,1).p("AolHIQHNjgETjkQA2gtAwgtQDAi4BFi5QgTgGlyAzIltA1QAdB1hCCvQgQArgWAtQhZC8i1D1g");
	this.shape_1493.setTransform(24.7,132.9);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#FFCC00").s().p("AkXAXQAWgtAQgrQBCivgdh1IFsg1QFzgzATAGQhGC5i/C4QgxAtg1AtQkTDknNDgQC1j1BZi8g");
	this.shape_1494.setTransform(24.7,132.9);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f().s("#000000").ss(1.5,1,1).p("AoYHeQHHjtEMjuQA0gvAvgwQC6jABBjAQgUgGlwA5IlrA6QAgB5g9C1QgPAtgUAvQhUDDiuEAg");
	this.shape_1495.setTransform(25.1,134.6);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#FFCC00").s().p("AkWAbQAVgvAPgtQA8i1ggh5IFrg6QFwg5ATAGQhADAi6DAQgvAwg0AvQkMDunHDtQCukABUjDg");
	this.shape_1496.setTransform(25.1,134.6);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#000000").ss(1.5,1,1).p("AoKHyQHAj5EFj4QAzgxAtgyQC1jIA7jHQgTgGlvA+IlpBAQAkB8g4C8QgOAugTAyQhODKinEJg");
	this.shape_1497.setTransform(25.4,136.3);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#FFCC00").s().p("AkVAfQATgyAOguQA4i8gkh8IFphAQFvg+ATAGQg7DHi1DIQgtAygzAxQkFD4nAD5QCnkJBOjKg");
	this.shape_1498.setTransform(25.4,136.3);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f().s("#000000").ss(1.5,1,1).p("An9IHQG5kFD/kCQAxg0Atg0QCvjQA2jOQgUgGlsBDIlnBGQAmCAgzDCQgMAwgSAzQhJDRigEUg");
	this.shape_1499.setTransform(25.8,138.1);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#FFCC00").s().p("AkUAiQASgzANgwQAzjCgniAIFmhGQFthDAUAGQg2DOivDQQgtA0gxA0Qj+EDm5EEQCfkUBJjRg");
	this.shape_1500.setTransform(25.8,138.1);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f().s("#000000").ss(1.5,1,1).p("AnvIcQGykRD4kMQAwg3Arg1QCqjZAwjVQgTgGlrBJIllBLQAqCDguDJQgLAygRA1QhDDYiZEeg");
	this.shape_1501.setTransform(26.2,139.8);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#FFCC00").s().p("AkTAmQARg1ALgyQAujJgqiDIFlhLQFrhJATAGQgwDViqDZQgrA1gwA3Qj4EMmyERQCZkeBDjYg");
	this.shape_1502.setTransform(26.2,139.8);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f().s("#000000").ss(1.5,1,1).p("AniIxQGskdDxkXQAug5Aqg3QCkjhAsjcQgUgGlpBOIljBQQAtCIgpDPQgKAzgPA3Qg+DgiSEog");
	this.shape_1503.setTransform(26.6,141.5);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#FFCC00").s().p("AkSApQAPg3AKgzQApjPgtiIIFjhQQFphOAUAGQgsDcikDhQgqA3guA5QjxEXmsEdQCSkoA+jgg");
	this.shape_1504.setTransform(26.6,141.5);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f().s("#000000").ss(1.5,1,1).p("AnUJGQGkkqDqkhQAug7Aog5QCfjpAmjjQgUgGlnBTIlhBWQAxCLgkDWQgJA1gOA4Qg4DoiLEyg");
	this.shape_1505.setTransform(27,143.3);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#FFCC00").s().p("AkRAsQAOg4AJg1QAkjWgxiLIFhhWQFnhTAUAGQgmDjifDpQgoA5guA7QjqEhmkEqQCLkyA4jog");
	this.shape_1506.setTransform(27,143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1254},{t:this.shape_1253}]}).to({state:[{t:this.shape_1256},{t:this.shape_1255}]},1).to({state:[{t:this.shape_1258},{t:this.shape_1257}]},1).to({state:[{t:this.shape_1260},{t:this.shape_1259}]},1).to({state:[{t:this.shape_1262},{t:this.shape_1261}]},1).to({state:[{t:this.shape_1264},{t:this.shape_1263}]},1).to({state:[{t:this.shape_1266},{t:this.shape_1265}]},1).to({state:[{t:this.shape_1268},{t:this.shape_1267}]},1).to({state:[{t:this.shape_1270},{t:this.shape_1269}]},1).to({state:[{t:this.shape_1272},{t:this.shape_1271}]},1).to({state:[{t:this.shape_1274},{t:this.shape_1273}]},1).to({state:[{t:this.shape_1276},{t:this.shape_1275}]},1).to({state:[{t:this.shape_1278},{t:this.shape_1277}]},1).to({state:[{t:this.shape_1280},{t:this.shape_1279}]},1).to({state:[{t:this.shape_1282},{t:this.shape_1281}]},1).to({state:[{t:this.shape_1284},{t:this.shape_1283}]},1).to({state:[{t:this.shape_1286},{t:this.shape_1285}]},1).to({state:[{t:this.shape_1288},{t:this.shape_1287}]},1).to({state:[{t:this.shape_1290},{t:this.shape_1289}]},1).to({state:[{t:this.shape_1292},{t:this.shape_1291}]},1).to({state:[{t:this.shape_1294},{t:this.shape_1293}]},1).to({state:[{t:this.shape_1296},{t:this.shape_1295}]},1).to({state:[{t:this.shape_1298},{t:this.shape_1297}]},1).to({state:[{t:this.shape_1300},{t:this.shape_1299}]},1).to({state:[{t:this.shape_1302},{t:this.shape_1301}]},1).to({state:[{t:this.shape_1304},{t:this.shape_1303}]},1).to({state:[{t:this.shape_1306},{t:this.shape_1305}]},1).to({state:[{t:this.shape_1308},{t:this.shape_1307}]},1).to({state:[{t:this.shape_1310},{t:this.shape_1309}]},1).to({state:[{t:this.shape_1312},{t:this.shape_1311}]},1).to({state:[{t:this.shape_1314},{t:this.shape_1313}]},1).to({state:[{t:this.shape_1316},{t:this.shape_1315}]},1).to({state:[{t:this.shape_1318},{t:this.shape_1317}]},1).to({state:[{t:this.shape_1320},{t:this.shape_1319}]},1).to({state:[{t:this.shape_1322},{t:this.shape_1321}]},1).to({state:[{t:this.shape_1324},{t:this.shape_1323}]},1).to({state:[{t:this.shape_1326},{t:this.shape_1325}]},1).to({state:[{t:this.shape_1328},{t:this.shape_1327}]},1).to({state:[{t:this.shape_1330},{t:this.shape_1329}]},1).to({state:[{t:this.shape_1332},{t:this.shape_1331}]},1).to({state:[{t:this.shape_1334},{t:this.shape_1333}]},1).to({state:[{t:this.shape_1326},{t:this.shape_1325}]},1).to({state:[{t:this.shape_1336},{t:this.shape_1335}]},1).to({state:[{t:this.shape_1320},{t:this.shape_1319}]},1).to({state:[{t:this.shape_1338},{t:this.shape_1337}]},1).to({state:[{t:this.shape_1314},{t:this.shape_1313}]},1).to({state:[{t:this.shape_1340},{t:this.shape_1339}]},1).to({state:[{t:this.shape_1308},{t:this.shape_1307}]},1).to({state:[{t:this.shape_1342},{t:this.shape_1341}]},1).to({state:[{t:this.shape_1302},{t:this.shape_1301}]},1).to({state:[{t:this.shape_1344},{t:this.shape_1343}]},1).to({state:[{t:this.shape_1296},{t:this.shape_1295}]},1).to({state:[{t:this.shape_1346},{t:this.shape_1345}]},1).to({state:[{t:this.shape_1290},{t:this.shape_1289}]},1).to({state:[{t:this.shape_1348},{t:this.shape_1347}]},1).to({state:[{t:this.shape_1284},{t:this.shape_1283}]},1).to({state:[{t:this.shape_1350},{t:this.shape_1349}]},1).to({state:[{t:this.shape_1278},{t:this.shape_1277}]},1).to({state:[{t:this.shape_1352},{t:this.shape_1351}]},1).to({state:[{t:this.shape_1272},{t:this.shape_1271}]},1).to({state:[{t:this.shape_1354},{t:this.shape_1353}]},1).to({state:[{t:this.shape_1266},{t:this.shape_1265}]},1).to({state:[{t:this.shape_1356},{t:this.shape_1355}]},1).to({state:[{t:this.shape_1260},{t:this.shape_1259}]},1).to({state:[{t:this.shape_1358},{t:this.shape_1357}]},1).to({state:[{t:this.shape_1254},{t:this.shape_1253}]},1).to({state:[{t:this.shape_1360},{t:this.shape_1359}]},1).to({state:[{t:this.shape_1362},{t:this.shape_1361}]},1).to({state:[{t:this.shape_1364},{t:this.shape_1363}]},1).to({state:[{t:this.shape_1366},{t:this.shape_1365}]},1).to({state:[{t:this.shape_1368},{t:this.shape_1367}]},1).to({state:[{t:this.shape_1370},{t:this.shape_1369}]},1).to({state:[{t:this.shape_1372},{t:this.shape_1371}]},1).to({state:[{t:this.shape_1280},{t:this.shape_1279}]},1).to({state:[{t:this.shape_1374},{t:this.shape_1373}]},1).to({state:[{t:this.shape_1376},{t:this.shape_1375}]},1).to({state:[{t:this.shape_1378},{t:this.shape_1377}]},1).to({state:[{t:this.shape_1346},{t:this.shape_1345}]},1).to({state:[{t:this.shape_1380},{t:this.shape_1379}]},1).to({state:[{t:this.shape_1382},{t:this.shape_1381}]},1).to({state:[{t:this.shape_1384},{t:this.shape_1383}]},1).to({state:[{t:this.shape_1306},{t:this.shape_1305}]},1).to({state:[{t:this.shape_1386},{t:this.shape_1385}]},1).to({state:[{t:this.shape_1388},{t:this.shape_1387}]},1).to({state:[{t:this.shape_1390},{t:this.shape_1389}]},1).to({state:[{t:this.shape_1392},{t:this.shape_1391}]},1).to({state:[{t:this.shape_1394},{t:this.shape_1393}]},1).to({state:[{t:this.shape_1396},{t:this.shape_1395}]},1).to({state:[{t:this.shape_1398},{t:this.shape_1397}]},1).to({state:[{t:this.shape_1332},{t:this.shape_1331}]},1).to({state:[{t:this.shape_1400},{t:this.shape_1399}]},1).to({state:[{t:this.shape_1402},{t:this.shape_1401}]},1).to({state:[{t:this.shape_1404},{t:this.shape_1403}]},1).to({state:[{t:this.shape_1406},{t:this.shape_1405}]},1).to({state:[{t:this.shape_1408},{t:this.shape_1407}]},1).to({state:[{t:this.shape_1410},{t:this.shape_1409}]},1).to({state:[{t:this.shape_1412},{t:this.shape_1411}]},1).to({state:[{t:this.shape_1414},{t:this.shape_1413}]},1).to({state:[{t:this.shape_1416},{t:this.shape_1415}]},1).to({state:[{t:this.shape_1418},{t:this.shape_1417}]},1).to({state:[{t:this.shape_1420},{t:this.shape_1419}]},1).to({state:[{t:this.shape_1422},{t:this.shape_1421}]},1).to({state:[{t:this.shape_1424},{t:this.shape_1423}]},1).to({state:[{t:this.shape_1426},{t:this.shape_1425}]},1).to({state:[{t:this.shape_1428},{t:this.shape_1427}]},1).to({state:[{t:this.shape_1430},{t:this.shape_1429}]},1).to({state:[{t:this.shape_1432},{t:this.shape_1431}]},1).to({state:[{t:this.shape_1434},{t:this.shape_1433}]},1).to({state:[{t:this.shape_1436},{t:this.shape_1435}]},1).to({state:[{t:this.shape_1438},{t:this.shape_1437}]},1).to({state:[{t:this.shape_1440},{t:this.shape_1439}]},1).to({state:[{t:this.shape_1442},{t:this.shape_1441}]},1).to({state:[{t:this.shape_1254},{t:this.shape_1253}]},1).to({state:[{t:this.shape_1444},{t:this.shape_1443}]},1).to({state:[{t:this.shape_1446},{t:this.shape_1445}]},1).to({state:[{t:this.shape_1448},{t:this.shape_1447}]},1).to({state:[{t:this.shape_1450},{t:this.shape_1449}]},1).to({state:[{t:this.shape_1366},{t:this.shape_1365}]},1).to({state:[{t:this.shape_1452},{t:this.shape_1451}]},1).to({state:[{t:this.shape_1454},{t:this.shape_1453}]},1).to({state:[{t:this.shape_1456},{t:this.shape_1455}]},1).to({state:[{t:this.shape_1458},{t:this.shape_1457}]},1).to({state:[{t:this.shape_1280},{t:this.shape_1279}]},1).to({state:[{t:this.shape_1460},{t:this.shape_1459}]},1).to({state:[{t:this.shape_1462},{t:this.shape_1461}]},1).to({state:[{t:this.shape_1464},{t:this.shape_1463}]},1).to({state:[{t:this.shape_1466},{t:this.shape_1465}]},1).to({state:[{t:this.shape_1346},{t:this.shape_1345}]},1).to({state:[{t:this.shape_1468},{t:this.shape_1467}]},1).to({state:[{t:this.shape_1470},{t:this.shape_1469}]},1).to({state:[{t:this.shape_1472},{t:this.shape_1471}]},1).to({state:[{t:this.shape_1474},{t:this.shape_1473}]},1).to({state:[{t:this.shape_1306},{t:this.shape_1305}]},1).to({state:[{t:this.shape_1476},{t:this.shape_1475}]},1).to({state:[{t:this.shape_1478},{t:this.shape_1477}]},1).to({state:[{t:this.shape_1480},{t:this.shape_1479}]},1).to({state:[{t:this.shape_1482},{t:this.shape_1481}]},1).to({state:[{t:this.shape_1392},{t:this.shape_1391}]},1).to({state:[{t:this.shape_1484},{t:this.shape_1483}]},1).to({state:[{t:this.shape_1486},{t:this.shape_1485}]},1).to({state:[{t:this.shape_1488},{t:this.shape_1487}]},1).to({state:[{t:this.shape_1490},{t:this.shape_1489}]},1).to({state:[{t:this.shape_1332},{t:this.shape_1331}]},1).to({state:[{t:this.shape_1492},{t:this.shape_1491}]},1).to({state:[{t:this.shape_1394},{t:this.shape_1393}]},1).to({state:[{t:this.shape_1494},{t:this.shape_1493}]},1).to({state:[{t:this.shape_1388},{t:this.shape_1387}]},1).to({state:[{t:this.shape_1496},{t:this.shape_1495}]},1).to({state:[{t:this.shape_1384},{t:this.shape_1383}]},1).to({state:[{t:this.shape_1498},{t:this.shape_1497}]},1).to({state:[{t:this.shape_1346},{t:this.shape_1345}]},1).to({state:[{t:this.shape_1500},{t:this.shape_1499}]},1).to({state:[{t:this.shape_1374},{t:this.shape_1373}]},1).to({state:[{t:this.shape_1502},{t:this.shape_1501}]},1).to({state:[{t:this.shape_1370},{t:this.shape_1369}]},1).to({state:[{t:this.shape_1504},{t:this.shape_1503}]},1).to({state:[{t:this.shape_1364},{t:this.shape_1363}]},1).to({state:[{t:this.shape_1506},{t:this.shape_1505}]},1).to({state:[{t:this.shape_1254},{t:this.shape_1253}]},1).to({state:[{t:this.shape_1254},{t:this.shape_1253}]},1).to({state:[{t:this.shape_1254},{t:this.shape_1253}]},1).to({state:[{t:this.shape_1254},{t:this.shape_1253}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.2,-225.6,507.6,438.4);


(lib.fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// finBottom01
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AJdoPQhcDejVDWQg2A1g8A0QktEInpD7QDTkiBvjhQAbg2AVgzQBWjRgOiQIFzgvQF6gsASAIg");
	this.shape.setTransform(294.9,164.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AkaAOQAbg2AWgzQBVjRgOiQIF0gvQF5gsASAIQhcDejVDWQg2A1g8A0QktEInpD7QDTkiBvjhg");
	this.shape_1.setTransform(294.9,164.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// gill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFCC02").ss(3,1,1).p("AHcySQ54SiTKSD");
	this.shape_2.setTransform(390,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// mouth
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("ABHABIiNgB");
	this.shape_3.setTransform(537.1,47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// tail
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("ApGvcQIvIuJeGTQpcFUoxKkg");
	this.shape_4.setTransform(98.9,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC02").s().p("ApGvcQIvIuJeGSQpcFUoxKlg");
	this.shape_5.setTransform(98.9,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// eye01
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0099FF").ss(6,1,1).p("ABaABQAAAogbAcQgaAbglAAQglAAgagbQgagcAAgoQAAgoAagcQAagcAlAAQAlAAAaAcQAbAcAAAog");
	this.shape_6.setTransform(470.2,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,1,1).p("AGkAAQAACjh7ByQh7ByiuAAQitAAh6hyQh8hyAAijQAAihB8hzQB6hyCtAAQCuAAB7ByQB7BzAAChg");
	this.shape_7.setTransform(447.4,-3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag/BEQgagbAAgoQAAgoAagcQAbgcAkAAQAlAAAaAcQAbAcAAAoQAAAogbAbQgaAcglAAQgkAAgbgcg");
	this.shape_8.setTransform(470.2,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AknEVQh8hyAAijQAAihB8hzQB6hyCtAAQCuAAB7ByQB7BzAAChQAACjh7ByQh7ByiuAAQitAAh6hygACkgFQgaAcAAAoQAAAoAaAcQAbAbAkAAQAmAAAagbQAbgcAAgoQAAgogbgcQgagcgmAAQgkAAgbAcg");
	this.shape_9.setTransform(447.4,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// body
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1.5,1,1).p("A+OAcUAZVgh0AXWAPzQLyWFAAAPQgBAPyqKTUglCAUJgEwgi+g");
	this.shape_10.setTransform(351.8,17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("A+OAcUAZVgh0AXWAPzQLzWFgBAPQAAAPyrKTQtiHXpOAAQwBAAjB2Mg");
	this.shape_11.setTransform(351.8,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// topFins
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.5,1,1).p("AgpCrIwNnMIKLL9IAEAFAnLIAIgFgCIufkIIJTJdIgLANIgSAUIpgidIGxF1AHjhhIuJqtIGHOxAWahmIgMgLIxEvaIDUPZ");
	this.shape_12.setTransform(273.7,-108.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("A2TLXIJgCdQhFBOgiApIgtA5IgbAogA1pD2IOfEIQjFC4iHCdgAwwkhIQNHMIgPAQQgbAPgZASIgoAfIgBAAIAAAAIgDADIgIAHQgYAPgYAOIgIAGIgJALQgTAIgMAUIgKAGQgoAVg5A1Qg3A2gJAHgAmgsOIOJKtQgvAQhAAbQh+A1hoA6IhVAyQhUA0gEADgAVoiHQgXgHgzgLQjBgpjbAPQhxAIh+AdQhWATgZAJIjUvZIREPaQgSgNgagJg");
	this.shape_13.setTransform(273.1,-108.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// finBottom01back
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1.5,1,1).p("AFUlAQgPAVgQAVQjoEnmgEwQCDknA0jV");
	this.shape_14.setTransform(324.9,178.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("Aici7IAlgIIBvgRIFchsIgfAqQjoEnmgEwQCDknA0jVg");
	this.shape_15.setTransform(324.9,178.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fish, new cjs.Rectangle(39.6,-219.6,506.7,438.4), null);


(lib.bubbles06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAtAAQAAASgOANQgDAEgEADQgKAHgOAAQgSAAgNgOQgNgNAAgSQAAgIADgHQADgJAHgHQANgNASAAQATAAAMANQAOANAAASg");
	this.shape.setTransform(33,-19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.718)").s().p("AgfAgQgNgOAAgSQAAgHADgIQADgJAHgHQANgNASAAQATAAANANQANAOAAARQAAASgNAOIgIAGQgKAHgOAAQgSAAgNgNg");
	this.shape_1.setTransform(33,-19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgBAAgCAAQgKgBgIgIQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAIAJQACACACADQAFAHAAAIg");
	this.shape_2.setTransform(-3.3,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.718)").s().p("AgDAeQgKgBgIgIQgIgIAAgNQAAgLAIgJQAJgJAMAAQAMAAAJAJIAEAFQAFAHAAAIQAAANgJAIQgJAJgMAAIgDAAg");
	this.shape_3.setTransform(-3.3,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_4.setTransform(-24.5,-9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.718)").s().p("AgUAVQgJgIAAgNQAAgLAJgKQAJgIALAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_5.setTransform(-24.5,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAag");
	this.shape_6.setTransform(10,-42.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.718)").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(10,-42.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAVgPAOQgOAPgVAAQgTAAgPgPQgPgOAAgVQAAgUAPgPQAPgOATAAQAVAAAOAOQAPAPAAAUg");
	this.shape_8.setTransform(-31,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.718)").s().p("AgjAjQgOgOAAgVQAAgTAOgPQAPgPAUAAQAUAAAPAPQAPAPAAATQAAAVgPAOQgPAPgUAAQgUAAgPgPg");
	this.shape_9.setTransform(-31,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AElAAQAAB5hWBWQhVBWh6AAQh5AAhWhWQhVhWAAh5QAAh4BVhXQBWhVB5AAQB6AABVBVQBWBXAAB4g");
	this.shape_10.setTransform(1.4,-32.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.639)").s().p("AjPDPQhVhVAAh6QAAh5BVhVQBXhWB4AAQB6AABVBWQBWBVAAB5QAAB6hWBVQhVBWh6AAQh4AAhXhWg");
	this.shape_11.setTransform(1.4,-32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABGAAQAAAdgUAUQgHAIgJAFQgPAIgTAAQgcAAgUgVQgVgUAAgdQAAgQAHgNQAFgLAJgJQAUgUAcAAQAdAAAVAUQAUAVAAAcg");
	this.shape_12.setTransform(-20.1,7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.718)").s().p("AgwAxQgVgUAAgdQAAgPAGgOQAFgLAKgIQAUgVAcAAQAdAAAVAVQAUAUAAAcQAAAdgUAUQgIAIgIAEQgPAJgTAAQgcAAgUgVg");
	this.shape_13.setTransform(-20.1,7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABfAAQAAAngcAcQgcAcgnAAQgmAAgdgcQgbgcAAgnQAAgnAbgcQAdgbAmAAQAnAAAcAbQAcAcAAAng");
	this.shape_14.setTransform(17.5,5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.718)").s().p("AhDBDQgbgcAAgnQAAgnAbgcQAdgbAmAAQAnAAAcAbQAcAcAAAnQAAAngcAcQgcAcgnAAQgmAAgdgcg");
	this.shape_15.setTransform(17.5,5.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABnAAQAAAOgDAOQgHAZgVAUQgeAegqAAQgqAAgegeQgegeAAgrQAAgHABgHQACgQAHgOQAHgPANgNQAEgEAEgDQAcgXAkAAQAqAAAeAeQAfAeAAAqg");
	this.shape_16.setTransform(5.7,22.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.718)").s().p("AAAgOIADAAIABAAQgGAOgCAPQAAgPAEgOg");
	this.shape_17.setTransform(-4,19.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.639)").s().p("AhIBJQgegfAAgqIABgOQACgPAHgOQAHgQANgNIAIgHQAcgXAkAAQAqAAAfAeQAeAeAAAqQAAAOgDAOQgIAZgTAUQgfAegqAAQgqAAgegeg");
	this.shape_18.setTransform(5.7,22.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABuAAQAAAuggAgQggAgguAAQgtAAggggQggggAAguQAAgsAgghQAgggAtAAQAuAAAgAgQAgAhAAAsg");
	this.shape_19.setTransform(-26.5,23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.718)").s().p("AhNBNQggggAAgtQAAgsAgghQAgggAtAAQAtAAAhAgQAgAhAAAsQAAAtggAgQghAhgtAAQgtAAggghg");
	this.shape_20.setTransform(-26.5,23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVQAAgTAOgPQAPgPAUAAQAVAAAOAPQAPAPAAATg");
	this.shape_21.setTransform(0,40.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.718)").s().p("AgiAjQgPgOAAgVQAAgTAPgQQAOgOAUAAQAVAAAOAOQAPAQAAATQAAAVgPAOQgOAPgVAAQgUAAgOgPg");
	this.shape_22.setTransform(0,40.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAAQAAAPgKAKQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQALgKANAAQAPAAAKAKQAKALAAANg");
	this.shape_23.setTransform(-7,58.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.718)").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAJAKQALALAAANQAAAOgLAKQgJALgPAAQgOAAgKgLg");
	this.shape_24.setTransform(-7,58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbles06, new cjs.Rectangle(-38.5,-62.9,77,125.9), null);


(lib.bubbles05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAtAAQAAATgOAMQgDAEgEADQgKAHgOAAQgSAAgNgOQgNgMAAgTQAAgIADgHQADgJAHgHQANgNASAAQATAAAMANQAOANAAASg");
	this.shape.setTransform(32.3,-45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.718)").s().p("AgfAfQgNgMAAgTQAAgHADgIQADgJAHgHQAOgNARAAQATAAAMANQAOAOAAARQAAATgOAMIgHAHQgLAHgNAAQgRAAgOgOg");
	this.shape_1.setTransform(32.3,-45.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgBAAgCAAQgKgBgIgIQgIgIAAgNQAAgMAIgJQAJgIAMAAQANAAAIAIQACADACACQAFAIAAAIg");
	this.shape_2.setTransform(-3.5,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.718)").s().p("AgCAeQgLgBgHgIQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJIAEAEQAFAIAAAIQAAAMgJAJQgJAJgMAAIgCAAg");
	this.shape_3.setTransform(-3.5,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_4.setTransform(-25.2,-35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.718)").s().p("AgUAVQgJgJAAgMQAAgMAJgJQAJgIALAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_5.setTransform(-25.2,-35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAag");
	this.shape_6.setTransform(9.3,-68.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.718)").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(9.3,-68.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAVgPAOQgOAPgVAAQgTAAgPgPQgPgOAAgVQAAgUAPgPQAPgOATAAQAVAAAOAOQAPAPAAAUg");
	this.shape_8.setTransform(-31.7,-24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.718)").s().p("AgiAjQgPgPAAgUQAAgUAPgPQAPgOATAAQAVAAAOAOQAPAPAAAUQAAAUgPAPQgOAPgVAAQgTAAgPgPg");
	this.shape_9.setTransform(-31.7,-24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AElAAQAAB5hWBWQhVBWh6AAQh5AAhWhWQhVhWAAh5QAAh5BVhWQBWhVB5AAQB6AABVBVQBWBWAAB5g");
	this.shape_10.setTransform(-0.4,-35.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.639)").s().p("AjPDPQhVhVAAh6QAAh5BVhVQBWhWB5AAQB5AABWBWQBWBVAAB5QAAB6hWBVQhWBWh5AAQh5AAhWhWg");
	this.shape_11.setTransform(-0.4,-35.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABGAAQAAAdgUAVQgHAHgJAFQgPAIgTAAQgcAAgUgUQgVgVAAgdQAAgQAHgNQAFgLAJgJQAUgUAcAAQAdAAAVAUQAUAVAAAcg");
	this.shape_12.setTransform(-22.8,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.718)").s().p("AgxAxQgUgUAAgdQAAgPAHgOQAEgLAJgJQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgGAIgJAEQgPAJgTAAQgcAAgVgVg");
	this.shape_13.setTransform(-22.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABfAAQAAAogcAbQgcAcgnAAQgmAAgdgcQgbgbAAgoQAAgnAbgcQAdgbAmAAQAnAAAcAbQAcAcAAAng");
	this.shape_14.setTransform(17.3,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.718)").s().p("AhCBDQgcgbAAgoQAAgnAcgcQAcgbAmAAQAoAAAbAbQAcAcAAAnQAAAogcAbQgbAcgoAAQgmAAgcgcg");
	this.shape_15.setTransform(17.3,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABnAAQAAAOgDAOQgHAZgVAUQgdAegrAAQgqAAgegeQgegeAAgrQAAgHABgHQACgQAHgNQAHgQANgNQAEgEAEgDQAcgXAkAAQArAAAdAeQAfAeAAAqg");
	this.shape_16.setTransform(3.5,23.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.718)").s().p("AAAgOIADAAIABAAQgGAOgCAPQAAgPAEgOg");
	this.shape_17.setTransform(-6.3,20.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.639)").s().p("AhIBJQgegfAAgqIABgOQACgPAHgOQAHgQANgNIAIgHQAcgXAkAAQAqAAAfAeQAeAeAAAqQAAAOgDAOQgIAZgTAUQgfAegqAAQgqAAgegeg");
	this.shape_18.setTransform(3.5,23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABuAAQAAAuggAgQggAgguAAQgtAAggggQggggAAguQAAgtAgggQAgggAtAAQAuAAAgAgQAgAgAAAtg");
	this.shape_19.setTransform(-24.7,26.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.718)").s().p("AhNBOQggghAAgtQAAgtAgggQAhggAsAAQAtAAAgAgQAhAgAAAtQAAAtghAhQggAggtAAQgsAAghggg");
	this.shape_20.setTransform(-24.7,26.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAUgPAPQgOAPgVAAQgUAAgPgPQgOgPAAgUQAAgTAOgPQAPgPAUAAQAVAAAOAPQAPAPAAATg");
	this.shape_21.setTransform(0.8,46.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.718)").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPg");
	this.shape_22.setTransform(0.8,46.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAAQAAAPgKAKQgKAKgPAAQgOAAgKgKQgKgKAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOg");
	this.shape_23.setTransform(-5.7,71.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.718)").s().p("AgYAZQgKgLAAgOQAAgNAKgLQAKgKAOAAQAPAAAJAKQALALAAANQAAAOgLALQgJAKgPAAQgOAAgKgKg");
	this.shape_24.setTransform(-5.7,71.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbles05, new cjs.Rectangle(-37.7,-75.7,75.5,151.5), null);


(lib.bubbles03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAtAAQAAASgOANQgDAEgEADQgKAHgOAAQgSAAgNgOQgNgNAAgSQAAgIADgHQADgJAHgHQANgNASAAQATAAAMANQAOANAAASg");
	this.shape.setTransform(33,-71.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.718)").s().p("AgfAfQgNgNAAgSQAAgIADgHQADgJAHgHQANgNASAAQATAAANANQANAOAAARQAAASgNANIgIAHQgKAHgOAAQgSAAgNgOg");
	this.shape_1.setTransform(33,-71.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQAAAAgCAAQgLgBgHgIQgJgIAAgNQAAgMAJgJQAJgIALAAQANAAAIAIQADADABACQAFAIAAAIg");
	this.shape_2.setTransform(-6.3,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.718)").s().p("AgDAeQgKgBgIgIQgIgIAAgNQAAgLAIgKQAKgIALAAQANAAAIAIIAEAGQAFAHAAAIQAAANgJAIQgIAJgNAAIgDAAg");
	this.shape_3.setTransform(-6.3,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_4.setTransform(-30,-80.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.718)").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_5.setTransform(-30,-80.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAag");
	this.shape_6.setTransform(5,-91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.718)").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(5,-91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAUgPAPQgOAPgVAAQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATg");
	this.shape_8.setTransform(-32.5,-58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.718)").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAQgOATAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgTAAgQgPg");
	this.shape_9.setTransform(-32.5,-58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AElAAQAAB5hWBWQhVBWh6AAQh4AAhWhWQhWhWAAh5QAAh5BWhWQBWhVB4AAQB6AABVBVQBWBWAAB5g");
	this.shape_10.setTransform(-4.1,-49.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.639)").s().p("AjPDPQhVhVAAh6QAAh5BVhVQBXhWB4AAQB6AABVBWQBWBVAAB5QAAB6hWBVQhVBWh6AAQh4AAhXhWg");
	this.shape_11.setTransform(-4.1,-49.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABGAAQAAAdgUAVQgHAHgJAFQgPAIgTAAQgcAAgUgUQgVgVAAgdQAAgQAGgMQAFgMAKgIQAUgVAcAAQAdAAAVAVQAUAUAAAcg");
	this.shape_12.setTransform(-30.1,-10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.718)").s().p("AgwAxQgVgUAAgdQAAgPAGgNQAFgLAKgKQAUgUAcAAQAdAAAVAUQAUAVAAAcQAAAdgUAUQgIAHgIAGQgPAIgTAAQgcAAgUgVg");
	this.shape_13.setTransform(-30.1,-10.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABfAAQAAAogcAbQgcAcgnAAQgmAAgdgcQgbgbAAgoQAAgmAbgdQAdgbAmAAQAnAAAcAbQAcAdAAAmg");
	this.shape_14.setTransform(21,-9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.718)").s().p("AhDBDQgbgbAAgoQAAgnAbgcQAcgbAnAAQAoAAAbAbQAcAcAAAnQAAAogcAbQgbAcgoAAQgnAAgcgcg");
	this.shape_15.setTransform(21,-9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABnAAQAAAOgDAOQgHAZgVAUQgdAegrAAQgqAAgegeQgegeAAgrQAAgHABgHQACgPAHgOQAHgQANgNQAEgEAEgDQAcgXAkAAQArAAAdAeQAfAeAAAqg");
	this.shape_16.setTransform(1.7,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.718)").s().p("AAAgOIADAAIACAAQgHAOgBAPQAAgPADgOg");
	this.shape_17.setTransform(-8,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.639)").s().p("AhIBJQgegfAAgqIABgOQACgPAHgOQAHgQANgNIAIgHQAcgXAkAAQAqAAAeAeQAfAeAAAqQAAAOgEAOQgGAZgVAUQgeAegqAAQgpAAgfgeg");
	this.shape_18.setTransform(1.7,17.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABuAAQAAAtggAhQggAgguAAQgtAAggggQggghAAgtQAAgsAgghQAgggAtAAQAuAAAgAgQAgAhAAAsg");
	this.shape_19.setTransform(-22.5,38.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.718)").s().p("AhNBNQggggAAgtQAAgsAgghQAhggAsAAQAtAAAgAgQAhAhAAAsQAAAtghAgQggAhgtAAQgsAAghghg");
	this.shape_20.setTransform(-22.5,38.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAUgPAPQgOAPgVAAQgUAAgPgPQgOgPAAgUQAAgTAOgPQAPgPAUAAQAVAAAOAPQAPAPAAATg");
	this.shape_21.setTransform(-1,57.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.718)").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAQgOATAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgTAAgQgPg");
	this.shape_22.setTransform(-1,57.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAAQAAAPgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOg");
	this.shape_23.setTransform(-13,94.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.718)").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAOgKAKQgKALgPAAQgOAAgKgLg");
	this.shape_24.setTransform(-13,94.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbles03, new cjs.Rectangle(-38.5,-99.2,77,198.5), null);


(lib.bubbles02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgBAAgBAAQgLgBgIgIQgIgIAAgNQAAgMAIgJQAJgIAMAAQANAAAIAIQACADACACQAFAIAAAIg");
	this.shape.setTransform(-10.5,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.718)").s().p("AgDAeQgKgCgIgHQgIgJAAgMQAAgMAIgJQAJgIAMAAQAMAAAJAIIAEAFQAFAIAAAIQAAAMgJAJQgJAJgMAAIgDAAg");
	this.shape_1.setTransform(-10.5,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_2.setTransform(-33.2,-95.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.718)").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAKgIALAAQANAAAIAIQAJAKAAALQAAANgJAIQgIAJgNAAQgLAAgKgJg");
	this.shape_3.setTransform(-33.2,-95.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAag");
	this.shape_4.setTransform(2.3,-89.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.718)").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_5.setTransform(2.3,-89.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAUgPAPQgOAPgVAAQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATg");
	this.shape_6.setTransform(-40.2,-55.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.718)").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPg");
	this.shape_7.setTransform(-40.2,-55.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AElAAQAAB6hWBVQhWBWh5AAQh5AAhWhWQhVhVAAh6QAAh5BVhVQBWhWB5AAQB5AABWBWQBWBVAAB5g");
	this.shape_8.setTransform(-5.8,-22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.639)").s().p("AjPDPQhVhWAAh5QAAh5BVhWQBXhVB4AAQB6AABVBVQBWBWAAB5QAAB5hWBWQhVBWh6AAQh4AAhXhWg");
	this.shape_9.setTransform(-5.8,-22.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAtAAQAAASgOANQgDAEgEADQgLAHgNAAQgSAAgNgOQgNgNAAgSQAAgIADgHQADgJAHgHQANgNASAAQASAAANANQAOANAAASg");
	this.shape_10.setTransform(23.3,-63.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.718)").s().p("AgfAgQgNgOAAgSQAAgHADgIQADgJAHgHQAOgNARAAQASAAAOANQANAOAAARQAAASgNAOIgIAGQgKAHgOAAQgRAAgOgNg");
	this.shape_11.setTransform(23.3,-63.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABGAAQAAAdgVAUQgGAIgJAFQgPAIgTAAQgcAAgVgVQgUgUAAgdQAAgQAGgNQAFgLAJgJQAVgUAcAAQAdAAAUAUQAVAVAAAcg");
	this.shape_12.setTransform(-38.3,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.718)").s().p("AgxAxQgUgUAAgdQAAgPAHgNQAFgLAIgKQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgGAHgJAGQgPAIgTAAQgcAAgVgVg");
	this.shape_13.setTransform(-38.3,4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABfAAQAAAngcAcQgbAcgoAAQgmAAgcgcQgcgcAAgnQAAgnAcgcQAcgbAmAAQAoAAAbAbQAcAcAAAng");
	this.shape_14.setTransform(35.8,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.718)").s().p("AhCBDQgcgbAAgoQAAgnAcgcQAcgbAmAAQAoAAAbAbQAcAcAAAnQAAAogcAbQgbAcgoAAQgmAAgcgcg");
	this.shape_15.setTransform(35.8,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABnAAQAAAOgDAOQgHAZgUAUQgeAegrAAQgqAAgegeQgegeAAgrQAAgHABgHQACgQAHgNQAHgQANgNQAEgEAEgDQAcgXAkAAQArAAAeAeQAeAeAAAqg");
	this.shape_16.setTransform(-1,26.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.718)").s().p("AAAgOIADAAIACAAQgHAOgBAPQAAgPADgOg");
	this.shape_17.setTransform(-10.7,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.639)").s().p("AhIBJQgegfAAgqIABgOQACgPAHgOQAHgQANgNIAIgHQAcgXAkAAQAqAAAeAeQAfAeAAAqQAAAOgEAOQgGAZgVAUQgeAegqAAQgpAAgfgeg");
	this.shape_18.setTransform(-1,26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABuAAQAAAtggAhQghAggtAAQgtAAggggQggghAAgtQAAgsAgghQAgggAtAAQAtAAAhAgQAgAhAAAsg");
	this.shape_19.setTransform(-20.2,44.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.718)").s().p("AhNBOQggghAAgtQAAgtAgggQAgggAtAAQAtAAAhAgQAgAgAAAtQAAAtggAhQghAggtAAQgtAAggggg");
	this.shape_20.setTransform(-20.2,44.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAUgPAPQgOAPgVAAQgUAAgPgPQgOgPAAgUQAAgTAOgPQAPgPAUAAQAVAAAOAPQAPAPAAATg");
	this.shape_21.setTransform(-3.2,56.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.718)").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAQgOATAAQAVAAAOAOQAPAPAAAUQAAAUgPAPQgOAPgVAAQgTAAgQgPg");
	this.shape_22.setTransform(-3.2,56.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAAQAAAPgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOg");
	this.shape_23.setTransform(-16.2,95.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.718)").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOQAAAOgLALQgKAKgOAAQgNAAgLgKg");
	this.shape_24.setTransform(-16.2,95.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbles02, new cjs.Rectangle(-46.3,-99.7,92.6,199.5), null);


(lib.bubbles01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape.setTransform(-42.7,-102);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.718)").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_1.setTransform(-42.7,-102);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABBAAQAAAbgTATQgTATgbAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAag");
	this.shape_2.setTransform(-5.2,-103.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.718)").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_3.setTransform(-5.2,-103.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAUgPAPQgOAPgVAAQgTAAgPgPQgPgPAAgUQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATg");
	this.shape_4.setTransform(-33.7,-76);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.718)").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_5.setTransform(-33.7,-76);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AElAAQAAB5hWBWQhWBWh5AAQh5AAhWhWQhVhWAAh5QAAh5BVhWQBWhVB5AAQB5AABWBVQBWBWAAB5g");
	this.shape_6.setTransform(-5.3,-35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.639)").s().p("AjPDPQhVhWAAh5QAAh5BVhWQBWhVB5AAQB5AABWBVQBWBWAAB5QAAB5hWBWQhWBWh5AAQh5AAhWhWg");
	this.shape_7.setTransform(-5.3,-35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAtAAQAAASgOANQgDAEgEADQgLAHgNAAQgSAAgNgOQgNgNAAgSQAAgIADgHQADgJAHgHQANgNASAAQASAAANANQAOANAAASg");
	this.shape_8.setTransform(22.3,-59.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.718)").s().p("AgfAfQgNgNAAgSQAAgIADgHQADgJAHgHQANgNASAAQASAAAOANQANAOAAARQAAASgNANIgIAHQgKAHgOAAQgSAAgNgOg");
	this.shape_9.setTransform(22.3,-59.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABGAAQAAAdgVAVQgGAHgJAFQgPAIgTAAQgcAAgVgUQgUgVAAgdQAAgQAGgMQAFgMAJgIQAVgVAcAAQAdAAAUAVQAVAUAAAcg");
	this.shape_10.setTransform(-40.3,-11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.718)").s().p("AgxAxQgUgUAAgdQAAgPAHgNQAFgLAIgKQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgGAHgJAGQgPAIgTAAQgcAAgVgVg");
	this.shape_11.setTransform(-40.3,-11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAeAAQAAANgJAIQgIAJgNAAQgBAAgBAAQgLgBgIgIQgIgIAAgNQAAgMAIgJQAJgIAMAAQANAAAIAIQACADACACQAFAIAAAIg");
	this.shape_12.setTransform(-9.5,13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.718)").s().p("AgCAeQgLgBgHgIQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJIAEAEQAFAIAAAIQAAAMgJAJQgJAJgMAAIgCAAg");
	this.shape_13.setTransform(-9.5,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABfAAQAAAogcAbQgbAcgoAAQgmAAgcgcQgcgbAAgoQAAgnAcgcQAcgbAmAAQAoAAAbAbQAcAcAAAng");
	this.shape_14.setTransform(37.8,-1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.718)").s().p("AhDBDQgbgbAAgoQAAgnAbgcQAcgbAnAAQAnAAAcAbQAcAcAAAnQAAAogcAbQgcAcgnAAQgnAAgcgcg");
	this.shape_15.setTransform(37.8,-1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABnAAQAAAOgDAOQgHAZgUAUQgeAegrAAQgqAAgegeQgegeAAgrQAAgHABgHQACgQAHgNQAHgQANgNQAEgEAEgDQAcgXAkAAQArAAAeAeQAeAeAAAqg");
	this.shape_16.setTransform(-1.5,21);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.718)").s().p("AAAgOIADAAIABAAQgGAOgCAPQAAgPAEgOg");
	this.shape_17.setTransform(-11.2,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.639)").s().p("AhIBIQgegeAAgqIABgOQACgQAHgOQAHgPANgNIAIgHQAcgXAkAAQAqAAAfAeQAeAfAAApQAAAPgDANQgIAZgTATQgfAfgqAAQgqAAgegfg");
	this.shape_18.setTransform(-1.5,21);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABuAAQAAAtghAhQggAggtAAQgtAAggggQggghAAgtQAAgsAgghQAgggAtAAQAtAAAgAgQAhAhAAAsg");
	this.shape_19.setTransform(-12.7,53);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.718)").s().p("AhNBOQggggAAguQAAgsAgghQAhggAsAAQAuAAAfAgQAhAhAAAsQAAAughAgQgfAgguAAQgsAAghggg");
	this.shape_20.setTransform(-12.7,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAyAAQAAAUgPAPQgPAPgUAAQgUAAgPgPQgOgPAAgUQAAgTAOgPQAPgPAUAAQAUAAAPAPQAPAPAAATg");
	this.shape_21.setTransform(-7.7,89);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.718)").s().p("AgjAjQgOgPAAgUQAAgTAOgQQAQgOATAAQAVAAAOAOQAPAQAAATQAAAUgPAPQgOAPgVAAQgTAAgQgPg");
	this.shape_22.setTransform(-7.7,89);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAAQAAAPgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOg");
	this.shape_23.setTransform(-20.2,106.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.718)").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgOAAgKgKg");
	this.shape_24.setTransform(-20.2,106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bubbles01, new cjs.Rectangle(-48.3,-111,96.6,222), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,255,0.569)").s().p("Egx4AlgMAAAhK/MBjxAAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-319.3,-240,638.7,480), null);


// stage content:
(lib.Fish_h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		
		this.forty40.addEventListener("click", fl_ClickToGoToAndStopAtFrame_21.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_21()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.fortyone41.addEventListener("click", fl_ClickToGoToAndStopAtFrame_22.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_22()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.fortytwo42.addEventListener("click", fl_ClickToGoToAndStopAtFrame_23.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_23()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.fortythree43.addEventListener("click", fl_ClickToGoToAndStopAtFrame_24.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_24()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.fortyfour44.addEventListener("click", fl_ClickToGoToAndStopAtFrame_25.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_25()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.fortyfive45.addEventListener("click", fl_ClickToGoToAndStopAtFrame_26.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_26()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.fortysix46.addEventListener("click", fl_ClickToGoToAndStopAtFrame_27.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_27()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.fortyseven47.addEventListener("click", fl_ClickToGoToAndStopAtFrame_28.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_28()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.fortyeight48.addEventListener("click", fl_ClickToGoToAndStopAtFrame_29.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_29()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.fortynine49.addEventListener("click", fl_ClickToGoToAndStopAtFrame_30.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_30()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.fifty50.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(105));

	// Numbers All
	this.fifty50 = new lib.fifty50();
	this.fifty50.parent = this;
	this.fifty50.setTransform(168,266.1);
	new cjs.ButtonHelper(this.fifty50, 0, 1, 2, false, new lib.fifty50(), 3);

	this.fortynine49 = new lib.fortynine49();
	this.fortynine49.parent = this;
	this.fortynine49.setTransform(188.5,151.6);
	new cjs.ButtonHelper(this.fortynine49, 0, 1, 2, false, new lib.fortynine49(), 3);

	this.fortyeight48 = new lib.fortyeight48();
	this.fortyeight48.parent = this;
	this.fortyeight48.setTransform(301,280.1);
	new cjs.ButtonHelper(this.fortyeight48, 0, 1, 2, false, new lib.fortyeight48(), 3);

	this.fortyseven47 = new lib.fortyseven47();
	this.fortyseven47.parent = this;
	this.fortyseven47.setTransform(267,99.1);
	new cjs.ButtonHelper(this.fortyseven47, 0, 1, 2, false, new lib.fortyseven47(), 3);

	this.fortysix46 = new lib.fortysix46();
	this.fortysix46.parent = this;
	this.fortysix46.setTransform(489.5,138.6);
	new cjs.ButtonHelper(this.fortysix46, 0, 1, 2, false, new lib.fortysix46(), 3);

	this.fortyfive45 = new lib.fortyfive45();
	this.fortyfive45.parent = this;
	this.fortyfive45.setTransform(434,311.6);
	new cjs.ButtonHelper(this.fortyfive45, 0, 1, 2, false, new lib.fortyfive45(), 3);

	this.fortyfour44 = new lib.fortyfour44();
	this.fortyfour44.parent = this;
	this.fortyfour44.setTransform(548,212.1);
	new cjs.ButtonHelper(this.fortyfour44, 0, 1, 2, false, new lib.fortyfour44(), 3);

	this.fortythree43 = new lib.fortythree43();
	this.fortythree43.parent = this;
	this.fortythree43.setTransform(481,381.6);
	new cjs.ButtonHelper(this.fortythree43, 0, 1, 2, false, new lib.fortythree43(), 3);

	this.fortytwo42 = new lib.fortytwo42();
	this.fortytwo42.parent = this;
	this.fortytwo42.setTransform(391,430.6);
	new cjs.ButtonHelper(this.fortytwo42, 0, 1, 2, false, new lib.fortytwo42(), 3);

	this.fortyone41 = new lib.fortyone41();
	this.fortyone41.parent = this;
	this.fortyone41.setTransform(256.5,400.1);
	new cjs.ButtonHelper(this.fortyone41, 0, 1, 2, false, new lib.fortyone41(), 3);

	this.forty40 = new lib.forty40();
	this.forty40.parent = this;
	this.forty40.setTransform(212.5,332.6);
	new cjs.ButtonHelper(this.forty40, 0, 1, 2, false, new lib.forty40(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.forty40},{t:this.fortyone41},{t:this.fortytwo42},{t:this.fortythree43},{t:this.fortyfour44},{t:this.fortyfive45},{t:this.fortysix46},{t:this.fortyseven47},{t:this.fortyeight48},{t:this.fortynine49},{t:this.fifty50}]}).wait(115));

	// Numbers
	this.fortyone41_1 = new lib.fortyone41();
	this.fortyone41_1.parent = this;
	this.fortyone41_1.setTransform(256.5,400.1);
	new cjs.ButtonHelper(this.fortyone41_1, 0, 1, 2, false, new lib.fortyone41(), 3);

	this.fortytwo42_1 = new lib.fortytwo42();
	this.fortytwo42_1.parent = this;
	this.fortytwo42_1.setTransform(391,430.6);
	new cjs.ButtonHelper(this.fortytwo42_1, 0, 1, 2, false, new lib.fortytwo42(), 3);

	this.fortythree43_1 = new lib.fortythree43();
	this.fortythree43_1.parent = this;
	this.fortythree43_1.setTransform(481,381.6);
	new cjs.ButtonHelper(this.fortythree43_1, 0, 1, 2, false, new lib.fortythree43(), 3);

	this.fortyfour44_1 = new lib.fortyfour44();
	this.fortyfour44_1.parent = this;
	this.fortyfour44_1.setTransform(548,212.1);
	new cjs.ButtonHelper(this.fortyfour44_1, 0, 1, 2, false, new lib.fortyfour44(), 3);

	this.fortyfive45_1 = new lib.fortyfive45();
	this.fortyfive45_1.parent = this;
	this.fortyfive45_1.setTransform(434,311.6);
	new cjs.ButtonHelper(this.fortyfive45_1, 0, 1, 2, false, new lib.fortyfive45(), 3);

	this.fortysix46_1 = new lib.fortysix46();
	this.fortysix46_1.parent = this;
	this.fortysix46_1.setTransform(489.5,138.6);
	new cjs.ButtonHelper(this.fortysix46_1, 0, 1, 2, false, new lib.fortysix46(), 3);

	this.fortyseven47_1 = new lib.fortyseven47();
	this.fortyseven47_1.parent = this;
	this.fortyseven47_1.setTransform(267,99.1);
	new cjs.ButtonHelper(this.fortyseven47_1, 0, 1, 2, false, new lib.fortyseven47(), 3);

	this.fortyeight48_1 = new lib.fortyeight48();
	this.fortyeight48_1.parent = this;
	this.fortyeight48_1.setTransform(301,280.1);
	new cjs.ButtonHelper(this.fortyeight48_1, 0, 1, 2, false, new lib.fortyeight48(), 3);

	this.fortynine49_1 = new lib.fortynine49();
	this.fortynine49_1.parent = this;
	this.fortynine49_1.setTransform(188.5,151.6);
	new cjs.ButtonHelper(this.fortynine49_1, 0, 1, 2, false, new lib.fortynine49(), 3);

	this.fifty50_1 = new lib.fifty50();
	this.fifty50_1.parent = this;
	this.fifty50_1.setTransform(168,266.1);
	new cjs.ButtonHelper(this.fifty50_1, 0, 1, 2, false, new lib.fifty50(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.fortyone41_1}]},1).to({state:[{t:this.fortytwo42_1}]},1).to({state:[{t:this.fortythree43_1}]},1).to({state:[{t:this.fortyfour44_1}]},1).to({state:[{t:this.fortyfive45_1}]},1).to({state:[{t:this.fortysix46_1}]},1).to({state:[{t:this.fortyseven47_1}]},1).to({state:[{t:this.fortyeight48_1}]},1).to({state:[{t:this.fortynine49_1}]},1).to({state:[{t:this.fifty50_1}]},1).wait(105));

	// Fish
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AG5I1Qrfg9iSws");
	this.shape.setTransform(279.3,325.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("ABeFWQAMgaAKgYQBFingLhzIEpglQALgBALgBQEYghAOAHQgFANgGANQhLCiieCfQgFAFgFAFQgmAmgqAlQghAcgkAdQjiC1lRCtQCpjnBYi0QAIgRAIgSQrfg9iRws");
	this.shape_1.setTransform(314,347.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("ABQFWQAMgaAKgYQBFingLhzIEpglQALgBALgBQEYghAOAHQgFANgGANQhLCiieCfQgFAFgFAFQgmAmgqAlQghAcgkAdAIHEuQB5gcCDgvQAKgDAKgEQAFgCAGgCQgGAIgFAHQgHAKgHAJQgDAEgDADQi5DplIDvQBGigAqiHQjiC1lRCtQCpjnBYi0QAIgRAIgSQrfg9iRws");
	this.shape_2.setTransform(315.4,347.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AqYFWQAMgaAKgYQBFingLhzIEpglQALgBALgBQEXghAOAHQgFANgGANQhKCiieCfQgFAFgFAFQgmAmgqAlQghAcgkAdQjiC1lSCtQCpjnBZi0QAIgRAIgSQrgg9iRwsAA5DYQgFAIgGAHQgHAKgHAJQgDAEgDADQi4DplIDvQBGigAqiHAjhEuQB5gcCCgvQAKgDAKgEQAFgCAGgCAWZo6IBxACQAAAFiWBVQjkCDpBE+QkeCaj4Bb");
	this.shape_3.setTransform(389.9,347.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("AqYMjQAMgaAKgYQBFingLhzIEpgmQALgBALgBQEXghAOAHQgFANgGANQhKCjieCfQgFAFgFAFQgmAmgqAlQghAcgkAdQjiC1lSCtQCpjnBZi0QAIgRAIgSQrgg9iRwsAA5KlQgFAIgGAHQgHAKgHAJQgDAEgDADQi4DplIDvQBGigAqiHAjhL7QB5gcCCgvQAKgDAKgEQAFgCAGgCAYJhrIABAAQAAAFiWBVQjkCCpBE+QkeCbj4BbAOwzgQBbCrBNCRQAHAMAGAMQGVL4APApIhwgC");
	this.shape_4.setTransform(389.9,301.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(6,1,1).p("ABIABQAAAfgWAXQgVAWgdAAQgdAAgVgWQgVgXAAgfQAAggAVgWQAVgXAdAAQAdAAAVAXQAWAWAAAgg");
	this.shape_5.setTransform(484.5,254.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("ARLoHQAACDhiBaQhiBciLAAQgcAAgZgEQhpgOhPhKQhjhaAAiDQAAiBBjhcQBPhJBpgPQAZgDAcAAQCLAABiBbQBiBcAACBgAqYMjQAMgaAKgYQBFingLhzIEpgmQALgBALgBQEXghAOAHQgFANgGANQhKCjieCfQgFAFgFAFQgmAmgqAlQghAcgkAdQjiC1lSCtQCpjnBZi0QAIgRAIgSQrgg9iRwsAA5KlQgFAIgGAHQgHAKgHAJQgDAEgDADQi4DplIDvQBGigAqiHAjhL7QB5gcCCgvQAKgDAKgEQAFgCAGgCAYJhrIABAAQAAAFiWBVQjkCCpBE+QkeCbj4BbAOwzgQBbCrBNCRQAHAMAGAMQGVL4APApIhwgC");
	this.shape_6.setTransform(389.9,301.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyA3QgVgXAAgfQAAggAVgWQAVgXAdAAQAdAAAVAXQAWAWAAAgQAAAfgWAXQgVAWgdAAQgdAAgVgWg");
	this.shape_7.setTransform(484.5,254.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AF3vAQqRHYhRHuQhQHrHrHQ");
	this.shape_8.setTransform(422.4,258.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1.5,1,1).p("AK80lQANAGANAGQBtA1BtBJQBbCqBNCSQAHAMAGAMQGVL4APApIABAAQAAAFiWBUQjkCDpBE+QkeCbj4BbQgFAHgGAIQgHAJgHAKQgDAEgDADQi4DplIDvQBGigAqiHQjiC1lSCtQCpjnBZi0QAIgRAIgSQrgg9iRwsARLnCQAACDhiBaQhiBciLAAQgcAAgZgEQhpgOhPhKQhjhaAAiDQAAiBBjhcQBPhKBpgOQAZgDAcAAQCLAABiBbQBiBcAACBgAqYNoQAMgaAKgYQBFingLhzIEpgmQALgBALgBQEXghAOAHQgFANgGANQhKCjieCfQgFAFgFAFQgmAmgqAlQghAcgkAdAjhNAQB5gcCCgvQAKgDAKgEQAFgCAGgCAYJgmIhwgC");
	this.shape_9.setTransform(389.9,294.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1.5,1,1).p("AHzvGItbsJICpMTQgCABgDABIgkgZIrZn/IE4L1AK8t8QANAGANAHQBtA0BtBJQBbCrBNCRQAHAMAGANQGVL2APAqIABAAQAAAEiWBWQjkCCpBE+QkeCbj4BcQgFAHgGAHQgHAKgHAJQgDAEgDAEQi4DplIDvQBGihAqiGQjiC0lSCuQCpjoBZizQAIgSAIgRQrgg9iRwuARLgYQAACBhiBaQhiBciLAAQgcAAgZgEQhpgOhPhKQhjhaAAiBQAAiCBjhcQBPhJBpgOQAZgEAcAAQCLAABiBbQBiBcAACCgAqYUSQAMgaAKgZQBFingLhzIEpglQALgCALgBQEXggAOAGQgFANgGANQhKCkieCeQgFAGgFAFQgmAlgqAmQghAbgkAeAjhTqQB5gdCCguQAKgEAKgEQAFgCAGgBAYJGDIhwgC");
	this.shape_10.setTransform(389.9,252.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1.5,1,1).p("AqJrdQAMgJAMgHQC5h4C2hAQAKgEAKgDQABgBABAAQAUgHAUgGAqYUSQrgg9iRwuQAxhDAyg+QAEgFAEgFQABgBABgBQAEgGAEgFQABgCABAAQAFgGAFgHQAyg9Ayg6QAMgOALgNQAEgFAFgFQAKgMALgNQACgCACgBQAMgOAMgOQBlhwBlhhQAFgEAFgFQANgNAOgNQACgCACgBQADgDACgCQAKgJAJgJQCMiACMhhQAFgDAFgDQAKgIAKgHQAEgCAFgDAi/u8QgCABgDABIgIgFIgcgUIrZn/IE4L1Ai/u8QAGgCAGgBQAmgMAngIQEvhGEqBTQBlAcBkAuQANAGANAHQBtA0BtBJQBbCrBNCRQAHAMAGANQGVL2APAqIABAAQAAAEiWBWQjkCCpBE+QkeCbj4BcAHzvGItbsJICpMTARLgYQAACBhiBaQhiBciLAAQgcAAgZgEQhpgOhPhKQhjhaAAiBQAAiCBjhcQBPhJBpgOQAZgEAcAAQCLAABiBbQBiBcAACCgAqYUSQAMgaAKgZQBFingLhzIEpglQALgCALgBQEXggAOAGQgFANgGANQhKCkieCeQgFAGgFAFQgmAlgqAmQghAbgkAeQjiC0lSCuQCpjoBZizQAIgSAIgRgAjhTqQB5gdCCguQAKgEAKgEQAFgCAGgBQgFAHgGAHQgHAKgHAJQgDAEgDAEQi4DplIDvQBGihAqiGAYJGDIhwgC");
	this.shape_11.setTransform(389.9,252.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.5,1,1).p("AoZrdQAMgJAMgHQC5h4C2hAQAKgEAKgDQABgBABAAQAUgHAUgGAoirYQAEgCAFgDAhPu8QgCABgDABIgIgFIgcgUIrZn/IE4L1AhPu8QAGgCAGgBQAmgMAmgIQEwhGEqBTQBlAcBkAuQANAGANAHQBtA0BtBJQBbCrBNCRQAHAMAGANQADAFADAGQAIAOAIAPQABACABACQAKASAJASQADAGADAFIEoIvQBFCFAGARAJjvGItbsJICpMTAS7gYQAACBhiBaQhiBciLAAQgcAAgZgEQhpgOhPhKQhjhaAAiBQAAiCBjhcQBPhJBpgOQAZgEAcAAQCLAABiBbQBiBcAACCgAooUSQAMgaAKgZQBFingLhzIEpglQALgCALgBQEXggAOAGQgFANgGANQhLCkidCeQgFAGgFAFQgmAlgqAmQghAbgkAeQjiC0lSCuQCpjoBZizQAIgSAIgRQrbg9iUwfQgBgIgBgHQABgBABgCQAwhBAxg9QAEgFAEgFQABgBABgBQAEgGAEgFQABgCABAAQAFgGAFgHQAyg9Ayg6QAMgOALgNQAEgFAFgFQAKgMALgNQACgCACgBQAMgOAMgOQBlhwBlhhQAFgEAFgFQANgNAOgNQACgCACgBQADgDACgCQAKgJAJgJQCMiACMhhQAFgDAFgDQAKgIAKgHIgUgJIgKgEIsjlfIHQJ0IANARAhxTqQB4gdCDguQAKgEAKgEQAFgCAGgBQgFAHgGAHQgHAKgHAJQgDAEgDAEQi4DplIDvQBGihAqiGAXpHaIgFADQh6BFjdB8QjBBrkNCUQkeCbj4BcAZ6GDIgBAAAX/GBIAKAAIAGAAIBqACAYuDtQAGAMAGALQA6BuAFAPQABABAAABIiIBSQgDABgCACQgCABgCABAXyHVQgFADgEACAt0nIIgfgIIrFjLIHZHmAyUicInlh/IFXEo");
	this.shape_12.setTransform(378.7,252.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1.5,1,1).p("AizrdQAMgJAMgHQC4h4C2hAQAKgEAKgDQABgBABAAQAUgHAUgGIgIgFIgcgUIrYn/gAi8rYQAEgCAFgDAERu6QADgBACgBQAGgCAGgBQAngMAmgIQEwhGEqBTQBlAcBkAuQAOAGAMAHQBuA0BsBJQBbCrBOCRQAGAMAGANQEBHhBkDAQA6BuAGAPQAAABAAABQAAAEiNBRQgEACgFADQh6BFjdB8QjBBrkNCUQkeCbj4BcQgFABgGACQgKAEgKAEQiDAuh5AdAPJvGItcsJICpMTAYigYQAACBhjBaQhiBciLAAQgbAAgagEQhpgOhPhKQhjhaAAiBQAAiCBjhcQBPhJBpgOQAagEAbAAQCLAABiBbQBjBcAACCgAjCUSQAMgaAKgZQBFingLhzIEpglQAKgCALgBQEZggANAGQgFANgGANQhLCkieCeQgFAGgFAFQgmAlgqAmQghAbgkAeQjhC0lSCuQCpjoBZizQAIgSAIgRQrgg9iRwuQAxhDAyg+QAEgFAEgFQABgBABgBQAEgGAFgFQABgCAAAAQAFgGAFgHQAzg9Axg6QAMgOALgNQAFgFAEgFQAKgMALgNQACgCACgBQAMgOAMgOQBlhwBlhhQAFgEAFgFQAOgNANgNQACgCACgBQADgDACgCQAKgJAJgJQCNiACLhhQAFgDAFgDQAKgIAKgHIgUgJIgKgEIsjlfIHRJ0IrGjLIHZHmAIPSUQgFAHgGAHQgHAKgHAJQgDAEgDAEQi4DplIDvQBFihAqiGAdmGBIB6ACAoOnIIgegIIAMARAsuicInlh/IFXEoA/gpZQG/G/HlFAQnkEQnAIdg");
	this.shape_13.setTransform(342.9,252.1);

	this.instance = new lib.fish();
	this.instance.parent = this;
	this.instance.setTransform(343.9,252.8,0.799,0.799,0,0,0,293,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.fishTransition01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.8,252.7,0.799,0.799,0,0,0,292.9,-0.5);

	this.instance_2 = new lib.fishSwimmingLookingAtYou();
	this.instance_2.parent = this;
	this.instance_2.setTransform(592.5,257.7,0.799,0.799,0,0,0,292.9,-0.5);

	this.instance_3 = new lib.fishTransition01Back();
	this.instance_3.parent = this;
	this.instance_3.setTransform(343.5,251.3,0.799,0.799,0,0,0,292.9,-0.5);

	this.instance_4 = new lib.fish01Swimming02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(590.5,256.9,0.799,0.799,0,0,0,293.1,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_9},{t:this.shape_8},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_10},{t:this.shape_8},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_11},{t:this.shape_8},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_12},{t:this.shape_5},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_13},{t:this.shape_5},{t:this.shape_8}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({regY:-0.5,x:343.8,y:252.5,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(1).to({regX:292.9,y:252.7},0).wait(2).to({_off:true},4).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).wait(6).to({regX:-18.5,regY:-6.5,x:349.5,y:235.1},0).wait(1).to({x:359.3,y:219},0).wait(1).to({x:371.5,y:204.6},0).wait(1).to({x:386.5,y:193.4},0).wait(1).to({x:404.2,y:187},0).wait(1).to({x:423,y:186.6},0).wait(1).to({x:441.2,y:190.9},0).wait(1).to({x:458.4,y:198.6},0).wait(1).to({x:474.5,y:208.5},0).wait(1).to({x:483.5,y:235},0).wait(1).to({x:493.9,y:261.2},0).wait(1).to({x:505.9,y:286.6},0).wait(1).to({x:519.7,y:311.1},0).wait(1).to({x:535.7,y:334.2},0).wait(1).to({x:554.2,y:355.3},0).wait(1).to({x:575.5,y:373.6},0).wait(1).to({x:599.6,y:388.1},0).wait(1).to({x:625.9,y:398},0).wait(1).to({x:653.5,y:402.8},0).wait(1).to({x:681.6,y:402.9},0).wait(1).to({x:709.4,y:399},0).wait(1).to({x:736.6,y:391.8},0).wait(1).to({x:763,y:382},0).wait(1).to({x:788.5,y:370.3},0).wait(1).to({x:813.3,y:357.1},0).wait(1).to({x:837.3,y:342.5},0).wait(1).to({x:844,y:339.1},0).wait(1).to({x:850.6,y:335.8},0).wait(1).to({x:857.2,y:332.4},0).wait(1).to({x:863.8,y:329},0).wait(1).to({x:870.4,y:325.7},0).wait(1).to({x:877,y:322.3},0).wait(1).to({x:883.6,y:318.9},0).wait(1).to({x:890.2,y:315.6},0).wait(1).to({x:896.9,y:312.2},0).wait(1).to({x:903.5,y:308.8},0).wait(1).to({x:910.1,y:305.5},0).wait(28));

	// Bubbles
	this.instance_5 = new lib.bubbles01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(570.4,180.7);

	this.instance_6 = new lib.bubbles02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(566.5,112.4);

	this.instance_7 = new lib.bubbles03();
	this.instance_7.parent = this;
	this.instance_7.setTransform(561.6,80.6);
	this.instance_7._off = true;

	this.instance_8 = new lib.bubbles05();
	this.instance_8.parent = this;
	this.instance_8.setTransform(556.7,-28.8);

	this.instance_9 = new lib.bubbles06();
	this.instance_9.parent = this;
	this.instance_9.setTransform(564.5,-54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{x:570.4,y:180.7}}]},45).to({state:[{t:this.instance_5,p:{x:568,y:170}}]},3).to({state:[{t:this.instance_6,p:{x:566.5,y:112.4}}]},3).to({state:[{t:this.instance_6,p:{x:562.1,y:88.9}}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8,p:{x:556.7,y:-28.8}}]},3).to({state:[{t:this.instance_8,p:{x:556.2,y:-42.9}}]},3).to({state:[{t:this.instance_8,p:{x:556.7,y:-28.8}}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_9}]},3).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(57).to({_off:false},0).wait(3).to({x:559.7,y:53.2},0).wait(3).to({x:558.7,y:28.9},0).wait(4).to({x:558.2,y:7.4},0).to({_off:true},3).wait(45));

	// Background
	this.instance_10 = new lib.background();
	this.instance_10.parent = this;
	this.instance_10.setTransform(320.4,240);
	this.instance_10.alpha = 0.41;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13).to({_off:false},0).wait(6).to({alpha:0.641},0).wait(5).to({alpha:0.75},0).wait(91));

	// Sound Button
	this.instance_11 = new lib.sound_noSound();
	this.instance_11.parent = this;
	this.instance_11.setTransform(52.1,40.5,1,1,0,0,0,12.1,10.5);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115));

	// Border
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_14.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(115));

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