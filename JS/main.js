// Jasmine Sloan
// Week 2 VFW
// 05/07/2012


//Wait until DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementById FUnction
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}	

	//Create select field element and populate with options.
	function makeCats(){
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=mixtapeGenres.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = mixtapeGenres[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);		
	}

		function makeDogs(){
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "djs");
		for(var i=0, j=mixtapeDjs.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = mixtapeDjs[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);		
	}


	//Variable defaults
	var mixtapeGenres = ["--Choose A Genre--", "Dirty South", "Gospel", "Hip Hop", "Miami Bass", "Old School", "Oomp Camp Albums", "R&B/Slow Jams", "Reggae"];
	makeCats();
	var mixtapeDjs = ["--Choose A DJ--", "DJ Jelly", "DJ Montay", "Calvin Da Coordinator", "DJ Shawty Rock", "DJ Hotsauce"];
	makeDogs();

	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);

});