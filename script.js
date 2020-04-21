let landingButton = document.getElementById('explore')

landingButton.addEventListener('mouseover', function(){
	document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('../images/bg.gif')"
	
})

landingButton.addEventListener('mouseout', function(){
	document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('../images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg')"
})