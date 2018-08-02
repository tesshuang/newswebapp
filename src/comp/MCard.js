import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


const styles = {
  card: {
    maxWidth: 345,
    height: 500,
    margin: 10,
    overflowY: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};
class MCard extends React.Component {
   render() {
    // console.log(styles.card.toString().replace(/"{|}"/gi,'"'));
    let cardimg = <CardMedia
        title="Contemplative Reptile"/>
    if(this.props.nstate.urlToImage == null){
      cardimg = <CardMedia
        style={styles.media}
        image={require("../image/news-image.jpg")}
        />
    } else{
      cardimg = <CardMedia
        style={styles.media}
        image={this.props.nstate.urlToImage}/>
    }
       return (
              <div>
                <Card style={styles.card}>
                  {cardimg}
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {this.props.nstate.title}
                    </Typography>
                    <Typography component="p">
                      {this.props.nstate.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" variant="contained" href={this.props.nstate.url} target="_blank">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
       );
   }
}
MCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MCard);