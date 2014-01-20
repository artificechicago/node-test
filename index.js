var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.hello;
handle["/hello"] = requestHandlers.hello;
handle["/chime"] = requestHandlers.chime;

server.start(router.route, handle);
