require('dotenv').config();
// Dependencies
var  express        = require("express")
   , app            = express()
   , cors           = require('cors')
   , mongoose       = require("mongoose")
   , passport       = require("passport")
   , bodyParser     = require("body-parser");

const path = require("path");

// Secured key File
const keys = require('./config/keys');
// UserSchema
require('./models/Users');
// Passport Configuration for Login's Strategy
require('./config/passport')(passport);


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(express.static(path.join(__dirname, "client", "build")));


app.use(require("express-session")({
    secret            : "anything i want i can put here",
    resave            :  false,
    saveUninitialized :  false
    }));

app.use(passport.initialize());
app.use(passport.session());

// global Variables
app.use((req, res, next)=> {
    res.locals.user = req.user || null;
    next();
})

// mongoDB connect
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(error => console.log(error));


const auth = require('./routes/auth');
app.use('/auth', auth);

const user = require('./routes/user');
app.use('/user', user);

const port = process.env.PORT || 3000;
app.listen(port,function(){
     console.log(`server is running at port ${port}`);
});