var cliify = require('./index');

cliify.export({

	// the callback is always the last argument, with the form function(err, result)
	hello : function () {
		var cb = arguments[arguments.length-1];
		console.log('hello pdroid');
		console.log.apply(this, Array.prototype.slice.call(arguments, 0, -1));
		cb(null, {'hello': undefined, ';':arguments});
	},

	// if parameters are not defined, you can access the callback from a reference in the library module
	iWantToWrite : function () {
		console.log('your paramters are', arguments);
		// cliify.cb.call(this, null, 'some result');
		// or
		cliify.cb('failed');
	},

	// or the arguments can be specified as normal, 
	// though this requires the api is called with the right parameterisation
	iSpecify : function (one, two, three, cb) {
		console.log(one, two, three);
		cb(null);
	}	

});