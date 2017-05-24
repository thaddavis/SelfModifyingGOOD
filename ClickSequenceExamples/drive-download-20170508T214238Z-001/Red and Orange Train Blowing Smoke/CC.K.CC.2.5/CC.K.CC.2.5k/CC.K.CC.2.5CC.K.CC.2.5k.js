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


(lib.twentythree23 = function(mode,startPosition,loop) {
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


(lib.twentysix26 = function(mode,startPosition,loop) {
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


(lib.twentyseven27 = function(mode,startPosition,loop) {
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


(lib.twentynine29 = function(mode,startPosition,loop) {
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


(lib.twentyfour24 = function(mode,startPosition,loop) {
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


(lib.twentyeight28 = function(mode,startPosition,loop) {
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


(lib.thirty30 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AN8K6IlQACIkAACIinoGICAAAICWAAIHfH/AGgK6Ijon+AIsK8IknoEAFVC9IGJH7At7q9IAANC");
	this.shape.setTransform(194.9,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5D1908").ss(1,2,1).p("AoJl+QCBEHAKH2IJ7AAIAAr9gAFNlpIAALeIC9AAIAAreg");
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
(lib.CCKCC25CCKCC25k = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.fifteen15.addEventListener("click", fl_ClickToGoToAndStopAtFrame_77.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_77()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.sixteen16.addEventListener("click", fl_ClickToGoToAndStopAtFrame_78.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_78()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.seventeen17.addEventListener("click", fl_ClickToGoToAndStopAtFrame_79.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_79()
		{
			this.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.eighteen18.addEventListener("click", fl_ClickToGoToAndStopAtFrame_80.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_80()
		{
			this.gotoAndStop(4);
		}
	}
	this.frame_4 = function() {
		this.nineteen19.addEventListener("click", fl_ClickToGoToAndStopAtFrame_81.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_81()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.twenty20.addEventListener("click", fl_ClickToGoToAndStopAtFrame_82.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_82()
		{
			this.gotoAndStop(6);
		}
	}
	this.frame_6 = function() {
		this.twentyone21.addEventListener("click", fl_ClickToGoToAndStopAtFrame_83.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_83()
		{
			this.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		this.twentytwo22.addEventListener("click", fl_ClickToGoToAndStopAtFrame_84.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_84()
		{
			this.gotoAndStop(8);
		}
	}
	this.frame_8 = function() {
		this.twentythree23.addEventListener("click", fl_ClickToGoToAndStopAtFrame_85.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_85()
		{
			this.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		this.twentyfour24.addEventListener("click", fl_ClickToGoToAndStopAtFrame_86.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_86()
		{
			this.gotoAndStop(10);
		}
	}
	this.frame_10 = function() {
		this.twentyfive25.addEventListener("click", fl_ClickToGoToAndStopAtFrame_87.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_87()
		{
			this.gotoAndStop(11);
		}
	}
	this.frame_11 = function() {
		this.twentysix26.addEventListener("click", fl_ClickToGoToAndStopAtFrame_88.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_88()
		{
			this.gotoAndStop(12);
		}
	}
	this.frame_12 = function() {
		this.twentyseven27.addEventListener("click", fl_ClickToGoToAndStopAtFrame_89.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_89()
		{
			this.gotoAndStop(13);
		}
	}
	this.frame_13 = function() {
		this.twentyeight28.addEventListener("click", fl_ClickToGoToAndStopAtFrame_90.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_90()
		{
			this.gotoAndStop(14);
		}
	}
	this.frame_14 = function() {
		this.twentynine29.addEventListener("click", fl_ClickToGoToAndStopAtFrame_91.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_91()
		{
			this.gotoAndStop(15);
		}
	}
	this.frame_15 = function() {
		this.thirty30.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(16);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(38));

	// Numbers All
	this.twentyfour24 = new lib.twentyfour24();
	this.twentyfour24.parent = this;
	this.twentyfour24.setTransform(309,142.6);
	new cjs.ButtonHelper(this.twentyfour24, 0, 1, 2, false, new lib.twentyfour24(), 3);

	this.thirty30 = new lib.thirty30();
	this.thirty30.parent = this;
	this.thirty30.setTransform(510,281.6);
	new cjs.ButtonHelper(this.thirty30, 0, 1, 2, false, new lib.thirty30(), 3);

	this.twentynine29 = new lib.twentynine29();
	this.twentynine29.parent = this;
	this.twentynine29.setTransform(449.5,281.6);
	new cjs.ButtonHelper(this.twentynine29, 0, 1, 2, false, new lib.twentynine29(), 3);

	this.twentyeight28 = new lib.twentyeight28();
	this.twentyeight28.parent = this;
	this.twentyeight28.setTransform(343,213.1);
	new cjs.ButtonHelper(this.twentyeight28, 0, 1, 2, false, new lib.twentyeight28(), 3);

	this.twentyseven27 = new lib.twentyseven27();
	this.twentyseven27.parent = this;
	this.twentyseven27.setTransform(147.1,314.6);
	new cjs.ButtonHelper(this.twentyseven27, 0, 1, 2, false, new lib.twentyseven27(), 3);

	this.twentysix26 = new lib.twentysix26();
	this.twentysix26.parent = this;
	this.twentysix26.setTransform(76.6,173.1);
	new cjs.ButtonHelper(this.twentysix26, 0, 1, 2, false, new lib.twentysix26(), 3);

	this.twentyfive25 = new lib.twentyfive25();
	this.twentyfive25.parent = this;
	this.twentyfive25.setTransform(216,173.1);
	new cjs.ButtonHelper(this.twentyfive25, 0, 1, 2, false, new lib.twentyfive25(), 3);

	this.twentythree23 = new lib.twentythree23();
	this.twentythree23.parent = this;
	this.twentythree23.setTransform(452.5,145.6);
	new cjs.ButtonHelper(this.twentythree23, 0, 1, 2, false, new lib.twentythree23(), 3);

	this.twentytwo22 = new lib.twentytwo22();
	this.twentytwo22.parent = this;
	this.twentytwo22.setTransform(554,210.6);
	new cjs.ButtonHelper(this.twentytwo22, 0, 1, 2, false, new lib.twentytwo22(), 3);

	this.twentyone21 = new lib.twentyone21();
	this.twentyone21.parent = this;
	this.twentyone21.setTransform(593,281.6);
	new cjs.ButtonHelper(this.twentyone21, 0, 1, 2, false, new lib.twentyone21(), 3);

	this.twenty20 = new lib.twenty20();
	this.twenty20.parent = this;
	this.twenty20.setTransform(574,401.6);
	new cjs.ButtonHelper(this.twenty20, 0, 1, 2, false, new lib.twenty20(), 3);

	this.nineteen19 = new lib.nineteen19();
	this.nineteen19.parent = this;
	this.nineteen19.setTransform(469.5,417.6);
	new cjs.ButtonHelper(this.nineteen19, 0, 1, 2, false, new lib.nineteen19(), 3);

	this.eighteen18 = new lib.eighteen18();
	this.eighteen18.parent = this;
	this.eighteen18.setTransform(383.5,417.6);
	new cjs.ButtonHelper(this.eighteen18, 0, 1, 2, false, new lib.eighteen18(), 3);

	this.seventeen17 = new lib.seventeen17();
	this.seventeen17.parent = this;
	this.seventeen17.setTransform(251,382.9);
	new cjs.ButtonHelper(this.seventeen17, 0, 1, 2, false, new lib.seventeen17(), 3);

	this.sixteen16 = new lib.sixteen16();
	this.sixteen16.parent = this;
	this.sixteen16.setTransform(144.1,419.1);
	new cjs.ButtonHelper(this.sixteen16, 0, 1, 2, false, new lib.sixteen16(), 3);

	this.fifteen15 = new lib.fifteen15();
	this.fifteen15.parent = this;
	this.fifteen15.setTransform(44.1,382.9);
	new cjs.ButtonHelper(this.fifteen15, 0, 1, 2, false, new lib.fifteen15(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fifteen15},{t:this.sixteen16},{t:this.seventeen17},{t:this.eighteen18},{t:this.nineteen19},{t:this.twenty20},{t:this.twentyone21},{t:this.twentytwo22},{t:this.twentythree23},{t:this.twentyfive25},{t:this.twentysix26},{t:this.twentyseven27},{t:this.twentyeight28},{t:this.twentynine29},{t:this.thirty30},{t:this.twentyfour24}]}).to({state:[]},17).wait(36));

	// Numbers
	this.sixteen16_1 = new lib.sixteen16();
	this.sixteen16_1.parent = this;
	this.sixteen16_1.setTransform(144.1,419.1);
	new cjs.ButtonHelper(this.sixteen16_1, 0, 1, 2, false, new lib.sixteen16(), 3);

	this.seventeen17_1 = new lib.seventeen17();
	this.seventeen17_1.parent = this;
	this.seventeen17_1.setTransform(251,382.9);
	new cjs.ButtonHelper(this.seventeen17_1, 0, 1, 2, false, new lib.seventeen17(), 3);

	this.eighteen18_1 = new lib.eighteen18();
	this.eighteen18_1.parent = this;
	this.eighteen18_1.setTransform(383.5,417.6);
	new cjs.ButtonHelper(this.eighteen18_1, 0, 1, 2, false, new lib.eighteen18(), 3);

	this.nineteen19_1 = new lib.nineteen19();
	this.nineteen19_1.parent = this;
	this.nineteen19_1.setTransform(469.5,417.6);
	new cjs.ButtonHelper(this.nineteen19_1, 0, 1, 2, false, new lib.nineteen19(), 3);

	this.twenty20_1 = new lib.twenty20();
	this.twenty20_1.parent = this;
	this.twenty20_1.setTransform(574,401.6);
	new cjs.ButtonHelper(this.twenty20_1, 0, 1, 2, false, new lib.twenty20(), 3);

	this.twentyone21_1 = new lib.twentyone21();
	this.twentyone21_1.parent = this;
	this.twentyone21_1.setTransform(593,281.6);
	new cjs.ButtonHelper(this.twentyone21_1, 0, 1, 2, false, new lib.twentyone21(), 3);

	this.twentytwo22_1 = new lib.twentytwo22();
	this.twentytwo22_1.parent = this;
	this.twentytwo22_1.setTransform(554,210.6);
	new cjs.ButtonHelper(this.twentytwo22_1, 0, 1, 2, false, new lib.twentytwo22(), 3);

	this.twentythree23_1 = new lib.twentythree23();
	this.twentythree23_1.parent = this;
	this.twentythree23_1.setTransform(452.5,145.6);
	new cjs.ButtonHelper(this.twentythree23_1, 0, 1, 2, false, new lib.twentythree23(), 3);

	this.twentyfour24_1 = new lib.twentyfour24();
	this.twentyfour24_1.parent = this;
	this.twentyfour24_1.setTransform(309,142.6);
	new cjs.ButtonHelper(this.twentyfour24_1, 0, 1, 2, false, new lib.twentyfour24(), 3);

	this.twentyfive25_1 = new lib.twentyfive25();
	this.twentyfive25_1.parent = this;
	this.twentyfive25_1.setTransform(216,173.1);
	new cjs.ButtonHelper(this.twentyfive25_1, 0, 1, 2, false, new lib.twentyfive25(), 3);

	this.twentysix26_1 = new lib.twentysix26();
	this.twentysix26_1.parent = this;
	this.twentysix26_1.setTransform(76.6,173.1);
	new cjs.ButtonHelper(this.twentysix26_1, 0, 1, 2, false, new lib.twentysix26(), 3);

	this.twentyseven27_1 = new lib.twentyseven27();
	this.twentyseven27_1.parent = this;
	this.twentyseven27_1.setTransform(147.1,314.6);
	new cjs.ButtonHelper(this.twentyseven27_1, 0, 1, 2, false, new lib.twentyseven27(), 3);

	this.twentyeight28_1 = new lib.twentyeight28();
	this.twentyeight28_1.parent = this;
	this.twentyeight28_1.setTransform(343,213.1);
	new cjs.ButtonHelper(this.twentyeight28_1, 0, 1, 2, false, new lib.twentyeight28(), 3);

	this.twentynine29_1 = new lib.twentynine29();
	this.twentynine29_1.parent = this;
	this.twentynine29_1.setTransform(449.5,281.6);
	new cjs.ButtonHelper(this.twentynine29_1, 0, 1, 2, false, new lib.twentynine29(), 3);

	this.thirty30_1 = new lib.thirty30();
	this.thirty30_1.parent = this;
	this.thirty30_1.setTransform(510,281.6);
	new cjs.ButtonHelper(this.thirty30_1, 0, 1, 2, false, new lib.thirty30(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sixteen16_1}]},1).to({state:[{t:this.seventeen17_1}]},1).to({state:[{t:this.eighteen18_1}]},1).to({state:[{t:this.nineteen19_1}]},1).to({state:[{t:this.twenty20_1}]},1).to({state:[{t:this.twentyone21_1}]},1).to({state:[{t:this.twentytwo22_1}]},1).to({state:[{t:this.twentythree23_1}]},1).to({state:[{t:this.twentyfour24_1}]},1).to({state:[{t:this.twentyfive25_1}]},1).to({state:[{t:this.twentysix26_1}]},1).to({state:[{t:this.twentyseven27_1}]},1).to({state:[{t:this.twentyeight28_1}]},1).to({state:[{t:this.twentynine29_1}]},1).to({state:[{t:this.thirty30_1}]},1).to({state:[]},2).wait(36));

	// Train
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,1).p("AinAvIFPAAIAAhdIlPAAg");
	this.shape.setTransform(49.3,353.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,1).p("AtXh1IFRAAIAAhdIlRAAgABUBdQAAgxgogjQgqgkg2AAQg6AAgmAkQgqAjAAAxQAAAAAAABQAAADAAACQADAsAnAhQAmAkA6AAQA2AAAqgkQAlghACgsQABgCAAgDQAAgBAAAAgAkshFISEAAIAAh3IyEAAgAHsCwQAmAkA7AAQA2AAAqgkQAmghACgsQAAgCAAgDQAAgBAAAAQAAgxgogjQgqgkg2AAQg7AAgmAkQgqAjAAAxQAAAAAAABQAAADAAACQADAsAnAhg");
	this.shape_1.setTransform(118,370.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,2,1).p("AyNh1IFQAAIAAhdIlQAAgAjiBdQAAgxgogjQgqgkg2AAQg6AAgnAkQgpAjAAAxQAAAAAAABQAAADAAACQADAsAmAhQAnAkA6AAQA2AAAqgkQAmghACgsQAAgCAAgDQAAgBAAAAgApihFISDAAIAAh3IyDAAgAC2CwQAmAkA6AAQA3AAApgkQAmghADgsQAAgCAAgDQAAgBAAAAQAAgxgpgjQgpgkg3AAQg6AAgmAkQgqAjAAAxQAAAAAAABQAAADAAACQADAsAnAhgASOh1IAAhdIlQAAIAABdg");
	this.shape_2.setTransform(149.1,370.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,2,1).p("AJGAJIZyAAIAABaIDwAAIAAhtIhHAAIAAk0I8bAAgEgmnAAGIFQAAIAAhdIlQAAgA38DYQAAgwgogjQgqglg2AAQg6AAgnAlQgpAjAAAwQAAABAAABQAAADAAACQADAsAmAhQAnAkA6AAQA2AAAqgkQAmghACgsQAAgCAAgDQAAgBAAgBgA98A2ISEAAIAAh2IyEAAgAxjEsQAmAkA6AAQA3AAApgkQAmghADgsQAAgCAAgDQAAgBAAgBQAAgwgpgjQgpglg3AAQg6AAgmAlQgqAjAAAwQAAABAAABQAAADAAACQADAsAnAhgAiLAGIAAhdIlQAAIAABdgAjiiCIJBAAIAAjNIpBAAg");
	this.shape_3.setTransform(279.7,357.8);

	this.instance = new lib.wheel2();
	this.instance.parent = this;
	this.instance.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_1 = new lib.wheel2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(384.6,357.4,3.538,3.538,0,-35,145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,2,1).p("ADVAJIZyAAIAABaIDwAAIAAhtIhHAAIAAk0I8bAAgEAiigE2ICWAAIFiF5IBaBgIAjAlEAnJADOIkPnZIgYgrEAnJADOIkAACIgPgvIhplEIgoh7IgHgYICAAAEAk9ADLIiDkfIhljeEAsZADMIlQACEAjygExIGJH6EgsYAAGIFQAAIAAhdIlQAAgA9tDYQAAgwgogjQgqglg2AAQg6AAgnAlQgpAjAAAwQAAABAAABQAAADAAACQADAsAmAhQAnAkA6AAQA2AAAqgkQAmghACgsQAAgCAAgDQAAgBAAgBgEgjtAA2ISEAAIAAh2IyEAAgA3UEsQAmAkA6AAQA3AAApgkQAmghACgsQABgCAAgDQAAgBAAgBQAAgwgpgjQgpglg3AAQg6AAgmAlQgqAjAAAwQAAABAAABQAAADAAACQADAsAnAhgAn8AGIAAhdIlQAAIAABdgApTiCIJCAAIAAjNIpCAAg");
	this.shape_4.setTransform(316.6,357.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,2,1).p("ADVHAIZyAAIAABaIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3ABbIAKAAQA8hCAohDQDVlgk5l8IgKAAgEAnJAKEIkPnZIgYgrICWAAIAWAYIFMFiIBaBgIAjAlEAnJAKEIkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AKCIiDkgIhljeEAsZAKDIlQABEAjyACFIGJH7EgsYAG9IFQAAIAAheIlQAAgA9tKPQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAADAAACQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgCAAgDQAAgBAAgBgEgjtAHtISEAAIAAh3IyEAAgA3ULjQAmAjA6AAQA3AAApgjQAmghACgsQABgCAAgDQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAADAAACQADAsAnAhgAn8G9IAAheIlQAAIAABegApTE0IJCAAIAAjNIpCAAg");
	this.shape_5.setTransform(316.6,313.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7EgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAg");
	this.shape_6.setTransform(316.6,276.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7EgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAg");
	this.shape_7.setTransform(316.6,276.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AlYHSIUhAAIAA4uI0hAAQAYA3AVA3QA1CPAeCSQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAg");
	this.shape_8.setTransform(316.6,276.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AlYHSIUhAAIAA4uI0hAAQAYA3AVA3QA1CPAeCSQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_9.setTransform(316.6,276.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AlYHSIUhAAIAA4uI0hAAQAYA3AVA3QA1CPAeCSQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgEgpngLAIAAVpId4AAIAA1pgAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_10.setTransform(316.6,276.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AlYHSIUhAAIAA4uI0hAAQAYA3AVA3QA1CPAeCSQBHFcg/FrQgGAkgIAlQgBAIgCAJQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEgnUAAxIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAA+VAyIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgEgpngLAIAAVpId4AAIAA1pgA1VAxIgYAAIAAAtIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IHfAAAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_11.setTransform(316.6,276.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIAN4ggIAAiLIubAAIAACLgADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AJPjxIAAr+IsGAAQA6B4AiCqQApDLAFERgAlYHSIUhAAIAA4uI0hAAQAYA3AVA3QANAjALAiQAkBtAXBvQBHFcg/FrQgGAkgIAlIgCALQAAACgBACQAAABAAABQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEgnUAAxIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAA+VAyIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgEgpngLAIAAVpId4AAIAA1pgA1VAxIgYAAIAAAtIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IHfAAAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_12.setTransform(316.6,276.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIAN4ggIAAiLIubAAIAACLgAZEmPIojAAIAANhIIjAAgADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgEAi3AHSIAKAAQA8hDAohDQDVlfk5l8IgKAAgEAnJAP7IkPnZIgYgrICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AJPjxIAAr+IsGAAQA6B4AiCqQApDLAFERgAlYHSIUhAAIAA4uI0hAAQAYA3AVA3QANAjALAiQAkBtAXBvQBHFcg/FrQgGAkgIAlIgCALQAAACgBACQAAABAAABQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEgnUAAxIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAA+VAyIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgjtANjISEAAIAAh2IyEAAgEgpngLAIAAVpId4AAIAA1pgA1VAxIgYAAIAAAtIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IHfAAAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_13.setTransform(316.6,276.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,2,1).p("AcMsUIAAFUIDaAAIAAlUgAa4w8IA1D3IEEATIBPkKIAqAAIAAhAInZAAIAABAgEAhAgQ8ImIAAAKfvZIAALeIC9AAIAAregATXuBIAKAAIgCAYIjKgIIABgYIAIAAQgIg5ASgqQAWg+BCAAQBCAAATA/QAPAtgNA9gAQeuJIC5AIAN4ggIAAiLIubAAIAACLgAZEmPIojAAIAANhIIjAAIJzAAIAKAAQA8hDAohDQDVlfk5l8IgKAAIAANhADVM2IZyAAIAABbIDwAAIAAhuIhHAAIAAk1I8bAAgAZEmPIAANhEAiiAH3ICWAAIAWAYIFMFiIBaBfIAjAmEAnJAP7IkPnZIgYgrEAnJAP7IkAACIgPguIhplFIgoh7IgHgYICAAAEAk9AP5IiDkgIhljeEAsZAP5IlQACEAjyAH8IGJH7AJPjxIAAr+IsGAAQA6B4AiCqQApDLAFERgAlYHSIUhAAIAA4uI0hAAQAYA3AVA3QANAjALAiQAkBtAXBvQBHFcg/FrQgGAkgIAlQgBAHgCAIQAAABAAABQgGAagHAcQgDAOgEAOQgiCEgzCFQgHARgHASgEAi3gGPIpzAAA+VAyIgWAAIAAAuIIPAAIAAguIgYAAIAAo+InhAAIAAI+IHhAAEgnUAAxIgZAAIAAAtIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IHfAAEgq/AKkIBVAAIAAhWIhVAAgEgsYAM0IFQAAIAAheIlQAAgEgjtANjISEAAIAAh2IyEAAgA9tQGQAAgwgogjQgqgmg2AAQg6AAgnAmQgpAjAAAwQAAABAAABQAAACAAADQADAsAmAhQAnAjA6AAQA2AAAqgjQAmghACgsQAAgDAAgCQAAgBAAgBgEgpngLAIAAVpId4AAIAA1pgA1VAxIgYAAIAAAtIIPAAIAAgtIgYAAA1VAxIHfAAIAAo/InfAAgAqYKkIAAhWIhWAAIAABWgA3URaQAmAjA6AAQA3AAApgjQAmghACgsQABgDAAgCQAAgBAAgBQAAgwgpgjQgpgmg3AAQg6AAgmAmQgqAjAAAwQAAABAAABQAAACAAADQADAsAnAhgAn8M0IAAheIlQAAIAABegApTKrIJCAAIAAjNIpCAAgAq6tMI/gAAIAABsIfgAAg");
	this.shape_14.setTransform(316.6,276.4);

	this.instance_2 = new lib.Train2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(316.9,281.5,1,1,0,0,0,0.3,0);
	this.instance_2.alpha = 0.09;
	this.instance_2._off = true;

	this.instance_3 = new lib.bell1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(431.2,179.4,1.286,1.286,0,0,180);

	this.instance_4 = new lib.WheelSmall1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.8,379.4,1.286,1.286,0,0,180,0,0.1);

	this.instance_5 = new lib.wheel3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(467.9,355.3,3.538,3.538,0,0,180);

	this.instance_6 = new lib.wheel3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(384.6,357.4,3.538,3.538,0,-20.9,159.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,2,1).p("At7q9IAANCAEFC4ICWAAIHfH/AIsK8IkAACIinoGICAAAAGgK6Ijon+AN8K6IlQACIknoEAFVC9IGJH7");
	this.shape_15.setTransform(511.5,308.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5D1908").ss(1,2,1).p("AFNloIAALdIC9AAIAArdgAoJl+QCAEIAKH1IJ8AAIAAr9g");
	this.shape_16.setTransform(350.4,213.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("Au7K1IAA1pId3AAIAAVpgAj/BsIIOAAIAAgtIgYAAIAAo+IngAAIAAI+IgWAAgAE+BrIIPAAIAAgtIgYAAIAAo/InfAAIAAI/IgYAAgAtBBrIIPAAIAAgtIgXAAIAAo/InfAAIAAI/IgZAAg");
	this.shape_17.setTransform(145.8,275.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8C8484").s().p("AhhGxIAAthIAJAAQF1HEl1Gdg");
	this.shape_18.setTransform(549.5,279.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AkDAhIAAhBIIHAAIAABBg");
	this.shape_19.setTransform(508.1,245.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D1908").s().p("EAi5AQjIAAhbI5zAAIAAlIIcbAAIAAE1IBHAAIAABugA98P1IAAh2ISEAAIAAB2gAnaPGIAAheIFPAAIAABegEgmnAPGIAAheIFQAAIAABegAjiM9IAAjNIJBAAIAADNgAl9M2IAAhWIBWAAIAABWgEglOAM2IAAhWIBVAAIAABWgAFNBxIAAiKIOcAAIAACKgEgkpgJOIAAhsIfgAAIAABsgAjCvUIAAhOIZoAAIAABOg");
	this.shape_20.setTransform(279.7,261.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF3300").s().p("ATjMnIAAgNIAAtCIAAgRIIjAAIAANggAiWMnQFKs5lKr1IUhAAIAAYugACdE1IOdAAIAAiLIudAAgACUBkIJ9AAIAAr9IsHAAQCAEIAKH1gANhBaIC9AAIAArdIi9AAgA7pG1IAAgtIAWAAIHhAAIAYAAIAAAtgAyrG0IAAgtIAYAAIHfAAIAYAAIAAAtgEgkrAG0IAAgtIAZAAIHfAAIAXAAIAAAtgEAkCgLmImJAAIgmAAIAAhAIHZAAIAABAg");
	this.shape_21.setTransform(297.2,242.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("Ak5MHIAAtgIJzAAIAANggAkGAmIIHAAIAAhCIoHAAgAhxiLIAAlUIDZAAIAAFUgAiPoQIg2j2IGHAAIhOEKg");
	this.shape_22.setTransform(508.4,245.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_4},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_5},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_7},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_9},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_10},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_11},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_12},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_13},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape_14},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},2).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(3).to({alpha:0.238},0).wait(2).to({alpha:0.352},0).wait(2).to({alpha:0.48},0).wait(2).to({alpha:0.609},0).wait(2).to({alpha:0.672},0).wait(2).to({alpha:0.77},0).to({_off:true},2).wait(19));

	// Smoke
	this.instance_7 = new lib.smokecloud();
	this.instance_7.parent = this;
	this.instance_7.setTransform(509.2,158.8,1,1,0,0,0,2,-0.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).wait(20));

	// Sound Button
	this.instance_8 = new lib.sound_noSound();
	this.instance_8.parent = this;
	this.instance_8.setTransform(52.1,40.5,1,1,0,0,0,12.1,10.5);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53));

	// Border
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("Egx/glfMBj/AAAMAAABK/Mhj/AAAg");
	this.shape_23.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(53));

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