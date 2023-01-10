(function(){
	const d = window._config;
	window.apps={};
	for(var i in d.apps){
		getFile(`/apps/${d.apps[i]}/config.js`, function(e){
			eval(e);
		});
	}
	getFile(`/js/loadapps.js`, function(e){
		eval(e);
	});
})();