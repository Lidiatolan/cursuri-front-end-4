 
window.onload = function() {

         document.getElementById("add-btn").addEventListener("click", addGame, false);
         $('.message').hide();

   function addGame() {

        var data = {
            title: $('.game-title').val(),
            imageUrl: $('.game-image').val(), 
            genre: $('.game-genre').val(),
            publisher: $('.game-publisher').val(),
            description: $('.game-description').val()
        };

         $.ajax('https://games-world.herokuapp.com/games/' , {
            method: 'POST',
            data: data,
            success: function(newGame) {
                  document.getElementById('add-game-form').reset();
                 console.log("Update game =", newGame);
                $('.message').text("You aded a game:" +newGame.title + ', genre: '+ newGame.genre );
                $('.message').show();
            }
        });
    };
}
