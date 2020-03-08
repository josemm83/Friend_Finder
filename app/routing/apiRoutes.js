var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body.scores);

    var user = req.body;
    for(var i = 0; i < user.scores.length; i ++){
        user.scores[i] = parseInt(user.scores[i]);
    }

    var bestFriend = 0;
    var minDiff = 40;
    
    for(var j = 0; j < friends.length; j++){
        var totalDiff = 0;
        for(var x = 0; x < friends[j].scores.length; x++){
            var diff = Math.abs(user.scores[x] - friends[j].scores[x]);
            totalDiff += diff;
        }

        if(totalDiff < minDiff){
            bestFriend = j;
            minDiff = totalDiff;
        }
    }

    friends.push(user);
    
    res.json(friends[bestFriend]);
    });
};