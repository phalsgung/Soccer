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

export const getPlayers = (req, res) => {
	
	Player.find({}, (err, Player) => {
		if(err) {
			res.send(err);
		}
		console.log(Player);
		res.json(Player);
	});
};

export const getPlayersByEmailId = (req, res) => {
	console.log(req.query);
	Player.find({email:req.query.email}, (err, Player) => {
		if(err) {
			res.send(err);
		}
		console.log(Player);
		res.json(Player);
	});
};

export const getPlayersByFirstName = (req, res) => {
	console.log(req.query);
	Player.find({firstName:req.query.firstname}, (err, Player) => {
		if(err) {
			res.send(err);
		}
		console.log(Player);
		res.json(Player);
	});
};

export const updatePlayerByFirstName = (req, res) => {
	console.log(req.query);
	Player.findOneAndUpdate({firstName:req.query.firstName}, req.body, {new: true}, (err, Player) => {
		if(err) {
			res.send(err);
		}
		console.log(Player);
		res.json(Player);
	});
};

export const deletePlayerByFirstName = (req, res) => {
	console.log(req.query);
	Player.deleteOne({firstName:req.query.firstName}, req.body, (err, DBresponse) => {
		if(err) {
			res.send(err);
		}
		console.log(DBresponse);
		res.json({message: `Successfully Deleted ${DBresponse.deletedCount} Player(s)`});
	});
};
