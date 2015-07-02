# cliify
very simple CLI authoring



## use

package.json :

    "bin": {
      "mycli": "index.js"
    }

index.js or whatever : (remember to add a shebang)

    #! /usr/bin/env node
    
    require('cliify').export(function (arg0, cb) {
      cb(null, 'world');
    })

the standard callback prints the error and the result :

$ mycli hello

SUCCESS:  undefined hello world

multiple methods:

    require('cliify').export({
      one: function (arg0, cb) {
        cb(null, arg0+' method one');
      },
      two: function (cb) {
        cb(null, 'method two');
      }
    })

alternative callback :

    var cliify = require('cliify');
    
    cliify.export(function () {
      cliify.cb(null, arguments);  
    });

$ mycli one two three
SUCCESS:  undefined { '0': 'one', '1': 'two', '2': 'three', '3': [Function] }


