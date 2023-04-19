const express = require('express')
const router = express.Router()
const{ createAuthor}= require("../controller/authorController")



//---------------------- Author's's APIs ----------------------//
//---------------------- Author Registration(Post API) ----------------------//
router.post("/register", createAuthor)








//---------------------- It will Handle error When You input Wrong Route =====================>>>//
router.all("/**", (req, res) => { return res.status(404).send({ status: false, msg: "This API request is not available!" }) })
//<<<------------------------------------------------------------------->>>//



//----------------------Module Export----------------------//
module.exports = router;
//<<<------------------------------------------------------------------->>>//