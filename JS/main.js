// Jasmine Sloan
// Week 2 VFW
// 05/07/2012


//Wait until DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//getElementsById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	//create select field element and populate with options.
	function makeCats(){
		var formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id","groups");
		for(var i=0, j=mixtapeGenres.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = mixtapeGenres[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);	
	}

	//Find value of selected radio buttons
		var getSelectedRadio = function(){
			var radio = document.forms[0].answer;
			for(var i=0; i<radios.length; i++){
				if(radios[i].checked){
					purchaseDate = radios[i].value;
				}
			}
		}

		var getCheckboxValue = function(){
			if($('wishlist').checked){
				wishListValue = $('wishlist').value;
			}else{
				wishListValue = "No"
			}
		}

	function storeData(){
		var id 				= Math.floor(Math.random()*100000001);
		//Gather up all our form field values and store in an object
		//Object properties contain array with the form label and input values.
		getSelectedRadio();
		getCheckboxValue();
		var item				={};
			item.group			= ["Group:", $('groups').value];
			item.email			= ["Email:", $ ('email').value];
			item.pword			= ["Password:", $('pword').value];
			item.purchase		= ["Purchase:", purchaseDate];
			item.wishlist		= ["Wish List", wishListValue]; 
			item.quantity		= ["Quantity" $('quantity').value];
			item.date			= ["Date" $('date').value];
			item.suggestions 	= ["Suggestions" $('suggestions').value];
		//Save data into local storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.strigify(item));
		alert("Mixtape Saved!");

	} 

	//Variable defaults
	var mixtapeGenres = ["--Choose A Genre--", "Dirty South", "Gospel", "Hip Hop", "Miami Bass", "Old School", "Oomp Camp Albums", "R&B/Slow Jams", "Reggae"];
	var purchaseDate;
	var	wishListValue = "No";
	makeCats();

	//Set Link & Submit Click Events
	/*
	var diplayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal); */
	var save = $('submit');
	save.addEventListener("click", storeData); 


});