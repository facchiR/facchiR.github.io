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
  
    //alert(localStorage.browser + " " + navigator.userAgent); 	
	switch(localStorage.browser) {
		case "Chrome":
			console.log("CHECK 1.5.0")
			// code block
			break;
		case "Samsung Internet for Android":
			console.log("CHECK 1.5.1")
			let banner = document.getElementById("bannerOther"); 
			let pageContent = document.getElementById("pageContent"); 
			let bannerH = getBannerH("banner");
			console.log(bannerH); 
						alert("Show the setup button"); 
			var style = document.createElement('style')
			style.setAttribute("id", "style");
			
			style.innerHTML = "#pageContent{top:"+bannerH+" !important;}";	
			document.head.appendChild(style);					

			// code block
			break;
		default:
			// code block
	}
});