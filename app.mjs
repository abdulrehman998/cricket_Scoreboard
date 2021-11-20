import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
const __dirname = path.resolve();
const PORT = process.env.PORT || 5001
const app = express()

mongoose.connect("mongodb+srv://armalik:1234@cluster0.ymiti.mongodb.net/test")


const Score = mongoose.model("Score", {
    tournament: String,
    innings: String,
    team1: String,
    team2: String,
    bat: String,
    batter1: String,
    batter1runs: String,
    batter1balls: String,
    batter2: String,
    batter2runs: String,
    batter2balls: String,
    bowl: String,
    bowler: String,
    bowlerruns: String,
    bowlerwickets: String,
    bowlerovers: String,
    wickets: String,
    overs: String,
    runs: String,
    toss: String,
    wontoss: String,
    target: String,
})


app.use(express.json())


app.use(cors({
    origin: true,
}))

app.use('/', express.static(path.join(__dirname, 'web/build')))
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})




app.post("/api/v1/score", (req, res) => {
    const newScore = new Score({
        tournament: req.body.tournament,
        innings: req.body.innings,
        team1: req.body.team1,
        team2: req.body.team2,
        overs: req.body.overs,
        runs: req.body.runs,
        wickets: req.body.wickets,
        toss: req.body.toss,
        wontoss: req.body.wontoss,
        bat: req.body.bat,
        bowl: req.body.bowl,
        batter1: req.body.batter1,
        batter2: req.body.batter2,
        bowler: req.body.bowler,
        batter1runs: req.body.batter1runs,
        batter1balls: req.body.batter1balls,
        batter2runs: req.body.batter2runs,
        batter2balls: req.body.batter2balls,
        bowlerwickets: req.body.bowlerwickets,
        bowlerruns: req.body.bowlerruns,
        bowlerovers:req.body.bowlerovers,
        target: req.body.target,


    });
    newScore.save().then(() => {
        console.log("Score created");
        
        io.emit("SCORE", {
            tournament: req.body.tournament,
            innings: req.body.innings,
            team1: req.body.team1,
            team2: req.body.team2,
            overs: req.body.overs,
            runs: req.body.runs,
            wickets: req.body.wickets,
            toss: req.body.toss,
            wontoss: req.body.wontoss,
            bat: req.body.bat,
            bowl: req.body.bowl,
            batter1: req.body.batter1,
            batter2: req.body.batter2,
            bowler: req.body.bowler,
            batter1runs: req.body.batter1runs,
            batter1balls: req.body.batter1balls,
            batter2runs: req.body.batter2runs,
            batter2balls: req.body.batter2balls,
            bowlerwickets: req.body.bowlerwickets,
            bowlerruns: req.body.bowlerruns,
            bowlerovers:req.body.bowlerovers,
            target: req.body.target,


        });
        res.send("Score Created");
    });
});


app.get("/api/v1/score", (req, res) => {

    Score.find({})
        .sort({ _id: "desc" })
        .exec(function (err, data) {
            console.log(data)
            res.send(data);
        });
});

app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
    // res.redirect("/")
})


const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*", } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});




server.listen(PORT, function () {
    console.log("server is running on", PORT);
})