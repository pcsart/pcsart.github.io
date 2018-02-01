/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var opslaanbutton = document.querySelector('.micro'); 
var body =  document.body;
var togglebutton = document.querySelector('.uppericon');

function verander_naar_vinkje() {
	body.classList.toggle('vinkje');
	togglebutton.classList.toggle('opgeslagenverhaal');
}
opslaanbutton.addEventListener('click', verander_naar_vinkje);
