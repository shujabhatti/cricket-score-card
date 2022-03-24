import React from "react";

import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";


const MyCard = ({ match }) => {

  const getMatchCard = () => (
    <div>
      <Card
        style={{
          background: match.dateTimeGMT ? "#18dcff" : "",
          marginTop: 15,
          height: "auto"
        }}
      >
        <CardContent>
          <Grid
          style={{
            background: "#7d5fff",
            padding: "10px",
            borderRadius: "5px",
            color: "#ffffff",
            marginBottom: "5px"
          }} 
          justify="space-between" container spacing={24}>
            <Grid style={{width: "200px"}} item>
              <Typography type="title" color="inherit">
                <b>Status:</b> {match.status}
              </Typography>
            </Grid>

            <Grid item>
              <div>
                <Button raised color="inherit">
                  <b style={{fontSize: "16px"}}>{match.venue}</b>
                </Button>
              </div>
            </Grid>

            <Grid item>
              <div>
                <Button raised color="inherit">
                  {match.matchType}
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid 
            style={{
              background: "#7d5fff",
              padding: "10px",
              borderRadius: "5px",
              color: "#ffffff",
              marginBottom: "5px"
            }}  container justify="center" alignItems="center" spacing={24}>
            <Grid item>
              <Typography variant="h5">{match.teams[0]}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 85 }}
                src={require("../img/vs.png")}
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match.teams[1]}</Typography>
            </Grid>
          </Grid>

          <Grid 
            style={{
              background: "#7d5fff",
              padding: "10px",
              borderRadius: "5px",
              color: "#ffffff",
              marginBottom: "5px"
            }}  container justify="center" alignItems="center" spacing={24}>
            <Grid item>
              <Typography variant="h6"> Runs: <span style={{marginLeft: "20px"}}>{match?.score[0]?.r}</span> </Typography>
              <Typography variant="h6">Score: <span style={{marginLeft: "20px"}}>{match?.score[0]?.w}</span> </Typography>
              <Typography variant="h6">Overs: <span style={{marginLeft: "20px"}}>{match?.score[0]?.o}</span> </Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 85 }}
                src={require("../img/symbol.png")}
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h6"> Runs: <span style={{marginLeft: "20px"}}>{match?.score[1]?.r}</span> </Typography>
              <Typography variant="h6">Score: <span style={{marginLeft: "20px"}}>{match?.score[1]?.w}</span> </Typography>
              <Typography variant="h6">Overs: <span style={{marginLeft: "20px"}}>{match?.score[1]?.o}</span> </Typography>
            </Grid>
          </Grid>

          <Grid
            style={{
              background: "#7d5fff",
              padding: "20px",
              borderRadius: "5px",
              color: "#ffffff"
            }} 
            justify="center" container spacing={24}>
            <Grid item>
              <Typography type="title" color="inherit">
                <b>Starting Time :</b> {match.dateTimeGMT}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <>
      {getMatchCard()}
    </>
  );
};

export default MyCard;