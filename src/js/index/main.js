define(function(require, exports, module) {
	seajs.config({
		alias: {
		    'i' : '../../../lib/seajs-module/pul/pul.js'
		  }
	})
	seajs.use('./module/a.js',function(a){
		a.init();
	})
	seajs.use('i');
	

});