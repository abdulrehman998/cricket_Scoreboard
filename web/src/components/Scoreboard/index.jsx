import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../server"
import io from 'socket.io-client';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import img from './../../img/vs.png'




function Scoreboard() {
    const [score, setScore] = useState({})


    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data[0])
            })
    }, [])


    useEffect(() => {
        const socket = io("http://localhost:5001"); // to connect with locally running Socker.io server

        socket.on('connect', function () {
            console.log("connected to server")
        });
        socket.on('disconnect', function (message) {
            console.log("disconnected from server: ", message);
        });
        socket.on('SCORE', function (data) {
            console.log(data);
            setScore(data)
        });

        return () => {
            socket.close();
        };
    }, []);


    return (
        <div style={{ margin: "1rem" }}>

        <h1> Score Board </h1>
        <Stack spacing={2} direction="column">
        <Card sx={{ maxWidth: 1600, backgroundColor: "#F0F2F5" }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <img src="https://upload.wikimedia.org/wikipedia/en/1/10/ICC_Men%27s_T20_World_Cup_2021_logo.svg" alt="" width="30" />
                    </Avatar>
                }
                title={score.tournament}
                subheader="Live Match"
                
                />

            <CardContent style={{ textAlign: "center" }}>
                <Typography variant="h2" color="text.secondary">
                    {score?.team1}   <img
                        style={{ width: 85 }}
                        src={img}
                        alt=""
                    /> {score?.team2}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {score?.wontoss} won the Toss and choose to {score?.toss}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {score?.innings} 
                </Typography>
                <Typography variant="h4">
                    {score?.bat} {score?.runs}/ {score?.wickets}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {score?.batter1}: {score?.batter1runs}* ({score?.batter1balls})  {score?.batter2}: {score?.batter2runs} ({score?.batter2balls})
                </Typography>
                <Typography variant="h5">
                    {score?.overs} Overs
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {score?.bowler} {score?.bowlerwickets}/{score?.bowlerruns} ({score?.bowlerovers})
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Target given by the Opponent is {score?.target} 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>

        </Card>

        </Stack>


</div>


    );
}

export default Scoreboard;


