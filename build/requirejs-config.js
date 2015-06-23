//config
requirejs.config({
	baseUrl: '../src',
	paths: {
		'text': '../bower_components/text/text'
	},
	config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
            	return true;
            }
        }
    }
});