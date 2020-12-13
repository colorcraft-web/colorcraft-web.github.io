fetch("https://eu.mc-api.net/v3/server/ping/144.91.105.97:32540")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    document.querySelector("#estado").innerHTML = myJson.online ? 'ColorCraft se encuentra abierto' : 'ColorCraft se encuentra  cerrado';
		document.querySelector("#njug").innerHTML = myJson.online ? 'Jugadores online: '+myJson.players.online : '';
		document.querySelector("#online").innerHTML = myJson.online ? myJson.players.online : '';
		document.querySelector("#ipText").innerHTML = myJson.players.max;
  });
