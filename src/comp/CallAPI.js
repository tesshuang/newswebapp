import React, { Component, Fragment } from 'react';
import MCard from "./MCard";
import { Grid, Typography, Paper } from '@material-ui/core';

const theme = {
  box: {
    flexGrow: 1,
    margin:10,
  },
  paperBox:{
    textAlign: "center",
    margin: "0 auto",
    marginTop:10
  },
  paper:{
    padding:20,
    backgroundColor: "grey",
  }
};
class CallAPI extends Component { 
  render() {
    let returnnews;
    if(this.props.news){
      returnnews = this.props.news.map((obj, index) => {
        return(
          <Fragment key={index}>
            <Grid item xs={12} sm={6} md={3}>        
              <MCard nstate={obj} />
            </Grid>
          </Fragment>
        )
      });
    } else {
      returnnews =
      <div style={theme.paperBox}>
        <Paper elevation={1} style={theme.paper} >
          <Typography variant="headline" component="h3" color>
            Error Request
          </Typography>
        </Paper>
      </div>         

    }

    console.log(this.props.news);
    const newstitle = this.props.category.charAt(0).toUpperCase() +  this.props.category.slice(1); 
    return (
      <div style={theme.box}>
        <Typography variant="display2">
          {newstitle}
        </Typography>
        <Grid container spacing={16}>
            {returnnews}
        </Grid>
      </div>
    );
  }
}

export default CallAPI;
