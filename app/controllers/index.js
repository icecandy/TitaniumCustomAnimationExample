// @author        Simon Buckingham
// @date          27 September 2017
// @description   Example Titanium project to compare playing animation of an image sequence using
//                2 methods: a custom library "manualAnimation.js" and the standard Ti.UI.ImageView.images property.
//@reference      You can read an article on this example on Medium:
//                https://medium.com/all-titanium/custom-titanium-animation-b5deee2ae71a

Alloy.Globals.animationFilenames = [];

function initAnimationFilenames() {
	var filename;
	for (var i = 1; i <= 118; i++) {
		filename = '/images/animation/animation_' + padNumber(i, 3) + '.png';
		Alloy.Globals.animationFilenames.push(filename);
	}
}

//@_number  Integer
//@_length  Integer  - length to pad string with '0's
function padNumber(_number, _length) {
	var str = _number + '';
	while (str.length < _length) {
		str = '0' + str;
	}
	return str;
}

function onClickOpenCustomExample(_evt) {
	Alloy.createController('manualExample').getView().open();
}

function onClickOpenImageViewExample(_evt) {
	Alloy.createController('imageViewExample').getView().open();
}

initAnimationFilenames();
$.win.open();
