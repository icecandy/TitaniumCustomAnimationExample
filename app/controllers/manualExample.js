// @author        Simon Buckingham
// @date          27 September 2017
// @description   Example using custom animation module manualAnimation.js to play an image sequence

//REQUIRES
var ManualAnimation = require('manualAnimation');

//VARS
var animation;

function initAnimation() {
	animation = new ManualAnimation({
		view: $.animation,
		filenames: Alloy.Globals.animationFilenames,
		frameRate: 12,
		finishedCallback: onFinishedAnimation
	});
	animation.init();
}

function onFinishedAnimation() {
	console.log('Finished animation!!!!!!');
}

function onClickPlayAnimation(_evt) {
	animation.start();
}

function onClickStopAnimation(_evt) {
	animation.stop();
}

function onClickSeekAnimation(_evt) {
	//choose a random frame to seek to as a test
	animation.seek(50);
}

function onClickRewindAnimation(_evt) {
    //rewind to frame 1
	animation.seek(1);
}

function onClickCloseWindow(_evt) {
	animation.stop();
	$.win.close();
}

initAnimation();
