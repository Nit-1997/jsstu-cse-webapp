var  express        = require("express")
   , app            = express()
   , cors           = require('cors')
   , mongoose       = require("mongoose")
   , User           = require("./models/user")
   , bodyParser     = require("body-parser");

require('dotenv').config();

const path = require("path");
mongoose.connect(process.env.DB_CONN);
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(express.static(path.join(__dirname, "client", "build")));

const jwt = require("jsonwebtoken");

//passport stuff
const passport = require("passport");
const jwtStrategry  = require("./strategies/jwt")
passport.use(jwtStrategry);

const user = require('./routes/user');
const securedRoutes = require('./routes/securedRoutes');

app.use('/', user);
app.use('/', passport.authenticate('jwt', {session: false}), securedRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(process.env.PORT,process.env.IP,function(){
     console.log("app server has started on heroku ");
});

// app.listen(process.env.PORT,function(){
//      console.log("app server has started on"+process.env.PORT);
// });

