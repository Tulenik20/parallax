(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4+TNQheg0gDhpQAMhlB0gXQBTgegQAEQgwgDhIguQgngwCBhnQCPhdCJASQCCAGBSA0QAUAMAOAKIAEADQARAMAPAJQAuggA2gWQA4gpBmiYQBXiAAthZQASgnAahSQAbhUAYhYIADgJQghANgogNQhQgYhLh+IgBgCIgnhGQhLiXAFh/QAHhCAuglIARgLQAhgTAlADQBSAHDGDGIALASIAHANQAvi0Anh8QAfhWBciHQBih+C9h2QDChtEZAYQD6APCbBfQBSA5A8A0QCBB5CBFKQBLDCgQDlQgIDXg4C7QgiB9gkBQIBNAAQALAZAXAPQAqAdBHALQBAAPA3AlQAuAkgVA5QgeA4g+AhQhGAhiZAHIgbABQiJABhPgrIg1BQQi2DAnbCRQk7BKkngaQmOgWk3htIgaASQhgA/hSAdIg1ASQhrAhhxARQghAGggAAQhRAAhNgng");
	this.shape.setTransform(169.5684,126.8289);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,339.2,253.7), null);


// stage content:
(lib.zadanie_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [21,36,45];
	// timeline functions:
	this.frame_21 = function() {
		playSound("b0bdfff7464a2c3");
	}
	this.frame_36 = function() {
		playSound("largeconcertapplause_zkgezh4_");
	}
	this.frame_45 = function() {
		playSound("largeconcertapplause_zkgezh4_");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(15).call(this.frame_36).wait(9).call(this.frame_45).wait(20));

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFtAiQgKgKAAgNQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAANQAAANgJAKQgKAJgOAAQgNAAgJgJgAmaAMQgJgJAAgNQAAgNAJgKQAKgJANAAQAOAAAKAJQAJAKAAANQAAANgJAJQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(980.15,304.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AIpCBQghgEgkgKIgdgKQgcgcgGgUQgHgXALgmQAJgiA3gLQAegFA4gFQAzgMA1AgQBAAmgrBHQgjA8hWAAIgagBgApFA+QghgEgkgKIgdgKQgcgcgGgTQgHgXAKgnQAKgiA2gLQAegFA5gFQAdgHAfAIIASAGQANAFANAIQA/AmgqBHQgkA8hVAAIgagBg");
	this.shape_1.setTransform(979.687,335.7676);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AB5FMQgqgLgmgdQgigagLgaQgGgMgLAMQgSAVgNAPQg6A8hYgOQhggQgngjQgMgMgLgTIgRgcQgJgNAFgQQAGgPAMgJQANgKAKADQAMAEABAVIAEAOQAHARAMAPQAlAwBLAGQBOAGAvhCQAhgtAHg3QABgKgVADQgdAFgQgIQgkgTgIgXQgLggAygjQA6gqAsgEQAngEAhAZQAoAcAOAjQASAsgvARQgrAPgXAEIgOABIABAXQACAdAHAZQAWBOA/AKQBCAKAsgaQAbgQAXghQAQgXAQARQARARgOAdQgPAfhEAbQgxAUgkAAQgPAAgMgDgAFMgyIgJgKIgGgIIgBgBQgRgagHgfQgEgVgBgXQAAg7AdgqIABgBQAegoAoAAIAKABIAGAAQAfAGAYAiQAeAqgBA7QABAXgFAVQgHAfgSAaQgdAqgqAAQgeAAgZgXgAFMj2QgJAKAAANQAAAOAJAJQAJAKAOAAQANAAAKgKQAJgJAAgOQAAgNgJgKQgKgJgNAAQgOAAgJAJgAm6hIIgJgKIgGgHIgBgCQgRgZgHggQgEgUgBgXQAAg7AdgqIABgCQAdgoApAAIAKABIAGABQAgAGAXAiQAeAqgBA7QABAXgFAUQgHAggSAZQgdAqgqAAQgeAAgZgXgAm6kLQgJAJAAAOQAAANAJAKQAKAJANAAQANAAAKgJQAJgKAAgNQAAgOgJgJQgKgKgNAAQgNAAgKAKg");
	this.shape_2.setTransform(983.4,328.0301);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},49).wait(15));

	// Каркас_21
	this.instance = new lib.Символ1();
	this.instance.setTransform(932.35,355.05,1,1,0,0,0,169.6,126.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-21.4287,x:903.15,y:336},0).wait(1).to({rotation:-42.8574,x:873.9,y:316.95},0).wait(1).to({rotation:-64.2861,x:844.75,y:297.85},0).wait(1).to({rotation:-85.7149,x:815.5,y:278.85},0).wait(1).to({rotation:-107.1436,x:786.25,y:259.85},0).wait(1).to({rotation:-128.5723,x:757.1,y:240.8},0).wait(1).to({rotation:-150.001,x:727.85,y:221.75},0).wait(1).to({rotation:-152.5008,x:698.9,y:232.45},0).wait(1).to({rotation:-155.0007,x:669.95,y:243.15},0).wait(1).to({rotation:-157.5005,x:640.9,y:253.75},0).wait(1).to({rotation:-160.0003,x:611.95,y:264.45},0).wait(1).to({rotation:-162.5002,x:583,y:275.05},0).wait(1).to({rotation:-165,x:554,y:285.75},0).wait(1).to({rotation:-113.6565,x:540.2,y:306.85},0).wait(1).to({rotation:-62.313,x:526.4,y:328},0).wait(1).to({rotation:-10.9695,x:512.6,y:349.3},0).wait(1).to({rotation:40.374,x:498.75,y:370.45},0).wait(1).to({rotation:91.7175,x:484.85,y:391.6},0).wait(1).to({rotation:143.061,x:471.05,y:412.75},0).wait(1).to({rotation:138.0613,y:434.85},0).wait(1).to({rotation:133.0617,y:456.9},0).wait(1).to({rotation:128.062,y:479.05},0).wait(1).to({rotation:123.0623,x:471.1,y:501.1},0).wait(1).to({rotation:118.0627,x:471.05,y:523.2},0).wait(1).to({rotation:113.063,y:545.3},0).wait(1).to({rotation:104.0632,x:476.8,y:551.65},0).wait(1).to({rotation:95.0634,x:482.55,y:558.1},0).wait(1).to({rotation:86.0637,x:488.25,y:564.45},0).wait(1).to({rotation:77.0639,x:493.95,y:570.9},0).wait(1).to({rotation:68.0641,x:499.7,y:577.25},0).wait(1).to({rotation:63.2707,x:525.7},0).wait(1).to({rotation:58.4773,x:551.65},0).wait(1).to({rotation:53.6839,x:577.7},0).wait(1).to({rotation:48.8905,x:603.65},0).wait(1).to({rotation:44.0971,x:629.65},0).wait(1).to({rotation:38.2308,x:675.15,y:568.3},0).wait(1).to({rotation:32.3645,x:720.6,y:559.4},0).wait(1).to({rotation:26.4982,x:766.15,y:550.45},0).wait(1).to({rotation:20.6319,x:811.55,y:541.5},0).wait(1).to({rotation:-9.3681,x:834.65,y:455.6},0).wait(1).to({rotation:-39.3681,x:857.65,y:369.65},0).wait(1).to({rotation:-61.8679,x:889.6,y:302.7},0).wait(1).to({rotation:-84.3678,x:921.6,y:235.65},0).wait(1).to({rotation:-118.4779,x:911.6,y:253.05},0).wait(1).to({rotation:-152.588,x:901.65,y:270.45},0).wait(1).to({rotation:-182.587,x:891.65,y:287.85},0).wait(1).to({rotation:-212.5865,x:891,y:308.85},0).wait(1).to({rotation:-242.586,x:890.4,y:329.85},0).wait(1).to({rotation:-287.5863,x:905.45},0).wait(1).to({rotation:-332.5867,x:920.45},0).wait(1).to({rotation:-347.5859,x:926.75,y:342.45},0).wait(1).to({rotation:-362.5852,x:933.05,y:355.05},0).wait(13));

	// Слой_13
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3+gUQh8CvguCJQg7CrBFBgAS2xgIAdgJQAlgHAkAGQBzAUA/CWQBjDuAVBXQAoCogoC7AQCs0IATAHQAYALAWAWQBGBGAZCWQAYCQhPBbQgOAPgMAJQgCACgBABQgGAFgGADAa+igIAGBFQAEBVgOBNQgqD4jCBQAjWJrIBWAPQBqAOBmgEQFKgJCviwQCNiMCHhxQAqgoAagqQAcgtAdhPAxaDbQg6DnAhBmQAyCaD/ANA2uNHQCKDQCnA8QCDAuDMgiQB2gTCMgLQCDgJBvgVAGVPTIBLgIQBbgMBVgRQEOg3BkhYQBphcAjiKQAUhPAAiX");
	this.shape_3.setTransform(471.6484,586.2597);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(21).to({_off:false},0).to({_off:true},3).wait(41));

	// Слой_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B4FFFF").ss(1,1,1).p("EAlLgZBQhkAZiCgPQkEgeiWjIQizjwkOiHQkOiHjwAeQg3AHj4ANQjlAMiUAXQneBKjJD7QjOECkvBVQhsAeiIANQiSAJg8AFQguAEi/gDQi6gCh3ALQmLAlijDVQhLBjjNCGQhwBIg3AkQhfA/g5AvQiZB+gHB1QgJCQDMCmQCSB3ENDfQDnC3C8BfQDsB3EAAgQEgAjFehIQFPhEDsAjQCzAaCgBhQAuAcBQA6QBRA6ApAZQCQBZCcAMQB9AKEkAYQEHAcDFA4QIfCaEDGsQB0DABRCxQBKChAOAWQAnA6BXAnQA9AcD4BTQDOBFCpmHQCHk4BppPQBLmlA0oHIAmmxg");
	this.shape_4.setTransform(1039.633,504.0703);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4FFFF").s().p("EAo7Aj5Qj4hTg9gcQhXgngng6QgOgWhKihQhRixh0jAQkDmsofiaQjFg4kHgcImhgiQicgMiQhZQgpgZhRg6QhQg6gugcQighhizgaQjsgjlPBEQleBIkggjQkAggjsh3Qi8hfjni3QkNjfiSh3QjMimAJiQQAHh1CZh+QA5gvBfg/ICnhsQDNiGBLhjQCjjVGLglQB3gLC6ACQC/ADAugEQA8gFCSgJQCIgNBsgeQEvhVDOkCQDJj7HehKQCUgXDlgMQD4gNA3gHQDwgeEOCHQEOCHCzDwQCWDIEEAeQCCAPBkgZIP8UUIgmGxQg0IHhLGlQhpJPiHE4QiQFMiqAAQgeAAgfgKg");
	this.shape_5.setTransform(1039.633,504.0703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(65));

	// Слой_8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6696F8").s().p("EAo7Aj5Qj4hTg9gcQhXgngng6QgOgWhKihQhRixh0jAQkDmsofiaQjFg4kHgcImhgiQicgMiQhZQgpgZhRg6QhQg6gugcQighhizgaQjsgjlPBEQleBIkggjQkAggjsh3Qi8hfjni3QkNjfiSh3QjMimAJiQQAHh1CZh+QA5gvBfg/ICnhsQDNiGBLhjQCjjVGLglQB3gLC6ACQC/ADAugEQA8gFCSgJQCIgNBsgeQEvhVDOkCQDJj7HehKQCUgXDlgMQD4gNA3gHQDwgeEOCHQEOCHCzDwQCWDIEEAeQCCAPBkgZIP8UUIgmGxQg0IHhLGlQhpJPiHE4QiQFMiqAAQgeAAgfgKg");
	this.shape_6.setTransform(1022.583,521.6203);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(65));

	// Слой_9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B4FFFF").ss(1,1,1).p("AExDvIphnd");
	this.shape_7.setTransform(1015.925,331.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CCFF").s().p("EAxDAoAQkegCi2gfQlUhCkXg0Qobhmmyg3Q1PirqbDiQl6CBt0AqQshAnvYgoQvAgnrbhhQsJhojLiCQmLj9grpDQgNi3AWj0QAkmPCFowQBcmHDGk0QCcjzDqjPIAygrQDVi0E8i3QAygcH+kUQELiQGuhgQGOhZHOgfQHBgfGIAfQGVAfDsBZQDoBXGOAWQF0AUHHgnQG7gmGohWQG0hYE+h2QEohuFaAAQERAAFPBIQBwAYGkBvQEbBLCEAFIJiHeQLbJGJiIEQeeZyAAF3QAADPkDCfQjPB/mYByQh9AjpbCOQmnBkiuBLQmkC2rpBCQkhAakNAAIgwgBg");
	this.shape_8.setTransform(664.6461,535.0101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(65));

	// Слой_11
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("Ehx8AZjQgogCgag+Qg8iRgimcQgnnTAgnLQAooxCNl/QCpnMEriZQEmiXJ8gMQHtgKLuBLQCzASPgB3QI+BGCMgRUAEpgAiA/2gBtQf7g2fAgwQQTAyGLBBQDdAlBhHmQBUGkghJDQghIvhyExQg6CchEAiQhJAlhLhwQiSjYiXh8Qh7hmiXg5Qg7gWjUg5Qirgvhyg5QnPjL6zhqQ5Lhj/8AVUgg6AAWgYyACPQ7kCfoOEHQksBdkgDuQjBCfjqEQIifC5QhPBaguAnQg3AvglAAIgDAAg");
	this.shape_9.setTransform(647.9139,82.8455);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(65));

	// Слой_10
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("EBkeAo8Qi1jfjkixQi6iRj5iJQhxg+lKikQkTiIidhgQi/h0kegvQjXgjlKgBQlyAFiugCQkrgEiugoQjBgsjaADQiwADj2AlInMBLQknAvjoATQ4JCChTAGQxcBUk5gUQiZgJjJglQjnguh7gWQnJhRmzAjQj9AVjBA7QiPAsivBZQkfCSgiAQQjUBhjyBEQj9BHjSCMQiQBfilCgQi4CzgqAgQhyBWhogIQhxgJg8g0Qg1gvgaheQgRg+gRiWQgVizgThgQgki9g4otQhCqWggpxQgpsWAcoPQAip/CDjCQDtleQfhGQIPgjHgAjMBpRgDIIIdgCQKTACJIARQdNA3GpC8QD3BsCaCMQCOCCBQCsQBFCTAlDWQAWCCAdEqQAUDHAEE+QADC6ABGPQAFMCBDGWQAuERgWFmQgWFshSETQhaEviFBRQgsAagvAAQhzAAiDigg");
	this.shape_10.setTransform(652.5227,189.8955);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(65));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540.5,271.9,854.9000000000001,519.2);
// library properties:
lib.properties = {
	id: '81EB8FB8864631489363CEBFB8DCD390',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/b0bdfff7464a2c3.mp3", id:"b0bdfff7464a2c3"},
		{src:"sounds/largeconcertapplause_zkgezh4_.mp3", id:"largeconcertapplause_zkgezh4_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['81EB8FB8864631489363CEBFB8DCD390'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;