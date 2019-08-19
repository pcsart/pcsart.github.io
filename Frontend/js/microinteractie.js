/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var opslaanbutton = document.querySelector('.micro'); 
var body =  document.body;
var togglebutton = document.querySelector('.uppericon');

function verander_naar_vinkje() {
	body.classList.toggle('vinkje');
	togglebutton.classList.toggle('opgeslagenverhaal');
}
opslaanbutton.addEventListener('click', verander_naar_vinkje);

// likes bovenin
var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };



// reageer
////https://codepen.io/phcacique/pen/BzoLLY
var pop, 	reageerbutton, close, mainpopup;
var isOpen = false;

window.onload = function(){
	pop = document.getElementById("popup");	
	pop.style.display = "none";
	
	reageerbutton = document.getElementById("reageerbutton");
	
	close = document.getElementById("closing");
	
		reageerbutton.addEventListener("click", function(){
		pop.style.display = "block";
		mainpopup.style.left = document.body.clientWidth/2 - mainpopup.offsetWidth/2 + "px";
		mainpopup.style.top = document.body.clientHeight/2 - mainpopup.offsetHeight/2 + "px";
		
	});
	
	close.addEventListener("click", function(){
		pop.style.display = "none";
	});
	
	mainpopup = document.getElementById("mainpopup");
	
	
}