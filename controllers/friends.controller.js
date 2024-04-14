const model = require('../models/friends.model')
function postFriend(req,res) {
    if(!req.body.name){
        return res.status(403).send('Not found')
    }
    const newFriend = {
       name: req.body.name,
       id: model.length
    }
    model.push(newFriend)
    res.json(newFriend)
}
function getFriends(req,res)  {
    res.send(model)
}
function getFriend(req,res)  {
    const friendId = Number(req.params.friendId)
    const friend =  model[friendId]
    if(friend){
        res.status(200).json(friend)
    }   else{
            res.status(404).json({
                error: "Friends does not exist"
            })
    }
}

module.exports = {
    postFriend,
    getFriend,
    getFriends,
}