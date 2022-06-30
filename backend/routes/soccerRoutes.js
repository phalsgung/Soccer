import { 
	addNewPlayer, 
	getPlayers, 
	getPlayersByEmailId, 
	getPlayersByFirstName, 
	updatePlayer,
	updatePlayerByFirstName,
	deletePlayerByFirstName
}
from '../controllers/playerControllers';

const routes = (app) => {
	app.route('/players')
		.post(addNewPlayer)
		.get(getPlayers);

	app.route('/players/playerbyemail/')
		.get(getPlayersByEmailId);

	app.route('/players/playerbyfirstname/')
		.get(getPlayersByFirstName)
		.put(updatePlayerByFirstName)
		.delete(deletePlayerByFirstName);
}

export default routes;