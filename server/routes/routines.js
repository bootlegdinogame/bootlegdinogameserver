var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/userSchema');

/* POST routine. */
router.post("/", async (request, response) => {
    //console.log(request.body.username.toString());
    let _username = request.body.username;

    try {
        // let idexists = await user.findOne({
        //     username: _username
        // }).exec();
        // if (!idexists) {
        //     var new_user = new user(request.body);
        //     var result = await new_user.save();
        // } else if (idexists && idexists.password == request.body.password) {

        // }
        let result = await user.findOneAndUpdate({
            username: request.body.username,
            password: request.body.password
        }, {
            score: request.body.score
        }, {
            new: true,
            upsert: true // Make this update into an upsert
        });

        // user.find().sort({
        //     'score': -1
        // }).all((posts) => {
        //     // do something with the array of posts
        // });

        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

/* GET routines listing. */
router.get("/", async (request, response) => {
    try {
        var result = await user.
        find().
        limit(100).
        sort({
            score: -1
        }).
        exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports = router;