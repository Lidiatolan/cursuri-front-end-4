/**
 * Games list
 */
function GamesList() {
  this.items = [];
}

GamesList.prototype.fetchData = function() {
  var games = new GamesList();
  return $.ajax('https://games-world.herokuapp.com/games', {
    method: 'GET',
    success: function(response) {
      games = response;
    }, 
    error: function() {
      alert('Something went wrong when fetching posts');
    }
  });
}