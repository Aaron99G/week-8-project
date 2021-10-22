console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted succesfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let pic = document.querySelector('img');

pic.addEventListener('mouseover', () => {
	alert('Keep up the good work!');
})