var frameNumber = 0,
    playbackConst = 500, 
    setHeight = document.getElementById("set-height"), 
    vid = document.getElementById('v0'); 

if (searchInput == "Pixels") {
	setHeight.style.height = "27500px";
} else {
	setHeight.style.height = "0px";
	document.getElementById("v0").classList.remove("fixed");
	document.getElementById("v0").classList.add("moveOn");
	document.getElementById("navBar").classList.remove("navBarFixed");
	document.getElementById("navBar").classList.add("navBarUnfixedNoVid");
	document.getElementById("pageContent").classList.add("pageContentVisible");
	document.getElementById("topPanel").style.height = window.innerHeight + "px";
}



function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
  if (frameNumber > 52.2) {
    document.getElementById("v0").classList.remove("fixed");
	document.getElementById("v0").classList.add("moveOn");
	document.getElementById("navBar").classList.remove("navBarFixed");
	document.getElementById("navBar").classList.add("navBarUnfixed");
	document.getElementById("pageContent").classList.add("pageContentVisible");
	document.getElementById("topPanel").style.height = window.innerHeight + "px";
  } else {
      document.getElementById("v0").classList.add("fixed");
      document.getElementById("v0").classList.remove("moveOn");
      document.getElementById("navBar").classList.add("navBarFixed");
      document.getElementById("navBar").classList.remove("navBarUnfixed");
      document.getElementById("pageContent").classList.remove("pageContentVisible");
  }
}

window.requestAnimationFrame(scrollPlay);
