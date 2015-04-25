window.makeNumber = function () {
	console.log('poop');
	return Math.random(1,10);
};

window.randomColour = function () {
	console.log('poo');
	document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
};