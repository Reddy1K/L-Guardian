window.apps["yt-cl"] = {};
window.apps["yt-cl"]["tile"] = `<div class="box_widget">
	<div>
		<h3>YouTube</h3>
	</div>
	<div>
		<ul class="list">
			<li><input id="yt_term" class="minize" placeholder="search term"><button class="btn-inline minize" onclick="ytSearch();">Go</button></li>
			<li><input id="yt_id" class="minize" placeholder="video id"><button class="btn-inline minize" onclick="ytWatch();">Go</button></li>
		</ul>
	</div>
	<script src="apps/yt-cl/js/tile.js"></script>
</div>`;