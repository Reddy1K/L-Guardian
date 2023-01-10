const server = "https://secure.4sure.ml";
(async function(){
	if(location.href.indexOf("file://") == -1 && parent.document.getElementsByTagName("iframe")[0].getAttribute("src").indexOf("about:blank") == -1){
		document.getElementById("noguard_stat").textContent = "FALSE";
		document.getElementById("noguard_stat").classList.add("red");
	} else {
		document.getElementById("noguard_stat").textContent = "True";
		document.getElementById("noguard_stat").classList.add("green");
	}
})();