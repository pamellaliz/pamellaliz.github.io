$(document).ready(function(){
	///////////////////////////////////////////////////////////////////////////
	// Old browser upgrade message
	///////////////////////////////////////////////////////////////////////////
	//event listener: DOM ready
	function addLoadEvent(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				if (oldonload) {
					oldonload();
				}
				func();
			}
		}
	}
	//call plugin function after DOM ready
	addLoadEvent(function(){
		outdatedBrowser({
			bgColor: '#f25648',
			color: '#ffffff',
			lowerThan: 'transform',
			languagePath: '../bower_components/outdated-browser/outdatedbrowser/lang/pt-br.html'
		})
	});

//End document ready
});