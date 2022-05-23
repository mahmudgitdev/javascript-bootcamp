//removing element by ID
var element = document.getElementById("myElementID");
    element.parentNode.removeChild(element);
    
//remove a dom element
var element = document.getElementById("someId");
	element.parentNode.removeChild(element);

//remove element from array
var colors=["red","green","blue","yellow"];
var blue=colors.splice(2, 1);//first arg is array index to remove
//colors is now ["red","green","yellow"]