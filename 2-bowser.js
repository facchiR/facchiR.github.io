var writeb = function(browser){
	var bowser = document.getElementById("bowser"); 
	bowser.innerHTML = browser; 
}
window.addEventListener("load", function() {
	
	// PARSE USER AGENT
	var result = bowser.getParser(navigator.userAgent).getResult();
  
	// BROWSER INFO
	console.log(result.browser.name);
	localStorage.setItem("browser", result.browser.name); 
	console.log(result.browser.version);
	console.log(result.engine);

	// OPERATING SYSTEM
	console.log(result.os.name);
	console.log(result.os.version);
	console.log(result.os.versionName);

	// PLATFORM
	console.log(result.platform.type);
  
  
  
    // BROWSER INFO
    var res = result.browser.name + "<br>" + result.browser.version + "<br>" + result.engine.name + "<br>" + result.os.name + "<br>" + result.os.version+ "<br>" + result.os.versionName + "<br>" + result.platform.type;
    writeb(res);
  
	switch(localStorage.browser) {
		case "Chrome":
			writeLog("Chrome case")
			// code block
			break;
		case "Samsung Internet for Android":
			writeLog("Samsung Internet for Android case")
			
			let banner = document.getElementById("banner"); 
			
			writeLog("Show Samsung Internet for Android banner"); 
			banner.style.display = "block"; 
				
			writeLog("Show Samsung Internet for Android banner 2"); 
			


			// code block
			break;
		default:
			// code block
	}
});