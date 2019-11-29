var writeb = function(browser){
	var bowser = document.getElementById("bowser"); 
	bowser.innerHTML = browser; 
}
window.addEventListener("load", function() {
  // PARSE USER AGENT
  var result = bowser.getParser(navigator.userAgent).getResult();
  
   // BROWSER INFO
  console.log(result.browser.name);
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
});