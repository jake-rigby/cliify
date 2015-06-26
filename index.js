var argv = require('yargs').argv._, method, mname,
	chalk = require('chalk');
this.cb = function (err, result) {
	if (err) {
		console.log(chalk.red('ERROR:'), err);
	} else {
		console.log(chalk.green('SUCCESS: '), chalk.magenta(mname), result ? result : '');
	}
}
argv.push(this.cb);
module.exports.export = function (exports) {
	if (argv.constructor === Array) {
		mname = argv.shift();
		method = exports[mname];
	} else {
		method = exports[argv];
		argv = [];
	}
	if (typeof method == 'function') {
		if (method.length && argv.length != method.length) {
			this.cb(mname+' requires exactly '+(method.length - 1)+' parameters');
			return;
		}
		method.apply(this, argv);
	} else {
		this.cb(mname+' is not implemented');
	}
}