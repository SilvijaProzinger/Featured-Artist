let landingButton = document.getElementById('explore')

//change background image to gif upon hovering over buttton
landingButton.addEventListener('mouseover', function(){
 document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/bg.gif')"
	
})

landingButton.addEventListener('mouseout', function(){
 document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg')"
})