// On page load get list of games
window.onload = function() {
	$('#loader').show();
	var listInstance = new GamesList();
	listInstance.fetchData().then(function(games){
		// Access table container
		var container = $('#container');
		// For each game in the list create a new row in the tabel
		for (var i = 0; i < games.length; i++) {
			if (games[i].title) {
				row="<tr>";
				// row+='<td>'+games[i]._id+'</td>';
				row+='<td><img class="img" height="50px" src="'+games[i].imageUrl+'" /></td>';
				row+='<td class="title"><a href="../pages/details.html?gameId=' + games[i]._id + '">' + games[i].title + '</a></td>';
				row+='<td><div class="description">'+games[i].description+'</div></td>';
				row+="</tr>";
				// Add row to DOM
				container.append(row);
			}
		}
		// Hide loader after all games are loaded
		$('#loader').hide();
	}).catch(function(){
		console.log('Could not get games list!')
	});
}