// @author        Simon Buckingham
// @date          27 September 2017
// @description   Example using Ti.Ui.ImageView.images to play an image sequence

function initAnimation() {
    $.animation.images = Alloy.Globals.animationFilenames;
    $.animation.duration = 1000 / 12;

    $.animationStartFrame.image = Alloy.Globals.animationFilenames[0];
}

function onClickPlayAnimation(_evt) {
    $.animation.visible = true;
    $.animation.start();
}

function onClickStopAnimation(_evt) {
    $.animation.stop();
}

function onClickSeekAnimation(_evt) {
    //choose a random frame to seek to as a test
    $.animation.stop();
    $.animation.visible = false;
    $.animationStartFrame.image = Alloy.Globals.animationFilenames[49];
}

function onClickRewindAnimation(_evt) {
    //rewind to frame 1
    $.animation.stop();
    $.animation.visible = false;
    $.animationStartFrame.image = Alloy.Globals.animationFilenames[0];
}

function onClickCloseWindow(_evt) {
    $.animation.stop();
    $.win.close();
}

initAnimation();
