sortApp = sortApp || {};

sortApp.InitializeController = (function(){

	function initialize(options){
		sortApp.AppConfig = mergeConfigs(sortApp.AppConfig, options);
		sortApp.SortingController.initialize(sortApp.AppConfig.initialRegisterState, sortApp.AppConfig.registerLength);
	}
	
	function mergeConfigs(defaultConfig, options){
		return Object.assign(defaultConfig, options);
	}

	return {
		initialize: initialize
	}

})();
