//THIS IS TO BE EXECUTED IN REPLIT ONLY
//IT WILL NOT WORK OTHERWISE

const dree = require('dree');
const fs = require("fs");
const OPTIONS = {
	"output to .js": true, //the js file registers the compiled files to window.__files
	"output to .json": true
}
var r = { "files": {} };
const ignore = {
	"paths": [/git/, /node_modules/, /gitignored/, /zfs/],
	"files": [".gitignore", "/compiled.js", "/package.json", "/package-lock.json", "/index.js"],
}
const options = {
	depth: 5,
	exclude: ignore.paths,
	extensions: ['html', 'js', 'wasm', 'svg', "css", "txt"]
};
function parseF(f) {
	return f.replace(/'/g, "\'").replace(/"/g, "\"").replace(/`/g, "\`");
}
const fileCallback = function(file) {
	const path = file.path.replace(`/home/runner/${process.env.REPL_SLUG}`, "");
	console.log(path);
	if (ignore.files.indexOf(path) != -1) return false;
	r.files[path] = fs.readFileSync(__dirname + path, "utf-8");
};

let tree;
(async function() {
	tree = await dree.scan(__dirname, options, fileCallback);
	if(OPTIONS["output to .js"])fs.writeFileSync(__dirname + "/compiled.js", "window.__files=" + JSON.stringify(r));
	if(OPTIONS["output to .json"])fs.writeFileSync(__dirname + "/compiled.json", JSON.stringify(r));
	console.log(`Compiled ${Object.keys(r.files).length} files to compiled.js/json`);
})();
