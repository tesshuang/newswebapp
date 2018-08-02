import React, { Component, Fragment } from 'react';
import MCard from "./MCard";
import {Grid, Typography} from '@material-ui/core';

const theme = {
  box: {
    flexGrow: 1,
    margin:10,
  },
};
class CallAPI extends Component {  
  render() {
    let returnnews = this.props.news.map((obj, index) => {
      // console.log("returned",obj);
      return(
        <Fragment key={index}>
          <Grid item xs={12} sm={6} md={3}>        
            <MCard nstate={obj} />
          </Grid>
        </Fragment>
        
      )
    });
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
