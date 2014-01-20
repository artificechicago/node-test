var exec = require("child_process").exec;

function chime(response) {
    console.log("Request handler 'chime' was called.");
    
    exec("aplay /usr/share/sounds/linuxmint-login.wav", function (error, stdout, stderr) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write(stdout);
	response.end();
	});
}

function hello(response) {
    console.log("Request handler 'hello' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World from Artifice's Node.js tests!");
    response.end();
}

exports.chime = chime;
exports.hello = hello;
