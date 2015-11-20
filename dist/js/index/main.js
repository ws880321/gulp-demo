define('i',function(require, exports, module) {
	alert(2)
});
define('a',function(require, exports, module) {
    exports.init = function() {
    	console.log(222)
    }


});

define(function(require, exports, module) {
	
	seajs.use('a',function(a){
		a.init();
	})
	seajs.use('i');
	

});
