const dree = require('dree');
const fs = require("fs");
var r = {"files": {}};
const ignore = {
	"paths": [/git/, /node_modules/, /gitignored/, /zfs/],
	"files": [".gitignore", "/compiled.js", "/package.json", "/package-lock.json"],
}
const options = {
    depth: 5,
    exclude: ignore.paths,
    extensions: [ 'html', 'js', 'wasm', 'svg', "css" ]
};
function parseF(f){
	return f.replace(/'/g, "\'").replace(/"/g, "\"").replace(/`/g, "\`");
}
const fileCallback = function (file) {
	const path = file.path.replace("/workspace/E2EE-PARTY", "");
	if(ignore.files.indexOf(path)!=-1) return false;
	r.files[path] = fs.readFileSync(__dirname+path, "utf-8");
};

let tree;
(async function(){
	tree = await dree.scan(__dirname, options, fileCallback);
	fs.writeFileSync(__dirname+"/compiled.js", "window.__files="+JSON.stringify(r));
	console.log(`Compiled ${Object.keys(r.files).length} files to compiled.js`);
})();