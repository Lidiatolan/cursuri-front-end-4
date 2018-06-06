/**
 * It retrieves a query (URL) parameter value
 * It expects you to send the parameter key(before '=')
 **/
 function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

window.onload = function() {
    var gameInstance = new Game();
    var gameId = getUrlParameter('gameId');
    // console.log(gameId);

    $('.message').hide();

    gameInstance.fetchData(gameId).then(function(game) {
        // console.log(game);
      
        // Game summary container
        var gameDetailsContainer = document.getElementById('game-details');

        // Title
        var gameTitleEl = document.createElement('h3');
        gameTitleEl.innerHTML = game.title;
        gameDetailsContainer.appendChild(gameTitleEl);

        // Description
        var gameBodyEl = document.createElement('p');
        gameBodyEl.innerHTML = game.description;
        gameDetailsContainer.appendChild(gameBodyEl);

        // Genre
        var gameGenreEl = document.createElement('p');
        gameGenreEl.innerHTML = "Genre: " + game.genre;
        gameDetailsContainer.appendChild(gameGenreEl);

        // Publisher
        var gamePublisherEl = document.createElement('p');
        gamePublisherEl.innerHTML = "Publisher: " + game.publisher;
        gameDetailsContainer.appendChild(gamePublisherEl);

        // Release Date
        var releaseDateEl = document.createElement('p');
        releaseDateEl.innerHTML = "Release Date: " + new Date(game.releaseDate);
        gameDetailsContainer.appendChild(releaseDateEl);

        // Form values
        $('.game-title').val(game.title);
        $('.game-genre').val(game.genre);
        $('.game-publisher').val(game.publisher);
        $('.game-description').val(game.description);

        document.getElementById("update-btn").addEventListener("click", updateGame, false);
        document.getElementById("delete-btn").addEventListener("click", deleteGame, false);

    }).catch(function() {
        console.log("Something went wrong when trying to get this game's details");
    });

    function deleteGame() {
      
        if (confirm("Are you sure you want to delete this game?")) {
            $('.message').text("You deleted a game!");
        } else {
            $('.message').text("You canceled the action!");
        }

        return $.ajax('https://games-world.herokuapp.com/games/' + gameId, {
            method: 'DELETE',
            success: function(response) {
                // console.log("Delete game =", response);
                // Go back to games list
                window.location.href="../pages/index.html";
            }
        });
    } 

    function updateGame() {

        var data = {
            title: $('.game-title').val(),
            body: $('.game-description').val(),
            genre: $('.game-genre').val(),
            publisher: $('.game-publisher').val()
        };

        return $.ajax('https://games-world.herokuapp.com/games/' +gameId, {
            method: 'PUT',
            data: data,
            success: function(response) {
                // console.log("Update game =", response);
                $('.message').text("You updated a game!");
                $('.message').show();
            }
        });
    }
}