var contactref = firebase.database().ref().child("contactform");
document.getElementById('displayform').addEventListener('submit',submitForm);
function submitForm(e){
	e.preventDefault();
	var name = getINputVal('name');
	var email = getINputVal('email');
	var location = getINputVal('location');
	var message = getINputVal('message');
	saveForm(name,email,location,message);
	document.getElementById('displayform').reset();
}
function getInputVal(id){
	return document.getElementById(id).value;
}
function saveForm(name,email,location,message){
	var newContactRef = contactRef.push();
	newContactRef.set({
		name :name;
		email :email;
		location :location;
		message :message;
	});
}