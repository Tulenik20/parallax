(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"задание 6_atlas_1", frames: [[302,514,250,250],[402,202,100,100],[402,0,200,200],[0,0,400,512],[0,514,300,300]]}
];


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



(lib.книга = function() {
	this.initialize(ss["задание 6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.рука = function() {
	this.initialize(ss["задание 6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ручка = function() {
	this.initialize(ss["задание 6_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(ss["задание 6_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.хвост = function() {
	this.initialize(ss["задание 6_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
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


(lib.Символ23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.книга();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,250,250), null);


(lib.Символ22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.рука();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(0,0,100,100), null);


(lib.Символ21 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.хвост();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,300,300), null);


(lib.Символ20 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ручка();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,200,200), null);


(lib.Символ19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.тело();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,400,512), null);


// stage content:
(lib.задание6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Каркас_85
	this.ikNode_53 = new lib.Символ23();
	this.ikNode_53.name = "ikNode_53";
	this.ikNode_53.setTransform(555.5,367.15,0.6236,0.6189,0.0028,0,0,125.1,125.2);

	this.ikNode_46 = new lib.Символ19();
	this.ikNode_46.name = "ikNode_46";
	this.ikNode_46.setTransform(595.1,271.95,0.579,0.5863,0,0,0,240.5,102.4);

	this.ikNode_47 = new lib.Символ20();
	this.ikNode_47.name = "ikNode_47";
	this.ikNode_47.setTransform(608.6,365.4,0.7859,0.7749,0,0,0,100.2,100);

	this.ikNode_49 = new lib.Символ21();
	this.ikNode_49.name = "ikNode_49";
	this.ikNode_49.setTransform(516.1,456.05,0.5778,0.5778,0,0,0,85.2,173.3);

	this.ikNode_51 = new lib.Символ22();
	this.ikNode_51.name = "ikNode_51";
	this.ikNode_51.setTransform(509.8,352.9,0.9389,0.82,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_51,p:{regX:50,regY:50,scaleY:0.82,rotation:0,x:509.8,y:352.9}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5778,scaleY:0.5778,rotation:0,x:516.1,y:456.05,regY:173.3}},{t:this.ikNode_47,p:{rotation:0,x:608.6,regX:100.2,y:365.4}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.579,rotation:0,x:595.1,regY:102.4,y:271.95}},{t:this.ikNode_53,p:{regX:125.1,rotation:0.0028,x:555.5,y:367.15,regY:125.2,scaleX:0.6236}}]}).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0043,x:510,y:352.95}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.003,x:516.2,y:456,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0045,x:608.7,regX:100.2,y:365.4}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.003,x:595.25,regY:102.4,y:271.95}},{t:this.ikNode_53,p:{regX:125.2,rotation:-0.2303,x:544.15,y:366.15,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0117,x:510.1,y:352.95}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0106,x:516.35,y:456,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0113,x:608.8,regX:100.2,y:365.4}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.0104,x:595.35,regY:102.5,y:271.95}},{t:this.ikNode_53,p:{regX:125.2,rotation:-0.4662,x:545.15,y:366.25,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0192,x:510.2,y:352.9}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:0.0182,x:516.35,y:455.95,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0192,x:608.75,regX:100.1,y:365.45}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.0179,x:595.45,regY:102.5,y:272}},{t:this.ikNode_53,p:{regX:125.2,rotation:-0.7021,x:546.2,y:366.35,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0267,x:510.3,y:352.95}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0257,x:516.5,y:455.9,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.026,x:608.85,regX:100.1,y:365.4}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:0.0254,x:595.5,regY:102.4,y:271.95}},{t:this.ikNode_53,p:{regX:125.2,rotation:-0.938,x:547.15,y:366.4,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0341,x:510.35,y:352.95}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0333,x:516.6,y:456,regY:173.4}},{t:this.ikNode_47,p:{rotation:0.0338,x:609.1,regX:100.2,y:365.4}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:0.0328,x:595.6,regY:102.5,y:272}},{t:this.ikNode_53,p:{regX:125.2,rotation:-1.174,x:548.25,y:366.5,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0416,x:510.45,y:352.9}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0393,x:516.65,y:456,regY:173.4}},{t:this.ikNode_47,p:{rotation:0.0406,x:609.15,regX:100.2,y:365.35}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:0.0403,x:595.7,regY:102.5,y:271.95}},{t:this.ikNode_53,p:{regX:125.1,rotation:-1.4099,x:549.2,y:366.65,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0491,x:510.55,y:352.85}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:0.0469,x:516.65,y:455.95,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0485,x:609.25,regX:100.2,y:365.35}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.0477,x:595.9,regY:102.4,y:271.9}},{t:this.ikNode_53,p:{regX:125.1,rotation:-1.6445,x:550.25,y:366.65,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0565,x:510.65,y:352.9}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0545,x:516.8,y:455.9,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0553,x:609.35,regX:100.2,y:365.35}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.0552,x:596,regY:102.5,y:271.95}},{t:this.ikNode_53,p:{regX:125.2,rotation:-1.882,x:551.35,y:366.8,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.064,x:510.75,y:352.85}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.062,x:516.85,y:455.9,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0632,x:609.35,regX:100.1,y:365.35}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.0611,x:596.1,regY:102.5,y:271.9}},{t:this.ikNode_53,p:{regX:125.2,rotation:-2.118,x:552.4,y:366.8,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0714,x:510.85,y:352.85}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0696,x:516.95,y:455.85,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0711,x:609.5,regX:100.2,y:365.35}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.0701,x:596.2,regY:102.4,y:271.9}},{t:this.ikNode_53,p:{regX:125.2,rotation:-2.3527,x:553.45,y:367,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0789,x:510.9,y:352.75}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:0.0772,x:516.95,y:455.85,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.079,x:609.6,regX:100.2,y:365.35}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:0.0761,x:596.25,regY:102.5,y:271.9}},{t:this.ikNode_53,p:{regX:125.2,rotation:-2.5888,x:554.5,y:366.9,regY:125,scaleX:0.6235}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0864,x:511.05,y:352.75}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0847,x:517.1,y:455.8,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.0857,x:609.7,regX:100.2,y:365.3}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:0.0835,x:596.35,regY:102.5,y:271.9}},{t:this.ikNode_53,p:{regX:125.2,rotation:-2.8249,x:555.5,y:367.05,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.0938,x:511.15,y:352.75}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0908,x:517.25,y:455.9,regY:173.4}},{t:this.ikNode_47,p:{rotation:0.0936,x:609.7,regX:100.1,y:365.35}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.091,x:596.5,regY:102.4,y:271.8}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.0598,x:556.6,y:367.15,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.1013,x:511.25,y:352.75}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.0984,x:517.35,y:455.85,regY:173.4}},{t:this.ikNode_47,p:{rotation:0.1004,x:609.75,regX:100.1,y:365.3}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.0984,x:596.6,regY:102.5,y:271.85}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.296,x:557.75,y:367.15,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-0.2751,x:511.9,y:353.25}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-0.2754,x:518.6,y:456.25,regY:173.3}},{t:this.ikNode_47,p:{rotation:-0.2764,x:610.5,regX:100.1,y:365.15}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-0.2759,x:596.7,regY:102.5,y:271.85}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.3243,x:557.6,y:367.2,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-0.6579,x:512.6,y:353.7}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-0.6583,x:520,y:456.85,regY:173.4}},{t:this.ikNode_47,p:{rotation:-0.6589,x:611.4,regX:100.2,y:365.05}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-0.6591,x:596.8,regY:102.5,y:271.8}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.3512,x:557.6,y:367.35,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-1.0418,x:513.3,y:354.35}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-1.0412,x:521.15,y:457.3,regY:173.3}},{t:this.ikNode_47,p:{rotation:-1.0425,x:612.1,regX:100.2,y:364.9}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-1.0424,x:596.9,regY:102.4,y:271.75}},{t:this.ikNode_53,p:{regX:125.1,rotation:-3.3796,x:557.35,y:367.35,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-1.4247,x:513.8,y:354.9}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:-1.4257,x:522.6,y:457.75,regY:173.3}},{t:this.ikNode_47,p:{rotation:-1.4251,x:612.85,regX:100.2,y:364.85}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-1.4258,x:597.1,regY:102.5,y:271.75}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.4079,x:557.4,y:367.35,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50,scaleY:0.8199,rotation:-1.8066,x:514.5,y:355.3}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:-1.8072,x:523.95,y:458.25,regY:173.3}},{t:this.ikNode_47,p:{rotation:-1.8077,x:613.6,regX:100.2,y:364.7}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-1.8077,x:597.1,regY:102.5,y:271.75}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.4361,x:557.3,y:367.4,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50,regY:50.1,scaleY:0.8199,rotation:-2.1896,x:515.15,y:355.95}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-2.1903,x:525.4,y:458.7,regY:173.3}},{t:this.ikNode_47,p:{rotation:-2.1905,x:614.3,regX:100.2,y:364.6}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-2.1912,x:597.3,regY:102.5,y:271.8}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.4644,x:557.3,y:367.55,regY:125.2,scaleX:0.6235}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-2.5717,x:515.95,y:356.5}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-2.5735,x:526.75,y:459.2,regY:173.4}},{t:this.ikNode_47,p:{rotation:-2.5733,x:615.05,regX:100.2,y:364.45}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-2.5733,x:597.35,regY:102.5,y:271.75}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.4914,x:557.1,y:367.6,regY:125.2,scaleX:0.6235}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-2.9561,x:516.6,y:356.95}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-2.9568,x:527.95,y:459.65,regY:173.3}},{t:this.ikNode_47,p:{rotation:-2.9574,x:615.75,regX:100.2,y:364.4}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-2.957,x:597.45,regY:102.5,y:271.7}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.5196,x:557.05,y:367.65,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50,scaleY:0.8199,rotation:-3.3383,x:517.3,y:357.4}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-3.3402,x:529.45,y:460.2,regY:173.5}},{t:this.ikNode_47,p:{rotation:-3.3404,x:616.4,regX:100.1,y:364.15}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-3.3393,x:597.5,regY:102.5,y:271.75}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.5465,x:556.95,y:367.7,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-3.7208,x:517.9,y:358.05}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-3.7224,x:530.7,y:460.55,regY:173.3}},{t:this.ikNode_47,p:{rotation:-3.7225,x:617.25,regX:100.2,y:364.05}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-3.7233,x:597.65,regY:102.5,y:271.7}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.5748,x:556.9,y:367.85,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50,scaleY:0.8199,rotation:-3.5157,x:517.75,y:357.65}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-3.5161,x:530.25,y:460.3,regY:173.4}},{t:this.ikNode_47,p:{rotation:-3.5168,x:616.95,regX:100.2,y:364.05}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-3.5171,x:597.75,regY:102.5,y:271.65}},{t:this.ikNode_53,p:{regX:125.2,rotation:-3.0541,x:557.8,y:367.8,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50,regY:50.1,scaleY:0.8199,rotation:-3.3106,x:517.45,y:357.45}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-3.3115,x:529.75,y:460,regY:173.4}},{t:this.ikNode_47,p:{rotation:-3.3121,x:616.75,regX:100.2,y:364.1}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-3.3124,x:597.8,regY:102.4,y:271.55}},{t:this.ikNode_53,p:{regX:125.1,rotation:-2.5337,x:558.65,y:367.7,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50,regY:50.1,scaleY:0.8199,rotation:-3.1066,x:517.25,y:357.05}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-3.1054,x:529.1,y:459.7,regY:173.4}},{t:this.ikNode_47,p:{rotation:-3.1065,x:616.55,regX:100.2,y:364.1}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-3.1063,x:597.9,regY:102.4,y:271.5}},{t:this.ikNode_53,p:{regX:125.2,rotation:-2.012,x:559.6,y:367.65,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-2.9016,x:517.2,y:356.75}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-2.9008,x:528.4,y:459.4,regY:173.3}},{t:this.ikNode_47,p:{rotation:-2.9009,x:616.15,regX:100.1,y:364.15}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-2.9017,x:598,regY:102.5,y:271.5}},{t:this.ikNode_53,p:{regX:125.1,rotation:-1.4919,x:560.45,y:367.55,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-2.6966,x:516.95,y:356.5}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-2.6947,x:527.8,y:459.15,regY:173.4}},{t:this.ikNode_47,p:{rotation:-2.6952,x:616.05,regX:100.2,y:364.2}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-2.6957,x:598.1,regY:102.5,y:271.5}},{t:this.ikNode_53,p:{regX:125.2,rotation:-0.9705,x:561.35,y:367.55,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-2.4917,x:516.75,y:356.15}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-2.4902,x:527.4,y:458.75,regY:173.3}},{t:this.ikNode_47,p:{rotation:-2.4897,x:615.8,regX:100.2,y:364.2}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-2.4897,x:598.1,regY:102.5,y:271.45}},{t:this.ikNode_53,p:{regX:125.2,rotation:-0.4506,x:562.25,y:367.55,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50,scaleY:0.8199,rotation:-2.2868,x:516.6,y:355.7}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-2.2842,x:526.8,y:458.5,regY:173.3}},{t:this.ikNode_47,p:{rotation:-2.2843,x:615.6,regX:100.2,y:364.2}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-2.2838,x:598.25,regY:102.4,y:271.35}},{t:this.ikNode_53,p:{regX:125.2,rotation:0.0636,x:563.2,y:367.5,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-2.0819,x:516.4,y:355.5}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:-2.0798,x:526.25,y:458.15,regY:173.3}},{t:this.ikNode_47,p:{rotation:-2.0788,x:615.35,regX:100.2,y:364.25}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-2.0778,x:598.45,regY:102.4,y:271.35}},{t:this.ikNode_53,p:{regX:125.2,rotation:0.5848,x:564.1,y:367.4,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50,scaleY:0.8199,rotation:-1.877,x:516.1,y:355}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-1.8738,x:525.55,y:457.9,regY:173.4}},{t:this.ikNode_47,p:{rotation:-1.8744,x:615.15,regX:100.2,y:364.35}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-1.8734,x:598.45,regY:102.5,y:271.3}},{t:this.ikNode_53,p:{regX:125.1,rotation:1.1047,x:565,y:367.25,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-1.6733,x:515.9,y:354.8}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-1.6679,x:524.95,y:457.5,regY:173.3}},{t:this.ikNode_47,p:{rotation:-1.6678,x:614.8,regX:100.1,y:364.25}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-1.6689,x:598.5,regY:102.5,y:271.2}},{t:this.ikNode_53,p:{regX:125.2,rotation:1.6261,x:565.9,y:367.15,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-1.4706,x:515.75,y:354.5}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-1.4681,x:524.45,y:457.35,regY:173.3}},{t:this.ikNode_47,p:{rotation:-1.4669,x:614.7,regX:100.2,y:364.35}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-1.4675,x:598.75,regY:102.5,y:271.25}},{t:this.ikNode_53,p:{regX:125.1,rotation:1.6883,x:565.35,y:366.7,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-1.2701,x:515.65,y:354.2}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-1.2667,x:523.9,y:457.1,regY:173.3}},{t:this.ikNode_47,p:{rotation:-1.2672,x:614.5,regX:100.2,y:364.4}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-1.2662,x:598.85,regY:102.4,y:271.25}},{t:this.ikNode_53,p:{regX:125.2,rotation:1.7519,x:565.1,y:366.3,regY:125.2,scaleX:0.6235}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-1.0685,x:515.5,y:353.9}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-1.0669,x:523.4,y:456.9,regY:173.4}},{t:this.ikNode_47,p:{rotation:-1.0663,x:614.3,regX:100.2,y:364.55}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-1.0663,x:599,regY:102.5,y:271.35}},{t:this.ikNode_53,p:{regX:125.2,rotation:1.8141,x:564.55,y:365.75,regY:125.1,scaleX:0.6235}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-0.8669,x:515.25,y:353.65}},{t:this.ikNode_49,p:{regX:85.2,scaleX:0.5777,scaleY:0.5777,rotation:-0.8656,x:522.85,y:456.6,regY:173.3}},{t:this.ikNode_47,p:{rotation:-0.8654,x:614,regX:100.2,y:364.6}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-0.865,x:599.05,regY:102.5,y:271.35}},{t:this.ikNode_53,p:{regX:125.2,rotation:1.8777,x:564.05,y:365.4,regY:125.2,scaleX:0.6235}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-0.6654,x:515.15,y:353.45}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:-0.6644,x:522.4,y:456.45,regY:173.4}},{t:this.ikNode_47,p:{rotation:-0.6657,x:613.85,regX:100.2,y:364.7}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-0.6651,x:599.15,regY:102.5,y:271.4}},{t:this.ikNode_53,p:{regX:125.2,rotation:1.9385,x:563.7,y:364.95,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-0.4638,x:514.9,y:353.2}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:-0.4646,x:521.9,y:456.1,regY:173.3}},{t:this.ikNode_47,p:{rotation:-0.4637,x:613.65,regX:100.2,y:364.7}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-0.4638,x:599.4,regY:102.4,y:271.3}},{t:this.ikNode_53,p:{regX:125.2,rotation:2.0021,x:563.25,y:364.35,regY:125.1,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-0.2634,x:514.8,y:352.95}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:-0.2648,x:521.35,y:455.85,regY:173.3}},{t:this.ikNode_47,p:{rotation:-0.264,x:613.45,regX:100.2,y:364.8}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:-0.264,x:599.55,regY:102.4,y:271.35}},{t:this.ikNode_53,p:{regX:125.2,rotation:2.0643,x:562.75,y:363.95,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:-0.0618,x:514.6,y:352.65}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:-0.0636,x:520.8,y:455.6,regY:173.3}},{t:this.ikNode_47,p:{rotation:-0.0632,x:613.25,regX:100.2,y:364.9}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:-0.0626,x:599.6,regY:102.5,y:271.45}},{t:this.ikNode_53,p:{regX:125.2,rotation:2.1279,x:562.35,y:363.5,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.1333,x:514.45,y:352.4}},{t:this.ikNode_49,p:{regX:85.4,scaleX:0.5777,scaleY:0.5777,rotation:0.1286,x:520.45,y:455.4,regY:173.3}},{t:this.ikNode_47,p:{rotation:0.1309,x:612.9,regX:100.1,y:365}},{t:this.ikNode_46,p:{regX:240.5,scaleX:0.5789,rotation:0.1297,x:599.75,regY:102.4,y:271.45}},{t:this.ikNode_53,p:{regX:125.2,rotation:2.1901,x:561.9,y:363.05,regY:125.2,scaleX:0.6236}}]},1).to({state:[{t:this.ikNode_51,p:{regX:50.1,regY:50.1,scaleY:0.8199,rotation:0.3348,x:514.2,y:352.05}},{t:this.ikNode_49,p:{regX:85.3,scaleX:0.5777,scaleY:0.5777,rotation:0.3299,x:519.75,y:455.2,regY:173.4}},{t:this.ikNode_47,p:{rotation:0.3317,x:612.8,regX:100.2,y:365}},{t:this.ikNode_46,p:{regX:240.6,scaleX:0.5789,rotation:0.3296,x:599.95,regY:102.5,y:271.5}},{t:this.ikNode_53,p:{regX:125.2,rotation:2.2523,x:561.45,y:362.5,regY:125.2,scaleX:0.6236}}]},1).wait(1));

	// мордочка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("AIpCBQghgEgkgKIgdgKQgcgcgGgUQgHgXALgmQAJgiA3gLQAegFA4gFQAzgMA1AgQBAAmgrBHQgjA8hWAAIgagBgApFA+QghgEgkgKIgdgKQgcgcgGgTQgHgXAKgnQAKgiA2gLQAegFA5gFQAdgHAfAIIASAGQANAFANAIQA/AmgqBHQgkA8hVAAIgagBg");
	this.shape.setTransform(317.137,503.8676);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFtAiQgKgKAAgNQAAgNAKgJQAJgKANAAQAOAAAJAKQAKAJAAANQAAANgKAKQgJAJgOAAQgNAAgJgJgAmZAMQgKgJAAgNQAAgNAKgKQAJgJANAAQAOAAAKAJQAJAKAAANQAAANgJAJQgKAKgOAAQgNAAgJgKg");
	this.shape_1.setTransform(317.6,472.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AB5FMQgrgLglgdQgigagLgaQgGgMgLAMQgRAVgOAPQg6A8hYgOQhggQgngjQgNgMgKgTIgRgcQgJgNAGgQQAEgPANgJQAMgKALADQAMAEABAVIAEAOQAHARALAPQAmAwBLAGQBOAGAvhCQAigtAGg3QABgKgUADQgdAFgRgIQgkgTgHgXQgMggAygjQA6gqAtgEQAmgEAhAZQAoAcAOAjQASAsgvARQgrAPgXAEIgOABIABAXQACAdAHAZQAXBOA+AKQBBAKAtgaQAcgQAWghQAPgXARARQASARgPAdQgQAfhDAbQgxAUgkAAQgPAAgMgDgAFMgyIgJgKIgFgIIgBgBQgSgagHgfQgFgVAAgXQABg7AdgqIABgBQAdgoApAAIAKABIAEAAQAhAGAXAiQAeAqAAA7QAAAXgFAVQgHAfgSAaQgdAqgpAAQgfAAgZgXgAFMj2QgKAKAAANQAAAOAKAJQAKAKANAAQANAAAKgKQAKgJAAgOQAAgNgKgKQgKgJgNAAQgNAAgKAJgAm6hIIgJgKIgFgHIgBgCQgSgZgHggQgFgUAAgXQAAg7AegqIABgCQAcgoApAAIALABIAEABQAgAGAYAiQAeAqAAA7QAAAXgFAUQgHAggSAZQgdAqgqAAQgeAAgZgXgAm6kLQgKAJAAAOQAAANAKAKQAJAJAOAAQANAAAKgJQAKgKgBgNQABgOgKgJQgKgKgNAAQgOAAgJAKg");
	this.shape_2.setTransform(320.85,496.1301);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(45));

	// Каркас_21
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Al8ERQheg0gDhpQAMhlB0gWQBTgegQAEQgwgDhIguQgngwCBhnQCPhdCJASQCBAGBSA0QAUAMAOAKIAEADQBNA4AngTQA0AKAcAPQCBBIiBCHQgzA3hFAvQhgA/hSAdIg1ASQhqAhhxARQghAGggAAQhRAAhNgng");
	this.shape_3.setTransform(152.7625,620.0981);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Al3EYQhfgxgGhpQAJhlB0gZQBSgggPAEQgxgDhJgvQgpgwB/hqQCNhgCMAPQCDAFBTAzQAUALARALIAEADQBNA4AngTQA1ALAbAPQCBBIiBCHQgzA3hGAuQhgA/hLAeIg0ATQhqAlhwATQgmAJglAAQhNAAhJgkg");
	this.shape_4.setTransform(152.8063,620.665);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlyEfQhggugIhpQAGhmBzgdQBRghgPAEQgwgBhMgwQgrgxB+htQCLhiCPAMQCEACBVAzQAVAKATAMIAEAEQBNA4AngTQA1AKAbAPQCBBJiCCGQgzA3hGAvQhgA+hEAfIg0AVQhqAnhvAWQgqALgqAAQhIAAhGggg");
	this.shape_5.setTransform(152.875,621.2616);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlsEmQhigrgLhpQAEhmByggQBRgkgPAFQgxABhOgxQgsgzB7hwQCKhlCRAKQCHAABWAyIArAXIAEADQBNA4AngTQA0ALAcAPQCABJiCCGQgzA3hGAuQhgA+g+AfIgzAXQhpAqhvAZQguANguAAQhEAAhCgcg");
	this.shape_6.setTransform(152.9689,621.8531);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlnEtQhjgpgNhoQABhmBxgjQBPgmgOAFQgxAChQgyQgug0B5hzQCJhnCTAHQCJgCBXAxIAuAXIAEADQBNA5AngTQA1AKAbAQQCBBJiDCGQgzA2hHAvQhgA9g3AgIgzAXQhnAuhvAcQgyAQgyAAQhAAAg/gZg");
	this.shape_7.setTransform(153.1066,622.453);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlhE0QhkgmgQhoQgChnBxgmQBPgogPAGQgxADhSgzQgwg1B3h1QCHhqCWAFQCKgFBZAwIAwAXIAEADQBNA5AngTQA2ALAbAPQCABKiDCFQgzA2hHAvIiRBdIgyAZQhnAwhtAgQg3ATg3AAQg7AAg7gWg");
	this.shape_8.setTransform(153.2298,623.0586);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlbE7QhlgjgThoQgEhmBwgqQBNgqgOAGQgxAEhUgzQgzg2B1h4QCGhsCYACQCMgIBaAvIAzAYIAFADQBMA5AogTQA0ALAcAPQCABKiDCFQg0A2hHAvQhhA9gpAfIgyAbQhlAzhtAiQg7AWg8AAQg2AAg3gSg");
	this.shape_9.setTransform(153.3917,623.6134);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AlUFCQhmghgWhnQgHhmBvgtQBMgsgOAGQgxAFhWg0Qg1g3Bzh6QCEhuCbgCQCNgKBbAvQAVAKAhANIAFAEQBMA5AogTQA0ALAcAPQCABLiECEQgzA2hIAvQhhA9giAfIgxAcQhkA2hsAlQg/AZhBAAQgyAAgygPg");
	this.shape_10.setTransform(153.5486,624.1648);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlOFJQhogfgYhmQgJhmBugvQBLgvgOAGQgxAHhZg1Qg3g4Bxh9QCChxCdgEQCPgMBcAtQAVAKAkAOIAFADQBMA6AogTQA1ALAbAQQCBBJiFCHQg0A1hIAuQhhA8gbAfIgxAdQhjA5hrAoQhCAdhGAAQgtAAgugMg");
	this.shape_11.setTransform(153.7695,624.7108);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlHFPQhogbgbhmQgMhlBtgzQBKgxgOAHQgxAIhbg2Qg5g5BuiAQCBhyCfgHQCRgPBdAsQAVAKAnAOIAEAEQBNA5AngSQA2AKAbAQQCABLiFCFQg0A1hIAuQhiA9gUAeIgwAeQhiA8hpArQhHAghKAAQgpAAgqgKg");
	this.shape_12.setTransform(153.8926,625.2447);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ak8FVQhpgYgdhmQgPhlBrg1QBJg0gNAIQgxAKheg4Qg7g5BsiDQB/h1ChgJQCSgRBfArIA+AYIAFADQBMA6AogSQA1AKAbAQQCBBLiGCFQg0A1hIAuQhiA8gOAeIgvAgQhgA9hpAvQhJAkhPAAQglAAgmgIg");
	this.shape_13.setTransform(153.684,625.7842);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkxFbQhpgWgghkQgShlBrg4QBHg2gNAIQgxALhhg4Qg9g6BqiGQB9h3CjgMQCUgUBgArQAVAJAsAPIAEADQBNA6AogSQA0AKAcAQQCABLiGCFQg0A1hIAuQgyAegJAPQgSATgdAYIguAiQhfBAhnAxQhNAphUAAQggAAgigGg");
	this.shape_14.setTransform(153.4852,626.3133);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkmFhQhqgTgjhkQgUhkBpg7QBGg4gNAJQgwAMhkg5Qg/g7BniIQB7h5CmgPQCVgWBhApQAVAJAvAPIAEADQBNA6AogSQA1ALAbAQQCBBLiHCFQg1A1hIAtQgyAegGAOQgQATgbAZIguAiQhdBDhmA0QhQAthZAAQgcAAgdgEg");
	this.shape_15.setTransform(153.326,626.8383);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkaFmQhrgQglhjQgXhkBog+QBFg6gNAJQgwAOhng6QhCg8BliKQB6h7CogSQCWgYBiAoQAWAJAxAPIAEADQBMA6AogSQA2ALAbAQQCABMiHCEQg1A1hJAtQgxAegEANQgOARgZAaIgtAkQhcBGhlA2QhTAyhfAAQgXAAgXgDg");
	this.shape_16.setTransform(153.1481,627.3558);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AkPFrQhrgOgohiQgZhjBmhBQBEg7gNAJQgvAPhqg6QhFg9BjiMQB4h9CpgVQCYgbBjAnQAWAJA0APIAEADQBMA6AogSQA2AMAbAQQCABMiICEQg0A0hJAtQgyAegBAMQgMARgYAaIgrAlQhbBIhjA5QhXA3hkAAQgSAAgTgCg");
	this.shape_17.setTransform(152.9665,627.8548);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkmFjQhqgSgjhkQgVhlBpg7QBHg4gOAJQgwAMhlg+QhBg+BoiIQB9h4CogNQCWgVBhArQAWAJAvAPIAEAEQBNA6AogRQA2ALAbAQQCABOiJCCQg2A1hJAsQgyAegGANQgPASgbAZIgtAjQheBEhmA0QhRAuhbAAQgbAAgbgEg");
	this.shape_18.setTransform(152.9075,626.4903);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ak9FaQhpgXgehmQgQhlBsg3QBJg0gNAIQgxAKhihBQg9hBBviCQCChzCkgFQCVgOBfAtQAWAKArAQIAEADQBMA7ApgRQA2AMAbAQQCABOiLCCQg2A0hKAsQgzAdgKAQQgTASgdAYIgvAhQhiA/hoAvQhLAmhSAAQgjAAgkgHg");
	this.shape_19.setTransform(152.8766,625.0643);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AlTFRQhogdgZhnQgKhlBugyQBMgwgOAHQgxAIhehFQg5hCB0h9QCHhtChACQCTgHBdAwQAVALAnAPIAEAEQBMA7ApgRQA2AMAbARQCBBOiNCBQg3A0hLAsQhmA6gSAeIgxAeQhjA6hsAqQhFAfhIAAQgrAAgtgLg");
	this.shape_20.setTransform(152.8736,623.5791);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AlhFHQhnghgThoQgGhnBxgrQBOgsgPAFQgxAGhZhIQg1hEB5h3QCMhmCdAJQCRgBBbA0IA2AaIAFADQBMA8ApgRQA2ANAcARQCABPiOB/Qg4A1hLArQhoA5gdAeIgyAcQhlA1huAlQg/AYhAAAQgzAAg0gQg");
	this.shape_21.setTransform(152.1837,621.9811);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AlvE9QhlgngOhoQgBhnBzgmQBQgogPAGQgxAChVhKQgxhGB/hyQCQhfCZARQCOAGBZA2IAxAaIAFADQBMA9AqgRQA2ANAbARQCBBPiQB/Qg4A0hNArQhoA5goAeIg0AZQhoAwhvAfQg3ATg3AAQg8AAg8gWg");
	this.shape_22.setTransform(151.5547,620.3168);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Al8EzQhjgsgJhpQAFhnB0ggQBSgkgPAFQgyABhQhOQgthICFhrQCUhYCVAXQCLANBWA4IAsAaIAFAEQBMA9AqgRQA3ANAbARQCABRiRB+Qg5AzhNArQhpA4g0AdIg0AXQhqArhxAZQgwAOgvAAQhEAAhDgcg");
	this.shape_23.setTransform(150.9632,618.6178);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AmIEoQhhgxgEhpQAKhmB2gbQBUgggQAFQgxgChMhRQgphJCJhkQCYhSCQAfQCIASBUA7IAnAaIAFADQBMA+AqgRQA2AOAcARQCBBRiTB+Qg6AzhOAqQhpA3g/AcIg2AUQhrAmhzAUQgoAJgmAAQhNAAhJgjg");
	this.shape_24.setTransform(150.4968,616.9292);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AmUEcQheg1ABhqQAPhlB3gVQBVgbgQADQgxgFhHhSQglhKCOheQCbhLCMAlQCEAZBQA+IAjAYIAFAEQBMA9AqgPQA3ANAcASQCABSiUB8Qg7AzhOAqQhrA2hJAbIg2ARQhvAghyAOQggAGgeAAQhWAAhPgrg");
	this.shape_25.setTransform(150.08,615.2082);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AmfERQhbg6AGhqQAThkB4gOQBXgZgQADQgxgHhChVQghhLCShXQCehDCGArQCBAeBOBAIAeAYIAEADQBMA+ArgPQA3AOAbARQCBBUiWB7Qg7AyhPApQhsA2hTAYIg4APQhvAbhzAIQgYADgWAAQhfAAhUgyg");
	this.shape_26.setTransform(149.7387,613.5428);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AmpEDQhZg+ALhqQAZhiB5gJQBXgVgQACQgwgJg+hXQgdhLCWhRQDzhbD2C2QATAPAHAHIAEAEQBMA+ArgPQA3APAcARQCBBUiYB6Qg7AzhQAoQhtA2heAVIg4AMQhwAVh0ADIgcABQhoAAhag7g");
	this.shape_27.setTransform(149.4252,612.0252);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AmVEdQheg1AAhqQAPhlB3gWQBUgcgPAEQgygEhGhQQglhHCNhgQCahNCMAjQCEAXBRA9IAkAYIAFAEQBNA9ArgQQA3AOAcARQCCBSiWB9Qg7AyhPAqQhsA4hIAaIg2ASQhuAghzAPQggAGggAAQhUAAhPgpg");
	this.shape_28.setTransform(149.9606,615.6476);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Al8EzQhjgqgLhpQADhnB0ghQBSgmgPAGQgyABhOhHQgthCCBhuQCRheCVATQCLAHBXA3IAxAZIAEADQBOA9ArgRQA3ANAcARQCEBPiUCAQg7A0hOArQhqA4gyAeIg0AYQhpAshxAbQgyAPgxAAQhCAAhBgag");
	this.shape_29.setTransform(150.7934,619.6039);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AleFKQhogfgXhnQgIhmBvgvQBNgvgOAHQgyAHhWg8Qg0g8B0h8QCEhuCeAAQCQgKBdAwQAVAKApAPIAEADQBPA8AqgSQA4AMAcARQCFBNiSCCQg5A0hOAtQhqA6gYAeIgxAdQhkA5htAoQhCAchFAAQgvAAgvgNg");
	this.shape_30.setTransform(152.0375,623.5189);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ak0FgQhqgSgjhkQgUhkBpg8QBGg4gNAJQgwAMhdgvQg7g0BkiJQB2h9CkgWQCTgbBiAnQAWAJA2AOIAEADQBQA6AqgSQA4AMAcAPQCGBMiQCFQg4A0hNAuQg1AegHAOQgRASgaAZIguAjQhdBDhmA1QhSAuhaAAQgbAAgcgEg");
	this.shape_31.setTransform(152.7631,627.1303);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Aj+FzQhsgFgvhfQgghhBhhIQA/hAgMAKQguAShigjQhBgrBSiUQBmiKCogsQCVguBlAeQAWAHBDAMIAEADQBRA5AqgTQA4ALAdAPQCHBKiOCHQg4A2hMAuQg0AfAEAJQgIAOgUAcIgpAoQhVBPhfBAQhdBFh1AAIgJAAg");
	this.shape_32.setTransform(153.1776,630.5428);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AltEwQgshcBYhUQA3hHgLAMQgsAXhkgVQhFgjA+icQBTiWCphBQCUhBBpAUQBcAGAKAHIAEADQBSA4ApgTQA5AJAcAPQCIBIiMCJQg2A3hMAvQg0AfAPADQABALgOAdIgkAsQhKBYhYBMQhXBUh6ALIgQABQhgAAg1hSg");
	this.shape_33.setTransform(153.9655,633.719);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ak/FOQg2hXBNhdQAuhNgJANQgpAdhmgJQhIgZAriiQBAigCohXQCQhTBqAKQALACAwAAQAmAAARAEIAFADQBSA3ApgUQA5AIAdAPQCJBFiKCMQg2A3hLAxQgzAgAYgFQAJAFgIAeIgeAxQhABghOBVQhMBdh4AbQgVAEgTAAQhPAAg3hBg");
	this.shape_34.setTransform(155.0523,636.5144);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AkOFpQhAhQBChlQAlhSgIAOQglAhhlAEQhLgQAYimQAtimCjhsQCKhkBsABQALABA1gEQAqgDASAEIAFADQBTA1ApgVQA5AIAdAOQCKBDiICNQg1A5hKAyQgyAhAggNQAPAAgCAcIgZA0Qg0BnhEBeQhCBlhyAoQggAJgdAAQhCAAg1gyg");
	this.shape_35.setTransform(156.3141,638.7379);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AjdGAQhJhIA3hsQAchVgGAOQgiAlhjAQQhMgHAGipQAaipCdh+QCDh0BrgIQALAAA5gIQAugGAUACIAEADQBUAzApgVQA4AHAeAOQCLBBiFCPQg1A6hJAzQgyAiAmgWQAVgHAEAdIgTA1QgpBsg5BkQg3BshtA0QgoASgmAAQg3AAgygng");
	this.shape_36.setTransform(157.6515,640.4051);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AisGTQhPhBAshwQAThYgFAPQgdAohiAbQhLAAgMioQAIiqCViQQB7iCBrgQQALAAA8gNQAwgKAVABIAFADQBVAyAogVQA5AGAeANQCLA/iDCRQgzA7hJA0QhCAuBfgcIgOA2QgeBwguBqQgsBxhoA+QguAagtAAQgvAAgugcg");
	this.shape_37.setTransform(158.8971,641.7242);
	this.shape_37._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(34).to({_off:false},0).wait(11));

	// Каркас_19
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAjE4QhPgYhLh+IgBgCIgnhGQhLiWAFh/QAHhCAuglIARgLQAhgTAlADQBSAHDFDGIALASQA/B1hHC1QgtBzhMAAQgSAAgTgHg");
	this.shape_38.setTransform(210.0779,529.8808);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAqEzQhEgXhPh6Igog+QhWiQgGh/QAChCArgoIAQgNQAggVAlgBQBSACDUC1IATAYQBCByhIC6QgtB2hNAAQgRAAgTgGg");
	this.shape_39.setTransform(209.259,530.2484);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAwEsQg4gVhTh3IgCgCIglgzQhiiIgPh+QgDhCAngsIAPgOQAegYAlgCQBTgGDhCkIAaAfQBGBwhIC9QguB5hOAAQgRAAgSgGg");
	this.shape_40.setTransform(208.5051,530.7005);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA2EmQgtgVhWh0IgBgCQgXgfgNgJQhsiAgZh9QgIhCAkguIANgPQAcgaAlgGQBSgMDtCSQAIAHAbAcQBJBuhJDBQguB8hPAAQgQAAgSgFg");
	this.shape_41.setTransform(207.7273,531.2278);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AA8EeQghgUhZhwIgCgDQgYgegJAAQh2h4gjh6QgNhBAggxIANgQQAZgcAkgJQBRgSD4B+QAIAHAkAiQBMBqhJDGQgvB+hOAAQgQAAgSgFg");
	this.shape_42.setTransform(206.9777,531.7997);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ABCEWQgWgWhchrIgBgCQgagdgFAIQh+hvgth3QgSg/Acg0IALgRQAYgeAjgLQBPgZEBBrQAJAGAsAmQBPBnhJDJQgvCChPAAQgQAAgQgFg");
	this.shape_43.setTransform(206.2599,532.44);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ABIEOQgKgXhfhoIgCgCQgZgcgBAQQiHhkg2hzQgYg9AZg2IAKgSQAVggAigOQBNgfEIBXQAJAEA1ArQBSBjhJDNQguCEhPAAQgPAAgQgEg");
	this.shape_44.setTransform(205.5752,533.0896);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("ABNEFQABgZhghjIgCgCQgagbAEAYQiPhZg+huQgdg8AUg3IAJgTQASghAhgRQBLglEOBBQAKAFA9AuQBUBfhIDQQguCHhPAAQgPAAgPgFg");
	this.shape_45.setTransform(204.9298,533.7424);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ABRD9QANgdhjheIgBgCQgbgZAKAgQiWhOhHhpQggg6APg4IAHgUQAQgiAfgUQBIgqESAsIBRA0QBWBbhIDTQgtCKhPAAQgOAAgPgFg");
	this.shape_46.setTransform(204.3503,534.3633);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ABVD3QAYghhlhZIgCgCQgagYAQAnQibhChPhjQgmg3AMg6IAFgTQANgkAegWQBEgvEVAVIBaA2QBYBWhHDXQgsCLhPAAQgNAAgPgEg");
	this.shape_47.setTransform(203.8143,534.8366);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ABZD0QAjgmhmhTIgCgCQgagXAVAtQifg1hXhdQgpgzAGg7IAEgUQALgkAcgZQA/g0EXgBQAGABBdA2QBYBRhEDaQgsCNhOAAQgNAAgOgEg");
	this.shape_48.setTransform(203.3358,534.9158);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ABcDzQAtgqhmhPIgCgBQgOgLARAXQAJAPgLADQiigphehXQgtgvACg7IACgUQAHglAagbQA8g5EVgWQAHAABmA2QBZBNhDDcQgqCOhOAAQgNAAgNgEg");
	this.shape_49.setTransform(202.9346,534.7644);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ABeDzQA3gxhmhKIgCgBQgOgKAVAZQAMARgLAFQikgbhlhQQgxgsgDg6IABgUQAFgmAXgcQA3g+ETgsQAHAABvA1QBaBIhBDfQgpCPhOAAQgMAAgNgDg");
	this.shape_50.setTransform(202.5923,534.676);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABfDxQBBg4hmhEIgCgBQgOgJAaAcQAOATgKAGQingPhphHQg1gngHg7IgBgUQABgmAWgeQAxhCEPhBQAHgBB4A1QBaBDg/DgQgnCQhNAAQgMABgNgEg");
	this.shape_51.setTransform(202.3013,534.6499);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ABgDvQBKg/hlg+IgCgCQgNgIAdAdQARAUgJAJQingChvg+Qg4gkgLg6IgDgTQgCgmAUggQAshFEJhXQAGgBCCAzQBYA+g8DiQgnCRhLAAQgMAAgMgDg");
	this.shape_52.setTransform(202.094,534.6679);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ABcDxQBDg4hlhEIgCgBQgOgKAZAcQAPATgKAHQingPhphHQg1gpgHg5IgBgVQACgmAWgeQAxhCEPhAQAHgBB5A2QBYBDhBDgQgpCPhLAAQgNAAgNgDg");
	this.shape_53.setTransform(202.4762,534.4381);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ABXDyQA7gxhlhKIgCgCQgNgKAVAaQAMASgKAFQilgdhkhPQgxgtgCg6IABgUQAEgmAYgcQA3g+ETgqQAHAABwA4QBYBJhGDdQgrCNhMAAQgNAAgOgEg");
	this.shape_54.setTransform(202.9256,534.2593);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("ABSDyQAygrhkhQIgCgCQgNgLASAZQAJAQgLADQijgqhchYQgtgvACg7IADgUQAHglAbgaQA7g6EWgTQAHAABnA6QBXBOhKDaQguCLhMAAQgNAAgPgFg");
	this.shape_55.setTransform(203.4743,534.157);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ABLDzQAqgnhjhWIgBgBQgagXAWAxQieg4hWhdQgpg1AIg6IAEgUQAKgkAdgYQBAg1EWAEQAHABBeA6QBVBThODYQgwCIhMAAQgOAAgQgFg");
	this.shape_56.setTransform(204.0833,534.138);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("ABFD2QAggihhhbIgCgCQgYgZAQArQiahEhNhkQgmg3ANg6IAGgTQANgkAegVQBFgvEVAaQAFABAqAbIAtAfQBTBZhSDUQgyCFhLAAQgQAAgQgGg");
	this.shape_57.setTransform(204.7377,533.7434);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AA8D9QAXgehdhiIgCgCQgZgaALAlQiVhRhEhpQggg7AQg4IAIgTQAQgiAggTQBIgpESAwQAFACAlAbIApAeQBQBehVDQQg0CChLAAQgQAAgSgGg");
	this.shape_58.setTransform(205.5021,533.02);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AA1EFQAMgchahmIgCgCQgYgcAFAeQiNhcg8hvQgbg8AVg3IAJgTQATghAigQQBLgjENBGQAKAFBAA1QBOBjhZDMQg1B/hKAAQgSAAgSgHg");
	this.shape_59.setTransform(206.2927,532.1655);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAsENQACgZhXhsIgBgCQgYgeABAYQiEhngzh0QgXg+Aag1IAKgSQAWgfAigOQBOgdEHBcQAJAGA4AzQBKBnhbDIQg3B7hKAAQgSAAgTgIg");
	this.shape_60.setTransform(207.1495,531.2805);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAiEVQgIgYhThxIgCgCQgWgegDAQQh8hygph4QgRhAAegzIALgQQAYgdAkgLQBQgXD+ByQAJAFAvAwQBIBrheDFQg4B3hJAAQgTAAgVgJg");
	this.shape_61.setTransform(208.062,530.4088);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAZEdQgTgYhPh1IgBgCQgWgggGAIQhyh6ggh8QgLhBAigwIAMgQQAbgbAkgIQBRgQD1CGQAIAHAoArQBDBvhfDAQg5B0hIAAQgVAAgVgKg");
	this.shape_62.setTransform(208.9997,529.5738);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AATEkQgcgYhNh5IgCgCQgUghgJABQhpiCgXh9QgIhCAlguIAOgPQAdgZAkgGQBTgKDqCWQAIAHAhAnQBBByhgC9Qg4BxhIAAQgVAAgWgKg");
	this.shape_63.setTransform(209.653,529.0862);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAOEqQgmgZhLh8IgBgCQgUghgLgIQhgiJgOh+QgEhDApgrIAPgOQAegXAlgDQBSgFDgCmIAiAqQA+BzhfC6Qg4BvhHAAQgWAAgWgKg");
	this.shape_64.setTransform(210.3103,528.6782);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAIEwQgwgbhHh+IgBgCQgUgjgMgPQhXiPgFh/QABhDArgoIAQgNQAggVAlgBQBSABDVC1IAaAkQA7B2heC3Qg3BshHAAQgVAAgYgKg");
	this.shape_65.setTransform(210.9626,528.2864);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AADE1Qg6gdhEiBIghg8QhNiVADiAQAGhCAuglIARgMQAggSAlABQBTAHDHDDIAVAeQA3B4hcCzQg4BqhGAAQgWAAgXgKg");
	this.shape_66.setTransform(211.6483,527.9969);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgBE5QhFgghBiDIgghFQhDiaAMh/QAKhBAwgiIASgLQAigRAlAFQBRAMC6DQQAGAJAIAQQA0B5hbCwQg2BohFAAQgXAAgWgLg");
	this.shape_67.setTransform(212.2857,527.753);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHE9QhOgig9iFIgBgDQgQgkgOgnQg4ieAUh+QAPhBAygeIASgKQAkgPAkAIQBQASCsDcIAIASQAxB7haCsQg0BlhFAAQgXAAgYgLg");
	this.shape_68.setTransform(212.9036,527.5297);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgLFAQhYgmg4iHIgBgCQgPglgOgvQgtiiAch8QAUg/A0gcIATgIQAkgMAjAKQBPAXCdDnQAEAKgCACQAtB8hXCpQg0BihEAAQgXAAgYgLg");
	this.shape_69.setTransform(213.4145,527.4027);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgNFCQhigqg0iHIgBgDQgOglgNg3QgjikAmh6QAXg+A2gYIAUgHQAlgJAiAMQBNAcCNDyQAEAKgGgGQApB9hVClQgzBghDAAQgXAAgYgMg");
	this.shape_70.setTransform(213.8405,527.3316);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgQFEQhqgvgwiIIgBgDQgMglgNg/QgXimAuh3QAcg9A3gUIAUgFQAlgHAhAOQBMAiB8D6QADAKgKgMQAlB9hSCiQgxBdhCAAQgYAAgZgMg");
	this.shape_71.setTransform(214.1641,527.322);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgRFGQhzg0gsiJIgBgDQgMglgKhHQgLinA1h0QAgg7A4gQIAUgEQAngEAfAQQBKAnBqEDQADAKgOgVQAhB+hPCeQgwBbhAAAQgYAAgZgMg");
	this.shape_72.setTransform(214.4744,527.3473);
	this.shape_72._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(34).to({_off:false},0).wait(11));

	// Каркас_17
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AksBcQg1gfBXhbQBFhPBohDIB0gBQAMAaAXAOQApAeBHAKQBAAPA4AlQAtAlgUA3QgeA5g+AhQhGAgiZAIIgaABIgFAAQi/AAhOhWg");
	this.shape_73.setTransform(388.5866,623.9256);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AkrBjQg2geBVhdQBDhRBmhFIB1gDQAMAaAbAPQApAcBKAOQBAAQA2AmQAuAlgWA4QgfA3g9AfQhGAfiYAHIgbABIgHAAQi9AAhMhPg");
	this.shape_74.setTransform(388.896,623.4264);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AkqBpQg3gcBThfQBChSBkhIIB1gFQAMAZAfAQQAqAcBMARQA/ARA2AnQAsAlgWA4QggA3g8AcQhGAdiXAHIgbABIgKAAQi7AAhKhJg");
	this.shape_75.setTransform(389.1588,622.9276);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AkpBwQg3gbBQhgQBAhUBjhKIB1gIQANAZAiAQQApAcBPAUQA/ASA2AoQAsAmgYA3QghA3g7AZQhFAbiXAHIgbABIgOAAQi3AAhJhCg");
	this.shape_76.setTransform(389.4678,622.4294);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AkoB2Qg4gaBPhiQA+hVBhhMIB1gKQANAZAmAQQAqAcBRAXQA/ATA1ApQArAngZA3QghA2g7AWQhFAZiWAHIgbABIgPAAQi3AAhHg8g");
	this.shape_77.setTransform(389.7331,621.9298);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AknB9Qg4gZBNhkQA8hWBghOIB1gNQANAZApAQQAqAcBUAaQA+AUA0AqQArAogaA2QgjA2g6AUQhEAXiVAGIgbAAIgUABQiyAAhGg1g");
	this.shape_78.setTransform(389.9947,621.4077);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AkmCDQg4gXBKhmQA6hXBehQIB1gPQAOAXAtARQAqAdBWAcQA+AWAzAqQAqAogaA2QgkA1g6ASQhDAUiVAGIgbABIgWAAQiwAAhEgug");
	this.shape_79.setTransform(390.2527,620.9337);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AkkCKQg5gXBIhnQA5hZBchSIB1gRQANAXAxARQAqAdBZAfQA9AXAzArQApApgbA2QglA0g5APQhDASiUAGIgbABIgdAAQipAAhCgng");
	this.shape_80.setTransform(390.4894,620.4133);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AkiCQQg6gVBGhpQA2haBbhTIB0gVQAPAYA0ARQAqAcBbAiQA9AYAyAtQAoApgcA1QgmA0g3AMQhDARiTAFIgbABIglAAQijAAg+ghg");
	this.shape_81.setTransform(390.7498,619.8948);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AkhCWQg6gUBEhqQA0hbBZhWIB0gWQAQAXA3ARQApAcBeAlQA9AZAxAtQAnArgdA0QgmAzg3AKQhCAOiTAFIgbABIgrAAQicAAg9gag");
	this.shape_82.setTransform(390.9736,619.3985);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AkfCcQg6gSBBhtQAzhbBWhYIB0gZQAQAXA7ASQApAcBhAnQA8AaAwAtQAnAsgeA0QgoAzg2AGQhBANiSAEIgbABIg6ABQiQAAg4gUg");
	this.shape_83.setTransform(391.1972,618.8862);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AkdCiQg7gRA/huQAxhcBVhaIBzgbQAQAWA/ASQApAbBjArQA8AbAvAuQAmAtgfAzQgoAyg2AEQhAAKiRAEIgbACIhKAAQiCAAg0gNg");
	this.shape_84.setTransform(391.3947,618.3971);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AkbCoQg7gRA8huQAvheBThbIBygeQARAWBCASQAqAcBlAsQA7AdAuAvQAlAtggAzQgpAxg0ABQhAAIiQAEIgbABIhtACQhlAAgrgHg");
	this.shape_85.setTransform(391.6105,617.9056);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AkZCtQg7gPA6hwQAthfBQhdIByggQASAWBGASQAoAbBoAwQA7AdAtAwQAkAuggAyQgqAwg0gBQg/AGiPADIgbACQhoADhBAAQg2AAgcgCg");
	this.shape_86.setTransform(391.7895,617.4513);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AkbAyQArhgBPhfIBxgjQASAVBJAUQApAaBqAzQA6AeAtAxQAjAugiAyQgqAvgzgDQg/ADiOAEIgaABIj5AIQg8gOA4hxg");
	this.shape_87.setTransform(391.9799,617.15);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AkaCrQg7gPA7hwQAtheBRhdIByggQARAVBEASQApAbBnAtQA7AcAvAvQAlAtggAzQgpAxg0ABQhAAJiPAEIgbACQhbAEg/AAQhCAAghgFg");
	this.shape_88.setTransform(391.793,617.6065);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AkcCkQg7gRA9huQAvhdBUhbIBzgdQAQAXA+AQQAqAbBjAoQA8AZAxAtQAnAsgeA0QgnAzg1AFQhBANiRAHIgbACQg9ADgwAAQhmAAgtgNg");
	this.shape_89.setTransform(391.5658,618.2113);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AkfCdQg6gTBAhsQAyhcBWhZIBzgaQAQAXA4AQQAqAaBgAiQA9AYAyArQApAqgcA1QglA0g2ALQhCAQiTAKIgaACQgyADgqAAQh1AAg0gVg");
	this.shape_90.setTransform(391.3052,618.8566);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AkgCVQg7gTBDhrQA0hbBZhWIBzgXQARAWAxAQQArAaBbAdQA+AVA0ApQAqAogZA2QgjA2g4AQQhCAUiUAMIgaACQgtACgmAAQh+AAg3gdg");
	this.shape_91.setTransform(391.0147,619.4836);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AkiCOQg6gWBGhpQA2hZBbhUIB0gUQAPAXAsAPQArAZBXAYQA/ASA1AoQAsAmgXA3QghA3g4AVQhDAZiVANIgaACQgqADgkAAQiDAAg7glg");
	this.shape_92.setTransform(390.7181,620.1147);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AkjCGQg6gXBJhnQA5hYBchSIB1gRQAOAYAnANQArAbBSARQBAAQA3AlQAtAlgVA4QgeA4g6AaQhCAdiXAPIgaADQgmADgiAAQiJAAg+gug");
	this.shape_93.setTransform(390.3849,620.763);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AklB+Qg4gYBLhlQA7hXBfhPIB1gOQANAYAhANQArAaBOAMQBAANA4AkQAvAjgSA4QgdA5g6AfQhDAhiXARIgaADQglADggAAQiMAAhCg2g");
	this.shape_94.setTransform(390.0393,621.3715);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AklB2Qg4gZBNhjQA+hWBghNIB1gLQANAYAbANQArAaBKAHQBAAKA6AhQAwAigQA5QgaA6g7AkQhDAliXATIgaADQgkAEggAAQiOAAhEg/g");
	this.shape_95.setTransform(389.6365,622.0054);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AkmBuQg3gbBQhgQBAhUBihLIB1gIQANAYAUANQAsAZBEACQBBAIA7AfQAyAfgPA6QgXA7g7ApQhDAoiYAWIgaADQgiAEggAAQiPAAhIhHg");
	this.shape_96.setTransform(389.2439,622.6145);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AkmBnQg3gcBThfQBBhSBlhIIB0gGQANAaAOALQAsAZA/gDQBCAFA8AdQAzAdgMA6QgsB4kAA2IgaAEQghADgeAAQiSAAhKhOg");
	this.shape_97.setTransform(388.8303,623.1918);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AklBpQg3gbBRhgQBBhTBkhJIB0gHQANAaAOALQAtAYA/gEQBBAFA9AcQAzAdgMA7QgqB3j/A5IgaAEQgkAFghAAQiNAAhKhNg");
	this.shape_98.setTransform(388.9348,623.001);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AklBtQg2gcBQhgQBAhUBihKIB1gIQANAZAOAMQAtAYA/gFQBCAEA8AbQAzAdgKA7QgpB4j+A7IgaAEQgnAFgkAAQiJAAhKhJg");
	this.shape_99.setTransform(389.0145,622.7891);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AkkBvQg3gaBQhiQA+hUBihLIB1gJQANAZAPALQAsAYBAgGQBBAEA9AaQA0AcgLA7QgnB5j+A+IgaAEQgqAFgmAAQiFAAhJhHg");
	this.shape_100.setTransform(389.1144,622.5877);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AkjByQg3gaBOhiQA+hWBhhMIB1gKQANAYAPAMQAtAWA/gFQBCADA9AaQA0AbgKA7QgmB5j9BBIgaAEQgtAHgoAAQiCAAhIhFg");
	this.shape_101.setTransform(389.224,622.4218);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AkiB0Qg4gZBOhjQA9hWBghNIB0gLQAOAYAPALQAtAWA/gGQBCACA9AZQA0AbgIA8QglB5j9BDIgaAFQgvAHgqAAQh+AAhIhDg");
	this.shape_102.setTransform(389.3102,622.2172);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AkgB3Qg4gZBMhkQA8hWBfhOIB1gNQANAYAPALQAuAWA/gHQBCACA9AYQA1AbgJA7QgjB6j8BFIgaAFQgzAJgsAAQh6AAhGhBg");
	this.shape_103.setTransform(389.3963,622.0249);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AkfB6Qg5gZBLhkQA7hXBfhPIB0gOQAPAYAOAKQAuAWA/gIQBCABA+AYQA0AagHA7QgiB6j8BJIgaAFQg1AJgtAAQh4AAhFg+g");
	this.shape_104.setTransform(389.4831,621.8407);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AkfB8Qg4gXBKhlQA6hYBehQIB1gQQANAYAQALQAuAVA/gJQBBABA+AXQA1AZgHA8QghB6j6BLIgbAGQg2AKgwAAQh0AAhGg9g");
	this.shape_105.setTransform(389.5677,621.6436);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AkeB/Qg4gXBJhnQA5hXBdhSIB1gQQANAYAQAKQAuAVA/gKQBBAAA/AXQA1AYgHA8QgfB6j6BOIgbAGQg5ALgyAAQhwAAhFg6g");
	this.shape_106.setTransform(389.653,621.449);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AkcCBQg5gWBIhoQA4hYBchSIB1gSQAOAYAPAKQAuAUA/gKQBCgBA+AWQA2AYgGA8QgeB7j5BQIgbAGQg8ANg0AAQhtAAhDg5g");
	this.shape_107.setTransform(389.7413,621.2592);
	this.shape_107._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73}]}).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_107).wait(34).to({_off:false},0).wait(11));

	// Каркас_15
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AlpTWQmqgYlHh8QkHh7CNhnQBPhhB1gvQA5gpBliYQBYiAAshZQASgnAahSQAbhUAZhZQAWhQAHgjQAIglA9jqQAyi/ApiBQAehWBdiHQBhh+C+h2QDChtEZAYQD6APCaBfQBSA5A9A0QCBB5CAFKQBLDCgPDlQgJDXg3C7QgxCxg0BYQhDB0iSDZQi2DAnaCRQjqA3jeAAQhOAAhNgHg");
	this.shape_108.setTransform(291.2836,529.2029);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AlqTWQmrgYlHh9QkGh8CNhnQBQhhB1guQA4gpBmiZQBYh/AshZQASgnAbhSQA6i3AXhoQAIgmA+jqQAzjAApiBQAehWBdiHQBih9C+h2QDDhsEYAZQD6AQCbBfQBQA5A9A1QCBB5CAFLQBKDCgQDkQgKDXg3C7QgxCxg0BXQhEB0iSDZQi2C/nbCRQjpA2jdAAQhPAAhNgHg");
	this.shape_109.setTransform(290.9474,529.1882);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AlsTVQmrgZlGh9QkGh8CNhmQBQhiB1guQA4gpBmiYQBYh/AthZQATgnAZhSQA7i0AXhrQAIgmA/jrQAzjAAqiCQAfhWBdiGQBih9C/h1QDDhrEYAZQD6ARCaBgQBRA5A9A1QCAB5B/FMQBJDCgRDkQgKDWg4C7QgxCxg1BXQhEB0iSDYQi2DAnaCPQjpA1jbAAQhQAAhPgHg");
	this.shape_110.setTransform(290.6016,529.1504);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AltTVQmrgZlGh+QkGh9CNhmQBQhhB1guQA5gpBmiYQBYh/AthYQATgoAZhRQAchVAZhZQAWhPAIgjQAHglBAjsQA1jBAqiCQAfhWBdiGQBjh8C/h0QDDhrEYAaQD7ASCZBgQBRA5A8A1QCAB7B+FLQBJDDgSDjQgLDWg4C7QgyCxg0BXQhEB0iTDXQi2C/nbCPQjmA0jcAAQhRAAhPgHg");
	this.shape_111.setTransform(290.2694,529.1435);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AlvTVQmqgblHh+QkFh9CNhmQBQhhB2gtQA4gpBniYQBYh/AthZQATgnAahRQAbhVAZhZQAXhPAHgjQAIglBAjtQA2jCAqiBQAfhWBfiGQBjh8C/h0QDEhqEYAcQD6ASCZBhQBRA6A8A1QB/B6B9FMQBIDDgTDiQgLDXg5C6QgyCxg0BXQhEBziTDYQi2C+nbCOQjlA0jaAAQhSAAhSgHg");
	this.shape_112.setTransform(289.9037,529.1368);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AlwTUQmrgblGh/QkFh9CNhmQBQhhB2gtQA4gpBniYQBZh+AthZQATgnAahSQAbhUAZhZQAXhQAIgiQAIglBBjuQA2jCAriCQAfhVBfiGQBkh8C/hzQDEhpEYAcQD7ATCYBiQBRA5A8A2QB/B7B7FMQBIDDgUDiQgLDWg6C7QgyCwg1BXQhFBziSDXQi2C+ncCNQjkA0jYAAQhUAAhSgIg");
	this.shape_113.setTransform(289.5832,529.1133);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AlxTUQmrgclGh/QkFh+CNhlQBRhhB1gtQA5gpBniXQBYh/AuhZQATgnAahRQAchUAZhZQAXhQAHgiQAIgmBDjuQA2jDAsiCQAfhVBfiFQBkh8DBhyQDEhpEYAdQD6ATCZBjQBPA6A8A1QB/B8B6FNQBIDDgVDhQgMDWg6C6QgzCxg1BXQhFBziSDWQi2C+ncCMQjiAyjXAAQhVAAhUgHg");
	this.shape_114.setTransform(289.2292,529.0995);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AlzTTQmqgclGiAQkFh+CNhlQBRhhB2gtQA4gpBoiXQBYh/AuhYQATgnAahRQAchUAZhaQAXhPAIgjQAIglBDjvQA4jDAriCQAghWBgiFQBkh7DBhyQDEhoEYAeQD6AVCZBiQBPA7A8A2QB+B8B6FNQBGDEgVDfQgNDXg6C6QgzCwg2BXQhFBziSDWQi3C9nbCLQjiAyjVAAQhXAAhVgIg");
	this.shape_115.setTransform(288.889,529.0744);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("Al1TTQmqgdlGiAQkFh/COhlQBRhgB2gtQA4gpBoiXQBZh/AthYQATgnAbhSQAchUAZhZQAXhPAIgjQAIglBEjwQA4jEAtiCQAghVBgiFQBlh7DBhxQDEhnEYAfQD6AVCYBjQBQA7A7A2QB+B8B4FOQBHDEgXDfQgNDWg7C6Qg0Cwg1BXQhGBziSDVQi2C9ncCLQjgAxjUAAQhYAAhXgIg");
	this.shape_116.setTransform(288.5562,529.0675);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("Al2TSQmqgdlGiBQkFh/COhlQBRhgB2gtQA5goBoiXQBZh/AthYQATgnAbhRQAchUAZhZQAYhQAHgiQAJglBFjxQA4jEAtiDQAhhVBgiEQBlh7DChwQDFhnEYAgQD6AWCXBjQBQA7A7A2QB+B9B3FOQBFDEgXDfQgODWg7C6Qg0Cwg2BXQhGByiSDVQi3C8ncCKQjeAxjUAAQhZAAhXgJg");
	this.shape_117.setTransform(288.2108,529.0248);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("Al3TSQmrgelFiBQkEiACOhkQBRhgB1gtQA5goBoiXQBZh/AuhYQATgnAbhRQAchUAahZQAXhPAIgjQAIglBGjyQA6jFAtiCQAhhVBhiEQBlh6DChwQDGhnEXAhQD6AYCXBkQBPA6A8A3QB8B9B3FPQBFDEgZDeQgODWg7C6Qg1Cwg2BWQhGBziSDUQi3C8ncCJQjeAwjSAAQhaAAhYgJg");
	this.shape_118.setTransform(287.8911,528.9899);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("Al5TRQmrgelFiCQkEiACOhkQBRhgB2gtQA5goBoiXQBah+AuhYQATgnAbhRQAchUAahZQAXhPAIgjQAIglBHjzQA7jFAtiCQAhhVBiiEQBmh6DChvQDGhmEXAiQD6AYCXBkQBPA8A7A2QB8B+B1FPQBFDEgZDdQgPDWg8C6Qg1Cwg2BWQhHByiSDUQi3C8ncCIQjbAwjPAAQhdAAhbgKg");
	this.shape_119.setTransform(287.5513,528.9792);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("Al7TRQmqgglFiCQkEiACOhkQBShgB2gsQA5goBoiXQBah+AuhYQATgnAbhRQAchUAahZQAYhPAIgjQAIglBIjzQA7jGAuiDQAihVBhiDQBmh6DDhuQDGhlEXAiQD6AZCXBlQBPA8A6A2QB9B+B0FQQBDDEgaDdQgPDWg9C5Qg1Cwg2BWQhHByiSDUQi3C7ncCHQjaAvjPAAQheAAhcgJg");
	this.shape_120.setTransform(287.2035,528.9687);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("Al8TQQmqgglFiCQkEiBCPhjQBRhgB2gsQA5gpBpiWQBZh+AvhYQATgnAbhRQAchUAahZQAYhPAIgiQAJgmBIj0QA8jGAviDQAihUBiiEQBmh5DDhuQDHhkEXAjQD6AaCWBlQBPA8A6A3QB8B+BzFQQBDDFgbDcQgQDWg9C5Qg2Cwg2BWQhHBxiTDTQi2C7ndCHQjZAujNAAQhfAAhdgKg");
	this.shape_121.setTransform(286.8653,528.9245);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("Al+TQQmqghlEiDQkEiBCPhjQBRhgB2gsQA5goBpiXQBah+AvhXQATgnAbhRQAdhUAahZQAYhPAIgjQAIglBKj1QA8jHAwiCQAihVBiiDQBnh5DChtQDIhkEXAlQD6AaCWBmQBPA8A6A3QB8B/BxFQQBCDFgbDbQgQDWg+C5Qg2Cwg3BWQhHBxiTDTQi2C6ndCGQjXAujNAAQhgAAhfgKg");
	this.shape_122.setTransform(286.5048,528.9139);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("Al2TUQmrgdlFiAQkFh/COhlQBRhhB1gsQA5gpBniXQBZh/AuhYQATgnAahRQAchVAahZIAfhxQAIgmBIj1QA7jIAuiDQAhhVBhiDQBmh6DDhvQDGhlEXAiQD6AYCXBlQBPA7A6A3QB9B9B0FQQBFDEgaDbQgODWg9C6Qg0Cwg3BWQhGBziRDTQi1C8nbCKQjgAxjUAAQhYAAhWgIg");
	this.shape_123.setTransform(287.6059,529.1466);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AlvTXQmqgZlHh+QkGh8CNhmQBQhiB1gtQA5gpBmiZQBXh/AthYQATgoAahRQAbhVAZhZQAWhPAIgjQAHglBGj2QA6jIAsiEQAhhVBgiEQBlh7DChxQDFhnEYAgQD5AWCYBkQBQA6A7A3QB+B8B3FOQBGDEgYDcQgNDWg7C6QgzCwg1BXQhFBziPDVQi0C9naCOQjoA1jcAAQhPAAhPgHg");
	this.shape_124.setTransform(288.7117,529.351);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AlnTbQmrgWlHh7QkHh6CMhnQBPhiB1gvQA4gpBliZQBWiAAthZQARgoAahSQAahUAYhZQAWhQAHgjQAIgmBEj2QA3jJAsiDQAghWBfiFQBkh8DAhyQDFhoEYAdQD6AUCYBiQBQA6A8A2QB/B7B6FOQBGDDgVDcQgLDWg5C7QgyCwg0BYQhEBziODWQiyC/nZCSQjuA4jjAAQhJAAhHgFg");
	this.shape_125.setTransform(289.7695,529.5912);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AlgTeQmrgSlIh4QkIh4CLhoQBOhjB1gwQA4gqBjiZQBWiBArhZQASgpAYhRQAahVAYhZQAVhQAHgjQAHgmBBj3QA2jJAriEQAfhWBeiFQBjh9DAh0QDDhqEYAbQD7ASCZBhQBQA5A8A2QCAB6B9FMQBJDDgUDcQgJDWg4C7QgwCxg0BYQhDB0iMDXQiwDAnYCWQj2A9jpAAQhCAAhAgFg");
	this.shape_126.setTransform(290.8786,529.7854);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AlYThQmrgOlKh1QkJh2CKhqQBOhjB0gxQA3gqBjibQBUiBArhaQARgoAYhSQAZhVAXhaQAUhQAHgjQAHglA/j4QA1jJApiFQAehWBdiHQBih9C/h1QDChsEZAYQD6AQCaBgQBRA5A9A0QCBB6B/FLQBLDCgTDcQgHDXg2C7QguCyg0BYQhCB0iKDZQiuDBnXCaQj+BBjxAAQg5AAg4gEg");
	this.shape_127.setTransform(291.9712,530.0049);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AlRTlQmrgLlKhzQkKh0CJhqQBNhkBzgyQA3grBiibQBTiCAqhaQAQgpAYhSQAYhVAWhaIAahzQAHgmA9j4QAzjJAoiFQAehXBciHQBhh+C9h3QDChuEYAWQD7AOCbBfQBRA3A9A1QCCB5CCFJQBMDBgQDdQgFDWg1C8QgtCygyBZQhCB1iHDaQiuDCnVCeQkGBFj5AAQgxAAgwgCg");
	this.shape_128.setTransform(293.0794,530.2139);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AlJToQmrgIlMhvQkLhyCJhsQBLhkB0gzQA2grBgidQBSiCAphbQARgoAXhSQAXhWAVhaQAThRAGgiQAGgmA8j5QAxjKAniFQAdhXBbiIQBgh/C8h4QDBhwEZAUQD7AMCbBdQBSA4A9AzQCEB4CEFIQBODBgPDdQgDDWgzC9QgsCygxBZQhBB2iGDaQirDEnUCiQkMBKkAAAQgqAAgpgCg");
	this.shape_129.setTransform(294.1804,530.4214);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AlBTrQmsgElMhtQkMhvCHhtQBLhlBzg0QA2gsBfidQBRiDAohbQARgpAWhSQAXhWAUhaQAShRAGgjQAGgmA5j5QAwjKAmiGQAchWBZiJQBfiAC8h6QC/hxEZASQD7AJCcBcQBTA3A+AzQCDB2CIFIQBQC/gNDdQgCDXgxC9QgqCygxBZQhAB3iEDcQiqDFnSCmQkUBOkGAAIhEgBg");
	this.shape_130.setTransform(295.2912,530.6425);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("Ak6TtQmsAAlNhqQkNhtCHhuQBKhmByg0QA2gsBdieQBQiFAohbQAQgoAVhTQAWhWAUhaQARhRAGgjQAFgmA4j5QAtjLAliGQAchXBYiKQBeiBC6h7QC/hzEZAQQD7AHCdBbQBTA1A+AzQCFB1CLFHQBRC/gLDdQAADWgwC+QgoCzgxBZQg+B3iCDdQioDHnRCqQkaBSkMAAIg4gBg");
	this.shape_131.setTransform(296.4102,530.8275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AkzTwQmrADlPhnQkNhrCFhvQBKhmBxg2QA2gsBcifQBPiFAmhbQAQgpAVhTQAVhWAThaQARhSAFgiQAFgmA1j6QAsjMAkiGQAbhXBXiLQBdiBC5h9QC+h0EZANQD7AFCeBZQBTA2A/AyQCGBzCNFGQBTC+gJDdQACDXguC+QgoCzgvBaQg+B3iADeQinDJnPCtQkiBXkUAAIgnAAg");
	this.shape_132.setTransform(297.5581,531.0057);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("Ak6TuQmrAAlNhqQkNhsCGhuQBKhmBzg1QA1gsBdieQBQiFAohbQAQgoAVhTQAWhWAThaQAShRAFgjQAGgmA3j7QAujLAliGQAchXBYiKQBeiAC7h8QC+hyEaAPQD6AICdBaQBTA2A/AzQCEB1CLFHQBQC/gLDcQAADXgvC9QgpCzgwBaQg+B3iCDcQioDHnRCqQkbBUkOAAIg1gBg");
	this.shape_133.setTransform(296.4245,530.8729);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AlATrQmsgClMhsQkMhvCHhuQBLhlByg0QA2gsBfidQBQiEAphaQAQgpAWhSQAzjDAPhhQAGgmA6j7QAvjMAniGQAchWBaiJQBfiAC7h6QDAhwEZASQD7AKCcBbQBSA3A+A0QCEB2CHFIQBPDAgNDbQgBDXgxC9QgrCygxBZQg/B3iDDbQipDGnSCnQkVBPkIAAIhBgCg");
	this.shape_134.setTransform(295.3057,530.7117);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AlHTpQmrgGlMhvQkLhwCIhsQBLhlB0gzQA2gsBficQBSiDAphbQAQgpAXhSQAXhVAVhbQAThQAGgjQAFgmA9j7QAxjMAoiGQAdhWBbiIQBgh/C9h4QDBhvEZAUQD6ANCbBdQBSA3A+A0QCCB4CFFIQBNDBgPDbQgEDWgyC9QgsCygyBZQhAB2iEDaQirDEnTCkQkOBLkBAAQgoAAgogCg");
	this.shape_135.setTransform(294.1872,530.5563);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AlOTnQmrgJlLhxQkKhzCJhrQBMhlBzgyQA3grBhicQBSiCAqhaQAQgpAYhSQAYhVAVhaIAahzQAGgmA+j8QA0jMApiGQAdhWBdiHQBhh+C+h3QDBhtEZAXQD6APCbBeQBRA5A9A0QCCB5CBFKQBMDBgSDaQgFDXg0C8QgtCxgyBZQhBB1iGDaQisDCnUCgQkJBHj9AAQgtAAgtgCg");
	this.shape_136.setTransform(293.0716,530.3883);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AlUTkQmrgMlLh0QkJh0CJhrQBNhjB0gyQA3gqBiicQBUiBAqhaQARgoAYhSQA5jHAQhbQAGgmBBj8QA1jNAqiFQAfhWBdiHQBjh9C+h0QDDhrEZAZQD6ARCaBgQBQA4A9A1QCAB6B/FLQBKDDgUDZQgGDWg2C8QgvCxgzBYQhCB1iHDYQitDBnVCdQkDBDj1AAQg0AAg0gDg");
	this.shape_137.setTransform(291.966,530.2422);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AlbThQmrgPlJh2QkJh3CLhpQBNhjB1gxQA3gqBjiaQBViBAqhaQASgoAYhSQA4i7AThmQAHgmBDj8QA3jNAsiGQAfhVBfiGQBjh8DAhzQDEhpEYAcQD6ASCZBiQBQA6A8A1QB/B7B8FMQBIDDgWDYQgIDXg3C7QgwCxg0BXQhDB1iJDXQiuDAnWCYQj9BAjvAAQg7AAg6gEg");
	this.shape_138.setTransform(290.8452,530.0734);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AliTfQmrgTlIh4QkIh5CLhoQBPhiB0gwQA4gqBkiaQBViAAshaQASgnAYhSQAahVAYhaQAVhQAHgiQAHgmBFj8QA5jNAtiFQAghWBgiFQBkh7DBhxQDFhoEYAeQD6AWCYBiQBPA7A8A2QB+B8B5FNQBGDDgXDYQgLDWg4C7QgyCxg0BXQhEB0iKDWQiwC+nXCVQj1A9joAAQhCAAhCgFg");
	this.shape_139.setTransform(289.7573,529.8724);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AloTcQmrgWlIh7QkHh6CMhnQBPhiB1gvQA4gpBliZQBXiAAshZQASgoAZhSQAbhUAYhZQAWhQAHgjQAHglBIj9QA7jNAuiFQAhhVBhiEQBmh7DBhvQDGhmEXAhQD6AXCXBkQBQA7A7A3QB8B9B2FOQBFDEgaDXQgMDWg6C7QgzCwg1BXQhFBziLDUQixC9nYCSQjvA4jiAAQhJAAhHgFg");
	this.shape_140.setTransform(288.6641,529.6876);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AlvTZQmrgZlGh9QkGh8CMhmQBQhiB1guQA5gpBmiYQBYiAAshYQASgnAahSQAchUAYhZQAXhQAHgjQAIglBKj9QA9jNAviFQAihVBiiDQBmh6DDhtQDHhlEXAkQD6AaCWBlQBPA8A6A3QB8B+BzFPQBDDFgcDWQgODWg8C6Qg0Cvg2BXQhGByiMDUQiyC7nZCOQjpA2jbAAQhQAAhOgHg");
	this.shape_141.setTransform(287.5854,529.4896);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("Al2TVQmqgclGh/QkFh+COhlQBQhhB2gtQA4gpBoiXQBYh/AthYQATgoAbhRQAchUAZhZQAXhQAHgiQAIglBNj+QA+jNAxiFQAihUBkiCQBoh5DChsQDJhiEXAmQD5AbCVBnQBOA8A7A4QB6B/BwFRQBBDFgeDVQgPDWg+C5Qg2Cwg2BWQhHBxiODTQizC6naCKQjhAzjWAAQhWAAhVgJg");
	this.shape_142.setTransform(286.4976,529.3063);
	this.shape_142._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108}]}).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_142}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(34).to({_off:false},0).wait(11));

	// тени
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3KhbQhVAAhIAUQiRApA/BjQBSCECJA6QCbBCCwg4QB9goBtg8QAogQAnADQAtAEBIAdQDUBVB0AdQDHAxCZghQBLgRBoABQA3AACKAKQEKARCXgfQBggUAsgoQAagZAQgtQANgnASgIQAcgNBPAUQCCAhBoARQB9AVArgLQCsgqBAgvQBDgygPhQQgFgdADgzQADgzgDgUQgNhKh9gZQhQgQhegaQgogMgtADQgxAEmsBNQmdBKihAGQjVAHroAiQrtAhhAAFg");
	this.shape_143.setTransform(260.2627,631.208);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("AmdEvQh0gdjUhVQhIgdgtgEQgngDgoAQQhtA8h9AoQiwA4ibhCQiJg6hSiEQg/hjCRgpQBIgUBVAAQBAgFLtghQLogiDVgHQChgGGdhKQGshNAxgEQAtgDAoAMQBeAaBQAQQB9AZANBKQADAUgDAzQgDAzAFAdQAPBQhDAyQhAAvisAqQgrALh9gVQhogRiCghQhPgUgcANQgSAIgNAnQgQAtgaAZQgsAohgAUQiXAfkKgRQiKgKg3AAQhogBhLARQg+ANhEAAQhnAAh3gdg");
	this.shape_144.setTransform(260.2627,631.208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143}]}).wait(45));

	// айсберги
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D1EBFC").s().p("Egs6AWSQgygBgkgMQikiOiHkCQhji+hHjoIgzjDQAFAFAJgHQARgNATg8QA8i+Ayo+QAdlLBbjCQBUizCDgzQB5gwCSBCQCLA/CLCaIAQARQDpDtKuB+IBRAOQgPAggMAnQgWBCgbB6IgzDnQhKE+hsD1QhJCnkBEEQiyC1ijCBIgkAbQjtCyi5AAIgMAAgABZlnIhbgKQgGgBgYgIQhsgmmLhnIMvgsQFEgSDrhCQgkAVgiAbIimCKIgrAjQguAigiAQQg+AdhWAEIgfABQhSAAiCgRgAZBoAQgvgSgtgWQgxgYgtgdIhDgyQhLgphugNQhMgKhGAKQCbhCCKhqQBnhPC9ipQC2iUDEhWQGRivNSFAQCBAwB5A0IgUAJIhcAyIngDcQjaBkhoBEQhHAukLBqQhFAchFAQQhcAUhcAAQiZAAiZg5g");
	this.shape_145.setTransform(228.125,434.541);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#DBF4FC").s().p("EhGZAo+QkKhKjglJQhAheg7hhQECgZGOhFINQiZIBngSQM0ABGVgNQJagTCpg+QBUgeAGgvQABgGAAgHQgDgngvg3IAVgCQJFguIYAEQUQAIIhgSQJagTCpg9QBUgfAGgvQABgGAAgGQgDgogwg4QgqgwhrhfQiliSgngkQi2iph+hcQgegXgcgRQiahkidgdQiQgajvARQgzAEoRA3Qk7AhiKisQgggogcg6QgRgkgQgqIg/jHQgnh3gohDQgthJg+gsQgPgLgQgJQjJhumwCAQlFBhlDhSQhygdhzg0QlTiZmHmAQiEiCi9jPIkolEQjXjiihh0QBKABBXAWIBLATQGMBnBsAmQAXAJAHAAIBbALQCcAUBXgEQBWgEA/geQAigQAtgiIAsgiICliKQAjgbAkgVQBUgwBegOQBGgKBMAJQBuAOBKApIBEAxQAtAeAwAYQAtAWAwASQD1BcD0g4QBGgQBFgbQEKhrBHguQBohEDbhkIHfjcIBcgxIAUgJQBugyB7ggQGuhuGpCWQDqBTBOBcQAjApAPA2QAMAnAGBIQASC/AjBoQBIDSDDDrQDQD5DbBdQCvBLDWgRQBNgGBsgVIB1gXIBAgNQDagpCNAYQAiAFAuADQBzAEC/gQQECgXBsAYQCwAnA7CpQAKAdAHAiQAqDGhCFiQhHF8BcGEQAhCLA9CnQAiBfBCCoQAzCKARBVQAUBugWBRQgzC4k2B8QjcBYjWB2QhRAtgqATQg/AbhLAQQiaAhmQASQkcAMwEAZQsbATqgAiQjSAKrpAsQndAdlMAHQnCALpDgOQoSgNohB0QisAkj2BCQkZBLhMARQi1Arh/AIQghACgfAAQhxAAhfgbgAtpugQhWAGgVAkQgcAwA0AyQAkAkAvAPIAXAGQAXAFAFAFIAEALQAIAVBVAhQBsArCRAFQBHADBNgHQBEgGBIgNQA4gKCNAEQDUAGA6gBQFygEDLh9QBag2Cag/IACAJIA/gaIEph0QCdhDBHhBQBZhQgMhjQgYjBg2g5QgXgXghgIQgVgEguAAIgIAAIgQAAQgfAAgSAHQgHADgVAQQgsAfheANQi9Abp6CWQrCCohwBCQglAWgrAXQhSAshpAzIiLBBQg3gJg8AAQgUAAgSACg");
	this.shape_146.setTransform(524.5694,574.7518);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EBFFFF").s().p("Eg6pAgXQjngjh+hyQiFh4gejbQhKorBFmXQAYiQAph9QAyiWBGhpQAWghAVgYIARgSQAWATAfAKQAlAMAyACQC8AGD2i3IAjgcQCjiBCyi0QEBkEBKioQBrj0BKk/IA0joQAbh5AVhCQANgnAPggQAzhwBQgeQB2gtDyBkQBJAeBYA/QCiB0DWDjIEoFEQC9DPCECCQGHGAFTCZQByA0ByAdQFDBSFFhhQGwiADJBuQAQAJAPALQA+AsAtBJQAoBDAnB3IA/DHQAQAqARAkQAcA6AgAoQCLCsE7ghQIRg3AzgEQDvgRCQAaQCdAdCaBkQAcARAeAXQB+BcC2CpQAnAkClCSQBrBfAqAwQAwA4ADAoQAAAGgBAGQgGAvhUAfQipA9paATQohAS0RgIQoYgEpFAuIgVABQiaAMicAQQmdApm0BAQl5A3n0BaIhnASItQCZQmOBFkCAZIgsAEQidAOiBAAQiNAAhtgQg");
	this.shape_147.setTransform(330.0619,570.6943);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CCCCCC").s().p("AtcHzQiRgFhtgrQhUghgIgVIgFgLQgFgFgXgFIgWgGQgwgPgkgkQgzgyAbgwQAVgkBXgGQARgCAUAAQA8AAA3AJICLhBQBpgzBSgsQArgXAlgVQBxhCLCioQJ6iWC8gbQBfgNArgfQAVgQAIgDQARgHAgAAIAPAAIAJAAQAuAAAUAEQAiAIAXAXQA2A5AXDBQAMBjhYBQQhHBAidBDIkpB0Ig/AaIgCgJQibA/hZA2QjLB9lxAEQg6ABjVgGQiNgEg5AKQhIANhEAGQg4AFg1AAIgmgBg");
	this.shape_148.setTransform(563.443,463.9568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]}).wait(45));

	// фон
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D4CCFF").s().p("EiUdBShMAAAilBMEo7AAAMAAAClBg");
	this.shape_149.setTransform(622.175,312.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_149).wait(45));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(71.9,134,1500.5,706.2);
// library properties:
lib.properties = {
	id: '1D4BD2A315B2EF45B32933A9DF6A9CE1',
	width: 800,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/задание 6_atlas_1.png", id:"задание 6_atlas_1"}
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
an.compositions['1D4BD2A315B2EF45B32933A9DF6A9CE1'] = {
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