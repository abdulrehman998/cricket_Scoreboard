import axios from 'axios';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../server"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function Dashboard() {

    const [score, setScore] = useState({
        tournament: "",
        innings: "",
        team1: "",
        team2: "",
        bat: "",
        batter1: "",
        batter1runs: "",
        batter1balls: "",
        batter2: "",
        batter2runs: "",
        batter2balls: "",
        bowl: "",
        bowler: "",
        bowlerruns: "",
        bowlerwickets: "",
        bowlerovers: "",
        wickets: "",
        overs: "",
        runs: "",
        toss: "",
        wontoss: "",
        target: "",
    });

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data[0])
            })
    }, [])

    const submit = () => {
        axios.post(`${baseUrl}/api/v1/score`, score)
            .then((res) => {
                console.log("res: ", res.data);

            })
    }


    return (
        <>
            <div style={{ margin: "1rem" }}>

                <h1> Admin Control </h1>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >

                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Tournamnet"
                                variant="standard"
                                value={score.tournament}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, tournament: e.target.value }
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >

                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Innings"
                                variant="standard"
                                value={score.innings}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, innings: e.target.value }
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >

                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Team A"
                                variant="standard"
                                value={score.team1}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, team1: e.target.value }
                                    })
                                }}
                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Team B"
                                variant="standard"
                                value={score.team2}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, team2: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>

                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Runs"
                                type="number"
                                variant="standard"
                                value={score.runs}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, runs: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Wickets"
                                type="number"
                                variant="standard"
                                value={score.wickets}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, wickets: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Overs"
                                type="number"
                                variant="standard"
                                value={score.overs}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, overs: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Batting Team"
                                variant="standard"
                                value={score.bat}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, bat: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Bowling Team"
                                variant="standard"
                                value={score.bowl}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, bowl: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Bowler"
                                variant="standard"
                                value={score.bowler}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, bowler: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Batter 1"
                                variant="standard"
                                value={score.batter1}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, batter1: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                type="number"
                                label="Batter 1 Runs"
                                variant="standard"
                                value={score.batter1runs}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, batter1runs: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Batter 1 Balls"
                                type="number"
                                variant="standard"
                                value={score.batter1balls}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, batter1balls: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Batter 2"
                                variant="standard"
                                value={score.batter2}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, batter2: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                type="number"
                                label="Batter 2 Runs"
                                variant="standard"
                                value={score.batter2runs}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, batter2runs: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>

                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                type="number"
                                label="Batter 2 Balls"
                                variant="standard"
                                value={score.batter2balls}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, batter2balls: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                type="number"
                                label="Bowler's Runs"
                                variant="standard"
                                value={score.bowlerruns}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, bowlerruns: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                type="number"
                                label="Bowler's Wicket"
                                variant="standard"
                                value={score.bowlerwickets}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, bowlerwickets: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                type="number"
                                label="Bowler's Overs"
                                variant="standard"
                                value={score.bowlerovers}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, bowlerovers: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>

                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Target"
                                variant="standard"
                                value={score.target}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, target: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>

                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Team Won Toss"
                                variant="standard"
                                value={score.wontoss}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, wontoss: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>

                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <TextField
                                fullWidth
                                color="primary"
                                id="outlined-basic"
                                label="Toss"
                                variant="standard"
                                value={score.toss}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, toss: e.target.value }
                                    })
                                }}

                            />
                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item md={1}>

                        </Grid>
                        <Grid item xs={12} md={2} >
                            <Button fullWidth variant="contained" onClick={submit}>Post</Button>
                        </Grid>
                        <Grid item md={1}>

                        </Grid>

                    </Grid>
                </Box>



            </div>

        </>
    );
}

export default Dashboard;