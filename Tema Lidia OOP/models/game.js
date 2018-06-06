function Game() {
	this.id = null;
	this.title = "";
	this.imageUrl = "";
	this.description = "";
}

Game.prototype.fetchData = function(id) {
	var game = new Game();
	return $.ajax('https://games-world.herokuapp.com/games/' + id ,{
		method: 'GET',
		success: function(response){
			game = response;
		},
		error: function(){
			alert('game details could not be extracted.');
		}
	});
}

