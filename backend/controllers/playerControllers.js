import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModels';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
	
	let newPlayer = new Player(req.body);

	newPlayer.save((err, Player) => {
		if(err) {
			res.send(err);
		}
		console.log(Player);
		res.json(Player);
	});
};