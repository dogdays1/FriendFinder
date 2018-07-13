

module.exports = function (app) {


    var friendsInfo = require("../data/friends");

    //json display request for friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsInfo);
    });

    app.post("/api/friends", function (req, res) {
        // friendsInfo.push(req.body);  do this later, otherwise you'll be your own best friend!
        //res.json(true);
        console.log(req.body);
        console.log(req.body.scoresPassed);
        console.log(req.body.scoresPassed[1] * req.body.scoresPassed[4]);//checking the numbers
        console.log(friendsInfo[0].scores);

        //set new variable and make worst outcome a difference of 40 (4*10)
        var newFriend = 0;
        var diff = 40;
            //loop through each friend(i loop) and compare each score within
            //that loop(q loop)
        for (var i = 0; i < friendsInfo.length; i++) {
            var compare = 0;
            for (var q = 0; q < 10; q++) {
                var thisDiff = Math.abs(req.body.scoresPassed[q] - friendsInfo[i].scores[q]);
                compare += thisDiff;
                console.log(compare);
            }
            if (compare < diff) {
                newFriend = i;
                //change to new minimum
                diff = compare;
            }
            console.log("new friend is index " + newFriend);
        }
       // push new friend into friendsarray
       friendsInfo.push(req.body);
       //return resulting new friend to survey modal
        res.json(friendsInfo[newFriend]);

    });


};
