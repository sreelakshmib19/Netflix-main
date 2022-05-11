import React from "react";
import "./Series.css";
import List from "./List";
import Navabar from './Navabar'


import {
  actionUrl,
  comedyUrl,
  horrorUrl,
  thrillerUrl,
  animationUrl,
  dramaUrl,
} from "../constants/constant";

// import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


function Series() {
  return (
    <div>
       <Navabar />
      <div className="content">

        <h1>New Streaming Series</h1>
        {/* <List url={horrorUrl} title="Horror" smallCard />
        <List url={animationUrl} title="Animation" smallCard />
        <List url={actionUrl} title="Action" smallCard />
        <List url={thrillerUrl} title="Thriller" />
        <List url={comedyUrl} title="Comedy" smallCard />
        <List url={dramaUrl} title="Drama" smallCard /> */}
        <div className="grid">
        const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      </CardContent>
      </React.Fragment>

    
  );

  </div>
  </div>
  </div>

export default Series;
