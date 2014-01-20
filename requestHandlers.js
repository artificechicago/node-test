var exec = require("child_process").exec;

function chime(response) {
    console.log("Request handler 'chime' was called.");
    
    exec("aplay /usr/share/sounds/linuxmint-login.wav" function () {
	//if I understand correctly, we can leave the anonymous function's parameter
	//list empty since there's a lexical closure in this scope pulling in the
	// response parameter from one level up
	response.writeHead(200, {"Content-Type": "text/plain"});
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
