const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
var port = 3000;
// module.exports = port;
app.post("/", function (req, res) {
    const wetOrDry = req.body.wetordry;
    const rawOrCooked = req.body.rc;
    const er = req.body.er;
    const vn = req.body.vn;
    const quantity = req.body.qty;
    const description = req.body.fooddesc;
    const userid=req.body.userl;
    axios.post('https://alms-deed-user-default-rtdb.firebaseio.com/Bhopal.json', {
        wetOrDry: wetOrDry,
        rawOrCooked: rawOrCooked,
        er: er,
        vn: vn,
        quantity: quantity,
        description: description + " Category: " +wetOrDry +", "+rawOrCooked+", " +er+", "+vn+", "+quantity,
        userid:userl
    })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
});
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    
});
app.listen(port, function () {
    console.log(`Server is running on ${port}`);
    // port = 4000;
});
