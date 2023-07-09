const usersModel = require('../model/usersSchema');
const teamModel = require('../model/teams');

const users = async (req, res) => {
    try {
        const data = await usersModel.find();
        const team = await teamModel.aggregate([
            {
              '$unwind': {
                'path': '$team'
              }
            }, {
              '$lookup': {
                'from': 'users', 
                'localField': 'team.id', 
                'foreignField': 'id', 
                'as': 'result'
              }
            }, {
              '$unwind': {
                'path': '$result'
              }
            }, {
              '$project': {
                'id': '$result.id', 
                'Team_Name': 1, 
                'first_name': '$result.first_name', 
                'last_name': '$result.last_name', 
                'email': '$result.email', 
                'gender': '$result.gender', 
                'avatar': '$result.avatar', 
                'domain': '$result.domain', 
                'available': '$result.available'
              }
            }
          ])
          console.log(team)
        res.status(200).send({data , team});
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const createTeam = async (req, res) => {
    try {
        console.log(req.body);
        const  {rowSelectionModel,team} = req.body;
        const output = [];
        rowSelectionModel.forEach((value) => {
            output.push({ id: value });
        });
        const createTeam = await teamModel.create({ 
            team: output,
            Team_Name : team.team_Name
        });
        console.log(createTeam,"created Team");
        res.send({ message: 'Team created', createTeam});
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
module.exports = { users, createTeam }