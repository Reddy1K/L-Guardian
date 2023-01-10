window.apps["prxyz"] = {};
window.apps["prxyz"]["tile"] = `<div class="box_widget">
	<div>
		<h3>URL Iframing</h3>
	</div>
	<div>
		<ul class="list">
			<li><input id="pyz_url" placeholder="full url"><button class="btn-inline" id="str_pyz">load</button></li>
			<li>Bunker no longer comes preloaded with pr&zwj;oxy links</li>
		</ul>
	</div>
	<script>
		document.getElementById("str_pyz").addEventListener("click", function(){
			var url = document.getElementById("pyz_url").value;
			if(url.startsWith("http://") || url.startsWith("https://")){
				//idk what to put here kids
			} else {
				url = "https://"+url;
			}
			goInternal("/apps/prxyz/get.html?id="+url);
		});
	</script>
</div>`;