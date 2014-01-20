function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
	return handle[pathname](response);
	} else {
	    console.log("No request for handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
	}
}

exports.route = route;
