require([
	'text!components/shadow/shadow.css',
	'text!components/shadow/shadow.tpl'
], function(shadowCss, shadowTpl) {

	var root = document.getElementById('shadowRoot');
	var shadow = root.createShadowRoot();
	shadow.innerHTML = '<style>' + shadowCss + '</style>' + shadowTpl;


	var targetArr = document.querySelectorAll('.red-font');
	for (var i = 0; i < targetArr.length; i++) {
		targetArr[i].style.color = 'blue';
	}

});