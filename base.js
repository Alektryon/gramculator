/*
	convert.js
	http://rot47.net
  https://helloacm.com
  http://codingforspeed.com
	Dr Zhihua Lai
*/
var BASE2  = "01";
var BASE8  = "01234567";
var BASE10 = "0123456789";
var BASE16 = "0123456789abcdef";
var BASE32 = "0123456789abcdefghijklmnopqrstuvwxyz";
var BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var BASE75 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.,!=-*(){}[]";
var RUNE24 = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";
var HEBREW = "אבגדהוזחטיכלמנםעפצקרשת"

function Convert(src, desttable)
{
	var srctable = BASE10;
	var srclen = srctable.length;
	var destlen = desttable.length;
	// first convert to base 10
	var val = 0;
	var numlen = src.length;
	for (var i = 0; i < numlen; i ++)
	{
		val = val * srclen + srctable.indexOf(src.charAt(i));
	}
	if (val < 0)
	{
		return 0;
	}
	// then covert to any base
	var r = val % destlen;
	var res = desttable.charAt(r);
	var q = Math.floor(val / destlen);
	while (q)
	{
		r = q % destlen;
		q = Math.floor(q / destlen);
		res = desttable.charAt(r) + res;
	}
	return res;
}
function Update() {
	LengthAll();
}

// Updates the legth of all text on the screen.
function LengthAll() {
	var outLength = document.getElementById("input").value.length;

	// Set input and output lengths.
	document.getElementById("inputAlphabetLength").textContent = "Alphabet Base: "+ outLength;
}
document.addEventListener('DOMContentLoaded', () => {
	//////////////////
	// Live Update Conversion
	//////////////////
	// I don't know if change does anything, but input doesn't seem to cover all
	// cases of user interaction.
	document.querySelector("#input").addEventListener('input', start);
});
function Copy() {
	// Alternative selector:
	//console.log(this.parentNode.previousElementSibling.firstElementChild.value);
	/* Get the text field */
	var copyText = document.getElementById("myInput");

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
	let input = this.parentNode.previousElementSibling.firstElementChild.value;
	input.select();
	input.setSelectionRange(0, 99999);
	document.execCommand("copy");
}

function Source() {
	console.log("Entered Source");
	let input = this.parentNode.parentNode.firstElementChild.firstElementChild.value;
	document.getElementById("input").value = input;
	Update();
}
