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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiwFAQhXAYhqAAQi6AAiFhOQiDhOAAhuQAAhtCDhOQBPguBggTQgCgOAAgPQAAhYBWg+QAcgUAggOQBCgcBSAAQBSAABCAcQAgAOAcAUQAxAkAVAsQBRgOBcAAQD1AACsBnQCtBnAACRQAACSitBnQisBnj1AAQjsAAiqhgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-41.6,164,83.2);


(lib.WheelSmall1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFEg/QAgAbAAAlQAAAlggAcQgeAbgtAAQgaAAgWgKQgOgGgNgLQgfgcAAglQAAglAfgbQAggdArAAQAtAAAeAdgAj5hcQAtAAAeAdQAhAbAAAlQAAAlghAcQgeAbgtAAQgqAAghgbQgfgcAAglQAAglAfgbQAEgEAEgDQAegWAlAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("ADJBTQgOgGgNgLQgfgcAAglQAAglAfgbQAggdArAAQAtAAAeAdQAgAbAAAlQAAAlggAcQgeAbgtAAQgaAAgWgKgAlEBCQgfgcAAglQAAglAfgbIAIgHQAegWAlAAQAtAAAeAdQAhAbAAAlQAAAlghAcQgeAbgtAAQgqAAghgbg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFWgfQAJAmgWAnQgNAXgTAOQgOAJgQAGQgmANghgTQgggTgKgoQgIgqAVgkQAWgnAogMQApgOAgATQAhASAHAqgAiagfQAJAmgXAnQgVAlgpAPQgnANgggTQghgTgIgoQgBgGAAgEQgFglASggQAXgnAogLQAogPAhATQAgASAIArg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AktBcQghgTgIgoIgBgKQgFglASggQAXgnAogLQAogPAhATQAgASAIArQAJAmgXAnQgVAlgpAPQgQAFgPAAQgVAAgTgLgADEBcQgggTgKgoQgIgqAVgkQAWgnAogMQApgOAgATQAhASAHAqQAJAmgWAnQgNAXgTAOQgOAJgQAGQgQAFgOAAQgWAAgTgLg");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF3300").ss(1.5,2,1).p("ADEhbQAhgTAnAPQAnAMAXAmQANAXACAWQABARgDARQgHAnghAUQggASgogMQgpgPgVgjQgXgnAKgoQAIgqAggTgAjlhgQAnAMAXAnQAVAlgIApQgIApggASQghATgngNQgFgCgEgCQgjgOgTghQgXgnALgnQAIgqAggTQAhgTAnAPg");
	this.shape_4.setTransform(0,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("ADnBjQgpgPgVgjQgXgnAKgoQAIgqAggTQAhgTAnAPQAnAMAXAmQANAXACAWQABARgDARQgHAnghAUQgUALgWAAQgOAAgQgFgAkKBiIgJgEQgjgOgTghQgXgnALgnQAIgqAggTQAhgTAnAPQAnAMAXAnQAVAlgIApQgIApggASQgTALgWAAQgPAAgQgFg");
	this.shape_5.setTransform(0,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFagRQAOAmgTAhQgTAggoAJQgrAIgkgUQgngWgMgpQgPgnATghQATggApgIQAogJAnAWQAXAOANATQAJANAGAQgAiWgTQANAngTAfQgTAhgoAJQgGABgEAAQgmAFgggSQgngXgLgoQgOgnASghQATghApgHQAogJAnAXQAlAVAPAog");
	this.shape_6.setTransform(0.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("ADLBTQgngWgMgpQgPgnATghQATggApgIQAogJAnAWQAXAOANATQAJANAGAQQAOAmgTAhQgTAggoAJQgLADgMAAQgeAAgagPgAknBRQgngXgLgoQgOgnASghQATghApgHQAogJAnAXQAlAVAPAoQANAngTAfQgTAhgoAJIgKABIgQABQgdAAgZgOg");
	this.shape_7.setTransform(0.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFWgzQASAfgLAmQgPApgkAXQgmAWgqgLQgqgHgSghQgTggAOgnQAMgnAngXQAXgMAWgCQARgCARADQAoAIATAigAknhQQAlgVAqAHQApAIASAgQATAggNAnQgCAGgCADQgPAjgfAUQgoAWgogLQgpgHgTggQgUgiAOgmQANgnAngWg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("ADaBdQgqgHgSghQgTggAOgnQAMgnAngXQAXgMAWgCQARgCARADQAoAIATAiQASAfgLAmQgPApgkAXQgaAPgbAAQgNAAgOgEgAkZBcQgpgHgTggQgUgiAOgmQANgnAngWQAlgVAqAHQApAIASAgQATAggNAnIgEAJQgPAjgfAUQgaAPgbAAQgNAAgOgEg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFXAAQAAAsgdAeQgbAigmgBQgmAAgbggQgcgeAAgtQABgZAJgVQAHgPALgNQAbgfAmABQAlgBAcAdQAcAiABAqgAicAAQAAAsgeAeQgaAgglAAQgnABgcggQgageAAgtQAAgqAbghQAbggAlACQAlgBAcAeQAFAGABADQAYAeAAAlg");
	this.shape_10.setTransform(0.1,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AD5BrQgmAAgbggQgcgeAAgtQABgZAJgVQAHgPALgNQAbgfAmABQAlgBAcAdQAcAiABAqQAAAsgdAeQgbAhgkAAIgCAAgAk8BLQgageAAgtQAAgqAbghQAbggAlACQAlgBAcAeIAGAJQAYAeAAAlQAAAsgeAeQgaAgglAAIgDAAQglAAgbgfg");
	this.shape_11.setTransform(0.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF3300").ss(1.5,2,1).p("AFbgTQAQAngUAgQgTAhgpAIQgoAJgngWQgWgOgOgSQgJgOgGgQQgNgmAUggQASghAmgJQAsgIAmAVQAmAWALAogAiYgSQAPAngTAfQgTAjgqAIQgnAHgmgWQglgVgQgoQgOgmAUggQASggAogJQAIgBADgBQAmgFAhATQAmAWALAog");
	this.shape_12.setTransform(-0.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AkmBQQglgVgQgoQgOgmAUggQASggAogJIALgCQAmgFAhATQAmAWALAoQAPAngTAfQgTAjgqAIQgJACgJAAQgeAAgdgRgADMBQQgWgOgOgSQgJgOgGgQQgNgmAUggQASghAmgJQAsgIAmAVQAmAWALAoQAQAngUAgQgTAhgpAIQgMACgLAAQgcAAgcgPg");
	this.shape_13.setTransform(-0.1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF3300").ss(1.5,2,1).p("ADZhdQArgIAmAVQAmAWALAoQAQAngTAgQgTAhgqAIQgnAJgogWQgVgOgOgSQgJgOgHgQQgNgmAUggQASghAngJgAiNAAQABAmggAdQgeAZgsAAQgrAAgigbQgggbACglQAAgkAegcQAGgFACgCQAegXAmAAQAsAAAeAdQAhAbgBAlg");
	this.shape_14.setTransform(-0.1,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("ADMBRQgVgOgOgSQgJgOgHgQQgNgmAUggQASghAngJQArgIAmAVQAmAWALAoQAQAngTAgQgTAhgqAIQgLACgMAAQgcAAgcgPgAlDBBQgggbACglQAAgkAegcIAIgHQAegXAmAAQAsAAAeAdQAhAbgBAlQABAmggAdQgeAZgsAAQgrAAgigbg");
	this.shape_15.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-10.3,73.3,20.7);


(lib.wheel3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgEAKIgEgDIAAAAIAAgBQgEgCAAgEIAAAAIAAAAQABgEACgCIABAAIABgBIAEgCIADAAIAEAAIAEACIABABQADACAAADIABABIgBADIgDAEIAAAAIgCACIgEABIgDAAIgEAAg");
	this.shape.setTransform(-0.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D1908").s().p("AAAAPIgEgBQgEAAgEgDIgCgCQgCgEgBgEIAAgBIACgFIADgFIAAAAIABgBQAEgCAEgBIADAAIAEAAQAFABAEADIAAABQADACABAEIAAADIgBAGIgDAFIgBABQgFADgFAAIgCAAgAgMAAIAAAAIAAAAQAAAEAEACIAAABIAAAAIAEADIAEAAIADAAIAEgBIACgCIAAAAIADgEIABgDIgBgBQAAgDgDgCIgBgBIgEgCIgEAAIgDAAIgEACIgBABIgBAAQgCACgBAEg");
	this.shape_1.setTransform(-0.1,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhOBNQgSgRgHgUQgIgTAAgVQAAgnAbgeIAGgGQAfgfAtAAIACAAQAugBAhAgQAhAfAAAsQAAAhgSAbIgBAAQgGAIgIAJQghAeguAAQgtAAghgegAAAAUIABAAIgIBDIAHAAQAmABAbgaIABAAIAIgKIg/gkIABgBIADgFIA/AlQAOgWAAgZQAAgTgIgRIhEAkQgBgCgDgDIBEglQgGgKgJgIQgbgaglAAIACBMIgDAAIgEAAIgBhMQgjABgZAZIAAgBIgCADIA3A0IgBAAIAAABIgDAFIg4g0QgTAWAAAeQAAAQAFAOIBEgZQABAEACAEIhEAYQAGANAMAMQAWAUAcAEIAKhDIAFABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("Ag1BdQgogXgNgrQgGgYADgUQACgUALgSQAUgjAmgMIAIgDQAqgKAnAVIADACQAoAXAMArQANArgWAnQgRAdgdAOIgBAAQgJAEgLADQgNADgNAAQgdAAgcgQgAgKAQIACABIgqA3IAHAEQAiATAigJIAAAAIANgEIglg/IACAAQADgBACgCIAlBAQAWgMAMgWQAKgSACgSIhNgCQABgEgBgDIBNABQgBgKgDgMQgKgjgggUIglBEIgEgCIgDgBIAlhEQgegPghAIIgDABIAWBIIgBAAIAAABQgEAAgDACIgVhJQgcAKgQAbQgHANgDAPIBHAOQgBADAAAEIhHgOQgCAOAFARQAJAcAWASIAqg2IAEADg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AABALIgDgBIgCgBIgEgDIgCgEIAAgBQgCgCACgEIAAAAIABgBQACgDADgBIACAAIAEABIADABIADACIADAFIABABQABACgBADIgBACIgCACIgEACIAAAAIgEAAg");
	this.shape_4.setTransform(-0.3,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D1908").s().p("AgFAOIgCgBIgEgDQgDgDgBgEIgBgCQAAgEABgDIABgBIADgFQADgCAEAAIAAgBIABAAQADAAAEACIADABIAEACQAEADABAFIABABQABACgBAEIgCAEIgEAEQgCACgDABIgCAAIgCAAQgDAAgEgCgAgJgGIgBABIAAAAQgCAEACACIAAABIACAEIAEADIACABIADABIAEAAIAAAAIAEgCIACgCIABgCQABgDgBgCIgBgBIgDgFIgDgCIgDgBIgEgBIgCAAQgDABgCADg");
	this.shape_5.setTransform(-0.3,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgFBvIAAgBIgVgDQgrgNgXgpQgYgoALgrQAGgXANgRQANgQASgLQAjgUAmAJIAIABQArAOAXAlIABADQAYApgMAqQgKAsgnAWQgZAPgcAAIgIAAgAAABbQAYABAWgNQARgKALgQIhCgoQADgCAAgDIBDAnQAFgKADgMQAIgjgRghIhCApIgCgEIgCgCIBBgpQgSgcghgKIgDAAIgSBJIAAgBIAAABQgEgCgDABIARhKQgcgGgbAQQgNAIgKALIA3AwQgDABgDAFIg1gwQgJAMgFARQgGAbAKAbIA/gaIADAGIABABIhAAaIAEAIQAUAhAjAKIAAAAIANADIAAhJIABAAQADACADgBg");
	this.shape_6.setTransform(0,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3300").s().p("AgBAMIAAAAIgDgBIgDgDIgBgDIgCgEIAAgEIABAAQAAgEAEgCIAAAAIAAgBQAEgCACACIACAAIADADIACADIADAEIAAAEIAAABQgBADgCACIgCABIgDABIgBAAIgDAAg");
	this.shape_7.setTransform(-0.4,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D1908").s().p("AgCAQIgBAAQgGgCgCgFIgBgBIgDgGQgBgDABgEIAAgCQADgFADgBIABgBIAFgCQADgBADACIAAgBIABABQAEABADAFIACACIACAEQACADgCAFIAAACQAAADgDACIgDAEIgGABIgBAAIgEgBgAADAMIADgBIACgBQACgCABgEIAAAAIAAgFIgDgEIgCgCIgDgDIgCgBQgCgBgEABIAAABIAAABQgEACAAADIgBABIAAADIACAFIABACIADADIADACIAAgBIAEABg");
	this.shape_8.setTransform(-0.4,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3300").s().p("AAAAMIgCgBIgEgCIgCgCIgBgEIAAgDIAAgFIADgDIABAAQACgDADAAIAAgBIABAAQAEAAACAEIABABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAAADIAAAEIgCAFIgBAAIgFADIgBABIgBgBg");
	this.shape_9.setTransform(-0.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D1908").s().p("AgFARQgCgBgDgEIgBAAQgDgFAAgFIAAgCIAAgFQABgEADgDIACgCQAEgDAEAAIAAAAIAFACQADAAADADIAAAAIABABQACADABAFIAAADIAAAEQAAAEgEAEIgBACQgCACgEAAIgEACIgFgBgAAAgLQgDAAgCADIgBAAIgDADIAAAFIAAADIABAEIACACIAEACIACABIACAAIAFgDIABAAIACgFIAAgEIAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgBgBQgCgEgEAAIgBAAg");
	this.shape_10.setTransform(-0.4,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("Ag8BeIAAgBQgIgFgIgIQgeghgBguQAAguAfghQASgRATgIQATgIAUAAQAoAAAdAbIAHAGQAfAgAAAsIABADQAAAuggAgQgfAhgtAAQghAAgbgSgAgJAQIglA/QAWANAYABQAUgBARgIIglhEQAEAAACgCIAlBCQAKgGAJgIQAZgbABglIhNACIAAgEIgBgDIBNgCQgBgigZgZIgCgCIgzA3IgBgBIgBAAQgCgDgDAAIA1g4QgXgUgfAAQgOABgPAEIAYBFQgDAAgFADIgWhFQgOAHgMAMQgUAVgFAcIBEAKIAAAFIgBACIhEgJIAAAIQABAmAZAbIAAAAIAKAJIAkg/IABAAQACAEADAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-10.7,22.4,21.5);


(lib.wheel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.4,2,1).p("AADgKIgChNQAmABAaAZQAJAJAGAJIhEAmAAAhrQgBAAgBAAQgtABggAfQgDACgCAEQgbAeAAAnQAAAVAIATQAHAUARARQAhAfAuAAQAvAAAggfQAIgIAGgIIABAAQASgbAAgiQAAgsghgfQgggggvAAgAAQAAIBEgkQAIARAAATQAAAagNAVIg/glAALAQIA/AlQgEAEgEAFIgBAAQgaAagnAAQgEAAgEAAIAJhEAgSAGIhEAYQgFgOAAgQQAAgeATgXIA3A1AgMgHIg3g0QABgBABgBIAAAAQAZgYAigBIACBMAgGATIgJBEQgcgFgWgUQgMgMgGgNIBEgY");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAPIgEgBQgEAAgEgDIgCgCQgCgEgBgEIAAgBIACgFIADgFIAAAAIABgBQAEgCAEgBIADAAIAEAAQAFABAEADIAAABQADACABAEIAAADIgBAGIgDAFIgBABQgFADgFAAIgCAAgAgMAAIAAAAIAAAAQAAAEAEACIAAABIAAAAIAEADIAEAAIADAAIAEgBIACgCIAAAAIADgEIABgDIgBgBQAAgDgDgCIgBgBIgEgCIgEAAIgDAAIgEACIgBABIgBAAQgCACgBAEg");
	this.shape_1.setTransform(-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheel2, new cjs.Rectangle(-12.2,-11.7,24.4,23.5), null);


(lib.bell1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AhOgGIAHAAICPgFIAGAAIABARIicAGg");
	this.shape.setTransform(0,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhEgQQAPgwAzAAQAyAAASAvQANAggGAtIiPAFQgKgvAMgig");
	this.shape_1.setTransform(-0.1,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhLgJQAGgzAygIQAygJAZAsQAUAeABArIiMAfQgSgtAGgjg");
	this.shape_2.setTransform(1.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AhPAIIAIgCICMgeIAGgBIAFASIiaAhg");
	this.shape_3.setTransform(2.4,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AhOAAIACgTIAHABICOASIAGABIgCATg");
	this.shape_4.setTransform(-1.1,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhLAyQgCgwASggQAXgtAxAIQAzAJAJAyQAIAjgOAqg");
	this.shape_5.setTransform(-0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-7.5,15.9,15);


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


(lib.thirtysix36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BbQgWgaAAg7QAAhCAZgdQAVgbAjAAQAcAAARAPQARAQADAaIgbACQgEgQgHgIQgMgMgQAAQgNAAgKAHQgNAKgIATQgHASgBAjQAKgPAPgIQAPgHAPAAQAcgBAUAVQAUAUAAAgQAAAWgKATQgJASgQAKQgRAKgUAAQgiAAgXgagAgdADQgNAOAAAWQAAAPAGAMQAGAOALAHQALAHALAAQASAAANgOQANgPAAgZQAAgYgNgNQgNgMgTAAQgSAAgNAMg");
	this.shape.setTransform(8.8,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgMACIAEgXIAEAAQARAAAPgJQAOgKAAgTQAAgPgLgLQgKgKgQAAQgQAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQASAAAQAIQAQAIAJAOQAHAOABAPQgBAPgHAMQgIANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape_1.setTransform(-8.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag5BgQgXgdAAhBQAAhCAYgeQAZgdAnAAQAbAAATAPQASAQAFAdIgtAFQgCgNgHgHQgHgHgLAAQgOAAgKAOQgKANgDAqQARgVAZAAQAeAAAUAWQAVAWAAAjQAAAlgWAXQgWAWgiAAQgkAAgYgcgAgTAHQgJALAAAUQAAAXAKAMQALANAMAAQANAAAJgKQAJgLAAgXQAAgXgKgLQgJgKgOAAQgMAAgKAJg");
	this.shape_2.setTransform(9.6,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_3.setTransform(-9.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.thirtyseven37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgpBxQAAgbALgmQAKgnATgiQASgkAVgYIhvAAIAAgbICTAAIAAAWQgWAXgVAmQgWAmgKApQgJAdgCAig");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgMACIAEgXIAEAAQARAAAPgJQAOgKAAgTQAAgPgLgLQgKgKgQAAQgQAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQASAAAQAIQAQAIAJAOQAHAOABAPQgBAPgHAMQgIANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape_1.setTransform(-8.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("AguB4QABgzAUg0QATgzAggpIhpAAIAAgsICfAAIAAAiQgUATgUAlQgVAjgKApQgKApAAAgg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_3.setTransform(-9.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.thirtynine39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("AgyBmQgRgPgDgbIAbgDQADAUAKAIQAKAJAPAAQAMAAAKgGQAJgGAHgKQAGgKAEgRQAEgQAAgSIAAgGQgIAOgPAIQgPAJgQAAQgcAAgUgWQgTgTAAgiQAAgiAUgWQAVgVAfAAQAVAAATAMQASAMAKAXQAJAVAAArQAAAqgJAbQgKAZgTAOQgTAOgYAAQgbAAgRgPgAgghOQgOAQAAAYQAAAWAOAOQANANATAAQATAAAMgNQANgOAAgYQAAgYgNgOQgNgPgSAAQgSAAgOAPg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgMACIAEgXIAEAAQARAAAPgJQAOgKAAgTQAAgPgLgLQgKgKgQAAQgQAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQASAAAQAIQAQAIAJAOQAHAOABAPQgBAPgHAMQgIANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape_1.setTransform(-8.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BtQgSgPgFgfIAtgEQACANAHAHQAHAHALAAQAOAAAKgOQAKgNADgqQgSAVgZAAQgdAAgVgWQgUgWAAgjQAAglAWgXQAWgXAiAAQAkABAXAdQAYAcAABBQAABCgZAeQgYAegngBQgdAAgRgPgAgahKQgJAJAAAYQAAAYAKAKQAJALAOAAQAMAAAKgKQAJgLAAgUQAAgXgLgMQgKgMgNAAQgNgBgIALg");
	this.shape_2.setTransform(9.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_3.setTransform(-9.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.thirtyfive35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag0BiQgUgSgDgdIAegDQADAWAMALQAMALARAAQATAAAOgQQAOgPAAgZQAAgYgNgNQgOgOgVAAQgNAAgLAGQgLAGgHAJIgagEIAWh0IBxAAIAAAbIhaAAIgNA9QAVgOAWAAQAeAAAUAVQAVAUAAAhQAAAegSAXQgWAcglAAQggAAgTgRg");
	this.shape.setTransform(8.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgMACIAEgXIAEAAQARAAAPgJQAOgKAAgTQAAgPgLgLQgKgKgQAAQgQAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQASAAAQAIQAQAIAJAOQAHAOABAPQgBAPgHAMQgIANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape_1.setTransform(-8.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag4BoQgVgSgEgeIAugGQACAQALAKQAJAJANAAQANAAALgMQAKgMAAgYQAAgXgKgKQgKgKgQAAQgTAAgRAQIglgGIAXh9IB7AAIAAAsIhXAAIgHApQAQgIAOAAQAfAAAWAWQAWAXAAAkQAAAdgSAYQgXAggqAAQghAAgWgSg");
	this.shape_2.setTransform(9.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_3.setTransform(-9.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


(lib.thirtyeight38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BhQgWgUAAgeQAAgWAMgPQALgPAVgFQgSgGgIgNQgJgLAAgRQAAgZASgRQATgRAdAAQAdAAATASQASARAAAZQAAAQgIALQgIANgSAGQAVAGAMAPQALAQgBAVQAAAdgUAUQgVAUgiAAQghAAgUgUgAghAOQgMANAAAUQgBAMAGALQAGAMALAFQAMAHAMAAQATAAAOgNQANgNAAgUQAAgVgOgNQgOgNgTAAQgUAAgNANgAgahTQgKALAAAOQAAAQAKAKQAKALAQAAQARAAAKgKQAKgLAAgPQAAgPgKgKQgMgLgPAAQgQAAgKAKg");
	this.shape.setTransform(8.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").s().p("AgzBjQgUgSgDgcIAcgEQAFAXALALQAMALARAAQATAAANgOQAOgNAAgVQAAgTgNgNQgMgMgTAAQgIAAgMACIAEgXIAEAAQARAAAPgJQAOgKAAgTQAAgPgLgLQgKgKgQAAQgQAAgLAKQgLALgDAVIgcgGQAFgcASgQQASgPAbAAQASAAAQAIQAQAIAJAOQAHAOABAPQgBAPgHAMQgIANgQAHQAUAEAMAPQALAOAAAXQAAAegWAUQgWAVggAAQgeAAgUgSg");
	this.shape_1.setTransform(-8.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.902)").s().p("Ag1BrQgagUAAgkQAAgUAJgRQALgPAVgKQgTgHgIgNQgIgNAAgRQAAgbATgSQATgSAjAAQAiAAATASQATASAAAbQAAASgJANQgJAMgQAHQAVAJALAPQAKAPAAAVQAAAhgWAVQgVAWgkgBQggAAgWgRgAgZAVQgIALAAAOQAAATAJALQALALANAAQAOAAAKgKQAKgLAAgUQAAgQgKgLQgKgLgOAAQgQABgJAMgAgVhPQgIAJAAANQAAAOAIAHQAIAJANgBQAMABAIgJQAIgHAAgOQAAgNgIgJQgHgHgNAAQgNAAgIAHg");
	this.shape_2.setTransform(9.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3BpQgVgTgEgeIAtgGQACARAKAKQAJAJAOAAQANAAAKgLQAKgLAAgTQAAgRgKgLQgJgKgOAAQgIAAgMAEIAFgmQASABAKgJQAKgIAAgPQAAgMgHgHQgIgIgLAAQgMAAgIAJQgJAIgBAQIgrgIQAEgWAJgNQAJgNAQgHQAQgIAVAAQAhAAAVAWQARASAAAWQAAAggjATQAVAFAMAPQANAPAAAWQAAAggYAXQgXAWgiAAQghAAgWgTg");
	this.shape_3.setTransform(-9.5,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,255,0,0.925)").s().p("AkrDhIAAnBIJXAAIAAHBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-19.9,49,39.8);


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


(lib.Train2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bell1();
	this.instance.parent = this;
	this.instance.setTransform(114.7,-102.1,1.286,1.286,0,0,180);

	this.instance_1 = new lib.WheelSmall1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-171.8,98,1.286,1.286,0,0,180,0,0.1);

	this.instance_2 = new lib.wheel3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.4,73.8,3.538,3.538,0,0,180);

	this.instance_3 = new lib.wheel3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.1,75.9,3.538,3.538,0,-20.9,159.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AN8K6IlQACIkAACIinoGICAAAICWAAIHfH/AGgK6Ijon+AFVC9IGJH7AIsK8IknoEAt7q9IAANC");
	this.shape.setTransform(194.9,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5D1908").ss(1,2,1).p("AFNlpIAALeIC9AAIAAregAoJl+QCBEHAKH2IJ7AAIAAr9g");
	this.shape_1.setTransform(33.8,-67.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("Au7K1IAA1pId3AAIAAVpgAj/BsIIOAAIAAguIgYAAIAAo9IngAAIAAI9IgWAAgAE+BqIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IgYAAgAtBBqIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IgZAAg");
	this.shape_2.setTransform(-170.8,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C8484").s().p("AhhGxIAAthIAJAAQF1HEl1Gdg");
	this.shape_3.setTransform(233,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkEAhIAAhBIIIAAIAABBg");
	this.shape_4.setTransform(191.5,-35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ak4MHIAAtgIJxAAIAANggAkHAmIIIAAIAAhCIoIAAgAhxiLIAAlUIDZAAIAAFUgAiPoQIg2j2IGHAAIhPEKg");
	this.shape_5.setTransform(191.8,-36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3300").s().p("ATiMnIAAgNIAAtCIAAgRIIkAAIAANggAiWMnQFKs5lKr1IUhAAIAAYugACdE1IOdAAIAAiLIudAAgACUBkIJ9AAIAAr9IsHAAQCAEHAKH2gANhBaIC9AAIAArdIi9AAgA7pG2IAAguIAWAAIHhAAIAYAAIAAAugAyrG0IAAgtIAYAAIHeAAIAZAAIAAAtgEgkrAG0IAAgtIAYAAIHgAAIAXAAIAAAtgEAkCgLmImJAAIgmAAIAAhAIHZAAIAABAg");
	this.shape_6.setTransform(-19.3,-39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D1908").s().p("EAi5AQjIAAhbI5zAAIAAlIIcbAAIAAE1IBHAAIAABugA98P1IAAh2ISEAAIAAB2gAnaPGIAAheIFPAAIAABegEgmnAPGIAAheIFQAAIAABegAjiM9IAAjNIJBAAIAADNgAl9M2IAAhWIBWAAIAABWgEglOAM2IAAhWIBVAAIAABWgAFNBxIAAiKIOcAAIAACKgEgkpgJOIAAhsIfhAAIAABsgAjBvUIAAhOIZnAAIAABOg");
	this.shape_7.setTransform(-36.9,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Train2, new cjs.Rectangle(-284.1,-125.5,569.5,251.1), null);


(lib.smokecloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);
	this.instance.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,scaleX:2.34,scaleY:2.34,x:-212.5,y:-124.6,alpha:0.031},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-10.4,41,20.8);


// stage content:
(lib.CCKCC25d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.thirtyfive35.addEventListener("click", fl_ClickToGoToAndStopAtFrame_77.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_77()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.thirtysix36.addEventListener("click", fl_ClickToGoToAndStopAtFrame_78.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_78()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.thirtyseven37.addEventListener("click", fl_ClickToGoToAndStopAtFrame_79.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_79()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.thirtyeight38.addEventListener("click", fl_ClickToGoToAndStopAtFrame_80.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_80()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.thirtynine39.addEventListener("click", fl_ClickToGoToAndStopAtFrame_81.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_81()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.forty40.addEventListener("click", fl_ClickToGoToAndStopAtFrame_82.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_82()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.fortyone41.addEventListener("click", fl_ClickToGoToAndStopAtFrame_83.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_83()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.fortytwo42.addEventListener("click", fl_ClickToGoToAndStopAtFrame_84.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_84()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.fortythree43.addEventListener("click", fl_ClickToGoToAndStopAtFrame_85.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_85()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.fortyfour44.addEventListener("click", fl_ClickToGoToAndStopAtFrame_86.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_86()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.fortyfive45.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(11);
		}
	}
	this.frame_11 = function() {
		this.fortyfive45.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(44));

	// Numbers All
	this.fortyfive45 = new lib.fortyfive45();
	this.fortyfive45.parent = this;
	this.fortyfive45.setTransform(147.6,314.1);
	new cjs.ButtonHelper(this.fortyfive45, 0, 1, 2, false, new lib.fortyfive45(), 3);

	this.fortyfour44 = new lib.fortyfour44();
	this.fortyfour44.parent = this;
	this.fortyfour44.setTransform(109.1,423.6);
	new cjs.ButtonHelper(this.fortyfour44, 0, 1, 2, false, new lib.fortyfour44(), 3);

	this.fortythree43 = new lib.fortythree43();
	this.fortythree43.parent = this;
	this.fortythree43.setTransform(182,423.6);
	new cjs.ButtonHelper(this.fortythree43, 0, 1, 2, false, new lib.fortythree43(), 3);

	this.fortytwo42 = new lib.fortytwo42();
	this.fortytwo42.parent = this;
	this.fortytwo42.setTransform(291,365.1);
	new cjs.ButtonHelper(this.fortytwo42, 0, 1, 2, false, new lib.fortytwo42(), 3);

	this.fortyone41 = new lib.fortyone41();
	this.fortyone41.parent = this;
	this.fortyone41.setTransform(388.5,423.6);
	new cjs.ButtonHelper(this.fortyone41, 0, 1, 2, false, new lib.fortyone41(), 3);

	this.forty40 = new lib.forty40();
	this.forty40.parent = this;
	this.forty40.setTransform(470.5,423.6);
	new cjs.ButtonHelper(this.forty40, 0, 1, 2, false, new lib.forty40(), 3);

	this.thirtynine39 = new lib.thirtynine39();
	this.thirtynine39.parent = this;
	this.thirtynine39.setTransform(572.5,398.5);
	new cjs.ButtonHelper(this.thirtynine39, 0, 1, 2, false, new lib.thirtynine39(), 3);

	this.thirtyeight38 = new lib.thirtyeight38();
	this.thirtyeight38.parent = this;
	this.thirtyeight38.setTransform(587,284.1);
	new cjs.ButtonHelper(this.thirtyeight38, 0, 1, 2, false, new lib.thirtyeight38(), 3);

	this.thirtyseven37 = new lib.thirtyseven37();
	this.thirtyseven37.parent = this;
	this.thirtyseven37.setTransform(508,142.1);
	new cjs.ButtonHelper(this.thirtyseven37, 0, 1, 2, false, new lib.thirtyseven37(), 3);

	this.thirtysix36 = new lib.thirtysix36();
	this.thirtysix36.parent = this;
	this.thirtysix36.setTransform(144.1,165.1);
	new cjs.ButtonHelper(this.thirtysix36, 0, 1, 2, false, new lib.thirtysix36(), 3);

	this.thirtyfive35 = new lib.thirtyfive35();
	this.thirtyfive35.parent = this;
	this.thirtyfive35.setTransform(341.5,143.1);
	new cjs.ButtonHelper(this.thirtyfive35, 0, 1, 2, false, new lib.thirtyfive35(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.thirtyfive35},{t:this.thirtysix36},{t:this.thirtyseven37},{t:this.thirtyeight38},{t:this.thirtynine39},{t:this.forty40},{t:this.fortyone41},{t:this.fortytwo42},{t:this.fortythree43},{t:this.fortyfour44},{t:this.fortyfive45}]}).to({state:[]},11).to({state:[]},43).wait(1));

	// Numbers
	this.thirtysix36_1 = new lib.thirtysix36();
	this.thirtysix36_1.parent = this;
	this.thirtysix36_1.setTransform(144.1,165.1);
	new cjs.ButtonHelper(this.thirtysix36_1, 0, 1, 2, false, new lib.thirtysix36(), 3);

	this.thirtyseven37_1 = new lib.thirtyseven37();
	this.thirtyseven37_1.parent = this;
	this.thirtyseven37_1.setTransform(508,142.1);
	new cjs.ButtonHelper(this.thirtyseven37_1, 0, 1, 2, false, new lib.thirtyseven37(), 3);

	this.thirtyeight38_1 = new lib.thirtyeight38();
	this.thirtyeight38_1.parent = this;
	this.thirtyeight38_1.setTransform(587,284.1);
	new cjs.ButtonHelper(this.thirtyeight38_1, 0, 1, 2, false, new lib.thirtyeight38(), 3);

	this.thirtynine39_1 = new lib.thirtynine39();
	this.thirtynine39_1.parent = this;
	this.thirtynine39_1.setTransform(572.5,398.5);
	new cjs.ButtonHelper(this.thirtynine39_1, 0, 1, 2, false, new lib.thirtynine39(), 3);

	this.forty40_1 = new lib.forty40();
	this.forty40_1.parent = this;
	this.forty40_1.setTransform(470.5,423.6);
	new cjs.ButtonHelper(this.forty40_1, 0, 1, 2, false, new lib.forty40(), 3);

	this.fortyone41_1 = new lib.fortyone41();
	this.fortyone41_1.parent = this;
	this.fortyone41_1.setTransform(388.5,423.6);
	new cjs.ButtonHelper(this.fortyone41_1, 0, 1, 2, false, new lib.fortyone41(), 3);

	this.fortytwo42_1 = new lib.fortytwo42();
	this.fortytwo42_1.parent = this;
	this.fortytwo42_1.setTransform(291,365.1);
	new cjs.ButtonHelper(this.fortytwo42_1, 0, 1, 2, false, new lib.fortytwo42(), 3);

	this.fortythree43_1 = new lib.fortythree43();
	this.fortythree43_1.parent = this;
	this.fortythree43_1.setTransform(182,423.6);
	new cjs.ButtonHelper(this.fortythree43_1, 0, 1, 2, false, new lib.fortythree43(), 3);

	this.fortyfour44_1 = new lib.fortyfour44();
	this.fortyfour44_1.parent = this;
	this.fortyfour44_1.setTransform(109.1,423.6);
	new cjs.ButtonHelper(this.fortyfour44_1, 0, 1, 2, false, new lib.fortyfour44(), 3);

	this.fortyfive45_1 = new lib.fortyfive45();
	this.fortyfive45_1.parent = this;
	this.fortyfive45_1.setTransform(147.6,314.1);
	new cjs.ButtonHelper(this.fortyfive45_1, 0, 1, 2, false, new lib.fortyfive45(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.thirtysix36_1}]},1).to({state:[{t:this.thirtyseven37_1}]},1).to({state:[{t:this.thirtyeight38_1}]},1).to({state:[{t:this.thirtynine39_1}]},1).to({state:[{t:this.forty40_1}]},1).to({state:[{t:this.fortyone41_1}]},1).to({state:[{t:this.fortytwo42_1}]},1).to({state:[{t:this.fortythree43_1}]},1).to({state:[{t:this.fortyfour44_1}]},1).to({state:[{t:this.fortyfive45_1}]},1).to({state:[]},1).to({state:[]},43).wait(1));

	// Train
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("ADaqUIAALeIC+AAIAAregAJapDQgIg5ARgrQAXg9BCAAQBCAAATA+QAOAtgNA9IALAAIgDAZIjJgJIABgXIAIAAIC4AHAG0ElIAAiLIucAAIAACLgAscMXIUhAAIAA4uI0hAAQAYA3AUA3QA2CQAeCRQBHFdg/FqQgGAlgIAlQgCAIgCAIQgFAbgHAbQgEAPgDAOQgiCDgzCFQgHASgHARgACKBUIAAr9IsGAAQA7B4AiCpQAMA9AJBCQAVCeAEC/g");
	this.shape.setTransform(361.8,243.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,1).p("AY5qUIi9AAIAALeIC9AAgAe0o8IAKAAIgCAZIjKgJIABgXIAIAAQgIg5ASgrQAWg9BCAAQBCAAATA+QAPAtgNA9gAb7pDIC5AHAZVElIAAiLIucAAIAACLgAamsXI0iAAQAYA3AVA3QA1CQAeCRQBHFdg/FqQgGAlgIAlQgBAIgCAIQgGAbgHAbQgDAPgEAOQgiCDgzCFQgHASgHARIUiAAgAUsqpIsHAAQA6B4AiCpQAMA9AJBCQAVCeAEC/IJ9AAgAAioGI/fAAIAABrIffAAg");
	this.shape_1.setTransform(243.3,243.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,2,1).p("EAgkgG/IAAFUIDbAAIAAlUgAfQrmIA2D3IEEATIBPkKIAqAAIAAhBInZAAIAABBgEAlZgLmImJAAAR0qDIi9AAIAALdIC9AAgAXvorIALAAIgDAYIjKgIIACgYIAIAAQgIg5ARgrQAXg9BCAAQBCAAATA+QAOAtgNA+gAU3ozIC4AIASRE1IAAiLIudAAIAACLgATisGI0hAAQAYA2AUA4QA0CPAeCSQBIFcg/FqQgHAlgHAlQgCAIgCAIQgGAbgGAbQgEAPgDAOQgiCDgyCGQgHARgHASIUhAAgANnqZIsHAAQA7B4AiCqQAMA8AJBCQAVCeAEC/IJ8AAgAmhn2I/hAAIAABsIfhAAg");
	this.shape_2.setTransform(288.5,242.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,2,1).p("AdIrmIA1D3IEEATIBPkKIAqAAIAAhBInZAAIAABBgAecm/IAAFUIDaAAIAAlUgEAjQgLmImIAAAMvqDIAALdIC9AAIAArdgAVnorIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgrQAWg9BCAAQBCAAATA+QAPAtgNA+gASuozIC5AIAQIE1IAAiLIucAAIAACLgAbUg5IojAAIAANhIIjAAIJzAAIAKAAQF1mel1nDIgKAAIAANhAbUg5IAANhARZsGI0hAAQAYA2AVA4QAAABABACIAfBZQABAEABADQAdBeAUBgQBHFcg/FqQgGAlgIAlQgBAIgCAIQgGAbgHAbQgDAPgEAOQgiCDgzCGQgHARgHASIUhAAgEAlHgA5IpzAAALfBkIAAr9IsGAAQABACABABQAAACABACIAkBYQAAACABADQABADABADQAZBHASBUQADAOADAPQAMA8AJBCQAVCeAEC/gAoqn2I/gAAIAABsIfgAAg");
	this.shape_3.setTransform(302.2,242.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,2,1).p("AZ5v8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgAbNrUIAAFUIDaAAIAAlUgEAgBgP8ImIAAAJguZIAALeIC9AAIAAregASYtBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAPftJIC5AIAM5AfIAAiKIubAAIAACKgAYFlPIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhAYFlPIAANhEAmKAQ7IkPnZIgYgrICWAAIFiF5IB9CGEAmKAQ7IkAACIgPguIhplFIgoh7IgHgYICAAAEAj+AQ5IiDkgIhljeEAraAQ5IlQACEAizAI8IGJH7EAh4gFPIpzAAAOKISIAA4uI0hAAQAYA3AVA3QAAABABACIAfBaQABADABADQAdBeAUBgQBHFcg/FqQgGAlgIAlQgBAIgCAJQgGAagHAbQgDAPgEAOQgiCEgzCFQgHARgHASgAIQixIAAr+IsGAAQABACAAACQABABABACIAkBYQABACABADQABADABADQAZBHASBUQADAOADAPQAMA8AJBCQAVCeAEDAgAr5sMI/gAAIAABsIfgAAg");
	this.shape_4.setTransform(322.9,270);

	this.instance = new lib.wheel2();
	this.instance.parent = this;
	this.instance.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_1 = new lib.wheel2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_2 = new lib.wheel2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_3 = new lib.wheel2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(384.6,357.4,3.538,3.538,0,-35,145);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,2,1).p("AZ5v8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgAbNrUIAAFUIDaAAIAAlUgEAgBgP8ImIAAAJguZIAALeIC9AAIAAregASYtBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAPftJIC5AIAM5AfIAAiKIubAAIAACKgAYFlPIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhACWN2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAYFlPIAANhEAmKAQ7IkPnZIgYgrICWAAIFiF5IB9CGEAmKAQ7IkAACIgPguIhplFIgoh7IgHgYICAAAEAj+AQ5IiDkgIhljeEAraAQ5IlQACEAizAI8IGJH7EAh4gFPIpzAAAlHtGIAqCeQABAEABADQAAADABADQABAHACAHQBHFcg/FqQgGAlgIAlQgBAIgCAJQgGAagHAbQgDAPgEAOQgiCEgzCFQgHARgHASIUhAAIAA4uI0hAAQAYA3AVA3QAAABABACQARAtAOAtIABAFIABABQABACAAADgAjOtNQABABAAABQABADABADQAZBHASBUQADAOADAPQAMA8AJBCQAVCeAEDAIJ8AAIAAr+IsGAAIAAABQACAEACAEQASAmAQAsIABAEQABACAAABgAj2uuQABABAAACQABABABACIABACAjQtUQABAEABADAlJtMQABADABADAqSLrIJCAAIAAjNIpCAAgAr5sMI/gAAIAABsIfgAAg");
	this.shape_5.setTransform(322.9,270);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,2,1).p("Aa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgAcMsUIAAFUIDaAAIAAlUgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIAN4ggIAAiLIubAAIAACLgAZEmPIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAZEmPIAANhEAnJAP7IkPnZIgYgrICWAAIFiF6IB9CFEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7EAi3gGPIpzAAAkIuGIAqCfQABADABADQAAADABADQABAHACAHQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASIUhAAIAA4uI0hAAQAYA3AVA3QAAABABACQARAtAOAtIABAFIABABQABACAAADgAiPuMQABAAAAABQABADABADQAZBHASBUQADAOADAPQAMA8AJBCQAVCeAEDAIJ8AAIAAr+IsGAAIAAABQACAEACAEQASAmAQAsIABAEQABACAAACgAi3vuQABABAAACQABABABACIABACAiRuUQABAEABAEAkKuMQABADABADEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_6.setTransform(316.6,276.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIAN4ggIAAiLIubAAIAACLgAZEmPIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAZEmPIAANhEAiiAH3ICWAAIFiF6IB9CFEAnJAP7IkPnZIgYgrEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AJPjxIAAr+IsGAAQA6B4AiCqQApDLAFERgAlYHSIUhAAIAA4uI0hAAQAYA3AVA3QA1CPAeCSQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEAi3gGPIpzAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgEgjtANjISEAAIAAh2IyEAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgpngLAIAAVpId4AAIAA1pgAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_7.setTransform(316.6,276.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIAN4ggIAAiLIubAAIAACLgAZEmPIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAZEmPIAANhEAiiAH3ICWAAIFiF6IB9CFEAnJAP7IkPnZIgYgrEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AJPjxIAAr+IsGAAQA6B4AiCqQApDLAFERgAlYHSIUhAAIAA4uI0hAAQAYA3AVA3QA1CPAeCSQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEAi3gGPIpzAAEgnUAAxIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAA+VAyIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgEgjtANjISEAAIAAh2IyEAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgpngLAIAAVpId4AAIAA1pgA1VAxIgYAAIAAAtIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IHfAAAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_8.setTransform(316.6,276.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,2,1).p("Aa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgAcMsUIAAFUIDaAAIAAlUgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIAN4ggIAAiLIubAAIAACLgAZEmPIojAAIAANhIIjAAIJzAAIAKAAQF1mdl1nEIgKAAIAANhADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAZEmPIAANhEAnJAP7IkPnZIgYgrICWAAIFiF6IB9CFEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7EAi3gGPIpzAAAlYHSIUhAAIAA4uI0hAAQAYA3AVA3QA1CPAeCSQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgAJPjxIAAr+IsGAAQA6B4AiCqQApDLAFERgA+VAyIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgnUAAxIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgEgpngLAIAAVpId4AAIAA1pgA1VAxIgYAAIAAAtIIPAAIAAgtIgYAAA1VAxIHfAAIAAo/InfAAgAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_9.setTransform(316.6,276.4);

	this.instance_4 = new lib.Train2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(316.9,281.5,1,1,0,0,0,0.3,0);
	this.instance_4.alpha = 0.09;
	this.instance_4._off = true;

	this.instance_5 = new lib.bell1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(431.2,179.4,1.286,1.286,0,0,180);

	this.instance_6 = new lib.WheelSmall1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(144.8,379.4,1.286,1.286,0,0,180,0,0.1);

	this.instance_7 = new lib.wheel3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_8 = new lib.wheel3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(384.6,357.4,3.538,3.538,0,-20.9,159.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,2,1).p("At7q9IAANCAEFC4ICWAAIHfH/AIsK8IkAACIinoGICAAAAGgK6Ijon+AN8K6IlQACIknoEAFVC9IGJH7");
	this.shape_10.setTransform(511.5,308.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5D1908").ss(1,2,1).p("AFNloIAALdIC9AAIAArdgAoJl+QCAEIAKH1IJ8AAIAAr9g");
	this.shape_11.setTransform(350.4,213.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("Au7K1IAA1pId3AAIAAVpgAj/BsIIOAAIAAgtIgYAAIAAo+IngAAIAAI+IgWAAgAE+BrIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IgYAAgAtBBrIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IgZAAg");
	this.shape_12.setTransform(145.8,275.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C8484").s().p("AhhGxIAAthIAJAAQF1HEl1Gdg");
	this.shape_13.setTransform(549.5,279.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AkDAhIAAhBIIHAAIAABBg");
	this.shape_14.setTransform(508.1,245.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D1908").s().p("EAi5AQjIAAhbI5zAAIAAlIIcbAAIAAE1IBHAAIAABugA98P1IAAh2ISEAAIAAB2gAnaPGIAAheIFPAAIAABegEgmnAPGIAAheIFQAAIAABegAjiM9IAAjNIJBAAIAADNgAl9M2IAAhWIBWAAIAABWgEglOAM2IAAhWIBVAAIAABWgAFNBxIAAiKIOcAAIAACKgEgkpgJOIAAhsIfgAAIAABsgAjCvUIAAhOIZoAAIAABOg");
	this.shape_15.setTransform(279.7,261.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF3300").s().p("ATjMnIAAgNIAAtCIAAgRIIjAAIAANggAiWMnQFKs5lKr1IUhAAIAAYugACdE1IOdAAIAAiLIudAAgACUBkIJ9AAIAAr9IsHAAQCAEIAKH1gANhBaIC9AAIAArdIi9AAgA7pG1IAAgtIAWAAIHhAAIAYAAIAAAtgAyrG0IAAgtIAYAAIHfAAIAYAAIAAAtgEgkrAG0IAAgtIAZAAIHfAAIAXAAIAAAtgEAkCgLmImJAAIgmAAIAAhAIHZAAIAABAg");
	this.shape_16.setTransform(297.2,242.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ak5MHIAAtgIJzAAIAANggAkGAmIIHAAIAAhCIoHAAgAhxiLIAAlUIDZAAIAAFUgAiPoQIg2j2IGHAAIhOEKg");
	this.shape_17.setTransform(508.4,245.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4},{t:this.instance,p:{skewX:0,skewY:180,x:467.9,y:355.3}}]},1).to({state:[{t:this.shape_4},{t:this.instance_1,p:{skewX:0,skewY:180,x:467.9,y:355.3}},{t:this.instance,p:{skewX:-35,skewY:145,x:384.6,y:357.4}}]},1).to({state:[{t:this.shape_5},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{skewX:0,skewY:180,x:467.9,y:355.3}},{t:this.instance,p:{skewX:-35,skewY:145,x:384.6,y:357.4}}]},1).to({state:[{t:this.shape_6},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{skewX:0,skewY:180,x:467.9,y:355.3}},{t:this.instance,p:{skewX:-35,skewY:145,x:384.6,y:357.4}}]},1).to({state:[{t:this.shape_7},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{skewX:-35,skewY:145,x:384.6,y:357.4}},{t:this.instance,p:{skewX:0,skewY:180,x:467.9,y:355.3}}]},1).to({state:[{t:this.shape_8},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{skewX:-35,skewY:145,x:384.6,y:357.4}},{t:this.instance,p:{skewX:0,skewY:180,x:467.9,y:355.3}}]},1).to({state:[{t:this.shape_9},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{skewX:-35,skewY:145,x:384.6,y:357.4}},{t:this.instance,p:{skewX:0,skewY:180,x:467.9,y:355.3}}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(2).to({alpha:0.238},0).wait(2).to({alpha:0.352},0).wait(2).to({alpha:0.48},0).wait(2).to({alpha:0.609},0).wait(2).to({alpha:0.672},0).wait(2).to({alpha:0.77},0).to({_off:true},2).wait(28));

	// Smoke
	this.instance_9 = new lib.smokecloud();
	this.instance_9.parent = this;
	this.instance_9.setTransform(509.2,158.8,1,1,0,0,0,2,-0.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).to({_off:true},28).wait(1));

	// Sound Button
	this.instance_10 = new lib.sound_noSound();
	this.instance_10.parent = this;
	this.instance_10.setTransform(52.1,40.5,1,1,0,0,0,12.1,10.5);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({x:612.1,y:50.5},0).to({_off:true},36).wait(1));

	// Border
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_18.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(18).to({_off:true},36).wait(1));

	// Smoke
	this.instance_11 = new lib.smokecloud();
	this.instance_11.parent = this;
	this.instance_11.setTransform(509.2,158.8,1,1,0,0,0,2,-0.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).to({_off:true},36).wait(1));

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