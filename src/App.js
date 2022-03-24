import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid } from "@material-ui/core";

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar matchesCount={matches.length} />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
