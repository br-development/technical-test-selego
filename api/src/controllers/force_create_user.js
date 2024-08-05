const express = require("express");
const router = express.Router();
const UserObject = require("../models/user");

router.get("/force_create_user", async (req, res) => {
    let user1 = await UserObject.create({ name: 'forced_1', organisation: 'br_development', password: 'password' });
    let user2 = await UserObject.create({ name: 'forced_2', organisation: 'br_development', password: 'password' });

    res.status(200).send({ user1: user1._id, code: 200 });

});

module.exports = router;
